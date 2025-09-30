'use client';

import { useState, useEffect } from 'react';
import { usePostHog } from 'posthog-js/react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');
  const [mathProblem, setMathProblem] = useState({ num1: 0, num2: 0, answer: 0 });
  const posthog = usePostHog();

  const projectTypes = [
    'Smart Contract Audit',
    'DeFi Protocol Security',
    'NFT Security Review',
    'Multi-Chain Protocol',
    'Other'
  ];

  const inputClassName = "w-full h-10 px-3 bg-white/5 border border-white/20 text-white text-sm focus:outline-none focus:border-blue-400 transition-colors rounded";

  // Generate random math problem on component mount
  useEffect(() => {
    const num1 = Math.floor(Math.random() * 91) + 10; // 10-100
    const num2 = Math.floor(Math.random() * 91) + 10; // 10-100
    setMathProblem({ num1, num2, answer: num1 + num2 });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    
    // Simple math validation
    if (parseInt(formData.get('mathAnswer')) !== mathProblem.answer) {
      setSubmitMessage(`Please answer the math question correctly (${mathProblem.num1} + ${mathProblem.num2} = ${mathProblem.answer})`);
      setSubmitStatus('error');
      setIsSubmitting(false);
      
      // Clear error after 3 seconds
      setTimeout(() => {
        setSubmitMessage('');
        setSubmitStatus('');
      }, 3000);
      return;
    }

    // Convert FormData to object and add required fields
    const formObject = {
      access_key: '131a1187-97d9-4fba-a9d2-1be46206a327',
      subject: 'New Contact Form Submission - Mirage Audits'
    };
    
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formObject)
      });

      let result = await response.json();
      
      if (response.status == 200) {
        // PostHog tracking
        posthog?.capture('contact_form_submitted', {
          project_type: formObject.projectType,
          has_company: !!formObject.company,
          location: 'contact_section'
        });

        setSubmitMessage('Thank you for your inquiry! We will get back to you within 24 hours.');
        setSubmitStatus('success');
        e.target.reset();
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitMessage('');
          setSubmitStatus('');
        }, 5000);
      } else {
        console.error('Web3Forms Error:', result);
        setSubmitMessage(result.message || 'Something went wrong. Please try again.');
        setSubmitStatus('error');
        
        // Clear error after 5 seconds
        setTimeout(() => {
          setSubmitMessage('');
          setSubmitStatus('');
        }, 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitMessage('Network error. Please check your connection and try again.');
      setSubmitStatus('error');
      
      // Clear error after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
        setSubmitStatus('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-16 sm:py-20 bg-black" id="contact" style={{backgroundImage: 'url(/images/backgrounds/noise-bg.png)', backgroundSize: 'cover', backgroundRepeat: 'repeat'}}>
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Your <span className="text-blue-400">Security Audit</span>
          </h2>
          <p className="text-base text-white/70 max-w-2xl mx-auto">
            Ready to secure your Web3 project? Our expert team provides fast, 
            affordable audits for Solana, Sui, Cardano, and Layer 2 protocols.
          </p>
        </div>

        {/* Contact Information */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center text-sm">
            <div>
              <span className="text-white/70">Security Inquiries: </span>
              <a 
                href="mailto:security@mirageaudits.com" 
                className="text-blue-300 hover:text-blue-200 transition-colors underline"
                onClick={() => posthog?.capture('email_clicked', { email_type: 'security' })}
              >
                security@mirageaudits.com
              </a>
            </div>
          </div>
        </div>

        {/* Compact Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className={inputClassName}
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className={inputClassName}
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  className={inputClassName}
                  placeholder="Company name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Project Type
                </label>
                <select
                  name="projectType"
                  className={inputClassName}
                >
                  <option value="" className="bg-black">Select type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type} className="bg-black">{type}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Additional Information
              </label>
              <textarea
                name="message"
                rows={3}
                className="w-full px-3 py-2 bg-white/5 border border-white/20 text-white text-sm focus:outline-none focus:border-blue-400 transition-colors resize-none rounded"
                placeholder="Tell us about your project, timeline, or specific security concerns..."
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  What's {mathProblem.num1} + {mathProblem.num2}? *
                </label>
                <input
                  type="text"
                  name="mathAnswer"
                  required
                  className={inputClassName}
                  placeholder="Answer"
                  inputMode="numeric"
                  pattern="[0-9]*"
                />
              </div>
              
              <div className="flex items-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-10 px-4 bg-blue-600 text-white text-sm font-medium border border-blue-600 hover:bg-blue-700 hover:border-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed rounded"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Inquiry'}
                </button>
              </div>
            </div>

          </form>
          
          {/* Success/Error Message */}
          {submitMessage && (
            <div className={`mt-4 p-3 rounded text-center text-sm transition-all duration-300 ${
              submitStatus === 'success' 
                ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                : 'bg-red-500/10 border border-red-500/20 text-red-400'
            }`}>
              {submitMessage}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
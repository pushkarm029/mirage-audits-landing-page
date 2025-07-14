'use client';

import { useState } from 'react';
import { usePostHog } from 'posthog-js/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    website: '',
    company: '',
    services: [],
    additionalHelp: '',
    mathAnswer: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const posthog = usePostHog();

  const serviceOptions = [
    'Smart Contract Audits',
    'DeFi Protocol Security',
    'Web3 Security Advisory',
    'Multi-Chain Auditing',
    'Security Risk Assessment',
    'Pre-Launch Security Review',
    'Continuous Security Monitoring',
    'Layer 1/Layer 2 Auditing',
    'Bridge Security Assessment',
    'NFT Security Audit'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        services: checked 
          ? [...prev.services, value]
          : prev.services.filter(service => service !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simple math validation
    if (formData.mathAnswer !== '8') {
      alert('Please answer the math question correctly.');
      setIsSubmitting(false);
      return;
    }

    // PostHog tracking
    posthog?.capture('contact_form_submitted', {
      services_selected: formData.services,
      has_company: !!formData.company,
      has_website: !!formData.website,
      location: 'contact_section'
    });

    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your inquiry! We will get back to you within 24 hours.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        website: '',
        company: '',
        services: [],
        additionalHelp: '',
        mathAnswer: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-black" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-sm text-blue-300 font-jetbrains-mono mb-4 uppercase tracking-wider">
            // Contact Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-space-grotesk">
            Get Your Security Audit
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-inter">
            Ready to secure your Web3 project? Our expert team provides fast, 
            affordable audits for Solana, Sui, Cardano, and Layer 2 protocols.
          </p>
        </div>

        {/* Contact Information */}
        <div className="text-center mb-12">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-lg">
            <div>
              <span className="text-white/70 font-inter">Security Inquiries: </span>
              <a 
                href="mailto:security@mirageaudits.com" 
                className="text-blue-300 hover:text-blue-200 transition-colors underline font-jetbrains-mono"
                onClick={() => posthog?.capture('email_clicked', { email_type: 'security' })}
              >
                security@mirageaudits.com
              </a>
            </div>
            <div>
              <span className="text-white/70 font-inter">General Inquiries: </span>
              <a 
                href="mailto:hello@mirageaudits.com" 
                className="text-blue-300 hover:text-blue-200 transition-colors underline font-jetbrains-mono"
                onClick={() => posthog?.capture('email_clicked', { email_type: 'general' })}
              >
                hello@mirageaudits.com
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 gap-8">
            
            {/* Personal Information */}
            <div className="space-y-6">
              
              <div>
                <label className="block text-xl font-medium text-white mb-2 font-inter">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full h-16 px-4 bg-black border-2 border-blue-500 text-blue-300 text-lg focus:outline-none focus:border-blue-400 transition-colors font-jetbrains-mono"
                />
              </div>

              <div>
                <label className="block text-xl font-medium text-white mb-2 font-inter">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full h-16 px-4 bg-black border-2 border-blue-500 text-blue-300 text-lg focus:outline-none focus:border-blue-400 transition-colors font-jetbrains-mono"
                />
              </div>

              <div>
                <label className="block text-xl font-medium text-white mb-2 font-inter">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full h-16 px-4 bg-black border-2 border-blue-500 text-blue-300 text-lg focus:outline-none focus:border-blue-400 transition-colors font-jetbrains-mono"
                />
              </div>

              <div>
                <label className="block text-xl font-medium text-white mb-2 font-inter">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full h-16 px-4 bg-black border-2 border-blue-500 text-blue-300 text-lg focus:outline-none focus:border-blue-400 transition-colors font-jetbrains-mono"
                />
              </div>

              <div>
                <label className="block text-xl font-medium text-white mb-2 font-inter">
                  Website URL
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full h-16 px-4 bg-black border-2 border-blue-500 text-blue-300 text-lg focus:outline-none focus:border-blue-400 transition-colors font-jetbrains-mono"
                />
              </div>

              <div>
                <label className="block text-xl font-medium text-white mb-2 font-inter">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full h-16 px-4 bg-black border-2 border-blue-500 text-blue-300 text-lg focus:outline-none focus:border-blue-400 transition-colors font-jetbrains-mono"
                />
              </div>

            </div>

            {/* Services and Additional Information */}
            <div className="space-y-6">
              
              <div>
                <label className="block text-xl font-medium text-white mb-4 font-inter">
                  Services Interested In
                </label>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {serviceOptions.map((service) => (
                    <label key={service} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="services"
                        value={service}
                        checked={formData.services.includes(service)}
                        onChange={handleInputChange}
                        className="w-6 h-6 border-2 border-blue-500 bg-black text-blue-500 focus:ring-blue-400 focus:ring-2"
                      />
                      <span className="text-white/80 font-inter">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xl font-medium text-white mb-2 font-inter">
                  What else can we help with?
                </label>
                <textarea
                  name="additionalHelp"
                  value={formData.additionalHelp}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-black border-2 border-blue-500 text-blue-300 text-lg focus:outline-none focus:border-blue-400 transition-colors font-jetbrains-mono resize-none"
                  placeholder="Tell us about your project, timeline, or specific security concerns..."
                />
              </div>

              <div>
                <label className="block text-xl font-medium text-white mb-2 font-inter">
                  What's 3 + 5? *
                </label>
                <input
                  type="text"
                  name="mathAnswer"
                  value={formData.mathAnswer}
                  onChange={handleInputChange}
                  required
                  className="w-full h-16 px-4 bg-black border-2 border-blue-500 text-blue-300 text-lg focus:outline-none focus:border-blue-400 transition-colors font-jetbrains-mono"
                />
              </div>

            </div>

            {/* Submit Button */}
            <div className="lg:col-span-2 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="relative inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-lg border-2 border-blue-500 hover:bg-blue-700 hover:border-blue-400 transition-all duration-300 font-inter font-medium text-lg disabled:opacity-50"
              >
                <div className="absolute inset-0 rounded-lg border-2 border-blue-400 animate-pulse"></div>
                <span className="relative">
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </span>
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
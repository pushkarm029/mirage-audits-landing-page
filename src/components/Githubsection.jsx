import Image from "next/image";
import { Zap, Grid3X3, PieChart, Users, Settings, Lightbulb } from "lucide-react";

export default function AnalyticsLanding() {
  return (
    <div className="py-32 bg-black text-white">
      <div className="max-w-6xl mx-auto relative text-center flex flex-col items-center px-6">
        {/* Decorative Image */}
        <div className="absolute top-0 right-0 w-40 h-40 opacity-50">
          <Image
            src="/Decorative-element.png"
            alt="Decorative element"
            width={160}
            height={160}
            className="object-contain"
            aria-hidden="true"
          />
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">
          As simple as it gets with analytics.
        </h1>

        {/* Testimonial */}
        <div className="max-w-3xl mb-12">
          <p className="text-lg text-gray-400">
            &quot;Previously, I had all of my sites hooked up to Google Analytics, like most people.<br />
            <span className="bg-blue-500 text-blue-200 px-1 mx-1 rounded whitespace-nowrap">
              But I never looked at the reports.
            </span>{" "}
            Now, I find myself dropping in and looking at the stats several times a day. It&apos;s very easy to digest and understand.&quot;
          </p>

          {/* Author Details */}
          <div className="flex items-center mt-6 justify-center">
            <Image
              src="/path/to/your/author-image.jpg"
              alt="Chris Williams"
              width={48}
              height={48}
              className="rounded-full mr-4"
            />
            <div>
              <h3 className="font-semibold text-sm">Chris Williams</h3>
              <p className="text-sm text-gray-500">Founder, Cloudscope</p>
            </div>
          </div>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 w-full">
          {[
            { Icon: Zap, title: "Ultra-Low Latency", description: "Experience lightning-fast response times with near-zero lag." },
            { Icon: Grid3X3, title: "Zero Downtime", description: "Enjoy uninterrupted gaming with our always-online infrastructure." },
            { Icon: PieChart, title: "Instant Access", description: "No waiting—jump straight into the action anytime, anywhere." },
            { Icon: Users, title: "Cloud-Powered Performance", description: "High-end gaming without expensive hardware." },
            { Icon: Settings, title: "Seamless Multiplayer", description: "Smooth, real-time gameplay with friends worldwide." },
            { Icon: Lightbulb, title: "State-of-the-Art Security", description: "Advanced encryption and anti-cheat systems for fair play." }
          ].map(({ Icon, title, description }, index) => (
            <div 
              key={index} 
              className="relative p-6 bg-transparent rounded-md text-left transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(0,132,255,0.5)]"
            >
              {/* Background Icon */}
              <Icon className="absolute inset-0 w-full h-full text-blue-600 opacity-25 scale-1 stroke-01" />

              {/* Text Content */}
              <h2 className="text-xl font-semibold mb-3 relative z-10">{title}</h2>
              <p className="text-lg text-gray-400 relative z-10">{description}</p>

              {/* Corner Borders */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-4 border-l-4 border-white"></div>
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-4 border-r-4 border-white"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

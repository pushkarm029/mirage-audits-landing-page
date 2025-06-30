import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

function TraditionalAuditDemo() {
  return (
    <div className="relative">
      {/* Background glow effect - red/orange for traditional */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl blur-xl"></div>
      
      <Terminal className="relative w-full h-auto max-h-none bg-black/90 border-red-600/50 shadow-2xl text-base">
        <TypingAnimation>&gt; traditional-audit --start ./contracts</TypingAnimation>

        <AnimatedSpan delay={1000} className="text-green-500">
          <span>✔ Contract files received</span>
        </AnimatedSpan>

        <AnimatedSpan delay={1500} className="text-yellow-500">
          <span>⏳ Added to audit queue... (Position: 47)</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2500} className="text-yellow-500">
          <span>⏳ Waiting for senior auditor availability...</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4000} className="text-yellow-500">
          <span>⏳ Still in review (Week 4 of 8)...</span>
        </AnimatedSpan>

        <AnimatedSpan delay={5500} className="text-blue-400">
          <span>📋 Initial findings available (Week 6)...</span>
        </AnimatedSpan>

        <AnimatedSpan delay={7000} className="text-green-500">
          <span>✔ Audit complete! PDF report delivered</span>
        </AnimatedSpan>

        <AnimatedSpan delay={8000} className="text-red-400">
          <span>🚨 Found 47 vulnerabilities</span>
        </AnimatedSpan>

        <AnimatedSpan delay={8500} className="text-red-400">
          <span>❌ No fix guidance provided</span>
        </AnimatedSpan>

        <AnimatedSpan delay={9000} className="text-orange-400">
          <span>💸 Invoice: $75,000</span>
        </AnimatedSpan>

        <TypingAnimation delay={9500} className="text-gray-400">
          "Good luck fixing these yourself!" 🤷‍♂️
        </TypingAnimation>

        <AnimatedSpan delay={10500} className="text-red-400">
          <span>🚫 No ongoing support</span>
          <span className="pl-2 text-gray-400">• No fix verification</span>
          <span className="pl-2 text-gray-400">• No monitoring</span>
        </AnimatedSpan>

        <TypingAnimation delay={11500} className="text-red-300">
          Total Time: 8 weeks | Total Cost: $75,000
        </TypingAnimation>
      </Terminal>
    </div>
  );
}

function MirageAuditDemo() {
  return (
    <div className="relative">
      {/* Background glow effect - blue/purple for Mirage */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl"></div>
      
      <Terminal className="relative w-full h-auto max-h-none bg-black/90 border-blue-600/50 shadow-2xl text-base">
        <TypingAnimation>&gt; mirage-audit --scan ./contracts --chain solana</TypingAnimation>

        <AnimatedSpan delay={1000} className="text-blue-400">
          <span>🔍 Initializing security scan...</span>
        </AnimatedSpan>

        <AnimatedSpan delay={1500} className="text-green-500">
          <span>✔ Contract files detected: 12 files (2 minutes)</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2000} className="text-green-500">
          <span>✔ AI vulnerability detection: 50+ attack vectors</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2500} className="text-yellow-500">
          <span>⚠ Found 3 critical vulnerabilities</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3000} className="text-green-500">
          <span>✔ Security expert assigned: @alex_solana_security</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3500} className="text-cyan-400">
          <span>💡 Fix guidance with code examples provided</span>
        </AnimatedSpan>

        <TypingAnimation delay={4000} className="text-purple-400">
          &gt; pair-programming-session --vulnerability="reentrancy"
        </TypingAnimation>

        <AnimatedSpan delay={5000} className="text-green-500">
          <span>✔ Fix implemented with our guidance</span>
        </AnimatedSpan>

        <AnimatedSpan delay={5500} className="text-green-500">
          <span>✔ Fix verified: Vulnerability resolved</span>
        </AnimatedSpan>

        <AnimatedSpan delay={6000} className="text-green-500">
          <span>✔ Re-audit complete: 98/100 security score</span>
        </AnimatedSpan>

        <AnimatedSpan delay={6500} className="text-green-500">
          <span>✔ Real-time monitoring activated</span>
        </AnimatedSpan>

        <AnimatedSpan delay={7000} className="text-blue-300">
          <span>📄 Investor-ready report generated</span>
        </AnimatedSpan>

        <TypingAnimation delay={7500} className="text-emerald-400">
          🎉 Ready to ship with confidence!
        </TypingAnimation>

        <AnimatedSpan delay={8500} className="text-green-300">
          <span>💰 Monthly cost: $1,000</span>
          <span className="pl-2 text-gray-400">• Ongoing support included</span>
          <span className="pl-2 text-gray-400">• 24/7 monitoring</span>
        </AnimatedSpan>

        <TypingAnimation delay={9500} className="text-green-400">
          Total Time: 48 hours | Monthly Cost: $1,000
        </TypingAnimation>
      </Terminal>
    </div>
  );
}

export function AuditComparison() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Traditional Audits */}
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-red-300 mb-2">Traditional Audit Firms</h3>
            <p className="text-red-200/70 text-sm">The enterprise experience you're avoiding</p>
          </div>
          <TraditionalAuditDemo />
        </div>

        {/* Mirage Audits */}
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-300 mb-2">Mirage Audits</h3>
            <p className="text-blue-200/70 text-sm">Built for builders who can't wait</p>
          </div>
          <MirageAuditDemo />
        </div>
      </div>

    </div>
  );
}
'use client';

// Simple security icons that just spin around
const SecurityIcons = {
  shield: () => (
    <svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1L3 5v6c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V5l-9-4z"/>
    </svg>
  ),
  lock: () => (
    <svg className="w-8 h-8 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM15.1 8H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2z"/>
    </svg>
  ),
  scan: () => (
    <svg className="w-8 h-8 text-green-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.5 6.5v3h-3v-3h3M11 5H5v6h6V5zm-1.5 9.5v3h-3v-3h3M11 13H5v6h6v-6zm6.5-6.5v3h-3v-3h3M19 5h-6v6h6V5zm-6.5 9.5v3h-3v-3h3M13 13h6v6h-6v-6zm-2 4h2v2h-2v-2z"/>
    </svg>
  ),
};

export default function SecurityAnimation() {
  return (
    <div className="h-fit relative ml-auto md:w-2/5 flex items-center justify-center md:my-[93px]">
      <div className="relative w-64 h-64">
        
        {/* Central M logo */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center border border-blue-400/30">
            <span className="text-blue-400 font-bold text-3xl">M</span>
          </div>
        </div>

        {/* Spinning outer ring */}
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ animation: 'spin-slow 20s linear infinite' }}
        >
          <div className="relative w-44 h-44">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-400/30">
                <SecurityIcons.shield />
              </div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center border border-cyan-400/30">
                <SecurityIcons.lock />
              </div>
            </div>
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center border border-green-400/30">
                <SecurityIcons.scan />
              </div>
            </div>
            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-400/30">
                <SecurityIcons.scan />
              </div>
            </div>
          </div>
        </div>

        {/* Spinning inner ring - opposite direction */}
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ animation: 'spin-slow 15s linear infinite reverse' }}
        >
          <div className="relative w-28 h-28">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center border border-red-400/30">
                <span className="text-red-400 text-sm">🛡️</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
              <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center border border-yellow-400/30">
                <span className="text-yellow-400 text-sm">🔒</span>
              </div>
            </div>
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-8 h-8 bg-pink-500/20 rounded-full flex items-center justify-center border border-pink-400/30">
                <span className="text-pink-400 text-sm">🔍</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
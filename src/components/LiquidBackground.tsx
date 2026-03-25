export default function LiquidBackground() {
  return (
    <>
      {/* SVG filter — feTurbulence warps the blobs organically in real time */}
      <svg
        aria-hidden="true"
        style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
      >
        <defs>
          <filter
            id="liquid-distort"
            x="-40%"
            y="-40%"
            width="180%"
            height="180%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.009 0.006"
              numOctaves="4"
              seed="12"
              result="warp"
            >
              <animate
                attributeName="baseFrequency"
                dur="32s"
                repeatCount="indefinite"
                values="0.009 0.006;0.015 0.011;0.008 0.013;0.013 0.007;0.011 0.009;0.009 0.006"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="warp"
              scale="90"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Blob layer — filter applied to the whole container */}
      <div className="lb-container">
        <div className="lb lb-a" />
        <div className="lb lb-b" />
        <div className="lb lb-c" />
        <div className="lb lb-d" />
        <div className="lb lb-e" />
      </div>

      {/* Radial vignette — keeps edges dark, not filtered */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 25%, rgba(14,14,14,0.75) 65%, rgba(14,14,14,1) 100%)',
        }}
      />
    </>
  )
}

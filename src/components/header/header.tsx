interface HeaderProps {
  caught: number;
  total: number;
}

export function Header({ caught, total }: HeaderProps) {
  const progress = total > 0 ? (caught / total) * 100 : 0;

  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      {/* 2px red accent at top */}
      <div className="h-[2px] w-full bg-pokeball-red" />

      <div className="bg-linear-to-b from-snorlax-body-dark to-snorlax-body px-4 pb-4 pt-3">
        {/* Title bar */}
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {/* Blue lens */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <defs>
                <radialGradient
                  id="lens-gradient"
                  cx="40%"
                  cy="35%"
                  r="50%"
                >
                  <stop offset="0%" stopColor="#b8e4f0" />
                  <stop offset="50%" stopColor="#7ec8e3" />
                  <stop offset="100%" stopColor="#4a9ab5" />
                </radialGradient>
              </defs>
              <circle cx="12" cy="12" r="11" fill="url(#lens-gradient)" />
              <circle cx="8" cy="8" r="3" fill="white" opacity="0.4" />
            </svg>
            <span className="text-lg font-bold tracking-tight">
              <span className="text-snorlax-belly">Snorlax</span>
              <span className="text-dex-cyan">Dex</span>
            </span>
          </div>
          {/* RGB LEDs */}
          <div className="flex items-center gap-1.5">
            <div className="h-1 w-1 rounded-full bg-pokeball-red" />
            <div className="h-1 w-1 rounded-full bg-led-gold" />
            <div className="h-1 w-1 rounded-full bg-led-green" />
          </div>
        </div>

        {/* Giant counter */}
        <div
          className="flex items-center justify-center gap-2"
          aria-live="polite"
          aria-atomic="true"
        >
          <div className="flex flex-col items-center">
            <span className="font-mono text-[38px] font-bold leading-none text-pokeball-red">
              {caught}
            </span>
            <span className="mt-1 font-mono text-[10px] tracking-[0.2em] text-snorlax-belly/[0.55]">
              CAUGHT
            </span>
          </div>
          <span className="mb-3 font-mono text-[16px] leading-none text-snorlax-belly/[0.35]">
            /
          </span>
          <div className="flex flex-col items-center">
            <span className="font-mono text-[38px] font-bold leading-none text-snorlax-belly/[0.38]">
              {total}
            </span>
            <span className="mt-1 font-mono text-[10px] tracking-[0.2em] text-snorlax-belly/[0.38]">
              TOTAL
            </span>
          </div>
        </div>
      </div>

      {/* Progress line */}
      <div className="h-[2px] w-full bg-snorlax-body">
        <div
          data-testid="progress-bar"
          className="h-full bg-pokeball-red transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </header>
  );
}

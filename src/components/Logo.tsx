interface LogoProps {
  className?: string;
  showText?: boolean;
  textClassName?: string;
}

export function Logo({ className = "w-8 h-8", showText = true, textClassName = "text-xl" }: LogoProps) {
  return (
    <div className="flex items-center gap-2">
      <svg
        className={className}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circle with gradient */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" rx="20" fill="url(#logoGradient)" />
        
        {/* Code brackets < > */}
        <path
          d="M35 30 L20 50 L35 70"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M65 30 L80 50 L65 70"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Forward slash / in the middle */}
        <path
          d="M55 25 L45 75"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      {showText && (
        <span className={textClassName}>Code Better World</span>
      )}
    </div>
  );
}

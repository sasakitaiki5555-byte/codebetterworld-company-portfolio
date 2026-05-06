/** Figma brand mark — fixed brand fills (multicolor). */
export function FigmaIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        fill="#F24E1E"
        d="M12 0H8C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8H12V0Z"
      />
      <path
        fill="#FF7262"
        d="M20 4C20 6.20914 18.2091 8 16 8C13.7909 8 12 6.20914 12 4C12 1.79086 13.7909 0 16 0C18.2091 0 20 1.79086 20 4Z"
      />
      <path
        fill="#A259FF"
        d="M12 8H8C5.79086 8 4 9.79086 4 12C4 14.2091 5.79086 16 8 16H12V8Z"
      />
      <path
        fill="#1ABCFE"
        d="M20 12C20 14.2091 18.2091 16 16 16H12V8H16C18.2091 8 20 9.79086 20 12Z"
      />
      <path
        fill="#0ACF83"
        d="M8 24C10.2091 24 12 22.2091 12 20V16H8C5.79086 16 4 17.7909 4 20C4 22.2091 5.79086 24 8 24Z"
      />
    </svg>
  );
}

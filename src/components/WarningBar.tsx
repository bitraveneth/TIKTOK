export default function WarningBar() {
  return (
    <div
      role="region"
      aria-label="Health warning"
      className="fixed inset-x-0 top-0 z-[60] h-9 bg-brand-ink text-brand-cream"
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-center gap-2 px-4 text-center sm:px-6 lg:px-8">
        <span
          aria-hidden
          className="hidden h-4 w-4 flex-shrink-0 items-center justify-center rounded-sm bg-brand-red sm:inline-flex"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-3 w-3 text-brand-cream"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 9v4" />
            <circle cx="12" cy="17" r="0.5" />
          </svg>
        </span>
        <p className="truncate text-[11px] leading-none tracking-[0.04em] sm:text-xs">
          <span className="font-bold uppercase tracking-[0.18em] text-brand-red">
            Warning:
          </span>{" "}
          <span className="hidden sm:inline">
            This product contains nicotine. Nicotine is an addictive chemical.
          </span>
          <span className="sm:hidden">Contains nicotine — addictive.</span>
        </p>
      </div>
    </div>
  );
}

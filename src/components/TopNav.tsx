import { Printer } from 'lucide-react';

interface TopNavProps {
  onPrint: () => void;
}

export function TopNav({ onPrint }: TopNavProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-white/95 backdrop-blur-sm print:hidden">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-8 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-base font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-900 text-xs font-extrabold text-white">
            MD
          </span>
          <span>Malik Danish</span>
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600"
        >
          <a
            href="#summary"
            className="whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-blue-700 hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
          >
            Summary
          </a>
          <a
            href="#skills"
            className="whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-blue-700 hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-blue-700 hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-blue-700 hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
          >
            Projects &amp; Games
          </a>
        </nav>

        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={onPrint}
            className="inline-flex min-h-[38px] items-center gap-2 rounded-lg bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-white whitespace-nowrap shrink-0 shadow-2xs transition-all duration-150 hover:bg-slate-800 hover:shadow-xs active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 cursor-pointer"
          >
            <Printer className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Save as PDF / Print</span>
          </button>
        </div>
      </div>
    </header>
  );
}

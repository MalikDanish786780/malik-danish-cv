import { Printer } from 'lucide-react';
import type { CandidateProfile } from '../data/portfolioData';

interface DashboardFooterProps {
  profile: CandidateProfile;
  onPrint: () => void;
}

export function DashboardFooter({ profile, onPrint }: DashboardFooterProps) {
  return (
    <footer className="mt-10 border-t border-slate-200/90 pt-6 text-xs text-slate-500 print:hidden">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-slate-800">
            {profile.name}
          </p>
          <p className="mt-0.5 text-slate-500">
            Cross-Platform App &amp; Game Developer — Flutter, Dart, Android Studio, Kotlin, React &amp; AI Studio.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-1.5 font-medium text-slate-700 transition-colors hover:text-red-700"
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
              <path
                fill="#4285F4"
                d="M22 6v12c0 1.1-.9 2-2 2h-2V9.3l-6 4.5-6-4.5V20H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h.5L12 9.7 19.5 4H20c1.1 0 2 .9 2 2z"
              />
              <path fill="#34A853" d="M18 20h2c1.1 0 2-.9 2-2V6c0-.8-.5-1.5-1.2-1.8L18 6.3V20z" />
              <path fill="#FBBC04" d="M2 6v12c0 1.1.9 2 2 2h2V6.3L3.2 4.2C2.5 4.5 2 5.2 2 6z" />
              <path
                fill="#EA4335"
                d="M18 9.3V6.3l2.8-2.1C20.5 4.1 20.3 4 20 4h-.5L12 9.7 4.5 4H4c-.3 0-.5.1-.8.2L6 6.3v3l6 4.5 6-4.5z"
              />
            </svg>
            <span>{profile.email}</span>
          </a>
          <button
            type="button"
            onClick={onPrint}
            className="inline-flex items-center gap-1.5 font-semibold text-blue-700 transition-colors hover:text-blue-800 cursor-pointer"
          >
            <Printer className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Save as PDF</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

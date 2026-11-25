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
            {profile.name} · {profile.location}
          </p>
          <p className="mt-0.5 text-slate-500">
            Cross-Platform App &amp; Game Developer — Flutter, Dart, Android Studio, Kotlin, React &amp; AI Studio.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="font-medium text-slate-700 transition-colors hover:text-blue-700"
          >
            {profile.email}
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

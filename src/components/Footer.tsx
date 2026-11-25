import { Printer } from 'lucide-react';
import type { CandidateProfile } from '../data/portfolioData';

interface FooterProps {
  profile: CandidateProfile;
  onPrint: () => void;
}

export function Footer({ profile, onPrint }: FooterProps) {
  return (
    <footer className="mt-12 border-t border-slate-200 pt-6 text-xs text-slate-500 print:hidden">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-slate-700">
            {profile.name} · {profile.location}
          </p>
          <p className="mt-0.5">
            Cross-Platform App &amp; Game Developer portfolio and live CV.
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

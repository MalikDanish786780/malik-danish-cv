import {
  ExternalLink,
  FolderOpen,
  Gamepad2,
  Printer,
} from 'lucide-react';
import type { CandidateProfile } from '../data/portfolioData';

interface DashboardHeaderProps {
  profile: CandidateProfile;
  onPrint: () => void;
}

function GmailIcon({ className = 'h-3.5 w-3.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
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
  );
}

function WhatsAppIcon({ className = 'h-3.5 w-3.5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.766.453 3.484 1.328 5l-1.406 5.141 5.266-1.375c1.469.797 3.109 1.219 4.781 1.219 5.516 0 9.969-4.453 9.969-9.969S17.547 2 12.031 2zm5.813 14.125c-.25.703-1.438 1.344-2 1.422-.516.078-1.188.109-1.922-.125-.453-.141-1.031-.344-1.766-.656-3.094-1.344-5.109-4.469-5.266-4.672-.156-.203-1.266-1.688-1.266-3.219s.797-2.281 1.078-2.594c.281-.313.609-.391.813-.391.203 0 .406.016.578.016.188 0 .438-.078.688.531.25.609.859 2.094.938 2.25.078.156.125.344.031.547-.094.203-.141.328-.297.5-.156.172-.313.391-.453.516-.156.141-.313.297-.141.594.172.297.781 1.281 1.672 2.078 1.156 1.016 2.125 1.328 2.422 1.484.297.156.469.125.641-.078.172-.203.75-.875.953-1.172.203-.297.406-.25.672-.156.266.094 1.719.813 2.016.953.297.141.484.219.563.344.078.125.078.719-.172 1.422z" />
    </svg>
  );
}

export function DashboardHeader({ profile, onPrint }: DashboardHeaderProps) {
  const whatsappNumber = profile.whatsapp.replace(/[^\d]/g, '');
  const whatsappHref = `https://wa.me/${whatsappNumber}`;

  return (
    <>
      {/* Sticky Top Navigation Bar (Screen Only) */}
      <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-white/95 backdrop-blur-sm print:hidden">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-2.5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <a
              href="#top"
              className="flex items-center gap-2 font-display text-sm font-bold tracking-tight text-slate-950 focus-visible:outline-2 focus-visible:outline-blue-700"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-slate-900 to-blue-900 font-display text-xs font-bold text-white shadow-xs">
                MD
              </span>
              <span className="font-semibold text-slate-900">Malik Danish</span>
            </a>
            <span className="hidden sm:inline text-xs font-medium text-slate-400">/</span>
            <span className="hidden sm:inline text-xs text-slate-500">
              Developer Analytics Portfolio
            </span>
          </div>

          <nav
            aria-label="Dashboard Section Navigation"
            className="hidden lg:flex items-center gap-5 text-xs font-semibold text-slate-600"
          >
            <a
              href="#overview"
              className="transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-blue-700"
            >
              Metrics
            </a>
            <a
              href="#analytics"
              className="transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-blue-700"
            >
              Analytics
            </a>
            <a
              href="#skills"
              className="transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-blue-700"
            >
              Skills Matrix
            </a>
            <a
              href="#experience"
              className="transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-blue-700"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-blue-700"
            >
              Projects Catalog
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onPrint}
              className="inline-flex min-h-[36px] items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-white shadow-xs transition-all hover:bg-slate-800 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-blue-700 cursor-pointer"
            >
              <Printer className="h-3.5 w-3.5 text-slate-200" aria-hidden="true" />
              <span>Save as PDF</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Hero Header Card */}
      <section
        id="top"
        className="relative overflow-hidden rounded-xl border border-slate-200/90 bg-white p-5 sm:p-7 shadow-xs print:rounded-none print:border-0 print:border-b print:border-slate-300 print:p-0 print:pb-4 print:shadow-none"
      >
        {/* Subtle accent top border (Screen Only) */}
        <div
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-blue-600 to-indigo-600 print:hidden"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-5 pt-1">
          {/* Identity & Title Block */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-4">
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900 font-display text-xl font-extrabold tracking-tight text-white shadow-sm ring-1 ring-blue-500/30 print:h-11 print:w-11 print:text-base print:bg-slate-900 print:ring-0"
                aria-label="Monogram MD"
              >
                <span>MD</span>
              </div>

              <div>
                <h1 className="font-display text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl print:text-2xl">
                  {profile.name}
                </h1>
                <p className="mt-1 text-sm font-semibold leading-relaxed text-blue-800 sm:text-base print:text-xs print:text-slate-800">
                  {profile.roleTitle}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Details Bar (Email + Single WhatsApp Number, No Location) */}
          <div className="flex flex-wrap items-center gap-2.5 border-t border-slate-100 pt-4 print:grid print:grid-cols-2 print:gap-2 print:border-slate-200 print:pt-2">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-lg border border-slate-200/90 bg-slate-50/80 px-3 py-1.5 text-xs font-medium text-slate-700 transition-all hover:border-red-300 hover:bg-red-50/50 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-red-600 print:border-0 print:bg-transparent print:p-0"
            >
              <GmailIcon className="h-3.5 w-3.5 shrink-0 print:h-3 print:w-3" />
              <span className="font-mono text-[12px]">{profile.email}</span>
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg border border-slate-200/90 bg-slate-50/80 px-3 py-1.5 text-xs font-medium text-slate-700 transition-all hover:border-emerald-300 hover:bg-emerald-50/60 hover:text-emerald-900 focus-visible:outline-2 focus-visible:outline-emerald-700 print:border-0 print:bg-transparent print:p-0"
            >
              <WhatsAppIcon className="h-3.5 w-3.5 shrink-0 text-emerald-600 print:h-3 print:w-3" />
              <span className="font-mono text-[12px] tabular-nums">{profile.whatsapp}</span>
            </a>
          </div>

          {/* Explicit URLs for clean PDF Printing */}
          <div className="hidden print:flex print:flex-wrap print:gap-x-6 print:gap-y-1 print:text-[11px] print:text-slate-700 print:border-t print:border-slate-200 print:pt-2">
            <span>
              <strong className="font-semibold text-slate-900">AquaSort Live Web Game:</strong>{' '}
              {profile.aquaSortUrl}
            </span>
            <span>
              <strong className="font-semibold text-slate-900">All Android APKs Drive:</strong>{' '}
              drive.google.com/drive/folders/1JeuO7uulpnBd1cYD4yB7vFCGvr2sv-MY
            </span>
          </div>

          {/* Vibrant, Color-Coded Quick Action Dashboard Buttons (Screen Only) */}
          <div className="flex flex-wrap items-center gap-3 pt-2 print:hidden">
            {/* Primary Action: Play AquaSort Live (Vibrant Emerald/Teal) */}
            <a
              href={profile.aquaSortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-2 text-xs font-semibold text-white shadow-sm ring-1 ring-emerald-500/30 transition-all duration-150 hover:from-emerald-700 hover:to-teal-700 hover:shadow-md hover:shadow-emerald-600/20 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 whitespace-nowrap shrink-0"
            >
              <Gamepad2 className="h-4 w-4 shrink-0 transition-transform group-hover:scale-110" aria-hidden="true" />
              <span>Play AquaSort Live</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-85 shrink-0" aria-hidden="true" />
            </a>

            {/* Secondary Action: All Android APKs Drive (Rich Blue/Indigo) */}
            <a
              href={profile.driveApksUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4.5 py-2 text-xs font-semibold text-white shadow-sm ring-1 ring-blue-500/30 transition-all duration-150 hover:from-blue-700 hover:to-indigo-700 hover:shadow-md hover:shadow-blue-600/20 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 whitespace-nowrap shrink-0"
            >
              <FolderOpen className="h-4 w-4 shrink-0 transition-transform group-hover:scale-105" aria-hidden="true" />
              <span>APK Drive Folder</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-85 shrink-0" aria-hidden="true" />
            </a>

            {/* Print / Save PDF Button (Crisp Dark Slate) */}
            <button
              type="button"
              onClick={onPrint}
              className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-150 hover:bg-slate-800 hover:shadow-md active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 cursor-pointer whitespace-nowrap shrink-0"
            >
              <Printer className="h-3.5 w-3.5 text-slate-200" aria-hidden="true" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

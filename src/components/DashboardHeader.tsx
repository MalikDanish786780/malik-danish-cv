import {
  ExternalLink,
  FolderOpen,
  Gamepad2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Printer,
} from 'lucide-react';
import type { CandidateProfile } from '../data/portfolioData';

interface DashboardHeaderProps {
  profile: CandidateProfile;
  onPrint: () => void;
}

export function DashboardHeader({ profile, onPrint }: DashboardHeaderProps) {
  const phoneHref = `tel:${profile.phone.replace(/\s+/g, '')}`;
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
              className="inline-flex min-h-[36px] items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs transition-all hover:border-slate-300 hover:bg-slate-100 hover:text-slate-950 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-blue-700 cursor-pointer"
            >
              <Printer className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
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
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-500 print:hidden"
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

          {/* Contact Details Bar (Clean Interactive Pills) */}
          <div className="flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4 print:grid print:grid-cols-2 print:gap-1.5 print:border-slate-200 print:pt-2">
            <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200/80 bg-slate-50/80 px-3 py-1.5 text-xs text-slate-700 print:border-0 print:bg-transparent print:p-0">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-slate-400 print:h-3 print:w-3" aria-hidden="true" />
              <span>{profile.location}</span>
            </div>

            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-lg border border-slate-200/80 bg-slate-50/80 px-3 py-1.5 text-xs text-slate-700 transition-all hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-900 focus-visible:outline-2 focus-visible:outline-blue-700 print:border-0 print:bg-transparent print:p-0"
            >
              <Mail className="h-3.5 w-3.5 shrink-0 text-slate-400 group-hover:text-blue-600 print:h-3 print:w-3" aria-hidden="true" />
              <span className="font-mono text-[12px]">{profile.email}</span>
            </a>

            <a
              href={phoneHref}
              className="group inline-flex items-center gap-2 rounded-lg border border-slate-200/80 bg-slate-50/80 px-3 py-1.5 text-xs text-slate-700 transition-all hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-900 focus-visible:outline-2 focus-visible:outline-blue-700 print:border-0 print:bg-transparent print:p-0"
            >
              <Phone className="h-3.5 w-3.5 shrink-0 text-slate-400 group-hover:text-blue-600 print:h-3 print:w-3" aria-hidden="true" />
              <span className="font-mono text-[12px] tabular-nums">{profile.phone}</span>
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg border border-slate-200/80 bg-slate-50/80 px-3 py-1.5 text-xs text-slate-700 transition-all hover:border-emerald-300 hover:bg-emerald-50/50 hover:text-emerald-900 focus-visible:outline-2 focus-visible:outline-emerald-700 print:border-0 print:bg-transparent print:p-0"
            >
              <MessageCircle className="h-3.5 w-3.5 shrink-0 text-slate-400 group-hover:text-emerald-600 print:h-3 print:w-3" aria-hidden="true" />
              <span className="font-mono text-[12px] tabular-nums">WhatsApp: {profile.whatsapp}</span>
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

          {/* Quick Action Dashboard Buttons (Screen Only) */}
          <div className="flex flex-wrap items-center gap-3 pt-2 print:hidden">
            {/* Primary Action: Play AquaSort Live */}
            <a
              href={profile.aquaSortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-blue-700 px-4.5 py-2 text-xs font-semibold text-white shadow-sm ring-1 ring-blue-600/30 transition-all duration-150 hover:bg-blue-800 hover:shadow-md hover:shadow-blue-600/20 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 whitespace-nowrap shrink-0"
            >
              <Gamepad2 className="h-4 w-4 shrink-0 transition-transform group-hover:scale-110" aria-hidden="true" />
              <span>Play AquaSort Live</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-80 shrink-0" aria-hidden="true" />
            </a>

            {/* Secondary Action: All Android APKs Drive */}
            <a
              href={profile.driveApksUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[42px] items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-800 shadow-2xs transition-all duration-150 hover:border-slate-400 hover:bg-slate-50/80 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 whitespace-nowrap shrink-0"
            >
              <FolderOpen className="h-4 w-4 shrink-0 text-blue-700 transition-transform group-hover:scale-105" aria-hidden="true" />
              <span>APK Drive Folder</span>
              <ExternalLink className="h-3.5 w-3.5 text-slate-400 shrink-0" aria-hidden="true" />
            </a>

            {/* Print / Save PDF Button */}
            <button
              type="button"
              onClick={onPrint}
              className="inline-flex min-h-[42px] items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-medium text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-100 hover:text-slate-950 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-blue-700 cursor-pointer whitespace-nowrap shrink-0"
            >
              <Printer className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

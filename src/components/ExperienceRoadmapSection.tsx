import { Briefcase, Calendar, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import type { ExperienceItem } from '../data/portfolioData';

interface ExperienceRoadmapSectionProps {
  items: ExperienceItem[];
}

export function ExperienceRoadmapSection({ items }: ExperienceRoadmapSectionProps) {
  return (
    <section id="experience" className="print-section space-y-4">
      <div className="flex flex-col gap-1 border-b border-slate-200 pb-2.5 print:pb-1">
        <h2 className="font-display text-lg font-bold tracking-tight text-slate-950 print:text-base">
          Experience &amp; Active Roadmap
        </h2>
        <p className="text-xs text-slate-500 print:hidden">
          Verified delivery record across mobile app development, casual puzzle games, and active projects.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 print:grid-cols-1 print:gap-3">
        {/* Main Experience Column (2 Cols on Desktop) */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <article
              key={item.id}
              className="print-break-inside-avoid rounded-xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-2xs transition-all hover:border-slate-300 print:rounded-none print:border-slate-300 print:p-2.5 print:shadow-none"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between border-b border-slate-100 pb-3 print:border-slate-200 print:pb-1.5">
                <div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-blue-600 print:hidden" aria-hidden="true" />
                    <h3 className="font-display text-base font-bold text-slate-950 print:text-sm">
                      {item.role}
                    </h3>
                  </div>
                  <p className="mt-0.5 text-xs font-semibold text-slate-600 print:text-xs">
                    {item.organization} · {item.location}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono font-semibold tabular-nums text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md print:bg-transparent print:p-0 print:text-slate-700">
                  <Calendar className="h-3 w-3 print:hidden" aria-hidden="true" />
                  <span>{item.period}</span>
                </div>
              </div>

              <ul className="mt-3.5 space-y-2.5 text-xs leading-relaxed text-slate-700 sm:text-sm print:mt-1.5 print:space-y-1 print:text-[10.5px] print:leading-snug">
                {item.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600 print:hidden"
                      aria-hidden="true"
                    />
                    <span className="hidden print:inline-block print:h-1 print:w-1 print:rounded-full print:bg-slate-400 print:mt-1.5 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Active Pipeline Card (1 Col on Desktop) */}
        <div className="print-break-inside-avoid flex flex-col justify-between rounded-xl border border-dashed border-amber-300 bg-gradient-to-b from-amber-50/40 via-white to-white p-5 shadow-2xs print:rounded-none print:border-slate-300 print:bg-white print:p-2.5 print:shadow-none">
          <div>
            <div className="flex items-center justify-between gap-2 border-b border-amber-100 pb-3 print:border-slate-200 print:pb-1.5">
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-amber-600 print:hidden" aria-hidden="true" />
                <h3 className="font-display text-xs font-bold text-slate-900 uppercase tracking-wide">
                  Active Roadmap
                </h3>
              </div>

              <span className="inline-flex items-center rounded-full border border-amber-300 bg-amber-50 px-2.5 py-0.5 text-[10.5px] font-semibold text-amber-800">
                Starting Nov 2026
              </span>
            </div>

            <div className="mt-3.5">
              <h4 className="font-display text-sm font-bold text-slate-950">
                Hospitality &amp; Retail Management App
              </h4>
              <p className="mt-0.5 text-xs text-slate-500">
                Multi-Module Cross-Platform Architecture
              </p>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-slate-700 print:text-[10px]">
              Developing an integrated cross-platform operations suite designed for restaurant, hotel, and shopping workflows—spanning tabletop ordering, central billing, customer accounts, and inventory dispatch.
            </p>

            <div className="mt-4 flex flex-wrap gap-1 print:mt-2">
              <span className="rounded-md border border-slate-200 bg-white px-2 py-0.5 text-[11px] font-medium text-slate-600">
                Orders &amp; POS
              </span>
              <span className="rounded-md border border-slate-200 bg-white px-2 py-0.5 text-[11px] font-medium text-slate-600">
                Billing &amp; Ledgers
              </span>
              <span className="rounded-md border border-slate-200 bg-white px-2 py-0.5 text-[11px] font-medium text-slate-600">
                Multi-Tenant Architecture
              </span>
            </div>
          </div>

          <div className="mt-5 border-t border-slate-100 pt-3 text-[11px] text-slate-500 print:hidden">
            Status: Requirements &amp; Schema Drafting Phase
          </div>
        </div>
      </div>
    </section>
  );
}

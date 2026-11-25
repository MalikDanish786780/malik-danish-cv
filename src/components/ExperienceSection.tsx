import { Briefcase } from 'lucide-react';
import type { ExperienceItem } from '../data/portfolioData';

interface ExperienceSectionProps {
  items: ExperienceItem[];
}

export function ExperienceSection({ items }: ExperienceSectionProps) {
  return (
    <section id="experience" className="print-section space-y-4 print:space-y-2.5">
      <div className="border-b border-slate-200 pb-2.5 print:pb-1">
        <h2 className="font-display text-xl font-bold tracking-tight text-slate-950 print:text-base">
          Experience
        </h2>
      </div>

      <div className="space-y-4 print:space-y-2.5">
        {items.map((item) => (
          <article
            key={item.id}
            className="print-break-inside-avoid rounded-xl border border-slate-200/90 bg-white p-6 shadow-2xs transition-all hover:border-slate-300 print:rounded-none print:border-0 print:p-0 print:shadow-none"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-blue-700 print:hidden" aria-hidden="true" />
                  <h3 className="font-display text-base font-bold text-slate-950 sm:text-lg print:text-sm">
                    {item.role}
                  </h3>
                </div>
                <p className="mt-0.5 text-xs font-semibold text-slate-600 sm:text-sm print:text-xs">
                  {item.organization} — {item.location}
                </p>
              </div>
              <p className="font-mono text-xs font-medium text-slate-600 tabular-nums whitespace-nowrap shrink-0 print:text-[10.5px]">
                {item.period}
              </p>
            </div>

            <ul className="mt-4 space-y-2 text-xs leading-relaxed text-slate-700 sm:text-sm print:mt-1.5 print:space-y-1 print:text-[10.5px] print:leading-snug">
              {item.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-xs bg-blue-700 print:mt-1 print:h-1 print:w-1"
                    aria-hidden="true"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

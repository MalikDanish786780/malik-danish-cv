import { Cpu, Database, Gamepad2, Smartphone } from 'lucide-react';
import type { SkillGroup } from '../data/portfolioData';

interface SkillsMatrixSectionProps {
  groups: SkillGroup[];
}

export function SkillsMatrixSection({ groups }: SkillsMatrixSectionProps) {
  const getGroupMetadata = (id: string) => {
    switch (id) {
      case 'cross-platform-stack':
        return {
          icon: <Smartphone className="h-4 w-4 text-blue-600 print:hidden" aria-hidden="true" />,
          accentBg: 'bg-blue-50/70',
          badgeText: 'Core Mobile & Web',
          chipHover: 'hover:border-blue-300 hover:bg-blue-50/60 hover:text-blue-900',
        };
      case 'game-interactive-ui':
        return {
          icon: <Gamepad2 className="h-4 w-4 text-emerald-600 print:hidden" aria-hidden="true" />,
          accentBg: 'bg-emerald-50/70',
          badgeText: 'Puzzle & Mechanics',
          chipHover: 'hover:border-emerald-300 hover:bg-emerald-50/60 hover:text-emerald-900',
        };
      case 'ai-dev-tools':
        return {
          icon: <Cpu className="h-4 w-4 text-indigo-600 print:hidden" aria-hidden="true" />,
          accentBg: 'bg-indigo-50/70',
          badgeText: 'Prototyping & QA',
          chipHover: 'hover:border-indigo-300 hover:bg-indigo-50/60 hover:text-indigo-900',
        };
      case 'backend-cloud-storage':
        return {
          icon: <Database className="h-4 w-4 text-cyan-600 print:hidden" aria-hidden="true" />,
          accentBg: 'bg-cyan-50/70',
          badgeText: 'Cloud & Database',
          chipHover: 'hover:border-cyan-300 hover:bg-cyan-50/60 hover:text-cyan-900',
        };
      default:
        return {
          icon: null,
          accentBg: 'bg-slate-50',
          badgeText: 'Skills',
          chipHover: 'hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900',
        };
    }
  };

  return (
    <section id="skills" className="print-section space-y-3">
      <div className="flex flex-col gap-1 border-b border-slate-200 pb-2.5 print:pb-1">
        <h2 className="font-display text-lg font-bold tracking-tight text-slate-950 print:text-base">
          Technical Skills &amp; Capability Matrix
        </h2>
        <p className="text-xs text-slate-500 print:hidden">
          Grouped competencies across cross-platform frameworks, game mechanics, and cloud services.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 print:grid-cols-2 print:gap-2.5">
        {groups.map((group) => {
          const meta = getGroupMetadata(group.id);
          return (
            <div
              key={group.id}
              className="print-break-inside-avoid flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-5 shadow-2xs transition-all hover:border-slate-300 hover:shadow-xs print:rounded-none print:border-slate-300 print:p-2.5 print:shadow-none"
            >
              <div>
                {/* Card Title & Tag Header */}
                <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3 print:border-slate-200 print:pb-1.5">
                  <div className="flex items-center gap-2">
                    {meta.icon}
                    <h3 className="font-display text-xs font-bold text-slate-900 print:text-[11px]">
                      {group.title}
                    </h3>
                  </div>

                  <span className="font-mono text-[11px] font-semibold text-slate-500 tabular-nums print:text-[10px]">
                    {group.skills.length} skills
                  </span>
                </div>

                {/* Compact Tag Pills */}
                <div className="flex flex-wrap gap-1.5 pt-3.5 print:gap-1 print:pt-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center rounded-lg border border-slate-200/80 bg-slate-50/80 px-2.5 py-1 text-xs font-medium text-slate-700 transition-all ${meta.chipHover} print:rounded-xs print:border-slate-200 print:bg-white print:px-1.5 print:py-0.5 print:text-[10px]`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

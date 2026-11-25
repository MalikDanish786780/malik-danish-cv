import { Cpu, Database, Gamepad2, Smartphone } from 'lucide-react';
import type { SkillGroup } from '../data/portfolioData';

interface SkillsSectionProps {
  groups: SkillGroup[];
}

export function SkillsSection({ groups }: SkillsSectionProps) {
  const getGroupIcon = (id: string) => {
    switch (id) {
      case 'cross-platform-stack':
        return <Smartphone className="h-4 w-4 text-blue-700 print:hidden" aria-hidden="true" />;
      case 'game-interactive-ui':
        return <Gamepad2 className="h-4 w-4 text-emerald-700 print:hidden" aria-hidden="true" />;
      case 'ai-dev-tools':
        return <Cpu className="h-4 w-4 text-indigo-700 print:hidden" aria-hidden="true" />;
      case 'backend-cloud-storage':
        return <Database className="h-4 w-4 text-cyan-700 print:hidden" aria-hidden="true" />;
      default:
        return null;
    }
  };

  return (
    <section id="skills" className="print-section space-y-4 print:space-y-2.5">
      <div className="border-b border-slate-200 pb-2.5 print:pb-1">
        <h2 className="font-display text-xl font-bold tracking-tight text-slate-950 print:text-base">
          Technical Skills
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 print:grid-cols-2 print:gap-2.5">
        {groups.map((group) => (
          <div
            key={group.id}
            className="print-break-inside-avoid flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-5 shadow-2xs transition-all hover:border-slate-300 print:rounded-none print:border-slate-200 print:p-2.5 print:shadow-none"
          >
            <div>
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2.5 print:border-slate-200 print:pb-1.5">
                {getGroupIcon(group.id)}
                <h3 className="font-display text-sm font-bold text-slate-900 print:text-xs">
                  {group.title}
                </h3>
              </div>

              {/* Clean, compact skill chips with subtle hover borders */}
              <div className="flex flex-wrap gap-1.5 pt-3 print:gap-1 print:pt-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md border border-slate-200/80 bg-slate-50/70 px-2.5 py-1 text-xs font-medium text-slate-700 transition-colors hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-900 print:rounded-xs print:border-slate-200 print:bg-white print:px-1.5 print:py-0.5 print:text-[10px]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

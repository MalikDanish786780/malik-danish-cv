import { useState } from 'react';
import {
  ArrowUpRight,
  ChevronRight,
  ExternalLink,
  FolderOpen,
  Gamepad2,
  Sparkles,
  Smartphone,
  Clock,
} from 'lucide-react';
import type { PortfolioProject, ProjectCategory } from '../data/portfolioData';

type FilterTab = 'all' | ProjectCategory;

interface ProjectsSectionProps {
  projects: PortfolioProject[];
  onSelectProject: (project: PortfolioProject) => void;
}

export function ProjectsSection({ projects, onSelectProject }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<FilterTab>('all');

  const counts = {
    all: projects.length,
    app: projects.filter((p) => p.category === 'app').length,
    game: projects.filter((p) => p.category === 'game').length,
  };

  const tabs: { id: FilterTab; label: string; count: number }[] = [
    { id: 'all', label: 'All Projects & Games', count: counts.all },
    { id: 'app', label: 'Apps & Systems', count: counts.app },
    { id: 'game', label: 'Games & PWAs', count: counts.game },
  ];

  const getProjectAccentTheme = (project: PortfolioProject) => {
    if (project.id === 'aquasort') {
      return {
        topBorder: 'border-t-4 border-t-emerald-500',
        cardBg:
          'border-emerald-200/90 bg-gradient-to-b from-emerald-50/25 via-white to-white shadow-xs',
        badgeClass:
          'border-emerald-200 bg-emerald-50 text-emerald-800 font-semibold',
        icon: <Gamepad2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" aria-hidden="true" />,
        flagshipLabel: 'Flagship Live PWA Game',
      };
    }
    if (project.id === 'tubewell-system') {
      return {
        topBorder: 'border-t-4 border-t-blue-600',
        cardBg:
          'border-blue-200/90 bg-gradient-to-b from-blue-50/25 via-white to-white shadow-xs',
        badgeClass:
          'border-blue-200 bg-blue-50 text-blue-800 font-semibold',
        icon: <Smartphone className="h-3.5 w-3.5 text-blue-600 shrink-0" aria-hidden="true" />,
        flagshipLabel: 'Flagship Android / Firebase App',
      };
    }
    if (project.id === 'hospitality-retail-app') {
      return {
        topBorder: 'border-t-4 border-dashed border-t-amber-400',
        cardBg: 'border-dashed border-slate-300 bg-slate-50/40',
        badgeClass:
          'border-dashed border-amber-300 bg-amber-50/80 text-amber-800 font-medium',
        icon: <Clock className="h-3.5 w-3.5 text-amber-600 shrink-0" aria-hidden="true" />,
        flagshipLabel: null,
      };
    }
    if (project.id === 'agri-auditor-ai') {
      return {
        topBorder: 'border-t-3 border-t-violet-500',
        cardBg: 'border-slate-200/90 bg-white shadow-2xs hover:border-violet-200',
        badgeClass: 'border-violet-200 bg-violet-50/80 text-violet-800',
        icon: <Sparkles className="h-3.5 w-3.5 text-violet-600 shrink-0" aria-hidden="true" />,
        flagshipLabel: null,
      };
    }
    if (project.id === 'crystal-sort') {
      return {
        topBorder: 'border-t-3 border-t-cyan-500',
        cardBg: 'border-slate-200/90 bg-white shadow-2xs hover:border-cyan-200',
        badgeClass: 'border-cyan-200 bg-cyan-50/80 text-cyan-800',
        icon: <Gamepad2 className="h-3.5 w-3.5 text-cyan-600 shrink-0" aria-hidden="true" />,
        flagshipLabel: null,
      };
    }
    if (project.id === 'hosel-nexus') {
      return {
        topBorder: 'border-t-3 border-t-indigo-500',
        cardBg: 'border-slate-200/90 bg-white shadow-2xs hover:border-indigo-200',
        badgeClass: 'border-indigo-200 bg-indigo-50/80 text-indigo-800',
        icon: <Smartphone className="h-3.5 w-3.5 text-indigo-600 shrink-0" aria-hidden="true" />,
        flagshipLabel: null,
      };
    }
    if (project.id === 'stellaris-edu') {
      return {
        topBorder: 'border-t-3 border-t-sky-500',
        cardBg: 'border-slate-200/90 bg-white shadow-2xs hover:border-sky-200',
        badgeClass: 'border-sky-200 bg-sky-50/80 text-sky-800',
        icon: <Smartphone className="h-3.5 w-3.5 text-sky-600 shrink-0" aria-hidden="true" />,
        flagshipLabel: null,
      };
    }
    if (project.id === 'pdf-tool') {
      return {
        topBorder: 'border-t-3 border-t-amber-500',
        cardBg: 'border-slate-200/90 bg-white shadow-2xs hover:border-amber-200',
        badgeClass: 'border-amber-200 bg-amber-50/80 text-amber-800',
        icon: <Smartphone className="h-3.5 w-3.5 text-amber-600 shrink-0" aria-hidden="true" />,
        flagshipLabel: null,
      };
    }
    // Default utility suite
    return {
      topBorder: 'border-t-3 border-t-teal-500',
      cardBg: 'border-slate-200/90 bg-white shadow-2xs hover:border-teal-200',
      badgeClass: 'border-teal-200 bg-teal-50/80 text-teal-800',
      icon: <Smartphone className="h-3.5 w-3.5 text-teal-600 shrink-0" aria-hidden="true" />,
      flagshipLabel: null,
    };
  };

  return (
    <section id="projects" className="print-section space-y-5 print:space-y-3">
      <div className="flex flex-col gap-3 border-b border-slate-200 pb-3 sm:flex-row sm:items-end sm:justify-between print:pb-1.5">
        <div>
          <h2 className="font-display text-xl font-bold tracking-tight text-slate-950 print:text-base">
            Projects &amp; Games Portfolio
          </h2>
          <p className="mt-0.5 text-xs text-slate-600 print:hidden">
            Cross-platform web apps, casual puzzle games, and released Android APKs.
          </p>
        </div>

        {/* Interactive Filter Tabs (Screen Only) */}
        <div
          role="tablist"
          aria-label="Filter portfolio by category"
          className="inline-flex w-fit items-center gap-1 rounded-lg border border-slate-200 bg-slate-100/80 p-1 print:hidden"
        >
          {tabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(tab.id)}
                className={`inline-flex min-h-[36px] items-center gap-1.5 rounded-md px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-700 ${
                  isActive
                    ? 'bg-white text-slate-950 shadow-xs'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`font-mono text-[11px] tabular-nums ${
                    isActive ? 'text-blue-700' : 'text-slate-400'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 print:grid-cols-2 print:gap-3">
        {projects.map((project) => {
          const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
          const theme = getProjectAccentTheme(project);

          return (
            <article
              key={project.id}
              className={`print-break-inside-avoid relative flex flex-col justify-between overflow-hidden rounded-xl border p-5 sm:p-6 transition-all duration-150 print:flex print:rounded-none print:border-slate-200 print:bg-white print:p-2.5 print:shadow-none ${
                matchesFilter ? 'flex' : 'hidden print:flex'
              } ${theme.topBorder} ${theme.cardBg}`}
            >
              <div>
                {/* Header Row: Platform & Category Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3 print:border-slate-200 print:pb-1.5">
                  <div className="flex items-center gap-1.5">
                    {theme.icon}
                    <span className="text-xs font-semibold text-slate-700 print:text-[10px]">
                      {project.platform}
                    </span>
                  </div>

                  {theme.flagshipLabel ? (
                    <span
                      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] print:text-[9.5px] ${theme.badgeClass}`}
                    >
                      <Sparkles className="h-3 w-3 shrink-0" aria-hidden="true" />
                      <span>{theme.flagshipLabel}</span>
                    </span>
                  ) : (
                    <span
                      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] print:text-[9.5px] ${theme.badgeClass}`}
                    >
                      {project.status}
                      {project.timeline ? ` · ${project.timeline}` : ''}
                    </span>
                  )}
                </div>

                <div className="mt-3">
                  <h3 className="font-display text-lg font-bold tracking-tight text-slate-950 print:text-sm">
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="text-left transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-blue-700 cursor-pointer print:pointer-events-none"
                    >
                      {project.title}
                    </button>
                  </h3>

                  <p className="mt-0.5 text-xs font-medium text-slate-500 print:text-[10.5px]">
                    {project.subtitle}
                  </p>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-slate-700 sm:text-sm print:mt-1.5 print:text-[10.5px] print:leading-snug">
                  {project.summary}
                </p>

                {/* Compact Stack Chips / List */}
                <div className="mt-4 flex flex-wrap gap-1 print:mt-1.5">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-md border border-slate-200/80 bg-white/80 px-2 py-0.5 text-[11px] font-medium text-slate-600 print:rounded-none print:border-slate-200 print:bg-white print:text-[9.5px] print:px-1"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <p className="hidden print:mt-1.5 print:block print:text-[9.5px] print:text-slate-600">
                    <strong className="font-semibold text-slate-900">Direct Link:</strong>{' '}
                    {project.link.url}
                  </p>
                )}
              </div>

              {/* Action Buttons (Screen Only) */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4 print:hidden">
                {project.link ? (
                  <a
                    href={project.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex min-h-[36px] items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 ${
                      project.link.isPrimary
                        ? 'bg-blue-700 text-white shadow-2xs hover:bg-blue-800 hover:shadow-sm'
                        : 'border border-slate-200 bg-slate-50/80 text-slate-800 hover:border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    {project.link.isPrimary ? (
                      <Gamepad2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    ) : (
                      <FolderOpen className="h-3.5 w-3.5 shrink-0 text-blue-700" aria-hidden="true" />
                    )}
                    <span>{project.link.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-80" aria-hidden="true" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-700">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>In Active Development</span>
                  </span>
                )}

                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="inline-flex min-h-[36px] items-center gap-1 text-xs font-semibold text-slate-600 whitespace-nowrap shrink-0 transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-blue-700 cursor-pointer"
                >
                  <span>Key highlights</span>
                  <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

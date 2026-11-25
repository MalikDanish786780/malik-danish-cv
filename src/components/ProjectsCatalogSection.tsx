import { useState, useMemo } from 'react';
import {
  ArrowUpRight,
  ChevronRight,
  Clock,
  ExternalLink,
  FolderOpen,
  Gamepad2,
  Search,
  Smartphone,
  Sparkles,
} from 'lucide-react';
import type { PortfolioProject, ProjectCategory } from '../data/portfolioData';

type FilterTab = 'all' | ProjectCategory;

interface ProjectsCatalogSectionProps {
  projects: PortfolioProject[];
  onSelectProject: (project: PortfolioProject) => void;
}

export function ProjectsCatalogSection({
  projects,
  onSelectProject,
}: ProjectsCatalogSectionProps) {
  const [activeFilter, setActiveFilter] = useState<FilterTab>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const counts = {
    all: projects.length,
    app: projects.filter((p) => p.category === 'app').length,
    game: projects.filter((p) => p.category === 'game').length,
  };

  const tabs: { id: FilterTab; label: string; count: number }[] = [
    { id: 'all', label: 'All Catalog', count: counts.all },
    { id: 'app', label: 'Apps & Systems', count: counts.app },
    { id: 'game', label: 'Games & PWAs', count: counts.game },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.subtitle.toLowerCase().includes(query) ||
        project.summary.toLowerCase().includes(query) ||
        project.stack.some((tech) => tech.toLowerCase().includes(query)) ||
        project.platform.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [projects, activeFilter, searchQuery]);

  const getProjectAccentTheme = (project: PortfolioProject) => {
    if (project.id === 'aquasort') {
      return {
        topBorder: 'border-t-4 border-t-emerald-500',
        cardBg:
          'border-emerald-200/90 bg-gradient-to-b from-emerald-50/20 via-white to-white shadow-xs',
        badgeClass: 'border-emerald-200 bg-emerald-50 text-emerald-800 font-semibold',
        icon: <Gamepad2 className="h-4 w-4 text-emerald-600 shrink-0" aria-hidden="true" />,
        flagshipLabel: 'Flagship Live PWA Game',
      };
    }
    if (project.id === 'tubewell-system') {
      return {
        topBorder: 'border-t-4 border-t-blue-600',
        cardBg:
          'border-blue-200/90 bg-gradient-to-b from-blue-50/20 via-white to-white shadow-xs',
        badgeClass: 'border-blue-200 bg-blue-50 text-blue-800 font-semibold',
        icon: <Smartphone className="h-4 w-4 text-blue-600 shrink-0" aria-hidden="true" />,
        flagshipLabel: 'Flagship Android / Firebase App',
      };
    }
    if (project.id === 'hospitality-retail-app') {
      return {
        topBorder: 'border-t-4 border-dashed border-t-amber-400',
        cardBg: 'border-dashed border-slate-300 bg-slate-50/40',
        badgeClass: 'border-dashed border-amber-300 bg-amber-50/80 text-amber-800 font-medium',
        icon: <Clock className="h-4 w-4 text-amber-600 shrink-0" aria-hidden="true" />,
        flagshipLabel: null,
      };
    }
    if (project.id === 'agri-auditor-ai') {
      return {
        topBorder: 'border-t-3 border-t-violet-500',
        cardBg: 'border-slate-200/90 bg-white shadow-2xs hover:border-violet-200',
        badgeClass: 'border-violet-200 bg-violet-50/80 text-violet-800',
        icon: <Sparkles className="h-4 w-4 text-violet-600 shrink-0" aria-hidden="true" />,
        flagshipLabel: null,
      };
    }
    if (project.id === 'crystal-sort') {
      return {
        topBorder: 'border-t-3 border-t-cyan-500',
        cardBg: 'border-slate-200/90 bg-white shadow-2xs hover:border-cyan-200',
        badgeClass: 'border-cyan-200 bg-cyan-50/80 text-cyan-800',
        icon: <Gamepad2 className="h-4 w-4 text-cyan-600 shrink-0" aria-hidden="true" />,
        flagshipLabel: null,
      };
    }
    if (project.id === 'hosel-nexus') {
      return {
        topBorder: 'border-t-3 border-t-indigo-500',
        cardBg: 'border-slate-200/90 bg-white shadow-2xs hover:border-indigo-200',
        badgeClass: 'border-indigo-200 bg-indigo-50/80 text-indigo-800',
        icon: <Smartphone className="h-4 w-4 text-indigo-600 shrink-0" aria-hidden="true" />,
        flagshipLabel: null,
      };
    }
    if (project.id === 'stellaris-edu') {
      return {
        topBorder: 'border-t-3 border-t-sky-500',
        cardBg: 'border-slate-200/90 bg-white shadow-2xs hover:border-sky-200',
        badgeClass: 'border-sky-200 bg-sky-50/80 text-sky-800',
        icon: <Smartphone className="h-4 w-4 text-sky-600 shrink-0" aria-hidden="true" />,
        flagshipLabel: null,
      };
    }
    if (project.id === 'pdf-tool') {
      return {
        topBorder: 'border-t-3 border-t-amber-500',
        cardBg: 'border-slate-200/90 bg-white shadow-2xs hover:border-amber-200',
        badgeClass: 'border-amber-200 bg-amber-50/80 text-amber-800',
        icon: <Smartphone className="h-4 w-4 text-amber-600 shrink-0" aria-hidden="true" />,
        flagshipLabel: null,
      };
    }
    return {
      topBorder: 'border-t-3 border-t-teal-500',
      cardBg: 'border-slate-200/90 bg-white shadow-2xs hover:border-teal-200',
      badgeClass: 'border-teal-200 bg-teal-50/80 text-teal-800',
      icon: <Smartphone className="h-4 w-4 text-teal-600 shrink-0" aria-hidden="true" />,
      flagshipLabel: null,
    };
  };

  return (
    <section id="projects" className="print-section space-y-4">
      {/* Catalog Header with Search & Segmented Filter Tabs */}
      <div className="flex flex-col gap-3 border-b border-slate-200 pb-3 sm:flex-row sm:items-center sm:justify-between print:pb-1.5">
        <div>
          <h2 className="font-display text-lg font-bold tracking-tight text-slate-950 print:text-base">
            Projects &amp; Games Catalog
          </h2>
          <p className="text-xs text-slate-500 print:hidden">
            Detailed catalog of live web games, verified Android APKs, and active builds.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 print:hidden">
          {/* Quick Search */}
          <div className="relative min-w-[200px]">
            <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" aria-hidden="true" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech, stack, APK..."
              className="w-full rounded-lg border border-slate-200 bg-white py-1.5 pl-8 pr-3 text-xs text-slate-800 placeholder-slate-400 shadow-2xs focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Interactive Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter catalog by category"
            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-100/80 p-1"
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
                  className={`inline-flex min-h-[32px] items-center gap-1.5 rounded-md px-3 py-1 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-700 ${
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
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 print:grid-cols-2 print:gap-3">
        {filteredProjects.map((project) => {
          const theme = getProjectAccentTheme(project);

          return (
            <article
              key={project.id}
              className={`print-break-inside-avoid relative flex flex-col justify-between overflow-hidden rounded-xl border p-5 transition-all hover:border-slate-300 print:rounded-none print:border-slate-300 print:bg-white print:p-2.5 print:shadow-none ${theme.topBorder} ${theme.cardBg}`}
            >
              <div>
                {/* Header Row: Platform & Category Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5 print:border-slate-200 print:pb-1">
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
                  <h3 className="font-display text-base font-bold tracking-tight text-slate-950 print:text-sm">
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="text-left transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-blue-700 cursor-pointer print:pointer-events-none"
                    >
                      {project.title}
                    </button>
                  </h3>
                  <p className="mt-0.5 text-xs font-medium text-slate-500 print:text-[10px]">
                    {project.subtitle}
                  </p>
                </div>

                <p className="mt-2.5 text-xs leading-relaxed text-slate-700 print:mt-1 print:text-[10px] print:leading-snug">
                  {project.summary}
                </p>

                {/* Stack Chips */}
                <div className="mt-3.5 flex flex-wrap gap-1 print:mt-1.5">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-md border border-slate-200/80 bg-white/90 px-2 py-0.5 text-[11px] font-medium text-slate-600 print:rounded-none print:border-slate-200 print:bg-white print:text-[9.5px] print:px-1"
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
              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-3.5 print:hidden">
                {project.link ? (
                  <a
                    href={project.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex min-h-[34px] items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${
                      project.link.isPrimary
                        ? 'bg-blue-700 text-white shadow-2xs hover:bg-blue-800'
                        : 'border border-slate-200 bg-slate-50 text-slate-800 hover:border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    {project.link.isPrimary ? (
                      <Gamepad2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    ) : (
                      <FolderOpen className="h-3.5 w-3.5 shrink-0 text-blue-700" aria-hidden="true" />
                    )}
                    <span>{project.link.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-80" aria-hidden="true" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-700">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>In Active Pipeline</span>
                  </span>
                )}

                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="inline-flex min-h-[34px] items-center gap-1 text-xs font-semibold text-slate-600 whitespace-nowrap shrink-0 transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-blue-700 cursor-pointer"
                >
                  <span>Highlights</span>
                  <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {filteredProjects.length === 0 && (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center text-xs text-slate-500">
          No builds match the current filter or search query.
        </div>
      )}
    </section>
  );
}

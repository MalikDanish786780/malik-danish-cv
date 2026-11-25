import { useEffect } from 'react';
import {
  ArrowUpRight,
  Clock,
  ExternalLink,
  FolderOpen,
  Gamepad2,
  Smartphone,
  Sparkles,
  X,
} from 'lucide-react';
import type { PortfolioProject } from '../data/portfolioData';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const getModalAccent = () => {
    if (project.id === 'aquasort') {
      return {
        topBorder: 'border-t-4 border-t-emerald-500',
        badge: 'border-emerald-200 bg-emerald-50 text-emerald-800',
        icon: <Gamepad2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />,
      };
    }
    if (project.id === 'tubewell-system') {
      return {
        topBorder: 'border-t-4 border-t-blue-600',
        badge: 'border-blue-200 bg-blue-50 text-blue-800',
        icon: <Smartphone className="h-4 w-4 text-blue-600" aria-hidden="true" />,
      };
    }
    if (project.id === 'hospitality-retail-app') {
      return {
        topBorder: 'border-t-4 border-dashed border-t-amber-400',
        badge: 'border-amber-200 bg-amber-50 text-amber-800',
        icon: <Clock className="h-4 w-4 text-amber-600" aria-hidden="true" />,
      };
    }
    if (project.id === 'agri-auditor-ai') {
      return {
        topBorder: 'border-t-4 border-t-violet-500',
        badge: 'border-violet-200 bg-violet-50 text-violet-800',
        icon: <Sparkles className="h-4 w-4 text-violet-600" aria-hidden="true" />,
      };
    }
    return {
      topBorder: 'border-t-4 border-t-blue-700',
      badge: 'border-slate-200 bg-slate-50 text-slate-700',
      icon: <Smartphone className="h-4 w-4 text-blue-700" aria-hidden="true" />,
    };
  };

  const accent = getModalAccent();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-[2px] print:hidden animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl sm:p-8 ${accent.topBorder}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                {accent.icon}
                <span>{project.platform}</span>
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span
                className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${accent.badge}`}
              >
                {project.status}
              </span>
              {project.timeline && (
                <>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span className="font-mono text-xs tabular-nums text-slate-500">
                    {project.timeline}
                  </span>
                </>
              )}
            </div>

            <h3
              id="project-modal-title"
              className="mt-2.5 font-display text-2xl font-bold tracking-tight text-slate-950"
            >
              {project.title}
            </h3>
            <p className="mt-0.5 text-sm font-medium text-slate-500">{project.subtitle}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-blue-700 cursor-pointer"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-700">{project.summary}</p>

        <div className="mt-5 border-t border-slate-100 pt-4">
          <h4 className="font-display text-xs font-bold tracking-wide text-slate-900">
            Key Architecture &amp; Feature Highlights
          </h4>
          <ul className="mt-2.5 space-y-2 text-sm leading-relaxed text-slate-700">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-xs bg-blue-700"
                  aria-hidden="true"
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 border-t border-slate-100 pt-4">
          <h4 className="font-display text-xs font-bold tracking-wide text-slate-900 mb-2">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-end gap-3 border-t border-slate-100 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="min-h-[40px] rounded-lg border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-blue-700 cursor-pointer"
          >
            Close
          </button>
          {project.link && (
            <a
              href={project.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex min-h-[40px] items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold text-white transition-all shadow-sm ${
                project.link.isPrimary
                  ? 'bg-blue-700 hover:bg-blue-800'
                  : 'bg-slate-900 hover:bg-slate-800'
              }`}
            >
              {project.link.isPrimary ? (
                <Gamepad2 className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <FolderOpen className="h-3.5 w-3.5" aria-hidden="true" />
              )}
              <span>{project.link.label}</span>
              <ArrowUpRight className="h-3.5 w-3.5 opacity-80" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { Info, Printer, X } from 'lucide-react';
import { AnalyticsChartsSection } from './components/AnalyticsChartsSection';
import { DashboardFooter } from './components/DashboardFooter';
import { DashboardHeader } from './components/DashboardHeader';
import { ExperienceRoadmapSection } from './components/ExperienceRoadmapSection';
import { KPIMetricsRow } from './components/KPIMetricsRow';
import { ProjectModal } from './components/ProjectModal';
import { ProjectsCatalogSection } from './components/ProjectsCatalogSection';
import { SkillsMatrixSection } from './components/SkillsMatrixSection';
import {
  candidateProfile,
  experiences,
  projects,
  skillGroups,
  type PortfolioProject,
} from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [showPrintNotice, setShowPrintNotice] = useState(false);

  const handlePrint = () => {
    setShowPrintNotice(true);
    try {
      window.print();
    } catch (err) {
      console.warn('Direct print command encountered an issue in this context:', err);
    }
  };

  useEffect(() => {
    if (!showPrintNotice) return;
    const timer = setTimeout(() => {
      setShowPrintNotice(false);
    }, 9000);
    return () => clearTimeout(timer);
  }, [showPrintNotice]);

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 selection:bg-blue-100 selection:text-blue-900 print:bg-white">
      {/* Top Header & Identity */}
      <DashboardHeader profile={candidateProfile} onPrint={handlePrint} />

      {/* Main Dashboard Canvas */}
      <main className="print-container mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 print:py-0">
        <div className="space-y-6 print:space-y-3">
          {/* Section 1: E-Commerce Style Top KPI Stat Row */}
          <div id="overview">
            <KPIMetricsRow />
          </div>

          {/* Professional Summary Executive Card */}
          <section
            id="summary"
            aria-label="Professional Summary"
            className="print-section print-break-inside-avoid rounded-xl border border-slate-200/90 bg-white p-5 shadow-2xs sm:p-6 print:rounded-none print:border-slate-300 print:p-2.5 print:shadow-none"
          >
            <div className="border-b border-slate-100 pb-2.5 print:border-slate-200 print:pb-1">
              <h2 className="font-display text-sm font-bold uppercase tracking-wider text-slate-500 print:text-xs">
                Executive Professional Summary
              </h2>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate-700 sm:text-sm sm:leading-relaxed print:mt-1.5 print:text-[10.5px] print:leading-snug">
              {candidateProfile.summary}
            </p>
          </section>

          {/* Section 2: Analytics & Donut Charts Row (2-Column Grid) */}
          <div id="analytics">
            <AnalyticsChartsSection />
          </div>

          {/* Section 3: Skills Matrix (Compact Tag Pills Inside Clean Cards) */}
          <div id="skills">
            <SkillsMatrixSection groups={skillGroups} />
          </div>

          {/* Section 4: Experience & Active Roadmap */}
          <div id="experience">
            <ExperienceRoadmapSection items={experiences} />
          </div>

          {/* Section 5: Projects & Games Catalog */}
          <div id="projects">
            <ProjectsCatalogSection
              projects={projects}
              onSelectProject={setSelectedProject}
            />
          </div>
        </div>

        {/* Dashboard Footer */}
        <DashboardFooter profile={candidateProfile} onPrint={handlePrint} />
      </main>

      {/* Detailed Project Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Sandbox Print Notification Toast (Screen Only) */}
      {showPrintNotice && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-5 left-1/2 z-50 flex w-[92%] max-w-lg -translate-x-1/2 items-start justify-between gap-3 rounded-xl border border-slate-300 bg-slate-900 p-4 text-white shadow-xl print:hidden animate-in fade-in slide-in-from-bottom-2 duration-200"
        >
          <div className="flex items-start gap-3 min-w-0">
            <Printer className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
            <div className="text-xs leading-relaxed">
              <p className="font-semibold text-slate-100">Print dialog triggered</p>
              <p className="mt-0.5 text-slate-300">
                To save as PDF, select <span className="font-medium text-white">Save as PDF</span> in the printer destination. If your browser blocks popups inside this embedded preview, press <kbd className="rounded bg-slate-800 px-1.5 py-0.5 font-mono text-[11px] text-blue-300 border border-slate-700">Ctrl+P</kbd> (or <kbd className="rounded bg-slate-800 px-1.5 py-0.5 font-mono text-[11px] text-blue-300 border border-slate-700">Cmd+P</kbd>).
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowPrintNotice(false)}
            aria-label="Dismiss print notification"
            className="rounded-md p-1 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white cursor-pointer"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}

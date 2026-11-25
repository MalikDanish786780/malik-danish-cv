import { Clock, FolderOpen, Gamepad2, Layers } from 'lucide-react';

export function KPIMetricsRow() {
  const metrics = [
    {
      id: 'total-builds',
      title: 'Total Portfolio Builds',
      value: '11',
      badge: 'All Platforms',
      badgeTone: 'border-blue-200 bg-blue-50/80 text-blue-800',
      description: '9 Drive APKs + 1 Live Game + 1 In-Progress',
      icon: <Layers className="h-5 w-5 text-blue-600" aria-hidden="true" />,
      iconBg: 'bg-blue-50 ring-1 ring-blue-100',
    },
    {
      id: 'drive-apks',
      title: 'Android APK Releases',
      value: '9',
      badge: 'Google Drive',
      badgeTone: 'border-indigo-200 bg-indigo-50/80 text-indigo-800',
      description: 'Stand-alone APK builds in Drive folder',
      icon: <FolderOpen className="h-5 w-5 text-indigo-600" aria-hidden="true" />,
      iconBg: 'bg-indigo-50 ring-1 ring-indigo-100',
    },
    {
      id: 'live-games',
      title: 'Live Web Games (PWA)',
      value: '1',
      badge: 'Live Online',
      badgeTone: 'border-emerald-200 bg-emerald-50/80 text-emerald-800',
      description: 'AquaSort (installable PWA & web game)',
      icon: <Gamepad2 className="h-5 w-5 text-emerald-600" aria-hidden="true" />,
      iconBg: 'bg-emerald-50 ring-1 ring-emerald-100',
    },
    {
      id: 'active-build',
      title: 'Active Pipeline Build',
      value: '1',
      badge: 'In Progress',
      badgeTone: 'border-amber-200 bg-amber-50/80 text-amber-800',
      description: 'Hospitality & Retail App (Nov 2026)',
      icon: <Clock className="h-5 w-5 text-amber-600" aria-hidden="true" />,
      iconBg: 'bg-amber-50 ring-1 ring-amber-100',
    },
  ];

  return (
    <section aria-label="Key Portfolio Metrics" className="print-section">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 print:grid-cols-4 print:gap-2.5">
        {metrics.map((item) => (
          <div
            key={item.id}
            className="print-break-inside-avoid flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-5 shadow-2xs transition-all hover:border-slate-300 hover:shadow-xs print:rounded-none print:border-slate-300 print:p-2.5 print:shadow-none"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 print:text-[10px]">
                  {item.title}
                </p>
                <p className="font-mono text-3xl font-extrabold tabular-nums text-slate-950 print:text-2xl">
                  {item.value}
                </p>
              </div>
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${item.iconBg} print:hidden`}
              >
                {item.icon}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-3 print:mt-1.5 print:pt-1.5">
              <span className="truncate text-xs text-slate-600 print:text-[10px]">
                {item.description}
              </span>
              <span
                className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[10.5px] font-semibold print:text-[9.5px] ${item.badgeTone}`}
              >
                {item.badge}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

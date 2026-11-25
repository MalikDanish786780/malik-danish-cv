import { useState, useMemo, type ReactNode } from 'react';

export interface DonutSegment {
  id: string;
  label: string;
  count: number;
  color: string;
  description?: string;
}

interface SvgDonutChartProps {
  title: string;
  subtitle: string;
  segments: DonutSegment[];
  totalLabel?: string;
  icon?: ReactNode;
  footnote?: string;
}

export function SvgDonutChart({
  title,
  subtitle,
  segments,
  totalLabel = 'Total Builds',
  icon,
  footnote,
}: SvgDonutChartProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const total = useMemo(
    () => segments.reduce((sum, item) => sum + item.count, 0),
    [segments]
  );

  const radius = 40;
  const circumference = 2 * Math.PI * radius; // ~251.327

  // Largest Remainder Method (Hamilton-Hare) to guarantee the sum of percentages is ALWAYS exactly 100%
  const calculatedSegments = useMemo(() => {
    if (total <= 0) return [];

    const unroundedPercentages = segments.map((seg) => (seg.count / total) * 100);
    const floorPercentages = unroundedPercentages.map((p) => Math.floor(p));
    const sumFloors = floorPercentages.reduce((a, b) => a + b, 0);
    const remainderNeeded = 100 - sumFloors;

    const remainderList = unroundedPercentages.map((val, idx) => ({
      idx,
      remainder: val - floorPercentages[idx],
    }));
    remainderList.sort((a, b) => b.remainder - a.remainder);

    const finalPercentages = [...floorPercentages];
    for (let i = 0; i < remainderNeeded && i < remainderList.length; i++) {
      finalPercentages[remainderList[i].idx] += 1;
    }

    let accumulatedCount = 0;
    return segments.map((seg, idx) => {
      const fraction = seg.count / total;
      const strokeDasharray = `${fraction * circumference} ${circumference * (1 - fraction)}`;
      const strokeDashoffset = -(accumulatedCount / total) * circumference;
      const percentage = finalPercentages[idx];
      accumulatedCount += seg.count;
      return {
        ...seg,
        percentage,
        strokeDasharray,
        strokeDashoffset,
      };
    });
  }, [segments, total, circumference]);

  const activeSegment = hoveredId
    ? calculatedSegments.find((s) => s.id === hoveredId)
    : null;

  return (
    <div className="print-break-inside-avoid flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-5 shadow-xs transition-shadow hover:shadow-sm print:rounded-none print:border-slate-300 print:shadow-none">
      <div>
        {/* Card Header */}
        <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3 print:border-slate-200 print:pb-2">
          <div>
            <div className="flex items-center gap-2">
              {icon}
              <h3 className="font-display text-sm font-bold text-slate-900 print:text-xs">
                {title}
              </h3>
            </div>
            <p className="mt-0.5 text-xs text-slate-500 print:text-[10px]">
              {subtitle}
            </p>
          </div>
          <span className="font-mono text-xs font-semibold tabular-nums text-slate-600 print:text-[11px]">
            {total} items
          </span>
        </div>

        {/* Donut Chart & Center Metric Area */}
        <div className="mt-4 flex flex-col items-center justify-center sm:flex-row sm:items-center sm:justify-around gap-5">
          <div className="relative flex h-48 w-48 shrink-0 items-center justify-center">
            <svg
              className="h-full w-full transform -rotate-90"
              viewBox="0 0 100 100"
              aria-label={`${title} donut chart visualization`}
            >
              {/* Background Track */}
              <circle
                cx="50"
                cy="50"
                r={radius}
                className="stroke-slate-100 fill-none"
                strokeWidth="13"
              />

              {/* Data Segments */}
              {calculatedSegments.map((seg) => {
                const isHovered = hoveredId === seg.id;
                return (
                  <circle
                    key={seg.id}
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="none"
                    stroke={seg.color}
                    strokeWidth={isHovered ? 15 : 13}
                    strokeDasharray={seg.strokeDasharray}
                    strokeDashoffset={seg.strokeDashoffset}
                    className="cursor-pointer transition-all duration-200"
                    onMouseEnter={() => setHoveredId(seg.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    style={{
                      opacity: hoveredId && !isHovered ? 0.45 : 1,
                      filter: isHovered ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))' : 'none',
                    }}
                  />
                );
              })}
            </svg>

            {/* Center Label (Tabular Numerals & Dynamic Hover State) */}
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center p-3">
              {activeSegment ? (
                <>
                  <span className="font-mono text-2xl font-extrabold tabular-nums text-slate-950">
                    {activeSegment.count}
                  </span>
                  <span className="font-mono text-[11px] font-semibold text-slate-600">
                    {activeSegment.percentage}%
                  </span>
                  <span className="mt-0.5 max-w-[85px] truncate text-[10px] font-medium text-slate-500">
                    {activeSegment.label}
                  </span>
                </>
              ) : (
                <>
                  <span className="font-mono text-2xl font-extrabold tabular-nums text-slate-950">
                    {total}
                  </span>
                  <span className="text-[11px] font-medium text-slate-500">
                    {totalLabel}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Color-Coded Interactive Legend */}
          <div className="w-full sm:w-auto flex-1 space-y-1.5 text-xs">
            {calculatedSegments.map((seg) => {
              const isHovered = hoveredId === seg.id;
              return (
                <div
                  key={seg.id}
                  onMouseEnter={() => setHoveredId(seg.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`flex items-center justify-between gap-3 rounded-lg px-2.5 py-1.5 transition-colors cursor-pointer ${
                    isHovered
                      ? 'bg-slate-100/80 text-slate-950 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span
                      className="h-2.5 w-2.5 shrink-0 rounded-xs transition-transform"
                      style={{
                        backgroundColor: seg.color,
                        transform: isHovered ? 'scale(1.25)' : 'scale(1)',
                      }}
                      aria-hidden="true"
                    />
                    <span className="truncate text-xs">{seg.label}</span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 font-mono text-[11px] tabular-nums text-slate-500">
                    <span className="font-semibold text-slate-800">{seg.count}</span>
                    <span>({seg.percentage}%)</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {footnote && (
        <p className="mt-4 border-t border-slate-100 pt-3 text-[11px] leading-relaxed text-slate-500 print:mt-2 print:pt-1.5 print:text-[10px]">
          {footnote}
        </p>
      )}
    </div>
  );
}

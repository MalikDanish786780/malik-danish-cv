import { BarChart3, PieChart } from 'lucide-react';
import { SvgDonutChart, type DonutSegment } from './SvgDonutChart';

export function AnalyticsChartsSection() {
  const categorySegments: DonutSegment[] = [
    {
      id: 'games-pwa',
      label: 'Casual Games & PWAs',
      count: 2,
      color: '#10b981', // Emerald
      description: 'AquaSort (Web/PWA) & Crystal Sort (APK)',
    },
    {
      id: 'management-billing',
      label: 'Management & Billing Apps',
      count: 2,
      color: '#2563eb', // Blue
      description: 'TubeWell System & Hosel Nexus',
    },
    {
      id: 'ai-education',
      label: 'AI & Education Utilities',
      count: 2,
      color: '#8b5cf6', // Violet
      description: 'Agri Auditor AI & Stellaris Edu',
    },
    {
      id: 'utility-apks',
      label: 'Utility & Tool APKs',
      count: 4,
      color: '#f59e0b', // Amber
      description: 'PDF Tool, Web to App, Islamic App & Advance Calculator',
    },
    {
      id: 'in-progress',
      label: 'Multi-Module Operations',
      count: 1,
      color: '#06b6d4', // Cyan
      description: 'Hospitality & Retail Management App (In-Progress)',
    },
  ];

  const techWorkflowSegments: DonutSegment[] = [
    {
      id: 'flutter-android',
      label: 'Flutter, Dart & Android Studio',
      count: 4,
      color: '#0284c7', // Sky
      description: 'Core cross-platform mobile architecture & in-progress operations app',
    },
    {
      id: 'kotlin-apks',
      label: 'Kotlin & Native Android APKs',
      count: 3,
      color: '#6366f1', // Indigo
      description: 'Native mobile utilities & system APK generation',
    },
    {
      id: 'react-ai-studio',
      label: 'React, TS & PWA (AI Studio)',
      count: 2,
      color: '#10b981', // Emerald
      description: 'Rapid prototyping, interactive web mechanics & PWAs',
    },
    {
      id: 'firebase-backend',
      label: 'Firebase, Cloud & QA Testing',
      count: 2,
      color: '#d97706', // Amber
      description: 'Auth, Firestore, security rules & manual QA validation',
    },
  ];

  return (
    <section aria-label="Portfolio Analytics & Distribution" className="print-section space-y-3">
      <div className="border-b border-slate-200 pb-2 print:pb-1">
        <h2 className="font-display text-lg font-bold tracking-tight text-slate-950 print:text-base">
          Portfolio Analytics &amp; Workflow Mix
        </h2>
        <p className="text-xs text-slate-500 print:hidden">
          Honest project breakdown and technical distribution totaling 100% across all 11 builds (9 Drive APKs + 1 Live Web Game + 1 In-Progress App).
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 print:grid-cols-2 print:gap-3">
        <SvgDonutChart
          title="Portfolio Mix by Category"
          subtitle="Distribution of 11 builds (9 Drive APKs + 1 Live Game + 1 In-Progress App)"
          segments={categorySegments}
          totalLabel="Total Builds"
          icon={<PieChart className="h-4 w-4 text-emerald-600 print:hidden" aria-hidden="true" />}
          footnote="Covers 9 Google Drive APK folders, 1 live AquaSort web/PWA game, and 1 in-progress Hospitality & Retail operations app (sums to 100%)."
        />

        <SvgDonutChart
          title="Tech & Workflow Focus"
          subtitle="Hands-on distribution across cross-platform frameworks & tools (11 total)"
          segments={techWorkflowSegments}
          totalLabel="Focus Areas"
          icon={<BarChart3 className="h-4 w-4 text-blue-600 print:hidden" aria-hidden="true" />}
          footnote="Combines foundational cross-platform development (Flutter, Dart, Android Studio, Kotlin) with AI-assisted rapid prototyping in Google AI Studio, hands-on Firebase setup, and manual QA/device testing (sums to 100%)."
        />
      </div>
    </section>
  );
}

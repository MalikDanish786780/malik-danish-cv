export type ProjectCategory = 'app' | 'game';

export type ProjectStatus = 'Live' | 'Released Build' | 'Released Builds' | 'In Development';

export interface ProjectLink {
  label: string;
  url: string;
  isPrimary?: boolean;
}

export interface PortfolioProject {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  platform: string;
  status: ProjectStatus;
  timeline?: string;
  summary: string;
  highlights: string[];
  stack: string[];
  link?: ProjectLink;
  featured?: boolean;
}

export interface SkillGroup {
  id: string;
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface CandidateProfile {
  name: string;
  roleTitle: string;
  location: string;
  email: string;
  phone: string;
  whatsapp: string;
  driveApksUrl: string;
  aquaSortUrl: string;
  summary: string;
}

export const DRIVE_APKS_URL =
  'https://drive.google.com/drive/folders/1JeuO7uulpnBd1cYD4yB7vFCGvr2sv-MY?usp=sharing';

export const AQUASORT_LIVE_URL = 'https://aquasort.ai.studio';

export const candidateProfile: CandidateProfile = {
  name: 'MALIK DANISH',
  roleTitle:
    'Cross-Platform App & Game Developer (Flutter, Dart, Android Studio, Kotlin & AI Studio)',
  location: 'Mianwali, Punjab, Pakistan',
  email: 'malik2024danish@gmail.com',
  phone: '+92 335 1815620',
  whatsapp: '+92 332 8504620',
  driveApksUrl: DRIVE_APKS_URL,
  aquaSortUrl: AQUASORT_LIVE_URL,
  summary:
    'Hands-on Cross-Platform App & Game Developer experienced in building mobile applications, installable Progressive Web Apps (PWAs), and casual puzzle games across Android, Windows, and web platforms. Skilled in Flutter, Dart, Android Studio, Kotlin, and Google AI Studio alongside React, TypeScript, and Firebase. Combines foundational app development in Android Studio with AI-assisted rapid prototyping, interactive game/UI flows, database/auth setup, and manual testing.',
};

export const skillGroups: SkillGroup[] = [
  {
    id: 'cross-platform-stack',
    title: 'Cross-Platform App & Game Stack',
    skills: [
      'Flutter',
      'Dart',
      'Android Studio',
      'Kotlin (Basics & Jetpack Compose)',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Progressive Web Apps (PWA — installable on Android, Windows & supported browsers)',
    ],
  },
  {
    id: 'game-interactive-ui',
    title: 'Game & Interactive UI Features',
    skills: [
      'Casual Puzzle Game Mechanics',
      'Level Progression & Economy/Shop UI',
      'Custom SVG & Smooth Animations',
      'Web Audio Sound Effects',
      'Haptics / Vibration Feedback',
    ],
  },
  {
    id: 'ai-dev-tools',
    title: 'AI & Development Tools',
    skills: [
      'Google AI Studio',
      'Android Studio',
      'AI-Assisted Rapid Prototyping & App/Game Building',
      'Git / GitHub',
      'Figma',
    ],
  },
  {
    id: 'backend-cloud-storage',
    title: 'Backend, Cloud & Storage',
    skills: [
      'Firebase Authentication',
      'Cloud Firestore',
      'Security Rules',
      'REST API Integration',
      'Offline Caching / Local Storage',
      'Role-Based Access (SUPER_ADMIN, ADMIN, MEMBER)',
      'PDF Generation & Sharing',
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: 'freelance-dev',
    role: 'Freelance Cross-Platform App & Game Developer',
    organization: 'Self-Employed',
    location: 'Remote',
    period: 'Jul 2025 – Present',
    bullets: [
      'Built and tested multiple cross-platform apps and casual puzzle games using Flutter, Dart, Android Studio, and Kotlin, expanding into AI-assisted rapid prototyping with Google AI Studio.',
      'Developed installable web/PWA games and Android APKs with smooth animations, level progression, sound effects, and local/cloud progress saving.',
      'Integrated Firebase Authentication, Cloud Firestore, and RESTful APIs for real-time data, leaderboards, and user management.',
      'Handled UI/UX polish, database/role setup, manual QA testing, debugging, and APK/PWA builds.',
    ],
  },
];

export const projects: PortfolioProject[] = [
  {
    id: 'aquasort',
    title: 'AquaSort',
    subtitle: 'Cross-Platform Puzzle Game — Web / PWA',
    category: 'game',
    platform: 'Web / PWA',
    status: 'Live',
    timeline: 'Live Web Game',
    featured: true,
    summary:
      'Built using Google AI Studio as a cross-platform puzzle game accessible via link and installable on Android, Windows, and supported browsers/devices. Features mobile-first UI, animations, level progression, shop/customization flow, Web Audio sound effects, and cloud/local progress saving.',
    highlights: [
      'Installable Progressive Web App across Android, Windows, and desktop browsers',
      'Mobile-first liquid sorting mechanics with smooth animations and custom SVG visuals',
      'Level progression, in-game shop/customization economy, and Web Audio sound effects',
      'Cloud and local storage progress synchronization',
    ],
    stack: ['Google AI Studio', 'PWA', 'React', 'TypeScript', 'Web Audio', 'Cloud/Local Storage'],
    link: {
      label: 'Play Live Game',
      url: AQUASORT_LIVE_URL,
      isPrimary: true,
    },
  },
  {
    id: 'crystal-sort',
    title: 'Crystal Sort',
    subtitle: 'Puzzle Game — Android APK',
    category: 'game',
    platform: 'Android APK',
    status: 'Released Build',
    summary:
      'Casual sorting puzzle game build focused on interactive gameplay mechanics and smooth mobile UI flow.',
    highlights: [
      'Interactive crystal sorting puzzle mechanics designed for responsive touch play',
      'Clean level progression and streamlined mobile UI transitions',
      'Packaged and verified as a standalone Android APK build',
    ],
    stack: ['Android APK', 'Casual Puzzle Mechanics', 'Mobile UI'],
    link: {
      label: 'View APK in Drive',
      url: DRIVE_APKS_URL,
    },
  },
  {
    id: 'tubewell-system',
    title: 'TubeWell System',
    subtitle: 'Ledger & Billing Management App — Android / Firebase',
    category: 'app',
    platform: 'Android / Firebase',
    status: 'Released Build',
    featured: true,
    summary:
      'Multi-user accounting and billing app with role management, usage-based expense splitting, PDF report generation/sharing, and reminders.',
    highlights: [
      'Role-based access control supporting SUPER_ADMIN, ADMIN, and MEMBER workflows',
      'Automated usage-based expense splitting and transparent member ledgers',
      'Built-in PDF billing report generation, direct sharing, and payment reminders',
    ],
    stack: ['Android', 'Firebase Auth', 'Cloud Firestore', 'RBAC', 'PDF Export'],
    link: {
      label: 'View APK in Drive',
      url: DRIVE_APKS_URL,
    },
  },
  {
    id: 'hosel-nexus',
    title: 'Hosel Nexus',
    subtitle: 'Hostel Management App — Mobile APK',
    category: 'app',
    platform: 'Mobile APK',
    status: 'Released Build',
    summary:
      'Built to handle hostel records, residents/operations, and day-to-day mobile workflows.',
    highlights: [
      'Centralized resident records and room/operations tracking',
      'Mobile-first interface tailored for daily administrative workflows',
    ],
    stack: ['Mobile APK', 'Operations Workflow', 'Android'],
    link: {
      label: 'View APK in Drive',
      url: DRIVE_APKS_URL,
    },
  },
  {
    id: 'agri-auditor-ai',
    title: 'Agri Auditor AI',
    subtitle: 'Agriculture & AI Utility App — Mobile APK',
    category: 'app',
    platform: 'Mobile APK',
    status: 'Released Build',
    summary:
      'Created an AI-assisted utility app for agricultural auditing and practical field workflows.',
    highlights: [
      'AI-assisted auditing flows structured for practical agricultural field checks',
      'Clean mobile utility screens optimized for quick field entry',
    ],
    stack: ['Mobile APK', 'AI-Assisted Utility', 'Field Workflows'],
    link: {
      label: 'View APK in Drive',
      url: DRIVE_APKS_URL,
    },
  },
  {
    id: 'stellaris-edu',
    title: 'Stellaris Edu',
    subtitle: 'Education App — Mobile APK',
    category: 'app',
    platform: 'Mobile APK',
    status: 'Released Build',
    summary:
      'Educational mobile app designed for structured learning and study features.',
    highlights: [
      'Structured learning modules and study-oriented navigation',
      'Accessible mobile layout built for consistent daily study sessions',
    ],
    stack: ['Mobile APK', 'EdTech', 'Structured Learning'],
    link: {
      label: 'View APK in Drive',
      url: DRIVE_APKS_URL,
    },
  },
  {
    id: 'pdf-tool',
    title: 'PDF Tool',
    subtitle: 'Utility App — Mobile APK',
    category: 'app',
    platform: 'Mobile APK',
    status: 'Released Build',
    summary:
      'Mobile utility APK focused on handling and working with PDF files conveniently.',
    highlights: [
      'Focused mobile utility for viewing, organizing, and handling PDF documents',
      'Lightweight standalone Android APK',
    ],
    stack: ['Mobile APK', 'PDF Utilities', 'Android'],
    link: {
      label: 'View APK in Drive',
      url: DRIVE_APKS_URL,
    },
  },
  {
    id: 'utility-apks-suite',
    title: 'Web to App, Islamic App & Advance Calculator',
    subtitle: 'Utility APKs — Android',
    category: 'app',
    platform: 'Android',
    status: 'Released Builds',
    summary:
      'Includes Web to App (web wrapper utility), Islamic App (daily utility and religious reference), and Advance Calculator (extended calculation functions).',
    highlights: [
      'Web to App: lightweight Android web wrapper utility',
      'Islamic App: daily utility tools and religious reference content',
      'Advance Calculator: extended mathematical and calculation functions',
    ],
    stack: ['Android APKs', 'Kotlin / Android Studio', 'Utility Suite'],
    link: {
      label: 'View APKs in Drive',
      url: DRIVE_APKS_URL,
    },
  },
  {
    id: 'hospitality-retail-app',
    title: 'Hospitality & Retail Management App',
    subtitle: 'Multi-Module Cross-Platform Operations App',
    category: 'app',
    platform: 'Cross-Platform',
    status: 'In Development',
    timeline: 'Starting Nov 2026',
    summary:
      'Developing a multi-module cross-platform app for restaurant, hotel, and shopping operations covering orders, billing, and business workflows.',
    highlights: [
      'Unified multi-module architecture for restaurant, hotel, and retail shopping',
      'End-to-end order handling, billing, and business workflow management',
    ],
    stack: ['Cross-Platform', 'Orders & Billing', 'Business Workflows'],
  },
];

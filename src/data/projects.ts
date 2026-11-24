export interface Project {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  github: string;
  demo: string;
  frontendFeatures: string[];
  previewAccent: string;
}

export const projects: Project[] = [
  {
    title: "Student Management System",
    description: "A comprehensive student information system for tracking student records, courses, grades, attendance, and fee payments.",
    category: "Full-Stack",
    technologies: ["React", "Laravel", "MySQL", "Tailwind CSS"],
    github: "https://github.com/amanuel212121",
    demo: "#",
    frontendFeatures: [
      "Student & Faculty Portal with Role-Based Access",
      "Real-Time Grade Calculation & Transcripts Generator",
      "Course Registration & Class Schedule Grid View",
      "Automated Student Attendance & Report Tracker"
    ],
    previewAccent: "from-blue-600 to-indigo-600"
  },
  {
    title: "Library Management System",
    description: "A digital library platform facilitating book inventory, catalog searches, member borrowings, and fine calculations.",
    category: "Full-Stack",
    technologies: ["React", "Laravel", "MySQL", "Tailwind CSS"],
    github: "https://github.com/amanuel212121",
    demo: "#",
    frontendFeatures: [
      "Dynamic Book Catalog Search with Live Filters",
      "Borrowing History & Automated Due-Date Notification",
      "Librarian Dashboard with Barcode / Book ID Scanner",
      "Inventory Statistics & Overdue Penalty Calculator"
    ],
    previewAccent: "from-purple-600 to-pink-600"
  },
  {
    title: "Hotel Management & Booking System",
    description: "An end-to-end hotel operations application handling room bookings, guest check-ins, housekeeping, and billing invoices.",
    category: "Full-Stack",
    technologies: ["React", "Laravel", "MySQL", "Bootstrap"],
    github: "https://github.com/amanuel212121",
    demo: "#",
    frontendFeatures: [
      "Interactive Room Availability Calendar & Floor Map",
      "Seamless Guest Check-in / Checkout Workflow",
      "Automated Billing, Invoicing & Payment Tracker",
      "Staff Housekeeping & Maintenance Management"
    ],
    previewAccent: "from-emerald-600 to-teal-600"
  },
  {
    title: "Document Authentication & Verification System",
    description: "A secure digital verification portal for cryptographic authentication of academic degrees, certificates, and official documents.",
    category: "Web Application",
    technologies: ["React", "Laravel", "MySQL", "Tailwind CSS"],
    github: "https://github.com/amanuel212121",
    demo: "#",
    frontendFeatures: [
      "Drag-and-Drop Document Verification Upload Zone",
      "Instant Authenticity Badge & Tamper-Detection Status",
      "QR Code Verification & Hash Validation Viewer",
      "Audit Log of Verifications & Institutional Signatures"
    ],
    previewAccent: "from-amber-500 to-orange-600"
  },
  {
    title: "Hospital & Healthcare Management System",
    description: "A healthcare portal designed to manage outpatient appointments, electronic medical records (EMR), doctor schedules, and pharmacy prescriptions.",
    category: "Full-Stack",
    technologies: ["React", "Laravel", "MySQL", "Tailwind CSS"],
    github: "https://github.com/amanuel212121",
    demo: "#",
    frontendFeatures: [
      "Patient Appointment Booking & Queue Status Board",
      "Doctor Diagnostic Notes & Electronic Health Records UI",
      "Pharmacy Medication Prescriptions & Stock Tracker",
      "Emergency Ward Bed Allocation & Triage View"
    ],
    previewAccent: "from-rose-500 to-red-600"
  },
  {
    title: "Business Financial & KPI Analytics Dashboard",
    description: "An executive business intelligence dashboard bridging software engineering and management to track revenue, expenses, and employee performance.",
    category: "Management & BI",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    github: "https://github.com/amanuel212121",
    demo: "#",
    frontendFeatures: [
      "Executive KPI Cards: Revenue, Gross Margin & Profit",
      "Interactive Monthly Cashflow & Expenditure Charts",
      "Department Budget Allocation & Variance Reports",
      "Strategic Performance Indicators & Target Goal Tracking"
    ],
    previewAccent: "from-violet-600 to-indigo-700"
  },
  {
    title: "Personal Portfolio",
    description: "A modern developer portfolio showcasing projects, technical skills, academic certificates, and business management background.",
    category: "Frontend",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/amanuel212121/my-portfolio",
    demo: "https://amanuel212121.github.io/my-portfolio/",
    frontendFeatures: [
      "Modern Glassmorphism UI with Dark Aesthetic",
      "Smooth Framer Motion Scroll Animations & Transitions",
      "Interactive Frontend Project Preview Modal",
      "Certificate Viewer & Instant Contact Links"
    ],
    previewAccent: "from-cyan-500 to-blue-600"
  }
];

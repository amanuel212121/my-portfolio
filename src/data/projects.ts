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
    description: "A modern student management system for managing student information, grades, course enrollments, and academic records.",
    category: "Full-Stack",
    technologies: ["React", "Laravel", "MySQL", "Tailwind CSS"],
    github: "https://github.com/amanuel212121",
    demo: "#",
    frontendFeatures: [
      "Interactive Student & Faculty Dashboard",
      "Dynamic Grade & Attendance Tables with Search/Filters",
      "Student Registration & Profile Management UI",
      "Responsive Layout with Real-Time Validation"
    ],
    previewAccent: "from-blue-600 to-indigo-600"
  },
  {
    title: "Library Management System",
    description: "A digital library system for managing book catalogs, member borrowing history, and automated return tracking.",
    category: "Full-Stack",
    technologies: ["React", "Laravel", "MySQL", "Tailwind CSS"],
    github: "https://github.com/amanuel212121",
    demo: "#",
    frontendFeatures: [
      "Book Search Catalog with Live Filter & Category Cards",
      "Member Borrowing & Due Date Tracker UI",
      "Admin Inventory & Book Issuing Panels",
      "Clean Dashboard with Statistics & Analytics"
    ],
    previewAccent: "from-purple-600 to-pink-600"
  },
  {
    title: "Hotel Management System",
    description: "A comprehensive hotel management application handling room reservations, customer check-ins/check-outs, and billing.",
    category: "Full-Stack",
    technologies: ["React", "Laravel", "MySQL", "Bootstrap"],
    github: "https://github.com/amanuel212121",
    demo: "#",
    frontendFeatures: [
      "Room Booking Calendar & Real-Time Availability Grid",
      "Guest Check-in / Check-out Workflow Interface",
      "Billing, Invoice Generation, and Payment Status Views",
      "Interactive Room Cards with Amenities & Rates"
    ],
    previewAccent: "from-emerald-600 to-teal-600"
  },
  {
    title: "Document Authentication System",
    description: "A secure web application for digital document verification, authenticity checks, and cryptographic validation.",
    category: "Web Application",
    technologies: ["React", "Laravel", "MySQL", "Tailwind CSS"],
    github: "https://github.com/amanuel212121",
    demo: "#",
    frontendFeatures: [
      "Drag-and-Drop Document Verification Upload Zone",
      "Instant Verification Status & Authenticity Badge",
      "QR Code / Digital Signature Scanner Interface",
      "Audit Trail & Verification History View"
    ],
    previewAccent: "from-amber-500 to-orange-600"
  },
  {
    title: "Personal Portfolio",
    description: "A sleek, responsive developer portfolio showcasing projects, technical skills, and achievements.",
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

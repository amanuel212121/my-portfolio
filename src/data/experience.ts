export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
}

export const experience: ExperienceItem[] = [
  {
    title: "Full-Stack Web Developer",
    company: "Freelance & Independent Projects",
    period: "2023 - Present",
    location: "Woldia City, North Wello, Ethiopia",
    description:
      "Designing and engineering modern web applications, interactive student information systems, hospital EMR prototypes, and administrative portals utilizing Next.js, React, TypeScript, PHP, Laravel, and MySQL.",
    skills: ["React", "Next.js", "Laravel", "PHP", "MySQL", "Tailwind CSS"],
  },
  {
    title: "Business & Management Projects Lead",
    company: "Encodo College (Faculty of Business & Management)",
    period: "2023 - Present",
    location: "Woldia City, North Wello, Ethiopia",
    description:
      "Leading collegiate business research, organizational case studies, financial evaluations, and strategic business plans. Collaborating in cross-functional student teams on entrepreneurship initiatives and leadership development.",
    skills: ["Strategic Planning", "Leadership", "Financial Management", "Team Coordination", "Report Writing"],
  },
  {
    title: "Software Engineering Fellow & Academic Team Lead",
    company: "Woldia University",
    period: "2022 - Present",
    location: "Woldia City, North Wello, Ethiopia",
    description:
      "Spearheading academic software engineering team projects, system architecture designs, relational database modeling, and algorithmic problem-solving in Software Engineering coursework.",
    skills: ["Software Architecture", "Data Structures", "Algorithms", "Database Design", "Git & GitHub"],
  },
];

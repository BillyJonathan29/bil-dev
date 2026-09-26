export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const portfolioData = {
  personal: {
    name: "Nama Anda",
    role: "Frontend Developer / Software Engineer",
    bio: "Saya adalah seorang developer yang bersemangat dalam membangun antarmuka web yang modern, responsif, dan ramah pengguna dengan ekosistem React dan TypeScript.",
    location: "Indonesia",
    email: "emailanda@example.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  skills: [
    {
      category: "Frontend Development",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5/CSS3", "JavaScript (ES6+)"],
    },
    {
      category: "Tools & Workflow",
      skills: ["Git & GitHub", "Vite", "VS Code", "Figma", "npm / yarn / pnpm", "Postman"],
    },
    {
      category: "Fokus & Minat",
      skills: ["Responsive Web Design", "Clean Code", "Web Performance", "UI/UX Best Practices"],
    },
  ] as SkillCategory[],
  projects: [
    {
      id: 1,
      title: "E-Commerce Modern Platform",
      description: "Aplikasi belanja online dengan fitur katalog produk interaktif, keranjang belanja dinamis, dan sistem checkout responsif.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Aplikasi manajemen tugas produktivitas dengan fitur drag-and-drop, filter prioritas, dan penyimpanan lokal.",
      tags: ["React", "TypeScript", "Tailwind CSS", "LocalStorage"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Dashboard pemantau prakiraan cuaca real-time dengan integrasi REST API, visual grafik, dan deteksi lokasi otomatis.",
      tags: ["React", "TypeScript", "API Integration", "Tailwind CSS"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
    },
  ] as Project[],
};

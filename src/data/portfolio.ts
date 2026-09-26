// ─────────────────────────────────────────────
// Portfolio Data — Billy
// Edit this file to update all portfolio content
// ─────────────────────────────────────────────

export const personalInfo = {
  name: "Billy",
  firstName: "Billy",
  role: "Software Developer",
  tagline: "focused on Web & Frontend Development.",
  bio: "Saya memiliki ketertarikan pada software development, khususnya web development dan frontend development. Saya senang membangun aplikasi yang tidak hanya berfungsi dengan baik, tetapi juga memiliki user experience yang baik.",
  bioExtended: "Saya percaya bahwa kode yang baik adalah kode yang tidak hanya berjalan dengan benar, tetapi juga mudah dibaca, dipelihara, dan dikembangkan lebih lanjut.",
  location: "Indonesia",
  availability: "Open to opportunities",
  email: "billy@example.com",         // ← Edit
  github: "https://github.com",       // ← Edit with your username
  linkedin: "https://linkedin.com",   // ← Edit with your profile
  instagram: "https://instagram.com", // ← Edit with your handle
};

export const stats = [
  { value: "10+", label: "Projects Built" },
  { value: "3+", label: "Hackathons" },
  { value: "15+", label: "Technologies" },
  { value: "2+", label: "Years Experience" },
];

export const education = [
  {
    institution: "Universitas / Institusi Anda", // ← Edit
    program: "Program Studi / Jurusan",           // ← Edit
    degree: "Sarjana (S1)",                       // ← Edit
    year: "2023 – Sekarang",
    location: "Indonesia",
  },
];

export const experience = [
  {
    year: "2026",
    title: "Frontend Developer",
    organization: "Nama Proyek / Organisasi", // ← Edit
    type: "Project",
    description: "Membangun antarmuka modern yang responsif dan berorientasi pada user experience menggunakan React dan TypeScript.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    current: true,
  },
  {
    year: "2025 – 2026",
    title: "Kepala Divisi Akademis",
    organization: "UKM Paguyuban Barudak Komputer",
    type: "Organization",
    description: "Memimpin divisi akademis, merancang program pembelajaran, mengorganisir kegiatan teknologi, dan membimbing anggota dalam pengembangan skill teknis.",
    technologies: ["Leadership", "Program Design", "Mentoring"],
    current: false,
  },
  {
    year: "2025",
    title: "Web Developer",
    organization: "Nama Proyek / Organisasi", // ← Edit
    type: "Project",
    description: "Mengembangkan aplikasi web full-stack dengan fokus pada clean architecture dan performa tinggi.",
    technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    current: false,
  },
];

export const achievements = [
  {
    number: "01",
    rank: "1st Place",
    competition: "PIDI Digdaya x Hackathon Bank Indonesia 2026",
    category: "Hackathon",
    year: "2026",
    description: "Meraih juara pertama dalam kompetisi hackathon bergengsi yang diselenggarakan oleh Bank Indonesia, menampilkan solusi inovatif berbasis teknologi.",
    team: true,
    featured: true,
  },
  {
    number: "02",
    rank: "Peserta", // ← Edit: e.g. "Finalis", "2nd Place", etc.
    competition: "Nama Kompetisi / Hackathon", // ← Edit
    category: "Competition",
    year: "2025",
    description: "Deskripsi pencapaian atau kompetisi lainnya.", // ← Edit
    team: true,
    featured: false,
  },
];

export const organizations = [
  {
    role: "Kepala Divisi Akademis",
    organization: "UKM Paguyuban Barudak Komputer",
    period: "2025 – 2026",
    type: "Academic Organization",
    responsibilities: [
      "Merancang dan mengimplementasikan program pembelajaran teknologi",
      "Memimpin dan membimbing anggota divisi akademis",
      "Mengorganisir workshop, seminar, dan kegiatan teknologi",
      "Berkolaborasi dengan divisi lain untuk pengembangan organisasi",
    ],
    technologies: ["Leadership", "Event Management", "Teaching"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Nama Proyek Utama", // ← Edit
    description: "Deskripsi proyek unggulan Anda. Jelaskan apa yang dibangun, teknologi yang digunakan, dan dampak atau hasil dari proyek tersebut.", // ← Edit
    longDescription: "Detail lebih panjang mengenai proyek ini, termasuk tantangan yang dihadapi dan solusi yang diterapkan.",
    image: null, // ← Replace with image path: "/images/project1.png"
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    github: "https://github.com", // ← Edit
    demo: "https://example.com",  // ← Edit
    featured: true,
    status: "Live",
  },
  {
    id: 2,
    title: "Proyek Kedua", // ← Edit
    description: "Deskripsi proyek kedua Anda. Tambahkan informasi yang relevan mengenai tujuan dan fitur utama proyek.", // ← Edit
    image: null,
    technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    github: "https://github.com", // ← Edit
    demo: null,
    featured: false,
    status: "Completed",
  },
  {
    id: 3,
    title: "Proyek Ketiga", // ← Edit
    description: "Deskripsi proyek ketiga. Ceritakan konteks dan hasil dari proyek ini.", // ← Edit
    image: null,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com", // ← Edit
    demo: "https://example.com",  // ← Edit
    featured: false,
    status: "In Progress",
  },
  {
    id: 4,
    title: "Proyek Keempat", // ← Edit
    description: "Deskripsi proyek keempat. Jelaskan masalah yang dipecahkan dan teknologi yang digunakan.", // ← Edit
    image: null,
    technologies: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com", // ← Edit
    demo: null,
    featured: false,
    status: "Completed",
  },
];

export const skills = [
  {
    category: "Frontend",
    icon: "🎨",
    items: [
      { name: "HTML5", icon: "html" },
      { name: "CSS3", icon: "css" },
      { name: "JavaScript", icon: "js" },
      { name: "TypeScript", icon: "ts" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "next" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: [
      { name: "PHP", icon: "php" },
      { name: "Laravel", icon: "laravel" },
      { name: "Node.js", icon: "node" },
      { name: "Hono", icon: "hono" },
    ],
  },
  {
    category: "Database",
    icon: "🗄️",
    items: [
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgresql" },
    ],
  },
  {
    category: "Tools",
    icon: "🛠️",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Figma", icon: "figma" },
      { name: "VS Code", icon: "vscode" },
    ],
  },
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com", handle: "@billy" },       // ← Edit
  { name: "LinkedIn", url: "https://linkedin.com", handle: "Billy" },    // ← Edit
  { name: "Instagram", url: "https://instagram.com", handle: "@billy" }, // ← Edit
  { name: "Email", url: "mailto:billy@example.com", handle: "billy@example.com" }, // ← Edit
];

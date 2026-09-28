// ─────────────────────────────────────────────────────────────
// Portfolio Data — Billy Jonathan
// Edit this file to update all portfolio content
// ─────────────────────────────────────────────────────────────

export const personalInfo = {
  name: "Billy Jonathan",
  firstName: "Billy",
  lastName: "Jonathan",
  role: "Full Stack Developer",
  tagline: "I build web applications and digital experiences\nwith a focus on clean interfaces and functional systems.",
  bio: "Saya adalah mahasiswa yang memiliki minat pada software development dan teknologi, dengan pengalaman sebagai Front-End Developer serta pengembangan berbagai proyek berbasis web dan mobile.",
  bioExtended: "Saya memiliki ketertarikan untuk mengembangkan kemampuan di bidang Front-End, Back-End, Data Science, dan Machine Learning.",
  location: "Kuningan, Jawa Barat, Indonesia",
  focus: ["Web Development", "Frontend Development", "Backend Development"],
  email: "billyjonathan048@gmail.com",
  github: "https://github.com/BillyJonathan29",
  linkedin: "https://www.linkedin.com/in/billy-jonathan-5775a42b9",
  instagram: "https://instagram.com",
  photo: "/src/assets/img/bil.png",
};

export const education = [
  {
    institution: "Universitas Kuningan",
    program: "S1 Teknik Informatika",
    faculty: "Fakultas Ilmu Komputer",
    year: "September 2024 — Present",
    location: "Kuningan, Jawa Barat",
  },
];

export const experience = [
  {
    period: "Jan 2026 — Mar 2026",
    title: "Web Developer",
    company: "CV Aras Creative",
    type: "Work",
    bullets: [
      "Membangun halaman web menggunakan Next.js dengan performa tinggi.",
      "Mengimplementasikan integrasi API dari back-end NestJS.",
      "Berkolaborasi dengan tim desain untuk menghasilkan UI yang responsif.",
    ],
    technologies: ["Next.js", "NestJS", "TypeScript", "Tailwind CSS"],
    current: false,
  },
  {
    period: "Feb 2024 — Feb 2025",
    title: "Admin & Team Leader",
    company: "Acursio Store",
    type: "Work",
    bullets: [
      "Memimpin tim admin dalam pengelolaan operasional toko online.",
      "Melayani pelanggan dan menangani komplain secara profesional.",
      "Mengkoordinasikan pengelolaan stok dan pengiriman produk.",
    ],
    technologies: ["Team Management", "Operations", "E-Commerce"],
    current: false,
  },
  {
    period: "2024",
    title: "Web Developer Intern",
    company: "PT Adiya Sumber",
    type: "Internship",
    bullets: [
      "Mengembangkan fitur front-end untuk aplikasi internal perusahaan.",
      "Membantu dalam pengujian dan debugging aplikasi web.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    current: false,
  },
];

export const achievements = [
  {
    number: "01",
    rank: "Juara 1",
    rankEn: "1st Place",
    competition: "PIDI Digdaya x Hackathon",
    organizer: "Bank Indonesia",
    year: "2026",
    project: "Crypto Sentinel 2026",
    projectDescription: "Hybrid AI Fraud Detection System — Sistem deteksi penipuan kripto berbasis AI yang menggabungkan Graph Neural Network dan analisis perilaku transaksi real-time.",
    technologies: ["React", "TypeScript", "FastAPI", "Python", "Machine Learning", "NetworkX", "SHAP"],
    github: "https://github.com/BillyJonathan29",
    demo: null,
    featured: true,
  },
  {
    number: "02",
    rank: "Juara 3",
    rankEn: "3rd Place",
    competition: "Kompetisi Web Development",
    organizer: "Informatics Competition",
    year: "2024",
    project: null,
    projectDescription: "Kompetisi pengembangan web tingkat mahasiswa, menampilkan kemampuan full-stack development.",
    technologies: [],
    github: "https://github.com/BillyJonathan29/ICF_TEAM2_E-Learning_FE",
    demo: null,
    featured: false,
  },
];

export const projects = [
  {
    id: 1,
    number: "01",
    title: "Crypto Sentinel",
    subtitle: "Hybrid AI Fraud Detection System",
    description: "Sistem deteksi penipuan kripto berbasis AI yang menggabungkan Graph Neural Network dan analisis perilaku transaksi real-time. Dibangun untuk Hackathon Bank Indonesia 2026 dan berhasil meraih Juara 1.",
    context: "Bank Indonesia Hackathon 2026",
    technologies: ["React", "TypeScript", "FastAPI", "Python", "Machine Learning", "NetworkX", "SHAP"],
    github: "https://github.com/BillyJonathan29",
    demo: "https://cryptosentinelinc.com/",
    image: null,
    featured: true,
    year: "2026",
  },
  {
    id: 2,
    number: "02",
    title: "Kosan Booking System",
    subtitle: "Web-based Boarding House Booking Platform",
    description: "Sistem pemesanan kamar kos berbasis web dengan fitur manajemen kamar, pemesanan online, dan dashboard admin untuk pengelolaan properti.",
    context: "Academic Project",
    technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Academic-Forge/framework-kosan",
    demo: null,
    image: null,
    featured: false,
    year: "2025",
  },
  {
    id: 3,
    number: "03",
    title: "Portfolio Website",
    subtitle: "Personal Developer Portfolio",
    description: "Website portfolio pribadi yang dibangun dengan React dan TypeScript, menampilkan proyek, pengalaman, dan kemampuan teknis.",
    context: "Personal Project",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/BillyJonathan29/bil-dev",
    demo: null,
    image: null,
    featured: false,
    year: "2026",
  },
];

export const skills = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Vite", "HTML", "CSS"],
  },
  {
    category: "Backend",
    items: ["Laravel", "PHP", "NestJS", "FastAPI", "Node.js"],
  },
  {
    category: "Data & AI",
    items: ["Python", "Pandas", "NumPy", "Scikit-learn", "NetworkX", "SHAP", "Machine Learning"],
  },
  {
    category: "Database & Tools",
    items: ["MySQL", "PostgreSQL", "Git", "GitHub", "Postman", "Google Colab"],
  },
];

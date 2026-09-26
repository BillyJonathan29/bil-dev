# Portfolio Website (React + TypeScript + Tailwind CSS)

Project website portofolio modern yang dibangun menggunakan **React 19**, **TypeScript**, **Tailwind CSS v4**, **Vite**, dan **Lucide Icons**.

---

## 🚀 Menjalankan Project

Jalankan perintah berikut di terminal:

```bash
# Menjalankan development server
npm run dev

# Membangun versi production (dist)
npm run build

# Menjalankan preview dari build production
npm run preview
```

Setelah menjalankan `npm run dev`, buka link yang muncul di browser (biasanya `http://localhost:5173`).

---

## ⚙️ Cara Mengubah Data Portofolio Anda

Semua data profil, keahlian, proyek, dan kontak dapat diubah dengan sangat mudah di satu file:

📁 **[`src/data/portfolioData.ts`](file:///d:/React/protfolio/src/data/portfolioData.ts)**

Di file tersebut Anda bisa memperbarui:
- **`personal`**: Nama, role pekerjaan, biografi singkat, lokasi, email, akun GitHub, dan LinkedIn.
- **`skills`**: Kategori keahlian beserta daftar teknologi yang Anda kuasai.
- **`projects`**: Daftar proyek (judul, deskripsi, teknologi/tags, link live demo, dan link repository GitHub).

---

## 📁 Struktur Direktori

```text
protfolio/
├── src/
│   ├── assets/              # Gambar & icon statis
│   ├── components/          # Komponen UI modular
│   │   ├── Navbar.tsx       # Navigasi sticky responsif (desktop & mobile)
│   │   ├── Hero.tsx         # Bagian pengenalan & Call-to-Action
│   │   ├── About.tsx        # Ringkasan tentang diri & value kerja
│   │   ├── Skills.tsx       # Keahlian teknis terkategori
│   │   ├── Projects.tsx     # Kartu showcase portofolio
│   │   ├── Contact.tsx      # Formulir pesan & kontak langsung
│   │   ├── Footer.tsx       # Copyright & footer
│   │   └── Icons.tsx        # Icon pelengkap (GitHub & LinkedIn SVG)
│   ├── data/
│   │   └── portfolioData.ts # Sumber data portofolio (mudah disunting)
│   ├── App.tsx              # Komponen utama
│   ├── main.tsx             # Entry point React
│   └── index.css            # Setup Tailwind CSS & styling global
├── package.json
├── vite.config.ts
└── tsconfig.json
```

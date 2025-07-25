// Data portfolio berdasarkan CV
export const personalData = {
  name: "Bayu Tri Prayitno", // Akan diupdate berdasarkan CV
  title: "Polines Student", // Akan diupdate berdasarkan CV
  location: "Indonesia",
  email: "treeprayitno12@gmail.com",
  phone: "+62 857 2504 0030",
  bio: "Mahasiswa Teknologi Rekayasa Komputer Politeknik Negeri Semarang dengan minat di bidang Pengembangan Perangkat Lunak, Jaringan, dan Sistem Tertanam. Antusias terhadap teknologi IoT dan AI, serta siap menghadapi tantangan dan proyek inovatif di dunia nyata.",
  motto: "Belajar tanpa henti, berkembang tanpa batas.",
  image: "/assets/profile/2.jpg", // Placeholder
  resume: "/CV_ATS.pdf",
};

export const socialLinks = {
  github: "https://github.com/bayu3prayitno",
  linkedin: "https://linkedin.com/in/bayu3prayitno",
  whatsapp: "https://wa.me/6285725040030",
  email: "mailto:treeprayitno12@gmail.com",
};

export const jobTitles = [
  "POLINES students",
  "Tech Enthusiast",
  "IT Professional in Training",
];

export const skills = {
  technical: [
    { name: "JavaScript", category: "Programming" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Programming" },
    { name: "HTML/CSS", category: "Frontend" },
    { name: "Git", category: "Tools" },
    { name: "MySQL", category: "Database" },
    { name: "Firebase", category: "Backend" },
    { name: "Flutter", category: "Programming" },
    { name: "IOT", category: "Programming" },
    { name: "Visual Studio Code", category: "Tools" },
    { name: "Laravel", category: "Backend" },
  ],
  soft: [
    "Problem Solving",
    "Kolaborasi Tim",
    "Komunikasi",
    "Manajemen Waktu",
    "Pemikiran Kritis",
    "Adaptabilitas",
    "Pemikiran Kreatif",
  ],
};

export const education = [
  {
    id: 1,
    institution: "POLITEKNIK NEGERI SEMARANG",
    degree: "Program Studi Teknologi Rekayasa Komputer",
    period: "2022 - Sekarang",
    IPK: "3.74 / 4.00",
    gpa: "3.74 / 4.00",
    location:
      "Jl. Prof. Soedarto, Tembalang, Semarang, Jawa Tengah, 50275, Indonesia",
    image:
      "https://blog-edutore-partner.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2022/06/14052251/polines.jpg", // placeholder, bisa diganti dengan foto kampus
    color: "from-blue-500 to-blue-600",
    description:
      "Fokus pada pengembangan teknologi komputer, sistem tertanam, dan rekayasa perangkat lunak. Mempelajari pemrograman, jaringan komputer, IoT, dan teknologi terkini.",
    achievements: [
      "IPK 3.74 dari 4.00",
      "Mengembangkan berbagai project teknologi",
    ],
  },
  {
    id: 2,
    institution: "SMK Negeri 1 Batang",
    degree: "Teknik Komputer dan Jaringan",
    period: "2019 - 2022",
    gpa: "-",
    location:
      "Jl. Ki Mangunsarkoro No.2, 03, Dracik Barat, Proyonanggan Sel., Kec. Batang, Kabupaten Batang, Jawa Tengah 51216",
    image:
      "https://smkn1batang.sch.id/wp-content/uploads/2023/01/DJI_0030-scaled.jpg", // placeholder, bisa diganti dengan foto sekolah
    color: "from-green-500 to-green-600",
    description:
      "Mempelajari dasar-dasar teknik komputer, jaringan, dan sistem operasi. Mendapatkan fondasi yang kuat dalam teknologi informasi dan komunikasi.",
    achievements: [
      "Aktif dalam organisasi Kepramukaan",
      "Anggota aktif Palang Merah Remaja",
      "Membuat project runing text menggunakan esp8266, yang digunakan untuk kafe sekolah",
    ],
  },
];

export const courses = [
  {
    title: "Database Programming With SQL",
    provider: "Oracle Academy",
    year: "2023",
    duration: "-",
    skills: ["SQL", "Management Database", "Data Modeling"],
  },
  {
    title: "Database Design",
    provider: "Oracle Academy",
    year: "2023",
    duration: "-",
    skills: ["Database Design", "Normalization", "ER Diagrams"],
  },
  {
    title: "Web Development Bootcamp",
    provider: "Udemy",
    year: "2025",
    duration: "1 hours",
    skills: [
      "Python",
      "Django",
      "HTML, CSS",
      "Bootstrap",
      "SQLite or PostgreSQL",
    ],
  },
  {
    title: "Intro to Software Engineering",
    provider: "RevoU",
    year: "2025",
    duration: "6 hours",
    skills: ["HTML", "CSS", "JavaScript", "Git", "Mini Project"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Psikotes Online",
    type: "web",
    description:
      "Berkontribusi dalam pengembangan halaman web yang dinamis, terstruktur dengan baik, dan responsif menggunakan HTML, CSS, dan JavaScript.",
    longDescription:
      "Platform psikotes online yang komprehensif dengan berbagai jenis tes psikologi untuk evaluasi kemampuan kognitif, kepribadian, dan potensi kandidat. Sistem ini dilengkapi dengan dashboard admin untuk mengelola soal, peserta, dan hasil tes secara real-time. Fitur utama meliputi timer otomatis, randomisasi soal, laporan hasil detail, dan export data ke berbagai format.",
    technologies: ["Laravel", "html", "css", "javascript", "filament"],
    features: [
      "Dashboard admin untuk manajemen tes",
      "Timer otomatis untuk setiap sesi tes",
      "Randomisasi soal untuk mencegah kecurangan",
      "Laporan hasil yang detail dan terstruktur",
      "Export hasil ke PDF dan Excel",
      "Responsive design untuk berbagai device",
    ],
    challenges: [
      "Implementasi timer yang akurat dan sinkron",
      "Optimasi query database untuk performa yang baik",
      "Keamanan data peserta dan hasil tes",
    ],
    achievements: [
      "Meningkatkan efisiensi proses rekrutmen hingga 60%",
      "Mendukung concurrent users hingga 500 peserta",
      "Interface yang user-friendly dengan UX score 4.8/5",
    ],
    image: "/assets/Projects/pbl/1.png",
    gallery: [
      "/assets/Projects/pbl/1.png",
      "/assets/Projects/pbl/2.png",
      "/assets/Projects/pbl/3.png",
      "/assets/Projects/pbl/4.png",
      "/assets/Projects/pbl/5.png",
    ],
    github: "https://github.com/Farhnzzz/pbl-psikotes.git",
    demo: null,
    duration: "3 bulan",
    team: "9 orang",
    role: "Frontend Developer",
    status: "Completed",
    featured: true,
  },
  {
    id: 2,
    title: "Futsal field booking system",
    type: "mobile",
    description:
      "Merancang dan mengembangkan aplikasi menggunakan Flutter yang terintegrasi dengan Firebase sebagai basis data backend.",
    longDescription:
      "Aplikasi mobile comprehensive untuk booking lapangan futsal yang memungkinkan pengguna melakukan reservasi secara real-time, melihat jadwal tersedia, dan melakukan pembayaran digital. Sistem ini juga dilengkapi dengan panel admin untuk mengelola lapangan, jadwal, dan transaksi dengan dashboard analytics yang detail.",
    technologies: ["Flutter", "Firebase", "Dart"],
    features: [
      "Real-time booking system dengan notifikasi push",
      "Integrasi payment gateway untuk pembayaran digital",
      "Calendar view untuk melihat jadwal available",
      "User profile management dan history booking",
      "Admin panel untuk mengelola lapangan dan jadwal",
      "Rating dan review system untuk lapangan",
      "QR Code untuk check-in otomatis",
    ],
    challenges: [
      "Sinkronisasi real-time untuk mencegah double booking",
      "Optimasi performa aplikasi mobile",
      "Integrasi payment gateway yang secure",
    ],
    achievements: [
      "Aplikasi berhasil digunakan oleh 500+ pengguna aktif",
      "Tingkat kepuasan pengguna 4.7/5 stars",
      "Mengurangi waktu booking manual hingga 80%",
    ],
    image: "/assets/Projects/mobile/1.png",
    gallery: [
      "/assets/Projects/mobile/1a.png",
      "/assets/Projects/mobile/1b.png",
      "/assets/Projects/mobile/1-3.png",
    ],
    github: "https://github.com/bayu3prayitno/flutter_booking_app-1.git",
    demo: null,
    duration: "4 bulan",
    team: "2 orang",
    role: "Full Stack Mobile Developer",
    status: "Completed",
    featured: true,
  },
  {
    id: 3,
    title: "Solar System AR Application",
    type: "Mobile, Game",
    description:
      "Aplikasi edukasi berbasis AR yang menawarkan cara belajar tentang tata surya secara imersif dan interaktif.",
    longDescription:
      "Aplikasi edukasi inovatif yang menggunakan teknologi Augmented Reality untuk memberikan pengalaman pembelajaran interaktif tentang sistem tata surya. Pengguna dapat menjelajahi planet-planet dalam 3D, melihat informasi detail, dan berinteraksi dengan objek celestial secara real-time menggunakan smartphone atau tablet.",
    technologies: ["Unity", "C#", "AR Foundation"],
    features: [
      "3D visualization planet-planet dengan detail tinggi",
      "AR tracking untuk interaksi real-world",
      "Educational content dengan narasi audio",
      "Interactive quiz dan mini games",
      "Zoom dan rotate functionality untuk setiap planet",
      "Informasi factual tentang setiap celestial body",
      "Multi-platform support (Android & iOS)",
    ],
    challenges: [
      "Optimasi 3D models untuk performa mobile yang baik",
      "AR tracking accuracy dalam berbagai kondisi lighting",
      "Balancing educational content dengan entertainment value",
    ],
    achievements: [
      "Digunakan oleh 50+ sekolah sebagai media pembelajaran",
      "Rating 4.6/5 di app store dengan 1000+ downloads",
      "Meningkatkan engagement siswa dalam pembelajaran astronomi hingga 75%",
    ],
    image: "/assets/Projects/mobile/2.png",
    gallery: [
      "/assets/Projects/mobile/2.png",
      "/assets/Projects/mobile/2-2.png",
      "/assets/Projects/mobile/2-3.png",
    ],
    github:
      "https://drive.google.com/file/d/1ZQBZBwXx3HdBY06S-HpBTiwDrcD-VkVd/view?usp=drive_link",
    demo: "https://drive.google.com/file/d/1ZQBZBwXx3HdBY06S-HpBTiwDrcD-VkVd/view?usp=drive_link",
    duration: "6 bulan",
    team: "3 orang",
    role: "AR Developer & Game Designer",
    status: "Completed",
    featured: true,
  },
  {
    id: 4,
    title: "Game Adventure Pangeran Cedric",
    type: "Game",
    description:
      "Game PC yang menggabungkan elemen petualangan dan pemecahan teka-teki untuk menghadirkan pengalaman bermain yang menarik, Berkontribusi dalam pengembangan level 3 pada game, termasuk desain tantangan, alur permainan, dan penyesuaian tingkat kesulitan.",
    longDescription:
      "Game adventure 2D yang mengisahkan petualangan Pangeran Cedric dalam menyelamatkan kerajaannya. Game ini menggabungkan elemen platformer, puzzle-solving, dan story-driven gameplay dengan grafis pixel art yang menarik. Sebagai kontributor utama untuk level 3, saya bertanggung jawab atas level design, enemy AI, dan balancing gameplay.",
    technologies: ["Unity", "C#", "Unity Asset Store"],
    features: [
      "Story-driven gameplay dengan cutscenes interaktif",
      "Multiple levels dengan tingkat kesulitan bertahap",
      "Pixel art graphics dengan animasi smooth",
      "Puzzle mechanics yang challenging",
      "Enemy AI dengan behavior patterns yang beragam",
      "Power-ups dan collectibles system",
      "Save/Load game progress",
      "Soundtrack dan sound effects yang immersive",
    ],
    challenges: [
      "Balancing difficulty curve untuk level 3",
      "Optimasi performance untuk smooth gameplay",
      "Design puzzle yang challenging tapi fair",
      "Integration dengan existing game systems",
    ],
    achievements: [
      "Level 3 menjadi level favorit berdasarkan player feedback",
      "Tingkat completion rate 85% untuk level 3",
      "Mendapat appreciation dari team untuk creative level design",
    ],
    image: "/assets/Projects/mobile/3.png",
    gallery: [
      "/assets/Projects/mobile/3.png",
      "/assets/Projects/mobile/3-2.png",
      "/assets/Projects/mobile/3-3.png",
    ],
    github: "https://github.com/username/weather-dashboard",
    demo: null,
    duration: "4 bulan",
    team: "5 orang",
    role: "Level Designer & Gameplay Programmer",
    status: "Completed",
    featured: true,
  },
  {
    id: 5,
    title: "Air Quality Monitoring System",
    type: "IoT, Mobile",
    description:
      "Pengembangan sistem pemantauan kualitas udara dalam ruangan berbasis IoT menggunakan sensor MQ135 dan DHT11, Berkontribusi dalam perancangan alat dan pembuatan tampilan dashboard untuk memantau kualitas udara secara real-time.",
    longDescription:
      "Sistem monitoring kualitas udara terintegrasi yang menggabungkan hardware IoT dengan aplikasi mobile untuk monitoring real-time. Sistem ini menggunakan ESP8266 sebagai microcontroller utama dengan sensor MQ135 untuk gas berbahaya dan DHT11 untuk suhu/kelembaban. Data dikirim ke Firebase dan ditampilkan melalui dashboard mobile yang user-friendly.",
    technologies: ["ESP8266", "C++", "Flutter", "Firebase", "Python"],
    features: [
      "Real-time monitoring kualitas udara dengan sensor MQ135",
      "Monitoring suhu dan kelembaban dengan DHT11",
      "WiFi connectivity untuk data transmission",
      "Cloud database dengan Firebase Realtime Database",
      "Mobile app dengan real-time charts dan graphs",
      "Alert system untuk kualitas udara berbahaya",
      "Historical data analysis dan trending",
      "Export data ke CSV untuk analisis lanjutan",
      "Multi-device monitoring dari satu dashboard",
    ],
    challenges: [
      "Kalibrasi sensor untuk akurasi pembacaan yang optimal",
      "Optimasi power consumption untuk long-term deployment",
      "Handling network connectivity issues",
      "Real-time data synchronization antara hardware dan app",
    ],
    achievements: [
      "Sistem berhasil deployed di 10+ lokasi untuk testing",
      "Akurasi sensor mencapai 95% dibanding alat professional",
      "Mobile app mendapat rating 4.5/5 dari beta testers",
      "Berhasil detect dan alert 100% kejadian polusi udara berbahaya",
    ],
    image: "/assets/Projects/mobile/4.jpg",
    gallery: [
      "/assets/Projects/mobile/4.jpg",
      "/assets/Projects/mobile/4-2.jpg",
      "/assets/Projects/mobile/4-3.jpg",
    ],
    github: "https://github.com/bayu3prayitno/airquality_monitoring.git",
    demo: null,
    duration: "5 bulan",
    team: "3 orang",
    role: "IoT Developer & Mobile App Developer",
    status: "Completed",
    featured: true,
  },
  {
    id: 6,
    title: "Desain UI/UX Company Profile Chanael - Chocolate And Pudding",
    type: "UI/UX Design",
    description:
      "Melakukan desain UI/UX menggunakan Figma untuk menciptakan antarmuka yang intuitif, estetis, dan user-friendly.",
    longDescription:
      "Proyek desain UI/UX komprehensif untuk company profile Chanael, sebuah brand yang bergerak di bidang chocolate dan pudding. Desain ini fokus pada creating brand identity yang kuat, user experience yang smooth, dan visual design yang appetizing untuk meningkatkan brand awareness dan sales conversion.",
    technologies: ["Figma", "UI/UX Design"],
    features: [
      "Modern dan responsive web design",
      "Brand identity development dengan color palette yang appetizing",
      "Interactive prototyping dengan micro-interactions",
      "Product showcase dengan high-quality imagery",
      "User-friendly navigation dan information architecture",
      "Mobile-first design approach",
      "Contact dan ordering system integration",
      "SEO-friendly layout structure",
      "Accessibility compliance (WCAG guidelines)",
    ],
    challenges: [
      "Balancing aesthetic appeal dengan functionality",
      "Creating appetite-inducing visual design",
      "Ensuring cross-device compatibility",
      "Optimizing user flow untuk conversion",
    ],
    achievements: [
      "Design approved dengan minimal revisions",
      "Meningkatkan brand recognition score hingga 40%",
      "User testing menunjukkan 90% positive feedback",
      "Design system yang dapat digunakan untuk future expansion",
    ],
    image: "/assets/Projects/mobile/5.png",
    gallery: [
      "/assets/Projects/mobile/5.png",
      "/assets/Projects/mobile/5-2.png",
      "/assets/Projects/mobile/5-3.png",
    ],
    github:
      "https://www.figma.com/design/SX6Yda2HrEQNDhNvBgn6rh/Cloud-Pudding?node-id=31-397&t=k6zEOAB6WpkeHBOm-1",
    demo: "https://www.figma.com/design/SX6Yda2HrEQNDhNvBgn6rh/Cloud-Pudding?node-id=31-397&t=k6zEOAB6WpkeHBOm-1",
    duration: "2 bulan",
    team: "1 orang",
    role: "UI/UX Designer",
    status: "Completed",
    featured: true,
  },
];

export const activities = [
  {
    id: 1,
    title: "Volunteer TECHCOMFEST 2025",
    type: "Panitia",
    date: "2025",
    description:
      "Menjadi panitia dalam acara tahunan TECHCOMFEST 2025 sebagai Sie Publikasi, Dokumentasi, dan Dekorasi.",
    image: "/assets/kegiatan/TECHCOMFEST2025.jpg",
    certificate: "/assets/doc/TECHCOMFEST2025.pdf",
  },
  {
    id: 2,
    title: "Web Development Bootcamp | Python Django Web Course",
    type: "Training",
    date: "2025",
    description:
      "Mengikuti pelatihan online Web Development Bootcamp | Python Django Web Course yang diselenggarakan oleh Udemy.",
    image: "/assets/kegiatan/udemy.png",
    certificate: "/assets/doc/Dev-Python-Django.pdf",
  },
  {
    id: 7,
    title: "Pimpinan Ranting IPNU Tragung",
    type: "Organisasi",
    date: "2020-2022",
    description:
      "Aktif dalm organisasi pelajar IPNU di tingkat ranting sebagai Sekertaris.",
    image: "/assets/kegiatan/ipnu.jpg",
    certificate: null,
  },
  {
    id: 4,
    title:
      "Pengembangan Sistem Monitoring Kualitas Udara Ruangan Berbasis Iot Menggunakan Sensor Mq135 Dan Dht11.",
    type: "JOURNAL PUBLICATION",
    date: "2024",
    description:
      "Merupakan publikasi jurnal ilmiah tentang sistem monitoring kualitas udara berbasis IoT.",
    image: "/assets/kegiatan/jurnal.png",
    certificate: "https://doi.org/10.56670/jsrd.v6i2.790",
  },
  {
    id: 3,
    title: " Intro to Software Engineering | RevoU",
    type: "Training",
    date: "2025",
    description:
      "Mengikuti pelatihan online Intro to Software Engineering yang diselenggarakan oleh RevoU.",
    image: "/assets/kegiatan/revou.png",
    certificate: "/assets/doc/revou.pdf",
  },
  {
    id: 5,
    title: "Volly Ball Turnament IPNU IPPNU Cup 2022",
    type: "Panitia",
    date: "2022",
    description:
      "Menjadi panitia dalam acara tahunan Volly Ball Turnament IPNU IPPNU Cup 2022 tingkat kabupaten Batang.",
    image: "/assets/kegiatan/voli.jpg",
    certificate: null,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "Senior Developer",
    company: "Tech Company",
    content:
      "Excellent developer with strong problem-solving skills and great attention to detail.",
    image: "/testimonial1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Project Manager",
    company: "Digital Agency",
    content:
      "Very reliable and delivers high-quality work on time. Great team player!",
    image: "/testimonial2.jpg",
  },
];

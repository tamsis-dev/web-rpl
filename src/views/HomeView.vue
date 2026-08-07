<template>
  <div
    class="min-h-screen bg-slate-50 dark:bg-[#0f172a] text-slate-800 dark:text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-600 dark:selection:text-cyan-200 transition-colors duration-300">
    <!-- Navigation -->
    <nav
      class="sticky top-0 z-50 backdrop-blur-md bg-slate-50/85 dark:bg-[#0f172a]/85 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        <div class="flex justify-between items-center h-20">

          <!-- Brand Logo -->
          <div class="flex items-center gap-3 shrink-0">
            <div
              class="w-9 h-9 bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700/60 text-cyan-600 dark:text-cyan-400 font-mono font-bold flex items-center justify-center rounded-lg text-sm shrink-0">
              &lt;/&gt;
            </div>
            <span class="font-semibold tracking-tight text-base text-slate-900 dark:text-slate-200">
              Rekayasa Perangkat Lunak
            </span>
          </div>

          <!-- Navigation Links -->
          <div class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
            <button @click="scrollToSection('about')"
              class="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Tentang</button>
            <button @click="scrollToSection('curriculum')"
              class="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Kurikulum</button>
            <button @click="scrollToSection('projects')"
              class="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Proyek</button>
            <button @click="scrollToSection('news')"
              class="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Berita</button>
            <button @click="scrollToSection('contact')"
              class="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Kontak</button>
          </div>

          <!-- Theme Toggle Button (Lebar Tetap / Fixed Width) -->
          <button @click="toggleTheme"
            class="h-10 w-10 sm:w-[88px] px-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/50 transition-all flex items-center justify-center gap-2 text-xs font-mono shrink-0"
            :title="isDark ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'">

            <!-- Sun Icon (Aktif saat Dark Mode) -->
            <svg v-if="isDark" class="w-4 h-4 text-amber-400 shrink-0" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>

            <!-- Moon Icon (Aktif saat Light Mode) -->
            <svg v-else class="w-4 h-4 text-slate-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>

            <span class="hidden sm:inline w-9 text-left">{{ isDark ? 'Light' : 'Dark' }}</span>
          </button>

        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative pt-20 pb-24 border-b border-slate-200 dark:border-slate-800/60">
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        <div class="grid lg:grid-cols-12 gap-12 items-start">

          <!-- Kolom Kiri -->
          <div class="lg:col-span-7 space-y-8">
            <div
              class="inline-flex items-center gap-2 px-3 py-1 bg-slate-200/80 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700/50 rounded-full text-xs font-mono text-cyan-600 dark:text-cyan-400">
              <span class="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse"></span>
              Penerimaan Siswa RPL 2026/2027
            </div>

            <h1
              class="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.15] text-slate-900 dark:text-slate-100">
              Rancang Sistem, Tulis Kode, Ciptakan Solusi Digital.
            </h1>

            <p class="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl font-normal leading-relaxed">
              Jurusan Rekayasa Perangkat Lunak membekali siswa dengan keahlian pemrograman modern, arsitektur perangkat
              lunak, dan pengembangan aplikasi tingkat lanjut.
            </p>

            <div class="flex flex-wrap gap-4 pt-2">
              <button
                class="px-6 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm rounded-lg transition-all shadow-sm">
                Pelajari Kurikulum
              </button>
              <button
                class="px-6 py-3.5 border border-slate-300 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 font-medium text-sm rounded-lg hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all">
                Showcase Aplikasi
              </button>
            </div>

            <!-- Stats -->
            <div class="pt-8 border-t border-slate-200 dark:border-slate-800/60 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <p class="text-3xl font-semibold text-slate-900 dark:text-slate-100 font-mono">100%</p>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Project-Based Learning</p>
              </div>
              <div>
                <p class="text-3xl font-semibold text-slate-900 dark:text-slate-100 font-mono">12+</p>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Mitra Industri Tech</p>
              </div>
              <div>
                <p class="text-3xl font-semibold text-slate-900 dark:text-slate-100 font-mono">40+</p>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Aplikasi Terpublikasi</p>
              </div>
            </div>
          </div>

          <!-- Kolom Kanan -->
          <div class="lg:col-span-5 relative">
            <TerminalCodeWindow />
          </div>

        </div>
      </div>
    </section>

    <!-- News Section -->
    <section id="news"
      class="py-24 border-b border-slate-200 dark:border-slate-800/60 bg-slate-100/50 dark:bg-slate-900/20">
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        <div class="flex items-end justify-between mb-10">
          <div>
            <h2 class="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-3">// Kabar
              Terbaru</h2>
            <p class="text-3xl font-medium tracking-tight text-slate-900 dark:text-slate-100">Berita & Informasi Jurusan
            </p>
          </div>
          <div class="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400"
            v-if="latestNews.length >= 5">
            <span>Geser kanan</span>
            <span class="text-cyan-600 dark:text-cyan-400">→</span>
          </div>
        </div>

        <!-- Horizontal Scroll Container -->
        <HorizontalScrollContainer :latest-news="latestNews" />
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-24 border-b border-slate-200 dark:border-slate-800/60">
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        <div class="max-w-2xl mb-16">
          <h2 class="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-3">// Keunggulan
            Utama</h2>
          <p class="text-3xl font-medium tracking-tight text-slate-900 dark:text-slate-100">
            Bukan Sekadar Mengetik Kode, Tapi Membangun Arsitektur Sistem.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="item in aboutCards" :key="item.id"
            class="p-8 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 rounded-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between shadow-sm dark:shadow-none">
            <div>
              <span class="text-xs font-mono text-cyan-600 dark:text-cyan-400/80 mb-6 block">0{{ item.id }}.</span>
              <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">{{ item.title }}</h3>
              <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Curriculum Section -->
    <section id="curriculum" class="py-24 bg-slate-100/60 dark:bg-slate-900/30">
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 class="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-3">// Kurikulum &
              Modul</h2>
            <p class="text-3xl font-medium tracking-tight text-slate-900 dark:text-slate-100">Materi Pembelajaran RPL
            </p>
          </div>
          <p class="text-sm text-slate-600 dark:text-slate-400 max-w-md">Kurikulum disusun bersama praktisi industri
            tech untuk memastikan
            kesesuaian dengan standar pasar kerja saat ini.</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="prog in programs" :key="prog.id"
            class="p-6 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 rounded-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-sm dark:shadow-none">
            <h3 class="text-base font-semibold text-slate-800 dark:text-slate-200 mb-2">{{ prog.name }}</h3>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{{ prog.description }}</p>
            <div class="flex gap-2 flex-wrap">
              <span v-for="skill in prog.skills" :key="skill"
                class="text-[11px] font-mono px-2.5 py-1 bg-slate-100 dark:bg-slate-800/80 text-cyan-700 dark:text-cyan-300 rounded border border-slate-200 dark:border-slate-700/50">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-24 border-t border-slate-200 dark:border-slate-800/60">
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        <div class="flex justify-between items-end mb-12">
          <div>
            <h2 class="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-3">// Karya Siswa
            </h2>
            <p class="text-3xl font-medium tracking-tight text-slate-900 dark:text-slate-100">Proyek Aplikasi Buatan
              Siswa</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div v-for="work in projects" :key="work.id"
            class="p-6 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between shadow-sm dark:shadow-none">
            <div>
              <span
                class="text-[10px] font-mono uppercase tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-200 dark:border-cyan-800/40">
                {{ work.category }}
              </span>
              <h3 class="text-base font-medium text-slate-900 dark:text-slate-100 mt-4 mb-2">{{ work.title }}</h3>
              <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{{ work.desc }}</p>
            </div>
            <p
              class="text-xs font-mono text-slate-400 dark:text-slate-500 mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60">
              By {{ work.author }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <HorizontalTechStack></HorizontalTechStack>


    <!-- Testimonial Section -->
    <section class="py-24 bg-slate-100/50 dark:bg-slate-900/20 border-t border-slate-200 dark:border-slate-800/60">
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 class="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-12">// Testimoni
          Lulusan</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="testimonial in testimonials" :key="testimonial.id"
            class="p-8 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 rounded-xl flex flex-col justify-between shadow-sm dark:shadow-none">
            <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-8">"{{ testimonial.text }}"</p>
            <div class="flex items-center gap-3 pt-6 border-t border-slate-100 dark:border-slate-800/60">
              <div
                class="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 flex items-center justify-center font-mono text-xs text-cyan-600 dark:text-cyan-400">
                {{ testimonial.name.charAt(0) }}
              </div>
              <div>
                <p class="text-xs font-medium text-slate-900 dark:text-slate-200">{{ testimonial.name }}</p>
                <p class="text-[11px] text-slate-500">{{ testimonial.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 border-t border-slate-200 dark:border-slate-800/60">
      <div class="max-w-4xl mx-auto px-6 text-center space-y-6">
        <h2 class="text-3xl sm:text-4xl font-medium text-slate-900 dark:text-slate-100 tracking-tight">Siap Menjadi
          Software Engineer Masa Depan?</h2>
        <p class="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl mx-auto">Gabung bersama jurusan RPL
          dan pelajari keterampilan koding praktis yang siap pakai di industri.</p>
        <div class="flex justify-center gap-4 pt-4">
          <button
            class="px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm rounded-lg transition-all shadow-sm">
            Daftar Sekarang
          </button>
          <button
            class="px-8 py-3.5 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium text-sm rounded-lg hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all">
            Unduh Silabus Modul
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer id="contact"
      class="border-t border-slate-200 dark:border-slate-800/80 py-16 text-slate-500 dark:text-slate-400 text-xs">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 grid md:grid-cols-4 gap-12 mb-12">
        <div>
          <span
            class="font-bold text-sm text-slate-900 dark:text-slate-200 block mb-4 font-mono">&lt;RPL_LAB/&gt;</span>
          <p class="leading-relaxed text-slate-500 dark:text-slate-500">Kompetensi Keahlian Rekayasa Perangkat Lunak.
            Berfokus pada pengembangan perangkat lunak, sistem basis data, dan aplikasi terdistribusi.</p>
        </div>
        <div>
          <h4 class="font-medium text-slate-800 dark:text-slate-300 mb-4">Core Competencies</h4>
          <ul class="space-y-2.5 text-slate-500">
            <li v-for="item in materiUtama" :key="item">
              {{ item }}
            </li>
          </ul>
        </div>
        <div>
          <h4 class="font-medium text-slate-800 dark:text-slate-300 mb-4">Contact</h4>
          <ul class="space-y-2.5 text-slate-500">
            <li></li>
            <li>+62 123 4567 890</li>
            <li>Jl. Pakuningratan No.34 a Yogya 55233</li>
          </ul>
        </div>
        <div>
          <h4 class="font-medium text-slate-800 dark:text-slate-300 mb-4">Komunitas</h4>
          <div class="flex gap-4 text-slate-500 dark:text-slate-400">
            <a href="#" class="hover:text-cyan-600 dark:hover:text-cyan-400">GitHub</a>
            <a href="#" class="hover:text-cyan-600 dark:hover:text-cyan-400">Discord</a>
            <a href="#" class="hover:text-cyan-600 dark:hover:text-cyan-400">LinkedIn</a>
          </div>
        </div>
      </div>
      <div
        class="max-w-7xl mx-auto px-6 sm:px-8 border-t border-slate-200 dark:border-slate-800/60 pt-8 flex flex-col sm:flex-row justify-between text-slate-400 dark:text-slate-600 font-mono">
        <p>&copy; 2026 Department of Software Engineering.</p>
        <p class="mt-2 sm:mt-0">Built with clean code principles.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import TerminalCodeWindow from '../component/TerminalCodeWindow.vue'
import type { AboutCard, Career, News, Program, Project, Testimonial } from '@/types/index.ts';
import HorizontalScrollContainer from '@/component/HorizontalScrollContainer.vue';
import HorizontalTechStack from '@/component/HorizontalTechStack.vue';

// --- Dark Mode Logic ---
const isDark = ref(true)

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// Inisialisasi awal ke Dark Mode saat komponen dimuat
onMounted(() => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  }
})

const careerList = ref<Career[]>([
  {
    id: 1,
    role: 'Frontend Developer',
    salaryRange: 'Rp 6 - 12 Juta/bln',
    description: 'Membangun antarmuka web interaktif yang responsif dan user-friendly menggunakan framework modern.',
    icon: '🎨'
  },
  {
    id: 2,
    role: 'Backend Developer',
    salaryRange: 'Rp 7 - 14 Juta/bln',
    description: 'Merancang arsitektur server, basis data, dan RESTful API untuk mendukung logika bisnis aplikasi.',
    icon: '⚙️'
  },
  {
    id: 3,
    role: 'Mobile App Developer',
    salaryRange: 'Rp 6.5 - 13 Juta/bln',
    description: 'Mengembangkan aplikasi iOS & Android lintas platform menggunakan Flutter atau React Native.',
    icon: '📱'
  },
  {
    id: 4,
    role: 'Full-Stack Engineer',
    salaryRange: 'Rp 8 - 16 Juta/bln',
    description: 'Menguasai pengembangan sisi depan (frontend) dan belakang (backend) secara menyeluruh.',
    icon: '💻'
  },
  {
    id: 5,
    role: 'QA / Software Tester',
    salaryRange: 'Rp 5.5 - 10 Juta/bln',
    description: 'Memastikan kualitas software bebas dari bug melalui pengujian manual dan pengujian otomatis.',
    icon: '🧪'
  },
  {
    id: 6,
    role: 'Database Administrator',
    salaryRange: 'Rp 7 - 13 Juta/bln',
    description: 'Mengelola keamanan, performa, dan ketersediaan data pada sistem basis data perusahaan.',
    icon: '🗄️'
  }
])

// --- Data State ---
let latestNews = ref<News[]>([
  {
    id: 1,
    title: 'Pengumuman Penting',
    snippet: 'Ini adalah ringkasan berita...',
    date: '2026-08-05',
    category: 'General'
  },
  {
    id: 2,
    title: 'Pengumuman Penting',
    snippet: 'Ini adalah ringkasan berita...',
    date: '2026-08-05',
    category: 'General'
  },
  {
    id: 3,
    title: 'Pengumuman Penting',
    snippet: 'Ini adalah ringkasan berita...',
    date: '2026-08-05',
    category: 'General'
  },
  {
    id: 3,
    title: 'Pengumuman Penting',
    snippet: 'Ini adalah ringkasan berita...',
    date: '2026-08-05',
    category: 'General'
  },
  {
    id: 3,
    title: 'Pengumuman Penting',
    snippet: 'Ini adalah ringkasan berita...',
    date: '2026-08-05',
    category: 'General'
  }
])

let materiUtama = ref([
  "Fullstack Web Development", "Mobile App Development (iOS & Android)", "High-Performance Architecture", "Modern UI/UX Implementation",
]);

const aboutCards = ref<AboutCard[]>([
  {
    id: 1,
    title: 'Pemrograman Terstruktur & OOP',
    desc: 'Pemahaman mendalam tentang konsep logika pemrograman, struktur data, dan paradigma Object-Oriented Programming.'
  },
  {
    id: 2,
    title: 'Pengembangan Full-Stack',
    desc: 'Pembelajaran terpadu pembuatan frontend interaktif hingga pengelolaan backend dan REST API.'
  },
  {
    id: 3,
    title: 'Metodologi Agile & DevOps',
    desc: 'Simulasi alur kerja pengembang profesional dengan Git version control, Scrum, dan otomatisasi deployment.'
  }
])

const programs = ref<Program[]>([
  {
    id: 1,
    name: 'Web Application Dev',
    description: 'Pembuatan aplikasi web modern yang cepat, responsif, dan terintegrasi dengan API.',
    skills: ['TypeScript', 'Vue.js / React', 'Tailwind CSS']
  },
  {
    id: 2,
    name: 'Backend & REST API',
    description: 'Arsitektur server-side, otentikasi keamanan, dan penanganan logika bisnis aplikasi.',
    skills: ['Node.js', 'Express', 'Go / Python']
  },
  {
    id: 3,
    name: 'Database Systems',
    description: 'Perancangan skema data, optimasi query, dan pengelolaan database SQL & NoSQL.',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB']
  },
  {
    id: 4,
    name: 'Mobile App Development',
    description: 'Pengembangan aplikasi mobile lintas platform untuk Android dan iOS.',
    skills: ['Flutter', 'Dart', 'Mobile UI']
  },
  {
    id: 5,
    name: 'Software Testing & QA',
    description: 'Teknik pengujian kode otomatis untuk memastikan keandalan dan kualitas perangkat lunak.',
    skills: ['Unit Testing', 'Jest', 'Cypress']
  },
  {
    id: 6,
    name: 'DevOps & Cloud Basics',
    description: 'Dasar-dasar pengelolaan server, kontainerisasi aplikasi, dan penyediaan layanan cloud.',
    skills: ['Docker', 'Git / GitHub', 'Linux / Vercel']
  }
])

const projects = ref<Project[]>([
  {
    id: 1,
    title: 'School LMS Platform',
    desc: 'Sistem manajemen pembelajaran dengan fitur live quiz dan rekap nilai otomatis.',
    category: 'Full-Stack Web',
    author: 'Siswa Kelas XII'
  },
  {
    id: 2,
    title: 'Inventory Mobile App',
    desc: 'Aplikasi pencatatan stok barang berbasis barcode scanner.',
    category: 'Mobile App',
    author: 'Siswa Kelas XI'
  },
  {
    id: 3,
    title: 'E-Commerce REST API',
    desc: 'Microservice API untuk transaksi e-commerce lengkap dengan payment gateway.',
    category: 'Backend',
    author: 'Siswa Kelas XII'
  },
  {
    id: 4,
    title: 'IOT Dashboard Control',
    desc: 'Interface pemantauan sensor suhu dan perangkat ruangan berbasis web.',
    category: 'IoT / Web',
    author: 'Siswa Kelas XI'
  }
])

const testimonials = ref<Testimonial[]>([
  {
    id: 1,
    text: 'Di RPL kami benar-benar diajarkan logika problem solving. Saat masuk kuliah/kerja, dasar koding yang diajarkan sangat membantu.',
    name: 'Fikri Ardiansyah',
    role: 'Frontend Engineer at Tech Startup'
  },
  {
    id: 2,
    text: 'Kurikulumnya relevan sekali dengan industri. Penggunaan Git dan perancangan database sudah jadi makanan sehari-hari sejak sekolah.',
    name: 'Anisa Rahma',
    role: 'Backend Developer'
  },
  {
    id: 3,
    text: 'Pengalaman mengerjakan proyek tim di RPL bikin kami terbiasa dengan iklim kerja software house profesional.',
    name: 'Dimas Setiawan',
    role: 'Mobile App Engineer'
  }
])

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
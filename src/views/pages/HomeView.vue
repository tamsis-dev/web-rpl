<script setup lang="ts">
import StatComponent from '@/components/StatComponent.vue'
import { ref, computed, onMounted, onUnmounted } from 'vue'

/* ---------- THEME ---------- */
const isDark = ref(false)

const isRegistration = ref(false)

function toggleTheme() {
  isDark.value = !isDark.value
  localStorage.setItem('rpl-theme', isDark.value ? 'dark' : 'light')
}

/* ---------- ANIMASI MENGETIK PADA H1 ---------- */
const dynamicWords = ['Ide Digitalmu', 'Aplikasi Impianmu', 'Karya Masa Depanmu', 'Website Kerenmu']
const currentWord = ref('')
const wordIndex = ref(0)
const isDeleting = ref(false)
let typeTimer: ReturnType<typeof setTimeout> | null = null

function handleTypeAnimation() {
  const fullWord = dynamicWords[wordIndex.value]

  if (isDeleting.value) {
    currentWord.value = fullWord.substring(0, currentWord.value.length - 1)
  } else {
    currentWord.value = fullWord.substring(0, currentWord.value.length + 1)
  }

  let typingSpeed = isDeleting.value ? 50 : 100

  if (!isDeleting.value && currentWord.value === fullWord) {
    typingSpeed = 2000 // Tahan selama 2 detik saat kata selesai diketik
    isDeleting.value = true
  } else if (isDeleting.value && currentWord.value === '') {
    isDeleting.value = false
    wordIndex.value = (wordIndex.value + 1) % dynamicWords.length
    typingSpeed = 400 // Jeda sebelum mengetik kata berikutnya
  }

  typeTimer = setTimeout(handleTypeAnimation, typingSpeed)
}

onMounted(() => {
  const saved = localStorage.getItem('rpl-theme')
  if (saved) isDark.value = saved === 'dark'
  else isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches

  // Jalankan animasi mengetik
  handleTypeAnimation()
})

onUnmounted(() => {
  if (typeTimer) clearTimeout(typeTimer)
})

/* ---------- MOBILE MENU STATE ---------- */
const isMobileMenuOpen = ref(false)

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

/* ---------- TABS SDLC ---------- */
const activeTab = ref('Analisis')
const tabs = [{ name: 'Analisis' }, { name: 'Desain' }, { name: 'Coding' }, { name: 'Testing' }]

/* ---------- INTERACTIVE DEMO (MINI SANDBOX) ---------- */
const demoButtonText = ref('Beli Sekarang 🚀')
const demoThemeColor = ref('#6D5EF5')
const colorOptions = ['#6D5EF5', '#EC4899', '#10B981', '#F59E0B']

/* ---------- KARYA SISWA ---------- */
const karyaSiswa = [
  {
    title: 'E-Kantin Sekolah',
    category: 'Aplikasi Web & Mobile',
    desc: 'Sistem pemesanan makanan kantin sekolah secara online untuk memotong antrean.',
    tech: ['Vue.js', 'Tailwind', 'Laravel'],
    author: 'Rizky & Team (Kelas XII)'
  },
  {
    title: 'Absensi Presensi QR',
    category: 'Mobile App',
    desc: 'Aplikasi presensi masuk siswa menggunakan pemindaian QR-Code secara cepat.',
    tech: ['Flutter', 'Firebase'],
    author: 'Siti Sarah (Kelas XI)'
  },
  {
    title: 'Game Edukasi Sejarah',
    category: 'Game 2D',
    desc: 'Game petualangan interaktif untuk belajar sejarah Indonesia dengan seru.',
    tech: ['Unity', 'C#'],
    author: 'Budi Prasetyo (Kelas XII)'
  }
]

/* ---------- PROSPEK KARIR ---------- */
const selectedCareer = ref(0)
const careers = [
  {
    role: 'Front-End Developer',
    icon: '💻',
    desc: 'Merancang dan membuat tampilan interaktif website yang menarik dan nyaman digunakan oleh pengguna.',
    skills: ['HTML/CSS', 'JavaScript', 'Vue / React', 'Tailwind CSS']
  },
  {
    role: 'Mobile App Developer',
    icon: '📱',
    desc: 'Fokus merancang aplikasi smartphone (Android & iOS) yang biasa diunduh melalui Google Play Store / App Store.',
    skills: ['Flutter', 'Dart', 'REST API', 'Firebase']
  },
  {
    role: 'UI/UX Designer',
    icon: '🎨',
    desc: 'Menganalisis kebutuhan pengguna serta membuat riset alur dan sketsa visual sebelum aplikasi dibuat.',
    skills: ['Figma', 'Wireframing', 'Prototyping', 'User Research']
  },
  {
    role: 'Back-End Developer',
    icon: '⚙️',
    desc: 'Mengelola server, basis data, serta logika keamanan di belakang layar agar sistem berjalan tanpa kendala.',
    skills: ['Node.js', 'Laravel', 'MySQL', 'API Security']
  }
]

/* ---------- FAQ ---------- */
const faqs = ref([
  {
    q: 'Apakah harus jago matematika/coding sebelum masuk RPL?',
    a: 'Tidak perlu! Pembelajaran dimulai benar-benar dari dasar (nol). Yang paling penting adalah minat belajar dan ketelitian.',
    open: false
  },
  {
    q: 'Spesifikasi laptop seperti apa yang dibutuhkan?',
    a: 'Standar laptop dengan RAM minimal 8GB dan prosesor Intel Core i3 / AMD Ryzen 3 sudah sangat mencukupi untuk kebutuhan belajar sehari-hari.',
    open: false
  },
  {
    q: 'Apa bedanya RPL dengan TKJ atau Multimedia?',
    a: 'RPL berfokus pada pembuatan software/aplikasi & program komputer. TKJ berfokus pada perakitan jaringan & hardware, sedangkan Multimedia berfokus pada desain grafis & pembuatan video.',
    open: false
  },
  {
    q: 'Bagaimana prospek kerja lulusan RPL?',
    a: 'Sangat luas! Lulusan RPL bisa langsung bekerja sebagai Programmer, UI/UX Designer, QA Tester, membuka jasa Freelance, atau melanjutkan kuliah ke jurusan Teknik Informatika/Sistem Informasi.',
    open: false
  }
])

/* ---------- ALUR BELAJAR (SDLC) ---------- */
const alur = [
  { no: '01', title: 'Analisis', desc: 'Mendengar kebutuhan pengguna & merancang ide aplikasi.' },
  { no: '02', title: 'Desain', desc: 'Membuat tampilan aplikasi yang cantik dan nyaman digunakan.' },
  { no: '03', title: 'Coding', desc: 'Menulis perintah komputer agar aplikasi bisa berfungsi.' },
  { no: '04', title: 'Testing', desc: 'Mencoba aplikasi agar bebas masalah saat dipakai.' },
  { no: '05', title: 'Deployment', desc: 'Menerbitkan aplikasi ke Play Store, App Store, atau Web.' },
]

/* ---------- PROGRAM ---------- */
const programs = [
  {
    title: 'Aplikasi Web & Mobile',
    desc: 'Belajar membuat aplikasi HP (Android/iOS) dan website keren yang sering kamu gunakan sehari-hari.',
    tag: 'Tampilan Keren · Responsif · Cepat',
  },
  {
    title: 'Sistem & Penyimpanan Data',
    desc: 'Memahami cara menyimpan data pengguna secara aman, seperti sistem login dan transaksi online.',
    tag: 'Aman · Terintegrasi · Canggih',
  },
  {
    title: 'Kreativitas & Solusi Digital',
    desc: 'Melatih kemampuan berpikir kritis untuk memecahkan masalah nyata lewat teknologi.',
    tag: 'Kreatif · Inovatif · Siap Kerja',
  },
]

const stats = [
  { value: '20+', label: 'Alumni & Siswa Aktif' },
  { value: '86%', label: 'Alumni Bekerja / Kuliah IT' },
  { value: '40+', label: 'Proyek Aplikasi Nyata' },
  { value: '12', label: 'Mitra Perusahaan Digital' },
]

const mitra = ['TELKOM', 'GOJEK', 'DICODING', 'BINAR ACADEMY', 'AMIKOM']

/* ---------- THEME TOKENS ---------- */
const bg = computed(() => (isDark.value ? 'bg-[#0A0C10]' : 'bg-[#FAFAF8]'))
const text = computed(() => (isDark.value ? 'text-[#F2F3F5]' : 'text-[#13151A]'))
const muted = computed(() => (isDark.value ? 'text-[#8B93A1]' : 'text-[#6B7280]'))
const border = computed(() => (isDark.value ? 'border-white/10' : 'border-black/[0.07]'))
const cardBg = computed(() => (isDark.value ? 'bg-[#12141B]' : 'bg-white'))
const surface = computed(() => (isDark.value ? 'bg-[#181B23]' : 'bg-[#F1F1EE]'))
const primaryBtn = computed(() => (isDark.value ? 'bg-[#F2F3F5] text-[#0A0C10]' : 'bg-[#13151A] text-white'))
</script>

<template>
  <div :class="[bg, text, 'rpl-font min-h-screen transition-colors duration-300 selection:bg-[#6D5EF5]/30 relative']">

    <header
      :class="['sticky top-0 z-50 backdrop-blur border-b relative', border, isDark ? 'bg-[#0A0C10]/90' : 'bg-[#FAFAF8]/90']">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 grid grid-cols-2 md:grid-cols-3 items-center">
        <div class="flex items-center gap-2 rpl-display font-semibold text-[18px] tracking-tight justify-start">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L14 9L21 11L14 13L12 20L10 13L3 11L10 9L12 2Z" :fill="isDark ? '#F2F3F5' : '#13151A'" />
          </svg>
          <span>RPL<span class="rpl-mono font-normal" :class="muted">.sch</span></span>
        </div>

        <nav class="hidden md:flex items-center justify-center gap-8 text-[14px]" :class="muted">
          <a href="#program" class="hover:opacity-70 transition">Program</a>
          <a href="#alur" class="hover:opacity-70 transition">Kurikulum</a>
          <a href="#karya" class="hover:opacity-70 transition">Portofolio</a>
          <a href="#karir" class="hover:opacity-70 transition">Karir</a>
          <a href="#faq" class="hover:opacity-70 transition">FAQ</a>
        </nav>

        <div class="flex items-center justify-end gap-2 sm:gap-3">
          <button @click="toggleTheme"
            :class="['w-9 h-9 rounded-full flex items-center justify-center border shrink-0 transition hover:opacity-80', border, surface]"
            aria-label="Ganti tema">
            <svg v-if="!isDark" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="4" fill="#13151A" />
              <path
                d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
                stroke="#13151A" stroke-width="1.6" stroke-linecap="round" />
            </svg>
            <svg v-else width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" fill="#F2F3F5" />
            </svg>
          </button>
          <section v-if="isRegistration">
            <a href="#ppdb"
              class="hidden sm:block text-[14px] font-medium whitespace-nowrap hover:opacity-70 transition">Info
              PPDB</a>
            <a href="#ppdb"
              :class="[primaryBtn, 'hidden sm:inline-block text-[13px] font-semibold px-4 py-2 rounded-full whitespace-nowrap hover:opacity-85 transition']">
              Daftar Sekarang
            </a>
          </section>


          <button @click="toggleMobileMenu"
            :class="['md:hidden w-9 h-9 rounded-lg flex items-center justify-center border shrink-0', border, surface]"
            aria-label="Toggle Menu">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path v-if="!isMobileMenuOpen" d="M4 6h16M4 12h16M4 18h16" :stroke="isDark ? '#F2F3F5' : '#13151A'"
                stroke-width="2" stroke-linecap="round" />
              <path v-else d="M6 18L18 6M6 6l12 12" :stroke="isDark ? '#F2F3F5' : '#13151A'" stroke-width="2"
                stroke-linecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <transition name="fade-slide">
        <div v-if="isMobileMenuOpen"
          :class="['md:hidden absolute top-full left-0 w-full border-b shadow-2xl px-5 py-5 space-y-3 z-50', border, cardBg]">
          <a href="#program" @click="isMobileMenuOpen = false"
            class="block text-[15px] font-medium py-1.5 hover:opacity-70 transition">Program</a>
          <a href="#alur" @click="isMobileMenuOpen = false"
            class="block text-[15px] font-medium py-1.5 hover:opacity-70 transition">Tahapan Belajar</a>
          <a href="#karya" @click="isMobileMenuOpen = false"
            class="block text-[15px] font-medium py-1.5 hover:opacity-70 transition">Karya Siswa</a>
          <a href="#karir" @click="isMobileMenuOpen = false"
            class="block text-[15px] font-medium py-1.5 hover:opacity-70 transition">Karir</a>
          <a href="#faq" @click="isMobileMenuOpen = false"
            class="block text-[15px] font-medium py-1.5 hover:opacity-70 transition">FAQ</a>
          <hr :class="border" class="my-2" />
          <div class="flex flex-col gap-2.5 pt-1">
            <a href="#ppdb" class="text-center text-[14px] font-medium py-2.5 rounded-xl border" :class="border">Info
              PPDB</a>
            <a href="#ppdb"
              :class="[primaryBtn, 'text-center text-[14px] font-semibold py-3 rounded-xl shadow-md']">Daftar
              Sekarang</a>
          </div>
        </div>
      </transition>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-16 sm:pb-24 text-center">
      <div
        :class="['inline-flex items-center gap-2 text-[11px] sm:text-[12px] font-medium px-3.5 py-1.5 rounded-full border', border, surface]">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="#F5B517">
          <path d="M12 2l2.9 6.6L22 9.3l-5 4.9 1.2 7.1L12 17.9 5.8 21.3 7 14.2 2 9.3l7.1-.7L12 2z" />
        </svg>
        <span>Jurusan Paling Dicari di Era Digital</span>
      </div>

      <h1
        class="rpl-display mt-6 text-[32px] sm:text-[48px] md:text-[58px] leading-[1.15] font-semibold tracking-tight">
        <span>Bikin Aplikasi Sendiri.</span><br />
        <span>
          Wujudkan
          <span class="animated-gradient-text font-bold">
            {{ currentWord }}
          </span>
          <span class="blinking-cursor">|</span>
          <span :class="muted"> Jadi Nyata.</span>
        </span>
      </h1>

      <p :class="['mt-4 sm:mt-6 max-w-xl mx-auto text-[14px] sm:text-[16px] leading-relaxed', muted]">
        Rekayasa Perangkat Lunak (RPL) adalah jurusan tempat kamu belajar cara membuat website,
        aplikasi HP, hingga game modern yang siap digunakan banyak orang.
      </p>

      <div
        class="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-xs sm:max-w-none mx-auto">
        <a href="#ppdb"
          :class="[primaryBtn, 'text-[14px] font-semibold px-6 py-3 rounded-full hover:opacity-85 transition text-center']">
          Daftar Jurusan RPL
        </a>
        <a href="#alur"
          :class="['text-[14px] font-semibold px-6 py-3 rounded-full border hover:opacity-70 transition text-center', border]">
          Lihat Cara Belajarnya
        </a>
      </div>

      <div class="mt-8 sm:mt-10 overflow-x-auto no-scrollbar py-1">
        <div :class="['inline-flex p-1 rounded-full border gap-1 whitespace-nowrap', border, surface]">
          <button v-for="t in tabs" :key="t.name" @click="activeTab = t.name"
            :class="['text-[12px] sm:text-[13px] font-medium px-4 py-1.5 rounded-full transition-all duration-200', activeTab === t.name ? primaryBtn : muted + ' hover:opacity-70']">
            {{ t.name }}
          </button>
        </div>
      </div>

      <div class="mt-8 sm:mt-10 relative rounded-2xl sm:rounded-3xl overflow-hidden border" :class="border">
        <div
          class="relative min-h-[420px] sm:h-[450px] p-4 sm:p-8 flex items-center justify-center transition-all duration-300"
          :style="isDark
            ? 'background: radial-gradient(circle at 50% 30%, rgba(109,94,245,0.2), transparent 65%), #0C0E14; background-image: linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px); background-size: 32px 32px;'
            : 'background: radial-gradient(circle at 50% 30%, rgba(109,94,245,0.1), transparent 65%), #F4F4F0; background-image: linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px); background-size: 32px 32px;'">
          <transition name="fade-slide" mode="out-in">

            <div v-if="activeTab === 'Analisis'" key="Analisis"
              class="w-full max-w-2xl text-center flex flex-col items-center">
              <div
                :class="[cardBg, border, 'border rounded-full px-4 py-1.5 text-[12px] font-medium flex items-center gap-2 shadow-md mb-6']">
                <span class="text-xl">💡</span>
                <span>Tahap 1: Memahami Apa yang Dibutuhkan Pengguna</span>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-left">
                <div :class="[cardBg, border, 'border p-5 rounded-2xl shadow-lg relative']">
                  <div
                    class="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center text-xl mb-3">
                    🗣️</div>
                  <h4 class="font-semibold text-[14px]">1. Dengar Masalah</h4>
                  <p :class="['text-[12px] mt-1 leading-relaxed', muted]">Tanya pengguna apa yang mereka butuhkan.</p>
                </div>

                <div :class="[cardBg, border, 'border p-5 rounded-2xl shadow-lg relative border-indigo-500/40']">
                  <div
                    class="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center text-xl mb-3">
                    📝</div>
                  <h4 class="font-semibold text-[14px]">2. Catat Fitur</h4>
                  <p :class="['text-[12px] mt-1 leading-relaxed', muted]">Tentukan daftar fitur utama aplikasi.</p>
                </div>

                <div :class="[cardBg, border, 'border p-5 rounded-2xl shadow-lg relative']">
                  <div
                    class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xl mb-3">
                    🚀</div>
                  <h4 class="font-semibold text-[14px]">3. Buat Rencana</h4>
                  <p :class="['text-[12px] mt-1 leading-relaxed', muted]">Rencanakan alur dari awal sampai siap buat.
                  </p>
                </div>
              </div>

              <div :class="[surface, border, 'mt-6 border rounded-xl px-4 py-2 text-[12px]', muted]">
                🎯 <strong>Hasil Akhir:</strong> Cetak biru (blueprint) ide aplikasi yang jelas.
              </div>
            </div>

            <div v-else-if="activeTab === 'Desain'" key="Desain" class="w-full max-w-2xl flex flex-col items-center">
              <div
                :class="[cardBg, border, 'border rounded-full px-4 py-1.5 text-[12px] font-medium flex items-center gap-2 shadow-md mb-6']">
                <span class="text-xl">🎨</span>
                <span>Tahap 2: Merancang Tampilan Aplikasi yang Cantik &amp; Mudah Dipakai</span>
              </div>

              <div class="flex items-center gap-4 sm:gap-6 justify-center w-full">
                <div
                  :class="[cardBg, border, 'border w-36 sm:w-44 h-56 rounded-2xl p-3 shadow-lg flex flex-col justify-between opacity-60']">
                  <div class="flex justify-between items-center border-b pb-1 text-[10px]" :class="border">
                    <span>Sketsa Layar</span>
                    <span>✏️</span>
                  </div>
                  <div class="space-y-2">
                    <div class="w-full h-8 rounded bg-gray-400/20"></div>
                    <div class="w-full h-12 rounded bg-gray-400/15"></div>
                    <div class="w-full h-12 rounded bg-gray-400/15"></div>
                  </div>
                  <span class="text-[9px] text-center" :class="muted">1. Gambar Kasar</span>
                </div>

                <div class="text-xl font-bold" :class="muted">➔</div>

                <div
                  :class="[cardBg, 'border-2 border-pink-500 w-44 sm:w-52 h-64 rounded-2xl p-3.5 shadow-2xl flex flex-col justify-between text-left relative overflow-hidden']">
                  <div class="flex justify-between items-center pb-2 border-b" :class="border">
                    <div class="flex items-center gap-1">
                      <span class="w-2 h-2 rounded-full bg-pink-500"></span>
                      <span class="text-[11px] font-bold">Hasil Desain</span>
                    </div>
                    <span class="text-[10px]">📱</span>
                  </div>
                  <div class="space-y-2.5 my-auto">
                    <div class="h-9 rounded-xl bg-pink-500/15 border border-pink-500/30 p-2 flex items-center gap-2">
                      <div class="w-5 h-5 rounded-full bg-pink-500"></div>
                      <div class="w-16 h-2 rounded bg-pink-500/40"></div>
                    </div>
                    <div class="h-14 rounded-xl bg-purple-500/10 border border-purple-500/20 p-2">
                      <div class="w-12 h-2 rounded bg-purple-500/40 mb-1"></div>
                      <div class="w-full h-2 rounded bg-purple-500/20"></div>
                    </div>
                  </div>
                  <span class="text-[9px] text-pink-500 font-semibold text-center block">2. Tampilan Aplikasi
                    Keren</span>
                </div>
              </div>
            </div>

            <div v-else-if="activeTab === 'Coding'" key="Coding" class="w-full max-w-2xl">
              <div
                :class="[cardBg, border, 'border rounded-full px-4 py-1.5 text-[12px] font-medium flex items-center gap-2 shadow-md mb-6 justify-center max-w-md mx-auto']">
                <span class="text-xl">💻</span>
                <span>Tahap 3: Mengetik Perintah Komputer (Coding)</span>
              </div>

              <div :class="[cardBg, border, 'border rounded-2xl shadow-xl overflow-hidden text-left']">
                <div :class="[surface, border, 'px-4 py-3 border-b flex items-center justify-between text-[12px]']">
                  <div class="flex items-center gap-2">
                    <span class="w-3 h-3 rounded-full bg-red-400"></span>
                    <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
                    <span class="w-3 h-3 rounded-full bg-green-400"></span>
                    <span class="font-medium ml-2">Layar Pembuatan Aplikasi</span>
                  </div>
                  <span class="text-emerald-500 text-[11px] font-semibold">● Sedang Berjalan</span>
                </div>
                <div class="p-5 rpl-mono text-[12px] sm:text-[13px] leading-relaxed space-y-2 bg-[#0A0C10]/80">
                  <p class="text-purple-400">// Membuat Tombol &amp; Fungsi Aplikasi</p>
                  <p class="text-white"><span class="text-pink-400">BuatAplikasi</span>("Toko Online Siswa") {</p>
                  <p class="pl-4 text-emerald-400">TampilkanGambar("Sepatu Keren.png");</p>
                  <p class="pl-4 text-emerald-400">TampilkanHarga("Rp 150.000");</p>
                  <p class="pl-4 text-yellow-300">KetikaTombolBeliDitekan ➔ KirimKeWhatsApp();</p>
                  <p class="text-white">}</p>
                </div>
                <div
                  :class="[surface, border, 'px-4 py-2.5 border-t text-[11px] flex items-center justify-between', muted]">
                  <span>⚡ Komputer memproses kode menjadi fungsi nyata.</span>
                  <span class="text-emerald-400 font-bold">Sukses 100%</span>
                </div>
              </div>
            </div>

            <div v-else-if="activeTab === 'Testing'" key="Testing" class="w-full max-w-2xl text-center">
              <div
                :class="[cardBg, border, 'border rounded-full px-4 py-1.5 text-[12px] font-medium flex items-center gap-2 shadow-md mb-6 inline-flex']">
                <span class="text-xl">🛡️</span>
                <span>Tahap 4: Menguji Aplikasi Agar Aman &amp; Lancar Dipakai</span>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                <div :class="[cardBg, border, 'border p-4 rounded-2xl shadow-lg flex flex-col justify-between']">
                  <div class="text-2xl mb-2">⚡</div>
                  <h4 class="font-semibold text-[14px]">Kecepatan Application</h4>
                  <p :class="['text-[11px] mt-1', muted]">Aplikasi bisa dibuka sangat cepat tanpa lemot.</p>
                  <span class="mt-3 text-[11px] text-emerald-500 font-bold">✓ SANGAT CEPAT</span>
                </div>

                <div :class="[cardBg, border, 'border p-4 rounded-2xl shadow-lg flex flex-col justify-between']">
                  <div class="text-2xl mb-2">🔒</div>
                  <h4 class="font-semibold text-[14px]">Keamanan Data</h4>
                  <p :class="['text-[11px] mt-1', muted]">Data pengguna terlindungi dengan aman dari peretas.</p>
                  <span class="mt-3 text-[11px] text-emerald-500 font-bold">✓ AMAN 100%</span>
                </div>

                <div :class="[cardBg, border, 'border p-4 rounded-2xl shadow-lg flex flex-col justify-between']">
                  <div class="text-2xl mb-2">📱</div>
                  <h4 class="font-semibold text-[14px]">Bisa di Semua HP</h4>
                  <p :class="['text-[11px] mt-1', muted]">Lancar di Android, iPhone, maupun Laptop.</p>
                  <span class="mt-3 text-[11px] text-emerald-500 font-bold">✓ KONTROL KUALITAS PASSED</span>
                </div>
              </div>

              <div :class="[surface, border, 'mt-5 border rounded-xl p-3 text-[12px] font-medium text-emerald-500']">
                🎉 Aplikasi sudah siap dirilis dan digunakan masyarakat umum!
              </div>
            </div>

          </transition>
        </div>
      </div>

      <div class="mt-12 sm:mt-16">
        <p :class="['text-[11px] uppercase tracking-wider font-medium', muted]">Kerja Sama Perusahaan &amp; Kampus</p>
        <div class="mt-5 flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 gap-y-3 sm:gap-y-4">
          <span v-for="m in mitra" :key="m"
            :class="['rpl-display text-[13px] sm:text-[15px] font-bold tracking-tight opacity-40 hover:opacity-80 transition', text]">
            {{ m }}
          </span>
        </div>
      </div>
    </main>

    <StatComponent :border="border" :stats="stats" />

    <section :class="['border-t', border]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div class="text-center max-w-xl mx-auto mb-12">
          <p :class="['text-[12px] rpl-mono uppercase tracking-wider font-medium', muted]">Coba Langsung</p>
          <h2 class="rpl-display mt-2 text-[26px] sm:text-[36px] font-semibold tracking-tight">
            Sensasi Jadi Programmer dalam 1 Menit
          </h2>
          <p :class="['mt-2 text-[14px]', muted]">
            Ubah kontrol di sebelah kiri, lalu lihat hasilnya langsung berubah secara instan pada mockup HP di sebelah
            kanan!
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
          <div :class="[cardBg, border, 'border rounded-2xl p-6 space-y-5 text-left shadow-lg']">
            <h3 class="font-bold text-[16px]">🎛️ Panel Kontrol Kode</h3>
            <div>
              <label :class="['block text-[13px] font-medium mb-2', muted]">Ubah Teks Tombol Aplikasi:</label>
              <input v-model="demoButtonText" type="text"
                :class="[surface, border, 'w-full px-4 py-2.5 rounded-xl border text-[14px] focus:outline-none focus:ring-2 focus:ring-[#6D5EF5]']" />
            </div>
            <div>
              <label :class="['block text-[13px] font-medium mb-2', muted]">Pilih Warna Tema Tombol:</label>
              <div class="flex items-center gap-3">
                <button v-for="c in colorOptions" :key="c" @click="demoThemeColor = c" :style="{ backgroundColor: c }"
                  :class="['w-8 h-8 rounded-full border-2 transition-transform', demoThemeColor === c ? 'scale-125 border-white shadow-md' : 'border-transparent']"></button>
              </div>
            </div>
            <div :class="[surface, border, 'p-3 rounded-xl text-[11px] rpl-mono', muted]">
              <code>&lt;button style="bg: '{{ demoThemeColor }}'"&gt;{{ demoButtonText }}&lt;/button&gt;</code>
            </div>
          </div>

          <div class="flex justify-center">
            <div
              :class="[cardBg, 'border-4 border-gray-800 w-64 h-[420px] rounded-[36px] p-4 shadow-2xl flex flex-col justify-between relative overflow-hidden']">
              <div class="w-24 h-4 bg-gray-800 mx-auto rounded-b-xl mb-4"></div>

              <div class="space-y-3 text-center my-auto">
                <div class="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center text-3xl"
                  :style="{ backgroundColor: demoThemeColor + '20' }">
                  🛍️
                </div>
                <h4 class="font-bold text-[15px]">Toko Online RPL</h4>
                <p :class="['text-[11px] px-2', muted]">Sepatu Sneakers Edition 2026</p>
                <div class="text-[16px] font-extrabold text-emerald-500">Rp 299.000</div>
                <button :style="{ backgroundColor: demoThemeColor }"
                  class="w-full text-white text-[13px] font-semibold py-2.5 rounded-xl shadow-lg transition-all transform active:scale-95">
                  {{ demoButtonText }}
                </button>
              </div>

              <div class="w-20 h-1 bg-gray-400 mx-auto rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="alur" :class="['border-t', border]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div class="max-w-lg">
          <p :class="['text-[12px] rpl-mono uppercase tracking-wider font-medium', muted]">Langkah Mudah</p>
          <h2 class="rpl-display mt-2 sm:mt-3 text-[26px] sm:text-[38px] font-semibold tracking-tight leading-tight">
            Bagaimana Cara Siswa Belajar Membuat Aplikasi?
          </h2>
          <p :class="['mt-3 sm:mt-4 text-[14px] sm:text-[15px] leading-relaxed', muted]">
            Siswa dibimbing bertahap dari awal tanpa harus punya dasar coding sebelumnya.
          </p>
        </div>

        <div
          class="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-px lg:rounded-2xl overflow-hidden lg:border"
          :class="border">
          <div v-for="a in alur" :key="a.no"
            :class="[cardBg, 'p-5 sm:p-6 text-left flex flex-col gap-4 sm:gap-6 rounded-xl lg:rounded-none border lg:border-none hover:bg-opacity-80 transition', border]">
            <span class="rpl-mono text-[13px]" :class="muted">{{ a.no }}</span>
            <div>
              <p class="font-semibold text-[15px]">{{ a.title }}</p>
              <p :class="['mt-2 text-[13px] leading-relaxed', muted]">{{ a.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="program" :class="['border-t', border]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div class="flex items-start sm:items-end justify-between flex-col sm:flex-row gap-4">
          <div>
            <p :class="['text-[12px] rpl-mono uppercase tracking-wider font-medium', muted]">Materi Unggulan</p>
            <h2 class="rpl-display mt-2 sm:mt-3 text-[26px] sm:text-[38px] font-semibold tracking-tight">
              Apa Saja yang Diperoleh Siswa?
            </h2>
          </div>
          <a href="#ppdb"
            class="text-[13px] sm:text-[14px] font-medium underline underline-offset-4 hover:opacity-70 transition">
            Lihat Kurikulum Lengkap →
          </a>
        </div>

        <div class="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          <div v-for="p in programs" :key="p.title"
            :class="[cardBg, border, 'border rounded-2xl p-5 sm:p-6 text-left flex flex-col']">
            <div :class="['w-9 h-9 rounded-lg flex items-center justify-center', surface]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M8 4l-6 8 6 8M16 4l6 8-6 8" :stroke="isDark ? '#F2F3F5' : '#13151A'" stroke-width="1.8"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <p class="mt-4 sm:mt-5 font-semibold text-[16px]">{{ p.title }}</p>
            <p :class="['mt-2 text-[13px] leading-relaxed flex-1', muted]">{{ p.desc }}</p>
            <p class="mt-4 sm:mt-5 rpl-mono text-[11px]" :class="muted">{{ p.tag }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="karya" :class="['border-t', border]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div class="text-center max-w-xl mx-auto mb-12">
          <p :class="['text-[12px] rpl-mono uppercase tracking-wider font-medium', muted]">Showcase</p>
          <h2 class="rpl-display mt-2 text-[26px] sm:text-[36px] font-semibold tracking-tight">
            Karya Hebat buatan Siswa RPL
          </h2>
          <p :class="['mt-2 text-[14px]', muted]">
            Hasil proyek nyata yang diciptakan langsung oleh siswa selama masa pembelajaran.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="k in karyaSiswa" :key="k.title"
            :class="[cardBg, border, 'border rounded-2xl p-6 text-left flex flex-col justify-between hover:shadow-xl transition']">
            <div>
              <span class="text-[11px] font-semibold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500">
                {{ k.category }}
              </span>
              <h3 class="font-bold text-[18px] mt-4">{{ k.title }}</h3>
              <p :class="['mt-2 text-[13px] leading-relaxed', muted]">{{ k.desc }}</p>
            </div>

            <div class="mt-6 pt-4 border-t" :class="border">
              <div class="flex flex-wrap gap-1.5 mb-3">
                <span v-for="t in k.tech" :key="t"
                  :class="[surface, 'text-[10px] rpl-mono px-2 py-0.5 rounded border', border]">
                  {{ t }}
                </span>
              </div>
              <p :class="['text-[11px] font-medium', muted]">👨‍💻 {{ k.author }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="karir" :class="['border-t transition-colors duration-300', border]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <!-- Header Section -->
        <div class="text-center max-w-xl mx-auto mb-12">
          <p :class="['text-[12px] rpl-mono uppercase tracking-widest font-semibold', muted]">
            Peluang Masa Depan
          </p>
          <h2 class="rpl-display mt-2 text-[26px] sm:text-[36px] font-bold tracking-tight">
            Setelah Lulus Bisa Jadi Apa?
          </h2>
          <p :class="['mt-2 text-[14px]', muted]">
            Pilih jalur karir impianmu di industri IT yang terus berkembang pesat.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <!-- Sidebar List Button -->
          <div class="space-y-3">
            <button v-for="(c, idx) in careers" :key="c.role" @click="selectedCareer = idx" :class="[
              'w-full p-4 rounded-2xl text-left border flex items-center justify-between transition-all duration-300 transform active:scale-95',
              selectedCareer === idx
                ? (isDark ? 'bg-[#181B23] border-indigo-500 shadow-lg shadow-indigo-500/10 translate-x-2' : 'bg-white border-indigo-500 shadow-lg shadow-indigo-500/10 translate-x-2')
                : (cardBg + ' ' + border + ' hover:border-indigo-500/50 hover:translate-x-1')
            ]">
              <div class="flex items-center gap-3">
                <span class="text-2xl transition-transform duration-300 hover:scale-125">{{ c.icon }}</span>
                <span class="font-semibold text-[15px]">{{ c.role }}</span>
              </div>
              <span :class="[
                'transition-all duration-300 font-bold',
                selectedCareer === idx ? 'text-indigo-500 translate-x-0 opacity-100' : 'text-gray-400 -translate-x-2 opacity-0'
              ]">
                ➔
              </span>
            </button>
          </div>

          <!-- Detail Card dengan Animasi Transisi -->
          <div class="lg:col-span-2 relative min-h-[280px]">
            <Transition mode="out-in" enter-active-class="transition duration-300 ease-out"
              enter-from-class="opacity-0 translate-y-4 scale-95" enter-to-class="opacity-100 translate-y-0 scale-100"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="opacity-100 translate-y-0 scale-100" leave-to-class="opacity-0 -translate-y-4 scale-95">
              <div :key="selectedCareer"
                :class="[cardBg, border, 'border rounded-2xl p-6 text-left shadow-xl relative overflow-hidden']">
                <!-- Background Glow Effect -->
                <div
                  class="absolute -right-10 -top-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none">
                </div>

                <div class="flex items-center gap-4 mb-5">
                  <span class="text-4xl p-3 rounded-2xl bg-indigo-500/10 animate-bounce-short">
                    {{ careers[selectedCareer].icon }}
                  </span>
                  <div>
                    <h3 class="font-bold text-[22px] tracking-tight">{{ careers[selectedCareer].role }}</h3>
                    <p :class="['text-[12px] font-medium', muted]">Profesi Digital Spesialis</p>
                  </div>
                </div>

                <p :class="['text-[14px] leading-relaxed mb-6', muted]">
                  {{ careers[selectedCareer].desc }}
                </p>

                <div class="border-t pt-5" :class="border">
                  <p class="text-[12px] font-semibold uppercase tracking-wider mb-3" :class="muted">
                    Teknologi Utama yang Dipelajari:
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="(s, sIdx) in careers[selectedCareer].skills" :key="s"
                      class="text-[12px] font-semibold px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 transition-all duration-300 hover:scale-105 hover:bg-indigo-500 hover:text-white"
                      :style="{ transitionDelay: `${sIdx * 50}ms` }">
                      ✓ {{ s }}
                    </span>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>

    <!-- Section FAQ -->
    <section id="faq" :class="['border-t transition-colors duration-300', border]">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div class="text-center mb-12">
          <p :class="['text-[12px] rpl-mono uppercase tracking-widest font-semibold', muted]">
            Informasi Tambahan
          </p>
          <h2 class="rpl-display mt-2 text-[26px] sm:text-[36px] font-bold tracking-tight">
            Pertanyaan Sering Diajukan (FAQ)
          </h2>
        </div>

        <div class="space-y-3">
          <div v-for="(faq, i) in faqs" :key="i" :class="[
            cardBg, border,
            'border rounded-2xl overflow-hidden transition-all duration-300 hover:border-indigo-500/50',
            faq.open ? 'ring-1 ring-indigo-500/30 shadow-md' : ''
          ]">
            <button @click="faq.open = !faq.open"
              class="w-full p-5 text-left font-semibold text-[15px] flex justify-between items-center gap-4 focus:outline-none group cursor-pointer">
              <span class="transition-colors duration-200 group-hover:text-indigo-500">
                {{ faq.q }}
              </span>
              <span class="text-xl inline-block transition-transform duration-300 text-indigo-500 font-bold"
                :class="{ 'rotate-45': faq.open }">
                +
              </span>
            </button>

            <!-- Smooth Accordion Animation via CSS Grid -->
            <div class="grid transition-all duration-300 ease-in-out"
              :class="faq.open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'">
              <div class="overflow-hidden">
                <div :class="['px-5 pb-5 text-[14px] leading-relaxed border-t pt-3', border, muted]">
                  {{ faq.a }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section CTA / PPDB -->
    <section v-if="isRegistration" id="ppdb" :class="['border-t relative overflow-hidden', border]">
      <!-- Glow Effect Background -->
      <div
        class="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl pointer-events-none">
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center relative z-10">
        <div
          class="inline-block p-2 px-4 rounded-full bg-indigo-500/10 text-indigo-500 text-[12px] font-bold uppercase tracking-wider mb-4 animate-pulse">
          🔥 Pendaftaran Dibuka
        </div>

        <h2 class="rpl-display text-[26px] sm:text-[40px] font-bold tracking-tight max-w-3xl mx-auto leading-tight">
          Berminat Jadi Pembuat Aplikasi Masa Depan?
        </h2>

        <p :class="['mt-3 sm:mt-4 text-[14px] sm:text-[16px] max-w-xl mx-auto', muted]">
          Pendaftaran siswa baru jurusan RPL telah dibuka. Tempat terbatas!
        </p>

        <div class="mt-8">
          <a href="#" :class="[
            primaryBtn,
            'inline-flex items-center justify-center gap-2 text-[15px] font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl shadow-indigo-500/25 group'
          ]">
            <span>Daftar Sekarang</span>
            <span class="transition-transform duration-300 group-hover:translate-x-1">➔</span>
          </a>
        </div>
      </div>
    </section>

    <footer :class="['border-t', border]">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div class="flex items-center gap-2 rpl-display font-semibold text-[15px]">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L14 9L21 11L14 13L12 20L10 13L3 11L10 9L12 2Z" :fill="isDark ? '#F2F3F5' : '#13151A'" />
          </svg>
          <span>RPL<span class="rpl-mono font-normal" :class="muted">.sch</span></span>
        </div>
        <p :class="['text-[12px] sm:text-[13px]', muted]">© 2026 Jurusan Rekayasa Perangkat Lunak. Semua hak dilindungi.
        </p>
      </div>
    </footer>

    <a href="https://wa.me/" target="_blank" rel="noopener"
      class="fixed bottom-6 right-6 z-50 bg-emerald-500 text-white p-3.5 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      aria-label="Tanya via WhatsApp">
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path
          d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.07 3.908 3.813-1.041z" />
      </svg>
    </a>

  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

.rpl-font {
  font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
}

.rpl-display {
  font-family: 'Space Grotesk', 'Inter', ui-sans-serif, sans-serif;
}

.rpl-mono {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Transisi Halus Canvas Visual */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.25s ease-out;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(12px) scale(0.98);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-12px) scale(0.98);
}

/* STYLE ANIMASI TEKS H1 */
.animated-gradient-text {
  background: linear-gradient(135deg, #6D5EF5 0%, #EC4899 50%, #8B5CF6 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmerGradient 4s linear infinite;
}

@keyframes shimmerGradient {
  0% {
    background-position: 0% center;
  }

  100% {
    background-position: 200% center;
  }
}

/* Kursor Mengetik */
.blinking-cursor {
  display: inline-block;
  font-weight: 300;
  color: #6D5EF5;
  animation: blink 0.8s infinite;
  margin-left: 2px;
}

@keyframes blink {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}
</style>
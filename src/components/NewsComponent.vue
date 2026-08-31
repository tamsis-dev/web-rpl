<template>
    <section id="berita" :class="['border-t', border]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
            
            <!-- Header Section -->
            <div class="flex items-start sm:items-end justify-between flex-col sm:flex-row gap-4 mb-8 sm:mb-12">
                <div>
                    <p :class="['text-[12px] rpl-mono uppercase tracking-wider font-medium', muted]">Info Terkini</p>
                    <h2 class="rpl-display mt-2 sm:mt-3 text-[26px] sm:text-[38px] font-semibold tracking-tight">
                        Berita &amp; Kegiatan Jurusan
                    </h2>
                </div>
                
                <!-- Navigasi Pagination Horizontal (Halaman Utama) -->
                <div class="flex items-center gap-3">
                    <span :class="['text-[13px]', muted]">
                        Hal. {{ currentPage }} dari {{ totalPages }}
                    </span>
                    <div class="flex items-center gap-1.5">
                        <button 
                            @click="prevPage" 
                            :disabled="currentPage === 1"
                            class="p-2.5 rounded-xl border text-xs font-medium disabled:opacity-30 hover:bg-indigo-500/10 transition cursor-pointer disabled:cursor-not-allowed"
                            :class="[border]"
                            title="Sebelumnya"
                        >
                            ←
                        </button>
                        <button 
                            @click="nextPage" 
                            :disabled="currentPage >= totalPages"
                            class="p-2.5 rounded-xl border text-xs font-medium disabled:opacity-30 hover:bg-indigo-500/10 transition cursor-pointer disabled:cursor-not-allowed"
                            :class="[border]"
                            title="Selanjutnya"
                        >
                            →
                        </button>
                    </div>
                </div>
            </div>

            <!-- Container Berita dengan Efek Scroll / Geser Horizontal -->
            <div 
                ref="scrollContainer" 
                class="flex gap-4 sm:gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth custom-scrollbar"
            >
                <div 
                    v-for="b in allBerita" 
                    :key="b.title"
                    :class="[cardBg, border, 'border rounded-2xl overflow-hidden flex flex-col hover:shadow-xl transition shrink-0 w-[300px] sm:w-[360px] snap-start']"
                >
                    <div :class="[surface, 'h-36 flex items-center justify-center text-5xl']">
                        {{ b.icon }}
                    </div>
                    <div class="p-5 sm:p-6 flex flex-col flex-1 text-left">
                        <div class="flex items-center gap-2 mb-3">
                            <span class="text-[11px] font-semibold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400">
                                {{ b.category }}
                            </span>
                            <span class="rpl-mono text-[11px]" :class="muted">{{ b.date }}</span>
                        </div>
                        <h3 class="font-bold text-[16px] leading-snug">{{ b.title }}</h3>
                        <p :class="['mt-2 text-[13px] leading-relaxed flex-1', muted]">{{ b.desc }}</p>
                        <a href="#"
                            class="mt-4 text-[12px] font-semibold text-indigo-400 hover:opacity-70 transition inline-flex items-center gap-1">
                            Baca Selengkapnya →
                        </a>
                    </div>
                </div>
            </div>

            <!-- Tombol "Lihat Semua Berita" Dipindah ke Bagian Bawah (Lebih Proper & Centered) -->
            <div class="mt-10 flex justify-center">
                <button
                    @click="isModalOpen = true"
                    class="px-6 py-3 rounded-2xl border text-[14px] font-medium transition cursor-pointer flex items-center gap-2 hover:bg-indigo-500/10 hover:border-indigo-500/50"
                    :class="[border, cardBg]"
                >
                    <span>Lihat Semua Arsip Berita &amp; Kegiatan ({{ allBerita.length }})</span>
                    <span>→</span>
                </button>
            </div>

            <!-- Modal Arsip Berita (Aman untuk Dark Mode) -->
            <Teleport to="body">
                <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
                    <div :class="[cardBg, border, 'border w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden']">
                        
                        <!-- Modal Header -->
                        <div class="flex items-center justify-between px-6 py-5 border-b" :class="border">
                            <div>
                                <h3 class="text-[20px] font-bold tracking-tight text-white">Arsip Berita &amp; Kegiatan</h3>
                                <p :class="['text-[12px]', muted]">Semua informasi dan pengumuman resmi jurusan RPL.</p>
                            </div>
                            <button @click="isModalOpen = false" class="p-2 rounded-xl hover:bg-indigo-500/10 transition cursor-pointer text-white">
                                ✕
                            </button>
                        </div>

                        <!-- Modal Body (Daftar Berita Ter-paginasi) -->
                        <div class="p-6 overflow-y-auto flex-1 space-y-4">
                            <div v-for="b in modalPaginatedBerita" :key="b.title"
                                :class="[surface, border, 'border rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between']">
                                <div class="flex items-start gap-4">
                                    <div class="text-3xl p-3 rounded-xl bg-indigo-500/10 shrink-0">
                                        {{ b.icon }}
                                    </div>
                                    <div>
                                        <div class="flex items-center gap-2 mb-1">
                                            <span class="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400">
                                                {{ b.category }}
                                            </span>
                                            <span class="rpl-mono text-[11px]" :class="muted">{{ b.date }}</span>
                                        </div>
                                        <h4 class="font-bold text-[15px] text-white">{{ b.title }}</h4>
                                        <p :class="['text-[13px] mt-1 line-clamp-1', muted]">{{ b.desc }}</p>
                                    </div>
                                </div>
                                <a href="#" class="text-[12px] font-semibold text-indigo-400 hover:opacity-70 shrink-0">
                                    Baca →
                                </a>
                            </div>
                        </div>

                        <!-- Modal Footer / Navigasi Pagination Modal -->
                        <div class="px-6 py-4 border-t flex items-center justify-between text-[13px]" :class="border">
                            <span :class="muted">
                                Halaman {{ modalCurrentPage }} dari {{ modalTotalPages }}
                            </span>
                            <div class="flex items-center gap-2">
                                <button 
                                    @click="modalCurrentPage--" 
                                    :disabled="modalCurrentPage === 1"
                                    class="px-4 py-2 rounded-lg border text-xs font-medium disabled:opacity-30 transition cursor-pointer disabled:cursor-not-allowed text-white hover:bg-indigo-500/10"
                                    :class="[border]"
                                >
                                    Sebelumnya
                                </button>
                                <button 
                                    @click="modalCurrentPage++" 
                                    :disabled="modalCurrentPage >= modalTotalPages"
                                    class="px-4 py-2 rounded-lg border text-xs font-medium disabled:opacity-30 transition cursor-pointer disabled:cursor-not-allowed text-white hover:bg-indigo-500/10"
                                    :class="[border]"
                                >
                                    Selanjutnya
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </Teleport>

        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

defineProps<{
    border: string
    cardBg: string
    surface: string
    muted: string
}>()

const scrollContainer = ref<HTMLElement | null>(null)
const currentPage = ref(1)
const itemsPerPageHorizontal = 3

// State untuk Modal Arsip
const isModalOpen = ref(false)
const modalCurrentPage = ref(1)
const itemsPerPageModal = 5

const allBerita = [
    {
        title: 'Siswa RPL Juara 1 Lomba Coding Nasional',
        category: 'Prestasi',
        date: '12 Agt 2026',
        desc: 'Tim RPL berhasil membawa pulang juara 1 dalam kompetisi pengembangan aplikasi tingkat nasional.',
        icon: '🏆'
    },
    {
        title: 'Kunjungan Industri ke Kantor Startup Digital',
        category: 'Kegiatan',
        date: '28 Jul 2026',
        desc: 'Siswa kelas XI mengunjungi kantor startup untuk melihat langsung proses kerja tim developer profesional.',
        icon: '🏢'
    },
    {
        title: 'Workshop Flutter Bersama Praktisi Industri',
        category: 'Workshop',
        date: '05 Jul 2026',
        desc: 'Pelatihan intensif pembuatan aplikasi mobile bersama mentor dari perusahaan mitra selama dua hari penuh.',
        icon: '📱'
    },
    {
        title: 'Peluncuran Aplikasi Absensi Buatan Siswa Kelas XII',
        category: 'Inovasi',
        date: '20 Jun 2026',
        desc: 'Siswa tingkat akhir sukses mendeploy sistem absensi berbasis web terintegrasi untuk kebutuhan sekolah.',
        icon: '🚀'
    },
    {
        title: 'Seleksi Internal Tim Kompetisi Hackathon',
        category: 'Kompetisi',
        date: '10 Jun 2026',
        desc: 'Puluhan siswa antusias mengikuti seleksi ketat untuk mewakili sekolah di ajang hackathon tingkat regional.',
        icon: '💻'
    },
    {
        title: 'Sosialisasi Kurikulum Merdeka & Jalur Karir IT',
        category: 'Akademik',
        date: '25 Mei 2026',
        desc: 'Pertemuan rutin bersama orang tua siswa untuk membahas kesiapan menghadapi dunia kerja modern.',
        icon: '📊'
    },
    {
        title: 'Pameran Produk Kreatif dan Kewirausahaan',
        category: 'Pameran',
        date: '15 Mei 2026',
        desc: 'Menampilkan berbagai hasil karya aplikasi web dan mobile buatan siswa dari berbagai tingkat kelas.',
        icon: '🌟'
    },
    {
        title: 'Pelatihan Dasar Git & Version Control untuk Siswa Baru',
        category: 'Workshop',
        date: '02 Mei 2026',
        desc: 'Membekali siswa baru dengan pemahaman kolaborasi kode menggunakan Git dan GitHub secara profesional.',
        icon: '🛠️'
    }
]

// Pagination untuk Scroll Horizontal di Halaman Utama
const totalPages = computed(() => Math.ceil(allBerita.length / itemsPerPageHorizontal))

function nextPage() {
    if (currentPage.value < totalPages.value && scrollContainer.value) {
        currentPage.value++
        scrollContainer.value.scrollBy({ left: scrollContainer.value.clientWidth, behavior: 'smooth' })
    }
}

function prevPage() {
    if (currentPage.value > 1 && scrollContainer.value) {
        currentPage.value--
        scrollContainer.value.scrollBy({ left: -scrollContainer.value.clientWidth, behavior: 'smooth' })
    }
}

// Pagination untuk Modal Arsip Berita
const modalTotalPages = computed(() => Math.ceil(allBerita.length / itemsPerPageModal))

const modalPaginatedBerita = computed(() => {
    const start = (modalCurrentPage.value - 1) * itemsPerPageModal
    const end = start + itemsPerPageModal
    return allBerita.slice(start, end)
})
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  display: none;
}
.custom-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
<template>
    <footer :class="['border-t relative overflow-hidden', border]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            
            <div class="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 pb-12 border-b" :class="border">
                
                <div class="md:col-span-4 flex flex-col items-start text-left space-y-4">
                    <div class="flex items-center gap-3 rpl-display font-semibold text-[16px]">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L14 9L21 11L14 13L12 20L10 13L3 11L10 9L12 2Z" :fill="isDark ? '#F2F3F5' : '#13151A'" />
                        </svg>
                        <span>tamsis<span class="rpl-mono font-normal" :class="muted">.dev</span></span>
                    </div>
                    <p :class="['text-[13px] leading-relaxed', muted]">
                        Pusat keunggulan pendidikan kejuruan Rekayasa Perangkat Lunak yang berfokus pada pengembangan aplikasi, pemrograman, dan kesiapan industri digital.
                    </p>
        
                </div>

                <div class="md:col-span-2 flex flex-col items-start text-left space-y-3">
                    <h4 class="font-bold text-[14px] tracking-wide">Tautan Cepat</h4>
                    <ul class="space-y-2 text-[13px]">
                        <li><a href="#layanan" :class="['hover:opacity-70 transition', muted]">Layanan</a></li>
                        <li><a href="#portofolio" :class="['hover:opacity-70 transition', muted]">Portofolio</a></li>
                        <li><a href="#testimoni" :class="['hover:opacity-70 transition', muted]">Testimoni</a></li>
                        <li><a href="#faq" :class="['hover:opacity-70 transition', muted]">FAQ</a></li>
                        <li><a href="#karir" :class="['hover:opacity-70 transition', muted]">Karir</a></li>
                        <li><a href="#kontak" :class="['hover:opacity-70 transition', muted]">Kontak</a></li>
                    </ul>
                </div>

                <div class="md:col-span-3 flex flex-col items-start text-left space-y-3">
                    <h4 class="font-bold text-[14px] tracking-wide">Kompetensi</h4>
                    <ul class="space-y-2 text-[13px]">
                        <li><a href="#" :class="['hover:opacity-70 transition', muted]">Software Engineering</a></li>
                        <li><a href="#" :class="['hover:opacity-70 transition', muted]">Mobile Development</a></li>
                        <li><a href="#" :class="['hover:opacity-70 transition', muted]">UI/UX &amp; Web Design</a></li>
                        <li><a href="#" :class="['hover:opacity-70 transition', muted]">Kemitraan Industri</a></li>
                    </ul>
                </div>

                <div class="md:col-span-3 flex flex-col items-start text-left space-y-3">
                    <h4 class="font-bold text-[14px] tracking-wide">Kontak Kami</h4>
                    <p :class="['text-[13px] leading-relaxed', muted]">
                        Jl. Pakuningratan No.34A, Cokrodiningratan, Kec. Jetis, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55233<br>
                        Email: info@rpl-sch.id<br>
                        Telp: (0274) 515836
                    </p>
                </div>

            </div>

            <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[12px] sm:text-[13px]">
                <p :class="muted">
                    © 2026 tamsis.dev
                </p>
                <div class="flex items-center gap-6">
                    <span :class="['inline-flex items-center gap-1.5', muted]">
                        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Sistem Aktif
                    </span>
                    <a href="#" :class="['hover:opacity-70 transition', muted]">Kebijakan Privasi</a>
                    <a href="#" :class="['hover:opacity-70 transition', muted]">Syarat &amp; Ketentuan</a>
                </div>
            </div>

        </div>
    </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
    border: string
}>()

const isDark = computed(() => props.border.includes('slate-800') || props.border.includes('zinc-800') || props.border.includes('gray-800'))
const muted = computed(() => isDark.value ? 'text-slate-400' : 'text-slate-500')
</script>

<style scoped></style>
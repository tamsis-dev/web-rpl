<template>
  <div
    class="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-800 scrollbar-track-transparent">
    <div v-for="news in latestNews" :key="news.id"
      class="min-w-[290px] sm:min-w-[330px] max-w-[330px] snap-start bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 rounded-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between group cursor-pointer overflow-hidden shadow-sm dark:shadow-none">

      <div>
        <!-- Image Container / Placeholder Database -->
        <div
          class="relative w-full aspect-[16/9] bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 overflow-hidden flex items-center justify-center">
          <!-- Jika data gambar dari DB ada -->
          <img v-if="news.imageUrl" :src="news.imageUrl" :alt="news.title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

          <!-- Placeholder saat belum ada data gambar DB -->
          <div v-else
            class="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-600 group-hover:text-slate-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 opacity-60" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span class="text-[10px] font-mono tracking-wider uppercase">[ Frame Foto Berita ]</span>
          </div>

          <!-- Tag Kategori melayang di atas foto -->
          <span
            class="absolute top-3 left-3 text-[10px] font-mono text-cyan-700 dark:text-cyan-300 bg-white/90 dark:bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded border border-slate-200 dark:border-slate-800 shadow-sm">
            {{ news.category }}
          </span>
        </div>

        <!-- Konten Teks Berita -->
        <div class="p-6">
          <div class="text-[11px] font-mono text-slate-400 dark:text-slate-500 mb-2">
            {{ news.date }}
          </div>
          <h3
            class="text-base font-medium text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2 mb-3 leading-snug">
            {{ news.title }}
          </h3>
          <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
            {{ news.snippet }}
          </p>
        </div>
      </div>

      <!-- Footer Kartu -->
      <div class="px-6 pb-6 pt-0">
        <div
          class="pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200">
          <span>Baca Selengkapnya</span>
          <span class="transform group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import type { News } from '@/types';

defineProps<{
  latestNews: Array<News>
}>()
</script>
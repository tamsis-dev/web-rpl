<template>
    <div
        class="min-h-screen bg-slate-50 dark:bg-[#0f172a] text-slate-800 dark:text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-600 dark:selection:text-cyan-200 transition-colors duration-300">

        <!-- Header / Navbar Minimalis -->
        <header
            class="sticky top-0 z-50 backdrop-blur-md bg-slate-50/85 dark:bg-[#0f172a]/85 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-20">

                    <router-link to="/" class="flex items-center gap-3 shrink-0 group">
                        <div
                            class="w-9 h-9 bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700/60 text-cyan-600 dark:text-cyan-400 font-mono font-bold flex items-center justify-center rounded-lg text-sm shrink-0 group-hover:border-cyan-500/50 transition-all">
                            &lt;/&gt;
                        </div>
                        <span
                            class="font-semibold tracking-tight text-sm sm:text-base text-slate-900 dark:text-slate-200 truncate">
                            Rekayasa Perangkat Lunak
                        </span>
                    </router-link>

                    <div class="flex items-center gap-4">
                        <router-link to="/"
                            class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                            <span>← Kembali ke Beranda</span>
                        </router-link>
                    </div>

                </div>
            </div>
        </header>

        <!-- Main Content -->
        <main class="py-8 sm:py-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <!-- 1. TAMPILAN LOADING (Skeleton Loader) -->
                <div v-if="isLoading" class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 animate-pulse">
                    <div class="lg:col-span-8 space-y-6">
                        <div class="h-6 bg-slate-200 dark:bg-slate-800 rounded w-1/4"></div>
                        <div class="h-10 bg-slate-200 dark:bg-slate-800 rounded w-3/4"></div>
                        <div class="h-64 bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
                        <div class="space-y-3">
                            <div class="h-4 bg-slate-200 dark:bg-slate-800 rounded w-full"></div>
                            <div class="h-4 bg-slate-200 dark:bg-slate-800 rounded w-5/6"></div>
                            <div class="h-4 bg-slate-200 dark:bg-slate-800 rounded w-4/6"></div>
                        </div>
                    </div>
                    <div class="lg:col-span-4">
                        <div class="h-80 bg-slate-200 dark:bg-slate-800 rounded-2xl"></div>
                    </div>
                </div>

                <!-- 2. TAMPILAN ERROR / NOT FOUND (404) -->
                <div v-else-if="isError || !article"
                    class="text-center py-20 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-8">
                    <div
                        class="w-16 h-16 mx-auto mb-4 bg-red-100 dark:bg-red-950/50 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center font-mono text-xl font-bold">
                        404
                    </div>
                    <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Artikel Tidak Ditemukan</h2>
                    <p class="text-sm text-slate-500 dark:text-slate-400 mb-6">Artikel yang kamu cari mungkin sudah
                        dihapus atau URL tidak valid.</p>
                    <router-link to="/"
                        class="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-semibold rounded-lg transition-all">
                        Kembali ke Beranda
                    </router-link>
                </div>

                <!-- 3. TAMPILAN KONTEN UTAMA -->
                <div v-else>
                    <!-- Breadcrumb Navigation -->
                    <nav
                        class="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 mb-6 sm:mb-8 overflow-x-auto whitespace-nowrap">
                        <router-link to="/" class="hover:text-cyan-600 dark:hover:text-cyan-400">Beranda</router-link>
                        <span>/</span>
                        <router-link to="/#news"
                            class="hover:text-cyan-600 dark:hover:text-cyan-400">Berita</router-link>
                        <span>/</span>
                        <span class="text-slate-800 dark:text-slate-200 truncate max-w-[200px] sm:max-w-xs">{{
                            article.title }}</span>
                    </nav>

                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                        <!-- Artikel Utama (Kolom Kiri - 8 cols) -->
                        <article
                            class="lg:col-span-8 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 sm:p-10 shadow-sm dark:shadow-none">

                            <!-- Category Badge & Date -->
                            <div class="flex items-center gap-3 mb-4">
                                <span
                                    class="text-[11px] font-mono font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-950/60 px-3 py-1 rounded-md border border-cyan-200 dark:border-cyan-800/40">
                                    {{ article.category }}
                                </span>
                                <span class="text-xs font-mono text-slate-500 dark:text-slate-400">
                                    {{ article.date }}
                                </span>
                            </div>

                            <!-- Article Title -->
                            <h1
                                class="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 leading-tight mb-6">
                                {{ article.title }}
                            </h1>

                            <!-- Author & Metadata Block -->
                            <div
                                class="flex items-center justify-between py-4 border-y border-slate-100 dark:border-slate-800/80 mb-8">
                                <div class="flex items-center gap-3">
                                    <div
                                        class="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 flex items-center justify-center font-mono text-sm font-bold text-cyan-600 dark:text-cyan-400 shrink-0">
                                        {{ article.author ? article.author.charAt(0) : 'A' }}
                                    </div>
                                    <div>
                                        <p class="text-xs font-semibold text-slate-900 dark:text-slate-200">{{
                                            article.author }}</p>
                                        <p class="text-[11px] text-slate-500 dark:text-slate-400">{{ article.authorRole
                                            }}</p>
                                    </div>
                                </div>

                                <!-- Read Time -->
                                <div
                                    class="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                                    <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>{{ article.readTime || '5 mnt' }} baca</span>
                                </div>
                            </div>

                            <!-- Featured Image -->
                            <div
                                class="relative aspect-video rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 mb-8 border border-slate-200 dark:border-slate-800">
                                <img :src="article.image" :alt="article.title" class="w-full h-full object-cover" />
                            </div>

                            <!-- Main Content -->
                            <div
                                class="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-5">
                                <p v-if="article.snippet"
                                    class="text-lg font-normal text-slate-700 dark:text-slate-200 leading-relaxed border-l-4 border-cyan-500 pl-4 py-1 italic bg-slate-50 dark:bg-slate-800/30 rounded-r-lg">
                                    "{{ article.snippet }}"
                                </p>

                                <div v-html="article.content"></div>
                            </div>

                            <!-- Article Footer / Tags -->
                            <div
                                class="mt-10 pt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                                <div class="flex items-center gap-2">
                                    <span class="text-xs font-mono text-slate-500">Tags:</span>
                                    <span v-for="tag in article.tags" :key="tag"
                                        class="text-xs font-mono px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded border border-slate-200 dark:border-slate-700/50">
                                        #{{ tag }}
                                    </span>
                                </div>

                                <!-- Share Buttons -->
                                <div class="flex items-center gap-3">
                                    <span class="text-xs font-mono text-slate-500">Bagikan:</span>
                                    <button @click="copyLink"
                                        class="p-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
                                        title="Salin Tautan">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                        </article>

                        <!-- Sidebar (Kolom Kanan - 4 cols) -->
                        <aside class="lg:col-span-4 space-y-6">
                            <div
                                class="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm dark:shadow-none sticky top-28">
                                <h3
                                    class="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-4">
                                    // Berita Lainnya
                                </h3>

                                <div class="space-y-4">
                                    <router-link v-for="related in relatedNews" :key="related.id"
                                        :to="'/berita/' + related.id"
                                        class="group block pb-4 border-b border-slate-100 dark:border-slate-800/60 last:border-0 last:pb-0">
                                        <span class="text-[10px] font-mono text-slate-400 block mb-1">{{ related.date
                                            }}</span>
                                        <h4
                                            class="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2">
                                            {{ related.title }}
                                        </h4>
                                        <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-1">
                                            {{ related.snippet }}
                                        </p>
                                    </router-link>
                                </div>

                                <!-- CTA Banner Sidebar -->
                                <div
                                    class="mt-8 p-5 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl text-center space-y-3">
                                    <p
                                        class="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider font-semibold">
                                        Gabung RPL</p>
                                    <p class="text-xs text-slate-700 dark:text-slate-300 font-medium">Tertarik belajar
                                        rekayasa perangkat lunak modern?</p>
                                    <router-link to="/"
                                        class="inline-block w-full py-2 px-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-semibold rounded-lg transition-all shadow-sm">
                                        Daftar Sekarang
                                    </router-link>
                                </div>

                            </div>
                        </aside>
                    </div>
                </div>

            </div>
        </main>

        <!-- Simple Footer -->
        <footer
            class="border-t border-slate-200 dark:border-slate-800/80 py-8 text-slate-500 dark:text-slate-400 text-xs mt-12">
            <div
                class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-[11px]">
                <p>&copy; 2026 Department of Software Engineering.</p>
                <p>Built with clean code principles.</p>
            </div>
        </footer>

    </div>
</template>

<script setup lang="ts">
import type { Article, RelatedArticle } from '@/types'
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const article = ref<Article | null>(null)
const relatedNews = ref<RelatedArticle[]>([])
const isLoading = ref<boolean>(true)
const isError = ref<boolean>(false)

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}


const loadArticleData = async (articleId: string) => {
    isLoading.value = true
    isError.value = false
    scrollToTop()

    await new Promise((resolve) => setTimeout(resolve, 300))

    isLoading.value = false;
}
onMounted(() => {
    // loadArticleData();
})


watch(
    () => route.params.id,
    (newId) => {
        if (newId) {
            loadArticleData(newId as string)
        }
    }
)

// Helper Copy Link
const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    alert('Tautan artikel berhasil disalin!')
}
</script>
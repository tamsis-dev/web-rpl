<template>
    <div>
        <!-- Tech Stack & Tools Section (Infinite Scroll) -->
        <section
            class="py-16 border-t border-slate-200 dark:border-slate-800/60 bg-slate-100/30 dark:bg-slate-900/10 overflow-hidden">
            <div class="max-w-7xl mx-auto px-6 sm:px-8 mb-8 text-center">
                <h2 class="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-2">//
                    Software & Tools</h2>
                <p class="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                    Teknologi Standar Industri yang Harus Dikuasai Siswa
                </p>
            </div>

            <!-- Outer Infinite Carousel Wrapper -->
            <div class="relative w-full overflow-hidden group py-2">
                <!-- Fade Gradient Effect (Kiri & Kanan) -->
                <div
                    class="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-slate-50 dark:from-[#0f172a] to-transparent z-10 pointer-events-none">
                </div>
                <div
                    class="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-slate-50 dark:from-[#0f172a] to-transparent z-10 pointer-events-none">
                </div>

                <!-- Inner Continuous Track -->
                <div class="flex gap-4 w-max animate-infinite-scroll group-hover:[animation-play-state:paused]">

                    <!-- Loop 1: Data Asli -->
                    <div v-for="tool in techStack" :key="'tool-a-' + tool.id"
                        class="flex items-center gap-3.5 px-5 py-3 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/90 rounded-xl shadow-sm dark:shadow-none hover:border-cyan-500/50 dark:hover:border-cyan-500/40 transition-all shrink-0 cursor-pointer">
                        <img :src="tool.icon" :alt="tool.name" class="w-6 h-6 object-contain" />
                        <div class="flex flex-col">
                            <span class="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-none mb-1">{{
                                tool.name }}</span>
                            <span class="text-[10px] font-mono text-slate-500 dark:text-slate-400 leading-none">{{
                                tool.category }}</span>
                        </div>
                    </div>

                    <!-- Loop 2: Duplikat untuk Smooth Endless Loop -->
                    <div v-for="tool in techStack" :key="'tool-b-' + tool.id" aria-hidden="true"
                        class="flex items-center gap-3.5 px-5 py-3 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/90 rounded-xl shadow-sm dark:shadow-none hover:border-cyan-500/50 dark:hover:border-cyan-500/40 transition-all shrink-0 cursor-pointer">
                        <img :src="tool.icon" :alt="tool.name" class="w-6 h-6 object-contain" />
                        <div class="flex flex-col">
                            <span class="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-none mb-1">{{
                                tool.name }}</span>
                            <span class="text-[10px] font-mono text-slate-500 dark:text-slate-400 leading-none">{{
                                tool.category }}</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// Component logic here

interface TechTool {
    id: number
    name: string
    category: string
    icon: string // Menggunakan Devicon CDN URL atau SVG/Emoji
}

const techStack = ref<TechTool[]>([
    { id: 1, name: 'VS Code', category: 'Code Editor', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { id: 2, name: 'Vue.js', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { id: 3, name: 'TypeScript', category: 'Language', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { id: 4, name: 'Tailwind CSS', category: 'Styling', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { id: 5, name: 'Node.js', category: 'Runtime', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { id: 6, name: 'PostgreSQL', category: 'Database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { id: 7, name: 'Flutter', category: 'Mobile', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { id: 8, name: 'Git & GitHub', category: 'Version Control', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { id: 9, name: 'Docker', category: 'DevOps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { id: 10, name: 'Figma', category: 'UI/UX Design', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { id: 11, name: 'Postman', category: 'API Testing', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
    { id: 12, name: 'Python', category: 'Language', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' }
])
</script>
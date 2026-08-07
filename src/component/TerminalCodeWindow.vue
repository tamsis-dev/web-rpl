<template>
  <div class="rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-xl dark:shadow-2xl font-mono text-xs overflow-hidden transition-colors">
    <!-- Header Window / Mac Controls -->
    <div class="flex items-center justify-between mb-4 pb-3 border-b border-slate-200 dark:border-slate-800/80">
      <div class="flex items-center gap-2">
        <div class="w-3 h-3 rounded-full bg-rose-500/80"></div>
        <div class="w-3 h-3 rounded-full bg-amber-500/80"></div>
        <div class="w-3 h-3 rounded-full bg-emerald-500/80"></div>
        <span class="ml-2 text-slate-500 dark:text-slate-400 text-[11px]">{{ filename }}</span>
      </div>
      <button 
        @click="replayCodeAnimation" 
        class="text-[10px] text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1"
        title="Replay Animation">
        <span>&#8635;</span> Replay
      </button>
    </div>

    <!-- Code Container -->
    <div class="space-y-1.5 text-slate-800 dark:text-slate-300 leading-relaxed min-h-[260px]">
      <div v-for="(line, index) in codeLines" :key="index" class="flex items-start">
        <!-- Line Numbers -->
        <span class="w-6 text-slate-400 dark:text-slate-600 select-none text-right pr-3 text-[11px] font-mono shrink-0">
          {{ index + 1 }}
        </span>

        <!-- Line Content -->
        <div class="whitespace-pre">
          <span v-html="renderHighlightedText(line)"></span>
          <!-- Blinking Cursor -->
          <span 
            v-if="index === currentLineIndex && isTyping" 
            class="inline-block w-2 h-4 bg-cyan-500 dark:bg-cyan-400 ml-0.5 align-middle animate-pulse"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = withDefaults(defineProps<{
  filename?: string
  rawCodeLines?: string[]
}>(), {
  filename: 'student_project.ts',
  rawCodeLines: () => [
    '// Program Keahlian RPL',
    'interface Developer {',
    '  skills: string[];',
    '  mindset: \'Problem Solver\';',
    '}',
    '',
    'const student: Developer = {',
    '  skills: [\'Web\', \'Mobile\', \'Robotik\', \'Game\'],',
    '  mindset: \'Problem Solver\'',
    '};',
    '',
    'console.log("Ready for industry.");'
  ]
})

const codeLines = ref<string[]>([])
const currentLineIndex = ref(0)
const currentCharIndex = ref(0)
const isTyping = ref(true)
let typingTimer: ReturnType<typeof setTimeout> | null = null

const typeCode = () => {
  if (currentLineIndex.value < props.rawCodeLines.length) {
    const currentFullLine = props.rawCodeLines[currentLineIndex.value] || ""

    if (currentFullLine === '') {
      codeLines.value[currentLineIndex.value] = ''
      currentLineIndex.value++
      currentCharIndex.value = 0
      typingTimer = setTimeout(typeCode, 100)
      return
    }

    if (currentCharIndex.value < currentFullLine.length) {
      codeLines.value[currentLineIndex.value] = currentFullLine.substring(0, currentCharIndex.value + 1)
      currentCharIndex.value++
      const speed = Math.floor(Math.random() * 25) + 20
      typingTimer = setTimeout(typeCode, speed)
    } else {
      currentLineIndex.value++
      currentCharIndex.value = 0
      typingTimer = setTimeout(typeCode, 120)
    }
  } else {
    isTyping.value = false
  }
}

const replayCodeAnimation = () => {
  if (typingTimer) clearTimeout(typingTimer)
  codeLines.value = Array(props.rawCodeLines.length).fill('')
  currentLineIndex.value = 0
  currentCharIndex.value = 0
  isTyping.value = true
  typeCode()
}

const renderHighlightedText = (text: string) => {
  if (!text) return ''

  if (text.startsWith('//')) {
    return `<span class="text-slate-400 dark:text-slate-500">${escapeHtml(text)}</span>`
  }

  let highlighted = escapeHtml(text)

  // Penyesuaian Syntax Highlighting agar tajam & terbaca di Light Mode maupun Dark Mode
  highlighted = highlighted.replace(/\b(interface|const)\b/g, '<span class="text-cyan-600 dark:text-cyan-400 font-semibold dark:font-normal">$1</span>')
  highlighted = highlighted.replace(/\b(Developer|string)\b/g, '<span class="text-amber-600 dark:text-amber-300">$1</span>')
  highlighted = highlighted.replace(/('[^']*'|"[^"]*")/g, '<span class="text-emerald-600 dark:text-emerald-400">$1</span>')
  highlighted = highlighted.replace(/\b(console|log)\b/g, '<span class="text-purple-600 dark:text-purple-400">$1</span>')

  return highlighted
}

const escapeHtml = (str: string) => {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

onMounted(() => {
  codeLines.value = Array(props.rawCodeLines.length).fill('')
  typeCode()
})

onUnmounted(() => {
  if (typingTimer) clearTimeout(typingTimer)
})
</script>
<template>
  <div class="rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-xl dark:shadow-2xl font-mono text-xs overflow-hidden transition-colors w-full max-w-2xl mx-auto">
    <!-- Header Window / Mac Controls -->
    <div class="flex items-center justify-between mb-4 pb-3 border-b border-slate-200 dark:border-slate-800/80 h-9 shrink-0">
      <div class="flex items-center gap-2">
        <div class="w-3 h-3 rounded-full bg-rose-500/80"></div>
        <div class="w-3 h-3 rounded-full bg-amber-500/80"></div>
        <div class="w-3 h-3 rounded-full bg-emerald-500/80"></div>
        <span class="ml-2 text-slate-500 dark:text-slate-400 text-[11px] select-none">{{ currentFilename }}</span>
      </div>
      <button 
        @click="manualReplay" 
        class="text-[10px] text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1 select-none"
        title="Replay Animation">
        <span>&#8635;</span> Replay
      </button>
    </div>

    <!-- Code Container (Tinggi Dibuat Pas 13 Baris & Tanpa Scrollbar) -->
    <div class="space-y-1.5 text-slate-800 dark:text-slate-300 leading-relaxed h-[340px] overflow-hidden">
      <div v-for="(line, index) in codeLines" :key="index" class="flex items-center min-h-[1.25rem]">
        <!-- Line Numbers -->
        <span class="w-6 text-slate-400 dark:text-slate-600 select-none text-right pr-3 text-[11px] font-mono shrink-0">
          {{ index + 1 }}
        </span>

        <!-- Line Content -->
        <div class="whitespace-pre flex items-center min-h-[1.25rem]">
          <span :class="getLineColor(line)">{{ line }}</span>
          
          <!-- Cursor -->
          <span 
            v-if="index === currentLineIndex && isTyping" 
            class="inline-block w-1.5 h-3.5 bg-cyan-500 dark:bg-cyan-400 ml-0.5 animate-pulse shrink-0"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface Snippet {
  filename: string
  lines: string[]
}

const props = withDefaults(defineProps<{
  snippets?: Snippet[]
}>(), {
  snippets: () => [
    {
      filename: 'student_project.ts',
      lines: [
        '// Program Keahlian RPL',
        'interface Developer {',
        '  skills: string[];',
        '  mindset: "Problem Solver";',
        '}',
        '',
        'const student: Developer = {',
        '  skills: ["Web", "Mobile", "DevOps"],',
        '  mindset: "Problem Solver"',
        '};',
        '',
        'console.log("Ready for industry.");'
      ]
    },
    {
      filename: 'backend_service.py',
      lines: [
        '# Backend API Service',
        'class DatabaseManager:',
        '    def __init__(self, db_uri: str):',
        '        self.uri = db_uri',
        '',
        '    def connect(self):',
        '        print("Connecting to database...")',
        '        return True',
        '',
        'db = DatabaseManager("postgres://localhost:5432")',
        'db.connect()'
      ]
    },
    {
      filename: 'ui_component.jsx',
      lines: [
        '// Modern UI Component',
        'import React from "react";',
        '',
        'export const ActionButton = ({ label }) => {',
        '  const handleClick = () => {',
        '    console.log("Button clicked!");',
        '  };',
        '',
        '  return <button onClick={handleClick}>{label}</button>;',
        '};'
      ]
    }
  ]
})

const currentSnippetIndex = ref(0)
const codeLines = ref<string[]>([])
const currentLineIndex = ref(0)
const currentCharIndex = ref(0)
const isTyping = ref(true)
let typingTimer: ReturnType<typeof setTimeout> | null = null

const activeSnippet = computed(() => props.snippets[currentSnippetIndex.value])
const currentFilename = computed(() => activeSnippet.value?.filename || 'terminal.txt')
const currentRawLines = computed(() => activeSnippet.value?.lines || [])

const resetState = () => {
  if (typingTimer) clearTimeout(typingTimer)
  codeLines.value = Array(currentRawLines.value.length).fill('')
  currentLineIndex.value = 0
  currentCharIndex.value = 0
  isTyping.value = true
}

const typeCode = () => {
  const lines = currentRawLines.value

  if (currentLineIndex.value < lines.length) {
    const currentFullLine = lines[currentLineIndex.value] || ""

    if (currentFullLine === '') {
      codeLines.value[currentLineIndex.value] = ''
      currentLineIndex.value++
      currentCharIndex.value = 0
      typingTimer = setTimeout(typeCode, 150)
      return
    }

    if (currentCharIndex.value < currentFullLine.length) {
      codeLines.value[currentLineIndex.value] = currentFullLine.substring(0, currentCharIndex.value + 1)
      currentCharIndex.value++
      typingTimer = setTimeout(typeCode, 40)
    } else {
      currentLineIndex.value++
      currentCharIndex.value = 0
      typingTimer = setTimeout(typeCode, 200)
    }
  } else {
    isTyping.value = false
    typingTimer = setTimeout(() => {
      currentSnippetIndex.value = (currentSnippetIndex.value + 1) % props.snippets.length
      resetState()
      typeCode()
    }, 3000)
  }
}

const manualReplay = () => {
  resetState()
  typeCode()
}

const getLineColor = (line: string) => {
  const trimmed = line.trim()
  if (trimmed.startsWith('//') || trimmed.startsWith('#')) {
    return 'text-slate-400 dark:text-slate-500 italic'
  }
  if (trimmed.startsWith('import') || trimmed.startsWith('export') || trimmed.startsWith('interface') || trimmed.startsWith('class')) {
    return 'text-cyan-600 dark:text-cyan-400 font-semibold'
  }
  if (trimmed.startsWith('console') || trimmed.startsWith('print')) {
    return 'text-purple-600 dark:text-purple-400'
  }
  return 'text-slate-800 dark:text-slate-200'
}

onMounted(() => {
  resetState()
  typeCode()
})

onUnmounted(() => {
  if (typingTimer) clearTimeout(typingTimer)
})
</script>
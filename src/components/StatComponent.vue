<template>
  <section ref="sectionRef" :class="['border-t', border]">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center"
    >
      <div v-for="s in animatedStats" :key="s.label">
        <p class="rpl-display text-[26px] sm:text-[32px] font-semibold tracking-tight">
          {{ s.displayValue }}
        </p>
        <p :class="['text-[12px] sm:text-[13px] mt-1', muted]">{{ s.label }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

interface StatItem {
  value: string | number;
  label: string;
}

const props = defineProps<{
  stats: StatItem[];
  border?: string;
  muted?: string;
}>();

interface AnimatedStatItem extends StatItem {
  displayValue: string | number;
}

const sectionRef = ref<HTMLElement | null>(null);
let hasAnimated = false;

const animatedStats = ref<AnimatedStatItem[]>(
  props.stats.map(s => ({
    ...s,
    displayValue: parseInitialValue(s.value)
  }))
);

function parseInitialValue(val: string | number) {
  if (typeof val === 'number') return 0;
  const match = val.match(/^([\d.,]+)(.*)$/);
  if (!match) return 0;
  return '0' + match[2]; // Selalu mulai dari angka 0 murni + suffix (misal: "0%", "0K+")
}

function startCountUp() {
  if (hasAnimated) return;
  hasAnimated = true;

  props.stats.forEach((originalStat, index) => {
    const rawVal = originalStat.value;
    const duration = 1200 + Math.random() * 800; // Durasi bervariasi natural
    const steps = 40;
    const intervalTime = duration / steps;

    if (typeof rawVal === 'number') {
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        const target = animatedStats.value[index];
        if (target) {
          target.displayValue = Math.floor(rawVal * progress);
        }
        
        if (currentStep >= steps) {
          if (target) target.displayValue = rawVal;
          clearInterval(timer);
        }
      }, intervalTime);
    } else {
      const match = rawVal.match(/^([\d.,]+)(.*)$/);
      if (match) {
        // Ambil hanya angka murninya saja sebagai integer
        const numericPart = parseInt(match[1].replace(/[,.]/g, ''), 10) || 0;
        const suffix = match[2];

        let currentStep = 0;
        const timer = setInterval(() => {
          currentStep++;
          const progress = currentStep / steps;
          const currentVal = Math.floor(numericPart * progress);

          const target = animatedStats.value[index];
          if (target) {
            target.displayValue = currentVal + suffix;
          }

          if (currentStep >= steps) {
            if (target) target.end = target.displayValue = rawVal;
            clearInterval(timer);
          }
        }, intervalTime);
      }
    }
  });
}

let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCountUp();
          if (observer && sectionRef.value) {
            observer.unobserve(sectionRef.value);
          }
        }
      });
    },
    { threshold: 0.2 }
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.grid > div {
  animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
}
</style>
<script setup>
defineProps({
  title: {
    type: String,
    default: 'SixFit 健身',
  },
})

defineEmits(['toggle-sidebar'])
</script>

<template>
  <header class="sticky top-0 z-20 border-b border-slate-100 bg-white/95 backdrop-blur-md">
    <div class="flex items-center justify-between px-5 py-3.5 md:px-7">
      <div class="flex items-center gap-4">
        <button
          class="rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 md:hidden"
          type="button" @click="$emit('toggle-sidebar')">
          ☰
        </button>
        <div>
          <p class="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">SixFit 健身</p>
          <h1 class="text-lg font-semibold leading-tight text-slate-900">{{ title }}</h1>
        </div>
      </div>
      <div class="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-semibold tracking-wide text-slate-500">
        Demo
      </div>
    </div>
  </header>
</template>

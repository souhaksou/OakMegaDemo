<script setup>
defineProps({
  title: {
    type: String,
    default: 'XX Fitness 後台',
  },
})

defineEmits(['toggle-sidebar'])
</script>

<template>
  <header class="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur">
    <div class="flex items-center justify-between px-4 py-4 md:px-6">
      <div class="flex items-center gap-3">
        <button
          class="rounded-lg border border-slate-300 p-2 text-slate-600 transition hover:bg-slate-100 md:hidden"
          type="button"
          @click="$emit('toggle-sidebar')"
        >
          ☰
        </button>
        <div>
          <p class="text-sm font-medium text-slate-500">健身社群 CRM 儀表板</p>
          <h1 class="text-xl font-semibold text-slate-900">{{ title }}</h1>
        </div>
      </div>
      <div class="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">示範版</div>
    </div>
  </header>
</template>

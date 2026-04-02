<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
  value: {
    type: [String, Number],
    default: '',
  },
})
</script>

<template>
  <article class="group rounded-2xl border border-slate-100 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover">
    <p v-if="title" class="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">{{ title }}</p>
    <p v-if="value !== ''" class="mt-2 text-3xl font-bold text-slate-900">{{ value }}</p>
    <p v-if="subtitle" class="mt-1.5 text-sm text-slate-500">{{ subtitle }}</p>
    <slot />
  </article>
</template>

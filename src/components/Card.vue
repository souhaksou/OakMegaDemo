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
  <article class="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
    <p v-if="title" class="text-sm font-medium text-slate-500">{{ title }}</p>
    <p v-if="value !== ''" class="mt-2 text-3xl font-semibold text-slate-900">{{ value }}</p>
    <p v-if="subtitle" class="mt-2 text-sm text-slate-600">{{ subtitle }}</p>
    <slot />
  </article>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'button',
  },
  variant: {
    type: String,
    default: 'primary',
  },
  block: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <button
    :type="type"
    :class="[
      'rounded-xl px-4 py-2 text-sm font-semibold transition',
      block ? 'w-full' : '',
      variant === 'primary'
        ? 'bg-cyan-700 text-white hover:bg-cyan-800'
        : variant === 'danger'
          ? 'bg-red-600 text-white hover:bg-red-700'
          : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-100',
    ]"
  >
    <slot />
  </button>
</template>

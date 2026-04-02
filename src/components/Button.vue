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
      'rounded-xl px-5 py-2 text-sm font-semibold tracking-wide transition-all duration-200 active:scale-95',
      block ? 'w-full' : '',
      variant === 'primary'
        ? 'bg-primary text-white shadow-sm hover:bg-primary/90 hover:shadow'
        : variant === 'danger'
          ? 'bg-red-600 text-white shadow-sm hover:bg-red-700 hover:shadow'
          : 'border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 hover:border-slate-300',
    ]"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: '',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  options: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <label class="block">
    <span class="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">{{ label }}</span>

    <select
      v-if="type === 'select'"
      :value="modelValue"
      class="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-all duration-200 hover:border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/10"
      @change="updateValue"
    >
      <option value="" disabled>請選擇{{ label }}</option>
      <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
    </select>

    <input
      v-else
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      class="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-300 hover:border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/10"
      @input="updateValue"
    />
  </label>
</template>

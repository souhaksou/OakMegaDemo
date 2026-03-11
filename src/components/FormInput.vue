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
    <span class="mb-2 block text-sm font-medium text-slate-700">{{ label }}</span>

    <select
      v-if="type === 'select'"
      :value="modelValue"
      class="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cyan-600"
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
      class="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cyan-600"
      @input="updateValue"
    />
  </label>
</template>

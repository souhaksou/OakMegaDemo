<script setup>
defineProps({
  columns: {
    type: Array,
    default: () => [],
  },
  rows: {
    type: Array,
    default: () => [],
  },
  actionsLabel: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card">
    <div class="overflow-x-auto">
      <table class="min-w-full text-left">
        <thead>
          <tr class="border-b border-slate-100 bg-slate-50/70">
            <th
              v-for="column in columns"
              :key="column.key"
              class="px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400"
            >
              {{ column.label }}
            </th>
            <th v-if="$slots.actions" class="px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
              {{ actionsLabel || '操作' }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row.id" class="border-t border-slate-50 transition-colors duration-100 hover:bg-slate-50/60">
            <td v-for="column in columns" :key="`${row.id}-${column.key}`" class="px-5 py-3.5 text-sm text-slate-700">
              {{ row[column.key] }}
            </td>
            <td v-if="$slots.actions" class="px-5 py-3.5">
              <slot name="actions" :row="row" />
            </td>
          </tr>
          <tr v-if="rows.length === 0">
            <td :colspan="columns.length + ($slots.actions ? 1 : 0)" class="px-5 py-8 text-center text-sm text-slate-400">
              目前沒有資料
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

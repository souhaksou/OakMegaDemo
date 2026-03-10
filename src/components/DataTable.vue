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
  <div class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
    <div class="overflow-x-auto">
      <table class="min-w-full text-left">
        <thead class="bg-slate-50">
          <tr>
            <th
              v-for="column in columns"
              :key="column.key"
              class="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500"
            >
              {{ column.label }}
            </th>
            <th v-if="$slots.actions" class="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
              {{ actionsLabel || '操作' }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row.id" class="border-t border-slate-100">
            <td v-for="column in columns" :key="`${row.id}-${column.key}`" class="px-4 py-3 text-sm text-slate-700">
              {{ row[column.key] }}
            </td>
            <td v-if="$slots.actions" class="px-4 py-3">
              <slot name="actions" :row="row" />
            </td>
          </tr>
          <tr v-if="rows.length === 0">
            <td :colspan="columns.length + ($slots.actions ? 1 : 0)" class="px-4 py-6 text-center text-sm text-slate-500">
              目前沒有資料
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

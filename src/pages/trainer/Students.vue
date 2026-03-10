<script setup>
import DataTable from '../../components/DataTable.vue'
import data from '../../data/mockData.json'

const columns = [
  { key: 'name', label: '學生' },
  { key: 'goal', label: '目標' },
  { key: 'trainer', label: '教練' },
]
</script>

<template>
  <section class="space-y-4">
    <h2 class="text-2xl font-semibold text-slate-900">學生名單</h2>
    <DataTable :columns="columns" :rows="data.students" />
  </section>
</template>

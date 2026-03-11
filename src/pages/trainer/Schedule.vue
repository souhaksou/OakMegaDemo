<script setup>
import DataTable from '../../components/DataTable.vue'
import data from '../../data/mockData.json'

const columns = [
  { key: 'time', label: '時間' },
  { key: 'className', label: '課程' },
  { key: 'trainer', label: '教練' },
  { key: 'student', label: '學生' },
]
</script>

<template>
  <section class="space-y-4">
    <h2 class="text-2xl font-semibold text-slate-900">教練課表</h2>
    <DataTable :columns="columns" :rows="data.trainerSchedule" />
  </section>
</template>

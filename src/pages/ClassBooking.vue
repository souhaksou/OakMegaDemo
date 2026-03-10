<script setup>
import DataTable from '../components/DataTable.vue'
import Button from '../components/Button.vue'
import data from '../data/mockData.json'

const columns = [
  { key: 'className', label: '課程' },
  { key: 'trainer', label: '教練' },
  { key: 'time', label: '時間' },
]

const bookClass = () => {
  alert('預約成功（示範）')
}
</script>

<template>
  <section class="space-y-4">
    <h2 class="text-2xl font-semibold text-slate-900">課程預約</h2>
    <DataTable :columns="columns" :rows="data.classes">
      <template #actions>
        <Button @click="bookClass">預約</Button>
      </template>
    </DataTable>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import DataTable from '../../components/DataTable.vue'
import Button from '../../components/Button.vue'

const columns = [
  { key: 'className', label: '課程' },
  { key: 'trainer', label: '教練' },
  { key: 'time', label: '時間' },
]

const classRows = ref([
  { id: 1, className: '肌力訓練', trainer: 'Ryan', time: '10:00' },
  { id: 2, className: '瑜珈', trainer: 'Ashley', time: '14:00' },
  { id: 3, className: 'HIIT', trainer: 'David', time: '19:00' },
  { id: 4, className: '皮拉提斯', trainer: 'Sophia', time: '09:00' },
  { id: 5, className: '綜合體能', trainer: 'Jason', time: '16:00' },
  { id: 6, className: '活動度訓練', trainer: 'Emma', time: '18:00' },
])

const editClass = () => alert('已點擊編輯（示範）')
const deleteClass = () => alert('已點擊刪除（示範）')
const addClass = () => alert('已點擊新增課程（示範）')
</script>

<template>
  <section class="space-y-4">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <h2 class="text-2xl font-semibold text-slate-900">課程管理</h2>
      <Button @click="addClass">新增課程</Button>
    </div>

    <DataTable :columns="columns" :rows="classRows" actions-label="操作">
      <template #actions>
        <div class="flex gap-2">
          <Button variant="secondary" @click="editClass">編輯</Button>
          <Button variant="danger" @click="deleteClass">刪除</Button>
        </div>
      </template>
    </DataTable>
  </section>
</template>

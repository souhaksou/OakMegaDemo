<script setup>
import { onMounted, ref } from 'vue'
import Swal from 'sweetalert2'
import DataTable from '../../components/DataTable.vue'
import Button from '../../components/Button.vue'
import data from '../../data/mockData.json'

const STORAGE_KEY = 'gym-crm-class-management-rows'

const columns = [
  { key: 'className', label: '課程' },
  { key: 'trainer', label: '教練' },
  { key: 'time', label: '時間' },
]

const classRows = ref([])

const classOptions = ['肌力訓練', '瑜珈', 'HIIT', '皮拉提斯', '綜合體能', '活動度訓練']
const trainerOptions = ['Ryan', 'Ashley', 'David', 'Sophia', 'Jason', 'Emma']
const timeOptions = ['09:00', '10:00', '14:00', '16:00', '18:00', '19:00']

const getDefaultRows = () =>
  data.classes.map((item) => ({
    id: item.id,
    className: item.className,
    trainer: item.trainer,
    time: item.time,
  }))

const persistRows = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(classRows.value))
}

const initializeRows = () => {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) {
    classRows.value = JSON.parse(saved)
    return
  }

  classRows.value = getDefaultRows()
  persistRows()
}

const editClass = async (row) => {
  const optionMap = Object.fromEntries(timeOptions.map((time) => [time, time]))
  const result = await Swal.fire({
    title: `編輯 ${row.className} 時間`,
    input: 'select',
    inputOptions: optionMap,
    inputValue: row.time,
    inputPlaceholder: '選擇時間',
    showCancelButton: true,
    confirmButtonText: '儲存',
    cancelButtonText: '取消',
  })

  if (!result.isConfirmed || !result.value) return

  row.time = result.value
  classRows.value = [...classRows.value]
  persistRows()

  await Swal.fire({
    icon: 'success',
    title: '更新成功',
    text: '課程時間已更新',
    confirmButtonText: '確認',
  })
}

const deleteClass = async (row) => {
  const result = await Swal.fire({
    icon: 'warning',
    title: '確定刪除？',
    text: `${row.className} 將從清單移除`,
    showCancelButton: true,
    confirmButtonText: '刪除',
    cancelButtonText: '取消',
  })

  if (!result.isConfirmed) return

  classRows.value = classRows.value.filter((item) => item.id !== row.id)
  persistRows()

  await Swal.fire({
    icon: 'success',
    title: '已刪除',
    text: '課程已從清單移除',
    confirmButtonText: '確認',
  })
}

const addClass = async () => {
  const result = await Swal.fire({
    title: '新增課程',
    html: `
      <div class="swal2-html-container" style="display:flex; flex-direction:column; gap:10px; margin-top: 8px;">
        <select id="swal-class" class="swal2-select" style="display:block;">
          ${classOptions.map((item) => `<option value="${item}">${item}</option>`).join('')}
        </select>
        <select id="swal-trainer" class="swal2-select" style="display:block;">
          ${trainerOptions.map((item) => `<option value="${item}">${item}</option>`).join('')}
        </select>
        <select id="swal-time" class="swal2-select" style="display:block;">
          ${timeOptions.map((item) => `<option value="${item}">${item}</option>`).join('')}
        </select>
      </div>
    `,
    focusConfirm: false,
    showCancelButton: true,
    confirmButtonText: '新增',
    cancelButtonText: '取消',
    preConfirm: () => {
      const className = document.getElementById('swal-class')?.value
      const trainer = document.getElementById('swal-trainer')?.value
      const time = document.getElementById('swal-time')?.value

      if (!className || !trainer || !time) {
        Swal.showValidationMessage('請完整選擇課程、教練與時間')
        return null
      }

      return { className, trainer, time }
    },
  })

  if (!result.isConfirmed || !result.value) return

  const nextId = classRows.value.length ? Math.max(...classRows.value.map((item) => item.id)) + 1 : 1
  classRows.value = [...classRows.value, { id: nextId, ...result.value }]
  persistRows()

  await Swal.fire({
    icon: 'success',
    title: '新增成功',
    text: '課程已加入清單',
    confirmButtonText: '確認',
  })
}

onMounted(() => {
  initializeRows()
})
</script>

<template>
  <section class="space-y-4">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <h2 class="text-2xl font-semibold text-slate-900">課程管理</h2>
      <Button @click="addClass">新增課程</Button>
    </div>

    <DataTable :columns="columns" :rows="classRows" actions-label="操作">
      <template #actions="{ row }">
        <div class="flex gap-2">
          <Button variant="secondary" @click="editClass(row)">編輯</Button>
          <Button variant="danger" @click="deleteClass(row)">刪除</Button>
        </div>
      </template>
    </DataTable>
  </section>
</template>

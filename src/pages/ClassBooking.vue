<script setup>
import { computed, onMounted, ref } from 'vue'
import Swal from 'sweetalert2'
import DataTable from '../components/DataTable.vue'
import Button from '../components/Button.vue'
import data from '../data/mockData.json'

const STORAGE_KEY = 'gym-crm-class-booking-status'
const bookingStatus = ref({})

const columns = [
  { key: 'className', label: '課程' },
  { key: 'trainer', label: '教練' },
  { key: 'time', label: '時間' },
]

const classRows = computed(() =>
  data.classes.map((item) => ({
    ...item,
    booked: Boolean(bookingStatus.value[item.id]),
  })),
)

const initializeStatus = () => {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) {
    bookingStatus.value = JSON.parse(saved)
    return
  }

  const defaultStatus = {}
  data.classes.forEach((item) => {
    defaultStatus[item.id] = false
  })
  bookingStatus.value = defaultStatus
  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultStatus))
}

const persistStatus = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookingStatus.value))
}

const bookClass = async (row) => {
  bookingStatus.value[row.id] = true
  persistStatus()

  await Swal.fire({
    icon: 'success',
    title: '預約成功',
    text: `${row.className} 已完成預約`,
    confirmButtonText: '確認',
  })
}

const cancelBooking = async (row) => {
  bookingStatus.value[row.id] = false
  persistStatus()

  await Swal.fire({
    icon: 'info',
    title: '已取消預約',
    text: `${row.className} 已取消`,
    confirmButtonText: '確認',
  })
}

onMounted(() => {
  initializeStatus()
})
</script>

<template>
  <section class="space-y-4">
    <h2 class="text-2xl font-semibold text-slate-900">課程預約</h2>
    <DataTable :columns="columns" :rows="classRows">
      <template #actions="{ row }">
        <div class="flex gap-2">
          <Button v-if="!row.booked" @click="bookClass(row)">預約</Button>
          <Button v-else variant="secondary" disabled>已預約</Button>
          <Button v-if="row.booked" variant="danger" @click="cancelBooking(row)">取消</Button>
        </div>
      </template>
    </DataTable>
  </section>
</template>

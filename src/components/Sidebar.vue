<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['close'])

const mainMenu = [
  { label: '官網首頁', to: '/' },
  { label: '品牌故事', to: '/brand' },
  { label: '活動專區', to: '/events' },
  { label: '教練團隊', to: '/trainers' },
  { label: '會員註冊', to: '/register' },
  { label: '參觀預約', to: '/visit-booking' },
  { label: '據點列表', to: '/locations' },
  { label: '課程預約', to: '/class-booking' },
]

const trainerTools = [
  { label: '教練課表', to: '/trainer/schedule' },
  { label: '學生名單', to: '/trainer/students' },
  { label: '學生紀錄', to: '/trainer/student-record' },
  { label: '課程管理', to: '/trainer/class-management' },
  { label: '教練資源', to: '/trainer/resources' },
]
</script>

<template>
  <div v-if="props.isOpen" class="fixed inset-0 z-30 bg-slate-900/40 md:hidden" @click="$emit('close')" />
  <aside :class="[
    'fixed inset-y-0 left-0 z-40 w-72 overflow-y-auto border-r border-slate-200 bg-white p-5 shadow-xl transition-transform md:static md:translate-x-0 md:shadow-none',
    props.isOpen ? 'translate-x-0' : '-translate-x-full',
  ]">
    <div class="mb-6 rounded-2xl bg-gradient-to-r from-cyan-700 to-cyan-900 p-4 text-white">
      <p class="text-xs uppercase tracking-wider text-cyan-100">歡迎光臨</p>
      <h2 class="text-lg font-semibold">SixFit 健身</h2>
    </div>

    <nav class="space-y-1">
      <RouterLink v-for="item in mainMenu" :key="item.to" :to="item.to"
        class="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
        active-class="bg-cyan-50 text-cyan-900" @click="$emit('close')">
        {{ item.label }}
      </RouterLink>
    </nav>

    <div class="my-5 border-t border-slate-200 pt-4">
      <p class="px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">教練工具</p>
      <nav class="mt-2 space-y-1">
        <RouterLink v-for="item in trainerTools" :key="item.to" :to="item.to"
          class="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
          active-class="bg-orange-50 text-orange-700" @click="$emit('close')">
          {{ item.label }}
        </RouterLink>
      </nav>
    </div>
  </aside>
</template>

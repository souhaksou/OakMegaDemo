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
  { label: '預約參觀', to: '/visit-booking' },
  { label: '據點列表', to: '/locations' },
  { label: '預約上課', to: '/class-booking' },
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
  <div v-if="props.isOpen" class="fixed inset-0 z-30 bg-slate-900/30 backdrop-blur-sm md:hidden" @click="$emit('close')" />
  <aside :class="[
    'fixed inset-y-0 left-0 z-40 flex w-68 flex-col overflow-y-auto border-r border-slate-100 bg-white px-4 py-6 shadow-xl transition-transform duration-300 md:static md:translate-x-0 md:shadow-none',
    props.isOpen ? 'translate-x-0' : '-translate-x-full',
  ]" style="width:17rem">

    <!-- Brand block -->
    <div class="mb-7 px-2">
      <div class="flex items-center gap-3">
        <div class="relative flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-primary">
          <div class="h-3.5 w-3.5 rotate-45 rounded-sm bg-accent"></div>
        </div>
        <div>
          <p class="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">Member Portal</p>
          <h2 class="text-base font-bold leading-tight text-slate-900">SixFit 健身</h2>
        </div>
      </div>
      <div class="mt-4 h-px bg-gradient-to-r from-primary/20 via-accent/15 to-transparent"></div>
    </div>

    <!-- Main nav -->
    <nav class="space-y-0.5">
      <RouterLink v-for="item in mainMenu" :key="item.to" :to="item.to"
        class="group flex items-center rounded-lg border-l-[3px] border-transparent px-3 py-2 text-sm font-medium text-slate-600 transition-all duration-150 hover:bg-slate-50 hover:text-slate-900"
        exact-active-class="!border-primary bg-sky-50/70 !text-primary font-semibold" @click="$emit('close')">
        {{ item.label }}
      </RouterLink>
    </nav>

    <!-- Trainer tools -->
    <div class="mt-6">
      <div class="mb-3 flex items-center gap-2 px-2">
        <div class="h-px flex-1 bg-slate-100"></div>
        <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">教練工具</p>
        <div class="h-px flex-1 bg-slate-100"></div>
      </div>
      <nav class="space-y-0.5">
        <RouterLink v-for="item in trainerTools" :key="item.to" :to="item.to"
          class="flex items-center rounded-lg border-l-[3px] border-transparent px-3 py-2 text-sm font-medium text-slate-600 transition-all duration-150 hover:bg-slate-50 hover:text-slate-900"
          exact-active-class="!border-accent bg-orange-50/70 !text-accent font-semibold" @click="$emit('close')">
          {{ item.label }}
        </RouterLink>
      </nav>
    </div>
  </aside>
</template>

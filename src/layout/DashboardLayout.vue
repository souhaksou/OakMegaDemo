<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'

const route = useRoute()
const isSidebarOpen = ref(false)

const pageTitle = computed(() => {
  const titles = {
    home: '儀表板',
    brand: '品牌故事',
    events: '活動專區',
    trainers: '教練團隊',
    'trainer-profile': '教練檔案',
    register: '會員註冊',
    'visit-booking': '參觀預約',
    location: '場館資訊',
    locations: '據點列表',
    'class-booking': '課程預約',
    'trainer-schedule': '教練課表',
    'trainer-students': '學生名單',
    'trainer-student-record': '學生紀錄',
    'trainer-class-management': '課程管理',
    'trainer-resources': '教練資源',
  }
  return titles[route.name] || 'XX Fitness 客戶管理'
})
</script>

<template>
  <div class="min-h-screen md:flex">
    <Sidebar :is-open="isSidebarOpen" @close="isSidebarOpen = false" />
    <div class="flex min-h-screen flex-1 flex-col">
      <Navbar :title="pageTitle" @toggle-sidebar="isSidebarOpen = !isSidebarOpen" />
      <main class="flex-1 p-4 md:p-6">
        <div class="mx-auto w-full max-w-7xl">
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>

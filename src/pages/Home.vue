<script setup>
import Card from '../components/Card.vue'
import data from '../data/mockData.json'

const stats = [
  { title: '會員總數', value: 320, subtitle: 'CRM 已註冊會員總數' },
  { title: '近期課程', value: data.classes.length, subtitle: '今日與近期課程場次' },
  { title: '在職教練', value: data.trainers.length, subtitle: '目前可安排課程的教練數' },
  { title: '活動檔期', value: data.events.length, subtitle: '近期會員活動與行銷檔期' },
]
</script>

<template>
  <section class="space-y-6">
    <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-sky-700 to-sky-600 p-8 text-white shadow-card">
      <!-- Decorative geometric shapes -->
      <div class="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 opacity-10">
        <div class="h-44 w-44 rounded-full border-[3px] border-white"></div>
      </div>
      <div class="pointer-events-none absolute right-20 top-4 h-8 w-8 rotate-45 rounded-sm bg-white opacity-10"></div>
      <div class="pointer-events-none absolute bottom-4 right-32 h-5 w-5 rotate-12 rounded-sm bg-accent opacity-60"></div>
      <div class="pointer-events-none absolute -bottom-4 right-10 h-24 w-24 rounded-full border-2 border-accent/40"></div>
      <!-- Content -->
      <div class="relative">
        <p class="text-xs font-bold uppercase tracking-[0.22em] text-sky-200">💪 💪 💪</p>
        <h2 class="mt-2 font-serif text-4xl font-normal tracking-wide text-white drop-shadow-sm">SixFit 健身</h2>
        <p class="mt-2 text-sm text-sky-100/90">「因為最好，所以最大」</p>
      </div>
    </div>

    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <Card v-for="item in stats" :key="item.title" :title="item.title" :value="item.value" :subtitle="item.subtitle" />
    </div>
  </section>
</template>

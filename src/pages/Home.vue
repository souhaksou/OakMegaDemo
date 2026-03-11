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
    <div class="rounded-3xl bg-gradient-to-r from-cyan-800 to-cyan-600 p-6 text-white shadow-card">
      <p class="text-sm uppercase tracking-wider text-cyan-100">💪 💪 💪</p>
      <h2 class="mt-2 text-3xl font-bold">SixFit 健身</h2>
      <p class="mt-2 text-cyan-100">「因為最好，所以最大」</p>
    </div>

    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <Card v-for="item in stats" :key="item.title" :title="item.title" :value="item.value" :subtitle="item.subtitle" />
    </div>
  </section>
</template>

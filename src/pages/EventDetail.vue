<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import data from '../data/mockData.json'

const route = useRoute()

const eventItem = computed(() => data.events.find((item) => item.id === Number(route.params.id)))

const getImg = (name) => {
  return new URL(`/src/assets/images/events/event0${name}.jpg`, import.meta.url).href
}
</script>

<template>
  <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
    <div v-if="eventItem" class="space-y-4">
      <h2 class="text-3xl font-bold text-slate-900">{{ eventItem.title }}</h2>
      <p class="text-sm font-medium text-cyan-700">{{ eventItem.date }}</p>
      <div
        class="flex min-h-56 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 text-slate-500">
        <img :src="getImg(eventItem.id)" :alt="eventItem.title" />
      </div>
      <p class="leading-7 text-slate-700">{{ eventItem.description }}</p>
    </div>
    <p v-else class="text-slate-600">找不到活動資料。</p>
  </section>
</template>

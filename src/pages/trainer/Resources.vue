<script setup>
import Card from '../../components/Card.vue'
import data from '../../data/mockData.json'

const getYoutubeThumbnail = (url) => {
  const id = url.split('v=')[1]
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`
}
</script>

<template>
  <section class="space-y-4">
    <h2 class="text-2xl font-semibold text-slate-900">教練資源</h2>
    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <Card v-for="item in data.resources" :key="item.id">
        <a :href="item.url" target="_blank">
          <img :src="getYoutubeThumbnail(item.url)" class="mb-2 rounded" />
          <h3 class="text-lg font-semibold text-slate-900">{{ item.name }}</h3>
        </a>
      </Card>
    </div>
  </section>
</template>

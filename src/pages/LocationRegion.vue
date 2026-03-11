<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Button from '../components/Button.vue'
import mockData from '../data/mockData.json'

const route = useRoute()
const regionStores = mockData.locations

const regionData = ref(null)
watch(
  () => route.params.region,
  (region) => {
    regionData.value = regionStores[region] || null
  },
  { immediate: true }
)

const getImg = (name) => {
  return new URL(`/src/assets/images/locations/location0${name}.png`, import.meta.url).href
}
</script>

<template>
  <section class="space-y-6">
    <h2 class="text-2xl font-semibold text-slate-900">
      {{ regionData ? `${regionData.title} 據點` : '地區據點' }}
    </h2>

    <div v-if="regionData" class="grid gap-6 lg:grid-cols-3">
      <article v-for="store in regionData.stores" :key="store.id"
        class="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
        <h3 class="text-lg font-semibold text-slate-900">{{ store.name }}</h3>
        <p class="mt-3 text-sm text-slate-700">{{ store.address }}</p>
        <p class="mt-1 text-sm text-slate-700">電話：{{ store.phone }}</p>
        <div
          class="mt-4 flex min-h-40 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 text-sm text-slate-500">
          <img :src="getImg(store.id)" :alt="store.name" class="max-h-32" />
        </div>
        <a :href="store.mapUrl" target="_blank" rel="noreferrer" class="mt-4 inline-block">
          <Button variant="secondary">Google Map 連結</Button>
        </a>
      </article>
    </div>

    <p v-else class="text-slate-600">找不到此地區資料。</p>
  </section>
</template>

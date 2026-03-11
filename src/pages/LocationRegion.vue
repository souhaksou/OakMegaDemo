<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Button from '../components/Button.vue'

const route = useRoute()

const regionStores = {
  north: {
    title: '北台灣',
    stores: [
      { id: 1, name: '台北店', address: '台北市信義區健身路 10 號', phone: '02-1111-2222', mapUrl: '#' },
      { id: 2, name: '新北店', address: '新北市板橋區活力路 20 號', phone: '02-3333-4444', mapUrl: '#' },
      { id: 3, name: '桃園店', address: '桃園市中壢區能量路 30 號', phone: '03-5555-6666', mapUrl: '#' },
    ],
  },
  central: {
    title: '中台灣',
    stores: [
      { id: 1, name: '台中店', address: '台中市西屯區健康路 10 號', phone: '04-1111-2222', mapUrl: '#' },
      { id: 2, name: '彰化店', address: '彰化市訓練路 20 號', phone: '04-3333-4444', mapUrl: '#' },
      { id: 3, name: '南投店', address: '南投市核心路 30 號', phone: '049-555-6666', mapUrl: '#' },
    ],
  },
  south: {
    title: '南台灣',
    stores: [
      { id: 1, name: '台南店', address: '台南市東區運動路 10 號', phone: '06-1111-2222', mapUrl: '#' },
      { id: 2, name: '高雄店', address: '高雄市左營區肌力路 20 號', phone: '07-3333-4444', mapUrl: '#' },
      { id: 3, name: '屏東店', address: '屏東市訓練路 30 號', phone: '08-5555-6666', mapUrl: '#' },
    ],
  },
}

const regionData = computed(() => regionStores[route.params.region] || null)
</script>

<template>
  <section class="space-y-6">
    <h2 class="text-2xl font-semibold text-slate-900">
      {{ regionData ? `${regionData.title} 據點` : '地區據點' }}
    </h2>

    <div v-if="regionData" class="grid gap-6 lg:grid-cols-3">
      <article
        v-for="store in regionData.stores"
        :key="store.id"
        class="rounded-2xl border border-slate-200 bg-white p-5 shadow-card"
      >
        <h3 class="text-lg font-semibold text-slate-900">{{ store.name }}</h3>
        <p class="mt-3 text-sm text-slate-700">{{ store.address }}</p>
        <p class="mt-1 text-sm text-slate-700">電話：{{ store.phone }}</p>
        <div
          class="mt-4 flex min-h-40 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 text-sm text-slate-500"
        >
          店面照片預留區
        </div>
        <a :href="store.mapUrl" target="_blank" rel="noreferrer" class="mt-4 inline-block">
          <Button variant="secondary">Google Map 連結</Button>
        </a>
      </article>
    </div>

    <p v-else class="text-slate-600">找不到此地區資料。</p>
  </section>
</template>

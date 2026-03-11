<script setup>
import Button from '../components/Button.vue'

const locationGroups = [
  {
    region: '北台灣',
    slug: 'north',
    cities: ['台北店', '新北店', '桃園店'],
  },
  {
    region: '中台灣',
    slug: 'central',
    cities: ['台中店', '彰化店', '南投店'],
  },
  {
    region: '南台灣',
    slug: 'south',
    cities: ['台南店', '高雄店', '屏東店'],
  },
]
</script>

<template>
  <section class="space-y-6">
    <h2 class="text-2xl font-semibold text-slate-900">健身房據點</h2>
    <div class="grid gap-6 lg:grid-cols-3">
      <article
        v-for="group in locationGroups"
        :key="group.region"
        class="rounded-2xl border border-slate-200 bg-white p-5 shadow-card"
      >
        <h3 class="text-lg font-semibold text-slate-900">{{ group.region }}</h3>
        <ul class="mt-4 space-y-2">
          <li
            v-for="city in group.cities"
            :key="city"
            class="rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-700"
          >
            {{ city }}
          </li>
        </ul>
        <RouterLink :to="`/locations/${group.slug}`" class="mt-4 inline-block">
          <Button variant="secondary">查看 {{ group.region }} 據點</Button>
        </RouterLink>
      </article>
    </div>
  </section>
</template>

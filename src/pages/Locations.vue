<script setup>
const locationGroups = [
  {
    region: '北台灣',
    cities: ['台北', '新北', '桃園'],
  },
  {
    region: '中台灣',
    cities: ['台中', '彰化', '南投'],
  },
  {
    region: '南台灣',
    cities: ['台南', '高雄', '屏東'],
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
      </article>
    </div>
  </section>
</template>

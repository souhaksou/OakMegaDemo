<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import data from '../data/mockData.json'

const route = useRoute()

const trainer = computed(() => data.trainers.find((item) => item.id === route.params.id))
</script>

<template>
  <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
    <div v-if="trainer" class="grid gap-6 md:grid-cols-[220px_1fr]">
      <div
        class="flex h-56 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 text-slate-500"
      >
        照片預留區
      </div>
      <div class="space-y-3">
        <h2 class="text-3xl font-bold text-slate-900">{{ trainer.name }}</h2>
        <p class="text-slate-700"><span class="font-semibold">專長：</span>{{ trainer.specialty }}</p>
        <p class="text-slate-700">
          <span class="font-semibold">證照：</span>{{ trainer.certification }}
        </p>
        <p class="text-slate-700">
          <span class="font-semibold">教學理念：</span>{{ trainer.philosophy }}
        </p>
      </div>
    </div>
    <p v-else class="text-slate-600">找不到此教練資料。</p>
  </section>
</template>

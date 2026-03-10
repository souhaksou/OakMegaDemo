<script setup>
import Card from '../components/Card.vue'
import Button from '../components/Button.vue'
import data from '../data/mockData.json'
</script>

<template>
  <section>
    <h2 class="mb-4 text-2xl font-semibold text-slate-900">教練團隊</h2>
    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <Card v-for="trainer in data.trainers" :key="trainer.id">
        <h3 class="text-xl font-semibold text-slate-900">{{ trainer.name }}</h3>
        <p class="mt-2 text-sm text-slate-700">{{ trainer.specialty }}</p>
        <p class="mt-1 text-sm text-cyan-700">證照：{{ trainer.certification }}</p>
        <RouterLink :to="`/trainers/${trainer.id}`" class="mt-4 inline-block">
          <Button variant="secondary">查看檔案</Button>
        </RouterLink>
      </Card>
    </div>
  </section>
</template>

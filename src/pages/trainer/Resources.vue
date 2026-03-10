<script setup>
import Card from '../../components/Card.vue'
import data from '../../data/mockData.json'
</script>

<template>
  <section class="space-y-4">
    <h2 class="text-2xl font-semibold text-slate-900">教練資源</h2>
    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <Card v-for="item in data.resources" :key="item.id">
        <h3 class="text-lg font-semibold text-slate-900">{{ item.name }}</h3>
        <p class="mt-2 text-sm text-cyan-700">{{ item.type }}</p>
      </Card>
    </div>
  </section>
</template>

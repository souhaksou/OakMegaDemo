<script setup>
import Card from '../components/Card.vue'
import Button from '../components/Button.vue'
import data from '../data/mockData.json'
</script>

<template>
  <section>
    <h2 class="mb-4 text-2xl font-semibold text-slate-900">活動專區</h2>
    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <Card v-for="event in data.events" :key="event.id">
        <h3 class="text-lg font-semibold text-slate-900">{{ event.title }}</h3>
        <p class="mt-1 text-sm font-medium text-cyan-700">{{ event.date }}</p>
        <p class="mt-3 text-sm text-slate-600">{{ event.description }}</p>
        <RouterLink :to="`/events/${event.id}`" class="mt-4 inline-block">
          <Button variant="secondary">查看活動</Button>
        </RouterLink>
      </Card>
    </div>
  </section>
</template>

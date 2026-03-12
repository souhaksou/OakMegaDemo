<script setup>
import { reactive } from 'vue'
import FormInput from '../components/FormInput.vue'
import Button from '../components/Button.vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  visitDate: '',
  visitTime: '',
})

const submitForm = () => {
  alert('預約參觀成功（示範）')
}
</script>

<template>
  <section class="max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
    <h2 class="mb-5 text-2xl font-semibold text-slate-900">預約參觀</h2>
    <form class="space-y-4" @submit.prevent="submitForm">
      <FormInput v-model="form.name" label="姓名" placeholder="請輸入姓名" />
      <FormInput v-model="form.email" label="電子郵件" type="email" placeholder="請輸入電子郵件" />
      <FormInput v-model="form.phone" label="電話" placeholder="請輸入電話號碼" />
      <FormInput v-model="form.visitDate" label="參觀日期" type="date" />
      <FormInput v-model="form.visitTime" label="參觀時間" type="time" />
      <Button type="submit">送出</Button>
    </form>
  </section>
</template>

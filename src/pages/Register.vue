<script setup>
import { reactive } from 'vue'
import FormInput from '../components/FormInput.vue'
import Button from '../components/Button.vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  role: '',
})

const submitForm = () => {
  alert('已送出註冊資料（示範）')
}
</script>

<template>
  <section class="max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
    <h2 class="mb-5 text-2xl font-semibold text-slate-900">會員註冊</h2>
    <form class="space-y-4" @submit.prevent="submitForm">
      <FormInput v-model="form.name" label="姓名" placeholder="請輸入會員姓名" />
      <FormInput v-model="form.email" label="電子郵件" type="email" placeholder="請輸入電子郵件" />
      <FormInput v-model="form.phone" label="電話" placeholder="請輸入電話號碼" />
      <FormInput v-model="form.role" label="身份" type="select" :options="['一般會員', 'VIP 會員', '訪客']" />
      <Button type="submit">送出</Button>
    </form>
  </section>
</template>

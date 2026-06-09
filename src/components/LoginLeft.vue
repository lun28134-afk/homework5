<template>
  <div class="login-left">
    <h2>歡迎回來！</h2>
    <p class="subtitle">我們很高興又見到您了！</p>

    <div class="input-group">
      <label>電子郵件或電話號碼 <span class="req">*</span></label>
      <input v-model="email" type="text" required />
    </div>

    <div class="input-group">
      <label>密碼 <span class="req">*</span></label>
      <input v-model="password" type="password" required />
      <a href="#" class="link-text">忘記您的密碼？</a>
    </div>

    <button type="button" class="login-btn" @click="handleLogin">登入</button>
    <p class="footer-text">需要一個帳號？ <a href="#" class="link-text">註冊</a></p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

function handleLogin() {
  if (email.value === '' || password.value === '') {
    alert('請輸入電子郵件與密碼以進行模擬登入。')
  } else {
    alert(
      '🚨 【資安警報：這是一個教學模擬頁面】\n\n' +
        '剛才你點擊了登入，在現實的釣魚網站中，你的帳號與密碼此刻已經被傳送到黑客的資料庫中。\n\n' +
        '💡 防詐小撇步：\n' +
        '1. 永遠檢查網址列是否為官方域名 (discord.com)。\n' +
        '2. 官方絕對不會透過 GitHub Pages 進行登入驗證。'
    )
  }
}
</script>

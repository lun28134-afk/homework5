<template>
  <div>
    <div class="bg-decorations">
      <div class="shape potion"></div>
      <div class="shape coin"></div>
      <div class="shape crystal"></div>
      <div class="shape star" style="top: 15%; left: 25%;">✦</div>
      <div class="shape star" style="top: 75%; left: 15%;">✦</div>
      <div class="shape star" style="top: 30%; right: 20%;">✦</div>
    </div>

    <div class="login-container">
      <form class="login-box" @submit.prevent>
        <LoginLeft />
        <LoginRight />
      </form>
    </div>
  </div>
</template>

<script>
import LoginLeft from './components/LoginLeft.vue'
import LoginRight from './components/LoginRight.vue'
import './assets/style.css'

export default {
  components: { LoginLeft, LoginRight }
}
</script>

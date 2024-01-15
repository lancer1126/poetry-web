<template>
  <div class="background-image">
    <div class="app">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.app {
  width: 80vw;
  height: 80vh;
  text-align: center;
  margin: auto;
  padding: 2rem;
}

.background-image {
  background: url("public/宋-高克明-溪山瑞雪图全卷.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  width: 100%;
}
</style>

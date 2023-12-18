<template>
  <div class="recommend">
    <PoetryCard />
    <PoetryCard />
  </div>
</template>

<script setup lang="ts">
import PoetryCard from "@/components/PoetryCard.vue";
</script>

<style scoped>
.recommend {
  display: flex;
  justify-content: space-evenly;
}
</style>

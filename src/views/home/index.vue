<template>
  <div>
    <SearchBar class="search-bar" />
    <Recommend class="recommend" />
  </div>
</template>

<script setup lang="ts">
import SearchBar from "@/components/SearchBar.vue";
import Recommend from "@/views/recommend/index.vue";
</script>

<style scoped>
.search-bar {
  margin-top: 5%;
}

.recommend {
  margin-top: 10%;
}
</style>

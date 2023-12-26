<template>
  <div>{{ pageResult }}</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { search } from "@/api/poem";

const route = useRoute();
let pageResult = ref<PageItem>();
const searchBody: SearchBody = {
  word: route.query.word as string,
  index: route.query.index as string,
  size: route.query.size as string
};

onMounted(() => {
  search(searchBody).then(respData => {
    pageResult.value = respData as unknown as PageItem;
  });
});
</script>

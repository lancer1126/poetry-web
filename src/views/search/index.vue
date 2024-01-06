<template>
  <div>
    <Waterfall :list="pageItems" :breakpoints="linePoints">
      <template #item="{ item }">
        <div class="card">
          <PoetryCard :poetry="item" width="" />
        </div>
      </template>
    </Waterfall>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { search } from "@/api/poem";
import { Waterfall } from "vue-waterfall-plugin-next";
import PoetryCard from "@/components/PoetryCard.vue";
import "vue-waterfall-plugin-next/dist/style.css";

const route = useRoute();
let pageResult = ref();
let pageItems = ref([]);

const linePoints = ref({
  2048: { rowPerView: 5 },
  1200: { rowPerView: 3 },
  800: { rowPerView: 2 },
  500: { rowPerView: 1 }
});

const searchBody: SearchBody = {
  word: route.query.word as string,
  index: route.query.index as string,
  size: route.query.size as string
};

onMounted(() => {
  search(searchBody).then(respData => {
    pageResult.value = respData;
    pageItems.value = pageResult.value.data.records;
  });
});
</script>

<template>
  <div>
    <el-autocomplete
      v-model="searchState"
      :fetch-suggestions="matchHistory"
      :value-key="valueKey"
      clearable
      placeholder="搜索"
      @select="handleSelect"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

interface SearchItem {
  item: string;
  time: string;
}

// 在下拉框要展示的内容的字段名，在SearchItem中是item字段
const valueKey: string = "item";
const searchState = ref("");
const historyList = ref<SearchItem[]>([]);

const matchHistory = (queryStr: string, cb: any) => {
  const matchItems = queryStr
    ? historyList.value.filter(filterHistory(queryStr))
    : historyList.value;
  console.log(matchItems);
  cb(matchItems);
};

const filterHistory = (queryStr: string) => {
  return (history: SearchItem) => {
    return history.item.toLowerCase().includes(queryStr.toLowerCase());
  };
};

const loadHistory = (): SearchItem[] => {
  // 模拟数据
  return [
    { item: "记录1", time: "" },
    { item: "记录2", time: "" }
  ];
};

const handleSelect = (si: SearchItem) => {
  console.log(si);
};

onMounted(() => {
  historyList.value = loadHistory();
});
</script>

<style scoped></style>

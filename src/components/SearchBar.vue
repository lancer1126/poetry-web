<template>
  <div>
    <el-autocomplete
      v-model="searchState"
      :fetch-suggestions="matchHistory"
      :value-key="valueKey"
      clearable
      placeholder="搜索"
      @select="handleSelect"
      @keydown.enter="handleEnter"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

interface HistoryItem {
  item: string;
  time: string;
}

// 在下拉框要展示的内容的字段名，在SearchItem中是item字段
const valueKey: string = "item";
const searchState = ref("");
const historyList = ref<HistoryItem[]>([]);
const router = useRouter();

const matchHistory = (queryStr: string, cb: any) => {
  const matchItems = queryStr
    ? historyList.value.filter(filterHistory(queryStr))
    : historyList.value;
  cb(matchItems);
};

const filterHistory = (queryStr: string) => {
  return (history: HistoryItem) => {
    return history.item.toLowerCase().includes(queryStr.toLowerCase());
  };
};

const loadHistory = () => {
  historyList.value = [
    { item: "李白", time: "" },
    { item: "杜甫", time: "" }
  ];
};

const handleEnter = () => {
  goSearch(searchState.value);
};

const handleSelect = (hi: HistoryItem) => {
  goSearch(hi.item);
};

const goSearch = (word: string) => {
  router.push({
    path: "/search",
    query: {
      word: word,
      index: 0,
      size: 20
    }
  });
};

onMounted(() => {
  loadHistory();
});
</script>

<style scoped></style>

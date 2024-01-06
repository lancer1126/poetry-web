<template>
  <el-card class="box-card" :style="{ width: cardWidth }" shadow="hover">
    <template #header>
      <div class="card-header">
        <span>{{ poetryItem.poemName }}</span>
        <el-button class="button" text @click.prevent="changeChar">简/繁</el-button>
      </div>
    </template>
    <div class="text">{{ content }}</div>
    <template #footer>
      <span>{{ poetryItem.eraName }} - {{ poetryItem.authorName }}</span>
    </template>
  </el-card>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import type { Ref } from "vue";

interface Props {
  poetry: Poetry;
  width: string;
}
const props = defineProps<Props>();

const cardWidth: Ref<string> = ref("");
const content: Ref<string> = ref("");
const poetryItem: Ref<Poetry> = ref({}) as Ref<Poetry>;
const charType: Ref<PoemCharType> = ref("zh-simplified");

watch(charType, newChar => {
  poetryItem.value.contentWithChar.forEach(e => {
    if (e.charType === newChar) {
      content.value = e.body;
    }
  });
});

const changeChar = () => {
  charType.value = charType.value === "zh-traditional" ? "zh-simplified" : "zh-traditional";
};

const buildCard = () => {
  cardWidth.value = props.width;
  poetryItem.value = props.poetry;
  charType.value = poetryItem.value.originCharType;
  poetryItem.value.contentWithChar.forEach(e => {
    if (e.charType === charType.value) {
      content.value = e.body;
    }
  });
};

onMounted(() => {
  buildCard();
});
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 15px;
  white-space: pre-line;
}

.box-card {
  max-height: 500px;
}
</style>

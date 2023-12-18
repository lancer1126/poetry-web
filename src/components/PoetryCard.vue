<template>
  <el-card class="box-card" shadow="hover">
    <template #header>
      <div class="card-header">
        <span>{{ poetryItem.poemName }}</span>
        <el-button class="button" text @click.prevent="changeChar">简/繁</el-button>
      </div>
    </template>
    <div class="text">{{ poetryItem.content }}</div>
    <template #footer>{{ poetryItem.anthology }}</template>
  </el-card>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import type { Ref } from "vue";

const poetryTrad: Poetry = {
  eraName: "宋",
  authorName: "蘇軾",
  anthology: "宋诗",
  poemName: "催試官考較戲作",
  charType: "zh-trad",
  content:
    "八月十五夜，月色隨處好。\n不擇茅簷與市樓，況我官居似蓬島。\n鳳咮堂前野橘香，劍潭橋畔秋荷老。\n八月十八潮，壯觀天下無。\n" +
    "鯤鵬水擊三千里，組練長驅十萬夫。\n紅旗青蓋互明滅，黑沙白浪相吞屠。\n人生會合古難必，此景此行那兩得。\n願君聞此添蠟燭，門外白袍如立鵠。\n"
};

const poetrySimple: Poetry = {
  eraName: "宋",
  authorName: "苏轼",
  anthology: "宋诗",
  poemName: "催试官考较戏作",
  charType: "zh-simple",
  content:
    "八月十五夜，月色随处好。\n不择茅簷与市楼，况我官居似蓬岛。\n凤珠堂前野橘香，剑潭桥畔秋荷老。\n八月十八潮，壮观天下无。\n" +
    "鯤鹏水击三千里，组练长驱十万夫。\n红旗青盖互明灭，黑沙白浪相吞屠。\n人生会合古难必，此景此行那两得。\n愿君闻此添蜡烛，门外白袍如立鵠。\n"
};

let charType: Ref<PoemCharType> = ref("zh-trad");
let poetryItem: Ref<Poetry> = ref(poetryTrad);

watch(charType, newChar => {
  if (newChar === "zh-simple") {
    poetryItem.value = poetrySimple;
  } else if (newChar === "zh-trad") {
    poetryItem.value = poetryTrad;
  }
});

function changeChar() {
  charType.value = charType.value === "zh-trad" ? "zh-simple" : "zh-trad";
}
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
  width: 480px;
}
</style>

<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{ poetryItem.poemName }}</span>
        <el-button class="button" text>进行操作</el-button>
      </div>
    </template>
    <div class="text">{{ poetryItem.content }}</div>
    <template #footer>这是尾部</template>
  </el-card>
</template>

<script setup lang="ts">
const poetryItem: Poetry = {
  eraName: "宋",
  authorName: "蘇軾",
  athology: "宋诗",
  poemName: "催試官考較戲作",
  content:
    "八月十五夜，月色隨處好。\n不擇茅簷與市樓，況我官居似蓬島。\n鳳咮堂前野橘香，劍潭橋畔秋荷老。\n八月十八潮，壯觀天下無。\n" +
    "鯤鵬水擊三千里，組練長驅十萬夫。\n紅旗青蓋互明滅，黑沙白浪相吞屠。\n人生會合古難必，此景此行那兩得。\n願君聞此添蠟燭，門外白袍如立鵠。\n"
};
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
  white-space: pre-line;
}

.box-card {
  width: 480px;
}
</style>

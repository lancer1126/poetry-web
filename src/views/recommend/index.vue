<template>
  <div class="recommend">
    <PoetryCard :poetry="rec1" width="420px" />
    <PoetryCard :poetry="rec2" width="420px" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Ref } from "vue";
import PoetryCard from "@/components/PoetryCard.vue";
// import { getRecommend } from "@/api/poem";

const rec1: Ref<Poetry> = ref({
  eraName: "宋",
  authorName: "许及之",
  anthology: "宋诗",
  poemName: "輓承事黄公詞",
  originCharType: "zh-traditional",
  contentWithChar: [
    {
      charType: "zh-simplified",
      body: "胶庠衣钵是青毡，付与儿曹自勉旃。\n鼎级科名彰父教，著庭勋绩见家传。\n千钟合使荣三釜，一品终当贵九泉。\n留却无穷风木恨，悲笳呜咽晚春天。\n"
    },
    {
      charType: "zh-traditional",
      body: "膠庠衣鉢是青氈，付與兒曹自勉旃。\n鼎級科名彰父教，著庭勳績見家傳。\n千鍾合使榮三釜，一品終當貴九泉。\n留却無窮風木恨，悲笳嗚咽晚春天。\n"
    }
  ]
});
const rec2: Ref<Poetry> = ref({
  eraName: "唐",
  authorName: "裴璀",
  anthology: "唐诗",
  poemName: "郊廟歌辭 享龍池樂章 第十章",
  originCharType: "zh-traditional",
  contentWithChar: [
    {
      charType: "zh-simplified",
      body: "乾坤启圣吐龙泉，泉水年年胜一年。\n始看鱼跃方成海，即覩龙飞利在天。\n洲渚遥将银汉接，楼台直与紫微连。\n休气荣光常不散，悬知此地是神仙。\n"
    },
    {
      charType: "zh-traditional",
      body: "乾坤啓聖吐龍泉，泉水年年勝一年。\n始看魚躍方成海，即覩龍飛利在天。\n洲渚遙將銀漢接，樓臺直與紫微連。\n休氣榮光常不散，懸知此地是神仙。\n"
    }
  ]
});

onMounted(() => {
  // getRecommend().then(resp => {
  //   rec1.value = resp.data[0];
  //   rec2.value = resp.data[1];
  // });
});
</script>

<style scoped>
.recommend {
  display: flex;
  justify-content: space-evenly;
}
</style>

<!--
 * @Author: MrAlenZhong
 * @Date: 2022-04-08 10:45:08
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-04-08 11:09:09
 * @Description: 
-->
<template>
  <div class="progressBar" :style="getStyle">
    
  </div>
</template>
<script setup>
import { defineProps,computed } from "vue";
let props = defineProps({
  width: {
    type: Number,
    default: 100
  }
})
const getStyle = computed(
  ()=>({ width: props.width + '%' })
)
</script>
<style scoped>
.progressBar{
  position: relative;
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background-image: linear-gradient(to right, #3656f6 0%,#7c2dfb 50%, #c900ff 100%);
  margin:20px 0;
}
</style>
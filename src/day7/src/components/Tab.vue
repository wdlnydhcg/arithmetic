<!--
 * @Author: MrAlenZhong
 * @Date: 2022-04-08 10:27:21
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-04-08 11:08:30
 * @Description: 
-->
<template>
  <div class="wrapper">
    <!-- tab -->
    <ul class="tab-bar-wrap">
      <li class="tab-item">
        第一个
        <span class="tab-item-angle"></span>
      </li>
      <li class="tab-item">
        第二个
        <span class="tab-item-angle"></span>
      </li>
      <li class="tab-item tab-cur">
        第三个
        <span class="tab-item-angle"></span>
      </li>
      <li class="tab-item">
        第四个
        <span class="tab-item-angle"></span>
      </li>
      <li class="tab-item">
        第五个
        <span class="tab-item-angle"></span>
      </li>
    </ul>
    <!-- 内容区域 -->
    <div class="content-main">
      <!-- 内容顶部修饰 -->
      <div class="content-main-top-border"></div>
      <div class="content-main-left-right-border"></div>
      <div class="content-main-wrap">
        <p>这里是内容</p>
        <ProgressBar :width='50'/>
        <ProgressBar :width="30" />
        <ProgressBar :width="80" />

      </div>
    </div>
  </div>
</template>

<script setup>
import ProgressBar from './ProgressBar.vue'
</script>


<style scoped>

p {
  font-size: 28px;
  color: #ffffff;
}
/*主层*/
.wrapper {
  padding: 30px;
} /* tab切换 */
.tab-bar-wrap {
  width: 800px;
  overflow: hidden;
}
.tab-item {
  position: relative;
  float: left;
  margin-right: 10px;
  padding: 10px 10px 20px 15px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top: 2px solid #22222f;
  border-left: 2px solid #22222f;
  border-right: 2px solid #22222f;
  background-color: #22222f;
  color: #94939a;
  cursor: pointer;
  transition: 0.1s;
}
.tab-item-angle {
  position: absolute;
  top: 7px;
  right: -10px;
  display: block;
  width: 12px;
  height: 45px;
  transform: rotate(-20deg);
  border-right: 2px solid #22222f;
  background-color: #22222f;
  transition: 0.1s;
}
.tab-cur {
  z-index: 10;
  border-top: 2px solid #a158e7;
  border-left: 2px solid #a158e7;
  border-right: 2px solid #a158e7;
  color: #a158e7;
}
.tab-cur .tab-item-angle {
  border-right: 2px solid #a158e7;
} /*
内容区域 */
.content-main {
  position: relative;
  top: -10px;
  width: 800px;
  border-top-right-radius: 10px;
} /* 内容区域修饰层 */
.content-main-top-border {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 10px;
  border-top: 2px solid #a158e7;
  border-left: 2px solid #a158e7;
  border-right: 2px solid #a158e7;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #22222f;
} /* 内容区域左右边框渐变处理 */
.content-main-left-right-border {
  position: relative;
  top: 10px;
  width: 100%;
  height: 400px;
  border-left: 2px solid #a158e7;
  border-right: 2px solid #a158e7;
  border-image: -webkit-linear-gradient(#a158e7, #1b1b24) 2% 90%;
  background-color: #22222f;
} /* 内容层主体 */
.content-main-wrap {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 11;
  box-sizing: border-box;
  margin: 2px 2px 0 2px;
  padding: 10px 12px;
  width: 100%;
  border-radius: 10px;
  background-color: #22222f;
}
</style>


<template>
  <div>
    <div class="row" v-for="row in gameRow" :key="row">
      <div v-for="col in gameCol" :key="col">
        <Box :type="map[row - 1][col - 1]"></Box>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore 解决 is not a module.Vetur
import Box from './Box.vue'
import { gameRow, gameCol } from '../game' // 业务逻辑与视图分开

// map 地图
const map = []

// initMap 初始化
for(let i = 0; i < gameRow; i++) {
  const arr = []
    for(let j = 0; j < gameRow; j++) {
        arr.push(0)
    }
  map.push(arr)
}

// 实验map逻辑使得方块变色
map[0][0] = 1
map[0][1] = 1
map[0][2] = 1
map[0][3] = 1

</script>


<style>
.row {
  display: flex;
}

</style>

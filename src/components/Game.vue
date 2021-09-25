
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
import { gameRow, gameCol, startGame } from '../game' // 业务逻辑与视图分开
import { reactive } from 'vue'

// ref => .value
const map = reactive([])

startGame(map)
</script>


<style>
.row {
  display: flex;
}

</style>

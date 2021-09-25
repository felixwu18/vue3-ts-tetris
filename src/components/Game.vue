
<template>
  <div>
    <div class="row" v-for="row in gameRow" :key="row">
      <div v-for="col in gameCol" :key="col">
        <Box></Box>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore 解决 is not a module.Vetur
import Box from './Box.vue'
import { gameRow, gameCol } from '../game' // 业务逻辑与视图分开



</script>


<style>
.row {
  display: flex;
}

</style>

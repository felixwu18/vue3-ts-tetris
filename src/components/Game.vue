
<template>
  <div>
    <div class="row" v-for="row in 10" :key="row">
      <div v-for="col in 10" :key="col">
        <Box></Box>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore 解决 is not a module.Vetur
import Box from './Box.vue'



</script>


<style>
.row {
  display: flex;
}

</style>

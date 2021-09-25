
<template>
  <div>
    <div class="row" v-for="row in 10" :key="row">
      <div v-for="col in 10" :key="col">
        1
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>


<style>
.row {
  display: flex;
}

</style>

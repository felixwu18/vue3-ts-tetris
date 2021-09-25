

<template>
  <div class="box">
    1
  </div>
</template>

<script setup lang="ts">

const color = 'gray'

</script>


<style>
.box {
    width: 20px;
    height: 20px;
    background:  v-bind(color);
    margin: 2px;
}
</style>

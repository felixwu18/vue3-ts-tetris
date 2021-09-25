

<template>
  <div class="box">
    {{ type }}
  </div>
</template>

<script setup lang="ts">

const props = defineProps(["type"])

// 根据不同的类型 展示不同的颜色 设计一个映射 0 1 => 代表两种颜色
const typeToColorMap:any = {
    [0]: 'gray', 
    [1]: 'red'
}

const color = typeToColorMap[props.type]

</script>


<style>
.box {
    width: 20px;
    height: 20px;
    background:  v-bind(color);
    margin: 2px;
}
</style>

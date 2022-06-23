<template>

  <var-space justify="center" >
    <span  v-for="item in list" >
    <span :title="item.en"  class="color" @click="change(item)" :style="item.background">&nbsp;&nbsp;&nbsp;&nbsp;</span>
    </span>
  </var-space>
</template>

<script setup>
  import {list} from "../js/ral";

  const emit = defineEmits(['change'])
  const change = (obj) => emit('change',obj)
</script>

<style scoped>
  .color{
    border-radius: 50%;
    cursor: pointer;
  }

</style>

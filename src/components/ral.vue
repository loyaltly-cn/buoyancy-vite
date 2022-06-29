<template>

  <var-space justify="center" >
    <span  v-for="item in list" >
    <span :title="item.zn"  class="color" @click="change(item)" :style="item.background">&nbsp;&nbsp;&nbsp;&nbsp;</span>
    </span>
  </var-space>
</template>

<script setup>
  import {list} from "../js/ral";
  import {Snackbar} from "@varlet/ui";
  Snackbar.allowMultiple(true)
  const emit = defineEmits(['change'])
  const change = (obj) => {
    Snackbar.success('ok')
    emit('change',obj)
  }
</script>

<style scoped>
  .color{
    border-radius: 50%;
    cursor: pointer;
  }

</style>

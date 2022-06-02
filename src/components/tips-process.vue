<template>
  <div style="width: 100%">
    <var-steps :active="active">
      <var-step>选择材料</var-step>
      <var-step>选择工艺</var-step>
      <var-step>上传文件</var-step>
      <var-step>自动报价</var-step>
    </var-steps>
  </div>

</template>

<script setup>
  import {ref} from "vue";

  const active = ref(0)
</script>

<style scoped>

</style>
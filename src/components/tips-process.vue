<template>
  <div style="width: 100%">
    <var-steps :active="active">
      <var-step>材料密度</var-step>
      <var-step>表面工艺</var-step>
      <var-step>选择颜色</var-step>
      <var-step>上传文件</var-step>
      <var-step>下单</var-step>
    </var-steps>
  </div>

</template>

<script setup>
  import {ref} from "vue";

  const active = ref(-1)
</script>

<style scoped>

</style>

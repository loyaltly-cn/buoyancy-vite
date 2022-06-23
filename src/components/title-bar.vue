<template>
  <var-space style="margin-top: 5%" size="large" :wrap="false">
    <var-button :text="true" type="info" > 3D云打印</var-button>
    <var-button class="hover" :text="true">新手必读</var-button>
    <var-button class="hover" :text="true">成功案例</var-button>
    <var-button class="hover" :text="true">材料指南</var-button>
    <var-button class="hover" :text="true">材料属性一览表</var-button>
    <var-button class="hover" :text="true">保密承诺</var-button>
    <var-button class="hover" :text="true">售后政策</var-button>
    <var-button class="hover" :text="true">激光切割必读</var-button>
    <var-button class="hover" :text="true">STL格式转换</var-button>
  </var-space>
</template>

<script setup>
</script>

<style scoped>
  .hover:hover{
    color: cornflowerblue;
  }
</style>

<template>
  <var-app-bar class="bar" color="#ffffff" text-color="#000000" title-position="center">
    <template #left>
      <var-image fit="none" src="https://rovmaker.oss-cn-shanghai.aliyuncs.com/sfm/logo.png" />
    </template>
    <template #default>
      <var-space size="large">
        <var-button class="hover" :text="true">在线报价</var-button>
        <var-button class="hover" :text="true">行业案例</var-button>
        <var-button class="hover" :text="true">客户说</var-button>
        <var-button class="hover" :text="true">资源</var-button>
        <var-button class="hover" :text="true">优惠</var-button>
        <var-button class="hover" :text="true">解决方案</var-button>
        <var-button class="hover" :text="true">3D工具</var-button>
        <var-button class="hover" :text="true">3D模型库</var-button>
      </var-space>
    </template>
    <template #right>
      <var-space size="large" align="center">
        <var-button class="hover" :text="true">登录</var-button>
        <var-icon class="hover" name="magnify" />
        <var-icon class="hover" name="cart-outline" />
        <var-icon class="hover" name="translate" />
        <var-select :line="false" style="margin-bottom: 20%;width: 80px" v-model="value">
          <var-option label="中文" />
          <var-option label="English" />
        </var-select>
      </var-space>
    </template>
  </var-app-bar>
</template>

<script setup>
  import {ref} from "vue";

  let value = ref('中文')
</script>

<style scoped>
  .bar{
    position: fixed;
    width: 99%;
    z-index:100;
  }
  .hover:hover{
    color: cornflowerblue;
  }


</style>
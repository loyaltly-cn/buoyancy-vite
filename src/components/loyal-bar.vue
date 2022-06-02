<template>
  <var-app-bar color="#ffffff" text-color="#000000" title-position="center">
    <template #left>
      <var-image fit="none" src="https://rovmaker.oss-cn-shanghai.aliyuncs.com/sfm/logo.png" />
    </template>
    <template #default>
      <var-space size="large">
        <var-button :text="true">在线报价</var-button>
        <var-button :text="true">行业案例</var-button>
        <var-button :text="true">客户说</var-button>
        <var-button :text="true">资源</var-button>
        <var-button :text="true">优惠</var-button>
        <var-button :text="true">解决方案</var-button>
        <var-button :text="true">3D工具</var-button>
        <var-button :text="true">3D模型库</var-button>
      </var-space>
    </template>
    <template #right>
      <var-space size="large">
        <var-icon name="magnify" />
        <var-icon name="cart-outline" />
        <span>登录</span>
      </var-space>
    </template>
  </var-app-bar>
</template>

<script setup>

</script>

<style scoped>
  var-app-bar{
    position: fixed;
  }
</style>
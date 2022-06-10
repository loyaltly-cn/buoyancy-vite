<template>
  <var-space class="show">
    <var-icon  name="chevron-down" />
    <select-craft class="main" @selected="select"/>
  </var-space>
  <p>123</p>


</template>

<script setup>

  const select = (data) =>{
    console.log(data)
  }
</script>

<style scoped>
  .main{
    background-color: cornflowerblue;
    width: 0;
    height: 0;
    position: fixed;
  }
  .show:hover .main{
    height: 150px;
    width: 300px;
    opacity: 1;
    transition: height 500ms;
  }

  .main:hover{
    height: 150px;
    width: 300px;
    opacity: 1;
    transition: height 500ms;
  }

  .text{
    color: white;
  }
</style>
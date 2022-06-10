<template>
  <loyal-bar/>

  <var-row style="background-color: #ffffff">
    <var-col style="margin-top: 3%" span="14" offset="5">
      <title-bar/>
    </var-col>
  </var-row>

  <var-row style="margin-top: 1%">
    <var-col span="16" offset="4" >
      <tips-process/>
    </var-col>
  </var-row>

  <var-row style="margin-top: 1%">
    <var-col span="16" offset="4">
      <execution-process @select_material="selected_material" :material_data="state.ep_data"/>
    </var-col>
  </var-row>

  <var-row style="margin-top: 1%">
    <var-col span="16" offset="4">
      <material-example @selected="selected_material"/>
    </var-col>
  </var-row>

  <var-row style="margin-top: 1%">
    <var-col span="5" offset="4">
      <FAQ/>
    </var-col>
    <var-col span="5" offset="1">
      <server-proccess/>
    </var-col>

    <var-col span="4" offset="1">
      <var-image fit="none" height="419px" :src="src"/>
    </var-col>
  </var-row>

 </template>

<script setup>
import {reactive, ref} from "vue";
import {me_list} from "../js/material";

  const srcList = ['https://rovmaker.oss-cn-shanghai.aliyuncs.com/sfm/swipe/os%20x.webp',
                    'https://rovmaker.oss-cn-shanghai.aliyuncs.com/sfm/swipe/kali.jpeg',
                    'https://rovmaker.oss-cn-shanghai.aliyuncs.com/sfm/swipe/ubuntu.webp']

  let src = ref(srcList[0])

  let index = 0
  setInterval(()=>{
    if (index === 3){
      index = 0
    }
    src.value = srcList[index++]
  },2000)

  let currentMaterial = me_list[0]

  const selected_material = (data) =>{
    state.ep_data = data
  }

  let state = reactive({
    ep_data:currentMaterial
  })




</script>

<style scoped>
</style>
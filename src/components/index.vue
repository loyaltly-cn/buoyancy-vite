<template>
  <loyal-bar/>

  <var-row style="background-color: #ffffff;">
    <var-col span="14" offset="5">
      <title-bar/>
    </var-col>
  </var-row>
  <var-row style="margin: 30px auto">
    <var-col span="16" offset="4" >
      <tips-process/>
    </var-col>
  </var-row>

  <var-row style="margin: 30px auto">
    <var-col span="16" offset="4">
      <execution-process  @load_model="load_model"  @select_material="selected_material" :load="state.load" :material_data="state.ep_data"/>
    </var-col>
  </var-row>

  <var-row justify="center" v-if="model_list.length">
    <var-col span="16">
      <order @preview_model="preview_model" :model_list="state.model_list"/>
    </var-col>
  </var-row>

  <div v-if="!model_list.length">
    <var-row style="margin: 30px auto">
      <var-col span="16" offset="4">
        <material-example @selected="selected_material"/>
      </var-col>
    </var-row>

    <var-row style="margin: 30px auto">
      <var-col span="5" offset="4">
        <FAQ/>
        &nbsp;&nbsp;&nbsp;&nbsp;
      </var-col>
      <var-col span="6" >
        <server-proccess/>
        &nbsp;&nbsp;&nbsp;&nbsp;
      </var-col>
      <var-col span="5">
        <var-image fit="none" height="419px" :src="src"/>
      </var-col>
    </var-row>

  </div>

  <var-popup v-model:show="show">
    <template #default>
      <iframe :src="url" width="1000px" height="800px" scrolling="no"/>
    </template>
  </var-popup>
 </template>

<script setup>
import {reactive, ref} from "vue";
import {me_list} from "../js/material";

  const srcList = ['https://rovmaker.oss-cn-shanghai.aliyuncs.com/sfm/swipe/os%20x.webp',
                    'https://rovmaker.oss-cn-shanghai.aliyuncs.com/sfm/swipe/kali.jpeg',
                    'https://rovmaker.oss-cn-shanghai.aliyuncs.com/sfm/swipe/ubuntu.webp']

  let src = ref(srcList[0])
  let index = 0
  let url = ref('')
  let show = ref(false)
  let currentMaterial = me_list[0]
  let model_list = ref([])
  let state = reactive({
    ep_data:currentMaterial,
    model_list:model_list
  })

  setInterval(()=>{
    if (index === 3){
      index = 0
    }
    src.value = srcList[index++]
  },2000)


  const selected_material = (data) => state.ep_data = data

  const load_model = (obj) =>{
    obj.material = state.ep_data
    model_list.value.push(obj)
  }

  const preview_model = (obj) =>{
    url.value = obj
    show.value = true
  }

</script>

<style scoped>
</style>

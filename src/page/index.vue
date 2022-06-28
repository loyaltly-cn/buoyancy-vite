<template>
  <loyal-bar/>
  <var-row style="background-color: #ffffff;" justify="center">
    <var-col span="16" >
      <title-bar/>
    </var-col>
  </var-row>
  <var-row style="margin: 30px auto" justify="center">
    <var-col span="16">
      <tips-process/>
    </var-col>
  </var-row>

  <var-row style="margin: 30px auto" justify="center">
    <var-col span="16"
             :lg="{span:10}"
             :md="{span:5}"
    >
      <execution-process  @load_model="load_model"  @select_material="selected_material" :load="state.load" :material_data="state.example"/>
    </var-col>
  </var-row>

  <var-row justify="center" v-if="model_list.length">
    <var-col span="16">
      <shopping @over="over()" @preview_model="preview_model" :model_list="state.model_list"/>
    </var-col>
  </var-row>

  <div v-if="!model_list.length">
    <var-row style="margin: 30px auto" justify="center">
      <var-col span="16" >
        <material-example @selected="selected_material"/>
      </var-col>
    </var-row>

    <var-row style="margin: 30px auto" justify="center">
      <var-col span="5" >
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

  <div class="side">
    <side-msg />
  </div>

<!--  <span @click="test()">dsf</span>-->
 </template>

<script setup>
import {reactive, ref} from "vue";
import {example} from "../js/material";
import {Snackbar} from "@varlet/ui";

  const srcList = ['os%20x.webp', 'kali.jpeg', 'ubuntu.webp']
  const swipe_url = 'https://rovmaker.oss-cn-shanghai.aliyuncs.com/sfm/swipe/'
  let src = ref(swipe_url+srcList[0])
  let url = ref()
  let show = ref(false)
  let model_list = ref([])
  let currentMaterial = example[0]
  let index = 0
  let state = reactive({
    example:currentMaterial,
    model_list:model_list.value
  })

  setInterval(() => src.value = swipe_url+srcList[index?index--:index=2],2000)

  const selected_material = data => {
    console.log(data)
    state.example = data
  }

  const load_model = (obj) =>{
    obj.material = state.example.name
    model_list.value.push(obj)
  }

  const preview_model = (obj) =>{
    url.value = obj
    show.value = true
  }

  const over = () => {
    model_list.value = []
    Snackbar.success('请等待我们与您联系')
  }

  const test = () =>{
    Snackbar()
  }

</script>

<style scoped>
  .side{
    position: fixed;
    right: 1%;
    top: 25%;
    z-index: 100;
  }
</style>

<template>
  <div style="width: 100%">
    <var-card>
      <template #title>
        <var-tabs @click="change()" v-model:active="active" elevation>
          <var-tab v-for="item in tabsList">
            <span>{{ item.name }}</span>
          </var-tab>
          <var-space align="center">
            <var-chip @click="random()" type="info" plain >换一批</var-chip>
          </var-space>
        </var-tabs>
      </template>
      <template #description>
        <var-row style="margin-top: 2%;margin-left: 2%" >
          <var-col offset="1" span="6" >
            <material-display-struct v-if="state.data[pageIndex]" @selected="selected" :data="state.data[pageIndex]"></material-display-struct>
          </var-col>
          <var-col offset="2" span="6">
            <material-display-struct v-if="state.data[pageIndex+1]" @selected="selected" :data="state.data[pageIndex+1]" ></material-display-struct>
          </var-col>
          <var-col offset="2" span="6">
            <material-display-struct v-if="state.data[pageIndex+2]" @selected="selected" :data="state.data[pageIndex+2]"></material-display-struct>
          </var-col>
          <var-col span="1"></var-col>
        </var-row>
      </template>
    </var-card>
  </div>
</template>

<script setup>
import {example_bar, example} from "../js/material";
  import {reactive, ref} from "vue";

  const active = ref(0)
  let pageIndex = 0
  let currentList = example.slice(0,3)

  const tabsList = example_bar

  let state = reactive({
    data:currentList
  })

  const change = () =>{
    let tmp = []
    example_bar[active.value].materialList.forEach((data)=>{
      tmp.push(example[data])
    })

    state.data = tmp
  }

  const emit = defineEmits(['selected'])

  const selected = (data) => emit('selected',data)

  const random = () =>{

  }

</script>

<style scoped>

</style>

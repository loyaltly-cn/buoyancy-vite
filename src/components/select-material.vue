<template>
  <var-card>
    <template #title>
      <var-tabs @change="change_bar" v-model:active="active" elevation>
        <var-tab v-for="item in bar">
          <span>{{item.name}}</span>
        </var-tab>
      </var-tabs>
    </template>
    <template #description>
      <var-space align="center" justify="center">
        <var-icon @click="paging(--pageIndex)" class="icon" size="50" name="chevron-left" />
        <var-space v-for="item in list" style="margin-top: 25%">
          <var-space direction="column" align="end">
            <var-space direction="column" align="center" style="width: 100px;height: 150px">
              <var-image style="height:50px;width: 80px" :src="ep_list[item].url" />
              <span style="font-size: 1px">{{ep_list[item].name}}</span>
              <var-space>
                <span style="color: red">{{ep_list[item].price}}$/g</span >
                <var-icon @click="selected(ep_list[item])" class="icon" name="check-circle-outline" />
              </var-space>
            </var-space>
          </var-space>
        </var-space>
        <var-icon @click="paging(++pageIndex)" class="icon" size="50" name="chevron-right" />
      </var-space>
      <var-space justify="center" align="center">
        <span class="icon" v-for="(item,index) in icon_bottom_list">
          <var-space @click="paging(index)" direction="column" align="center" size="mini">
            <var-icon size="15" :name="item" />
            <span style="font-size: 1px">{{index+1}}</span>
          </var-space>
        </span>
      </var-space>
    </template>
  </var-card>
</template>

<script setup>
import {ep_bar, ep_list} from "../js/material";
import {ref} from "vue";

  const bar = ep_bar
  let active = ref(0)
  let list = ref(ep_bar[0].materialList.slice(0,4))
  let icon_bottom_list = ref([])
  let length = Math.ceil(ep_bar[0].materialList.length/4)
  let pageIndex = ref(0)

  icon_bottom_list.value.push('radio-marked')

  if (length !== 1){
    for (let i = 1;i<length;i++){
      icon_bottom_list.value.push('radio-blank')
    }
  }


  const calculate = () =>{
    let len = Math.ceil(ep_bar[active.value].materialList.length/4)
    icon_bottom_list.value = []
    icon_bottom_list.value.push('radio-marked')
    if (len !== 1){
      for (let i = 1;i<len;i++){
        icon_bottom_list.value.push('radio-blank')
      }
    }
  }
  const change_bar = () =>{
    list.value = ep_bar[active.value].materialList.slice(0,4)
    length = Math.ceil(ep_bar[active.value].materialList.length/4)
    calculate()
  }

  const paging = (number) =>{
    pag_conditions(number)
    let index = pag_data_conditions().valueOf()
    if (index.end){
      list.value = ep_bar[active.value].materialList.slice(index.home,index.end)
    }else {
      list.value = ep_bar[active.value].materialList.slice(index.home)
    }

    let index_of = icon_bottom_list.value.indexOf('radio-marked')
    icon_bottom_list.value[index_of] = 'radio-blank'
    icon_bottom_list.value[pageIndex.value] = 'radio-marked'
  }

  const pag_data_conditions = () =>{
    if (pageIndex.value === 0){
      return {home:0,end:4}
    }
    let pag_length = pageIndex.value*4
    let data_length = ep_bar[active.value].materialList.length
    if (pag_length+4 > data_length){
      return {home:pag_length,end:false}
    }
    return {home:pag_length,end:pag_length+4}
  }

  const pag_conditions = (number) =>{
    if (number < 0){
      pageIndex.value = icon_bottom_list.value.length-1
    }else if (number > icon_bottom_list.value.length-1){
      pageIndex.value = 0
    }else {
      pageIndex.value = number
    }
  }

  const emit = defineEmits(['selected'])
  const selected = (data) => emit('selected',data)
</script>

<style scoped>
  .icon:hover{
    color: cornflowerblue;
  }
</style>

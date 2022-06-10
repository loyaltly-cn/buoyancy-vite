<template>
  <var-space direction="column" justify="center" >
    <var-space justify="space-between">
      <var-space direction="column">
        <span>{{ props.data.name }}</span>
        <span style="color: red">{{ props.data.price }}$/g</span>
      </var-space>
      <var-space @click="selected()">
        <var-chip type="info" :plain="true">
          <var-button :text="true" type="info" > 选择该材料</var-button>
          <template #left>
            <var-icon name="checkbox-marked-circle-outline" />
          </template>
        </var-chip>
      </var-space>
    </var-space>
    <var-divider/>

    <var-space :wrap="false">
      <var-image style="zoom: 35%" :src="props.data.url" />
      <var-space direction="column">
        <spa>工作温度:{{props.data.temperature_range}}℃</spa>
        <span>尺寸精度:{{ props.data.size_precision }}mm</span>
        <span>发货周期:{{props.data.cycle}}个工作日</span>
      </var-space>
    </var-space>

    <var-space>
      <var-chip type="info" v-for="(item,index) in props.data.label">
        <span> {{barList[item].name}} </span>
      </var-chip>
    </var-space>

    <var-space direction="column" size="mini">
      <p> <span style="color: #67757b">表面质感:</span> <span style="color: #939393">{{props.data.texture}}</span></p>
      <p> <span style="color: #67757b">设备尺寸:</span> <span style="color: #939393">{{props.data.device_size}}</span></p>
      <p> <span style="color: #67757b">材料特点:</span> <span style="color: #939393">{{props.data.trait}}</span></p>
    </var-space>
  </var-space>

</template>

<script setup>
import {me_bar} from "../js/material";
  import {defineEmits} from "vue";

  const barList = me_bar

  const props = defineProps({
    data:{
      type:Object
    }
  })

  const emit = defineEmits(['selected'])
  const selected = ()=>{
    emit('selected',props.data)
  }
</script>

<style scoped>

</style>
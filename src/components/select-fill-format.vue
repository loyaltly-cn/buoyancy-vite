<template>
  <var-card>
    <template #description>
      <var-space direction="column" justify="center" align="center">
        <span>3D打印填充</span>
        <span style="font-size: 1px;color: red;font-style: italic">不适用于CNC或激光切割</span>
        <var-space justify="space-around">
          <var-space @click="selected(item)" class="hover" direction="column"  v-for="item in list">
            <var-icon :name="item.url"/>
            <span style="font-size: 1px">{{item.name}}</span>
          </var-space>
        </var-space>
        <var-button class="hover" :text="true">什么是3D打印填充?</var-button>
      </var-space>
    </template>
  </var-card>
</template>

<script setup>
  import {fill_format} from "../js/material";

  const list = fill_format

  const emit = defineEmits(['selected'])
  const selected = (data) => emit('selected',data)
</script>

<style scoped>
  .hover:hover{
    color: cornflowerblue;
  }
</style>

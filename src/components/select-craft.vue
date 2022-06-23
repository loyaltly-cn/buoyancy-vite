<template>
  <var-card>
    <template #description>
      <var-space justify="center" align="center" direction="column">
        <span>工艺选择</span>
        <var-space>
          <var-space v-for="item in list">
            <var-space @click="selected(item)" direction="column" align="center">
              <var-image style="width: 68px; height: 68px" :src="item.url" />
              <span class="hover">{{item.name}}</span>
            </var-space>
          </var-space>
        </var-space>
      </var-space>
    </template>
  </var-card>
</template>

<script setup>
  import {craft} from "../js/material";
  import {ref} from "vue";

  const list = ref(craft)

  const emit = defineEmits(['selected'])
  const selected = (data) => emit('selected',data)

</script>

<style scoped>
  .hover{
    font-size: 1px;
  }
  .hover:hover{
    color: cornflowerblue;
  }
</style>

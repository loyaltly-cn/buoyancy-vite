<template>
  <model-viewer camera-controls interaction-prompt="none"
                :src="url"
                id="color"
                style="width: 200px;height: 150px"/>
</template>

<script setup>
  let props = defineProps({
    url:{
      type:String
    }
  })
</script>

<style scoped>

</style>

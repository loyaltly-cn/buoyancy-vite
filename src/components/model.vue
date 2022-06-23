<template>
  <var-space direction="column" justify="center" align="center">
    <model-viewer camera-controls interaction-prompt="none"
                  :src="url"
                  id="color"

                  style="width: 1000px;height: 700px"/>
        <ral @change="change" />
  </var-space>
</template>

<script setup>
  import {ref} from "vue";
  let url = ref('')
  let color = ref(null)

  const href = window.location.href
  let index = href.lastIndexOf('?')

  url.value = href.substring(++index)
  url.value = 'https://rovmaker.oss-cn-shanghai.aliyuncs.com/sfm/glb/'+url.value
  // url.value = 'https://rovmaker.oss-cn-shanghai.aliyuncs.com/sfm/glb/1655460301.glb'

  const change = (value) =>{
    let color = value.color.split(',').map(numberString => parseFloat(numberString))
    let convertColor = []
    color.forEach((data) =>{
      convertColor.push(data/255 .toFixed(2))
    })
    const modelViewerColor = document.querySelector('#color')
    const [material] = modelViewerColor.model.materials
    material.pbrMetallicRoughness.setBaseColorFactor(convertColor)
  }

</script>

<style scoped>

</style>

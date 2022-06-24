<template>
  <var-app-bar color="#ffffff" text-color="#000000" title-position="center">
    <template #default>
      <var-space>
        <span>名字:{{name}}</span>
        <span>手机号:{{phone}}</span>
        <span>邮箱:{{email}}</span>
      </var-space>
    </template>
    <template #left>
      <var-image fit="none" src="https://rovmaker.oss-cn-shanghai.aliyuncs.com/sfm/logo.png" />
    </template>
  </var-app-bar>

  {{json}}
</template>

<script setup>
  import axios from "axios";
  import {ref} from "vue";
  const href = window.location.href
  let index = href.lastIndexOf('?')
  const timeStamp = href.substring(++index)
  let req = new URLSearchParams()
  let name = ref()
  let phone = ref()
  let json = ref()
  let email = ref()
  let url = ref()
  req.append('timeStamp',timeStamp)
  axios({
    url:'https://rovmaker.loyaltly.cn/sfmApi/DPQM',
    method:'post',
    data:req,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  }).then(res =>{
    name.value = res.data[0].name
    phone.value = res.data[0].phone
    email.value = res.data[0].email
    url.value = res.data[0].url
    json.value = JSON.parse(res.data[0].json)[0]
  })

</script>

<style scoped>

</style>

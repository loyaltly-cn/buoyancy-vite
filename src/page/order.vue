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

  <var-table>
    <thead>
    <tr>
      <th>
        <var-space align="center">
          <span>3D文件展示</span>
          <var-icon name="https://rovmaker.oss-cn-shanghai.aliyuncs.com/sfm/icon/model.svg"/>
        </var-space>
      </th>
      <th>
        <var-space>
          <span>产品信息</span>
          <var-icon class="icon" title="点击修改" name="https://rovmaker.oss-cn-shanghai.aliyuncs.com/sfm/icon/info.svg"/>
        </var-space>
      </th>
      <th>
        <var-space>
          <span>备注</span>
          <var-icon name="https://rovmaker.oss-cn-shanghai.aliyuncs.com/sfm/icon/note.svg"/>
        </var-space>
      </th>
      <th>
        <var-space>
          <span>交货周期</span>
          <var-icon name="https://rovmaker.oss-cn-shanghai.aliyuncs.com/sfm/icon/cycle.svg"/>
        </var-space>
      </th>
      <th>
        <var-space>
          <span>数量</span>
          <var-icon name="https://rovmaker.oss-cn-shanghai.aliyuncs.com/sfm/icon/number.svg"/>
        </var-space>
      </th>
      <th>
        <var-space>
          <span>操作</span>
          <var-icon name="https://rovmaker.oss-cn-shanghai.aliyuncs.com/sfm/icon/operate.svg"/>
        </var-space>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(item,i) in json">
      <td><var-image title="点击预览" style="cursor: pointer;"  width="200px" :alt="item.url" src="https://varlet-varletjs.vercel.app/cat.jpg" /></td>
      <td>
        <var-space direction="column" >
          <span >name &nbsp; {{item.name}}</span>
          <var-space>
            <span>RAL色卡</span>
            <span>{{item.code}}</span>
          </var-space>

          <var-select :line="false" placeholder="请选择材料密度" disabled v-model="item.material">
            <var-option label="500 耐压" />
            <var-option label="600 << 2000" />
          </var-select>

          <var-select :line="false" placeholder="请选择工艺" disabled v-model="item.craft">
            <var-option label="聚尿喷涂" />
            <var-option label="油漆" />
          </var-select>

        </var-space>
      </td>
      <td><var-input placeholder="请输入备注" disabled :line="false" :textarea="true" v-model="item.note" /></td>
      <td><span>1 ~ 2 个月</span></td>
      <td><var-counter disabled v-model="item.number"/></td>
      <td><var-icon title="下载源文件" @click="download(item.url)" size="30" class="hover" name="download" /></td>
    </tr>
    </tbody>
  </var-table>
</template>

<script setup>
  import axios from "axios";
  import {ref} from "vue";
  const href = window.location.href
  let index = href.lastIndexOf('?')
  const timeStamp = href.substring(++index)
  let req = new URLSearchParams()

  let [name,phone,email,url,json] = [ref(),ref(),ref(),ref(),ref([])]
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
    json.value = JSON.parse(res.data[0].json)
  })

  const download = url =>{
    console.log(url)
  }
</script>

<style scoped>
  .hover:hover{
    color: cornflowerblue;
  }
</style>

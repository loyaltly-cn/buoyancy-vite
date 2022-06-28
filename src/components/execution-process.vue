<template>

  <div style="width: 100%">
    <var-card>
      <template #description>
        <var-row>
          <var-col offset="0" span="24">
            <var-space style="margin-top: 3%;width: 100%"  size="large" justify="center" :wrap="false">

              <var-space class="material_hover" style="border: 1px solid #afaeae;height: 90px;width: 300px" justify="space-around" align="center">
                <var-image style="height: 100%;width: 120px" :src="props.material_data.url" />
                <var-space direction="column">
                  <span>{{ props.material_data.name }}</span>
                  <span style="color: red">{{props.material_data.price}}$/g</span>
                </var-space >
                <var-space>
                  <var-icon name="chevron-down" />
                  <select-material @selected="select_material" class="select_material" />
                </var-space>
              </var-space>
              <var-space class="craft_hover" style="border: 1px solid #afaeae;height: 90px;width: 200px" justify="space-around" align="center" >
                <var-image :src="craft_data.url" />
                <span>{{ craft_data.name }}</span>
                <var-space>
                  <var-icon name="chevron-down" />
                  <select-craft @selected="select_craft" class="select_craft" />
                </var-space>
              </var-space>
              <var-space class="fill_format_hover" style="border: 1px solid #afaeae;height: 90px;width: 150px" justify="center" align="center">
                <var-space direction="column">
                  <div :title="color.en" class="color" :style="color.background">&nbsp;</div>
                  <var-icon  name="chevron-down" />
                </var-space>
                <var-space>
                  <var-card  class="ral">
                    <template #description>
                      <ral @change="select_color" style="margin: 10px 10px" />
                    </template>
                  </var-card>
                </var-space>
              </var-space>
              <var-space>
                <var-uploader accept="*" @after-read="upload_finish" :hide-list="true" v-model="file">
                  <template #default>
                    <var-button type="info" style="height: 86px"  :loading="load" >
                      <var-space align="center" :wrap="false">
                        <var-icon name="https://rovmaker.oss-cn-shanghai.aliyuncs.com/sfm/icon/upload.svg" size="70" />
                        <h1>上传3D文件</h1>
                      </var-space>
                    </var-button>
                  </template>
                </var-uploader>
              </var-space>
              <var-space direction="column">
                <var-image style="zoom: 10%" src="https://rovmaker.oss-cn-shanghai.aliyuncs.com/sfm/img/qc.png" />
                <p>微信下单</p>
              </var-space>

              <var-space direction="column">
                <var-button type="default">
                  <var-space align="center" :wrap="false">
                    <var-icon name="information-outline" />
                    <p>文件要求</p>
                  </var-space>
                </var-button>

                <var-button type="default">
                  <var-space align="center">
                    <var-icon name="file-document-outline" />
                    <p>使用指南</p>
                  </var-space>
                </var-button>

              </var-space>
            </var-space>
          </var-col>
        </var-row>
        <var-row>
        </var-row>
        <var-row>
          <var-space direction="column" style="width: 100%" size="mini">
            <var-divider dashed />
            <var-space justify="center" size="large">
              <var-button :text="true"> <var-icon name="https://rovmaker.oss-cn-shanghai.aliyuncs.com/sfm/icon/customer_service.svg" /> <span>需要建模?立即咨询</span></var-button>
              <var-button :text="true"> <var-icon name="radio-blank" /> <span>3D扫描399$/件</span></var-button>
              <var-button :text="true"> <var-icon name="https://rovmaker.oss-cn-shanghai.aliyuncs.com/sfm/icon/history.svg" /> <span>历史上传</span></var-button>
            </var-space>
          </var-space>
        </var-row>
      </template>

    </var-card>
  </div>

</template>

<script setup>

import {ref} from "vue";
import {craft} from "../js/material";
import axios from "axios";

  const props = defineProps({
    material_data:{
      type:Object,
    }
  })

  const emit = defineEmits(['select_material','load_model'])

  const craft_data = ref(craft[0])
  const color = ref({
    code:'1000',
    color:'190,189,127,1',
    background:'background:#BEBD7F;',
    zn:'米绿色',
    en:'Green beige'
  })
  const site = 'https://rovmaker.loyaltly.cn/sfm/#/preview?'
  // const site = 'http://192.168.31.111:3000/#/preview?'
  let url = ref('')
  let load = ref(false)
  let file = ref([])

  const select_material = (data) => emit('select_material',data)

  const select_craft = (data) => craft_data.value = data

  const select_color = (data) => color.value = data

  const upload_finish = async (file) =>{
    load.value = true
    let formData = new FormData()
    formData.append('data',file.file)

    let res = await axios({
      url:'https://rovmaker.loyaltly.cn/flask/upload',
      method:'post',
      data:formData,
      headers: { 'Content-Type': 'multipart/form-data;charset=UTF-8' }
    })

    url.value = site+res.data
    emit('load_model',{
      name:file.name,
      url:url.value,
      craft:craft_data.value.name,
      color:color.value,
      material:props.material_data.name
    })
    load.value = false
  }
</script>

<style scoped>
  .select_material{
    width: 0;
    height: 0;
    opacity: 0;
    position: fixed;
    z-index:100;
    top: 32%;
    left: 18%;
  }
  .material_hover:hover .select_material{
    height: 300px;
    width: 600px;
    opacity: 1;
    transition: height 1s;
  }

  .select_material:hover{
    height: 300px;
    width: 600px;
    opacity: 1;
  }


  .select_craft{
    width: 0;
    height: 0;
    opacity: 0;
    position: fixed;
    z-index:100;
    top: 32%;
    left: 35%;
  }
  .craft_hover:hover .select_craft{
    height: 150px;
    width: 300px;
    opacity: 1;
    transition: height 1s;
  }

  .select_craft:hover{
    height: 150px;
    width: 300px;
    opacity: 1;
  }


  .ral{
    width: 0;
    height: 0;
    opacity: 0;
    position: fixed;
    z-index:100;
    top: 32%;
    left: 17%;
  }
  .fill_format_hover:hover .ral{
    opacity: 1;
    width: 66%;
    height: 500px;
    transition: height 1s;
  }

  .ral:hover{
    width: 100%;
    height: 500px;
    opacity: 1;
  }

  .color{
    width: 20px;
    border-radius: 50%;
    cursor: pointer;
  }
</style>

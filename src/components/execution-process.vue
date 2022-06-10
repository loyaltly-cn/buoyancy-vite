<template>
  <div style="width: 100%">
    <var-card>

      <template #description>
        <var-row>
          <var-col offset="0" span="24">
            <var-space style="margin-top: 3%;width: 100%"  size="large" justify="center">

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
              <var-space class="fill_format_hover" style="border: 1px solid #afaeae;height: 90px;width: 160px" justify="space-around" align="center">
                <var-icon size="50" :name="fill_format_data.url"/>
                <span>{{fill_format_data.name}}</span>
                <var-space>
                  <var-icon  name="chevron-down" />
                  <select-fill-format @selected="select_fill_format" class="select_fill_format" />
                </var-space>
              </var-space>
              <var-space>
                <var-button type="info" style="height: 100%" :outline="true" >
                  <var-space align="center">
                    <var-icon name="https://rovmaker.oss-cn-shanghai.aliyuncs.com/sfm/icon/upload.svg" size="70" />
                    <h1>上传3D文件</h1>
                  </var-space>
                </var-button>
              </var-space>
              <var-space direction="column">
                <var-image style="zoom: 10%" src="https://rovmaker.oss-cn-shanghai.aliyuncs.com/sfm/img/qc.png" />
                <p>微信下单</p>
              </var-space>

              <var-space direction="column">
                <var-button type="default">
                  <var-space align="center">
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
          <var-space direction="column" style="width: 100%" size="mini">
            <var-divider dashed />
            <var-space justify="center" size="large">
              <var-button :text="true"> <var-icon name="radio-blank" /> <span>支持多文件上传</span></var-button>
              <var-button :text="true"> <var-icon name="radio-blank" /> <span>支持拖拽上传</span></var-button>
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
  import {craft, fill_format} from "../js/material";

  const props = defineProps({
    material_data:{
      type:Object,
    }
  })

  const craft_data = ref(craft[0])
  const fill_format_data = ref(fill_format[0])

  const emit = defineEmits(['select_material'])

  const select_material = (data) =>{
    emit('select_material',data)
  }

  const select_craft = (data) =>{
    craft_data.value = data
  }

  const select_fill_format = (data) =>{
    fill_format_data.value = data
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


  .select_fill_format{
    width: 200px;
    height: 0;
    opacity: 0;
    position: fixed;
    z-index:100;
    top: 32%;
    left: 46%;
  }
  .fill_format_hover:hover .select_fill_format{
    height: 160px;
    opacity: 1;
    transition: height 1s;
  }

  .select_fill_format:hover{
    height: 160px;
    opacity: 1;
  }
</style>
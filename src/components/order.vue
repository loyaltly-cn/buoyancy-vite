<template>

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
    <tr v-for="(item,i) in model_list">
      <td><var-image title="点击预览" style="cursor: pointer;" @click="preview_model(item.url)" width="200px" :alt="item.url" src="https://varlet-varletjs.vercel.app/cat.jpg" /></td>
      <td>
        <var-space direction="column" >

          <var-space>
            <span>name</span>
            <span>{{item.name}}</span>
          </var-space>

          <var-space>
            <span>color</span>
            <!--            {{item}}-->
            <div :title="item.color.en" @click="show = true; index = i" :style="item.color.background" class="color-piece">&nbsp</div>
          </var-space>

          <var-select :line="false" placeholder="请选择材料密度"  v-model="item.material_name">
            <var-option label="500耐压" />
            <var-option label="600 << 2000" />
          </var-select>

          <var-select :line="false" placeholder="请选择工艺" v-model="item.craft_name">
            <var-option label="聚尿喷涂" />
            <var-option label="油漆" />
          </var-select>

        </var-space>
      </td>
      <td><var-input placeholder="请输入备注" :line="false" :textarea="true" v-model="item.note" /></td>
      <td><span>1 ~ 2 个月</span></td>
      <td><var-counter v-model="item.number"/></td>
      <td><var-icon @click="remove_order(i)" title="删除" class="del_icon" size="30" name="close-circle-outline" /></td>
    </tr>
    <tr>
      <td></td><td></td><td></td><td></td><td></td>
      <td><var-button @click="commit = true" type="info">next</var-button></td>
    </tr>
    </tbody>
  </var-table>

  <var-popup position="center" v-model:show="show" style="width: 500px;height: 300px;">
    <ral style="margin: 10px 10px" @change="change" />
  </var-popup>

  <var-popup position="center" v-model:show="commit" style="width: 500px;height: 300px;">
    <var-space direction="column"  style="margin: 30px 30px" align="center">
      <var-input  placeholder="name" v-model="name">
        <template #prepend-icon>
          <var-icon name="account-circle-outline" />
        </template>
      </var-input>

      <var-input  placeholder="email" v-model="email">
        <template #prepend-icon>
          <var-icon name="https://rovmaker.oss-cn-shanghai.aliyuncs.com/sfm/icon/email.svg" />
        </template>
      </var-input>

      <var-input  placeholder="phone" v-model="phone">
        <template #prepend-icon>
          <var-icon name="phone-outline" />
        </template>
      </var-input>

      <var-button @click="submit" type="info">提交</var-button>
    </var-space>
  </var-popup>

</template>

<script setup>
  import {ref} from "vue";
  import {list} from "../js/ral";
  import {Email} from "../js/smtp";
  import {Snackbar} from "@varlet/ui";


  let show = ref(false)
  let index = ref(0)
  let currentColor = ref(list[0])
  let name = ref(null)
  let email = ref(null)
  let phone = ref(null)
  // const regular = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
  const props = defineProps({
    model_list:{
      type:Object
    }
  })
  const emit = defineEmits(['preview_model'])
  let model_list = ref(props.model_list)
  let commit = ref(false)

  // for (let i =0;i<props.model_list.valueOf().length;i++){
    // console.log(props.model_list.valueOf()[i].material.name)
    // model_list.value[i].material_name = props.model_list.valueOf()[i].material.name
    // model_list.value[i].craft.name = props.model_list.valueOf()[i].craft.name
  // }

  const change = (obj) => model_list.value.valueOf()[index.value].color = obj


  const preview_model = (obj) => emit('preview_model',obj)

  const submit = () => {
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "loyaltly.cn@gmail.com",
      Password : "9A464BB5FF70F00C31FC127936826B62A27F",
      // To : 'jimmy@rovmaker.org',
      To : '1464808104@qq.com',
      From : "loyaltly.cn@gmail.com",
      Subject : "固体浮材在线下单",
      Body : '客户邮箱:'+email.value+'  电话'+phone.value+' 称呼:'+name.value+'订单号'
    }).then(()=>{
          commit.value = false
          Snackbar.success('ok')
        })
  }

  const remove_order = (index) => console.log(model_list.value.valueOf().splice(index,1))

</script>

<style scoped>
  .color-piece{
    background: cornflowerblue;
    border-radius: 50%;
    cursor: pointer;
    width: 20px;
  }

  .del_icon:hover{
    color: red;
  }

  .icon:hover{
    color: cornflowerblue;
    cursor: pointer;
  }

</style>

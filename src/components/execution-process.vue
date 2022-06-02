<template>
  <div style="width: 100%">
    <var-card>

      <template #description>
        <var-space >
          <div style="width: 30%">
            <var-space>
              <var-image fit="none" src="http://pic.mohou.com/service_upload/3_new.jpg" />
              <var-space>
                <span>进口光敏树脂</span>
                <span>1.20$/g</span>
              </var-space>
              <var-icon name="chevron-down" />
            </var-space>
          </div>


        </var-space>
      </template>


      <template #extra>
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
      </template>
    </var-card>
  </div>

</template>

<script setup>

</script>

<style scoped>

</style>
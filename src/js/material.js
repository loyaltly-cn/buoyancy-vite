export const ep_bar= [
    {
        name:'全部',
        materialList:[0,1,0]
    },
    {
        name:'特价',
        materialList:[0]
    },
    {
        name:'树脂',
        materialList:[1]
    },
    {
        name:'塑料',
        materialList:[1]
    },
    {
        name:'软胶/蜡',
        materialList:[1]
    },
    {
        name:'金属',
        materialList:[1]
    },
    {
        name:'CNC',
        materialList:[1]
    },
    {
        name:'激光切割',
        materialList:[1]
    },

]

export  const me_bar = [
    {
        name:'推荐材料',
        materialList:[0,1,1]
    },
    {
        name:'FDM',
        materialList:[0,1,1]
    },
    {
        name:'SLA',
        materialList:[0,1,1]
    },
    {
        name:'SLS',
        materialList:[0,1,1]
    },
    {
        name:'SLM',
        materialList:[0,1,1]
    },
    {
        name:'原型手板',
        materialList:[1,1,1]
    },
    {
        name:'功能零件',
        materialList:[0,0,0]
    },
    {
        name:'展示模型',
        materialList:[0,0,0]
    },
    {
        name:'动漫手办',
        materialList:[1,1,1]
    },
    {
        name:'建筑雕塑',
        materialList:[0,0,1]
    },
    {
        name:'医疗卫生',
        materialList:[0,0,1]
    },
    {
        name:'航空汽车',
        materialList:[0,0,1]
    },
    {
        name:'批量生产',
        materialList:[0,0,1]
    },
]

//execution-process.vue
export const ep_list= [
    {
        name:'500 耐压',
        price:1.20,
        url:'http://pic.mohou.com/service_upload/3_new.jpg',
    },
    {
        name:'600 << 2000',
        price:2.39,
        url:'http://pic.mohou.com/service_upload/4_choose.jpg',
    }
]

//material-example.vue
export const me_list = [
    {
        name:'500 耐压',
        price:1.20,
        url:'http://pic.mohou.com/service_upload/4_choose.jpg',
        temperature_range:'60',
        size_precision:0.1,
        cycle:'1~3',
        texture:'光滑细腻，细节表现力好',
        device_size:'1400*700*500',
        trait:'性价比高，成型细腻、表面质量好，适合做工业手板、工艺品等高精度模型',
        label:[5,7,8,9,10,2]
    },
    {
        name:'200 << 600',
        price:1.20,
        url:'http://pic.mohou.com/service_upload/3_new.jpg',
        temperature_range:'70~150',
        size_precision:0.2,
        cycle:'2~4',
        texture:'表面有磨砂感，大倾斜角有可能有层纹',
        device_size:'300*300*600',
        trait:'采用进口设备，进口尼龙粉末打印，综合性能比较全面，机械性能优良，适合做功能部件，免装配件等（空心打印需自带材料脱出孔）',
        label:[6,5,11,10,12,3]
    },
    {
        name:'200 << 600',
        price:1.20,
        url:'http://pic.mohou.com/service_upload/3_new.jpg',
        temperature_range:'70~150',
        size_precision:0.2,
        cycle:'2~4',
        texture:'表面有磨砂感，大倾斜角有可能有层纹',
        device_size:'300*300*600',
        trait:'采用进口设备，进口尼龙粉末打印，综合性能比较全面，机械性能优良，适合做功能部件，免装配件等（空心打印需自带材料脱出孔）',
        label:[6,5,11,10,12,3]
    }
]

//select-craft.vue
export const craft = [
    {
        name:'聚尿喷涂',
        url:'http://res.mohou.com/images/new/baojia/3dp.png'
    },
    {
        name:'油漆',
        url:'http://res.mohou.com/images/new/baojia/cnc.png'
    }
]


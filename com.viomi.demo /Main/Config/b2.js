export default {
    props:['Mode','RCSetTemp','FCSetTemp','RCOpen','Error','SmartCool','SmartFreeze'],
    spec:true,
    specConfig:[
        {
            siid: 2, //冰箱
            props: {
                Mode: 4,//模式
            }
        },
        {
            siid: 3, //冷藏室
            props: {
                RCSetTemp: 2,//设定温度
                RCOpen: 3,//开关
                SmartCool:4,//速冷
            }
        },
        {
            siid: 4, //冷冻室
            props: {
                RCSetTemp: 2,//设定温度
                SmartFreeze:4,//速冷
            }
        },
        {
            siid: 5, //异常
            props: {
                Error: 1,//异常
            }
        },
    ],
    // 是否有变温室
    hasChangeRoom:true,
    // 是否有智能模式
    hasSmartMode:true,
    // 是否有假日模式
    hasHolidayMode:false,
    // 是否有节能模式
    hasEnermyMode:false,

}
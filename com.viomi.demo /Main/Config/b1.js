export default {
    props: ['Mode', 'RCSetTemp', 'FCSetTemp', 'RCOpen', 'Error', 'SmartCool', 'SmartFreeze', 'OutdoorTemp', 'StartDays', "ip"],
    states: {
        Mode: 0,
        RCSetTemp: 6,
        FCSetTemp: -18,
        RCOpen: 0,
        Error: 0,
        SmartCool: 0,
        SmartFreeze: 0,
        OutdoorTemp: 0,
        StartDays: 0,
        ip: ""
    },
    specConfig: [
        {
            siid: 2, //冰箱
            props: {
                Mode: 4,//模式
                OutdoorTemp: 5,//室外温度
                StartDays: 6, //启动天数
            }
        },
        {
            siid: 3, //冷藏室
            props: {
                RCSetTemp: 2,//设定温度
                RCOpen: 3,//开关
                SmartCool: 4,//速冷
            }
        },
        {
            siid: 4, //冷冻室
            props: {
                RCSetTemp: 2,//设定温度
                SmartFreeze: 4,//速冷
            }
        },
        {
            siid: 5, //异常
            props: {
                Error: 1,//异常
            }
        },
        {
            siid: 7, //相册
            props: {
                ip: 1,//ip
            }
        }
    ],
    // 是否有变温室
    hasChangeRoom: false,
    // 是否有智能模式
    hasSmartMode: true,
    // 是否有假日模式
    hasHolidayMode: true,
    // 是否有节能模式
    hasEnermyMode: false,

}

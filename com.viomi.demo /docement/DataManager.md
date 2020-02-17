  
  
- [[DataManager-数据管理]](#datamanager-数据管理 )
- [[轮询]](#轮询 )
    - [开始](#开始 )
    - [暂停](#暂停 )
    - [恢复](#恢复 )
    - [移除](#移除 )
- [[操作]](#操作 )
    - [获取属性](#获取属性 )
    - [设置属性](#设置属性 )
- [[事件]](#事件 )
    - [监听轮询结果](#监听轮询结果 )
    - [移除监听轮询结果](#移除监听轮询结果 )
- [[状态码]](#状态码 )
- [[SpecConfig格式]](#specconfig格式 )
  
##  [DataManager-数据管理]
  
  
DataManager是基于spec协议的数据管理类，不再支持profile协议
  
##  [轮询]
  
  
####  开始
  
  
* **startPropsLoop**
  
* **参数: params**
  
属性|类型|默认值|描述
--|--|--|--
props|array|-|需要获取的属性名称列表
interval|number|4|轮询间隔时间，单位秒
specConfig|object|-|spec的属性配置文件
toObject|bool|true|将返回的结果由array类型转换为object类型
log|bool|true|是否打开属性流程的打印日志
propsEvent|bool|true|获取属性后是否发送返回结果的事件
callback|function|null|获取属性后的回调
  
```
DataManager.startPropsLoop({
    props: ["power","wind","light"],
    interval: 4,
    specConfig: spec配置文件,
    toObject: true,
    log: true,
    propsEvent: true,
    callback: (result) => {
    }
})
```
  
####  暂停
  
  
* **stopPropsLoop**
  
* **参数: 无**
  
```
DataManager.stopPropsLoop()
```
  
####  恢复
  
  
* **resumePropsLoop**
  
* **参数: params**
  
属性|类型|默认值|描述
--|--|--|--
updateTime|int|-|恢复轮询后，间隔多少毫秒获取一次属性，0是马上获取，单位毫秒
  
```
//恢复轮询后，等待下一个间隔获取属性
DataManager.resumePropsLoop();
  
//恢复轮询后的1秒获取一次属性
DataManager.resumePropsLoop({
    updateTime:1000
});
```
  
####  移除
  
  
* **clearPropsLoop**
  
* **参数: 无**
  
```
DataManager.clearPropsLoop()
```
  
备注：原则上只支持一个属性的轮询开启和移除，避免多轮询定时器的各种奔溃问题。业务需求真的需要多属性轮询，请自行实现
  
##  [操作]
  
  
####  获取属性
  
  
* **getProps**
  
* **参数: params**
  
属性|类型|默认值|描述
--|--|--|--
props|array|-|需要获取的属性名称列表
specConfig|object|-|spec的属性配置文件，若不设置使用开始轮询时的配置表
specReqData|object|-|spec格式的请求数据，性能优化参数
toObject|bool|true|将返回的结果由array类型转换为object类型
callback|function|null|获取属性后的回调
  
```
//当没有参数时，默认使用startPropsLoop时的参数
DataManager.getProps();
  
//获取指定属性
DataManager.getProps({
    props: ["power","wind","light"],
    specConfig: spec配置文件,
    toObject: true,
    callback: (result) => {
        ...
    }
});
  
//直接使用spec方式访问属性，无需specConfig参数
DataManager.getProps({
    props: ["power","wind","light"],
    specReqData: [{
            did: XXX,
            siid:1,
            piid:2,
        },
        ...
    ],
    toObject: true,
    callback: (result) => {
        ...
    }
});
```
  
* **返回结果: result**
  
属性|类型|默认值|描述
--|--|--|--
status|int|null|请求的状态码
datas|object/array|null|返回的结果，根据toObject参数返回数组或对象
isUpdated|bool|false|与上次获取属性相比设备是否更新了
  
```
toObject: true,
callback: (result) => {
    console.log(result.datas)
}
//打印 {power: 1, widng: 2, light: 0}
  
toObject: false,
callback: (result) => {
    console.log(result.datas)
}
//打印 [1, 2, 0]
```
  
####  设置属性
  
  
* **setProps**
  
* **参数: params**
  
属性|类型|默认值|描述
--|--|--|--
props|object|null|属性设置的参数
specProps|array|null|属性设置的参数(spec格式)
specConfig|object|开始轮询时的配置表|spec的属性配置文件
callback|function|null|设置后的回调方法
autoReboot|bool|true|自动进行获取属性时的暂停和开启
  
```
//使用props参数设置属性
//已进行优化逻辑，第一次设置时会遍历配置表，然后保存该属性的piid和siid，下次使用该方法会直接从缓存里面取
DataManager.setProps({
    props:{
        power: true
    },
    callback:(result)=>{
        ...
    }
})
  
//使用specProps参数设置属性，直接使用spec格式访问
DataManager.setProps({
    specProps:[{
        did: DeviceId,
        siid: 2,
        piid: 3,
        value: true
    }],
    callback:(result)=>{
        ...
    }
})
```
  
* **返回结果: result**
  
属性|类型|默认值|描述
--|--|--|--
status|int|null|请求的状态码
datas|object/array|null|返回的结果，根据toObject参数返回数组或对象
  
```
callback: (result) => {
    console.log(result.datas)
}
//打印 [{code: 0, siid: 2, did: "273947250", piid: 1}]
```
  
##  [事件]
  
  
####  监听轮询结果
  
  
若startPropsLoop的propsEvent为true，监听每次属性轮询的回调结果
  
* **addPropsLoopListener**
  
* **参数: params**
  
属性|类型|默认值|描述
--|--|--|--
callback|function|-|获取数据后的回调
  
```
DataManager.addPropsLoopListener((result)=>{
    ...
})
```
  
####  移除监听轮询结果
  
  
* **removePropsLoopListener**
  
* **参数: 无**
  
属性|类型|默认值|描述
--|--|--|--
callback|function|-|获取数据后的回调
  
```
DataManager.removePropsLoopListener((result)=>{
    ...
})
```
  
备注：只支持单个事件的监听和移除，不支持多页面使用多个监听
  
##  [状态码]
  
  
* **status**
  
名称|编码|描述
--|--|--
success|0|成功
default|700|默认错误
propsFalut|701|属性访问错误
pauseStatus|702|访问属性回调结果时，当前是暂停状态
setPropsFalut|703|设置属性错误
  
```
import DataManager, {PropsStatusConfig} from 路径
  
...
callback: (result) => {
    const {status, datas} = result;
    //请求成功时
    if(status === PropsStatusConfig.success){
        ...
    }
    //当发生获取属性故障时
    else if(status === PropsStatusConfig.propsFalut){
        ...
    }
}
```
  
##  [SpecConfig格式]
  
  
```
//SpecConfig.js
export default [
    {
        siid: 0,
        props: {
            //key: piid
            power: 123,
            swing: 456
        }
    },
    {
        siid: 1,
        props: {
            timer: 778,
            save: 965
        }
    }
]
```
  
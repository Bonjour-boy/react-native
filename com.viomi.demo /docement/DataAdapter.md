# 设备数据基础类DataAdapter

## 引入

```js
import DataAdapter from '../Viomi-plugin-sdk/Adapter/DataAdapter';
```

## 使用

#### 获取属性接口,profile协议

```js
DataAdapter.getProfilePropertiesValue(['status','mode']).then((datas)=>{}).catch((error)=>{});
```

#### 请求获取设备的属性值

```js
DataAdapter.getPropertiesValue([{did: 1, siid: 1, piid: 1},{did: 1, siid:2, piid: 3}])
```

#### 设置设备的属性值

```js
DataAdapter. setPropertiesValue([{did: 1, siid: 1, piid: 1, value:'any'},{did: 1, siid:2, piid: 3, value: 'any'}])
```

#### 请求调用设备的方法

> 其中，action.params为数组。例如 {did: 1, siid: 1, aiid: 1, in: [17,"shanghai"]}

```js
DataAdapter.doAction({did: action.did, siid: action.siid, aiid: action.iid, in: action.params})
```

#### 设置接口,profile协议,米家spec协议，云米spec协议

```js
DataAdapter.callMethod('set_power', [0]).then((res) => {
            if (res.code == 0) {
                console.log('设置成功：', method, params, res.result);
            }
        }).catch((error) => {
            console.log('设置失败', error);
        })
```

#### 获取历史使用记录接口  profile协议


```js
let start_time = parseInt(DateUtil.getDateEnd(new Date()).getTime() / 1000 - 100000000);
let end_time = parseInt(DateUtil.getDateEnd(new Date()).getTime() / 1000);
 
	DataAdapter.getDeviceData('wash_record',start_time,end_time,100,(success,data)=>{
	alert(status + JSON.stringify(data));
	 });
```

#### 数据统计接口  profile协议

```js
let start_time = parseInt(DateUtil.getDateEnd(new Date()).getTime() / 1000 - 100000000);
let end_time = parseInt(DateUtil.getDateEnd(new Date()).getTime() / 1000);
DataAdapter.getDeviceData('monthly_record',start_time,end_time,100,(success,data)=>{
  alert(status + JSON.stringify(data))
}
```

#### 新版数据统计接口

```js
DataAdapter.getStoreDatas(params)
```

#### 获取属性接口,profile协议

```js
DataAdapter.getProfilePropertiesValue(['status','mode']).then((datas)=>{}).catch((error)=>{});
```
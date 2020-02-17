# 云米rpc类：YMDataManager


- [适配器](#适配器 )
  - [YMDataManager-云米数据管理类](#YMDataManager-云米数据管理类 )

##  YMDataManager-云米数据管理类

### 前言

公共库针对设备的数据上报提供了统一的数据统计类，。<br />

* **使用方法**
  
```
//获取设备管理对象
YMDataManager.getDeviceManager()

/**
 * get接口
 * @var {string} url 
 * @var {json} params 请求参数
 * @var {function} callback 回调函数
 */
YMDataManager.fetchGet(url, params, callback)

/**
 * get接口
 * @var {string} method 方法名称
 * @var {array} params 请求参数数组
 * @var return Promise
 */
YMDataManager.callMethodFromCloud(method, params)

/**
 * 请求获取设备的属性值
 * 设备类型：spec
 * @param {Array}  params [{did: 1, siid: 1, piid: 1},{did: 1, siid:2, piid: 3}]
 * @return {Promise}
 */
YMDataManager.getPropertiesValue(params)

/**
 * 设置设备的属性值
 * 设备类型：spec
 * @param {Array} params [{did: 1, siid: 1, piid: 1, value:'any'},{did: 1, siid:2, piid: 3, value: 'any'}]
 * @return {Promise}
 */
YMDataManager.setPropertiesValue(params) 

/**
 * 请求调用设备的方法
 * 设备类型：spec
 * @param {JSON} params {did: action.did, siid: action.siid, aiid: action.iid, in: action.params},其中，action.params为数组。例如 {did: 1, siid: 1, aiid: 1, in: [17,"shanghai"]}
 * @return {Promise<JSON>}
 */
YMDataManager.doAction(params)

/**
 * 获取数据统计接口
 * @var {array} params 请求参数
 * @var return Promise
 */
YMDataManager.getDeviceData(params)

```

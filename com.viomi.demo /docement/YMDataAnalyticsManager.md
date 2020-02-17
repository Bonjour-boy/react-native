# 云米数据统计类：YMDataAnalyticsManager

- [适配器](#适配器 )
  - [YMDataAnalyticsManager-云米数据统计类](#YMDataAnalyticsManager-云米数据统计类 )

##  YMDataAnalyticsManager-云米数据统计类

### 前言

公共库针对设备的数据上报提供了统一的数据统计类，。<br />

* **使用方法**
  
```
//获取设备管理对象
YMDataAnalyticsManager.getDeviceManager()

/**
* 云米数据统计接口
* @var {string} category 数据别名，通常是设置方法或者页面名称
* @var {string} action 数据类型："show"，展示类型；"click"，点击类型
* @var {array} params "click"时，传递的参数
*/
YMDataAnalyticsManager.reportEvent(category, action, params)

```
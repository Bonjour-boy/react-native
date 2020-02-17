
- [适配器](#适配器 )
  - [SDKAdapter-消息通知](#SDKAdapter-SDK适配器 )
    
##  SDKAdapter-SDK适配器

### 前言

公共库为了适配云米和米家，统一SDK的管理。提供了插件开发中常见的对象获取，包括：获取miot对象、设备管理器、数据管理器、设备常见事件、包事件、插件的文件系统、记录管理器。<br />
    
* **使用方法**
  
```
//获取miot对象
SDKAdapter.getMiot()

//获取设备管理器对象
SDKAdapter.getDeviceManager()

//获取数据管理器对象
SDKAdapter.getDataManager()

//获取设备事件对象
SDKAdapter.getDeviceEvent()

//获取包事件对象
SDKAdapter.getPackageEvent()

//获取插件的文件系统对象
SDKAdapter.getPluginFS()

//获取记录管理器对象
SDKAdapter.getRecordManager()

```
  
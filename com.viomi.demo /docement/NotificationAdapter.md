
- [适配器](#适配器 )
  - [NotificationAdapter-消息通知](#notificationadapter-消息通知 )
  
##  适配器
  
  
###  NotificationAdapter-消息通知
  
  
* **使用方法**
  
```
//添加消息监听
this.lis = Notification.addAuthorizationCancelListener(()=>{
  
});
//移除消息监听
this.lis && this.lis.remove();
```
  
描述|函数名|返回结果|返回类型|适用平台
--|--|--|--|--
修改设备名称|addDeviceNameChangedListener|name|string|云米、米家
网络变化|addNetInfoListener|connected|bool|云米、米家
app将要回到主菜单|addPackageWillPauseListener|-|-|米家
app已经回到前台|addPackageDidResumeListener|-|-|米家
Native界面返回到插件界面|addPackageViewWillAppearListener|-|-|米家
退出插件|addPackageWillExitListener|-|-|米家
撤销隐私协议|addAuthorizationCancelListener|-|-|米家
IM通讯登录|addImLoginListener|-|-|云米
IM新消息|addImNewMsgListener|-|-|云米
  
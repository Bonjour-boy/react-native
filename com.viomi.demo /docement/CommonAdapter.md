# 基础信息功能类CommonAdapter

## 引入

```js
import CommonAdapter from '../Viomi-plugin-sdk/Adapter/CommonAdapter';
```

## 使用

#### 设备ID

```js
CommonAdapter.deviceId
```
#### 设备名称

```js
CommonAdapter.deviceName
```

#### 设备model

```js
CommonAdapter.deviceModel
```

#### 小米账号ID

```js
CommonAdapter.userId
```

#### 小米token

```js
CommonAdapter.miToken
```

#### 设备拥有者的小米账号ID

```js
CommonAdapter.ownerId
```

#### 设备是否是分享设备(米家：非分享，非家庭)

```js
CommonAdapter.isShared
```

#### 云米用户ID,“0”表示未登录

```js
CommonAdapter.viomiId
```

#### 云米用户token,""表示未登录

```js
CommonAdapter.viomiToken
```

#### 云米插件来源标识，云米：viomi

```js
CommonAdapter.source
```

#### 云米插件包版本

```js
CommonAdapter.pluginVersion
```

#### 云米设备接入协议类型,6为云米spec协议

```js
CommonAdapter.iotType
```

#### 云米app的小米平台的clientId

```js
CommonAdapter.clientId()
```

#### 云米app的debug模式（是否是测试环境）

```js
CommonAdapter.viomiDebug()
```

#### app语言(云米目前只适配中文)

```js
CommonAdapter.language()
```

#### 打开选择照片窗口

> iOS,暂时使用，后面采用第三方库react-native-image-picker

```js
CommonAdapter.openImagePicker(count, loadOldImage, callback)
```

> Android,暂时使用，后面采用第三方库react-native-image-picker

```js
CommonAdapter.openImagePickerAndroid(count, selectedImages, callback)
```

#### 打开分享设备的页面

```js
CommonAdapter.openShareDevicePage()
```

#### 打开商城某商品详情页面

```js
CommonAdapter.openShopStore(key, title)
```

#### 退出插件页面

```js
CommonAdapter.exit() 
```

#### 检查固件版本是否是最新版本

```js
CommonAdapter.checkVersion(callback)
```

#### 获取最新检查固件版本信息

```js
CommonAdapter.getFirmwareInfo(callback)
```

#### 扫地机地图接口

```js
CommonAdapter.colorsToImageBase64(base64Content, wallColor, bgColor, findColor, func)
```


```js
CommonAdapter.colorsTransToImageBase64(base64Content, width, height, color1, color2, color3, scaleRatio, callback)
```

#### 米家扫地机地图描绘接口

```js
CommonAdapter.pointsToImageBase64(width, height, points, colorsMap, func)
```

#### 米家扫地机地图描绘接口V2

```js
CommonAdapter.pointsScaleToImageBase64(width, height, points, colorsMap, scale, func)
```

#### 米家扫地机地图描绘接口V3

```js
CommonAdapter.compressPointsScaleToImageBase64(width, height, points, colorsMap, scale, func)
```

#### 登录腾讯通信（冰箱）

```js
CommonAdapter.loginIm()
```

#### 获取云米FAQ url

```js
CommonAdapter.FAQUrl()
```

#### 获取存储信息

```js
CommonAdapter.getStorage('key').then((value)=>{}).catch((error)=>{});
```

#### 存储信息

```js
CommonAdapter.setStorage(key, value)
```

#### 获取地区信息

```js
CommonAdapter.timeZone()
```

#### 获取服务器\地区信息

```js
CommonAdapter.getServerName(callback)
```

#### 查看软件政策和隐私协议

```js
CommonAdapter.privacyAndProtocolReview(license, licenseURL, policy, policyURL)
```

```js
CommonAdapter.openPrivacyLicense(agreementURL, privacyURL)
```

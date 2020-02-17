[toc]

## [多语言工具-I18nUnit]

多语言工具是使用第三方i18next.js和react-i18next封装的，为了统一工具命名，在本sdk中的别名为**I18nUnit**，详情参考文档 https://www.i18next.com/

本工具的SDK内置文本支持米家常用的13种语言

## [设置资源]

```
import I18nUnit from 路径
import zhJSON from 路径
import enJSON from 路径
...
import zhErrorJson from 路径
import enErrorJson from 路径

//添加插件翻译文本
I18nUnit.addDatas({
  zh:zhJSON,
  en:enJSON,
  ...
});

//添加故障翻译文本
I18nUnit.addErrorDatas({
  zh:zhErrorJson,
  en:enErrorJson,
  ...
});


//同时添加插件和故障翻译文本
I18nUnit.addDatas(
  {
    zh:zhJSON,
    en:enJSON,
    ...
  },
  {
    zh:zhErrorJson,
    zh:enErrorJson,
    ...
  }
);
```

## [使用方法]

#### 插件项目

```
//zh.json
{
  "测试":"翻译文本"
}

const str = I18nUnit.t("测试");
console.log(str);
//打印 翻译文本
```

#### SDK内部

```
//插件项目
//zh.json
{
  "测试":"翻译文本"
}

//SDK内部
//zh.json
{
  "测试":"SDK文本"
}

const str = I18nUnit.st("测试");
console.log(str);
//打印 SDK文本

const str = I18nUnit.t("sdk:测试");
console.log(str);
//打印 SDK文本
```

#### 故障

```
//zh.json
{
  "bit_0":{
    "title": "故障1",
    "detail": "故障1详情"
  },
  ...
}

const str = I18nUnit.et("bit_0.title");
console.log(str);
//打印 故障1

const str = I18nUnit.et("bit_0.detail");
console.log(str);
//打印 故障1详情
```

如果存在多个相同的语言环境文件和key值也相等，可以使用命名空间指向需要的文本，具体参考下文的命名空间解析

#### 动态文本

```
//zh.json
{
  "测试":"结果{{name}}和{{title}}"
}

const str = I18nUnit.t("测试",{name:"名称", title:"标题"});
console.log(str);
//打印 结果名称和标题

```

#### 复合方式

已经做好内嵌识别，能够和其它工具联合使用复合方法

* **日期工具DateUtil**

```
//zh.json
{
  "测试":"结果{{date, YYYY-MM-DD}}"
}

const date = new Date(2018, 10, 18);
const str = I18nUnit.t("测试", {date: date});
console.log(str);
//打印 结果2018-11-18
```

当传入的参数是以下类型参数时:

1.Date日期对象

2.DateUtil对象

可以直接使用DateUtil的标识符进行联合使用

* **数字工具NumberUtil**

```
//zh.json
{
  "测试":"结果{{number, 00:00}}"
}

const num = 238;
const str = I18nUnit.t("测试", {number: num});
console.log(str);
//打印 结果00:03
```

当传入的参数是以下类型参数时:

1.number对象，而且资源文件有额外格式(例如00:00)，如无格外格式则直接使用该数字

2.NumberUtil对象

可以直接使用NumberUtil的标识符进行联合使用

## [命名空间]

#### 概述

当有多个相同的语言翻译文件，而且key相同时的指向问题，例如

```
//SDK内部的语言文件zh.json
{
  "测试":"结果1"
}

//插件项目的语言文件zh.json
{
  "测试":"结果2"
}
```

为了解决这个问题，引入命名空间概念，实际即是用指向
SDK内部.zh.测试 -> 结果1
插件项目.zh.测试 -> 结果2

#### 指向

```
//使用默认命名空间，指向addDatas方法添加的资源文件
const str = I18nUnit.t("测试");

//使用封装的方法，指向SDK内部的资源文件
const str = I18nUnit.st("测试");

//命名空间:key，强制指向该命名空间下的资源文件key值
const str = I18nUnit.t(sdk:"测试");
```

#### 自定义

假设需要自定义命名空间使用

```
import I18nUnit from 路径
import zhJSON from 自定义资源路径
import enJSON from 自定义资源路径

//添加资源到新的命名空间 CustomName
I18nUnit.addNSDatas("CustomName", {
  zh:zhJSON,
  en:enJSON,
  ...
})

//指定使用自定义命名空间的文本
I18nUnit.t("CustomName:测试");
```

## [缺失兼容]

当在使用超出了内置的语言key值时，启用缺失机制，考虑到en的普遍性，首先在资源文件en中寻找，再在zh中寻找，如都找不到，会进行报错

假设当前环境是日文环境，并且没有内置日文资源文件

```
//zh.json
{
  "测试":"测试",
  "测试2":"测试 2"
}
//en.json
{
  "测试":"test"
}

const str = I18nUnit.t("测试");
console.log(str);
//打印 test

const str = I18nUnit.t("测试2");
console.log(str);
//打印 测试 2

const str = I18nUnit.t("测试3");
console.log(str);
//打印 翻译错误: 命名空间 [default] 里的资源文件找不到文本 [测试3] 
```

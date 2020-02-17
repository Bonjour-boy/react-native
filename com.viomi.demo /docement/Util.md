## 目录

 - [动画工具-Animatable](#动画-Animatable)
 - [通用-Common](#通用-Common)
 - [日期工具-DateUnit](#日期工具-DateUnit)
    - [构建方法](#构建方法) 
    - [取值/赋值](#取值/赋值)
    - [操作运算](#操作运算) 
    - [显示](#显示) 
    - [类型转换](#类型转换) 
    
 - [多语言工具-I18nUnit](#多语言工具-I18nUnit)
 - [隐私工具-LegalsUtil](#隐私工具-LegalsUtil)
 - [导航工具-Navigation](#导航工具-Navigation)
 - [数字工具-NumberUnit](#数字工具-NumberUnit)

## [日期工具-DateUnit]

日期工具是使用第三方moment.js封装的，为了统一工具命名，**moment**在本sdk中的别名为**DateUnit**，详情参考文档 http://momentjs.cn/docs/

### [构建方法]

只列举常用的，更多方法请参考文档

 **无参数(返回当前时间的对象)**
```
const dateObj = DateUnit();
```

**字符串+格式**
```
const dateObj = DateUnit("2018-08-18", "YYYY-MM-DD");
```

**时间戳(毫秒)**
```
const dateObj = DateUnit(1318781876406);
```

**时间戳(秒)**
```
const dateObj = DateUnit.unix(1318781876);
```

**Date对象**
```
const dateObj = DateUnit(new Date());
```

**数组(任意长度)**
```
const dateObj = DateUnit([2010, 1, 14, 15, 25, 50, 125]);
```

## [取值/赋值]
假设当前时间为 2018-08-20 20:18

**取值**
如果想取当前的分钟
```
//类型：number
const data = DateUnit().minute();
console.log(data);
//打印 18
```

**赋值**
如果想设置指定的分钟
```
//类型：DateUnit对象
const data = DateUnit().minute(4);
console.log(data);
//打印 [object]

data.minute();
console.log(data);
//打印 4
```

**支持格式**
只列举常用的，更多方法请参考文档

| 名称 | 格式        | 取值范围               |
|------|-------------|------------------------|
| 毫秒 | millisecond | 0-999                  |
| 秒   | second      | 0-59                   |
| 分钟 | minute      | 0-59                   |
| 小时 | hour        | 0-23                   |
| 日期 | date        | 1-31                   |
| 星期 | day         | 0-6或者Sunday-Saturday |
| 月   | month       | 0-11                   |
| 年   | year        | -270,000至270,000      |

## [操作运算]

假设当前时间为 2018-08-20 20:18

**加法**
```
//支持缩写
//const dateObj = DateUnit().add(3，"m");
const dateObj = DateUnit().add(3，"minute");
console.log(dateObj.minute());
//打印 21

//可以连续运算
dateObj.add(2, "h");
console.log(dateObj.hour());
//打印 22
```

**减法**
```
//支持缩写
//const dateObj = DateUnit().subtract(3，"m");
const dateObj = DateUnit().subtract(3，"minute");
console.log(dateObj.minute());
//打印 15

//可以连续运算
dateObj.subtract(2, "h");
console.log(dateObj.hour());
//打印 18
```

## [显示]

**格式化**
假设当前时间为 2018-08-20 20:18

```
DateUnit().format('YYYY-MM-DD');
//打印 2018-08-20

DateUnit().format('DD/MM/YYYY');
//打印 20/18/2018

DateUnit().format('[自定义文本:] DD/MM/YYYY');
//打印 自定义文本: 20/18/2018
```

**标识符表格**

| 名称     | 标识符 | 输出                                   |
|----------|--------|----------------------------------------|
| 年       | Y      | 70 71 ... 29 30                        |
| -        | YYYY   | 1970 1971 ... 2029 2030                |
| 月份     | M      | 1 2 ... 11 12                          |
| -        | Mo     | 1st 2nd ... 11th 12th                  |
| -        | MM     | 01 02 ... 11 12                        |
| -        | MMM    | Jan Feb ... Nov Dec                    |
| -        | MMMM   | January February ... November December |
| 日(本月) | D      | 1 2 ... 30 31                          |
| -        | Do     | 1st 2nd ... 30th 31st                  |
| -        | DD     | 01 02 ... 30 31                        |
| 日(本年) | DDD    | 1 2 ... 364 365                        |
| -        | DDDo   | 1st 2nd ... 364th 365th                |
| -        | DDDD   | 001 002 ... 364 365                    |
| 上下午   | A      | AM PM                                  |
| -        | a      | am pm                                  |
| 小时     | H      | 0 1 ... 22 23                          |
| -        | HH     | 00 01 ... 22 23                        |
| -        | h      | 1 2 ... 11 12                          |
| -        | hh     | 01 02 ... 11 12                        |
| 分钟     | m      | 0 1 ... 58 59                          |
| -        | mm     | 00 01 ... 58 59                        |
| 秒数     | s      | 0 1 ... 58 59                          |
| -        | ss     | 00 01 ... 58 59                        |

已经做了本地语言处理，支持13种语言，假设当前语言环境是zh

```
DateUnit().format('mm:hh A');
//打印 08:18 下午

DateUnit().format('Do');
//打印 18日
```

假设当前语言环境是en

```
DateUnit().format('mm:hh A');
//打印 08:18 PM

DateUnit().format('Do');
//打印 18th
```

**时间点差值**

有时需要根据设备返回的时间戳，去判断和当前时间的差异。例如洗碗机预约了今天20:30分开始洗碗，插件需要显示“预约时间:12分钟后”

```
//假设time是设备的预约时间戳
const time = 设备返回的时间戳(单位秒);

//fromNow是指从现在这个时间开始，到预约的时间差值
const appointDate = DateUnit.unix(time);
const appointDateStr = appointDate.fromNow();
console.log("预约时间:" + appointDateStr)
//zh语言环境打印 预约时间:12分钟后
//en语言环境打印 预约时间:in 12 minutes
```

也可以是两个时间点的差值

```
const currentDate = DateUnit();
const appointDate = DateUnit("2018-08-18 20:40", "YYYY-MM-DD HH:mm");
//from是指从现在这个时间开始，到预约的时间差值
const appointDateStr = appointDate.from(currentDate);

console.log("预约时间:" + appointDateStr)
//zh语言环境打印 预约时间:22分钟后
//en语言环境打印 预约时间:in 22 minutes
```

toNow和to等价于上面的用法，只不过是位置换过来

**时间段差值**

有时需要根据设备返回的秒数进行倒计时，插件需要显示“剩余时间08:12”

这个由另外一个数字工具NumberUnit实现，详情参考NumberUnit文档

## [类型转换]

| 名称          | 类型   | 输出方式                                               |
|---------------|--------|--------------------------------------------------------|
| 时间戳 (毫秒) | number | DateUnit().valueOf()                                   |
| 时间戳 (秒)   | number | DateUnit().unix()                                      |
| 日期对象      | Date   | DateUnit().toDate()                                    |
| 数组          | array  | DateUnit().toArray(), 如[2018, 7, 18, 20, 18, 35, 154] |
| 对象          | object | DateUnit().toObject(), 如下                            |

```
{
    years: 2015
    months: 6
    date: 26,
    hours: 1,
    minutes: 53,
    seconds: 14,
    milliseconds: 600
}
```

## [自定义语言环境的文本]

#### 修改文本

如果当前的语言环境转译的文本不合适，支持自定义修改

例如zh环境显示"12分钟后"，想修改为"12分钟之后"

```
DateUnit.locale('zh',{
    relativeTime : {
        future : '%s之后'
    }
})
```

详细可配置参数和格式，请参考：本目录/locale/zh.js

#### 添加语言环境

本工具支持13种米家常用语言环境，如需支持额外的语言环境

```
import testLangConfig from '语言环境文本配置文件';

moment.locale(语言名称, testLangConfig)
```

语言环境文本配置文件格式，请参考：本目录/locale/zh.js

## [备注]

本文档只是根据插件的使用情况，选择性地总结了工具的使用方法，此工具的功能远远不止本文档所写的，是一款非常强大的工具。更加详细的可以参考moment.js的官方文档。


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



## [数字工具-NumberUnit]

数字工具是使用第三方numeral.js封装的，为了统一工具命名，**numeral**在本sdk中的别名为**NumberUnit**，详情参考文档 http://numeraljs.com/

## [构建方法]

#### number参数

```
const numberObj = NumberUnit(1000);
```

#### 字符串参数

```
const numberObj_1 = NumberUnit("10,000.12");//10000.12
const numberObj_2 = NumberUnit("$10,000.00");//10000
const numberObj_3 = NumberUnit("-76%");//-0.76
```

## [取值]

#### value()

```
const numberObj = NumberUnit(1000);
console.log(numberObj);
//打印 [object]

console.log(numberObj.value());
//打印 1000
```

## [显示]

#### format()

```
//金额格式
NumberUnit(10000.23).format('0,0'); // '10,000'

//小数后几位
NumberUnit(10000.1234).format('0.000'); // '10000.123'

//金额格式 + 小数后几位
NumberUnit(1000.234).format('$0,0.00'); // '$1,000.23'

//前缀填充0
NumberUnit(100.1234).format('00000'); // '00100'

//数字转化为单位千(k)、百万(m)
NumberUnit(1230974).format('0.0a'); // '1.2m'

//字节转换
NumberUnit(7884486213).format('0.00b'); // '7.88GB'

//百分比
NumberUnit(0.974878234).format('0.000%'); // '97.488%'

//转换成 时:分:秒
NumberUnit(238).format('00:00:00'); // '00:03:58'

//转换成 时:分
NumberUnit(238).format('00:00'); // '00:03'

//转换成时间 秒数未满一分钟的向上取整
NumberUnit(3580).format('00:00:00'); // '00:59:40'
NumberUnit(3580).format('00:00:00 ceil'); // '01:00:00'
```

## [自定义转译格式]

如果是常用的，建议联系沟通，新增到sdk组件库。如果是非常特殊的，或者由于其他原因希望自定义的

#### 自定义方法

```
import 格式文件 from 来源;

NumberUnit.register('format', 格式名称, 格式文件);
```

#### 格式文件

```
//假设NumberUtil(238).format(00:00);
{
  //匹配的标识符，这里是“:”
  regexps: {
      //当匹配到字符串里面含有“:”时，进行此格式编译
      format: /(:)/,
      //当匹配到字符串里面含有“:”时，进行此格式反编译
      unformat: /(:)/
  },
  //格式化，目标是将数字238转换成字符串00:03
  format: function (value, format, roundingFunction) {
      //value = 238
      //format = "00:00"

      let output;

      逻辑处理....

      return output;
  },
  //反编译格式化，目标是将字符串00:03转换成数字238
  unformat: function (string) {
      let output;

      逻辑处理....

      //原则上是要反编译成数字，因为这个是数字处理工具
      return Number(output);
  }
}
```

注意：格式名称不能定义已经存在的名称，详细配置方法参考本目录/formats/*.js


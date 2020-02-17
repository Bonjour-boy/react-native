---
markdown:
  image_dir: /images
  path: README.md
  ignore_from_front_matter: true
  absolute_image_path: false

export_on_save:
  markdown: true
---

[toc]

## [日期工具-DateUnit]

日期工具是使用第三方moment.js封装的，为了统一工具命名，**moment**在本sdk中的别名为**DateUnit**，详情参考文档 http://momentjs.cn/docs/

## [构建方法]

只列举常用的，更多方法请参考文档

#### 无参数(返回当前时间的对象)

```
const dateObj = DateUnit();
```

#### 字符串+格式

```
const dateObj = DateUnit("2018-08-18", "YYYY-MM-DD");
```

#### 时间戳(毫秒)

```
const dateObj = DateUnit(1318781876406);
```

#### 时间戳(秒)

```
const dateObj = DateUnit.unix(1318781876);
```

#### Date对象

```
const dateObj = DateUnit(new Date());
```

#### 数组(任意长度)

```
const dateObj = DateUnit([2010, 1, 14, 15, 25, 50, 125]);
```

## [取值/赋值]

假设当前时间为 2018-08-20 20:18

#### 取值

如果想取当前的分钟

```
//类型：number
const data = DateUnit().minute();
console.log(data);
//打印 18
```

#### 赋值

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

#### 支持格式

只列举常用的，更多方法请参考文档

名称|格式|取值范围
--|--|--
毫秒|millisecond|0-999
秒|second|0-59
分钟|minute|0-59
小时|hour|0-23
日期|date|1-31
星期|day|0-6或者Sunday-Saturday
月|month|0-11
年|year|-270,000至270,000

## [操作运算]

假设当前时间为 2018-08-20 20:18

#### 加法

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

#### 减法

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

#### 格式化

假设当前时间为 2018-08-20 20:18

```
DateUnit().format('YYYY-MM-DD');
//打印 2018-08-20

DateUnit().format('DD/MM/YYYY');
//打印 20/18/2018

DateUnit().format('[自定义文本:] DD/MM/YYYY');
//打印 自定义文本: 20/18/2018
```

#### 标识符表格

名称|标识符|输出
--|--|--
年|Y|70 71 ... 29 30
-|YYYY|1970 1971 ... 2029 2030
月份|M|1 2 ... 11 12
-|Mo|1st 2nd ... 11th 12th
-|MM|01 02 ... 11 12
-|MMM|Jan Feb ... Nov Dec
-|MMMM|January February ... November December
日(本月)|D|1 2 ... 30 31
-|Do|1st 2nd ... 30th 31st
-|DD|01 02 ... 30 31
日(本年)|DDD|1 2 ... 364 365
-|DDDo|1st 2nd ... 364th 365th
-|DDDD|001 002 ... 364 365
上下午|A|AM PM
-|a|am pm
小时|H|0 1 ... 22 23
-|HH|00 01 ... 22 23
-|h|1 2 ... 11 12
-|hh|01 02 ... 11 12
分钟|m|0 1 ... 58 59
-|mm|00 01 ... 58 59
秒数|s|0 1 ... 58 59
-|ss|00 01 ... 58 59

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

#### 时间点差值

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

#### 时间段差值

有时需要根据设备返回的秒数进行倒计时，插件需要显示“剩余时间08:12”

这个由另外一个数字工具NumberUnit实现，详情参考NumberUnit文档

## [类型转换]

名称|类型|输出方式
--|--|--
时间戳 (毫秒) |number|DateUnit().valueOf()
时间戳 (秒) |number|DateUnit().unix()
日期对象|Date|DateUnit().toDate()
数组|array|DateUnit().toArray(), 如[2018, 7, 18, 20, 18, 35, 154]
对象|object|DateUnit().toObject(), 如下

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

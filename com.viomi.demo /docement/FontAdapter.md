# 字体管理类FontAdapter

## 引入

```js
import FontAdapter from '../Viomi-plugin-sdk/Adapter/FontAdapter';
```

## 使用

#### 带有style参数

```js
<Text style={[{color:'red'},FontAdapter.fontOfNumber({fontSize : 160 * ratio})]}>test</Text>
```
#### 不带有style参数

```js
<Text style={[{color:'red'},FontAdapter.fontOfNumber()]}>test</Text>
```


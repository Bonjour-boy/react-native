## 目录

 - [通用样式](#通用样式)
 - [布局工具](#布局工具)
 - [UI组件库里明确规范的颜色](#UI组件库里明确规范的颜色)

# 通用样式

## 像素转换

#### 说明

> 像素转换是根据给出的设计稿转换的，推荐使用蓝湖，将设计稿自定义为750px

#### 1080px像素转换

- 引入

```js
import { DP3 } from '../Components/Styles';
```

- 使用

```js
<View style={{width: DP3(60),height:DP3(60)}}> </View>
```

#### 750px像素转换及其他像素比

> 其他像素比使用则需要传入第二个参数

- 引入

```js
import { DP } from '../Components/Styles';
```

- 默认750px像素比

```js
<View style={{width: DP(60),height:DP(60)}}> </View>
```

- 其他像素比
  - 例:950像素

```js
<View style={{width: DP(60,950),height:DP(60,950)}}> </View>
```

## 布局工具

#### 引入

  ```js
  import { Layout } from '../Components/Styles'
  ```

#### 功能 --属性名

- 是否是Android平台

  > isAndroid

- 边缘距离

  > edgeSize

- 分割线高度

  > dividerHeight

- 标题字体大小

  > titleSize

- 值字体大小

  > valueSize

- 子标题字体大小

  > subTitleSize

- 底部安全距离

  > bottomSaveSpace

- 状态栏高度

  > statusBarHeight

- 导航栏高度

  > navbarHeight

- 导航栏+状态栏高度

  > totalNavHeight

- 屏幕宽度

  > windowWidth

- 屏幕高度

  > windowHeight

## UI组件库里明确规范的颜色

#### 引入

  ```js
  import { Colors } from '../Components/Styles'
  ```
#### 功能 --属性名

- 分割线颜色

  > dividerColor

- 背景颜色

  > backgroundColor

- 白色

  > white

- 黑色

  > black

- 其他颜色
  - color_F6F6F5
  - color_999999
  - color_C84545
  - color_FAFAFA
  - color_E6E6E6
  - color_FFF7E5
  - color_D49C46
  - color_3ED1DC
  - transparent100
  - transparent60
  - transparent40


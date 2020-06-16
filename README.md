# react-text-carousel

一个文字上下滚动的走马灯效果。这个是使用 css3 的动画实现，所以对浏览器版本有要求。

默认高度是 36px，如果需要调整，可根据 style 传递 height 进行设置。

## 效果图

![效果图](https://i.loli.net/2020/06/16/Lb3aAihu4VZx1Ek.gif)

## 安装

```bash
npm i @wenmu/react-text-carousel --save
```

## 使用方式

```js
import TextCarousel from "@wenmu/react-text-carousel";

<TextCarousel
  style={{ backgroundColor: "#e7e1e1", height: "50px" }}
  source={[
    { id: "1", text: "第一个" },
    { id: "12", text: "第2个" },
    { id: "3", text: "第3个" },
    { id: "4", text: "第4个" },
    { id: "5", text: "第5个" },
  ]}
  duration={2}
  icon={
    <img
      src="http://img.wangpengpeng.site/help.svg"
      alt=""
      style={{ width: "18px", height: "16px", display: "inline-block", marginRight: "7px" }}
    />
  }
/>;
```

## 属性介绍

| 属性名    | 默认值 | 类型       | 介绍                                  |
| :-------- | ------ | ---------- | ------------------------------------- |
| className | 空     | Object     | 自定义样式类,css 以 module 的方式引入 |
| style     | 空     | Object     | Object                                | 内嵌样式 |
| source    | []     | 数组       | 数据源                                |
| duration  | 2      | number     | 每项持续时间                          |
| icon      | null   | React.Node | 定义文字开头图标                      |

# Drawing Animation

一个带手部跟随效果的网页绘画 Demo：在倾斜的速写本上画画，鼠标移动时手会跟着走。

<p align="center">
  <img width="1036" alt="Drawing Animation preview" src="https://github.com/user-attachments/assets/2ec5f651-bcc1-4abb-bba9-ebea32a14158" />
</p>

## 功能

- 在速写本画布上自由绘制
- 画笔手部插画跟随鼠标移动，离开画布后回到默认位置
- **重置**：清空当前画布
- **下载**：把作品导出为图片

## 快速开始

纯静态页面，不需要构建或安装依赖。

```bash
git clone https://github.com/maoxiancat/Drawing-Animation.git
cd Drawing-Animation
```

用浏览器打开：

```
Drawing Animation/index.html
```

也可以在项目根目录起一个本地静态服务，例如：

```bash
npx serve "Drawing Animation"
```

然后访问终端提示的本地地址。

## 使用说明

1. 把鼠标移到速写本上，按住左键拖动即可作画。
2. 点击左上角 **重置** 清空画布。
3. 点击 **下载** 将当前画面保存为图片。

建议在桌面浏览器中使用；当前交互按鼠标事件实现，移动端触控未单独适配。

## 项目结构

```
Drawing-Animation/
├── Drawing Animation/
│   ├── index.html          # 页面结构与手部 SVG
│   ├── index.css           # 速写本布局与样式
│   ├── index.js            # 画布绘制、重置、下载、手部跟随
│   └── source/img/
│       └── drawing_book.png
└── README.md
```

## 技术栈

- HTML5 Canvas
- CSS
- JavaScript

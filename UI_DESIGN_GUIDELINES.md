# Withings 应用克隆版 UI 设计与风格指南

本文档旨在详细阐述 Withings 应用克隆版项目的用户界面（UI）设计原则、视觉风格和组件规范。旨在为未来的开发与迭代提供统一的设计参考，确保产品体验的一致性。

## I. 概述与设计哲学

项目整体采用 **深色模式（Dark Mode）** 作为核心设计，营造出一种沉浸、专注且具备科技感的视觉体验。设计哲学围绕以下几点展开：

- **数据驱动**: 以清晰、直观的方式呈现复杂的健康数据，将用户的注意力引导至核心指标。
- **一致性**: 在不同健康数据模块（如心脏、呼吸、睡眠）之间保持统一的布局、色彩和交互模式。
- **现代化**: 运用渐变、毛玻璃（Frosted Glass）、微动画等现代设计元素，提升界面的质感与活力。
- **移动优先**: 所有界面均在 `375x812` 像素的iPhone虚拟框架中进行设计，确保在移动设备上的最佳显示效果。

---

## II. 色彩系统 (Color Palette)

色彩系统是构建品牌识别和用户引导的关键。我们定义了基础色板和一系列强调色，用于不同模块和数据状态。

| 颜色预览 | 用途 | Tailwind 类名 | Hex 值 |
| :--- | :--- | :--- | :--- |
| <div style="width:20px;height:20px;background-color:#16191d;border:1px solid #fff;"></div> | **主背景色** (Primary Background) | `bg-withings-dark` | `#16191d` |
| <div style="width:20px;height:20px;background-color:#2c2f33;border:1px solid #fff;"></div> | **卡片背景色** (Card Background) | `bg-withings-card` | `#2c2f33` |
| <div style="width:20px;height:20px;background-color:#ffffff;"></div> | **主文字/高亮** (Primary Text/Highlight) | `text-white` | `#ffffff` |
| <div style="width:20px;height:20px;background-color:#a0aec0;"></div> | **次要文字** (Secondary Text) | `text-gray-400` | `#a0aec0` |
| <div style="width:20px;height:20px;background-color:#e5528c;border:1px solid #fff;"></div> | **心脏 (Heart)** | `withings-pink` | `#e5528c` |
| <div style="width:20px;height:20px;background-color:#22C55E;border:1px solid #fff;"></div> | **呼吸 (Breathing)** | `withings-green` | `#22C55E` |
| <div style="width:20px;height:20px;background-color:#6155f9;border:1px solid #fff;"></div> | **血氧/通用蓝 (Oxygen/Blue)** | `withings-blue` | `#6155f9` |
| <div style="width:20px;height:20px;background-color:#a092ed;border:1px solid #fff;"></div> | **生理指标 (Physiological)** | `withings-purple` | `#a092ed` |
| <div style="width:20px;height:20px;background-color:#fcc049;border:1px solid #fff;"></div> | **健康评分/警告 (Score/Warning)** | `withings-yellow` | `#fcc049` |
| <div style="width:20px;height:20px;background-color:#f97316;border:1px solid #fff;"></div> | **体温 (Temperature)** | `orange-500` | `#f97316` |
| <div style="width:20px;height:20px;background-color:#4f46e5;border:1px solid #fff;"></div> | **睡眠 (Sleep)** | `indigo-600` | `#4f46e5` |

---

## III. 字体规范 (Typography)

我们使用无衬线字体（Sans-serif），通过字号和字重的变化来区分信息层级。

| 用途 | Tailwind 类名 | 示例 |
| :--- | :--- | :--- |
| 页面主标题 | `text-4xl font-bold` | **呼吸** |
| 卡片/区域标题 | `text-2xl font-bold` | **今天** |
| 卡片内数据 | `text-3xl font-bold` | **15** 次/分 |
| 正文/描述 | `text-sm text-gray-400` | 正常范围 (12-20) |
| 按钮文字 | `text-sm font-medium` | 开始检测 |
| 导航栏标签 | `text-xs font-semibold` | 主屏幕 |

---

## IV. 布局与栅格 (Layout & Grid)

- **基础框架**: 所有页面都包含在一个固定的 `375x812` 像素的iPhone风格框架内。
- **页面结构**:
  1.  **状态栏 (Status Bar)**: 顶部显示时间、信号等。
  2.  **页头 (Header)**: 包含返回按钮和页面标题。
  3.  **主内容区 (Main Content)**: 使用 Flexbox (`flex-1`) 占据剩余空间，内容可滚动。
  4.  **底部导航栏 (Footer)**: 固定在页面底部。
- **卡片布局**: 主要内容通过卡片（Card）来组织，卡片之间使用 `space-y-3` 或 `space-y-6` 提供垂直间距。
- **毛玻璃效果**: 卡片和导航栏普遍采用 `bg-black/40 backdrop-blur-sm border border-white/10` 的组合，创造出半透明的毛玻璃质感，增加了界面的层次感和现代感。

---

## V. 组件库 (Component Library)

### A. 概览页 (Overview Pages)
概览页（如呼吸、睡眠、生理指标）遵循一致的结构，通常包含一个主题色的渐变背景。

```html
<!-- 呼吸概览页结构 -->
<div class="w-full h-full bg-gradient-to-b from-green-800 to-gray-900 ...">
    <!-- 状态栏 -->
    <!-- 页头 (返回按钮 + 页面标题) -->
    <header>...</header>
    <!-- 主标题和圆形数据展示 -->
    <div class="px-4 pb-6 flex justify-between items-center">
        <h1 class="text-4xl font-bold">呼吸</h1>
        <div class="text-center">
            <div class="w-24 h-24 rounded-full border-4 border-withings-green ...">
                 <span class="text-4xl font-bold">15</span>
            </div>
             <p class="text-base text-white/80 mt-2">呼吸频率</p>
        </div>
    </div>
    <!-- 主要内容区 (卡片列表) -->
    <main>...</main>
    <!-- 底部导航栏 -->
    <footer>...</footer>
</div>
```

### B. 详情页 (Detail Pages)
详情页（如心率、血压、体温）用于展示特定指标的详细数据和历史趋势。

- **顶部实时数据**: 采用大型圆形SVG进度条或范围显示，直观展示当前核心数据。
- **时间范围切换**: 提供“日/周/月/年”等按钮，用于切换下方图表的数据视图。
- **交互式图表**: 使用SVG绘制数据图表（如散点图、折线图），并高亮显示关键数据点。
- **数据摘要卡片**: 以小型卡片形式展示数据的最大值、最小值和平均值。
- **事件与日志**: 记录与该数据相关的事件或异常情况。

### C. 卡片 (Cards)
卡片是信息组织的核心单元。

- **通用样式**: `bg-black/40 p-4 rounded-2xl backdrop-blur-sm border border-white/10`
- **交互效果**: `cursor-pointer hover:bg-black/50 transition-colors`

### D. 按钮 (Buttons)
- **主操作按钮**: 带有主题色的实心按钮，如“开始检测”。
  ```html
  <button class="bg-green-500 hover:bg-green-600 px-4 py-1.5 rounded-lg text-white text-sm font-medium transition-colors">
      开始检测
  </button>
  ```
- **图标按钮**: 用于导航或简单操作，通常是圆形半透明背景。
  ```html
  <a href="..." class="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center">
      <svg>...</svg>
  </a>
  ```

---

## VI. 动画与交互 (Animation & Interaction)

适度的动画可以提升用户体验，使界面更具生命力。

- **脉冲动画 (Pulse)**: 用于图标或关键数据，吸引用户注意。
  ```css
  @keyframes breathing-pulse {
      0%, 100% { transform: scale(1); opacity: 0.9; }
      50% { transform: scale(1.1); opacity: 1; }
  }
  .breathing-icon {
      animation: breathing-pulse 3s ease-in-out infinite;
  }
  ```
- **波形动画 (Wave)**: 用于模拟呼吸或心电图的连续数据流。
  ```css
  @keyframes wave-flow {
      0% { transform: translateX(0); }
      100% { transform: translateX(-20px); }
  }
  ```
- **浮动动画 (Float)**: 用于装饰性元素，如月经跟踪页的插画。
  ```css
  @keyframes floatAnimation {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
  }
  ```
- **拖拽排序**: 在首页“所有健康数据”部分，使用 `Sortable.js` 实现卡片的拖拽排序功能。

---

## VII. 图标系统 (Iconography)

项目广泛使用 SVG（可缩放矢量图形）作为图标，以确保在任何分辨率下都保持清晰。图标风格简洁、线性，与整体UI设计保持一致。所有图标颜色均通过 `currentColor` 或 Tailwind 的 `text-{color}` 类来控制，便于统一管理和主题化。 
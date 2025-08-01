# 心电图界面UI组件详细文档

## 📱 界面概览
**文件路径**: `screens/ECGDetailScreen.tsx`  
**界面类型**: React Native ScrollView 垂直滚动界面  
**主题**: 浅色主题  
**背景色**: `#f2f2f7`  
**容器**: flex: 1

---

## 🎯 一、顶部导航栏 (Header)

### 📏 尺寸与布局
```jsx
样式名称: header
布局方式: flexDirection: 'row'
对齐方式: justifyContent: 'space-between', alignItems: 'center'
内边距: 
  - paddingHorizontal: 20px
  - paddingTop: 50px
  - paddingBottom: 20px
背景色: #f2f2f7
```

### 🔘 子组件详情

#### 返回按钮 (Back Button)
```jsx
组件类型: TouchableOpacity
文本内容: "←"
字体大小: 24px
颜色: #007aff (蓝色)
功能: 返回上一页
```

#### 标题文字 (Header Title)
```jsx
组件类型: Text
文本内容: "心电图"
字体大小: 18px
字体粗细: bold
颜色: #000
位置: 居中
```

#### 菜单按钮 (Menu Button)
```jsx
组件类型: TouchableOpacity
文本内容: "⋯"
字体大小: 24px
颜色: #000
位置: 右侧
```

---

## 🔄 二、模式切换器 (Mode Toggle)

### 📏 容器尺寸
```jsx
样式名称: modeToggle
布局方式: flexDirection: 'row'
背景色: #e5e5e7
圆角: borderRadius: 10px
边距: 
  - marginHorizontal: 15px
  - marginBottom: 20px
内边距: padding: 4px
```

### 🎛️ 切换按钮 (Mode Button)
```jsx
样式名称: modeButton
布局: flex: 1
内边距: paddingVertical: 8px
对齐: alignItems: 'center'
圆角: borderRadius: 8px

选项内容: ["测量", "月"]

未选中状态:
  - 背景色: 透明
  - 文字颜色: #333
  - 字体大小: 16px
  - 字体粗细: 500

选中状态 (activeModeButton):
  - 背景色: white
  - 文字颜色: #000
  - 字体粗细: bold
  - 阴影效果:
    * shadowColor: #000
    * shadowOffset: {width: 0, height: 1}
    * shadowOpacity: 0.1
    * shadowRadius: 2
    * elevation: 3
```

---

## 📅 三、日期时间导航 (DateTime Container)

### 📏 容器尺寸
```jsx
样式名称: dateTimeContainer
布局方式: flexDirection: 'row'
对齐方式: justifyContent: 'space-between', alignItems: 'center'
内边距: 
  - paddingHorizontal: 20px
  - paddingVertical: 15px
边距: 
  - marginHorizontal: 15px
  - marginBottom: 20px
背景色: white
圆角: borderRadius: 10px
```

### 🔘 子组件详情

#### 导航箭头 (Nav Arrow)
```jsx
左箭头文本: "‹"
右箭头文本: "›"
字体大小: 20px
颜色: #333
功能: 时间导航
```

#### 日期时间显示 (DateTime)
```jsx
示例内容: "2025/6/18 20:00"
字体大小: 16px
字体粗细: 500
颜色: #333
位置: 居中
```

---

## 📊 四、信息显示区域 (Info Container)

### 📏 容器尺寸
```jsx
样式名称: infoContainer
布局方式: flexDirection: 'row'
对齐方式: justifyContent: 'space-between'
内边距: 
  - paddingHorizontal: 20px
  - paddingVertical: 15px
边距: 
  - marginHorizontal: 15px
  - marginBottom: 20px
背景色: white
圆角: borderRadius: 10px
```

### 💚 状态容器 (Status Container)
```jsx
样式名称: statusContainer
布局: flex: 1

标签文字:
  - 内容: "状态"
  - 颜色: #666
  - 字体大小: 14px
  - 底部边距: marginBottom: 8px

状态值容器:
  - 布局: flexDirection: 'row', alignItems: 'center'
  - CheckIcon图标: 
    * 尺寸: 24×24px
    * 颜色: #4caf50 (绿色)
    * 类型: SVG路径图标
  - 状态文字:
    * 内容: "正常 窦性心律"
    * 颜色: #000
    * 字体大小: 16px
    * 左边距: marginLeft: 8px
```

### ❤️ 心率容器 (Heart Rate Container)
```jsx
样式名称: heartRateContainer
布局: flex: 1
对齐: alignItems: 'flex-end'

标签文字:
  - 内容: "心率"
  - 颜色: #666
  - 字体大小: 14px
  - 底部边距: marginBottom: 8px

心率数值:
  - 内容: "82 bpm"
  - 颜色: #000
  - 字体大小: 20px
  - 字体粗细: bold
```

---

## 📈 五、心电图表容器 (Chart Container)

### 📏 容器尺寸
```jsx
样式名称: chartContainer
对齐: alignItems: 'center'
边距: 
  - marginHorizontal: 15px
  - marginBottom: 20px
背景色: white
圆角: borderRadius: 10px
内边距: paddingVertical: 20px
```

### 📊 SVG心电图表 (ECG Chart)
```jsx
SVG尺寸: 
  - height: 200px
  - width: 350px
背景色: #fff

网格系统:
  - Pattern ID: "grid"
  - patternUnits: "userSpaceOnUse"
  - 网格尺寸: width: 10px, height: 10px
  - 网格样式:
    * fill: "none"
    * stroke: "#e0e0e0"
    * strokeWidth: "0.5"

心电图波形:
  - 组件: Polyline
  - 描边: stroke: "#2196f3" (蓝色)
  - 线宽: strokeWidth: "2"
  - 线条样式: strokeLinecap: "round", strokeLinejoin: "round"
  - 填充: fill: "none"
  - 数据点: 18个坐标点，模拟心电图波形
```

### 🕐 时间刻度 (Time Scale)
```jsx
样式名称: timeScale
布局方式: flexDirection: 'row'
对齐方式: justifyContent: 'space-between'
宽度: 350px
内边距: paddingHorizontal: 20px
顶部边距: marginTop: 10px

时间标签:
  - 内容: ["-1", "0", "1"]
  - 颜色: #666
  - 字体大小: 12px
```

---

## 🎮 六、操作按钮区域

### ▶️ 播放按钮 (Play Button)
```jsx
样式名称: playButton
背景色: #4caf50 (绿色)
边距: 
  - marginHorizontal: 15px
  - marginBottom: 20px
内边距: paddingVertical: 15px
圆角: borderRadius: 10px
对齐: alignItems: 'center'

按钮文字:
  - 内容: "▶ 播放心电图"
  - 颜色: #fff
  - 字体大小: 16px
  - 字体粗细: bold
```

### 📊 测量按钮 (Measure Button)
```jsx
样式名称: measureButton
背景色: #007aff (蓝色)
边距: 
  - marginHorizontal: 15px
  - marginBottom: 20px
内边距: paddingVertical: 15px
圆角: borderRadius: 10px
对齐: alignItems: 'center'

按钮文字:
  - 内容: "▶ 测量心电图"
  - 颜色: #fff
  - 字体大小: 16px
  - 字体粗细: bold
```

---

## 📋 七、状态描述区域 (Status Description)

### 📏 容器尺寸
```jsx
样式名称: statusDescription
内边距: padding: 20px
边距: 
  - marginHorizontal: 15px
  - marginBottom: 20px
背景色: white
圆角: borderRadius: 10px
```

### 📝 文本内容
```jsx
标题:
  - 内容: "状态"
  - 颜色: #000
  - 字体大小: 16px
  - 字体粗细: bold
  - 底部边距: marginBottom: 10px

描述文字:
  - 颜色: #666
  - 字体大小: 14px
  - 行高: lineHeight: 20px
  - 内容: 健康状态详细描述
```

---

## 📖 八、章节容器 (Section Container)

### 📏 通用章节样式
```jsx
样式名称: sectionContainer
背景色: white
边距: 
  - marginHorizontal: 15px
  - marginBottom: 20px
圆角: borderRadius: 10px
内边距: padding: 20px

章节标题:
  - 颜色: #000
  - 字体大小: 18px
  - 字体粗细: bold
  - 底部边距: marginBottom: 15px
```

### 📋 健康日记章节

#### 时间条目 (Time Entry)
```jsx
样式名称: timeEntry
内容: "20:00"
颜色: #333
字体大小: 16px
字体粗细: 500
底部边距: marginBottom: 15px
```

#### 健康条目 (Health Entry)
```jsx
样式名称: healthEntry
布局方式: flexDirection: 'row'
对齐方式: justifyContent: 'space-between', alignItems: 'center'
底部边距: marginBottom: 15px

左侧内容:
  - 布局: flexDirection: 'row', alignItems: 'center'
  - CheckIcon图标 + 文字 "心电图"
  - 文字颜色: #000
  - 文字大小: 16px
  - 图标左边距: marginLeft: 10px

右侧内容:
  - 布局: flexDirection: 'row', alignItems: 'center'
  - 状态文字: "正常"
  - 状态颜色: #4caf50
  - 状态字体: 14px bold
  - 箭头符号: "›" (颜色: #666, 大小: 20px)
```

#### 操作按钮组 (Action Buttons)
```jsx
样式名称: actionButtons
布局方式: flexDirection: 'row'
对齐方式: justifyContent: 'space-between'
顶部边距: marginTop: 15px

添加日志按钮:
  - 样式名称: addLogButton
  - 背景色: white
  - 边框: borderWidth: 1, borderColor: '#007aff'
  - 内边距: paddingVertical: 12px, paddingHorizontal: 30px
  - 圆角: borderRadius: 20px
  - 宽度: flex: 0.45
  - 对齐: alignItems: 'center'
  - 文字颜色: #007aff
  - 文字大小: 14px bold

探索按钮:
  - 样式名称: exploreButton
  - 背景色: #007aff
  - 内边距: paddingVertical: 12px, paddingHorizontal: 30px
  - 圆角: borderRadius: 20px
  - 宽度: flex: 0.45
  - 对齐: alignItems: 'center'
  - 文字颜色: white
  - 文字大小: 14px bold
```

---

## 🏥 九、临床服务卡片 (Clinical Card)

### 📏 容器尺寸
```jsx
样式名称: clinicalCard
布局方式: flexDirection: 'row'
对齐方式: justifyContent: 'space-between', alignItems: 'center'
内边距: padding: 15px
圆角: borderRadius: 10px
背景色: #f0f0f5
```

### 👨‍⚕️ 医生信息区域
```jsx
医生徽章:
  - 样式名称: doctorBadge
  - 背景色: #4caf50
  - 尺寸: width: 25px, height: 25px
  - 圆角: borderRadius: 12.5px
  - 对齐: justifyContent: 'center', alignItems: 'center'
  - 右边距: marginRight: 10px
  - 文字: "M" (白色, 14px, bold)

临床文字信息:
  - 左边距: marginLeft: 10px
  - 标题: "Cardio Check-Up" (#000, 16px, bold)
  - 副标题: "心脏病专家在24小时内进行检查" (#666, 12px)

医生头像:
  - 尺寸: width: 40px, height: 40px
  - 圆角: borderRadius: 20px
  - 背景色: #e0e0e0
  - 对齐: justifyContent: 'center', alignItems: 'center'
  - 占位符: "👨🏾‍⚕️" (20px)
```

---

## 📤 十、分享选项 (Share Options)

### 📏 选项容器
```jsx
样式名称: shareOption
布局方式: flexDirection: 'row'
对齐方式: justifyContent: 'space-between', alignItems: 'center'
内边距: paddingVertical: 15px
底部边框: borderBottomWidth: 0.5, borderBottomColor: '#eee'
```

### 📋 选项内容
```jsx
左侧内容:
  - 布局: flexDirection: 'row', alignItems: 'center'
  - 图标: 各种emoji (📋, 📄, 📊)
  - 图标大小: 20px
  - 图标右边距: marginRight: 10px
  - 选项文字: #000, 16px

分享选项列表:
  1. "分享 HealthLink" (图标: 📋)
  2. "以 PDF 格式分享此测量结果" (图标: 📄) 
  3. "分享完整的健康报告" (图标: 📊)

右侧箭头:
  - 符号: "›"
  - 颜色: #666
  - 大小: 20px
```

---

## 📚 十一、学习信息区域 (Learn More Section)

### 🔗 学习链接
```jsx
样式名称: learnMoreLink
内容: "了解更多关于心电图的信息"
颜色: #007aff
文本装饰: textDecorationLine: 'underline'
对齐: textAlign: 'center'
边距: marginTop: 20px, marginBottom: 10px
```

### 📋 信息卡片 (Info Cards)
```jsx
样式名称: infoCard
背景色: #f8f8f8
圆角: borderRadius: 10px
内边距: padding: 20px
底部边距: marginBottom: 15px
边框: borderWidth: 1, borderColor: '#e0e0e0'

信息文字:
  - 颜色: #333
  - 字体大小: 15px
  - 行高: lineHeight: 22px
  - 底部边距: marginBottom: 10px

信息来源:
  - 颜色: #007aff
  - 字体大小: 14px
  - 顶部边距: marginTop: 10px

图片占位符:
  - 高度: height: 180px
  - 对齐: justifyContent: 'flex-end'
  - 内边距: padding: 20px
  - 背景色: #e8e8e8
  - 标题: #000, 22px, bold
  - 副标题: #666, 16px, marginTop: 8px
```

---

## 📊 十二、参数详解区域 (Details Section)

### 📏 详解标题
```jsx
样式名称: detailsHeader
内容: "参数详解"
颜色: #000
字体大小: 18px
字体粗细: bold
边距: marginHorizontal: 15px, marginBottom: 10px
```

### 📈 详解卡片
```jsx
样式名称: detailsCard
布局方式: flexDirection: 'row'
对齐方式: alignItems: 'center'
边距: marginHorizontal: 15px, marginBottom: 20px
背景色: white
圆角: borderRadius: 10px
内边距: padding: 15px

图标:
  - 样式名称: detailsIcon
  - 内容: "📈"
  - 字体大小: 24px
  - 右边距: marginRight: 10px

文字:
  - 样式名称: detailsText
  - 内容: "心电图分析"
  - 颜色: #000
  - 字体大小: 16px
  - 字体粗细: 500
```

---

## 🎨 总体设计规范

### 🌈 颜色系统
```jsx
主要颜色:
  - 主背景: #f2f2f7 (浅灰)
  - 卡片背景: white
  - 主要文字: #000
  - 次要文字: #666, #333
  - 强调色: #007aff (蓝色)
  - 成功色: #4caf50 (绿色)
  - 心电图线: #2196f3 (蓝色)

阴影系统:
  - shadowColor: #000
  - shadowOffset: {width: 0, height: 1}
  - shadowOpacity: 0.1
  - shadowRadius: 2
  - elevation: 3
```

### 📐 尺寸规范
```jsx
边距规范:
  - 页面水平边距: 15px
  - 卡片内边距: 20px
  - 组件间距: 20px
  - 小间距: 8px, 10px

圆角规范:
  - 卡片圆角: 10px
  - 按钮圆角: 8px, 10px, 20px
  - 小元素圆角: 12.5px

字体规范:
  - 大标题: 18px bold
  - 副标题: 16px 500/bold
  - 正文: 14px, 15px, 16px
  - 小文字: 12px
  - 数值显示: 20px bold
```

---

## 📱 响应式设计

### 🔄 适配说明
- 使用React Native的Flexbox布局系统
- 水平边距使用marginHorizontal确保两侧对称
- 使用flex: 1实现自适应宽度
- SVG图表固定尺寸350×200px适配大部分设备
- 字体大小使用sp单位，支持系统字体缩放

### 📊 组件层次结构
```
ScrollView (容器)
├── Header (导航栏)
├── ModeToggle (模式切换)
├── DateTimeContainer (时间导航)
├── InfoContainer (状态信息)
├── ChartContainer (心电图表)
├── PlayButton (播放按钮)
├── MeasureButton (测量按钮)
├── StatusDescription (状态描述)
├── SectionContainer (健康日记)
├── SectionContainer (临床服务)
├── SectionContainer (分享选项)
├── LearnMoreSection (学习信息)
└── DetailsSection (参数详解)
```

此文档涵盖了心电图界面的所有UI组件，包括详细的尺寸、样式、颜色和布局信息，可作为开发和设计的完整参考。 
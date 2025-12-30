# 安装和使用指南

## 安装步骤

### 自动安装（已完成）
插件已安装在以下路径：
```
E:\ComfyUI-aki-v2\ComfyUI\custom_nodes\Lang_Translator
```

### 手动安装（如需重新安装）
1. 将整个 `Lang_Translator` 文件夹复制到ComfyUI的 `custom_nodes` 目录
2. 重启ComfyUI

## 使用方法

### 1. 启动ComfyUI
正常启动你的ComfyUI应用程序。

### 2. 查找语言切换按钮
启动后，在ComfyUI界面的**右上角**会出现一个悬浮的语言切换按钮。

按钮特征：
- 位置：界面右上角，距离右边缘约80px
- 外观：半透明黑色背景，带有翻译图标
- 显示：当前语言（"中文" 或 "EN"）

### 3. 切换语言
- 点击按钮
- 页面中央会显示切换提示（"切换到中文..." 或 "Switching to English..."）
- 1秒后页面自动刷新
- 刷新后界面语言已切换

### 4. 确认切换
切换后可以通过以下方式确认：
- 查看按钮上的文字（中文/EN）
- 查看ComfyUI界面的语言显示

## 技术细节

### 工作原理
1. 插件通过JavaScript扩展机制注入到ComfyUI前端
2. 读取 `localStorage` 中的语言设置（`Comfy.Settings.Comfy.Locale`）
3. 点击按钮时切换语言设置
4. 刷新页面应用新语言

### 支持的语言
- 中文 (`zh`)
- 英文 (`en`)

### localStorage键名
插件会检查以下键名：
- `Comfy.Settings.Comfy.Locale`
- `Comfy.Locale`

### 浏览器兼容性
- Chrome/Edge: ✅ 完全支持
- Firefox: ✅ 完全支持
- Safari: ✅ 完全支持
- Opera: ✅ 完全支持

## 故障排除

### 问题1：按钮没有出现
**解决方案：**
1. 确认ComfyUI已完全加载
2. 按 F12 打开开发者工具，查看控制台是否有错误
3. 检查控制台是否显示 "Lang_Translator: 语言切换按钮已加载"
4. 重启ComfyUI

### 问题2：点击按钮没有反应
**解决方案：**
1. 打开浏览器开发者工具（F12）
2. 查看控制台输出
3. 确认localStorage是否可用
4. 清除浏览器缓存后重试

### 问题3：语言没有切换
**解决方案：**
1. 确认页面已经刷新
2. 手动刷新页面（Ctrl+R 或 F5）
3. 检查localStorage中的语言设置是否已更改：
   - 打开开发者工具 → Application/应用程序 → Storage/存储 → Local Storage
   - 查找 `Comfy.Settings.Comfy.Locale` 的值

### 问题4：按钮位置不理想
**解决方案：**
如需调整按钮位置，编辑 `js/lang_translator.js` 文件：
```javascript
// 第52-53行
right: 80px;  // 调整距离右边的距离
top: 10px;    // 调整距离顶部的距离
```

## 调试模式

要查看详细的调试信息：
1. 打开浏览器开发者工具（F12）
2. 切换到 Console（控制台）标签
3. 点击语言切换按钮
4. 查看输出的调试信息：
   - "当前语言设置: ..."
   - "切换语言到: ..."
   - "Lang_Translator: 语言切换按钮已加载"

## 卸载

如需卸载插件：
1. 关闭ComfyUI
2. 删除 `custom_nodes/Lang_Translator` 文件夹
3. 重启ComfyUI

## 联系支持

如有问题或建议，请查看 README.md 文件或联系开发者。


# 快速测试指南 / Quick Test Guide

## 测试步骤

### 第一步：启动ComfyUI
1. 打开命令提示符或PowerShell
2. 进入ComfyUI目录：
```bash
cd E:\ComfyUI-aki-v2
```
3. 启动ComfyUI（根据你的启动方式）

### 第二步：检查按钮是否出现
1. 等待ComfyUI完全加载
2. 在浏览器中查看ComfyUI界面
3. 在**右上角**查找语言切换按钮
   - 应该看到一个半透明的按钮
   - 按钮上显示 "中文" 或 "EN"
   - 按钮带有翻译图标

### 第三步：测试悬停效果
1. 将鼠标移到按钮上
2. 按钮应该：
   - 变成蓝色背景
   - 稍微放大（scale 1.05）
   - 显示提示文本（tooltip）

### 第四步：测试切换功能
1. 点击语言切换按钮
2. 应该看到：
   - 屏幕中央显示切换提示
   - 提示文字："切换到中文..." 或 "Switching to English..."
   - 1秒后页面自动刷新

### 第五步：验证语言已切换
1. 页面刷新后，检查：
   - ComfyUI界面语言是否已改变
   - 按钮上的文字是否已更新
   - 菜单、设置等界面元素是否使用新语言

### 第六步：测试往返切换
1. 再次点击按钮
2. 应该切换回原来的语言
3. 验证切换是否正常工作

## 开发者调试

### 打开开发者工具
1. 在ComfyUI界面按 `F12`
2. 切换到 `Console` 标签

### 检查插件是否加载
在控制台中应该看到：
```
Lang_Translator: 语言切换按钮已加载
```

### 查看当前语言设置
在控制台输入：
```javascript
localStorage.getItem("Comfy.Settings.Comfy.Locale")
```
应该返回类似 `"zh"` 或 `"en"` 的值

### 手动切换语言
在控制台输入：
```javascript
// 切换到中文
localStorage.setItem("Comfy.Settings.Comfy.Locale", '"zh"');
location.reload();

// 或切换到英文
localStorage.setItem("Comfy.Settings.Comfy.Locale", '"en"');
location.reload();
```

### 检查按钮元素
在控制台输入：
```javascript
document.getElementById("lang-switch-btn")
```
应该返回按钮元素对象

## 常见测试结果

### ✅ 成功
- 按钮出现在右上角
- 悬停效果正常
- 点击后页面刷新
- 语言成功切换
- 控制台显示 "Lang_Translator: 语言切换按钮已加载"

### ❌ 失败 - 按钮未出现
**可能原因：**
1. ComfyUI未完全加载
2. JavaScript文件加载失败
3. 插件目录位置不正确

**解决方案：**
1. 刷新页面（Ctrl+R）
2. 检查控制台错误信息
3. 确认插件在 `custom_nodes/Lang_Translator` 目录
4. 重启ComfyUI

### ❌ 失败 - 点击无效
**可能原因：**
1. JavaScript错误
2. localStorage被禁用
3. 按钮事件未绑定

**解决方案：**
1. 查看控制台错误
2. 确认浏览器允许localStorage
3. 检查 `js/lang_translator.js` 文件是否完整

### ❌ 失败 - 语言未切换
**可能原因：**
1. localStorage键名不匹配
2. ComfyUI使用不同的语言存储方式
3. 页面未刷新

**解决方案：**
1. 手动刷新页面
2. 检查ComfyUI设置中的语言选项
3. 查看localStorage中的实际键名

## 性能测试

### 检查资源占用
1. 打开开发者工具 → Performance（性能）
2. 录制一次语言切换操作
3. 确认：
   - 切换响应时间 < 100ms
   - 页面刷新正常
   - 无内存泄漏

### 检查网络请求
1. 开发者工具 → Network（网络）
2. 刷新页面
3. 确认 `lang_translator.js` 已加载
4. 状态码应为 200

## 测试清单

- [ ] 按钮成功显示在右上角
- [ ] 按钮显示当前语言（中文/EN）
- [ ] 鼠标悬停时按钮变蓝色并放大
- [ ] 点击按钮显示切换提示
- [ ] 页面在1秒后自动刷新
- [ ] 刷新后语言已切换
- [ ] 可以在中英文之间来回切换
- [ ] 控制台显示加载成功信息
- [ ] 无JavaScript错误

## 报告问题

如果测试失败，请收集以下信息：
1. ComfyUI版本
2. 浏览器类型和版本
3. 控制台错误信息（截图）
4. 复现步骤
5. localStorage内容（截图）

然后参考 INSTALL.md 中的故障排除部分。


# 更新日志 / Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [1.0.0] - 2025-01-XX

### Added / 新增
- ✨ 初始版本发布
- 🎯 支持中英文一键切换
- 🔥 使用ComfyUI官方API实现热更新
- 🎨 按钮自动融入ComfyUI工具栏
- 💾 语言设置自动保存
- 📱 响应式设计，自适应窗口大小

### Features / 功能
- 点击按钮快速切换语言
- 热更新，无需刷新页面
- 自动适配ComfyUI工具栏高度和位置
- 悬停效果和过渡动画
- 完全不修改ComfyUI源代码

### Technical / 技术细节
- 使用 `app.registerExtension` 注册扩展
- 调用 `app.ui.settings.setSettingValue` 切换语言
- localStorage 存储语言偏好
- 自动查找并插入到 `.actionbar-container`

---

## 版本说明 / Version Notes

### [未来计划] Future Plans
- [ ] 支持更多语言（如果ComfyUI官方支持）
- [ ] 添加快捷键支持
- [ ] 自定义按钮位置
- [ ] 动画效果配置

---

[1.0.0]: https://github.com/YOUR_USERNAME/Lang_Translator/releases/tag/v1.0.0

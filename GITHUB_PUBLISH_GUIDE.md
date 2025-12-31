# GitHub 发布指南

## 📝 发布前准备

### 1. 准备截图

在项目根目录创建 `images` 文件夹，并添加以下截图：

```bash
mkdir images
```

需要的截图：
- `button-position.png` - 按钮在ComfyUI中的位置
- `chinese-ui.png` - 中文界面截图
- `english-ui.png` - 英文界面截图
- `demo.gif` - 切换语言的动图演示（可选）

### 2. 修改 README.md

在 `README.md` 中找到以下位置并取消注释：

```markdown
<!-- 请添加截图到 images 文件夹，然后取消下面的注释 -->
<!--
![按钮位置](images/button-position.png)
*按钮位于ComfyUI工具栏*
...
-->
```

改为：

```markdown
![按钮位置](images/button-position.png)
*按钮位于ComfyUI工具栏*

![中文界面](images/chinese-ui.png)
*中文界面*

![英文界面](images/english-ui.png)
*英文界面*
```

### 3. 更新个人信息

替换以下占位符：
- `YOUR_USERNAME` → 你的GitHub用户名
- 更新 CHANGELOG.md 中的日期

## 🚀 发布到 GitHub

### 步骤 1：在GitHub创建仓库

1. 登录 GitHub
2. 点击右上角 `+` → `New repository`
3. 仓库名称：`Lang_Translator` 或 `ComfyUI-Language-Switcher`
4. 描述：`A simple language switcher for ComfyUI`
5. 选择 `Public`
6. **不要**勾选 `Add a README file`（我们已经有了）
7. 点击 `Create repository`

### 步骤 2：初始化本地Git仓库

在项目目录打开终端，执行：

```bash
# 初始化Git
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: ComfyUI Language Switcher v1.0.0"

# 添加远程仓库（替换YOUR_USERNAME）
git remote add origin https://github.com/YOUR_USERNAME/Lang_Translator.git

# 推送到GitHub
git branch -M main
git push -u origin main
```

### 步骤 3：创建Release

1. 在GitHub仓库页面，点击右侧 `Releases` → `Create a new release`
2. 标签版本：`v1.0.0`
3. 发布标题：`v1.0.0 - Initial Release`
4. 发布说明：

```markdown
## 🎉 首次发布

### ✨ 功能特性
- 一键切换中英文
- 热更新，无需刷新页面
- 自动融入ComfyUI工具栏
- 完全不修改ComfyUI源代码

### 📦 安装方法
```bash
cd ComfyUI/custom_nodes
git clone https://github.com/YOUR_USERNAME/Lang_Translator.git
```

### 🐛 已知问题
无

### 📝 使用说明
请查看 [README.md](https://github.com/YOUR_USERNAME/Lang_Translator#readme)
```

5. 点击 `Publish release`

## 📢 推广你的插件

### 1. 在ComfyUI社区发布

- ComfyUI Discord
- ComfyUI Reddit
- ComfyUI QQ群

### 2. 添加到ComfyUI插件列表

提交PR到ComfyUI的插件列表：
- https://github.com/ltdrdata/ComfyUI-Manager

### 3. 社交媒体分享

- Twitter/X
- Reddit r/comfyui
- 知乎

## 🔄 后续维护

### 更新代码

```bash
# 修改代码后
git add .
git commit -m "描述你的修改"
git push
```

### 发布新版本

1. 更新 `CHANGELOG.md`
2. 创建新的 Release
3. 标签使用语义化版本：`v1.1.0`, `v1.2.0` 等

## 📊 监控反馈

- 关注GitHub Issues
- 回复用户问题
- 收集功能建议
- 定期更新文档

## ✅ 检查清单

发布前确认：

- [ ] 所有截图已添加
- [ ] README.md 中的占位符已替换
- [ ] LICENSE 文件已包含
- [ ] .gitignore 已配置
- [ ] 代码已测试
- [ ] CHANGELOG.md 已更新
- [ ] 版本号统一
- [ ] 链接都正确

---

祝发布顺利！🎉




# 🚀 微连 WeConnect - APK 打包终极指南

您可以选择以下两种方式之一来获得安装包：

## 选项 A：GitHub 自动打包（推荐，无需配置环境）
1. **上传代码**：在 GitHub 新建仓库，将本项目所有文件（包括 `.github` 文件夹）上传。
2. **等待构建**：点击仓库顶部的 **Actions** 菜单，你会看到 "Build Android APK" 正在运行。
3. **获取安装包**：大约 3-5 分钟后，点击完成的任务，在页面底部的 **Artifacts** 区域下载 `weconnect-app-debug` 压缩包，解压后即得 APK。

## 选项 B：本地电脑打包（适合开发者）
如果您想在本地电脑构建，请确保已安装 **Node.js**, **JDK 17** 和 **Android Studio**：

1. **安装依赖**：
   ```bash
   npm install
   ```
2. **初始化 Capacitor**：
   ```bash
   npx cap init WeConnect com.weconnect.app --web-dir .
   ```
3. **添加安卓平台**：
   ```bash
   npx cap add android
   ```
4. **同步代码并打开 Android Studio**：
   ```bash
   npx cap sync android
   npx cap open android
   ```
5. **生成 APK**：在 Android Studio 中，点击菜单栏 `Build` -> `Build Bundle(s) / APK(s)` -> `Build APK(s)`。

---
**常见问题：**
- **安装失败**：请在手机设置中开启“允许安装未知来源应用”。
- **API 无法使用**：请确保在 GitHub Secrets 中配置了您的 `API_KEY`，或者在打包前的代码中填入有效的 Gemini Key。

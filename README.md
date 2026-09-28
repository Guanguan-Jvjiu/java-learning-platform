# Java 交互式学习平台

一个专为有 C/C++ 基础的同学设计的 Java 学习桌面应用，提供系统化的学习路径、互动练习和进度跟踪。

##  功能特点

-  **系统学习路径**: 9大章节，从基础到进阶循序渐进
-  **闯关模式**: 完成测验解锁新章节，保持学习动力
-  **代码示例**: 丰富的实战案例和代码编辑器
-  **个性化体验**: 29种背景图、15首背景音乐可选
-  **进度保存**: 自动保存学习进度，随时继续
-  **桌面应用**: 基于 pywebview 的原生桌面体验

## 📖 学习内容

1. Java 基础概念
2. 面向对象编程
3. 异常处理
4. 集合框架
5. 泛型
6. 多线程
7. I/O 流
8. Lambda 表达式
9. Stream API

##  运行方式

### 方式一：直接运行（Windows）

双击 `dist/Java学习平台.exe` 即可启动。

### 方式二：从源码运行

需要 Python 3.8+ 和以下依赖：

```bash
pip install pywebview
```

然后运行：

```bash
python launcher.py
```

##  打包为可执行文件

使用 PyInstaller 打包：

```bash
pip install pyinstaller
pyinstaller build.spec
```

打包后的可执行文件位于 `dist/` 目录。

##  项目结构

```
java/
├── index.html          # 主界面
├── app.js             # 应用逻辑
├── styles.css         # 样式文件
├── shop.js            # 商店配置
├── shop-styles.css    # 商店样式
├── data.js            # 学习内容数据
├── launcher.py        # 应用启动器
├── build.spec         # PyInstaller 配置
├── backgrounds/       # 背景图片资源
└── music/            # 背景音乐资源
```

##  技术栈

- **前端**: HTML5 + CSS3 + JavaScript
- **桌面框架**: pywebview (PyQt5 WebEngine)
- **打包工具**: PyInstaller

##  开发说明

- 用户进度保存在本地的 `user_progress.json` 文件中
- 所有背景图片和音乐均已解锁，无需购买
- 支持自定义添加更多学习内容（编辑 `data.js`）

##  许可证

MIT License

---

**祝学习愉快!  **

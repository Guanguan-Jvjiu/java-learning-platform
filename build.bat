@echo off
chcp 65001 >nul
echo ====================================
echo   Java学习平台 - 打包脚本
echo ====================================
echo.

echo [1/4] 清理旧的构建文件...
if exist build rmdir /s /q build
if exist dist rmdir /s /q dist
echo 清理完成！
echo.

echo [2/4] 检查依赖...
python -c "import pyinstaller" 2>nul
if errorlevel 1 (
    echo PyInstaller 未安装，正在安装...
    pip install pyinstaller
    if errorlevel 1 (
        echo 错误：安装 PyInstaller 失败！
        pause
        exit /b 1
    )
)
echo 依赖检查完成！
echo.

echo [3/4] 开始打包应用...
pyinstaller build.spec --clean
if errorlevel 1 (
    echo 错误：打包失败！
    pause
    exit /b 1
)
echo 打包完成！
echo.

echo [4/4] 清理临时文件...
if exist build rmdir /s /q build
echo 清理完成！
echo.

echo ====================================
echo   打包成功！
echo ====================================
echo.
echo 可执行文件位置: dist\Java学习平台.exe
echo.
echo 你可以将 dist 文件夹分发给用户。
echo.
pause

@echo off
chcp 65001 >nul
echo ====================================
echo   创建分发包
echo ====================================
echo.

set PACKAGE_NAME=Java学习平台_v1.0
set DIST_DIR=dist
set PACKAGE_DIR=%PACKAGE_NAME%

echo [1/3] 准备分发文件夹...
if exist %PACKAGE_DIR% rmdir /s /q %PACKAGE_DIR%
mkdir %PACKAGE_DIR%

echo [2/3] 复制文件...
copy "%DIST_DIR%\Java学习平台.exe" "%PACKAGE_DIR%\"
copy "%DIST_DIR%\使用说明.txt" "%PACKAGE_DIR%\"

echo [3/3] 创建压缩包...
powershell Compress-Archive -Path "%PACKAGE_DIR%\*" -DestinationPath "%PACKAGE_NAME%.zip" -Force

echo.
echo ====================================
echo   分发包创建完成！
echo ====================================
echo.
echo 文件位置: %PACKAGE_NAME%.zip
echo 文件大小:
dir "%PACKAGE_NAME%.zip" | find ".zip"
echo.
echo 你可以将这个 ZIP 文件分发给用户。
echo.
pause

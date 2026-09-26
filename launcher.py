import webview
import os
import sys
import json
import threading
from http.server import HTTPServer, SimpleHTTPRequestHandler
import socket

# 优化性能参数：避免 NVIDIA 覆盖层冲突，同时启用硬件加速
os.environ['QTWEBENGINE_CHROMIUM_FLAGS'] = '--disable-gpu-process-crash-limit --disable-features=OverlayScrollbar --enable-gpu-rasterization --enable-zero-copy --num-raster-threads=4'

class API:
    def __init__(self):
        self.save_dir = self.get_save_dir()
        self.music_dir = self.get_music_dir()
        self.window = None

    def get_save_dir(self):
        """获取存档目录路径"""
        if sys.platform == 'win32':
            save_dir = os.path.join(os.path.expanduser('~'), 'AppData', 'Local', 'JavaLearning', 'saves')
        else:
            save_dir = os.path.join(os.path.expanduser('~'), '.java_learning', 'saves')

        os.makedirs(save_dir, exist_ok=True)
        return save_dir

    def get_music_dir(self):
        """获取音乐配置目录路径"""
        if sys.platform == 'win32':
            music_dir = os.path.join(os.path.expanduser('~'), 'AppData', 'Local', 'JavaLearning')
        else:
            music_dir = os.path.join(os.path.expanduser('~'), '.java_learning')

        os.makedirs(music_dir, exist_ok=True)
        return music_dir

    def get_save_slots(self):
        """获取所有存档位信息"""
        try:
            slots = []
            for i in range(1, 6):  # 5个存档位
                slot_path = os.path.join(self.save_dir, f'slot_{i}.json')
                if os.path.exists(slot_path):
                    with open(slot_path, 'r', encoding='utf-8') as f:
                        data = json.load(f)
                        slots.append({
                            'slot': i,
                            'exists': True,
                            'playerName': data.get('playerName', f'玩家{i}'),
                            'level': data.get('level', 1),
                            'xp': data.get('xp', 0),
                            'completedChapters': len(data.get('completedChapters', [])),
                            'lastSaved': data.get('lastSaved', '')
                        })
                else:
                    slots.append({
                        'slot': i,
                        'exists': False
                    })
            return {'success': True, 'slots': slots}
        except Exception as e:
            return {'success': False, 'error': str(e)}

    def save_to_slot(self, slot, progress_data, player_name):
        """保存进度到指定存档位"""
        try:
            slot_path = os.path.join(self.save_dir, f'slot_{slot}.json')
            from datetime import datetime

            save_data = progress_data.copy()
            save_data['playerName'] = player_name
            save_data['lastSaved'] = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

            with open(slot_path, 'w', encoding='utf-8') as f:
                json.dump(save_data, f, ensure_ascii=False, indent=2)
            return {'success': True}
        except Exception as e:
            return {'success': False, 'error': str(e)}

    def load_from_slot(self, slot):
        """从指定存档位读取进度"""
        try:
            slot_path = os.path.join(self.save_dir, f'slot_{slot}.json')
            if os.path.exists(slot_path):
                with open(slot_path, 'r', encoding='utf-8') as f:
                    return {'success': True, 'data': json.load(f)}
            return {'success': False, 'error': '存档不存在'}
        except Exception as e:
            return {'success': False, 'error': str(e)}

    def delete_slot(self, slot):
        """删除指定存档位"""
        try:
            slot_path = os.path.join(self.save_dir, f'slot_{slot}.json')
            if os.path.exists(slot_path):
                os.remove(slot_path)
            return {'success': True}
        except Exception as e:
            return {'success': False, 'error': str(e)}

    def get_music_preferences(self):
        """获取音乐偏好设置"""
        try:
            prefs_path = os.path.join(self.music_dir, 'music_preferences.json')
            if os.path.exists(prefs_path):
                with open(prefs_path, 'r', encoding='utf-8') as f:
                    return {'success': True, 'preferences': json.load(f)}
            return {'success': True, 'preferences': {}}
        except Exception as e:
            return {'success': False, 'error': str(e)}

    def save_music_preferences(self, preferences):
        """保存音乐偏好设置"""
        try:
            prefs_path = os.path.join(self.music_dir, 'music_preferences.json')
            with open(prefs_path, 'w', encoding='utf-8') as f:
                json.dump(preferences, f, ensure_ascii=False, indent=2)
            return {'success': True}
        except Exception as e:
            return {'success': False, 'error': str(e)}

    def get_music_list(self):
        """获取音乐列表（内置+自定义）"""
        try:
            music_list = []

            # 获取内置音乐
            builtin_music_path = get_resource_path('music')
            print(f"[DEBUG] 内置音乐路径: {builtin_music_path}")
            print(f"[DEBUG] 路径是否存在: {os.path.exists(builtin_music_path)}")

            if os.path.exists(builtin_music_path):
                files = os.listdir(builtin_music_path)
                print(f"[DEBUG] music文件夹内容: {files}")
                for filename in files:
                    if filename.lower().endswith(('.mp3', '.wav', '.ogg', '.m4a')):
                        full_path = os.path.join(builtin_music_path, filename)
                        print(f"[DEBUG] 找到音乐文件: {filename}")
                        music_list.append({
                            'name': os.path.splitext(filename)[0],
                            'filename': filename,
                            'type': 'builtin',
                            'duration': 0
                        })
            else:
                print(f"[DEBUG] music文件夹不存在！")

            # 获取自定义音乐
            prefs = self.get_music_preferences()
            if prefs.get('success') and prefs['preferences'].get('customMusicFolder'):
                custom_folder = prefs['preferences']['customMusicFolder']
                if os.path.exists(custom_folder):
                    for filename in os.listdir(custom_folder):
                        if filename.lower().endswith(('.mp3', '.wav', '.ogg', '.m4a')):
                            music_list.append({
                                'name': os.path.splitext(filename)[0],
                                'filename': filename,
                                'type': 'custom',
                                'duration': 0
                            })

            print(f"[DEBUG] 最终音乐列表: {music_list}")
            return {'success': True, 'musicList': music_list}
        except Exception as e:
            print(f"[ERROR] 获取音乐列表失败: {str(e)}")
            import traceback
            traceback.print_exc()
            return {'success': False, 'error': str(e)}

    def get_music_file(self, filename, file_type):
        """读取音乐文件内容"""
        try:
            import base64

            if file_type == 'builtin':
                file_path = os.path.join(get_resource_path('music'), filename)
            else:
                prefs = self.get_music_preferences()
                if not prefs.get('success') or not prefs['preferences'].get('customMusicFolder'):
                    return {'success': False, 'error': '未设置自定义音乐文件夹'}
                file_path = os.path.join(prefs['preferences']['customMusicFolder'], filename)

            if not os.path.exists(file_path):
                return {'success': False, 'error': '文件不存在'}

            with open(file_path, 'rb') as f:
                audio_data = f.read()
                ext = os.path.splitext(filename)[1][1:].lower()
                mime_type = f'audio/{ext}' if ext != 'mp3' else 'audio/mpeg'
                data_url = f'data:{mime_type};base64,' + base64.b64encode(audio_data).decode('utf-8')

                return {'success': True, 'dataUrl': data_url}
        except Exception as e:
            return {'success': False, 'error': str(e)}

    def select_custom_music_folder(self):
        """选择自定义音乐文件夹"""
        try:
            if self.window:
                folder = self.window.create_file_dialog(
                    webview.FOLDER_DIALOG,
                    directory=os.path.expanduser('~')
                )

                if folder and len(folder) > 0:
                    selected_folder = folder[0]

                    # 统计音乐文件数量
                    count = 0
                    for filename in os.listdir(selected_folder):
                        if filename.lower().endswith(('.mp3', '.wav', '.ogg', '.m4a')):
                            count += 1

                    # 保存到偏好设置
                    prefs = self.get_music_preferences()
                    if prefs.get('success'):
                        preferences = prefs.get('preferences', {})
                        preferences['customMusicFolder'] = selected_folder
                        self.save_music_preferences(preferences)

                    return {'success': True, 'folder': selected_folder, 'count': count}

                return {'success': False, 'error': '未选择文件夹'}
        except Exception as e:
            return {'success': False, 'error': str(e)}

    def close_window(self):
        """关闭窗口"""
        try:
            if self.window:
                self.window.destroy()
        except Exception as e:
            print(f"关闭窗口时出错: {e}")
        finally:
            import sys
            sys.exit(0)

def get_resource_path(relative_path):
    """获取资源文件的绝对路径"""
    try:
        # PyInstaller 打包后的路径
        base_path = sys._MEIPASS
    except Exception:
        # 开发环境路径
        base_path = os.path.abspath(".")

    return os.path.join(base_path, relative_path)

def find_free_port():
    """查找可用的端口"""
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(('', 0))
        s.listen(1)
        port = s.getsockname()[1]
    return port

def start_server(port):
    """启动 HTTP 服务器"""
    # 切换到资源目录
    resource_dir = get_resource_path('.')
    os.chdir(resource_dir)

    # 创建服务器
    server = HTTPServer(('127.0.0.1', port), SimpleHTTPRequestHandler)
    print(f"[INFO] HTTP 服务器启动在 http://127.0.0.1:{port}")
    server.serve_forever()

def main():
    global window

    # 查找可用端口
    port = find_free_port()

    # 在后台线程启动 HTTP 服务器
    server_thread = threading.Thread(target=start_server, args=(port,), daemon=True)
    server_thread.start()

    # 等待服务器启动
    import time
    time.sleep(0.5)

    # 创建 API 实例
    api = API()

    # 创建窗口，使用 HTTP URL
    window = webview.create_window(
        'Java 学习平台',
        f'http://127.0.0.1:{port}/index.html',
        width=1200,
        height=800,
        resizable=True,
        fullscreen=False,
        min_size=(800, 600),
        js_api=api
    )

    # 将窗口引用保存到 API 中，以便关闭
    api.window = window

    # 定义窗口显示后的回调
    def on_shown():
        """窗口显示后立即切换到全屏"""
        time.sleep(0.1)  # 等待窗口完全加载
        window.toggle_fullscreen()

    # 启动应用 - 使用 qt 引擎避免 WebView2 的 COM 线程问题
    try:
        webview.start(on_shown, gui='qt')
    except Exception as e:
        print(f"Qt 引擎启动失败，尝试默认引擎: {e}")
        webview.start(on_shown)

if __name__ == '__main__':
    main()

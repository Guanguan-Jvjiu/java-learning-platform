// 背景音乐播放器
class MusicPlayer {
    constructor() {
        this.audio = new Audio();
        this.playlist = [];
        this.currentIndex = 0;
        this.playMode = 'sequential'; // sequential, random, loop
        this.isPlaying = false;

        this.audio.addEventListener('ended', () => this.onTrackEnded());
        this.audio.addEventListener('timeupdate', () => this.updateProgress());
        this.audio.addEventListener('error', (e) => this.onError(e));

        this.loadPreferences();
    }

    async loadPreferences() {
        console.log('[DEBUG] loadPreferences 开始执行');
        console.log('[DEBUG] window.pywebview 存在吗?', !!window.pywebview);

        if (!window.pywebview) {
            alert('[调试] pywebview API 不可用！应用可能在浏览器中打开而不是桌面应用。');
            return;
        }

        try {
            const result = await window.pywebview.api.get_music_preferences();
            if (result.success) {
                const prefs = result.preferences;
                this.audio.volume = (prefs.volume || 50) / 100;
                this.playMode = 'loop'; // 固定为单曲循环

                document.getElementById('volumeSlider').value = prefs.volume || 50;
                document.getElementById('volumeValue').textContent = (prefs.volume || 50) + '%';
            }
        } catch (err) {
            console.error('加载音乐偏好失败:', err);
        }

        console.log('[DEBUG] 准备调用 loadMusicList');
        await this.loadMusicList();
        console.log('[DEBUG] loadMusicList 完成，playlist.length =', this.playlist.length);

        // 不再自动播放，等待用户交互后播放
        if (this.playlist.length === 0) {
            console.warn('[警告] 播放列表为空！没有找到音乐文件。');
        } else {
            console.log('[INFO] 音乐已加载，等待用户交互后播放');
        }
    }

    // 新增：开始播放音乐的公共方法
    startPlayback() {
        if (this.playlist.length > 0 && !this.isPlaying) {
            console.log('[DEBUG] 开始播放背景音乐');
            this.playTrack(0);
        }
    }

    async savePreferences() {
        if (!window.pywebview) return;

        const prefs = {
            enabled: true,
            volume: Math.round(this.audio.volume * 100),
            playMode: this.playMode,
            lastPlayed: this.playlist[this.currentIndex]?.path || '',
            lastPosition: this.audio.currentTime
        };

        try {
            await window.pywebview.api.save_music_preferences(prefs);
        } catch (err) {
            console.error('保存音乐偏好失败:', err);
        }
    }

    async loadMusicList() {
        console.log('[DEBUG] loadMusicList 开始执行');

        if (!window.pywebview) {
            console.log('[DEBUG] pywebview未加载，可能在浏览器中运行');
            alert('[DEBUG] pywebview未加载');
            this.playlist = [];
            this.renderPlaylist();
            return;
        }

        try {
            console.log('[DEBUG] 正在调用 get_music_list API...');
            const result = await window.pywebview.api.get_music_list();
            console.log('[DEBUG] get_music_list 返回结果:', result);

            // 在页面上显示调试信息
            const debugInfo = `音乐列表加载结果:\n成功: ${result.success}\n歌曲数量: ${result.musicList ? result.musicList.length : 0}\n详情: ${JSON.stringify(result, null, 2)}`;
            console.log(debugInfo);

            if (result.success) {
                this.playlist = result.musicList;
                console.log('[DEBUG] 播放列表已加载，共', this.playlist.length, '首歌曲');
                console.log('[DEBUG] 播放列表内容:', this.playlist);

                if (this.playlist.length === 0) {
                    alert('警告：music文件夹中没有找到音乐文件！\n请检查music文件夹是否被正确打包。');
                }

                this.renderPlaylist();
            } else {
                console.error('[ERROR] 加载音乐列表失败:', result.error);
                alert('加载音乐列表失败: ' + (result.error || '未知错误'));
            }
        } catch (err) {
            console.error('加载音乐列表失败:', err);
        }
    }

    renderPlaylist() {
        const container = document.getElementById('playlistContainer');
        if (!container) return;

        if (this.playlist.length === 0) {
            container.innerHTML = '<div class="playlist-empty">暂无音乐文件</div>';
            return;
        }

        container.innerHTML = this.playlist.map((track, index) => {
            const isPlaying = index === this.currentIndex && this.isPlaying;
            const isCurrent = index === this.currentIndex;
            return `
                <div class="playlist-item ${isCurrent ? 'current' : ''}" onclick="musicPlayer.playTrack(${index})">
                    <span class="track-number">${index + 1}</span>
                    <span class="track-name">${track.name}</span>
                    <span class="track-status">${isPlaying ? '▶' : (isCurrent ? '⏸' : '')}</span>
                </div>
            `;
        }).join('');
    }

    async playTrack(index) {
        if (index < 0 || index >= this.playlist.length) return;

        this.currentIndex = index;
        const track = this.playlist[index];

        // 按需加载音乐文件
        if (!window.pywebview) {
            alert('音乐播放功能仅在桌面应用中可用');
            return;
        }

        try {
            // 使用 filename 字段（后端返回的字段名）
            const filename = track.filename || track.name;
            const result = await window.pywebview.api.get_music_file(filename, track.type);
            if (result.success) {
                this.audio.src = result.dataUrl;
                await this.audio.play();
                this.isPlaying = true;

                this.updateNowPlaying();
                this.updatePlayButton();
                this.renderPlaylist();
                this.savePreferences();
            } else {
                alert('加载音乐文件失败: ' + result.error);
            }
        } catch (err) {
            alert('播放失败: ' + err);
            console.error('播放音乐失败:', err);
        }
    }

    togglePlay() {
        if (this.playlist.length === 0) {
            alert('播放列表为空，请先添加音乐文件');
            return;
        }

        if (this.isPlaying) {
            this.audio.pause();
            this.isPlaying = false;
        } else {
            if (!this.audio.src && this.playlist.length > 0) {
                this.playTrack(0);
                return;
            }
            this.audio.play();
            this.isPlaying = true;
        }

        this.updatePlayButton();
        this.renderPlaylist();
    }

    // 移除切歌功能

    onTrackEnded() {
        // 播放列表循环：播完一首自动播放下一首
        if (this.playlist.length > 1) {
            // 如果有多首歌，播放下一首
            this.currentIndex = (this.currentIndex + 1) % this.playlist.length;
            this.playTrack(this.currentIndex);
        } else {
            // 如果只有一首歌，单曲循环
            this.audio.currentTime = 0;
            this.audio.play();
        }
    }

    setVolume(value) {
        this.audio.volume = value / 100;
        document.getElementById('volumeValue').textContent = value + '%';
        this.savePreferences();
    }

    // 移除播放模式切换功能

    updateNowPlaying() {
        const track = this.playlist[this.currentIndex];
        if (track) {
            document.getElementById('nowPlayingTitle').textContent = track.name;
        } else {
            document.getElementById('nowPlayingTitle').textContent = '未播放';
        }
    }

    updatePlayButton() {
        const miniBtn = document.getElementById('miniPlayBtn');
        const modalBtn = document.getElementById('modalPlayBtn');

        miniBtn.textContent = this.isPlaying ? '⏸' : '▶';
        modalBtn.textContent = this.isPlaying ? '⏸' : '▶';
    }

    updateProgress() {
        const current = this.audio.currentTime;
        const duration = this.audio.duration;

        if (isNaN(duration)) return;

        const percent = (current / duration) * 100;
        document.getElementById('progressBar').style.width = percent + '%';

        document.getElementById('currentTime').textContent = this.formatTime(current);
        document.getElementById('totalTime').textContent = this.formatTime(duration);
    }

    seekTo(percent) {
        if (isNaN(this.audio.duration)) return;
        this.audio.currentTime = (percent / 100) * this.audio.duration;
    }

    formatTime(seconds) {
        if (isNaN(seconds)) return '0:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    onError(e) {
        console.error('音乐播放错误:', e);
        this.isPlaying = false;
        this.updatePlayButton();
    }

    // 移除自定义文件夹选择功能
}

let musicPlayer;

function initMusicPlayer() {
    musicPlayer = new MusicPlayer();
}

function showMusicPanel() {
    document.getElementById('musicPanel').classList.add('show');
}

function closeMusicPanel() {
    document.getElementById('musicPanel').classList.remove('show');
}

function toggleMiniPlayer() {
    musicPlayer.togglePlay();
}

document.addEventListener('DOMContentLoaded', () => {
    // 等待 pywebview API 就绪
    function initWhenReady() {
        if (window.pywebview) {
            console.log('[DEBUG] pywebview API 已就绪，初始化音乐播放器');
            initMusicPlayer();
        } else {
            console.log('[DEBUG] pywebview API 尚未就绪，500ms后重试');
            setTimeout(initWhenReady, 500);
        }
    }

    initWhenReady();

    const progressContainer = document.getElementById('progressContainer');
    progressContainer.addEventListener('click', (e) => {
        const rect = progressContainer.getBoundingClientRect();
        const percent = ((e.clientX - rect.left) / rect.width) * 100;
        if (musicPlayer) {
            musicPlayer.seekTo(percent);
        }
    });

    // ESC 键关闭音乐面板
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const musicPanel = document.getElementById('musicPanel');
            if (musicPanel && musicPanel.classList.contains('show')) {
                closeMusicPanel();
            }
        }
    });
});

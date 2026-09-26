// 商店系统

// 商店商品配置
const shopItems = {
    backgrounds: [
        { id: 'bg1', name: '默认背景', unlockType: 'default', price: 0, preview: 'backgrounds/bg1.jpg' },
        { id: 'bg2', name: '星空夜景', unlockType: 'default', price: 0, preview: 'backgrounds/bg2.jpg' },
        { id: 'bg3', name: '温馨场景', unlockType: 'default', price: 0, preview: 'backgrounds/bg3.jpg' },
        { id: 'bg4', name: '黑暗角色', unlockType: 'default', price: 0, preview: 'backgrounds/bg4.jpg' },
        { id: 'bg5', name: '蓝色梦境', unlockType: 'default', price: 0, preview: 'backgrounds/bg5.png' },
        { id: 'bg6', name: '笑容少女', unlockType: 'default', price: 0, preview: 'backgrounds/bg6.png' },
        { id: 'bg7', name: '废墟黄昏', unlockType: 'default', price: 0, preview: 'backgrounds/bg7.png' },
        { id: 'bg8', name: '温暖微笑', unlockType: 'default', price: 0, preview: 'backgrounds/bg8.png' },
        { id: 'bg9', name: '森林探险', unlockType: 'default', price: 0, preview: 'backgrounds/bg9.png' },
        { id: 'bg10', name: '花海少女', unlockType: 'default', price: 0, preview: 'backgrounds/bg10.png' },
        { id: 'bg11', name: '黑客世界', unlockType: 'default', price: 0, preview: 'backgrounds/bg11.png' },
        { id: 'bg12', name: '圣诞装扮', unlockType: 'default', price: 0, preview: 'backgrounds/bg12.png' },
        { id: 'bg13', name: '烟花庆典', unlockType: 'default', price: 0, preview: 'backgrounds/bg13.png' },
        { id: 'bg14', name: '猫耳少女', unlockType: 'default', price: 0, preview: 'backgrounds/bg14.png' },
        { id: 'bg15', name: '雪境少女', unlockType: 'default', price: 0, preview: 'backgrounds/bg15.png' },
        { id: 'bg16', name: '新背景16', unlockType: 'default', price: 0, preview: 'backgrounds/bg16.png' },
        { id: 'bg17', name: '新背景17', unlockType: 'default', price: 0, preview: 'backgrounds/bg17.png' },
        { id: 'bg18', name: '新背景18', unlockType: 'default', price: 0, preview: 'backgrounds/bg18.png' },
        { id: 'bg19', name: '新背景19', unlockType: 'default', price: 0, preview: 'backgrounds/bg19.png' },
        { id: 'bg20', name: '新背景20', unlockType: 'default', price: 0, preview: 'backgrounds/bg20.png' },
        { id: 'bg21', name: '新背景21', unlockType: 'default', price: 0, preview: 'backgrounds/bg21.png' },
        { id: 'bg22', name: '新背景22', unlockType: 'default', price: 0, preview: 'backgrounds/bg22.png' },
        { id: 'bg23', name: '新背景23', unlockType: 'default', price: 0, preview: 'backgrounds/bg23.png' },
        { id: 'bg24', name: '新背景24', unlockType: 'default', price: 0, preview: 'backgrounds/bg24.png' },
        { id: 'bg25', name: '新背景25', unlockType: 'default', price: 0, preview: 'backgrounds/bg25.png' },
        { id: 'bg26', name: '新背景26', unlockType: 'default', price: 0, preview: 'backgrounds/bg26.png' },
        { id: 'bg27', name: '新背景27', unlockType: 'default', price: 0, preview: 'backgrounds/bg27.png' },
        { id: 'bg28', name: '新背景28', unlockType: 'default', price: 0, preview: 'backgrounds/bg28.png' },
        { id: 'bg29', name: '新背景29', unlockType: 'default', price: 0, preview: 'backgrounds/bg29.png' }
    ],
    music: [
        { id: 'music1', name: '大肥鱼完整的一生', unlockType: 'default', price: 0, file: 'music/大肥鱼完整的一生.mp3' },
        { id: 'music2', name: '海王星外天体', unlockType: 'default', price: 0, file: 'music/XN-X 海王星外天体.mp3' },
        { id: 'music3', name: 'Billie Jean', unlockType: 'default', price: 0, file: 'music/Billie Jean - Michael Jackson 【Hi-Res】.mp3' },
        { id: 'music4', name: 'Cure For Me', unlockType: 'default', price: 0, file: 'music/Cure For Me - AURORA【Hi-Res】.mp3' },
        { id: 'music5', name: 'Kill Bill', unlockType: 'default', price: 0, file: 'music/Kill Bill- SZA【Hi-Res】.mp3' },
        { id: 'music6', name: 'Maneater', unlockType: 'default', price: 0, file: 'music/Nelly Furtado - Maneater (Lyrics)附歌词_1134070753.mp3' },
        { id: 'music7', name: 'Talking to the Moon', unlockType: 'default', price: 0, file: 'music/Talking to the Moon- Bruno Mars【Hi-Res】.mp3' },
        { id: 'music8', name: 'The Other Side Of Paradise', unlockType: 'default', price: 0, file: 'music/The Other Side Of Paradise- Glass Animals【Hi-Res】.mp3' },
        { id: 'music9', name: 'Things You Said', unlockType: 'default', price: 0, file: 'music/Things You Said - Cody Fry, Abby Cates【Hi-Res】.mp3' },
        { id: 'music10', name: 'When the rain', unlockType: 'default', price: 0, file: 'music/When the rain - void  Trance .mp3' },
        { id: 'music11', name: '基米的漩涡', unlockType: 'default', price: 0, file: 'music/这基米的漩涡,快要把我吞没.mp3.mp3' },
        { id: 'music12', name: '够钟', unlockType: 'default', price: 0, file: 'music/周柏豪《够钟》【Hi-res】.mp3' },
        { id: 'music13', name: '夏の大三角', unlockType: 'default', price: 0, file: 'music/夏の大三角.mp3' },
        { id: 'music14', name: '春夏秋冬', unlockType: 'default', price: 0, file: 'music/张国荣《春夏秋冬》【Hi-res】.mp3' },
        { id: 'music15', name: '野蜂飞舞', unlockType: 'default', price: 0, file: 'music/王小桃野蜂飞舞.mp3' }
    ]
};

// 打开商店
function openShop() {
    renderShop();
    document.getElementById('shopModal').classList.add('show');
}

// 关闭商店
function closeShop() {
    document.getElementById('shopModal').classList.remove('show');
}

// 渲染商店
function renderShop() {
    renderBackgroundShop();
    renderMusicShop();
}

// 渲染背景商店
function renderBackgroundShop() {
    const container = document.getElementById('backgroundShop');
    container.innerHTML = '';

    shopItems.backgrounds.forEach(bg => {
        const isUnlocked = userProgress.unlockedBackgrounds.includes(bg.id);
        const isSelected = userProgress.selectedBackground === bg.id;

        const item = document.createElement('div');
        item.className = `shop-item ${isUnlocked ? 'unlocked' : ''} ${isSelected ? 'selected' : ''}`;

        let statusText = '';
        let buttonHtml = '';

        if (isSelected) {
            statusText = '使用中';
            buttonHtml = '<button class="shop-btn selected" disabled>使用中</button>';
        } else if (isUnlocked) {
            statusText = '已拥有';
            buttonHtml = `<button class="shop-btn" onclick="selectBackground('${bg.id}')">使用</button>`;
        } else {
            statusText = '免费';
            buttonHtml = `<button class="shop-btn" onclick="selectBackground('${bg.id}')">使用</button>`;
        }

        item.innerHTML = `
            <div class="shop-item-preview" style="background-image: url('${bg.preview}')"></div>
            <div class="shop-item-info">
                <div class="shop-item-status">${statusText}</div>
            </div>
            <div class="shop-item-actions">
                ${buttonHtml}
            </div>
        `;

        container.appendChild(item);
    });
}

// 渲染音乐商店
function renderMusicShop() {
    const container = document.getElementById('musicShop');
    container.innerHTML = '';

    shopItems.music.forEach(music => {
        const isUnlocked = userProgress.unlockedMusic.includes(music.id);
        const isSelected = userProgress.selectedMusic === music.id;

        const item = document.createElement('div');
        item.className = `shop-item music ${isUnlocked ? 'unlocked' : ''} ${isSelected ? 'selected' : ''}`;

        let statusText = '';
        let buttonHtml = '';

        if (isSelected) {
            statusText = '播放中';
            buttonHtml = '<button class="shop-btn selected" disabled>播放中</button>';
        } else if (isUnlocked) {
            statusText = '已拥有';
            buttonHtml = `<button class="shop-btn" onclick="selectMusic('${music.id}')">播放</button>`;
        } else {
            statusText = '免费';
            buttonHtml = `<button class="shop-btn" onclick="selectMusic('${music.id}')">播放</button>`;
        }

        item.innerHTML = `
            <div class="shop-item-icon">🎵</div>
            <div class="shop-item-info">
                <div class="shop-item-name">${music.name}</div>
                <div class="shop-item-status">${statusText}</div>
            </div>
            <div class="shop-item-actions">
                ${buttonHtml}
            </div>
        `;

        container.appendChild(item);
    });
}

// 选择背景
function selectBackground(bgId) {
    // 如果未解锁，先解锁
    if (!userProgress.unlockedBackgrounds.includes(bgId)) {
        userProgress.unlockedBackgrounds.push(bgId);
    }

    userProgress.selectedBackground = bgId;
    document.body.className = bgId;
    saveProgress();
    renderShop();
    showAchievement('背景已更换', '');
}

// 选择音乐
function selectMusic(musicId) {
    // 如果未解锁，先解锁
    if (!userProgress.unlockedMusic.includes(musicId)) {
        userProgress.unlockedMusic.push(musicId);
    }

    userProgress.selectedMusic = musicId;
    if (typeof musicPlayer !== 'undefined' && musicPlayer) {
        musicPlayer.setTrack(musicId);
        musicPlayer.startPlayback();
    }
    saveProgress();
    renderShop();
    showAchievement('音乐已更换', '');
}

// 切换商店标签
function switchShopTab(tab) {
    document.querySelectorAll('.shop-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.shop-content').forEach(c => c.classList.remove('active'));

    document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
    document.getElementById(`${tab}Shop`).classList.add('active');
}

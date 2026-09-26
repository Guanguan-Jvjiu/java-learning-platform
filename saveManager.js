// 存档管理功能
let currentSlotData = null;

// 显示存档管理器
async function showSaveManager() {
    const modal = document.getElementById('saveManagerModal');
    await loadSaveSlots();
    modal.classList.add('show');
}

// 关闭存档管理器
function closeSaveManager() {
    const modal = document.getElementById('saveManagerModal');
    modal.classList.remove('show');
}

// 加载所有存档位
async function loadSaveSlots() {
    if (!window.pywebview) {
        alert('存档功能仅在桌面应用中可用');
        return;
    }

    try {
        const result = await window.pywebview.api.get_save_slots();
        if (result.success) {
            renderSaveSlots(result.slots);
        } else {
            console.error('加载存档失败:', result.error);
        }
    } catch (err) {
        console.error('加载存档失败:', err);
    }
}

// 渲染存档位列表
function renderSaveSlots(slots) {
    const container = document.getElementById('saveSlots');
    container.innerHTML = '';

    slots.forEach(slot => {
        const slotDiv = document.createElement('div');
        slotDiv.className = `save-slot ${slot.exists ? '' : 'empty'}`;

        if (slot.exists) {
            // 已有存档
            slotDiv.innerHTML = `
                <div class="slot-info">
                    <div class="slot-number">存档位 ${slot.slot}</div>
                    <div class="slot-player">${slot.playerName}</div>
                    <div class="slot-stats">
                        <span>等级 ${slot.level}</span>
                        <span>经验 ${slot.xp}</span>
                        <span>已完成 ${slot.completedChapters} 章</span>
                    </div>
                    <div class="slot-time">最后保存: ${slot.lastSaved}</div>
                </div>
                <div class="slot-actions">
                    <button class="slot-btn" onclick="loadSlot(${slot.slot})">载入</button>
                    <button class="slot-btn" onclick="overwriteSlot(${slot.slot})">覆盖</button>
                    <button class="slot-btn delete" onclick="deleteSlot(${slot.slot})">删除</button>
                </div>
            `;
        } else {
            // 空存档位
            slotDiv.innerHTML = `
                <div class="slot-info">
                    <div class="slot-number">存档位 ${slot.slot}</div>
                    <div class="slot-player" style="opacity: 0.5;">空存档位</div>
                </div>
                <div class="slot-actions">
                    <button class="slot-btn" onclick="saveToSlot(${slot.slot})">保存到此位</button>
                </div>
            `;
        }

        container.appendChild(slotDiv);
    });
}

// 保存到指定存档位
async function saveToSlot(slot) {
    const playerName = prompt('请输入玩家名称:', `玩家${slot}`);
    if (!playerName) return;

    if (!window.pywebview) {
        alert('存档功能仅在桌面应用中可用');
        return;
    }

    try {
        const result = await window.pywebview.api.save_to_slot(slot, userProgress, playerName);
        if (result.success) {
            localStorage.setItem('lastUsedSlot', slot.toString());
            alert('保存成功！');
            closeSaveManager();
        } else {
            alert('保存失败: ' + result.error);
        }
    } catch (err) {
        alert('保存失败: ' + err);
    }
}

// 覆盖指定存档位
async function overwriteSlot(slot) {
    if (!confirm('确定要覆盖此存档吗？')) return;

    const playerName = prompt('请输入玩家名称:', `玩家${slot}`);
    if (!playerName) return;

    await saveToSlot(slot);
}

// 载入指定存档位
async function loadSlot(slot) {
    if (!confirm('载入存档将覆盖当前进度，确定要继续吗？')) return;

    if (!window.pywebview) {
        alert('存档功能仅在桌面应用中可用');
        return;
    }

    try {
        const result = await window.pywebview.api.load_from_slot(slot);
        if (result.success) {
            // 载入进度数据
            userProgress = result.data;

            // 更新界面
            updateProgressBar();
            renderChaptersList();

            // 如果在欢迎页面，切换到学习界面
            if (userProgress.completedChapters.length > 0 || userProgress.xp > 0) {
                document.getElementById('welcomeScreen').style.display = 'none';
                document.getElementById('learningArea').style.display = 'block';

                const lastUnlockedIndex = Math.min(
                    userProgress.unlockedChapters.length - 1,
                    learningData.chapters.length - 1
                );
                loadChapter(lastUnlockedIndex);
            }

            alert('载入成功！');
            closeSaveManager();
        } else {
            alert('载入失败: ' + result.error);
        }
    } catch (err) {
        alert('载入失败: ' + err);
    }
}

// 删除指定存档位
async function deleteSlot(slot) {
    if (!confirm('确定要删除此存档吗？此操作不可恢复！')) return;

    if (!window.pywebview) {
        alert('存档功能仅在桌面应用中可用');
        return;
    }

    try {
        const result = await window.pywebview.api.delete_slot(slot);
        if (result.success) {
            alert('删除成功！');
            await loadSaveSlots();
        } else {
            alert('删除失败: ' + result.error);
        }
    } catch (err) {
        alert('删除失败: ' + err);
    }
}

// 快速保存（保存到最近使用的存档位，如果没有则提示选择）
async function quickSave() {
    const lastSlot = localStorage.getItem('lastUsedSlot');
    if (lastSlot) {
        await saveToSlot(parseInt(lastSlot));
    } else {
        showSaveManager();
    }
}

// 应用状态
let currentChapter = 0;
let currentSection = 0;
let currentProblemIndex = 0;
let currentBankProblem = null;
let currentFilter = 'all';
let userProgress = {
    level: 1,
    xp: 0,
    completedChapters: [],
    unlockedChapters: [1],
    completedProblems: [], // 存储已完成的编程题 {chapterId, problemIndex}
    solvedBankProblems: [], // 存储已完成的题库题目 ID

    // 商店系统
    unlockedBackgrounds: ['bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7', 'bg8', 'bg9', 'bg10', 'bg11', 'bg12', 'bg13', 'bg14', 'bg15', 'bg16', 'bg17', 'bg18', 'bg19', 'bg20', 'bg21', 'bg22', 'bg23', 'bg24', 'bg25', 'bg26', 'bg27', 'bg28', 'bg29'], // 已解锁的背景（全部免费）
    unlockedMusic: ['music1', 'music2', 'music3', 'music4', 'music5', 'music6', 'music7', 'music8', 'music9', 'music10', 'music11', 'music12', 'music13', 'music14', 'music15'], // 已解锁的音乐（全部免费）
    selectedBackground: 'bg1', // 当前使用的背景
    selectedMusic: 'music1' // 当前使用的音乐
};

// 初始化应用
function initApp() {
    loadProgress();

    // 应用用户选择的背景
    applySelectedBackground();

    // 应用用户选择的音乐
    applySelectedMusic();

    renderChaptersList();
    updateProgressBar();

    // 如果有进度，自动恢复到学习界面
    if (userProgress.completedChapters.length > 0 || userProgress.xp > 0) {
        document.getElementById('welcomeScreen').style.display = 'none';
        document.getElementById('learningArea').style.display = 'block';

        // 加载最后学习的章节（已解锁的最后一个）
        const lastUnlockedIndex = Math.min(
            userProgress.unlockedChapters.length - 1,
            learningData.chapters.length - 1
        );
        loadChapter(lastUnlockedIndex);

        // 恢复进度后，也开始播放背景音乐
        if (typeof musicPlayer !== 'undefined' && musicPlayer) {
            musicPlayer.startPlayback();
        }
    }
}

// 应用选中的背景
function applySelectedBackground() {
    const bg = userProgress.selectedBackground || 'bg1';
    document.body.className = bg;
}

// 应用选中的音乐
function applySelectedMusic() {
    if (typeof musicPlayer !== 'undefined' && musicPlayer && userProgress.selectedMusic) {
        musicPlayer.setTrack(userProgress.selectedMusic);
    }
}

// 随机选择背景图片（已废弃，改为使用用户选择）
function setRandomBackground() {
    // 可用的背景图片：bg1.jpg, bg2.jpg, bg3.jpg, bg4.jpg
    const availableBgs = [1, 2, 3, 4];
    const randomIndex = Math.floor(Math.random() * availableBgs.length);
    const randomBg = availableBgs[randomIndex];
    document.body.className = `bg-${randomBg}`;
}

// 加载进度
function loadProgress() {
    // 尝试从文件加载
    if (window.pywebview) {
        window.pywebview.api.load_progress().then(data => {
            if (data) {
                userProgress = data;

                // 兼容旧存档：添加商店字段
                if (!userProgress.unlockedBackgrounds) userProgress.unlockedBackgrounds = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7', 'bg8', 'bg9', 'bg10', 'bg11', 'bg12', 'bg13', 'bg14', 'bg15', 'bg16', 'bg17', 'bg18', 'bg19', 'bg20', 'bg21', 'bg22', 'bg23', 'bg24', 'bg25', 'bg26', 'bg27', 'bg28', 'bg29'];
                if (!userProgress.unlockedMusic) userProgress.unlockedMusic = ['music1', 'music2', 'music3', 'music4', 'music5', 'music6', 'music7', 'music8', 'music9', 'music10', 'music11', 'music12', 'music13', 'music14', 'music15'];
                if (!userProgress.selectedBackground) userProgress.selectedBackground = 'bg1';
                if (!userProgress.selectedMusic) userProgress.selectedMusic = 'music1';

                updateProgressBar();
                renderChaptersList();
            }
        }).catch(err => {
            console.log('从文件加载进度失败:', err);
        });
    }

    // 同时保留 localStorage 作为后备
    const saved = localStorage.getItem('javaLearningProgress');
    if (saved) {
        userProgress = JSON.parse(saved);

        // 兼容旧存档：添加商店字段
        if (!userProgress.unlockedBackgrounds) userProgress.unlockedBackgrounds = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7', 'bg8', 'bg9', 'bg10', 'bg11', 'bg12', 'bg13', 'bg14', 'bg15', 'bg16', 'bg17', 'bg18', 'bg19', 'bg20', 'bg21', 'bg22', 'bg23', 'bg24', 'bg25', 'bg26', 'bg27', 'bg28', 'bg29'];
        if (!userProgress.unlockedMusic) userProgress.unlockedMusic = ['music1', 'music2', 'music3', 'music4', 'music5', 'music6', 'music7', 'music8', 'music9', 'music10', 'music11', 'music12', 'music13', 'music14', 'music15'];
        if (!userProgress.selectedBackground) userProgress.selectedBackground = 'bg1';
        if (!userProgress.selectedMusic) userProgress.selectedMusic = 'music1';
    }
}

// 保存进度
function saveProgress() {
    // 双重保存：文件 + localStorage
    localStorage.setItem('javaLearningProgress', JSON.stringify(userProgress));

    if (window.pywebview) {
        window.pywebview.api.save_progress(userProgress).then(result => {
            if (!result.success) {
                console.error('保存进度到文件失败:', result.error);
            }
        }).catch(err => {
            console.error('保存进度失败:', err);
        });
    }
}

// 退出应用（保存进度并关闭）
function exitApp() {
    try {
        // 同步保存到 localStorage
        localStorage.setItem('javaLearningProgress', JSON.stringify(userProgress));

        // 异步保存到文件（不等待完成）
        if (window.pywebview) {
            window.pywebview.api.save_progress(userProgress).catch(err => {
                console.error('保存失败:', err);
            });
        }

        // 直接关闭，不显示提示（避免 pywebview 线程问题）
        setTimeout(() => {
            if (window.pywebview) {
                window.pywebview.api.close_window();
            } else {
                window.close();
            }
        }, 500);
    } catch (error) {
        console.error('退出时出错:', error);
        // 强制退出
        if (window.pywebview) {
            window.pywebview.api.close_window();
        }
    }
}

// 开始学习
function startLearning() {
    try {
        console.log('开始学习被调用');
        console.log('learningData:', learningData);
        console.log('userProgress:', userProgress);

        document.getElementById('welcomeScreen').style.display = 'none';
        document.getElementById('learningArea').style.display = 'block';

        // 如果是新用户，从第一章开始；否则继续上次的进度
        const lastUnlockedIndex = userProgress.unlockedChapters.length > 0
            ? Math.min(userProgress.unlockedChapters.length - 1, learningData.chapters.length - 1)
            : 0;

        console.log('准备加载章节:', lastUnlockedIndex);
        loadChapter(lastUnlockedIndex);

        // 随机选择一首音乐播放
        if (typeof musicPlayer !== 'undefined' && musicPlayer && musicPlayer.playlist && musicPlayer.playlist.length > 0) {
            const randomIndex = Math.floor(Math.random() * musicPlayer.playlist.length);
            musicPlayer.playTrack(randomIndex);
        }
    } catch (error) {
        console.error('开始学习时出错:', error);
        alert('启动学习模式时出错: ' + error.message);
    }
}

function returnToTitle() {
    document.getElementById('learningArea').style.display = 'none';
    document.getElementById('welcomeScreen').style.display = 'block';
}


// 渲染章节列表
function renderChaptersList() {
    const list = document.getElementById('chaptersList');
    list.innerHTML = '';

    learningData.chapters.forEach((chapter, index) => {
        const isUnlocked = userProgress.unlockedChapters.includes(chapter.id);
        const isCompleted = userProgress.completedChapters.includes(chapter.id);

        const item = document.createElement('div');
        item.className = `chapter-item ${!isUnlocked ? 'locked' : ''} ${currentChapter === index ? 'active' : ''}`;

        if (isUnlocked) {
            item.onclick = () => loadChapter(index);
        }

        item.innerHTML = `
            <span class="chapter-icon">${chapter.icon}</span>
            <div class="chapter-info">
                <div class="chapter-name">${chapter.name}</div>
                <div class="chapter-status">${isCompleted ? '✓ 已完成' : isUnlocked ? '进行中' : '🔒 未解锁'}</div>
            </div>
            ${!isUnlocked ? '<span class="lock-icon">🔒</span>' : ''}
        `;

        list.appendChild(item);
    });
}

// 加载章节
function loadChapter(chapterIndex) {
    const chapter = learningData.chapters[chapterIndex];

    if (!userProgress.unlockedChapters.includes(chapter.id)) {
        showAchievement('提示', '请先完成前面的章节测验以解锁');
        return;
    }

    currentChapter = chapterIndex;
    currentSection = 0;
    renderChaptersList();
    loadSection(0);
}

// 加载小节
function loadSection(sectionIndex) {
    const chapter = learningData.chapters[currentChapter];
    const section = chapter.sections[sectionIndex];

    currentSection = sectionIndex;

    document.getElementById('contentTitle').textContent = section.title;
    document.getElementById('cardBody').innerHTML = section.content;
    document.getElementById('sectionIndicator').textContent =
        `${currentSection + 1} / ${chapter.sections.length}`;

    // 更新导航按钮
    document.getElementById('prevBtn').disabled = currentSection === 0;

    const isLastSection = currentSection === chapter.sections.length - 1;
    const nextBtn = document.getElementById('nextBtn');

    if (isLastSection) {
        nextBtn.textContent = '完成测验 →';
        nextBtn.onclick = () => showQuiz();
    } else {
        nextBtn.textContent = '下一节 →';
        nextBtn.onclick = () => nextSection();
    }

    // 滚动到顶部
    document.getElementById('cardBody').scrollTop = 0;
}

// 上一节
function previousSection() {
    if (currentSection > 0) {
        loadSection(currentSection - 1);
    }
}

// 下一节
function nextSection() {
    const chapter = learningData.chapters[currentChapter];
    if (currentSection < chapter.sections.length - 1) {
        loadSection(currentSection + 1);
    }
}

// 显示测验
function showQuiz() {
    const chapter = learningData.chapters[currentChapter];
    const modal = document.getElementById('quizModal');
    const content = document.getElementById('quizContent');

    content.innerHTML = '';

    chapter.quiz.forEach((question, qIndex) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'quiz-question';

        let optionsHtml = '<div class="quiz-options">';
        question.options.forEach((option, oIndex) => {
            optionsHtml += `
                <div class="quiz-option" onclick="selectOption(${qIndex}, ${oIndex})">
                    <input type="radio" name="q${qIndex}" value="${oIndex}" id="q${qIndex}_${oIndex}">
                    <label for="q${qIndex}_${oIndex}">${option}</label>
                </div>
            `;
        });
        optionsHtml += '</div>';

        questionDiv.innerHTML = `
            <div class="question-text">${qIndex + 1}. ${question.question}</div>
            ${optionsHtml}
        `;

        content.appendChild(questionDiv);
    });

    modal.classList.add('show');
}

// 选择选项
function selectOption(questionIndex, optionIndex) {
    const options = document.querySelectorAll(`input[name="q${questionIndex}"]`);
    options[optionIndex].checked = true;

    // 高亮选中的选项
    const allOptions = document.querySelectorAll('.quiz-question')[questionIndex].querySelectorAll('.quiz-option');
    allOptions.forEach(opt => opt.classList.remove('selected'));
    allOptions[optionIndex].classList.add('selected');
}

// 关闭测验
function closeQuiz() {
    document.getElementById('quizModal').classList.remove('show');
}

// 提交测验
function submitQuiz() {
    const chapter = learningData.chapters[currentChapter];
    let score = 0;
    let answered = 0;

    chapter.quiz.forEach((question, qIndex) => {
        const selected = document.querySelector(`input[name="q${qIndex}"]:checked`);
        if (selected) {
            answered++;
            if (parseInt(selected.value) === question.correct) {
                score++;
            }
        }
    });

    if (answered < chapter.quiz.length) {
        alert('请回答所有问题!');
        return;
    }

    closeQuiz();

    const percentage = (score / chapter.quiz.length) * 100;

    if (percentage >= 60) {
        // 测验通过，检查是否有编程练习
        if (chapter.codingProblems && chapter.codingProblems.length > 0) {
            showAchievement('测验通过!', `得分: ${score}/${chapter.quiz.length} - 开始编程练习`);
            setTimeout(() => {
                showCodingProblem(0);
            }, 1500);
        } else {
            // 没有编程练习，直接完成章节
            completeChapter();
        }
    } else {
        alert(`测验未通过,得分: ${score}/${chapter.quiz.length} (${percentage.toFixed(0)}%)\n请复习后再试!`);
    }
}

// 增加经验值
function addXP(amount) {
    userProgress.xp += amount;

    // 检查升级
    while (userProgress.xp >= 100) {
        userProgress.xp -= 100;
        userProgress.level++;

        showAchievement('升级!', `恭喜达到等级 ${userProgress.level}`);
    }

    updateProgressBar();
    saveProgress();
}

// 更新进度条
function updateProgressBar() {
    document.getElementById('userLevel').textContent = userProgress.level;
    document.getElementById('userXP').textContent = userProgress.xp;
    document.getElementById('progressFill').style.width = userProgress.xp + '%';
}

// 显示成就通知
function showAchievement(title, text) {
    const toast = document.getElementById('achievementToast');
    document.getElementById('achievementTitle').textContent = title;
    document.getElementById('achievementText').textContent = text;

    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// 切换侧边栏(移动端)
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('show');
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

// 键盘快捷键
document.addEventListener('keydown', (e) => {
    if (document.getElementById('learningArea').style.display === 'none') return;
    if (document.getElementById('quizModal').classList.contains('show')) return;

    if (e.key === 'ArrowLeft') {
        previousSection();
    } else if (e.key === 'ArrowRight') {
        nextSection();
    }
});

// ===== 编程练习功能 =====

// 显示编程练习
function showCodingProblem(problemIndex) {
    const chapter = learningData.chapters[currentChapter];
    if (!chapter.codingProblems || problemIndex >= chapter.codingProblems.length) {
        return;
    }

    currentProblemIndex = problemIndex;
    const problem = chapter.codingProblems[problemIndex];

    const modal = document.getElementById('codingModal');
    document.getElementById('codingTitle').textContent = problem.title;
    document.getElementById('codingDescription').textContent = problem.description;

    // 显示测试用例
    let testCasesHtml = '<h4>测试用例:</h4>';
    problem.testCases.forEach((testCase, index) => {
        testCasesHtml += `
            <div class="test-case">
                <strong>用例 ${index + 1}:</strong> ${testCase.description}<br>
                <span class="test-output">期望输出: ${testCase.expectedOutput}</span>
            </div>
        `;
    });
    document.getElementById('testCases').innerHTML = testCasesHtml;

    // 显示提示
    let hintsHtml = '<h4>💡 提示:</h4><ul>';
    problem.hints.forEach(hint => {
        hintsHtml += `<li>${hint}</li>`;
    });
    hintsHtml += '</ul>';
    document.getElementById('codingHints').innerHTML = hintsHtml;

    // 设置代码编辑器初始内容
    const editor = document.getElementById('codeEditor');
    editor.value = problem.template;
    document.getElementById('codingResult').innerHTML = '';
    document.getElementById('problemProgress').textContent =
        `练习 ${problemIndex + 1} / ${chapter.codingProblems.length}`;

    // 绑定代码编辑器事件
    setupCodeEditor(editor);

    modal.classList.add('show');
}

// 设置代码编辑器功能
function setupCodeEditor(editor) {
    // 移除旧的事件监听器
    const newEditor = editor.cloneNode(true);
    editor.parentNode.replaceChild(newEditor, editor);

    // Tab键缩进
    newEditor.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = this.selectionStart;
            const end = this.selectionEnd;
            const value = this.value;

            if (e.shiftKey) {
                // Shift+Tab: 减少缩进
                const lineStart = value.lastIndexOf('\n', start - 1) + 1;
                const line = value.substring(lineStart, value.indexOf('\n', start));

                if (line.startsWith('    ')) {
                    this.value = value.substring(0, lineStart) +
                                value.substring(lineStart + 4);
                    this.selectionStart = this.selectionEnd = start - 4;
                } else if (line.startsWith('\t')) {
                    this.value = value.substring(0, lineStart) +
                                value.substring(lineStart + 1);
                    this.selectionStart = this.selectionEnd = start - 1;
                }
            } else {
                // Tab: 插入4个空格
                this.value = value.substring(0, start) + '    ' + value.substring(end);
                this.selectionStart = this.selectionEnd = start + 4;
            }
        } else if (e.key === 'Enter') {
            // 回车键自动缩进
            e.preventDefault();
            const start = this.selectionStart;
            const value = this.value;

            // 找到当前行的起始位置
            const lineStart = value.lastIndexOf('\n', start - 1) + 1;
            const currentLine = value.substring(lineStart, start);

            // 计算当前行的缩进
            const indent = currentLine.match(/^[\s]*/)[0];

            // 检查是否需要增加缩进（如果行尾是 { 或 :）
            const trimmedLine = currentLine.trim();
            const needExtraIndent = trimmedLine.endsWith('{') || trimmedLine.endsWith(':');

            // 插入换行和缩进
            const newIndent = needExtraIndent ? indent + '    ' : indent;
            this.value = value.substring(0, start) + '\n' + newIndent + value.substring(start);
            this.selectionStart = this.selectionEnd = start + 1 + newIndent.length;
        } else if (e.key === '}') {
            // 输入 } 时自动减少缩进
            const start = this.selectionStart;
            const value = this.value;
            const lineStart = value.lastIndexOf('\n', start - 1) + 1;
            const beforeCursor = value.substring(lineStart, start);

            // 如果当前行只有空格，减少一级缩进
            if (beforeCursor.match(/^\s+$/) && beforeCursor.length >= 4) {
                this.value = value.substring(0, lineStart) +
                            beforeCursor.substring(4) + '}' +
                            value.substring(start);
                this.selectionStart = this.selectionEnd = start - 3;
                e.preventDefault();
            }
        }
    });

    // 自动匹配括号
    newEditor.addEventListener('input', function(e) {
        if (e.inputType === 'insertText') {
            const start = this.selectionStart;
            const char = e.data;
            const pairs = {
                '(': ')',
                '[': ']',
                '{': '}',
                '"': '"',
                "'": "'"
            };

            if (pairs[char]) {
                const value = this.value;
                // 插入配对符号
                this.value = value.substring(0, start) + pairs[char] + value.substring(start);
                this.selectionStart = this.selectionEnd = start;
            }
        }
    });
}


// 关闭编程练习
function closeCodingProblem() {
    document.getElementById('codingModal').classList.remove('show');
}

// 完成章节
function completeChapter() {
    const chapter = learningData.chapters[currentChapter];

    if (!userProgress.completedChapters.includes(chapter.id)) {
        userProgress.completedChapters.push(chapter.id);

        // 解锁下一章
        const nextChapter = learningData.chapters[currentChapter + 1];
        if (nextChapter && !userProgress.unlockedChapters.includes(nextChapter.id)) {
            userProgress.unlockedChapters.push(nextChapter.id);
            showAchievement('新关卡解锁!', `${nextChapter.icon} ${nextChapter.name}`);
        }

        // 增加经验值（完成章节奖励）
        addXP(30);

        // 显示奖励
        showAchievement('章节完成!', `获得 ${ticketReward} 张解锁券`);
    } else {
        showAchievement('章节完成!', '恭喜完成本章学习');
    }

    renderChaptersList();
    saveProgress();

    // 自动进入下一章（从第一节开始）
    setTimeout(() => {
        if (currentChapter < learningData.chapters.length - 1) {
            currentChapter = currentChapter + 1;
            currentSection = 0;
            loadChapter(currentChapter);
        } else {
            showAchievement('恭喜完成!', '你已经完成了所有章节的学习!');
        }
    }, 2000);
}

// 跳过编程练习
function skipCodingProblem() {
    if (confirm('确定要跳过编程练习吗? 建议完成练习以巩固知识。')) {
        closeCodingProblem();
        completeChapter();
    }
}

// ===== 题库功能 =====

// 显示题库
function showProblemBank() {
    currentFilter = 'all';
    renderProblemList();
    document.getElementById('problemBankModal').classList.add('show');
}

// 关闭题库
function closeProblemBank() {
    document.getElementById('problemBankModal').classList.remove('show');
}

// 筛选题目
function filterProblems(filter) {
    currentFilter = filter;

    // 更新按钮状态
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    renderProblemList();
}

// 渲染题目列表
function renderProblemList() {
    const listDiv = document.getElementById('problemList');
    listDiv.innerHTML = '';

    let filteredProblems = problemBank;

    if (currentFilter !== 'all') {
        if (currentFilter === 'extra') {
            filteredProblems = problemBank.filter(p => p.id.startsWith('extra') || p.id.startsWith('lv'));
        } else {
            filteredProblems = problemBank.filter(p => p.chapter === currentFilter);
        }
    }

    filteredProblems.forEach(problem => {
        const isSolved = userProgress.solvedBankProblems.includes(problem.id);
        const isLocked = problem.level > userProgress.level;

        const item = document.createElement('div');
        item.className = `problem-item ${isLocked ? 'locked' : ''}`;

        if (!isLocked) {
            item.onclick = () => showProblemDetail(problem);
        }

        const difficultyClass = problem.difficulty === '简单' ? 'easy' :
                               problem.difficulty === '中等' ? 'medium' : 'hard';

        item.innerHTML = `
            <div class="problem-item-header">
                <div class="problem-item-title">
                    ${isSolved ? '✓ ' : ''}${isLocked ? '🔒 ' : ''}${problem.title}
                </div>
                <div class="problem-item-meta">
                    <span class="difficulty-tag ${difficultyClass}">${problem.difficulty}</span>
                    <span class="level-tag">Lv.${problem.level}</span>
                    <span class="xp-tag">+${problem.xp} XP</span>
                </div>
            </div>
            <div class="problem-item-desc">${problem.description}</div>
            ${isSolved ? '<div class="problem-solved">已完成 ✓</div>' : ''}
            ${isLocked ? '<div class="problem-locked">需要等级 ' + problem.level + '</div>' : ''}
        `;

        listDiv.appendChild(item);
    });

    if (filteredProblems.length === 0) {
        listDiv.innerHTML = '<p style="text-align: center; color: var(--text-muted); padding: 2rem;">暂无题目</p>';
    }
}

// 显示题目详情
function showProblemDetail(problem) {
    // 检查等级限制
    if (problem.level > userProgress.level) {
        alert(`该题目需要等级 ${problem.level}，你当前等级为 ${userProgress.level}\n完成更多题目以升级！`);
        return;
    }

    currentBankProblem = problem;

    document.getElementById('problemTitle').textContent = problem.title;

    const difficultyClass = problem.difficulty === '简单' ? 'easy' :
                           problem.difficulty === '中等' ? 'medium' : 'hard';
    document.getElementById('problemDifficulty').innerHTML =
        `<span class="difficulty-tag ${difficultyClass}">${problem.difficulty}</span>`;
    document.getElementById('problemTimeLimit').textContent =
        `等级要求: Lv.${problem.level} | 奖励: +${problem.xp} XP | 时限: ${problem.timeLimit}秒`;

    document.getElementById('problemDescription').textContent = problem.description;
    document.getElementById('problemInputFormat').textContent = problem.inputFormat;
    document.getElementById('problemOutputFormat').textContent = problem.outputFormat;
    document.getElementById('problemSampleInput').textContent = problem.sampleInput || '无';
    document.getElementById('problemSampleOutput').textContent = problem.sampleOutput;

    if (problem.hint) {
        document.getElementById('problemHintSection').style.display = 'block';
        document.getElementById('problemHint').textContent = problem.hint;
    } else {
        document.getElementById('problemHintSection').style.display = 'none';
    }

    document.getElementById('problemBankModal').classList.remove('show');
    document.getElementById('problemDetailModal').classList.add('show');
}

// 关闭题目详情
function closeProblemDetail() {
    document.getElementById('problemDetailModal').classList.remove('show');
    document.getElementById('problemBankModal').classList.add('show');
}

// 开始编程（题库题目）
function startProblemCoding() {
    if (!currentBankProblem) return;

    const problem = currentBankProblem;

    document.getElementById('problemDetailModal').classList.remove('show');

    // 显示编程界面
    const modal = document.getElementById('codingModal');
    document.getElementById('codingTitle').textContent = problem.title;
    document.getElementById('codingDescription').textContent = problem.description;

    // 显示样例
    let testCasesHtml = '<h4>样例:</h4>';
    testCasesHtml += `
        <div class="test-case">
            <strong>输入:</strong> ${problem.sampleInput || '无'}<br>
            <strong>输出:</strong> ${problem.sampleOutput}
        </div>
    `;
    document.getElementById('testCases').innerHTML = testCasesHtml;

    // 显示提示
    let hintsHtml = '<h4>💡 提示:</h4>';
    hintsHtml += `<p>${problem.hint}</p>`;
    document.getElementById('codingHints').innerHTML = hintsHtml;

    // 设置代码编辑器
    const editor = document.getElementById('codeEditor');
    editor.value = problem.template;
    document.getElementById('codingResult').innerHTML = '';
    document.getElementById('problemProgress').textContent = '题库练习';

    setupCodeEditor(editor);

    modal.classList.add('show');
}

// 运行代码（需要区分是章节练习还是题库练习）
function runCode() {
    const code = document.getElementById('codeEditor').value;
    let result;

    if (currentBankProblem) {
        // 题库题目验证
        result = currentBankProblem.validator(code);
    } else {
        // 章节练习验证
        const chapter = learningData.chapters[currentChapter];
        const problem = chapter.codingProblems[currentProblemIndex];
        result = problem.validator(code);
    }

    const resultDiv = document.getElementById('codingResult');

    if (result.passed) {
        resultDiv.innerHTML = `
            <div class="result-success">
                <span style="font-size: 2rem;">✓</span>
                <div>
                    <strong>测试通过!</strong><br>
                    ${result.message}
                </div>
            </div>
        `;
        resultDiv.className = 'coding-result success';

        if (currentBankProblem) {
            // 题库题目完成
            if (!userProgress.solvedBankProblems.includes(currentBankProblem.id)) {
                userProgress.solvedBankProblems.push(currentBankProblem.id);
                addXP(currentBankProblem.xp);  // 使用题目自己的 XP

                saveProgress();
            }

            setTimeout(() => {
                if (confirm('恭喜通过! 是否返回题库继续练习?')) {
                    closeCodingProblem();
                    showProblemBank();
                    currentBankProblem = null;
                } else {
                    closeCodingProblem();
                    currentBankProblem = null;
                }
            }, 1000);
        } else {
            // 章节练习完成逻辑（保持原有逻辑）
            const chapter = learningData.chapters[currentChapter];
            const problemKey = `${chapter.id}-${currentProblemIndex}`;
            if (!userProgress.completedProblems.includes(problemKey)) {
                userProgress.completedProblems.push(problemKey);
                addXP(10);
                saveProgress();
            }

            // 显示导航按钮
            setTimeout(() => {
                const hasNextProblem = currentProblemIndex < chapter.codingProblems.length - 1;
                const navigationHtml = hasNextProblem
                    ? `
                        <div class="problem-navigation">
                            <button class="nav-btn secondary" onclick="closeCodingProblem()">关闭</button>
                            <button class="nav-btn primary" onclick="showCodingProblem(${currentProblemIndex + 1})">下一题 →</button>
                        </div>
                    `
                    : `
                        <div class="problem-navigation">
                            <button class="nav-btn secondary" onclick="closeCodingProblem()">关闭</button>
                            <button class="nav-btn primary" onclick="closeCodingProblem(); completeChapter();">完成章节 ✓</button>
                        </div>
                    `;

                resultDiv.innerHTML += navigationHtml;
            }, 500);
        }
    } else {
        resultDiv.innerHTML = `
            <div class="result-fail">
                <span style="font-size: 2rem;">✗</span>
                <div>
                    <strong>测试未通过</strong><br>
                    ${result.message}
                </div>
            </div>
        `;
        resultDiv.className = 'coding-result fail';
    }
}

// 全局 ESC 键监听 - 关闭所有模态框
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // 检查并关闭各个模态框
        const quizModal = document.getElementById('quizModal');
        const codingModal = document.getElementById('codingModal');
        const problemBankModal = document.getElementById('problemBankModal');
        const problemDetailModal = document.getElementById('problemDetailModal');
        const saveManagerModal = document.getElementById('saveManagerModal');

        if (quizModal && quizModal.classList.contains('show')) {
            closeQuiz();
        } else if (codingModal && codingModal.classList.contains('show')) {
            closeCodingProblem();
        } else if (problemBankModal && problemBankModal.classList.contains('show')) {
            closeProblemBank();
        } else if (problemDetailModal && problemDetailModal.classList.contains('show')) {
            closeProblemDetail();
        } else if (saveManagerModal && saveManagerModal.classList.contains('show')) {
            closeSaveManager();
        }
    }
});

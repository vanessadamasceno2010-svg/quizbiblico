// ============================================
// APP CONTROLLER v3.0 - MODO FAMÍLIA
// ============================================

const profileManager = new ProfileManager();
const game = new BibleQuizGame(profileManager);
const achievementsManager = new AchievementsManager(game);
const dailyRewardsManager = new DailyRewardsManager(game);

let selectedAvatar = '😀';
let selectedCreateAge = null;
let currentFamilyRankSort = 'score';

// ========================================
// INICIALIZAÇÃO
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    loadGlobalSettings();
    setupEventListeners();

    const profiles = profileManager.getAllProfiles();
    if (profiles.length === 0) {
        // Primeiro acesso
        showScreen('screen-create-profile');
        renderAvatarGrid('create-avatar-grid', 'create');
        setupCreateProfileForm();
    } else {
        const currentId = profileManager.getCurrentProfileId();
        if (currentId && profileManager.getCurrentProfile()) {
            // Tem perfil ativo, vai direto pra home
            enterHome();
        } else {
            // Mostra seleção de perfil
            showProfileSelect();
        }
    }
});

// ========================================
// EVENT LISTENERS GLOBAIS
// ========================================
function setupEventListeners() {
    // Popups - botão de fechar com event listener (não onclick inline)
    document.getElementById('btn-close-ach-popup').addEventListener('click', closeAchievementPopup);
    document.getElementById('btn-close-daily-popup').addEventListener('click', closeDailyPopup);

    // Modal
    document.getElementById('modal-cancel-btn').addEventListener('click', closeModal);

    // Quiz
    document.getElementById('btn-next').addEventListener('click', nextQuestion);
    document.getElementById('btn-daily-claim').addEventListener('click', claimDailyReward);

    // Resultado
    document.getElementById('btn-restart-quiz').addEventListener('click', restartQuiz);
    document.getElementById('btn-back-categories').addEventListener('click', () => showScreen('screen-categories'));
    document.getElementById('btn-back-home').addEventListener('click', () => showScreen('screen-home'));

    // Import file
    document.getElementById('import-file-input').addEventListener('change', importDataFile);

    // Teclado
    document.addEventListener('keydown', handleKeyboard);

    // Quiz timeout
    document.addEventListener('quizTimeout', handleQuizTimeout);
}

function handleKeyboard(e) {
    if (document.getElementById('screen-quiz')?.classList.contains('active') && !game.isAnswered) {
        const keyMap = { '1': 0, '2': 1, '3': 2, '4': 3, 'a': 0, 'b': 1, 'c': 2, 'd': 3 };
        if (keyMap.hasOwnProperty(e.key.toLowerCase())) selectAnswer(keyMap[e.key.toLowerCase()]);
    }
    if (e.key === 'Enter') {
        const fb = document.getElementById('feedback-card');
        if (fb && !fb.classList.contains('hidden')) nextQuestion();
    }
}

// ========================================
// PARTÍCULAS
// ========================================
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    const colors = ['#6C63FF', '#8B85FF', '#FF6B6B', '#51CF66', '#FFD43B'];
    for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = `${Math.random() * 100}%`;
        p.style.animationDuration = `${Math.random() * 15 + 10}s`;
        p.style.animationDelay = `${Math.random() * 10}s`;
        p.style.background = colors[Math.floor(Math.random() * colors.length)];
        p.style.width = `${Math.random() * 4 + 2}px`;
        p.style.height = p.style.width;
        container.appendChild(p);
    }
}

// ========================================
// PROFILE SELECT
// ========================================
function showProfileSelect() {
    showScreen('screen-profile-select');
    renderProfilesList();
}

function renderProfilesList() {
    const container = document.getElementById('profiles-container');
    const profiles = profileManager.getAllProfiles();

    if (profiles.length === 0) {
        container.innerHTML = '<p class="empty-msg">Nenhum perfil criado ainda.</p>';
        return;
    }

    const ageNames = {
        children: '👶 Crianças', kids: '🧒 Juniores', teens: '🧑 Adolescentes',
        adults: '👨 Adultos', scholars: '📖 Teólogos'
    };

    container.innerHTML = profiles.map(p => {
        const level = profileManager.getProfileLevel(p);
        return `
            <div class="profile-select-card" data-id="${p.id}">
                <div class="psc-avatar">${p.avatar}</div>
                <div class="psc-info">
                    <div class="psc-name">${p.name}</div>
                    <div class="psc-age">${ageNames[p.ageGroup] || p.ageGroup}</div>
                    <div class="psc-stats">
                        <span>🏆 ${formatNumber(p.playerData.totalScore || 0)}</span>
                        <span>⭐ ${p.playerData.totalStars || 0}</span>
                        <span>🔥 ${p.playerData.streak || 0}</span>
                    </div>
                    <div class="psc-level">Nível ${level.num} - ${level.name}</div>
                </div>
                <div class="psc-arrow">→</div>
            </div>
        `;
    }).join('');

    container.querySelectorAll('.profile-select-card').forEach(card => {
        card.addEventListener('click', () => selectProfile(card.dataset.id));
    });
}

function selectProfile(id) {
    profileManager.setCurrentProfileId(id);
    enterHome();
}

function showCreateProfile() {
    showScreen('screen-create-profile');
    document.getElementById('create-name').value = '';
    selectedCreateAge = null;
    selectedAvatar = '😀';
    document.querySelectorAll('.age-select-btn').forEach(b => b.classList.remove('selected'));
    renderAvatarGrid('create-avatar-grid', 'create');
    setupCreateProfileForm();
    validateCreateProfile();
}

function backToProfileSelect() {
    const profiles = profileManager.getAllProfiles();
    if (profiles.length > 0) showProfileSelect();
    else showScreen('screen-create-profile');
}

function setupCreateProfileForm() {
    const input = document.getElementById('create-name');
    input.value = '';
    input.removeEventListener('input', validateCreateProfile);
    input.addEventListener('input', validateCreateProfile);
    setTimeout(() => input.focus(), 100);
}

function selectCreateAge(age, btn) {
    document.querySelectorAll('.age-select-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedCreateAge = age;
    validateCreateProfile();
}

function validateCreateProfile() {
    const name = document.getElementById('create-name').value.trim();
    const btn = document.getElementById('btn-create-profile');
    btn.disabled = !(name.length >= 2 && selectedCreateAge);
}

function createNewProfile() {
    const name = document.getElementById('create-name').value.trim();
    if (name.length < 2 || !selectedCreateAge) return;
    const newProfile = profileManager.createProfile(name, selectedAvatar, selectedCreateAge);
    profileManager.setCurrentProfileId(newProfile.id);
    showToast('🎉', `Perfil criado, ${name}!`);
    enterHome();
}

function switchProfile() {
    showProfileSelect();
}

function deleteProfilePrompt() {
    const profile = profileManager.getCurrentProfile();
    showModal(
        'Excluir Perfil?',
        `Tem certeza que deseja excluir "${profile.name}"? Esta ação não pode ser desfeita.`,
        () => {
            profileManager.deleteProfile(profile.id);
            showToast('🗑', 'Perfil excluído');
            const remaining = profileManager.getAllProfiles();
            if (remaining.length > 0) {
                showProfileSelect();
            } else {
                showCreateProfile();
            }
        }
    );
}

// ========================================
// AVATAR GRID
// ========================================
function renderAvatarGrid(containerId, context) {
    const grid = document.getElementById(containerId);
    if (!grid) return;
    grid.innerHTML = '';
    AVATARS.forEach((avatar, i) => {
        const btn = document.createElement('button');
        btn.className = 'avatar-option' + (i === 0 ? ' selected' : '');
        btn.textContent = avatar;
        btn.addEventListener('click', () => {
            grid.querySelectorAll('.avatar-option').forEach(o => o.classList.remove('selected'));
            btn.classList.add('selected');
            selectedAvatar = avatar;
            if (context === 'create') validateCreateProfile();
        });
        grid.appendChild(btn);
    });
    selectedAvatar = AVATARS[0];
}

// ========================================
// ENTRAR NO HOME
// ========================================
function enterHome() {
    showScreen('screen-home');
    updateHomeStats();
    updateHomeProfile();
    updateDailyBanner();
    updateAchievementNotif();
    updateVerseOfDay();
    showRecommendedAge();
}

function showRecommendedAge() {
    const profile = profileManager.getCurrentProfile();
    const el = document.getElementById('recommended-age');
    if (!profile || !el) return;
    const ageNames = {
        children: { name: 'Crianças', icon: '👶' },
        kids: { name: 'Juniores', icon: '🧒' },
        teens: { name: 'Adolescentes', icon: '🧑' },
        adults: { name: 'Adultos', icon: '👨' },
        scholars: { name: 'Teólogos', icon: '📖' }
    };
    const age = ageNames[profile.ageGroup];
    el.innerHTML = `
        <div class="ra-icon">${age.icon}</div>
        <div class="ra-text">
            <span class="ra-label">Recomendado para você:</span>
            <span class="ra-name">${age.name}</span>
        </div>
        <button class="ra-btn" onclick="selectAgeGroup('${profile.ageGroup}')">Jogar →</button>
    `;
}

// ========================================
// NAVEGAÇÃO
// ========================================
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const screen = document.getElementById(screenId);
    if (!screen) return;
    screen.classList.add('active');
    screen.style.animation = 'none';
    screen.offsetHeight;
    screen.style.animation = 'fadeIn 0.4s ease';

    if (screenId === 'screen-home') {
        updateHomeStats();
        updateHomeProfile();
        updateDailyBanner();
        updateAchievementNotif();
        showRecommendedAge();
    }
    if (screenId === 'screen-ranking') renderRanking('all');
    if (screenId === 'screen-family-ranking') renderFamilyRanking(currentFamilyRankSort);
    if (screenId === 'screen-achievements') {
        renderAchievements('all');
        achievementsManager.markAllSeen();
        updateAchievementNotif();
    }
    if (screenId === 'screen-daily') renderDailyRewards();
    if (screenId === 'screen-profile') renderProfileScreen();
    if (screenId === 'screen-stats') renderStatsScreen();
    if (screenId === 'screen-settings') renderSettingsScreen();
    if (screenId === 'screen-profile-select') renderProfilesList();
}

// ========================================
// HOME
// ========================================
function updateHomeStats() {
    const ts = document.getElementById('total-score');
    const tst = document.getElementById('total-stars');
    const sc = document.getElementById('streak-count');
    const gc = document.getElementById('gems-count');
    if (ts) ts.textContent = formatNumber(game.playerData.totalScore);
    if (tst) tst.textContent = game.playerData.totalStars;
    if (sc) sc.textContent = game.playerData.streak;
    if (gc) gc.textContent = game.playerData.gems || 0;
}

function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
}

function updateHomeProfile() {
    const profile = profileManager.getCurrentProfile();
    if (!profile) return;
    const avatar = document.getElementById('home-avatar');
    const name = document.getElementById('home-name');
    const level = document.getElementById('home-level');
    if (avatar) avatar.textContent = profile.avatar;
    if (name) name.textContent = profile.name;
    if (level) level.textContent = `Nível: ${game.getLevelName()}`;
}

function updateVerseOfDay() {
    const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
    const verse = MOTIVATIONAL_VERSES[dayOfYear % MOTIVATIONAL_VERSES.length];
    const text = document.getElementById('vod-text');
    const ref = document.getElementById('vod-ref');
    if (text) text.textContent = `"${verse.text}"`;
    if (ref) ref.textContent = `— ${verse.ref}`;
}

function updateDailyBanner() {
    const banner = document.getElementById('daily-reward-banner');
    if (!banner) return;
    const sub = document.getElementById('drb-sub');
    const daySpan = document.getElementById('drb-day');
    const canClaim = dailyRewardsManager.canClaim();
    const currentDay = dailyRewardsManager.getCurrentDay();
    daySpan.textContent = ((currentDay - 1) % 7) + 1;

    if (canClaim) {
        banner.classList.remove('claimed');
        sub.textContent = 'Toque para coletar sua recompensa!';
    } else {
        banner.classList.add('claimed');
        const time = dailyRewardsManager.getTimeUntilNextReward();
        sub.textContent = time ? `Próxima em ${time.hours}h ${time.minutes}min` : 'Coletada hoje!';
    }
}

function updateAchievementNotif() {
    const badge = document.getElementById('achievements-notif');
    if (!badge) return;
    if (achievementsManager.hasUnseenAchievements()) badge.classList.remove('hidden');
    else badge.classList.add('hidden');
}

// ========================================
// PERFIL SCREEN
// ========================================
function renderProfileScreen() {
    const profile = profileManager.getCurrentProfile();
    if (!profile) return;
    const ageNames = {
        children: '👶 Crianças', kids: '🧒 Juniores', teens: '🧑 Adolescentes',
        adults: '👨 Adultos', scholars: '📖 Teólogos'
    };

    document.getElementById('profile-avatar').textContent = profile.avatar;
    document.getElementById('profile-name').textContent = profile.name;
    document.getElementById('profile-title').textContent = game.getLevelName();
    document.getElementById('profile-age-tag').textContent = ageNames[profile.ageGroup];
    document.getElementById('profile-level-num').textContent = game.getPlayerLevel() + 1;
    document.getElementById('profile-level-name').textContent = game.getLevelName();
    document.getElementById('profile-xp-fill').style.width = `${game.getLevelProgress()}%`;
    document.getElementById('profile-xp-text').textContent = `${game.playerData.xp}/${game.getXPForNextLevel()} XP`;

    document.getElementById('ps-total-score').textContent = formatNumber(game.playerData.totalScore);
    document.getElementById('ps-total-quizzes').textContent = game.playerData.stats.totalQuizzes;
    document.getElementById('ps-perfect').textContent = game.playerData.stats.perfectQuizzes;
    document.getElementById('ps-stars').textContent = game.playerData.totalStars;
    document.getElementById('ps-max-combo').textContent = game.playerData.stats.maxCombo;
    document.getElementById('ps-gems').textContent = game.playerData.gems;

    document.getElementById('edit-name').value = profile.name;
    renderAvatarGrid('edit-avatar-grid', 'edit');
    setTimeout(() => {
        const grid = document.getElementById('edit-avatar-grid');
        if (!grid) return;
        grid.querySelectorAll('.avatar-option').forEach(o => {
            o.classList.remove('selected');
            if (o.textContent === profile.avatar) o.classList.add('selected');
        });
        selectedAvatar = profile.avatar;
    }, 50);
}

function updateCurrentProfile() {
    const profile = profileManager.getCurrentProfile();
    const name = document.getElementById('edit-name').value.trim();
    if (name.length < 2) { showToast('⚠️', 'Nome muito curto!'); return; }
    profileManager.updateProfile(profile.id, { name, avatar: selectedAvatar });
    updateHomeProfile();
    renderProfileScreen();
    showToast('✅', 'Perfil atualizado!');
}

// ========================================
// ESTATÍSTICAS
// ========================================
function renderStatsScreen() {
    const s = game.playerData.stats;
    document.getElementById('stat-total-q').textContent = s.totalQuestionsAnswered;
    document.getElementById('stat-correct-q').textContent = s.totalCorrectAnswers;
    const acc = s.totalQuestionsAnswered > 0 ? Math.round((s.totalCorrectAnswers / s.totalQuestionsAnswered) * 100) : 0;
    document.getElementById('stat-accuracy').textContent = `${acc}%`;
    const avgTime = s.totalQuizzes > 0 ? Math.round(s.totalTimeSpent / s.totalQuizzes) : 0;
    document.getElementById('stat-avg-time').textContent = `${avgTime}s`;

    renderCategoryBars();
    renderAgeBars();
    renderWeekChart();
}

function renderCategoryBars() {
    const container = document.getElementById('stats-chart-bars');
    const catStats = game.playerData.stats.categoryStats || {};
    const entries = Object.entries(catStats);

    if (entries.length === 0) {
        container.innerHTML = '<p class="empty-msg">Jogue para ver estatísticas!</p>';
        return;
    }

    container.innerHTML = entries.map(([key, stats]) => {
        const [ageGroup, category] = key.split('_');
        const meta = CATEGORIES_META[ageGroup]?.[category];
        if (!meta) return '';
        const pct = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
        return `
            <div class="stat-bar-item">
                <div class="stat-bar-header"><span>${meta.icon} ${meta.name}</span><span>${pct}%</span></div>
                <div class="stat-bar-track"><div class="stat-bar-fill" style="width:${pct}%"></div></div>
            </div>
        `;
    }).join('');
}

function renderAgeBars() {
    const container = document.getElementById('stats-age-bars');
    const ageStats = game.playerData.stats.ageGroupStats || {};
    const ageNames = { children: '👶 Crianças', kids: '🧒 Juniores', teens: '🧑 Adolescentes', adults: '👨 Adultos', scholars: '📖 Teólogos' };
    const entries = Object.entries(ageStats);

    if (entries.length === 0) {
        container.innerHTML = '<p class="empty-msg">Jogue para ver!</p>';
        return;
    }

    container.innerHTML = entries.map(([age, stats]) => {
        const pct = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
        return `
            <div class="stat-bar-item">
                <div class="stat-bar-header"><span>${ageNames[age] || age}</span><span>${pct}% (${stats.played})</span></div>
                <div class="stat-bar-track"><div class="stat-bar-fill" style="width:${pct}%"></div></div>
            </div>
        `;
    }).join('');
}

function renderWeekChart() {
    const container = document.getElementById('stats-week-chart');
    const daily = game.playerData.stats.dailyActivity || {};
    const days = [];
    const dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const key = d.toDateString();
        const stats = daily[key] || { quizzes: 0, correct: 0 };
        days.push({ day: dayNames[d.getDay()], quizzes: stats.quizzes });
    }
    const maxQ = Math.max(...days.map(d => d.quizzes), 1);
    container.innerHTML = days.map(d => {
        const h = (d.quizzes / maxQ) * 100;
        return `
            <div class="week-bar-item">
                <div class="week-bar-value">${d.quizzes}</div>
                <div class="week-bar-bg"><div class="week-bar-fill" style="height:${h}%"></div></div>
                <div class="week-bar-label">${d.day}</div>
            </div>
        `;
    }).join('');
}

// ========================================
// CATEGORIAS
// ========================================
function selectAgeGroup(ageGroup) {
    game.currentAgeGroup = ageGroup;
    renderCategories(ageGroup);
    showScreen('screen-categories');
}

function renderCategories(ageGroup) {
    const grid = document.getElementById('categories-grid');
    if (!grid) return;
    const categories = CATEGORIES_META[ageGroup];
    const playerCatLevel = game.getCategoryLevel(ageGroup);
    const ageNames = { children: "Crianças", kids: "Juniores", teens: "Adolescentes", adults: "Adultos", scholars: "Teólogos" };

    document.getElementById('category-title').textContent = ageNames[ageGroup];
    document.getElementById('header-gems').textContent = game.playerData.gems || 0;
    document.getElementById('level-name').textContent = game.getLevelName();
    document.getElementById('xp-fill').style.width = `${game.getLevelProgress()}%`;
    document.getElementById('xp-text').textContent = `${game.playerData.xp}/${game.getXPForNextLevel()} XP`;

    grid.innerHTML = '';
    Object.entries(categories).forEach(([key, cat]) => {
        const isLocked = cat.requiredLevel > playerCatLevel;
        const stars = game.getCategoryStars(ageGroup, key);
        const qCount = QUESTIONS_DB[ageGroup][key]?.length || 0;
        const card = document.createElement('div');
        card.className = `category-card ${isLocked ? 'locked' : ''}`;
        card.addEventListener('click', () => {
            if (isLocked) showToast('🔒', 'Complete as anteriores!');
            else startCategory(ageGroup, key);
        });
        card.innerHTML = `
            ${isLocked ? '<span class="lock-icon">🔒</span>' : ''}
            <div class="category-icon">${cat.icon}</div>
            <div class="category-name">${cat.name}</div>
            <div class="category-count">${qCount} perguntas</div>
            <div class="category-stars">
                <span class="${stars >= 1 ? 'earned' : ''}">⭐</span>
                <span class="${stars >= 2 ? 'earned' : ''}">⭐</span>
                <span class="${stars >= 3 ? 'earned' : ''}">⭐</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ========================================
// QUIZ
// ========================================
function startCategory(ageGroup, category) {
    game.startQuiz(ageGroup, category);
    showScreen('screen-quiz');
    document.getElementById('quiz-gems').textContent = '0';
    renderQuestion();
}

function renderQuestion() {
    const { question, questionNumber, totalQuestions } = game.getCurrentQuestion();
    const catMeta = CATEGORIES_META[game.currentAgeGroup][game.currentCategory];

    document.getElementById('progress-fill').style.width = `${((questionNumber - 1) / totalQuestions) * 100}%`;
    document.getElementById('progress-text').textContent = `${questionNumber}/${totalQuestions}`;
    document.getElementById('quiz-score').textContent = game.score;
    updateComboDisplay();
    updateHintsButtons();

    document.getElementById('question-category-badge').textContent = catMeta.name;
    document.getElementById('question-number').textContent = `Pergunta ${questionNumber}`;
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('question-reference').textContent = question.reference || '';
    document.getElementById('question-hint-text').classList.add('hidden');

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.dataset.index = index;
        btn.innerHTML = `<span class="option-letter">${letters[index]}</span><span class="option-text">${option}</span>`;
        btn.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(btn);
    });

    document.getElementById('feedback-card').classList.add('hidden');
    const qCard = document.getElementById('question-card');
    qCard.style.animation = 'none'; qCard.offsetHeight; qCard.style.animation = 'slideDown 0.4s ease';

    game.startTimer((tl, tt) => updateTimerDisplay(tl, tt));
    updateTimerDisplay(game.timePerQuestion[game.currentAgeGroup], game.timePerQuestion[game.currentAgeGroup]);
}

function updateTimerDisplay(timeLeft, totalTime) {
    const timerText = document.getElementById('timer-text');
    const timerPath = document.getElementById('timer-path');
    if (!timerText || !timerPath) return;
    timerText.textContent = timeLeft;
    timerPath.style.strokeDashoffset = 100 - (timeLeft / totalTime) * 100;
    timerPath.classList.remove('warning', 'danger');
    if (timeLeft <= 5) { timerPath.classList.add('danger'); timerText.style.color = 'var(--danger)'; }
    else if (timeLeft <= 10) { timerPath.classList.add('warning'); timerText.style.color = 'var(--warning)'; }
    else { timerText.style.color = 'var(--text)'; }
}

function selectAnswer(index) {
    const result = game.answerQuestion(index);
    if (!result) return;
    const options = document.querySelectorAll('.option-btn');
    options.forEach(opt => opt.classList.add('disabled'));
    if (result.isCorrect) { options[index].classList.add('correct'); playCorrectSound(); }
    else { options[index].classList.add('incorrect'); options[result.correctIndex].classList.add('correct'); playWrongSound(); }
    document.getElementById('quiz-score').textContent = game.score;
    document.getElementById('quiz-gems').textContent = game.gemsEarned;
    updateComboDisplay();
    showFeedback(result);
}

function handleQuizTimeout() {
    const q = game.currentQuestions[game.currentQuestionIndex];
    const options = document.querySelectorAll('.option-btn');
    options.forEach(opt => opt.classList.add('disabled'));
    options[q.correct].classList.add('correct');
    updateComboDisplay();
    showFeedback({ isCorrect: false, correctIndex: q.correct, explanation: q.explanation, reference: q.reference, verse: q.verse || '', score: game.score, combo: 0, gemsEarned: 0 }, true);
}

function showFeedback(result, isTimeout = false) {
    const card = document.getElementById('feedback-card');
    const icon = document.getElementById('feedback-icon');
    const title = document.getElementById('feedback-title');
    card.classList.remove('hidden');
    if (isTimeout) { icon.textContent = '⏰'; title.textContent = 'Tempo Esgotado!'; title.className = 'feedback-title incorrect'; }
    else if (result.isCorrect) {
        const msgs = ['Correto! 🎉', 'Muito bem! ✨', 'Excelente! 🌟', 'Perfeito! 💫'];
        icon.textContent = '✅'; title.textContent = msgs[Math.floor(Math.random() * msgs.length)]; title.className = 'feedback-title correct';
    } else { icon.textContent = '❌'; title.textContent = 'Ops, não foi dessa vez!'; title.className = 'feedback-title incorrect'; }

    document.getElementById('feedback-text').textContent = result.explanation || '';
    const verseEl = document.getElementById('feedback-verse');
    if (result.verse) { verseEl.textContent = `"${result.verse}" - ${result.reference}`; verseEl.style.display = 'block'; }
    else if (result.reference) { verseEl.textContent = `📖 ${result.reference}`; verseEl.style.display = 'block'; }
    else { verseEl.style.display = 'none'; }

    const gemsDiv = document.getElementById('feedback-gems');
    if (result.gemsEarned > 0) {
        document.getElementById('feedback-gems-value').textContent = result.gemsEarned;
        gemsDiv.classList.remove('hidden');
    } else { gemsDiv.classList.add('hidden'); }

    const btnNext = document.getElementById('btn-next');
    btnNext.textContent = game.currentQuestionIndex >= game.currentQuestions.length - 1 ? 'Ver Resultado 🏆' : 'Próxima Pergunta →';
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function nextQuestion() {
    const result = game.nextQuestion();
    if (result.finished) showResult();
    else renderQuestion();
}

// HINTS
function updateHintsButtons() {
    const gems = game.playerData.gems;
    const costs = game.hintCosts;
    document.getElementById('hint-fifty').disabled = game.hintsUsed.fifty || gems < costs.fifty;
    document.getElementById('hint-skip').disabled = gems < costs.skip;
    document.getElementById('hint-time').disabled = game.hintsUsed.time || gems < costs.time;
    document.getElementById('hint-verse').disabled = game.hintsUsed.verse || gems < costs.verse;
}

function useHint(type) {
    let result;
    switch (type) {
        case 'fifty':
            result = game.useFiftyFifty();
            if (result && result.success) {
                result.toHide.forEach(idx => {
                    const btn = document.querySelector(`.option-btn[data-index="${idx}"]`);
                    if (btn) { btn.classList.add('disabled'); btn.style.opacity = '0.3'; }
                });
                showToast('🎯', 'Duas opções eliminadas!');
            }
            break;
        case 'skip':
            result = game.useSkip();
            if (result && result.success) {
                showToast('⏭️', 'Pergunta pulada!');
                const q = game.currentQuestions[game.currentQuestionIndex];
                showFeedback({ isCorrect: false, correctIndex: q.correct, explanation: q.explanation, reference: q.reference, verse: q.verse || '', score: game.score, combo: 0, gemsEarned: 0 });
                const options = document.querySelectorAll('.option-btn');
                options.forEach(opt => opt.classList.add('disabled'));
                options[q.correct].classList.add('correct');
            }
            break;
        case 'time':
            result = game.useExtraTime();
            if (result && result.success) showToast('⏰', '+15 segundos!');
            break;
        case 'verse':
            result = game.useVerseHint();
            if (result && result.success) {
                const hintEl = document.getElementById('question-hint-text');
                hintEl.textContent = `💡 "${result.verse}" - ${result.reference}`;
                hintEl.classList.remove('hidden');
                showToast('📖', 'Dica revelada!');
            }
            break;
    }
    if (result && result.error === 'no_gems') showToast('💎', 'Gemas insuficientes!');
    updateHintsButtons();
    updateHomeStats();
}

// ========================================
// RESULTADO
// ========================================
function showResult() {
    const result = game.finishQuiz();
    showScreen('screen-result');

    document.getElementById('result-animation').textContent = result.animation;
    const starsContainer = document.getElementById('result-stars');
    starsContainer.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const star = document.createElement('span');
        star.className = 'star';
        star.textContent = i < result.stars ? '⭐' : '☆';
        star.style.opacity = i < result.stars ? '1' : '0.3';
        starsContainer.appendChild(star);
    }

    document.getElementById('result-title').textContent = result.title;
    document.getElementById('result-message').textContent = result.message;
    document.getElementById('result-correct').textContent = result.correct;
    document.getElementById('result-total').textContent = result.total;
    document.getElementById('result-points').textContent = result.score;
    document.getElementById('result-time').textContent = `${result.elapsedTime}s`;
    document.getElementById('result-xp-gain').textContent = `+${result.xpGain} XP`;
    document.getElementById('result-gems-gain').textContent = `💎 +${result.gemsEarned}`;
    document.getElementById('result-verse-text').textContent = `"${result.verse.text}"`;
    document.getElementById('result-verse-ref').textContent = `— ${result.verse.ref}`;

    if (result.percentage >= 70) createConfetti();

    const newAchievements = achievementsManager.checkAll();
    const achContainer = document.getElementById('result-achievements');
    const achList = document.getElementById('result-ach-list');
    if (newAchievements.length > 0) {
        achContainer.classList.remove('hidden');
        achList.innerHTML = newAchievements.map(ach => `
            <div class="result-ach-item">
                <div class="result-ach-item-icon">${ach.icon}</div>
                <div class="result-ach-item-info">
                    <div class="result-ach-item-name">${ach.name}</div>
                    <div class="result-ach-item-reward">💎 +${ach.reward.gems} | ⭐ +${ach.reward.xp} XP</div>
                </div>
            </div>
        `).join('');
    } else { achContainer.classList.add('hidden'); }
    updateHomeStats();
}

// ========================================
// CONQUISTAS
// ========================================
function renderAchievements(filter) {
    const list = document.getElementById('achievements-list');
    if (!list) return;
    const data = game.playerData;
    const unlocked = achievementsManager.getUnlockedCount();
    const total = achievementsManager.getTotalCount();
    document.getElementById('ach-unlocked').textContent = unlocked;
    document.getElementById('ach-total').textContent = total;
    document.getElementById('ach-progress-fill').style.width = `${(unlocked / total) * 100}%`;

    const rarityColors = { common: '#9CA3AF', rare: '#3B82F6', epic: '#A855F7', legendary: '#F59E0B' };
    const rarityNames = { common: 'Comum', rare: 'Raro', epic: 'Épico', legendary: 'Lendário' };

    let achs = ACHIEVEMENTS;
    if (filter === 'unlocked') achs = achs.filter(a => data.achievements && data.achievements[a.id]);
    if (filter === 'locked') achs = achs.filter(a => !data.achievements || !data.achievements[a.id]);

    if (achs.length === 0) {
        list.innerHTML = '<div class="ranking-empty"><div class="ranking-empty-icon">🏅</div><p>Nenhuma!</p></div>';
        return;
    }

    list.innerHTML = achs.map(ach => {
        const isUnlocked = data.achievements && data.achievements[ach.id];
        const progress = ach.progress(data);
        const progressPct = Math.min((progress.current / progress.target) * 100, 100);
        const unlockDate = isUnlocked ? new Date(data.achievements[ach.id].unlockedAt).toLocaleDateString('pt-BR') : '';
        return `
            <div class="ach-card ${isUnlocked ? 'unlocked' : 'locked'}">
                <div class="ach-card-icon">${ach.icon}</div>
                <div class="ach-card-info">
                    <div class="ach-card-name">${ach.name}</div>
                    <div class="ach-card-desc">${ach.description}
                        <span style="color:${rarityColors[ach.rarity]};font-weight:600;"> • ${rarityNames[ach.rarity]}</span>
                    </div>
                    ${!isUnlocked ? `
                        <div class="ach-card-progress">
                            <div class="ach-card-progress-bar"><div class="ach-card-progress-fill" style="width:${progressPct}%"></div></div>
                            <div class="ach-card-progress-text">${Math.min(progress.current, progress.target)}/${progress.target}</div>
                        </div>
                    ` : `<div class="ach-card-date">Desbloqueada em ${unlockDate}</div>`}
                </div>
                ${isUnlocked ? `<div class="ach-card-check">✅</div>` : `<div class="ach-card-reward"><div class="ach-card-reward-value">💎 ${ach.reward.gems}</div><div class="ach-card-reward-label">Gemas</div></div>`}
            </div>
        `;
    }).join('');
}

function filterAchievements(filter, btn) {
    document.querySelectorAll('.ach-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    renderAchievements(filter);
}

function closeAchievementPopup() {
    document.getElementById('achievement-popup').classList.add('hidden');
    achievementsManager.showNextPopup();
    updateHomeStats();
}

// ========================================
// DAILY REWARDS
// ========================================
function renderDailyRewards() {
    const currentDay = dailyRewardsManager.getCurrentDay();
    const canClaim = dailyRewardsManager.canClaim();
    const calendarData = dailyRewardsManager.getCalendarData();
    const streakData = dailyRewardsManager.getStreakBonusData();
    const history = dailyRewardsManager.getHistory();

    const dayInCycle = ((currentDay - 1) % 7) + 1;
    document.getElementById('daily-hero-icon').textContent = canClaim ? '🎁' : '✅';
    document.getElementById('daily-hero-title').textContent = canClaim ? `Dia ${dayInCycle} de 7` : 'Coletado!';
    if (canClaim) document.getElementById('daily-hero-sub').textContent = 'Colete agora!';
    else {
        const time = dailyRewardsManager.getTimeUntilNextReward();
        document.getElementById('daily-hero-sub').textContent = time ? `Próxima em ${time.hours}h ${time.minutes}min` : 'Volte amanhã!';
    }

    const calendar = document.getElementById('daily-calendar');
    calendar.innerHTML = calendarData.map(day => {
        const isCollected = day.status.includes('collected');
        const isToday = day.status.includes('today');
        const isFuture = day.status === 'future';
        let classes = 'daily-day';
        if (isCollected) classes += ' collected';
        if (isToday) classes += ' today';
        if (isFuture) classes += ' future';
        if (day.isBonus) classes += ' bonus';
        return `
            <div class="${classes}">
                ${isCollected && !isToday ? '<div class="daily-day-check">✓</div>' : ''}
                <div class="daily-day-num">DIA ${day.dayNum}</div>
                <div class="daily-day-icon">${day.icon}</div>
                <div class="daily-day-reward">💎${day.rewards.gems}</div>
            </div>
        `;
    }).join('');

    const btn = document.getElementById('btn-daily-claim');
    btn.disabled = !canClaim;
    btn.querySelector('.btn-daily-text').textContent = canClaim ? 'Coletar Recompensa!' : 'Já coletado ✓';

    document.getElementById('daily-bonus-cards').innerHTML = streakData.map(b => `
        <div class="daily-bonus-card ${b.status}">
            <div class="daily-bonus-days">${b.days} dias</div>
            <div class="daily-bonus-icon">${b.icon}</div>
            <div class="daily-bonus-reward">💎 +${b.bonus.gems}</div>
        </div>
    `).join('');

    const historyList = document.getElementById('daily-history-list');
    if (history.length === 0) {
        historyList.innerHTML = '<div class="ranking-empty"><div class="ranking-empty-icon">📋</div><p>Nenhuma!</p></div>';
    } else {
        historyList.innerHTML = history.slice(0, 10).map(h => {
            const date = new Date(h.date).toLocaleDateString('pt-BR');
            const totalGems = h.reward.rewards.gems + (h.reward.rewards.bonusGems || 0) + (h.streakBonus ? h.streakBonus.bonus.gems : 0);
            return `
                <div class="daily-history-item">
                    <div class="daily-history-icon">${h.reward.icon}</div>
                    <div class="daily-history-info">
                        <div class="daily-history-name">${h.reward.name}</div>
                        <div class="daily-history-date">${date}</div>
                    </div>
                    <div class="daily-history-reward">💎 +${totalGems}</div>
                </div>
            `;
        }).join('');
    }
}

function claimDailyReward() {
    const result = dailyRewardsManager.claim();
    if (!result) return;
    showDailyPopup(result);
    renderDailyRewards();
    updateHomeStats();
    achievementsManager.checkAll();
}

function showDailyPopup(result) {
    const popup = document.getElementById('daily-popup');
    document.getElementById('daily-popup-icon').textContent = result.reward.icon;
    document.getElementById('daily-popup-title').textContent = `Recompensa do Dia ${result.day}!`;
    const rewardsDiv = document.getElementById('daily-popup-rewards');
    let html = `
        <div class="daily-popup-reward-item">
            <div class="daily-popup-reward-icon">💎</div>
            <div class="daily-popup-reward-text">+${result.reward.rewards.gems}</div>
            <div class="daily-popup-reward-label">Gemas</div>
        </div>
        <div class="daily-popup-reward-item">
            <div class="daily-popup-reward-icon">⭐</div>
            <div class="daily-popup-reward-text">+${result.reward.rewards.xp}</div>
            <div class="daily-popup-reward-label">XP</div>
        </div>
    `;
    if (result.reward.rewards.bonusGems) {
        html += `<div class="daily-popup-reward-item"><div class="daily-popup-reward-icon">👑</div><div class="daily-popup-reward-text">+${result.reward.rewards.bonusGems}</div><div class="daily-popup-reward-label">Bônus!</div></div>`;
    }
    if (result.streakBonus) {
        html += `<div class="daily-popup-reward-item"><div class="daily-popup-reward-icon">${result.streakBonus.icon}</div><div class="daily-popup-reward-text">+${result.streakBonus.bonus.gems}</div><div class="daily-popup-reward-label">Streak!</div></div>`;
    }
    rewardsDiv.innerHTML = html;
    const verse = result.reward.verse;
    document.getElementById('daily-popup-verse').textContent = verse ? `"${verse.text}" — ${verse.ref}` : '';
    popup.classList.remove('hidden');
    createConfetti();
    playDailyRewardSound();
}

function closeDailyPopup() {
    document.getElementById('daily-popup').classList.add('hidden');
    updateDailyBanner();
}

// ========================================
// COMBO & UI
// ========================================
function updateComboDisplay() {
    const indicator = document.getElementById('combo-indicator');
    if (!indicator) return;
    document.getElementById('combo-count').textContent = game.combo;
    if (game.combo >= 2) {
        indicator.classList.add('active');
        indicator.style.animation = 'none'; indicator.offsetHeight; indicator.style.animation = 'comboGlow 0.5s ease';
    } else { indicator.classList.remove('active'); }
}

function createConfetti() {
    const colors = ['#6C63FF', '#FF6B6B', '#51CF66', '#FFD43B', '#54A0FF', '#FF9F43', '#A855F7'];
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const c = document.createElement('div');
            c.className = 'confetti-piece';
            c.style.left = `${Math.random() * 100}%`;
            c.style.background = colors[Math.floor(Math.random() * colors.length)];
            c.style.width = `${Math.random() * 10 + 5}px`;
            c.style.height = `${Math.random() * 10 + 5}px`;
            c.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            c.style.animationDuration = `${Math.random() * 2 + 1.5}s`;
            c.style.animationDelay = `${Math.random() * 0.5}s`;
            document.body.appendChild(c);
            setTimeout(() => c.remove(), 4000);
        }, i * 30);
    }
}

// SONS
function playCorrectSound() {
    if (!profileManager.getGlobalSettings().sound) return;
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator(); const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.frequency.setValueAtTime(523, ctx.currentTime);
        osc.frequency.setValueAtTime(659, ctx.currentTime + 0.1);
        osc.frequency.setValueAtTime(784, ctx.currentTime + 0.2);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
        osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.4);
    } catch (e) {}
}

function playWrongSound() {
    if (!profileManager.getGlobalSettings().sound) return;
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator(); const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(200, ctx.currentTime);
        osc.frequency.setValueAtTime(150, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
        osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.3);
    } catch (e) {}
}

function playDailyRewardSound() {
    if (!profileManager.getGlobalSettings().sound) return;
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const notes = [440, 554, 659, 880];
        notes.forEach((freq, i) => {
            const osc = ctx.createOscillator(); const gain = ctx.createGain();
            osc.connect(gain); gain.connect(ctx.destination);
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.12);
            gain.gain.setValueAtTime(0.1, ctx.currentTime + i * 0.12);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.12 + 0.4);
            osc.start(ctx.currentTime + i * 0.12); osc.stop(ctx.currentTime + i * 0.12 + 0.4);
        });
    } catch (e) {}
}

// ========================================
// RANKING INDIVIDUAL
// ========================================
function renderRanking(filter) {
    const rankings = game.getRanking(filter);
    const list = document.getElementById('ranking-list');
    if (!list) return;
    const ageNames = { children: 'Crianças', kids: 'Juniores', teens: 'Adolescentes', adults: 'Adultos', scholars: 'Teólogos' };

    if (rankings.length === 0) {
        list.innerHTML = '<div class="ranking-empty"><div class="ranking-empty-icon">🏅</div><p>Nenhum resultado!</p></div>';
        return;
    }

    list.innerHTML = rankings.slice(0, 20).map((entry, i) => {
        const medals = ['🥇', '🥈', '🥉'];
        const pos = i < 3 ? medals[i] : `${i + 1}º`;
        const catMeta = CATEGORIES_META[entry.ageGroup]?.[entry.category];
        const catName = catMeta ? catMeta.name : entry.category;
        const date = new Date(entry.date).toLocaleDateString('pt-BR');
        return `
            <div class="ranking-item">
                <div class="ranking-position">${pos}</div>
                <div class="ranking-info">
                    <div class="ranking-name">${catName}</div>
                    <div class="ranking-details">${ageNames[entry.ageGroup]} • ${entry.correct}/${entry.total} • ${'⭐'.repeat(entry.stars)} • ${date}</div>
                </div>
                <div class="ranking-score-value">${entry.score}</div>
            </div>
        `;
    }).join('');
}

function switchRankingTab(filter, btn) {
    document.querySelectorAll('#screen-ranking .tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderRanking(filter);
}

function clearRanking() {
    showModal('Limpar Ranking?', 'Esta ação não pode ser desfeita.', () => {
        game.clearRanking();
        renderRanking('all');
        showToast('🗑', 'Ranking limpo!');
    });
}

// ========================================
// RANKING FAMÍLIA
// ========================================
function renderFamilyRanking(sortBy) {
    const ranking = profileManager.getFamilyRanking(sortBy);
    const list = document.getElementById('family-ranking-list');
    if (!list) return;

    if (ranking.length === 0) {
        list.innerHTML = '<div class="ranking-empty"><div class="ranking-empty-icon">👨‍👩‍👧</div><p>Nenhum perfil!</p></div>';
        return;
    }

    const ageNames = {
        children: '👶', kids: '🧒', teens: '🧑',
        adults: '👨', scholars: '📖'
    };

    const currentId = profileManager.getCurrentProfileId();

    list.innerHTML = ranking.map((p, i) => {
        const medals = ['🥇', '🥈', '🥉'];
        const pos = i < 3 ? medals[i] : `${i + 1}º`;
        const isCurrent = p.id === currentId;
        let mainValue, mainLabel;
        if (sortBy === 'score') { mainValue = formatNumber(p.score); mainLabel = 'pontos'; }
        else if (sortBy === 'stars') { mainValue = p.stars; mainLabel = 'estrelas'; }
        else if (sortBy === 'quizzes') { mainValue = p.quizzes; mainLabel = 'quizzes'; }
        else { mainValue = p.streak; mainLabel = 'dias'; }

        return `
            <div class="family-rank-item ${isCurrent ? 'current' : ''}">
                <div class="frank-position">${pos}</div>
                <div class="frank-avatar">${p.avatar}</div>
                <div class="frank-info">
                    <div class="frank-name">${p.name} ${isCurrent ? '<span class="frank-you">VOCÊ</span>' : ''}</div>
                    <div class="frank-details">
                        ${ageNames[p.ageGroup]} • Nível ${p.level.num} ${p.level.name}
                    </div>
                    <div class="frank-mini-stats">
                        <span>🏆 ${formatNumber(p.score)}</span>
                        <span>⭐ ${p.stars}</span>
                        <span>✅ ${p.quizzes}</span>
                        <span>🔥 ${p.streak}</span>
                    </div>
                </div>
                <div class="frank-main-value">
                    <div class="frank-main-num">${mainValue}</div>
                    <div class="frank-main-label">${mainLabel}</div>
                </div>
            </div>
        `;
    }).join('');
}

function switchFamilyRankTab(sortBy, btn) {
    document.querySelectorAll('.frt-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFamilyRankSort = sortBy;
    renderFamilyRanking(sortBy);
}

// ========================================
// SETTINGS
// ========================================
function loadGlobalSettings() {
    const settings = profileManager.getGlobalSettings();
    document.documentElement.setAttribute('data-theme', settings.theme || 'dark');
    updateThemeIcons(settings.theme || 'dark');
    updateSoundIcons(settings.sound !== false);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    const settings = profileManager.getGlobalSettings();
    settings.theme = newTheme;
    profileManager.saveGlobalSettings(settings);
    updateThemeIcons(newTheme);
}

function updateThemeIcons(theme) {
    const icon = theme === 'dark' ? '🌙' : '☀️';
    const label = theme === 'dark' ? 'Escuro' : 'Claro';
    const ti = document.getElementById('theme-icon');
    const stl = document.getElementById('settings-theme-label');
    if (ti) ti.textContent = icon;
    if (stl) stl.textContent = label;
}

function toggleSound() {
    const settings = profileManager.getGlobalSettings();
    const current = settings.sound !== false;
    settings.sound = !current;
    profileManager.saveGlobalSettings(settings);
    updateSoundIcons(!current);
    showToast(!current ? '🔊' : '🔇', !current ? 'Som ligado' : 'Som desligado');
}

function updateSoundIcons(enabled) {
    const icon = enabled ? '🔊' : '🔇';
    const label = enabled ? 'Ligado' : 'Desligado';
    const si = document.getElementById('sound-icon');
    const ssl = document.getElementById('settings-sound-label');
    if (si) si.textContent = icon;
    if (ssl) ssl.textContent = label;
}

function renderSettingsScreen() {
    const settings = profileManager.getGlobalSettings();
    const tl = document.getElementById('settings-theme-label');
    const sl = document.getElementById('settings-sound-label');
    if (tl) tl.textContent = settings.theme === 'dark' ? 'Escuro' : 'Claro';
    if (sl) sl.textContent = settings.sound !== false ? 'Ligado' : 'Desligado';
}

function exportData() {
    const data = JSON.stringify(profileManager.data, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `quiz-biblico-familia-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('📤', 'Dados exportados!');
}

function importDataPrompt() {
    document.getElementById('import-file-input').click();
}

function importDataFile(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            showModal('Importar Dados?', 'Isso substituirá TODOS os perfis atuais.', () => {
                localStorage.setItem('bibleQuizFamily', JSON.stringify(data));
                showToast('✅', 'Importado! Recarregando...');
                setTimeout(() => location.reload(), 1000);
            });
        } catch (err) {
            showToast('❌', 'Arquivo inválido!');
        }
    };
    reader.readAsText(file);
}

function resetAllData() {
    showModal('Resetar Tudo?', '⚠️ TODOS os perfis e dados serão apagados! Esta ação é IRREVERSÍVEL.', () => {
        localStorage.removeItem('bibleQuizFamily');
        localStorage.removeItem('currentProfileId');
        localStorage.removeItem('bibleQuizData');
        showToast('🗑', 'Resetado! Recarregando...');
        setTimeout(() => location.reload(), 1000);
    });
}

// ========================================
// MODAL GENÉRICO
// ========================================
let modalConfirmCallback = null;

function showModal(title, text, onConfirm) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-text').textContent = text;
    modalConfirmCallback = onConfirm;

    const confirmBtn = document.getElementById('modal-confirm-btn');
    const newBtn = confirmBtn.cloneNode(true);
    confirmBtn.parentNode.replaceChild(newBtn, confirmBtn);
    newBtn.addEventListener('click', () => {
        closeModal();
        if (modalConfirmCallback) modalConfirmCallback();
    });

    document.getElementById('modal-overlay').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('modal-overlay').classList.add('hidden');
    modalConfirmCallback = null;
}

function confirmExit() {
    showModal('Sair do Quiz?', 'Seu progresso será perdido.', exitQuiz);
}

function exitQuiz() {
    game.clearTimer();
    showScreen('screen-categories');
    renderCategories(game.currentAgeGroup);
}

function restartQuiz() {
    game.startQuiz(game.currentAgeGroup, game.currentCategory);
    showScreen('screen-quiz');
    document.getElementById('quiz-gems').textContent = '0';
    renderQuestion();
}

// ========================================
// TOAST
// ========================================
function showToast(icon, message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    document.getElementById('toast-icon').textContent = icon;
    document.getElementById('toast-message').textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 3000);
}

// ============================================
// SISTEMA DE CONQUISTAS (ACHIEVEMENTS)
// ============================================

const ACHIEVEMENTS = [
    {
        id: 'first_quiz',
        name: 'Primeiros Passos',
        description: 'Complete seu primeiro quiz',
        icon: '🎯',
        category: 'basics',
        condition: (data) => data.stats.totalQuizzes >= 1,
        progress: (data) => ({ current: data.stats.totalQuizzes, target: 1 }),
        reward: { gems: 5, xp: 25 },
        rarity: 'common'
    },
    {
        id: 'five_quizzes',
        name: 'Estudante da Palavra',
        description: 'Complete 5 quizzes',
        icon: '📖',
        category: 'basics',
        condition: (data) => data.stats.totalQuizzes >= 5,
        progress: (data) => ({ current: data.stats.totalQuizzes, target: 5 }),
        reward: { gems: 10, xp: 50 },
        rarity: 'common'
    },
    {
        id: 'twenty_quizzes',
        name: 'Devoto Dedicado',
        description: 'Complete 20 quizzes',
        icon: '🙏',
        category: 'basics',
        condition: (data) => data.stats.totalQuizzes >= 20,
        progress: (data) => ({ current: data.stats.totalQuizzes, target: 20 }),
        reward: { gems: 25, xp: 100 },
        rarity: 'rare'
    },
    {
        id: 'fifty_quizzes',
        name: 'Escriba Fiel',
        description: 'Complete 50 quizzes',
        icon: '✍️',
        category: 'basics',
        condition: (data) => data.stats.totalQuizzes >= 50,
        progress: (data) => ({ current: data.stats.totalQuizzes, target: 50 }),
        reward: { gems: 50, xp: 250 },
        rarity: 'epic'
    },
    {
        id: 'hundred_quizzes',
        name: 'Mestre das Escrituras',
        description: 'Complete 100 quizzes',
        icon: '👑',
        category: 'basics',
        condition: (data) => data.stats.totalQuizzes >= 100,
        progress: (data) => ({ current: data.stats.totalQuizzes, target: 100 }),
        reward: { gems: 100, xp: 500 },
        rarity: 'legendary'
    },
    {
        id: 'first_perfect',
        name: 'Sem Erro!',
        description: 'Acerte todas as perguntas em um quiz',
        icon: '💯',
        category: 'perfection',
        condition: (data) => data.stats.perfectQuizzes >= 1,
        progress: (data) => ({ current: data.stats.perfectQuizzes, target: 1 }),
        reward: { gems: 15, xp: 75 },
        rarity: 'rare'
    },
    {
        id: 'five_perfects',
        name: 'Perfeccionista',
        description: 'Consiga 5 quizzes perfeitos',
        icon: '🌟',
        category: 'perfection',
        condition: (data) => data.stats.perfectQuizzes >= 5,
        progress: (data) => ({ current: data.stats.perfectQuizzes, target: 5 }),
        reward: { gems: 30, xp: 150 },
        rarity: 'epic'
    },
    {
        id: 'ten_perfects',
        name: 'Imaculado',
        description: 'Consiga 10 quizzes perfeitos',
        icon: '✨',
        category: 'perfection',
        condition: (data) => data.stats.perfectQuizzes >= 10,
        progress: (data) => ({ current: data.stats.perfectQuizzes, target: 10 }),
        reward: { gems: 75, xp: 350 },
        rarity: 'legendary'
    },
    {
        id: 'combo_3',
        name: 'Em Sequência',
        description: 'Consiga um combo de 3 acertos',
        icon: '🔥',
        category: 'combos',
        condition: (data) => data.stats.maxCombo >= 3,
        progress: (data) => ({ current: data.stats.maxCombo, target: 3 }),
        reward: { gems: 5, xp: 30 },
        rarity: 'common'
    },
    {
        id: 'combo_5',
        name: 'Imparável!',
        description: 'Consiga um combo de 5 acertos',
        icon: '💥',
        category: 'combos',
        condition: (data) => data.stats.maxCombo >= 5,
        progress: (data) => ({ current: data.stats.maxCombo, target: 5 }),
        reward: { gems: 15, xp: 75 },
        rarity: 'rare'
    },
    {
        id: 'combo_8',
        name: 'Ungido!',
        description: 'Consiga um combo de 8 acertos',
        icon: '⚡',
        category: 'combos',
        condition: (data) => data.stats.maxCombo >= 8,
        progress: (data) => ({ current: data.stats.maxCombo, target: 8 }),
        reward: { gems: 30, xp: 150 },
        rarity: 'epic'
    },
    {
        id: 'combo_10',
        name: 'Cheio do Espírito',
        description: 'Consiga um combo de 10 acertos',
        icon: '🕊️',
        category: 'combos',
        condition: (data) => data.stats.maxCombo >= 10,
        progress: (data) => ({ current: data.stats.maxCombo, target: 10 }),
        reward: { gems: 50, xp: 250 },
        rarity: 'legendary'
    },
    {
        id: 'stars_5',
        name: 'Colecionador de Estrelas',
        description: 'Colete 5 estrelas no total',
        icon: '⭐',
        category: 'stars',
        condition: (data) => data.totalStars >= 5,
        progress: (data) => ({ current: data.totalStars, target: 5 }),
        reward: { gems: 10, xp: 50 },
        rarity: 'common'
    },
    {
        id: 'stars_15',
        name: 'Constelação',
        description: 'Colete 15 estrelas no total',
        icon: '🌠',
        category: 'stars',
        condition: (data) => data.totalStars >= 15,
        progress: (data) => ({ current: data.totalStars, target: 15 }),
        reward: { gems: 25, xp: 125 },
        rarity: 'rare'
    },
    {
        id: 'stars_30',
        name: 'Firmamento',
        description: 'Colete 30 estrelas no total',
        icon: '🌌',
        category: 'stars',
        condition: (data) => data.totalStars >= 30,
        progress: (data) => ({ current: data.totalStars, target: 30 }),
        reward: { gems: 50, xp: 250 },
        rarity: 'epic'
    },
    {
        id: 'try_all_ages',
        name: 'Explorador',
        description: 'Jogue em todas as 5 faixas etárias',
        icon: '🗺️',
        category: 'exploration',
        condition: (data) => {
            const ages = ['children', 'kids', 'teens', 'adults', 'scholars'];
            return ages.every(age => data.stats.ageGroupsPlayed && data.stats.ageGroupsPlayed.includes(age));
        },
        progress: (data) => ({
            current: data.stats.ageGroupsPlayed ? data.stats.ageGroupsPlayed.length : 0,
            target: 5
        }),
        reward: { gems: 30, xp: 150 },
        rarity: 'rare'
    },
    {
        id: 'children_master',
        name: 'Amigo das Crianças',
        description: 'Ganhe 3 estrelas em todas as categorias de Crianças',
        icon: '👶',
        category: 'mastery',
        condition: (data) => checkAllStars(data, 'children'),
        progress: (data) => progressAllStars(data, 'children'),
        reward: { gems: 25, xp: 100 },
        rarity: 'rare'
    },
    {
        id: 'kids_master',
        name: 'Mestre Júnior',
        description: 'Ganhe 3 estrelas em todas as categorias de Juniores',
        icon: '🧒',
        category: 'mastery',
        condition: (data) => checkAllStars(data, 'kids'),
        progress: (data) => progressAllStars(data, 'kids'),
        reward: { gems: 30, xp: 150 },
        rarity: 'rare'
    },
    {
        id: 'teens_master',
        name: 'Teólogo Jovem',
        description: 'Ganhe 3 estrelas em todas as categorias de Adolescentes',
        icon: '🧑',
        category: 'mastery',
        condition: (data) => checkAllStars(data, 'teens'),
        progress: (data) => progressAllStars(data, 'teens'),
        reward: { gems: 40, xp: 200 },
        rarity: 'epic'
    },
    {
        id: 'adults_master',
        name: 'Doutor da Lei',
        description: 'Ganhe 3 estrelas em todas as categorias de Adultos',
        icon: '👨‍🎓',
        category: 'mastery',
        condition: (data) => checkAllStars(data, 'adults'),
        progress: (data) => progressAllStars(data, 'adults'),
        reward: { gems: 60, xp: 300 },
        rarity: 'epic'
    },
    {
        id: 'scholars_master',
        name: 'Sumo Sacerdote',
        description: 'Ganhe 3 estrelas em todas as categorias de Teólogos',
        icon: '📜',
        category: 'mastery',
        condition: (data) => checkAllStars(data, 'scholars'),
        progress: (data) => progressAllStars(data, 'scholars'),
        reward: { gems: 100, xp: 500 },
        rarity: 'legendary'
    },
    {
        id: 'streak_3',
        name: 'Fiel por 3 dias',
        description: 'Mantenha uma sequência de 3 dias',
        icon: '📅',
        category: 'streak',
        condition: (data) => data.streak >= 3,
        progress: (data) => ({ current: data.streak, target: 3 }),
        reward: { gems: 10, xp: 50 },
        rarity: 'common'
    },
    {
        id: 'streak_7',
        name: 'Semana Santa',
        description: 'Mantenha uma sequência de 7 dias',
        icon: '🔥',
        category: 'streak',
        condition: (data) => data.streak >= 7,
        progress: (data) => ({ current: data.streak, target: 7 }),
        reward: { gems: 25, xp: 125 },
        rarity: 'rare'
    },
    {
        id: 'streak_14',
        name: 'Devocional Diário',
        description: 'Mantenha uma sequência de 14 dias',
        icon: '🌟',
        category: 'streak',
        condition: (data) => data.streak >= 14,
        progress: (data) => ({ current: data.streak, target: 14 }),
        reward: { gems: 50, xp: 250 },
        rarity: 'epic'
    },
    {
        id: 'streak_30',
        name: 'Mês de Oração',
        description: 'Mantenha uma sequência de 30 dias',
        icon: '👑',
        category: 'streak',
        condition: (data) => data.streak >= 30,
        progress: (data) => ({ current: data.streak, target: 30 }),
        reward: { gems: 100, xp: 500 },
        rarity: 'legendary'
    },
    {
        id: 'score_500',
        name: 'Acumulador',
        description: 'Acumule 500 pontos totais',
        icon: '🏅',
        category: 'score',
        condition: (data) => data.totalScore >= 500,
        progress: (data) => ({ current: data.totalScore, target: 500 }),
        reward: { gems: 10, xp: 50 },
        rarity: 'common'
    },
    {
        id: 'score_2500',
        name: 'Rico em Conhecimento',
        description: 'Acumule 2.500 pontos totais',
        icon: '💰',
        category: 'score',
        condition: (data) => data.totalScore >= 2500,
        progress: (data) => ({ current: data.totalScore, target: 2500 }),
        reward: { gems: 25, xp: 125 },
        rarity: 'rare'
    },
    {
        id: 'score_10000',
        name: 'Tesouro Celestial',
        description: 'Acumule 10.000 pontos totais',
        icon: '💎',
        category: 'score',
        condition: (data) => data.totalScore >= 10000,
        progress: (data) => ({ current: data.totalScore, target: 10000 }),
        reward: { gems: 75, xp: 350 },
        rarity: 'epic'
    },
    {
        id: 'speed_demon',
        name: 'Rápido como o Vento',
        description: 'Complete um quiz em menos de 30 segundos',
        icon: '⚡',
        category: 'speed',
        condition: (data) => data.stats.fastestQuiz > 0 && data.stats.fastestQuiz <= 30,
        progress: (data) => ({ current: data.stats.fastestQuiz > 0 && data.stats.fastestQuiz <= 30 ? 1 : 0, target: 1 }),
        reward: { gems: 20, xp: 100 },
        rarity: 'rare'
    },
    {
        id: 'gems_50',
        name: 'Pequeno Tesouro',
        description: 'Acumule 50 gemas',
        icon: '💎',
        category: 'gems',
        condition: (data) => data.gems >= 50,
        progress: (data) => ({ current: data.gems, target: 50 }),
        reward: { gems: 10, xp: 50 },
        rarity: 'common'
    },
    {
        id: 'gems_200',
        name: 'Cofre Real',
        description: 'Acumule 200 gemas',
        icon: '👑',
        category: 'gems',
        condition: (data) => data.gems >= 200,
        progress: (data) => ({ current: data.gems, target: 200 }),
        reward: { gems: 25, xp: 125 },
        rarity: 'rare'
    },
    {
        id: 'daily_first',
        name: 'Primeiro Presente',
        description: 'Colete sua primeira recompensa diária',
        icon: '🎁',
        category: 'daily',
        condition: (data) => data.stats.dailyRewardsClaimed >= 1,
        progress: (data) => ({ current: data.stats.dailyRewardsClaimed, target: 1 }),
        reward: { gems: 5, xp: 25 },
        rarity: 'common'
    },
    {
        id: 'daily_7',
        name: 'Semana Completa',
        description: 'Colete 7 recompensas diárias',
        icon: '📦',
        category: 'daily',
        condition: (data) => data.stats.dailyRewardsClaimed >= 7,
        progress: (data) => ({ current: data.stats.dailyRewardsClaimed, target: 7 }),
        reward: { gems: 20, xp: 100 },
        rarity: 'rare'
    },
    {
        id: 'daily_30',
        name: 'Fidelidade Mensal',
        description: 'Colete 30 recompensas diárias',
        icon: '🏆',
        category: 'daily',
        condition: (data) => data.stats.dailyRewardsClaimed >= 30,
        progress: (data) => ({ current: data.stats.dailyRewardsClaimed, target: 30 }),
        reward: { gems: 75, xp: 350 },
        rarity: 'epic'
    },
    {
        id: 'all_achievements',
        name: 'Completista Divino',
        description: 'Desbloqueie todas as outras conquistas',
        icon: '🌈',
        category: 'special',
        condition: (data) => {
            const otherAchs = ACHIEVEMENTS.filter(a => a.id !== 'all_achievements');
            return otherAchs.every(a => data.achievements && data.achievements[a.id]);
        },
        progress: (data) => {
            const otherAchs = ACHIEVEMENTS.filter(a => a.id !== 'all_achievements');
            const unlocked = otherAchs.filter(a => data.achievements && data.achievements[a.id]).length;
            return { current: unlocked, target: otherAchs.length };
        },
        reward: { gems: 200, xp: 1000 },
        rarity: 'legendary'
    }
];

// Helpers
function checkAllStars(data, ageGroup) {
    if (!CATEGORIES_META[ageGroup]) return false;
    const categories = Object.keys(CATEGORIES_META[ageGroup]);
    return categories.every(cat => {
        const key = `${ageGroup}_${cat}_stars`;
        return (data.categories[key] || 0) >= 3;
    });
}

function progressAllStars(data, ageGroup) {
    if (!CATEGORIES_META[ageGroup]) return { current: 0, target: 1 };
    const categories = Object.keys(CATEGORIES_META[ageGroup]);
    const completed = categories.filter(cat => {
        const key = `${ageGroup}_${cat}_stars`;
        return (data.categories[key] || 0) >= 3;
    }).length;
    return { current: completed, target: categories.length };
}

// ============================================
// GERENCIADOR DE CONQUISTAS
// ============================================
class AchievementsManager {
    constructor(gameInstance) {
        this.game = gameInstance;
        this.pendingPopups = [];
        this.isShowingPopup = false;
    }

    checkAll() {
        const newlyUnlocked = [];
        const data = this.game.playerData;

        if (!data.achievements) data.achievements = {};
        if (!data.stats) {
            data.stats = {
                totalQuizzes: 0, perfectQuizzes: 0, maxCombo: 0,
                ageGroupsPlayed: [], fastestQuiz: 0, dailyRewardsClaimed: 0
            };
        }

        ACHIEVEMENTS.forEach(ach => {
            if (!data.achievements[ach.id] && ach.condition(data)) {
                data.achievements[ach.id] = {
                    unlockedAt: new Date().toISOString(),
                    seen: false
                };
                data.gems = (data.gems || 0) + ach.reward.gems;
                data.xp = (data.xp || 0) + ach.reward.xp;
                newlyUnlocked.push(ach);
            }
        });

        if (newlyUnlocked.length > 0) {
            this.game.savePlayerData();
            this.pendingPopups.push(...newlyUnlocked);
            if (!this.isShowingPopup) {
                this.showNextPopup();
            }
        }

        return newlyUnlocked;
    }

    showNextPopup() {
        if (this.pendingPopups.length === 0) {
            this.isShowingPopup = false;
            return;
        }
        this.isShowingPopup = true;
        const ach = this.pendingPopups.shift();
        this.showAchievementPopup(ach);
    }

    showAchievementPopup(ach) {
        const popup = document.getElementById('achievement-popup');
        if (!popup) return;
        document.getElementById('ach-popup-icon').textContent = ach.icon;
        document.getElementById('ach-popup-name').textContent = ach.name;
        document.getElementById('ach-popup-desc').textContent = ach.description;
        document.getElementById('ach-popup-reward').innerHTML = `
            <span style="color: var(--gem-color)">💎 +${ach.reward.gems} Gemas</span>
            <span style="color: var(--warning)">⭐ +${ach.reward.xp} XP</span>
        `;
        popup.classList.remove('hidden');
        playAchievementSound();
    }

    getUnlockedCount() {
        const data = this.game.playerData;
        if (!data.achievements) return 0;
        return Object.keys(data.achievements).length;
    }

    getTotalCount() {
        return ACHIEVEMENTS.length;
    }

    hasUnseenAchievements() {
        const data = this.game.playerData;
        if (!data.achievements) return false;
        return Object.values(data.achievements).some(a => !a.seen);
    }

    markAllSeen() {
        const data = this.game.playerData;
        if (!data.achievements) return;
        Object.values(data.achievements).forEach(a => a.seen = true);
        this.game.savePlayerData();
    }
}

function playAchievementSound() {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const notes = [523, 659, 784, 1047];
        notes.forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.15);
            gain.gain.setValueAtTime(0.08, ctx.currentTime + i * 0.15);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.15 + 0.3);
            osc.start(ctx.currentTime + i * 0.15);
            osc.stop(ctx.currentTime + i * 0.15 + 0.3);
        });
    } catch (e) {}
}
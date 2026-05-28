// ============================================
// SISTEMA DE RECOMPENSAS DIÁRIAS
// ============================================

const DAILY_REWARDS = [
    {
        day: 1,
        icon: '🎁',
        name: 'Presente do Dia 1',
        rewards: { gems: 5, xp: 20 },
        verse: { text: 'O Senhor é o meu pastor, nada me faltará.', ref: 'Salmo 23:1' }
    },
    {
        day: 2,
        icon: '📖',
        name: 'Bênção do Dia 2',
        rewards: { gems: 8, xp: 30 },
        verse: { text: 'Confie no Senhor de todo o seu coração.', ref: 'Provérbios 3:5' }
    },
    {
        day: 3,
        icon: '⭐',
        name: 'Estrela do Dia 3',
        rewards: { gems: 10, xp: 40 },
        verse: { text: 'Tudo posso naquele que me fortalece.', ref: 'Filipenses 4:13' }
    },
    {
        day: 4,
        icon: '💎',
        name: 'Gema do Dia 4',
        rewards: { gems: 15, xp: 50 },
        verse: { text: 'Busquem em primeiro lugar o Reino de Deus.', ref: 'Mateus 6:33' }
    },
    {
        day: 5,
        icon: '🔥',
        name: 'Chama do Dia 5',
        rewards: { gems: 18, xp: 60 },
        verse: { text: 'Sejam fortes e corajosos!', ref: 'Josué 1:9' }
    },
    {
        day: 6,
        icon: '🌟',
        name: 'Luz do Dia 6',
        rewards: { gems: 22, xp: 75 },
        verse: { text: 'A tua palavra é lâmpada para os meus pés.', ref: 'Salmo 119:105' }
    },
    {
        day: 7,
        icon: '👑',
        name: 'Coroa do Dia 7 - BÔNUS!',
        rewards: { gems: 50, xp: 150, bonusGems: 25 },
        verse: { text: 'Mas os que esperam no Senhor renovarão as suas forças.', ref: 'Isaías 40:31' },
        isBonus: true
    }
];

const STREAK_BONUSES = [
    { days: 3, name: '3 Dias Fiéis', icon: '🌱', bonus: { gems: 10, xp: 30 } },
    { days: 7, name: 'Semana Santa', icon: '📿', bonus: { gems: 25, xp: 75 } },
    { days: 14, name: '2 Semanas de Fé', icon: '🕯️', bonus: { gems: 50, xp: 150 } },
    { days: 21, name: '3 Semanas de Graça', icon: '🔔', bonus: { gems: 75, xp: 225 } },
    { days: 30, name: 'Mês Abençoado', icon: '👑', bonus: { gems: 150, xp: 500 } }
];

// ============================================
// GERENCIADOR DE RECOMPENSAS DIÁRIAS
// ============================================
class DailyRewardsManager {
    constructor(gameInstance) {
        this.game = gameInstance;
        this.initDailyData();
    }

    initDailyData() {
        const data = this.game.playerData;
        if (!data.daily) {
            data.daily = {
                currentDay: 1,
                lastClaimDate: null,
                totalClaimed: 0,
                history: [],
                streakBonusesClaimed: []
            };
            this.game.savePlayerData();
        }
    }

    canClaim() {
        const data = this.game.playerData.daily;
        if (!data.lastClaimDate) return true;

        const lastClaim = new Date(data.lastClaimDate);
        const now = new Date();

        const diffHours = (now - lastClaim) / (1000 * 60 * 60);
        if (diffHours > 48) {
            data.currentDay = 1;
            this.game.savePlayerData();
        }

        const lastClaimDay = lastClaim.toDateString();
        const today = now.toDateString();
        return lastClaimDay !== today;
    }

    getTimeUntilNextReward() {
        const data = this.game.playerData.daily;
        if (!data.lastClaimDate) return null;

        const lastClaim = new Date(data.lastClaimDate);
        const nextClaim = new Date(lastClaim);
        nextClaim.setDate(nextClaim.getDate() + 1);
        nextClaim.setHours(0, 0, 0, 0);

        const now = new Date();
        const diff = nextClaim - now;

        if (diff <= 0) return null;

        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        return { hours, minutes };
    }

    getCurrentDay() {
        return this.game.playerData.daily.currentDay;
    }

    getCurrentReward() {
        const day = this.getCurrentDay();
        const index = (day - 1) % DAILY_REWARDS.length;
        return DAILY_REWARDS[index];
    }

    claim() {
        if (!this.canClaim()) return null;

        const data = this.game.playerData;
        const daily = data.daily;
        const reward = this.getCurrentReward();
        const day = this.getCurrentDay();

        data.gems = (data.gems || 0) + reward.rewards.gems;
        data.xp = (data.xp || 0) + reward.rewards.xp;

        if (reward.rewards.bonusGems) {
            data.gems += reward.rewards.bonusGems;
        }

        const streakBonus = this.checkStreakBonus(day);
        if (streakBonus) {
            data.gems += streakBonus.bonus.gems;
            data.xp += streakBonus.bonus.xp;
        }

        daily.lastClaimDate = new Date().toISOString();
        daily.totalClaimed++;
        daily.currentDay = day + 1;

        daily.history.unshift({
            day: day,
            reward: reward,
            streakBonus: streakBonus,
            date: new Date().toISOString()
        });

        if (daily.history.length > 30) {
            daily.history = daily.history.slice(0, 30);
        }

        if (!data.stats) data.stats = {};
        data.stats.dailyRewardsClaimed = daily.totalClaimed;

        this.game.savePlayerData();

        return {
            day,
            reward,
            streakBonus,
            totalGems: reward.rewards.gems + (reward.rewards.bonusGems || 0) + (streakBonus ? streakBonus.bonus.gems : 0),
            totalXP: reward.rewards.xp + (streakBonus ? streakBonus.bonus.xp : 0)
        };
    }

    checkStreakBonus(day) {
        const daily = this.game.playerData.daily;
        for (const bonus of STREAK_BONUSES) {
            if (day === bonus.days && !daily.streakBonusesClaimed.includes(bonus.days)) {
                daily.streakBonusesClaimed.push(bonus.days);
                return bonus;
            }
        }
        return null;
    }

    getCalendarData() {
        const currentDay = this.getCurrentDay();
        const canClaim = this.canClaim();

        return DAILY_REWARDS.map((reward, index) => {
            const dayNum = index + 1;
            let status;

            if (dayNum < ((currentDay - 1) % 7) + 1) {
                status = 'collected';
            } else if (dayNum === ((currentDay - 1) % 7) + 1) {
                status = canClaim ? 'today' : 'today collected';
            } else {
                status = 'future';
            }

            return { ...reward, status, dayNum };
        });
    }

    getStreakBonusData() {
        const daily = this.game.playerData.daily;
        const currentDay = this.getCurrentDay();

        return STREAK_BONUSES.map(bonus => {
            let status;
            if (daily.streakBonusesClaimed.includes(bonus.days)) {
                status = 'earned';
            } else if (currentDay >= bonus.days) {
                status = 'active';
            } else {
                status = 'locked';
            }
            return { ...bonus, status };
        });
    }

    getHistory() {
        return this.game.playerData.daily.history || [];
    }
}
// ============================================
// SISTEMA MULTI-PERFIL (FAMÍLIA)
// ============================================

class ProfileManager {
    constructor() {
        this.STORAGE_KEY = 'bibleQuizFamily';
        this.CURRENT_PROFILE_KEY = 'currentProfileId';
        this.data = this.loadFamilyData();
    }

    loadFamilyData() {
        const saved = localStorage.getItem(this.STORAGE_KEY);
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                console.error('Erro ao carregar:', e);
            }
        }
        return {
            profiles: [],
            settings: { theme: 'dark', sound: true, vibration: true }
        };
    }

    saveFamilyData() {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.data));
    }

    getAllProfiles() {
        return this.data.profiles || [];
    }

    getCurrentProfileId() {
        return localStorage.getItem(this.CURRENT_PROFILE_KEY);
    }

    setCurrentProfileId(id) {
        localStorage.setItem(this.CURRENT_PROFILE_KEY, id);
    }

    getCurrentProfile() {
        const id = this.getCurrentProfileId();
        if (!id) return null;
        return this.data.profiles.find(p => p.id === id);
    }

    createProfile(name, avatar, ageGroup) {
        const id = 'profile_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5);
        const newProfile = {
            id: id,
            name: name,
            avatar: avatar,
            ageGroup: ageGroup,
            createdAt: new Date().toISOString(),
            playerData: this.createEmptyPlayerData()
        };
        this.data.profiles.push(newProfile);
        this.saveFamilyData();
        return newProfile;
    }

    createEmptyPlayerData() {
        return {
            totalScore: 0,
            totalStars: 0,
            xp: 0,
            gems: 0,
            streak: 0,
            lastPlayed: null,
            categories: {},
            rankings: [],
            achievements: {},
            stats: {
                totalQuizzes: 0,
                perfectQuizzes: 0,
                maxCombo: 0,
                ageGroupsPlayed: [],
                fastestQuiz: 0,
                dailyRewardsClaimed: 0,
                totalQuestionsAnswered: 0,
                totalCorrectAnswers: 0,
                totalTimeSpent: 0,
                categoryStats: {},
                ageGroupStats: {},
                dailyActivity: {}
            },
            daily: {
                currentDay: 1,
                lastClaimDate: null,
                totalClaimed: 0,
                history: [],
                streakBonusesClaimed: []
            }
        };
    }

    updateProfile(id, updates) {
        const profile = this.data.profiles.find(p => p.id === id);
        if (profile) {
            Object.assign(profile, updates);
            this.saveFamilyData();
            return profile;
        }
        return null;
    }

    deleteProfile(id) {
        this.data.profiles = this.data.profiles.filter(p => p.id !== id);
        if (this.getCurrentProfileId() === id) {
            localStorage.removeItem(this.CURRENT_PROFILE_KEY);
        }
        this.saveFamilyData();
    }

    saveProfileData(id, playerData) {
        const profile = this.data.profiles.find(p => p.id === id);
        if (profile) {
            profile.playerData = playerData;
            this.saveFamilyData();
        }
    }

    getFamilyRanking(sortBy = 'score') {
        const profiles = this.getAllProfiles().map(p => ({
            id: p.id,
            name: p.name,
            avatar: p.avatar,
            ageGroup: p.ageGroup,
            score: p.playerData.totalScore || 0,
            stars: p.playerData.totalStars || 0,
            quizzes: p.playerData.stats?.totalQuizzes || 0,
            streak: p.playerData.streak || 0,
            level: this.getProfileLevel(p),
            gems: p.playerData.gems || 0
        }));

        const sortKey = sortBy === 'score' ? 'score' :
                        sortBy === 'stars' ? 'stars' :
                        sortBy === 'quizzes' ? 'quizzes' : 'streak';

        return profiles.sort((a, b) => b[sortKey] - a[sortKey]);
    }

    getProfileLevel(profile) {
        const xpLevels = [0, 100, 250, 500, 1000, 2000, 3500, 5500, 8000, 12000];
        const names = ["Iniciante", "Aprendiz", "Estudante", "Conhecedor", "Sábio", "Mestre", "Doutor", "Escriba", "Profeta", "Ancião"];
        const xp = profile.playerData.xp || 0;
        let level = 0;
        for (let i = xpLevels.length - 1; i >= 0; i--) {
            if (xp >= xpLevels[i]) { level = i; break; }
        }
        return { num: level + 1, name: names[level] };
    }

    getGlobalSettings() {
        return this.data.settings || { theme: 'dark', sound: true, vibration: true };
    }

    saveGlobalSettings(settings) {
        this.data.settings = settings;
        this.saveFamilyData();
    }
}

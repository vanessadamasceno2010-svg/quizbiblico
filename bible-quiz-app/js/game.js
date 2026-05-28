// ============================================
// MOTOR DO JOGO - QUIZ BÍBLICO v2.0
// ============================================

class BibleQuizGame {
    constructor() {
        this.currentAgeGroup = null;
        this.currentCategory = null;
        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.correctAnswers = 0;
        this.combo = 0;
        this.maxCombo = 0;
        this.gemsEarned = 0;
        this.timer = null;
        this.timeLeft = 0;
        this.totalTime = 0;
        this.startTime = null;
        this.isAnswered = false;
        this.hintsUsed = { fifty: false, time: false, verse: false };
        this.playerData = this.loadPlayerData();

        this.timePerQuestion = { children: 45, kids: 35, teens: 30, adults: 25, scholars: 20 };
        this.questionsPerRound = { children: 6, kids: 8, teens: 10, adults: 10, scholars: 8 };

        this.levelNames = [
            "Iniciante", "Aprendiz", "Estudante", "Conhecedor", "Sábio",
            "Mestre", "Doutor da Lei", "Escriba Real", "Profeta", "Ancião"
        ];
        this.levelXP = [0, 100, 250, 500, 1000, 2000, 3500, 5500, 8000, 12000];

        this.hintCosts = { fifty: 5, skip: 8, time: 3, verse: 4 };
    }

    loadPlayerData() {
        const saved = localStorage.getItem('bibleQuizData');
        if (saved) {
            try {
                const data = JSON.parse(saved);
                if (!data.gems) data.gems = 0;
                if (!data.achievements) data.achievements = {};
                if (!data.profile) data.profile = { name: 'Jogador', avatar: '😀', created: null };
                if (!data.settings) data.settings = { theme: 'dark', sound: true, vibration: true };
                if (!data.stats) {
                    data.stats = {
                        totalQuizzes: 0, perfectQuizzes: 0, maxCombo: 0,
                        ageGroupsPlayed: [], fastestQuiz: 0, dailyRewardsClaimed: 0,
                        totalQuestionsAnswered: 0, totalCorrectAnswers: 0, totalTimeSpent: 0,
                        categoryStats: {}, ageGroupStats: {}, dailyActivity: {}
                    };
                }
                if (!data.stats.categoryStats) data.stats.categoryStats = {};
                if (!data.stats.ageGroupStats) data.stats.ageGroupStats = {};
                if (!data.stats.dailyActivity) data.stats.dailyActivity = {};
                if (!data.daily) {
                    data.daily = {
                        currentDay: 1, lastClaimDate: null, totalClaimed: 0,
                        history: [], streakBonusesClaimed: []
                    };
                }
                return data;
            } catch (e) {
                console.error('Erro ao carregar dados:', e);
            }
        }
        return {
            totalScore: 0, totalStars: 0, xp: 0, gems: 0,
            streak: 0, lastPlayed: null, categories: {},
            rankings: [], achievements: {},
            profile: { name: 'Jogador', avatar: '😀', created: null },
            settings: { theme: 'dark', sound: true, vibration: true },
            stats: {
                totalQuizzes: 0, perfectQuizzes: 0, maxCombo: 0,
                ageGroupsPlayed: [], fastestQuiz: 0, dailyRewardsClaimed: 0,
                totalQuestionsAnswered: 0, totalCorrectAnswers: 0, totalTimeSpent: 0,
                categoryStats: {}, ageGroupStats: {}, dailyActivity: {}
            },
            daily: {
                currentDay: 1, lastClaimDate: null, totalClaimed: 0,
                history: [], streakBonusesClaimed: []
            }
        };
    }

    savePlayerData() {
        localStorage.setItem('bibleQuizData', JSON.stringify(this.playerData));
    }

    getPlayerLevel() {
        let level = 0;
        for (let i = this.levelXP.length - 1; i >= 0; i--) {
            if (this.playerData.xp >= this.levelXP[i]) {
                level = i;
                break;
            }
        }
        return level;
    }

    getLevelName() {
        return this.levelNames[this.getPlayerLevel()];
    }

    getLevelProgress() {
        const level = this.getPlayerLevel();
        if (level >= this.levelXP.length - 1) return 100;
        const cur = this.levelXP[level];
        const next = this.levelXP[level + 1];
        return Math.min(((this.playerData.xp - cur) / (next - cur)) * 100, 100);
    }

    getXPForNextLevel() {
        const level = this.getPlayerLevel();
        if (level >= this.levelXP.length - 1) return this.playerData.xp;
        return this.levelXP[level + 1];
    }

    getCategoryLevel(ageGroup) {
        return this.playerData.categories[`${ageGroup}_level`] || 0;
    }

    setCategoryLevel(ageGroup, level) {
        this.playerData.categories[`${ageGroup}_level`] = level;
        this.savePlayerData();
    }

    getCategoryStars(ageGroup, category) {
        return this.playerData.categories[`${ageGroup}_${category}_stars`] || 0;
    }

    setCategoryStars(ageGroup, category, stars) {
        const key = `${ageGroup}_${category}_stars`;
        const cur = this.playerData.categories[key] || 0;
        if (stars > cur) {
            this.playerData.categories[key] = stars;
            this.playerData.totalStars += (stars - cur);
            this.savePlayerData();
        }
    }

    updateStreak() {
        const today = new Date().toDateString();
        const last = this.playerData.lastPlayed;
        if (last === today) return;
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        if (last === yesterday.toDateString()) {
            this.playerData.streak++;
        } else if (last !== today) {
            this.playerData.streak = 1;
        }
        this.playerData.lastPlayed = today;
        this.savePlayerData();
    }

    startQuiz(ageGroup, category) {
        this.currentAgeGroup = ageGroup;
        this.currentCategory = category;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.correctAnswers = 0;
        this.combo = 0;
        this.maxCombo = 0;
        this.gemsEarned = 0;
        this.startTime = Date.now();
        this.isAnswered = false;
        this.hintsUsed = { fifty: false, time: false, verse: false };

        const allQ = QUESTIONS_DB[ageGroup][category].map(q => ({
            question: q.question,
            options: [...q.options],
            correct: q.correct,
            explanation: q.explanation,
            reference: q.reference,
            verse: q.verse
        }));

        this.shuffleArray(allQ);
        const count = Math.min(this.questionsPerRound[ageGroup], allQ.length);
        this.currentQuestions = allQ.slice(0, count);

        this.currentQuestions.forEach(q => {
            const correct = q.options[q.correct];
            this.shuffleArray(q.options);
            q.correct = q.options.indexOf(correct);
        });

        this.updateStreak();

        if (!this.playerData.stats.ageGroupsPlayed.includes(ageGroup)) {
            this.playerData.stats.ageGroupsPlayed.push(ageGroup);
            this.savePlayerData();
        }
    }

    startTimer(callback) {
        this.clearTimer();
        this.timeLeft = this.timePerQuestion[this.currentAgeGroup];
        this.totalTime = this.timeLeft;
        this.timer = setInterval(() => {
            this.timeLeft--;
            if (callback) callback(this.timeLeft, this.totalTime);
            if (this.timeLeft <= 0) {
                this.clearTimer();
                this.handleTimeOut();
            }
        }, 1000);
    }

    clearTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    handleTimeOut() {
        if (!this.isAnswered) {
            this.isAnswered = true;
            this.combo = 0;
            document.dispatchEvent(new CustomEvent('quizTimeout'));
        }
    }

    answerQuestion(selectedIndex) {
        if (this.isAnswered) return null;
        this.isAnswered = true;
        this.clearTimer();

        const question = this.currentQuestions[this.currentQuestionIndex];
        const isCorrect = selectedIndex === question.correct;
        let gemsForThis = 0;

        this.playerData.stats.totalQuestionsAnswered++;

        if (isCorrect) {
            this.correctAnswers++;
            this.combo++;
            if (this.combo > this.maxCombo) this.maxCombo = this.combo;
            this.playerData.stats.totalCorrectAnswers++;

            const basePoints = this.getBasePoints();
            const comboBonus = Math.min(this.combo, 5);
            const timeBonus = Math.floor(this.timeLeft * 2);
            this.score += basePoints * comboBonus + timeBonus;

            gemsForThis = 1;
            if (this.combo >= 3) gemsForThis = 2;
            if (this.combo >= 5) gemsForThis = 3;
            this.gemsEarned += gemsForThis;
        } else {
            this.combo = 0;
        }

        return {
            isCorrect,
            correctIndex: question.correct,
            explanation: question.explanation,
            reference: question.reference,
            verse: question.verse || '',
            score: this.score,
            combo: this.combo,
            gemsEarned: gemsForThis
        };
    }

    getBasePoints() {
        return { children: 10, kids: 15, teens: 20, adults: 30, scholars: 50 }[this.currentAgeGroup] || 10;
    }

    nextQuestion() {
        this.currentQuestionIndex++;
        this.isAnswered = false;
        this.hintsUsed = { fifty: false, time: false, verse: false };
        if (this.currentQuestionIndex >= this.currentQuestions.length) {
            return { finished: true };
        }
        return {
            finished: false,
            question: this.currentQuestions[this.currentQuestionIndex],
            questionNumber: this.currentQuestionIndex + 1,
            totalQuestions: this.currentQuestions.length
        };
    }

    getCurrentQuestion() {
        return {
            question: this.currentQuestions[this.currentQuestionIndex],
            questionNumber: this.currentQuestionIndex + 1,
            totalQuestions: this.currentQuestions.length
        };
    }

    useFiftyFifty() {
        if (this.hintsUsed.fifty || this.isAnswered) return null;
        if (this.playerData.gems < this.hintCosts.fifty) return { error: 'no_gems' };

        this.playerData.gems -= this.hintCosts.fifty;
        this.hintsUsed.fifty = true;
        this.savePlayerData();

        const question = this.currentQuestions[this.currentQuestionIndex];
        const wrongIndices = [];
        question.options.forEach((_, i) => {
            if (i !== question.correct) wrongIndices.push(i);
        });
        this.shuffleArray(wrongIndices);
        return { success: true, toHide: wrongIndices.slice(0, 2) };
    }

    useSkip() {
        if (this.isAnswered) return null;
        if (this.playerData.gems < this.hintCosts.skip) return { error: 'no_gems' };

        this.playerData.gems -= this.hintCosts.skip;
        this.savePlayerData();
        this.clearTimer();
        this.isAnswered = true;
        this.combo = 0;
        return { success: true };
    }

    useExtraTime() {
        if (this.hintsUsed.time || this.isAnswered) return null;
        if (this.playerData.gems < this.hintCosts.time) return { error: 'no_gems' };

        this.playerData.gems -= this.hintCosts.time;
        this.hintsUsed.time = true;
        this.timeLeft += 15;
        this.totalTime += 15;
        this.savePlayerData();
        return { success: true };
    }

    useVerseHint() {
        if (this.hintsUsed.verse || this.isAnswered) return null;
        if (this.playerData.gems < this.hintCosts.verse) return { error: 'no_gems' };

        this.playerData.gems -= this.hintCosts.verse;
        this.hintsUsed.verse = true;
        this.savePlayerData();

        const question = this.currentQuestions[this.currentQuestionIndex];
        return {
            success: true,
            verse: question.verse || question.explanation,
            reference: question.reference
        };
    }

    finishQuiz() {
        const total = this.currentQuestions.length;
        const pct = (this.correctAnswers / total) * 100;
        const elapsed = Math.floor((Date.now() - this.startTime) / 1000);

        let stars = 0;
        if (pct >= 90) stars = 3;
        else if (pct >= 70) stars = 2;
        else if (pct >= 50) stars = 1;

        const bonusGems = stars * 3;
        this.gemsEarned += bonusGems;

        const xpGain = Math.floor(this.score * 0.5) + (stars * 20) + (this.maxCombo * 5);

        this.playerData.xp += xpGain;
        this.playerData.totalScore += this.score;
        this.playerData.gems = (this.playerData.gems || 0) + this.gemsEarned;

        this.playerData.stats.totalQuizzes++;
        this.playerData.stats.totalTimeSpent += elapsed;
        if (pct === 100) this.playerData.stats.perfectQuizzes++;
        if (this.maxCombo > this.playerData.stats.maxCombo) {
            this.playerData.stats.maxCombo = this.maxCombo;
        }
        if (elapsed > 0 && (this.playerData.stats.fastestQuiz === 0 || elapsed < this.playerData.stats.fastestQuiz)) {
            this.playerData.stats.fastestQuiz = elapsed;
        }

        const catKey = `${this.currentAgeGroup}_${this.currentCategory}`;
        if (!this.playerData.stats.categoryStats[catKey]) {
            this.playerData.stats.categoryStats[catKey] = { played: 0, correct: 0, total: 0 };
        }
        this.playerData.stats.categoryStats[catKey].played++;
        this.playerData.stats.categoryStats[catKey].correct += this.correctAnswers;
        this.playerData.stats.categoryStats[catKey].total += total;

        if (!this.playerData.stats.ageGroupStats[this.currentAgeGroup]) {
            this.playerData.stats.ageGroupStats[this.currentAgeGroup] = { played: 0, correct: 0, total: 0 };
        }
        this.playerData.stats.ageGroupStats[this.currentAgeGroup].played++;
        this.playerData.stats.ageGroupStats[this.currentAgeGroup].correct += this.correctAnswers;
        this.playerData.stats.ageGroupStats[this.currentAgeGroup].total += total;

        const today = new Date().toDateString();
        if (!this.playerData.stats.dailyActivity[today]) {
            this.playerData.stats.dailyActivity[today] = { quizzes: 0, correct: 0 };
        }
        this.playerData.stats.dailyActivity[today].quizzes++;
        this.playerData.stats.dailyActivity[today].correct += this.correctAnswers;

        this.setCategoryStars(this.currentAgeGroup, this.currentCategory, stars);

        if (stars >= 2) {
            const catLevel = this.getCategoryLevel(this.currentAgeGroup);
            const keys = Object.keys(CATEGORIES_META[this.currentAgeGroup]);
            const idx = keys.indexOf(this.currentCategory);
            if (idx >= catLevel) this.setCategoryLevel(this.currentAgeGroup, idx + 1);
        }

        this.addToRanking({
            ageGroup: this.currentAgeGroup,
            category: this.currentCategory,
            score: this.score,
            correct: this.correctAnswers,
            total,
            stars,
            date: new Date().toISOString()
        });

        this.savePlayerData();

        let title, message, animation;
        if (pct === 100) {
            title = "PERFEITO! 🌟";
            message = "Incrível conhecimento bíblico!";
            animation = "🏆";
        } else if (pct >= 80) {
            title = "Excelente! 🎉";
            message = "Ótimo conhecimento da Palavra!";
            animation = "🌟";
        } else if (pct >= 60) {
            title = "Muito Bom! 👏";
            message = "Continue estudando!";
            animation = "😊";
        } else if (pct >= 40) {
            title = "Bom Esforço! 💪";
            message = "Pratique mais!";
            animation = "📖";
        } else {
            title = "Continue! 🙏";
            message = "Leia mais a Bíblia!";
            animation = "💪";
        }

        const verse = MOTIVATIONAL_VERSES[Math.floor(Math.random() * MOTIVATIONAL_VERSES.length)];

        return {
            score: this.score,
            correct: this.correctAnswers,
            total,
            percentage: pct,
            stars,
            xpGain,
            gemsEarned: this.gemsEarned,
            elapsedTime: elapsed,
            maxCombo: this.maxCombo,
            title,
            message,
            animation,
            verse
        };
    }

    addToRanking(entry) {
        this.playerData.rankings.push(entry);
        this.playerData.rankings.sort((a, b) => b.score - a.score);
        if (this.playerData.rankings.length > 50) {
            this.playerData.rankings = this.playerData.rankings.slice(0, 50);
        }
        this.savePlayerData();
    }

    getRanking(filter = 'all') {
        if (filter === 'all') return this.playerData.rankings;
        return this.playerData.rankings.filter(r => r.ageGroup === filter);
    }

    clearRanking() {
        this.playerData.rankings = [];
        this.savePlayerData();
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}
class Game {
    constructor(scenarios) {
        this.scenarios = this.shuffle(scenarios);
        this.currentIndex = 0;
        this.score = 0;
        this.currentScenario = null;
        this.attemptsLeft = 3;
    }

    shuffle(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    getNextScenario() {
        if (this.currentIndex < this.scenarios.length) {
            this.currentScenario = this.scenarios[this.currentIndex];
            return this.currentScenario;
        }
        return null;
    }

    submitGuess(guess) {
        if (!this.currentScenario) return { correct: false, message: "No more rounds." };

        const normalizedGuess = guess.trim().toLowerCase();
        const normalizedAnswer = this.currentScenario.answer.toLowerCase();

        if (normalizedGuess === normalizedAnswer) {
            this.score++;
            this.currentIndex++;
            this.attemptsLeft = 3;
            return { correct: true, message: "Correct!" };
        } else {
            this.attemptsLeft--;
            if (this.attemptsLeft <= 0) {
                this.currentIndex++;
                this.attemptsLeft = 3;
                return { correct: false, message: "Wrong! Out of attempts." };
            }
            return { correct: false, message: `Wrong! ${this.attemptsLeft} attempts left.` };
        }
    }

    isGameOver() {
        return this.currentIndex >= this.scenarios.length;
    }

    getScore() {
        return this.score;
    }
}

class AudioPlayer {
    constructor() {
        this.sounds = {
            correct: new Audio('audio/ding.mp3'),
            wrong: new Audio('audio/buzzer.mp3'),
            click: new Audio('audio/click.mp3'),
            win: new Audio('audio/chaching.mp3')
        };
    }

    play(soundName) {
        const sound = this.sounds[soundName];
        if (sound) {
            sound.currentTime = 0;
            sound.play().catch(e => console.warn(`Audio play failed for ${soundName}:`, e));
        }
    }
}

class UI {
    constructor(game) {
        this.game = game;
        this.audio = new AudioPlayer();
        
        // DOM Elements
        this.screens = {
            start: document.getElementById('start-screen'),
            play: document.getElementById('play-screen'),
            end: document.getElementById('end-screen')
        };
        
        this.scoreDisplay = document.getElementById('score');
        this.hintText = document.getElementById('hint-text');
        this.guessInput = document.getElementById('guess-input');
        this.feedback = document.getElementById('feedback');
        this.finalScoreDisplay = document.getElementById('final-score');

        // Buttons
        this.startBtn = document.getElementById('start-btn');
        this.submitBtn = document.getElementById('submit-btn');
        this.dirtyHintBtn = document.getElementById('dirty-hint-btn');
        this.restartBtn = document.getElementById('restart-btn');

        this.initEventListeners();
    }

    initEventListeners() {
        this.startBtn.addEventListener('click', () => {
            this.audio.play('click');
            this.startGame();
        });
        this.submitBtn.addEventListener('click', () => this.handleGuess());
        this.dirtyHintBtn.addEventListener('click', () => {
            this.audio.play('click');
            this.showDirtyHint();
        });
        this.restartBtn.addEventListener('click', () => {
            this.audio.play('click');
            this.startGame();
        });
        
        this.guessInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleGuess();
        });
    }

    showScreen(screenName) {
        Object.values(this.screens).forEach(screen => screen.classList.remove('active'));
        this.screens[screenName].classList.add('active');
    }

    startGame() {
        this.game = new Game(this.allScenarios);
        this.scoreDisplay.textContent = '0';
        this.showScreen('play');
        this.nextRound();
    }

    nextRound() {
        const scenario = this.game.getNextScenario();
        if (scenario) {
            this.hintText.textContent = scenario.hint;
            this.guessInput.value = '';
            this.feedback.classList.add('hidden');
            this.feedback.textContent = '';
        } else {
            this.endGame();
        }
    }

    handleGuess() {
        const guess = this.guessInput.value;
        if (!guess) return;

        const result = this.game.submitGuess(guess);
        
        if (result.correct) {
            this.audio.play('correct');
            this.scoreDisplay.textContent = this.game.getScore();
            this.feedback.textContent = result.message;
            this.feedback.className = 'correct';
            this.feedback.classList.remove('hidden');
            
            setTimeout(() => this.nextRound(), 1500);
        } else {
            this.audio.play('wrong');
            this.feedback.textContent = result.message;
            this.feedback.className = 'wrong';
            this.feedback.classList.remove('hidden');
            this.guessInput.value = '';
        }
    }

    showDirtyHint() {
        if (this.game.currentScenario) {
            this.feedback.textContent = this.game.currentScenario.dirty_hint;
            this.feedback.className = 'dirty';
            this.feedback.classList.remove('hidden');
        }
    }

    endGame() {
        this.audio.play('win');
        this.showScreen('end');
        this.finalScoreDisplay.textContent = this.game.getScore();
    }

    setScenarios(scenarios) {
        this.allScenarios = scenarios;
    }
}

// Initialize App
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('data/scenarios.json');
        const scenarios = await response.json();
        
        const game = new Game(scenarios);
        const ui = new UI(game);
        ui.setScenarios(scenarios);
        
    } catch (error) {
        console.error("Failed to load game data:", error);
        document.body.innerHTML = `<div style="text-align:center; padding: 2rem;">
            <h1 style="color: white;">Error Loading Game</h1>
            <p style="color: #94a3b8;">${error.message}</p>
        </div>`;
    }
});
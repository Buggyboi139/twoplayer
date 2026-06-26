if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(err => {});
  });
}

const sfx = {
    click: new Audio('audio/click.mp3'),
    ding: new Audio('audio/ding.mp3'),
    buzzer: new Audio('audio/buzzer.mp3'),
    chaching: new Audio('audio/chaching.mp3')
};

let isMuted = false;

const LIFELINE_COSTS = {
    fiftyFifty: 50,
    hint: 75,
    mulligan: 100
};

const PACK_TAGS = {
    wild_web: ['weird', 'starter'],
    '3am_webmd': ['health', 'starter'],
    good_boy_inquiries: ['pets', 'weird'],
    takeout_tragedies: ['food'],
    state_secrets: ['places', 'weird'],
    keyboard_warriors: ['tech', 'games'],
    writers_watchlist: ['crime', 'weird'],
    incognito_mode: ['relationships', 'weird'],
    tin_foil_hats: ['conspiracy', 'weird'],
    dear_google: ['tech', 'weird'],
    '2am_thoughts': ['science', 'weird'],
    tinder_terrors: ['relationships'],
    side_hustle_scams: ['money', 'weird'],
    mommy_blog_mysteries: ['parenting'],
    corporate_survival: ['work'],
    worldbuilder_history: ['letter_pool', 'writing'],
    rage_quits_lp: ['letter_pool', 'games'],
    canine_conundrums: ['letter_pool', 'pets'],
    delivery_fee_regrets: ['letter_pool', 'food']
};

const DECOY_POOLS = {
    general: [
        'borrow a shovel', 'change my password', 'open a window', 'buy a trampoline',
        'join a cult', 'cancel a wedding', 'text my landlord', 'hide a receipt',
        'start a podcast', 'move to ohio', 'call customer service', 'delete my history',
        'rent a fog machine', 'wear a cape', 'buy more batteries', 'use duct tape',
        'fake an accent', 'learn morse code', 'name a boat', 'microwave socks',
        'sleep in jeans', 'paint the ceiling', 'sell a canoe', 'argue with a robot',
        'bring a ladder', 'order a trophy', 'wash a keyboard', 'freeze a sandwich'
    ],
    weird: [
        'see through walls', 'taste colors', 'haunt a basement', 'summon a lawyer',
        'glow in the dark', 'hear static', 'smell pennies', 'become magnetic',
        'dream in spreadsheets', 'argue with mirrors', 'collect fake teeth', 'fear balloons',
        'trust a clown college', 'eat chalk', 'sneeze glitter', 'join a moon club'
    ],
    health: [
        'turn purple', 'buzz at night', 'smell like pennies', 'itch after pizza',
        'click when walking', 'feel too quiet', 'pulse in my elbow', 'make a tiny whistle',
        'taste like metal', 'look pixelated', 'vibrate randomly', 'hurt near tuesday'
    ],
    pets: [
        'file taxes', 'judge my outfit', 'steal my chair', 'hate my ringtone',
        'lick the remote', 'guard the fridge', 'fear my slippers', 'bark at soup',
        'hide my keys', 'watch television', 'sleep in laundry', 'ignore expensive toys'
    ],
    food: [
        'expired mustard', 'cold spaghetti', 'airport sushi', 'wet cereal',
        'burnt toast', 'frozen gravy', 'pocket cheese', 'garage lasagna',
        'mystery dip', 'gas station salad', 'leftover frosting', 'bag soup'
    ],
    places: [
        'New Hampshire', 'Puerto Rico', 'Delaware', 'North Dakota',
        'Rhode Island', 'Guam', 'Vermont', 'New Mexico',
        'Wyoming', 'Montana', 'Maine', 'Idaho'
    ],
    tech: [
        'printer ink', 'bluetooth toaster', 'forgotten password', 'router lights',
        'caps lock', 'browser cookies', 'usb hub', 'smart fridge',
        'two monitors', 'broken charger', 'cloud storage', 'spam folder'
    ],
    games: [
        'side quest', 'loot box', 'patch notes', 'spawn point',
        'save file', 'loading screen', 'speedrun', 'boss music',
        'controller drift', 'tutorial island', 'party chat', 'respawn timer'
    ],
    crime: [
        'locked diary', 'missing receipt', 'fake mustache', 'burner phone',
        'library alibi', 'rubber gloves', 'security badge', 'parking ticket',
        'mysterious envelope', 'hotel pen', 'muddy footprint', 'wrong suitcase'
    ],
    relationships: [
        'shared calendar', 'group chat', 'bad tattoo', 'matching hoodie',
        'read receipt', 'ex playlist', 'family dinner', 'secret account',
        'awkward silence', 'anniversary coupon', 'borrowed sweatshirt', 'double text'
    ],
    conspiracy: [
        'weather balloon', 'secret tunnel', 'number station', 'fake satellite',
        'underground bunker', 'red string board', 'missing file', 'radio tower',
        'hidden camera', 'classified stamp', 'old map', 'signal jammer'
    ],
    science: [
        'parallel parking', 'gravity bill', 'moon dust', 'time loop',
        'lab goggles', 'space elevator', 'quantum sandwich', 'solar flare',
        'blacklight poster', 'tiny microscope', 'antimatter coupon', 'star chart'
    ],
    money: [
        'coupon fraud', 'garage startup', 'expired gift card', 'crypto wallet',
        'side hustle course', 'vending machine', 'tax loophole', 'cash envelope',
        'yard sale', 'rental scooter', 'mystery invoice', 'business idea'
    ],
    parenting: [
        'sticky tablet', 'school email', 'missing sock', 'toy catalog',
        'juice box', 'car seat snack', 'bedtime chart', 'crayon wall',
        'birthday invite', 'tiny shoe', 'bath toy', 'laundry pile'
    ],
    travel: [
        'boarding group', 'middle seat', 'gate change', 'lost luggage',
        'hotel deposit', 'rental car', 'passport photo', 'overhead bin',
        'travel pillow', 'delayed train', 'resort fee', 'tiny shampoo'
    ],
    home: [
        'crawl space', 'sump pump', 'breaker box', 'paint sample',
        'gutter guard', 'doorbell camera', 'weed killer', 'garage shelf',
        'water heater', 'tile grout', 'attic fan', 'trash day'
    ],
    family: [
        'group photo', 'kids table', 'guest room', 'family recipe',
        'shared dessert', 'holiday card', 'old argument', 'matching pajamas',
        'folding chair', 'leftover pie', 'aunt email', 'casserole dish'
    ],
    school: [
        'permission slip', 'lunch account', 'reading log', 'picture day',
        'book fair', 'bus route', 'field trip', 'lost hoodie',
        'classroom app', 'math packet', 'spirit week', 'school calendar'
    ],
    work: [
        'reply all', 'calendar invite', 'status meeting', 'coffee badge',
        'spreadsheet error', 'desk plant', 'parking pass', 'office microwave',
        'shared drive', 'performance review', 'expense report', 'muted meeting'
    ]
};

let lifelinesUsed = {
    fiftyFifty: false,
    hint: false,
    mulligan: false
};

function toggleMute() {
    isMuted = !isMuted;
    document.getElementById('mute-btn').textContent = isMuted ? 'Unmute' : 'Mute';
}

function playSfx(name) {
    if(!isMuted && sfx[name]) {
        sfx[name].currentTime = 0;
        sfx[name].play().catch(e => {});
    }
}

function vibrate(pattern) {
    if (!isMuted && navigator.vibrate) {
        navigator.vibrate(pattern);
    }
}

function readStoredJson(key, fallback) {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : fallback;
    } catch (e) {
        localStorage.removeItem(key);
        return fallback;
    }
}

let bank = parseInt(localStorage.getItem('rf_coins')) || 0;
let unlockedPacks = readStoredJson('rf_unlocks', ['wild_web', '3am_webmd', 'worldbuilder_history']);
let customPacks = readStoredJson('rf_custom_packs', []);

let allPacks =[];
let selectedPack = null;
let activeQuestions = [];
let teams =[];
let currentTeamIdx = 0;
let currentQIdx = 0;

let strikes = 0;
let roundBank = 0;
let currentAnswers =[];
let revealedCount = 0;
let isCoop = false;
let isStealMode = false;
let totalPossibleReveals = 0;
let totalActualReveals = 0;

let timerInterval;
let timeLeft = 60;
let wagerAmount = 0;

window.onload = async () => {
    updateBankUI();
    try {
        const response = await fetch('packs.json');
        let fetchedPacks = await response.json();
        allPacks = [...fetchedPacks, ...customPacks].filter(pack => pack.type !== 'higher_lower');
    } catch (e) {
        allPacks = [...customPacks].filter(pack => pack.type !== 'higher_lower');
    }
};

function applyTheme(color) {
    if(!color) color = '#00FFFF';
    document.documentElement.style.setProperty('--theme-color', color);
    let grad = `linear-gradient(135deg, ${color}, #FF006E)`;
    document.documentElement.style.setProperty('--theme-grad', grad);
}

function updateBankUI() {
    document.getElementById('menu-bank').textContent = `${bank} Coins`;
    document.getElementById('store-bank').textContent = `${bank} Coins`;
    unlockedPacks = unlockedPacks.filter(id => !id.startsWith('hl_'));
    localStorage.setItem('rf_coins', bank);
    localStorage.setItem('rf_unlocks', JSON.stringify(unlockedPacks));
}

function getModeLabel(type) {
    if (type === 'letter_pool') return 'Letter Pool';
    return 'Feud Mode';
}

function getPackTags(pack) {
    return pack.tags || PACK_TAGS[pack.id] || (pack.type === 'letter_pool' ? ['letter_pool'] : ['weird']);
}

function normalizeChoice(value) {
    return String(value || '').trim().toLowerCase();
}

function getQuestionAnswers(question) {
    if (!question) return [];
    return Array.isArray(question.a) ? question.a : [question.a];
}

function getAllAnswerSet() {
    const answers = new Set();
    allPacks.forEach(pack => {
        pack.questions.forEach(question => {
            getQuestionAnswers(question).forEach(answer => answers.add(normalizeChoice(answer)));
        });
    });
    return answers;
}

function uniqueCleanChoices(values) {
    const seen = new Set();
    return values
        .map(value => String(value || '').trim())
        .filter(value => {
            const normalized = normalizeChoice(value);
            if (!normalized || seen.has(normalized)) return false;
            seen.add(normalized);
            return true;
        });
}

function pickChoices(values, count) {
    return uniqueCleanChoices(values).sort(() => 0.5 - Math.random()).slice(0, count);
}

function isFinalRound() {
    return currentQIdx === activeQuestions.length - 1;
}

function flashTeamTurn(isSteal = false) {
    const flash = document.getElementById('team-flash');
    if (!flash || !teams.length) return;

    const label = isCoop ? 'Play' : `Team ${teams[currentTeamIdx].id}${isSteal ? ' Steal' : ''}`;
    flash.textContent = label;
    flash.classList.remove('active', 'steal-flash');
    void flash.offsetWidth;
    if (isSteal) flash.classList.add('steal-flash');
    flash.classList.add('active');

    clearTimeout(flash._timer);
    flash._timer = setTimeout(() => {
        flash.classList.remove('active', 'steal-flash');
    }, 1200);
}

function wipeData() {
    if(confirm("Are you sure? This will wipe all coins and custom packs.")) {
        localStorage.clear();
        location.reload();
    }
}

function showScreen(id) {
    playSfx('click');
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    applyTheme('#00FFFF');
}

function openAbout() { playSfx('click'); document.getElementById('about-modal').classList.add('active'); }
function closeAbout() { playSfx('click'); document.getElementById('about-modal').classList.remove('active'); }

function quitGame() {
    playSfx('click');
    if(confirm("Quit and lose banked points?")) {
        clearInterval(timerInterval);
        showScreen('menu-screen');
    }
}

function goToStore() {
    showScreen('store-screen');
    const container = document.getElementById('store-container');
    container.innerHTML = '';
    
    allPacks.filter(p => !customPacks.includes(p)).forEach(pack => {
        const isOwned = unlockedPacks.includes(pack.id) || pack.unlockedByDefault;
        if(pack.unlockedByDefault && !unlockedPacks.includes(pack.id)) unlockedPacks.push(pack.id);

        const card = document.createElement('div');
        card.className = 'pack-card';

        const details = document.createElement('div');
        details.className = 'pack-card-body';
        const title = document.createElement('h3');
        title.textContent = pack.name;
        if(pack.color) title.style.color = pack.color;
        const description = document.createElement('p');
        description.textContent = pack.description;

        const meta = document.createElement('div');
        meta.className = 'pack-meta';
        [getModeLabel(pack.type), `${pack.questions.length} Rounds`, ...getPackTags(pack), isOwned ? 'Owned' : `${pack.price} Coins`].forEach(text => {
            const item = document.createElement('span');
            item.textContent = text;
            meta.appendChild(item);
        });

        details.appendChild(title);
        details.appendChild(description);
        details.appendChild(meta);

        const buyButton = document.createElement('button');
        buyButton.className = `buy-btn ${isOwned ? 'owned' : ''}`;
        buyButton.textContent = isOwned ? 'Owned' : `Buy - ${pack.price} Coins`;
        buyButton.onclick = () => buyPack(pack.id, pack.price);

        card.appendChild(details);
        card.appendChild(buyButton);
        container.appendChild(card);
    });
    updateBankUI();
}

function buyPack(id, price) {
    if(bank >= price) {
        bank -= price;
        unlockedPacks.push(id);
        playSfx('chaching');
        goToStore();
    } else {
        playSfx('buzzer');
        vibrate([50, 50, 50]);
        alert("Not enough coins!");
    }
}

function goToCreator() {
    showScreen('creator-screen');
    buildCreatorForm();
}

function parseCommaList(value) {
    return uniqueCleanChoices(String(value || '').split(','));
}

function buildCreatorForm() {
    let type = document.getElementById('c-pack-type').value;
    let container = document.getElementById('creator-questions');
    let decoyInput = document.getElementById('c-pack-decoys');
    if(decoyInput) decoyInput.style.display = type === 'feud' ? 'block' : 'none';
    container.innerHTML = '';
    for(let i=1; i<=5; i++) {
        let block = document.createElement('div');
        block.className = 'creator-q-block';
        block.innerHTML = `<input type="text" id="cq-${i}" placeholder="Question ${i}" class="creator-input">`;
        if(type === 'feud') {
            block.innerHTML += `
                <input type="text" id="ca-${i}-1" placeholder="Answer 1 (Top)" class="creator-input">
                <input type="text" id="ca-${i}-2" placeholder="Answer 2" class="creator-input">
                <input type="text" id="ca-${i}-3" placeholder="Answer 3" class="creator-input">
                <input type="text" id="ca-${i}-4" placeholder="Answer 4" class="creator-input">
            `;
        } else {
            block.innerHTML += `<input type="text" id="ca-${i}-word" placeholder="Target Word" class="creator-input">`;
        }
        container.appendChild(block);
    }
}

function saveCustomPack() {
    let name = document.getElementById('c-pack-name').value;
    let type = document.getElementById('c-pack-type').value;
    let tags = parseCommaList(document.getElementById('c-pack-tags').value).map(tag => tag.toLowerCase());
    let decoys = parseCommaList(document.getElementById('c-pack-decoys').value);
    if(!name) return alert("Name required");
    
    let pack = {
        id: 'custom_' + Date.now(),
        name: name,
        description: "Custom user created pack.",
        price: 0,
        unlockedByDefault: true,
        type: type,
        color: "#00FFFF",
        tags: tags,
        questions:[]
    };

    if(type === 'feud' && decoys.length) pack.decoys = decoys;

    for(let i=1; i<=5; i++) {
        let q = document.getElementById(`cq-${i}`).value;
        if(!q) continue;
        if(type === 'feud') {
            let a1 = document.getElementById(`ca-${i}-1`).value;
            let a2 = document.getElementById(`ca-${i}-2`).value;
            let a3 = document.getElementById(`ca-${i}-3`).value;
            let a4 = document.getElementById(`ca-${i}-4`).value;
            if(a1 && a2 && a3 && a4) pack.questions.push({q: q, a:[a1,a2,a3,a4]});
        } else {
            let word = document.getElementById(`ca-${i}-word`).value;
            if(word) pack.questions.push({q: q, a: word});
        }
    }

    if(pack.questions.length < 1) return alert("Add at least 1 full question!");
    customPacks.push(pack);
    localStorage.setItem('rf_custom_packs', JSON.stringify(customPacks));
    allPacks.push(pack);
    unlockedPacks.push(pack.id);
    updateBankUI();
    alert("Saved!");
    showScreen('menu-screen');
}

function validateImportedPack(pack) {
    if(!pack || typeof pack !== 'object') return null;
    if(!pack.name || !pack.type || !Array.isArray(pack.questions)) return null;
    if(!['feud', 'letter_pool'].includes(pack.type)) return null;

    const cleanPack = {
        id: String(pack.id || `custom_${Date.now()}_${Math.floor(Math.random() * 10000)}`).replace(/[^a-zA-Z0-9_-]/g, '_'),
        name: String(pack.name).trim(),
        description: String(pack.description || 'Custom imported pack.').trim(),
        price: 0,
        unlockedByDefault: true,
        type: pack.type,
        color: String(pack.color || '#00FFFF'),
        tags: Array.isArray(pack.tags) ? uniqueCleanChoices(pack.tags).map(tag => tag.toLowerCase()) : [],
        questions: []
    };

    if(Array.isArray(pack.decoys)) cleanPack.decoys = uniqueCleanChoices(pack.decoys);

    pack.questions.forEach(question => {
        if(!question || !question.q) return;
        if(cleanPack.type === 'feud') {
            if(!Array.isArray(question.a) || question.a.length < 4) return;
            const answers = uniqueCleanChoices(question.a).slice(0, 4);
            if(answers.length === 4) {
                const cleanQuestion = { q: String(question.q).trim(), a: answers };
                if(Array.isArray(question.decoys)) cleanQuestion.decoys = uniqueCleanChoices(question.decoys);
                cleanPack.questions.push(cleanQuestion);
            }
        } else if(typeof question.a === 'string' && question.a.trim()) {
            cleanPack.questions.push({ q: String(question.q).trim(), a: question.a.trim().toUpperCase() });
        }
    });

    return cleanPack.questions.length ? cleanPack : null;
}

function exportCustomPacks() {
    playSfx('click');
    const transfer = document.getElementById('custom-pack-transfer');
    transfer.value = JSON.stringify(customPacks, null, 2);
    transfer.focus();
}

function importCustomPacks() {
    playSfx('click');
    const transfer = document.getElementById('custom-pack-transfer');
    let imported;
    try {
        imported = JSON.parse(transfer.value);
    } catch (e) {
        alert("Import JSON is not valid.");
        return;
    }

    const incoming = Array.isArray(imported) ? imported : [imported];
    const cleanPacks = incoming.map(validateImportedPack).filter(Boolean);
    if(!cleanPacks.length) {
        alert("No valid custom packs found.");
        return;
    }

    const existingIds = new Set(customPacks.map(pack => pack.id));
    cleanPacks.forEach(pack => {
        while(existingIds.has(pack.id)) pack.id = `${pack.id}_${Date.now()}`;
        existingIds.add(pack.id);
        customPacks.push(pack);
        allPacks.push(pack);
        if(!unlockedPacks.includes(pack.id)) unlockedPacks.push(pack.id);
    });

    localStorage.setItem('rf_custom_packs', JSON.stringify(customPacks));
    updateBankUI();
    alert(`Imported ${cleanPacks.length} custom pack${cleanPacks.length === 1 ? '' : 's'}.`);
    transfer.value = '';
}

function goToPackSelect() {
    showScreen('setup-screen');
    resetPackSelection();
    const pContainer = document.getElementById('pack-select-container');
    pContainer.innerHTML = '';

    allPacks.forEach(pack => {
        if(unlockedPacks.includes(pack.id) || pack.unlockedByDefault) {
            const btn = document.createElement('button');
            btn.textContent = `${pack.name} - ${getModeLabel(pack.type)} - ${getPackTags(pack).join(', ')}`;
            if(pack.color) btn.style.borderTopColor = pack.color;
            btn.onclick = () => {
                playSfx('click');
                selectedPack = pack;
                applyTheme(pack.color);
                document.getElementById('pack-select-container').style.display = 'none';
                document.getElementById('step-1-title').style.display = 'none';
                document.getElementById('selected-pack-display').textContent = `${pack.name} - ${getModeLabel(pack.type)}`;
                document.getElementById('team-selection-area').style.display = 'block';
            };
            pContainer.appendChild(btn);
        }
    });
}

function resetPackSelection() {
    selectedPack = null;
    applyTheme('#00FFFF');
    document.getElementById('pack-select-container').style.display = 'flex';
    document.getElementById('step-1-title').style.display = 'block';
    document.getElementById('team-selection-area').style.display = 'none';
}

function startGame(numTeams) {
    playSfx('click');
    isCoop = (numTeams === 1);
    teams = Array.from({length: numTeams}, (_, i) => ({ id: i+1, score: 0 }));
    currentTeamIdx = 0;
    lifelinesUsed = { fiftyFifty: false, hint: false, mulligan: false };
    
    let maxQ = Math.min(5, selectedPack.questions.length);
    activeQuestions =[...selectedPack.questions].sort(() => 0.5 - Math.random()).slice(0, maxQ);
    totalPossibleReveals = 0;
    
    if (selectedPack.type === 'letter_pool') {
        activeQuestions.forEach(q => {
            let uniqueLetters = new Set(q.a.toUpperCase().split('').filter(c => c.trim() !== ''));
            totalPossibleReveals += uniqueLetters.size;
        });
    } else {
        totalPossibleReveals = activeQuestions.reduce((sum, q) => sum + q.a.length, 0);
    }
    
    totalActualReveals = 0;
    currentQIdx = 0;
    showScreen('game-screen');
    checkWagerOrSetup();
}

function checkWagerOrSetup() {
    if (isFinalRound() && !isCoop) {
        showWagerModal();
    } else {
        setupRound();
    }
}

function showWagerModal() {
    document.getElementById('wager-modal').classList.add('active');
    document.getElementById('wager-prompt').textContent = `Team ${teams[currentTeamIdx].id}, wager up to ${teams[currentTeamIdx].score} points.`;
    let input = document.getElementById('wager-input');
    input.max = teams[currentTeamIdx].score;
    input.value = 0;
}

function submitWager() {
    playSfx('click');
    let input = parseInt(document.getElementById('wager-input').value) || 0;
    let max = teams[currentTeamIdx].score;
    if(input > max) input = max;
    if(input < 0) input = 0;
    wagerAmount = input;
    document.getElementById('wager-modal').classList.remove('active');
    setupRound();
}

function beginStealTurn() {
    isStealMode = true;
    currentTeamIdx = (currentTeamIdx + 1) % teams.length;
    document.getElementById('steal-banner').style.display = 'block';
    document.getElementById('strikes-display').textContent = ''; 
    startTimer(); 
    renderScores();
    flashTeamTurn(true);
}

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 60;
    let d = document.getElementById('timer-display');
    d.textContent = timeLeft;
    d.classList.remove('panic');
    
    timerInterval = setInterval(() => {
        timeLeft--;
        d.textContent = timeLeft;
        if(timeLeft === 10) d.classList.add('panic');
        if(timeLeft <= 0) {
            clearInterval(timerInterval);
            playSfx('buzzer');
            vibrate([200, 100, 200]);
            forceStrikeOut();
        }
    }, 1000);
}

function forceStrikeOut() {
    strikes = 3;
    document.getElementById('strikes-display').textContent = 'X X X';
    if (isCoop) {
        roundBank = 0; setTimeout(finishRound, 1000);
    } else {
        setTimeout(() => {
            beginStealTurn();
        }, 1000);
    }
}

function getDecoyLetters(excludeLetters, totalTiles) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    const available = alphabet.filter(l => !excludeLetters.includes(l));
    const shuffled = available.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, totalTiles - excludeLetters.length);
}

function getFeudDistractors(currentQuestion, pack) {
    const activeAnswers = new Set(currentQuestion.a.map(normalizeChoice));
    const allKnownAnswers = getAllAnswerSet();
    const tagPool = getPackTags(pack).flatMap(tag => DECOY_POOLS[tag] || []);
    const explicitQuestionDecoys = Array.isArray(currentQuestion.decoys) ? currentQuestion.decoys : [];
    const explicitPackDecoys = Array.isArray(pack.decoys) ? pack.decoys : [];
    const sourcePool = [
        ...explicitQuestionDecoys,
        ...explicitPackDecoys,
        ...tagPool,
        ...DECOY_POOLS.general
    ];

    let candidates = uniqueCleanChoices(sourcePool).filter(choice => {
        const normalized = normalizeChoice(choice);
        return !activeAnswers.has(normalized) && !allKnownAnswers.has(normalized);
    });

    if (candidates.length < 4) {
        candidates = uniqueCleanChoices([...candidates, ...DECOY_POOLS.general]).filter(choice => {
            const normalized = normalizeChoice(choice);
            return !activeAnswers.has(normalized) && !allKnownAnswers.has(normalized);
        });
    }

    return pickChoices(candidates, 4);
}

function setupRound() {
    let qData = activeQuestions[currentQIdx];
    document.getElementById('question-text').textContent = qData.q + (qData.q.endsWith('?') ? "" : "...");
    document.getElementById('strikes-display').textContent = '';
    document.getElementById('next-round-btn').style.display = 'none';
    document.getElementById('give-up-btn').style.display = 'block';
    document.getElementById('steal-banner').style.display = 'none';
    document.getElementById('lifeline-bar').style.display = 'flex';
    
    strikes = 0; roundBank = 0; revealedCount = 0; isStealMode = false;
    updateLifelineUI();
    
    const choices = document.getElementById('choices-container');
    choices.innerHTML = '';

    if (selectedPack.type === 'letter_pool') {
        document.getElementById('board-container').style.display = 'none';
        document.getElementById('question-text').style.display = 'block';
        document.getElementById('letter-board-container').style.display = 'flex';
        document.getElementById('choices-container').style.display = 'grid';
        
        let targetWord = qData.a.toUpperCase();
        let uniqueLetters = [...new Set(targetWord.split(''))].filter(c => c.trim() !== '');
        currentAnswers = uniqueLetters.map(l => ({ text: l, revealed: false, points: 50 }));
        let playableChars = targetWord.split('').filter(char => char.trim() !== '' && char !== '-');
        let freeLetters = [...new Set([playableChars[0], playableChars[playableChars.length - 1]].filter(Boolean))];
        currentAnswers.forEach(answer => {
            if (freeLetters.includes(answer.text)) {
                answer.revealed = true;
                revealedCount++;
                totalActualReveals++;
            }
        });
        
        const lbc = document.getElementById('letter-board-container');
        lbc.innerHTML = '';
        targetWord.split('').forEach((char, idx) => {
            let div = document.createElement('div');
            if (char === ' ' || char === '-') {
                div.style.width = '3vmin'; div.style.border = 'none';
            } else {
                div.className = 'letter-blank hidden-letter';
                div.id = `blank-${idx}`;
                div.textContent = char;
                div.dataset.char = char;
                if (freeLetters.includes(char)) {
                    div.classList.remove('hidden-letter');
                    div.classList.add('revealed-letter', 'free-letter');
                }
            }
            lbc.appendChild(div);
        });
        
        let decoys = getDecoyLetters(uniqueLetters, 16);
        let combinedChoices =[...uniqueLetters, ...decoys].sort(() => 0.5 - Math.random());
        
        combinedChoices.forEach(letter => {
            let btn = document.createElement('button');
            btn.className = 'choice-btn letter-btn';
            btn.textContent = letter;
            if (freeLetters.includes(letter)) {
                btn.classList.add('correct');
                btn.disabled = true;
            }
            btn.onclick = () => processLetterChoice(btn, letter, uniqueLetters.length);
            choices.appendChild(btn);
        });
        
    } else {
        document.getElementById('letter-board-container').style.display = 'none';
        document.getElementById('question-text').style.display = 'block';
        document.getElementById('board-container').style.display = 'grid';
        document.getElementById('choices-container').style.display = 'grid';
        
        const ptsArray = [100, 75, 50, 25];
        currentAnswers = qData.a.map((text, index) => ({ text: text, points: ptsArray[index] || 10, revealed: false }));

        const board = document.getElementById('board-container');
        board.innerHTML = '';
        currentAnswers.forEach((ans, idx) => {
            let row = document.createElement('div');
            row.className = 'board-row hidden-content';
            row.id = `row-${idx}`;
            row.innerHTML = `<div class="rank">${idx + 1}</div><div class="ans-text">${ans.text}</div><div class="ans-pts">${ans.points}</div>`;
            board.appendChild(row);
        });

        let distractors = getFeudDistractors(qData, selectedPack);
        let combinedChoices = [...qData.a, ...distractors].sort(() => 0.5 - Math.random());
        
        combinedChoices.forEach(choice => {
            let btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.textContent = choice;
            btn.onclick = () => processFeudChoice(btn, choice);
            choices.appendChild(btn);
        });
    }

    renderScores();
    flashTeamTurn(isStealMode);
    startTimer();
}

function updateLifelineUI() {
    let btn5050 = document.getElementById('ll-5050');
    let btnHint = document.getElementById('ll-hint');
    let btnMull = document.getElementById('ll-mulligan');
    if(btn5050) {
        btn5050.textContent = lifelinesUsed.fiftyFifty ? '50/50 Used' : `50/50 - ${LIFELINE_COSTS.fiftyFifty} Coins`;
        btn5050.disabled = lifelinesUsed.fiftyFifty || bank < LIFELINE_COSTS.fiftyFifty;
    }
    if(btnHint) {
        btnHint.textContent = lifelinesUsed.hint ? 'Hint Used' : `Hint - ${LIFELINE_COSTS.hint} Coins`;
        btnHint.disabled = lifelinesUsed.hint || bank < LIFELINE_COSTS.hint || selectedPack.type === 'letter_pool';
    }
    if(btnMull) {
        btnMull.textContent = lifelinesUsed.mulligan ? 'Mulligan Used' : `Mulligan - ${LIFELINE_COSTS.mulligan} Coins`;
        btnMull.disabled = lifelinesUsed.mulligan || bank < LIFELINE_COSTS.mulligan || strikes === 0;
    }
}

function use5050() {
    if(bank < LIFELINE_COSTS.fiftyFifty || lifelinesUsed.fiftyFifty) return;
    lifelinesUsed.fiftyFifty = true;
    bank -= LIFELINE_COSTS.fiftyFifty; updateBankUI(); playSfx('chaching');
    let wrongBtns = Array.from(document.querySelectorAll('.choice-btn:not(.correct):not(.wrong)')).filter(b => !currentAnswers.find(a => a.text === b.textContent));
    wrongBtns.sort(() => 0.5 - Math.random());
    let toRemove = Math.floor(wrongBtns.length / 2);
    for(let i=0; i<toRemove; i++) {
        wrongBtns[i].classList.add('wrong');
        wrongBtns[i].disabled = true;
    }
    updateLifelineUI();
}

function useFirstLetter() {
    if(bank < LIFELINE_COSTS.hint || selectedPack.type === 'letter_pool' || lifelinesUsed.hint) return; 
    lifelinesUsed.hint = true;
    bank -= LIFELINE_COSTS.hint; updateBankUI(); playSfx('chaching');
    let unrevealed = currentAnswers.findIndex(a => !a.revealed);
    if(unrevealed !== -1) {
        let row = document.getElementById(`row-${unrevealed}`);
        let textDiv = row.querySelector('.ans-text');
        textDiv.textContent = currentAnswers[unrevealed].text.charAt(0) + "...";
        textDiv.style.opacity = '1';
        textDiv.style.color = '#aaa';
    }
    updateLifelineUI();
}

function useMulligan() {
    if(bank < LIFELINE_COSTS.mulligan || strikes === 0 || lifelinesUsed.mulligan) return;
    lifelinesUsed.mulligan = true;
    bank -= LIFELINE_COSTS.mulligan; updateBankUI(); playSfx('chaching');
    strikes--;
    document.getElementById('strikes-display').textContent = 'X '.repeat(strikes).trim();
    updateLifelineUI();
}

function renderScores() {
    const sb = document.getElementById('scoreboard');
    sb.innerHTML = '';
    
    if (isCoop) {
        let pill = document.createElement('div');
        pill.className = 'score-pill active-team';
        pill.textContent = `SCORE: ${teams[0].score + roundBank}`;
        sb.appendChild(pill);
    } else {
        teams.forEach((t, i) => {
            let pill = document.createElement('div');
            let statusClass = '';
            if(i === currentTeamIdx && !isStealMode) statusClass = 'active-team';
            if(i === currentTeamIdx && isStealMode) statusClass = 'stealing-team';
            
            pill.className = `score-pill ${statusClass}`;
            let displayScore = t.score;
            if (statusClass !== '') displayScore += ` (+${roundBank})`;
            if (isFinalRound() && i === currentTeamIdx && wagerAmount > 0 && !isStealMode) {
                displayScore += ` [W: ${wagerAmount}]`;
            }
            pill.textContent = `TEAM ${t.id}: ${displayScore}`;
            sb.appendChild(pill);
        });
    }
}

function processFeudChoice(btn, choiceText) {
    if (strikes >= 3 && !isStealMode) return; 
    
    let matchIdx = currentAnswers.findIndex(a => a.text === choiceText);

    if (matchIdx !== -1 && !currentAnswers[matchIdx].revealed) {
        playSfx('ding'); vibrate(100);
        currentAnswers[matchIdx].revealed = true;
        revealedCount++; totalActualReveals++;
        btn.classList.add('correct');
        
        let row = document.getElementById(`row-${matchIdx}`);
        row.querySelector('.ans-text').textContent = currentAnswers[matchIdx].text;
        row.querySelector('.ans-text').style.color = '';
        row.classList.remove('hidden-content'); row.classList.add('revealed');
        
        if (isStealMode) {
            teams[currentTeamIdx].score += (roundBank + currentAnswers[matchIdx].points);
            roundBank = 0; finishRound();
        } else {
            roundBank += currentAnswers[matchIdx].points; renderScores();
            if (revealedCount === currentAnswers.length) {
                teams[currentTeamIdx].score += roundBank;
                if(isFinalRound() && wagerAmount > 0) teams[currentTeamIdx].score += wagerAmount;
                roundBank = 0; finishRound();
            }
        }
    } else {
        playSfx('buzzer'); vibrate([50, 50, 50]); btn.classList.add('wrong'); btn.disabled = true;

        if (isStealMode) {
            let originalTeam = (currentTeamIdx - 1 + teams.length) % teams.length;
            teams[originalTeam].score += roundBank; roundBank = 0; finishRound();
        } else {
            triggerStrike();
        }
    }
}

function processLetterChoice(btn, choiceText, targetRevealCount) {
    if (strikes >= 3 && !isStealMode) return; 

    let matchIdx = currentAnswers.findIndex(a => a.text === choiceText);

    if (matchIdx !== -1 && !currentAnswers[matchIdx].revealed) {
        playSfx('ding'); vibrate(100);
        currentAnswers[matchIdx].revealed = true;
        revealedCount++; totalActualReveals++;
        btn.classList.add('correct');
        
        document.querySelectorAll('.letter-blank').forEach(blank => {
            if (blank.dataset.char === choiceText) {
                blank.classList.remove('hidden-letter');
                blank.classList.add('revealed-letter');
            }
        });
        
        if (isStealMode) {
            if (revealedCount === targetRevealCount) {
                teams[currentTeamIdx].score += (roundBank + currentAnswers.reduce((sum, a) => sum + a.points, 0)); 
                roundBank = 0; finishRound();
            }
        } else {
            roundBank += currentAnswers[matchIdx].points; renderScores();
            if (revealedCount === targetRevealCount) {
                teams[currentTeamIdx].score += roundBank;
                if(isFinalRound() && wagerAmount > 0) teams[currentTeamIdx].score += wagerAmount;
                roundBank = 0; finishRound();
            }
        }
    } else {
        playSfx('buzzer'); vibrate([50, 50, 50]); btn.classList.add('wrong'); btn.disabled = true;

        if (isStealMode) {
            let originalTeam = (currentTeamIdx - 1 + teams.length) % teams.length;
            teams[originalTeam].score += roundBank; roundBank = 0; finishRound();
        } else {
            triggerStrike();
        }
    }
}

function triggerStrike() {
    strikes++;
    document.getElementById('strikes-display').textContent = 'X '.repeat(strikes).trim();
    updateLifelineUI();
    
    if (strikes >= 3) {
        if(isFinalRound() && wagerAmount > 0 && !isStealMode) {
            teams[currentTeamIdx].score -= wagerAmount;
            if(teams[currentTeamIdx].score < 0) teams[currentTeamIdx].score = 0;
        }

        if (isCoop) {
            roundBank = 0; setTimeout(finishRound, 1000);
        } else {
            clearInterval(timerInterval);
            setTimeout(() => {
                beginStealTurn();
            }, 1000);
        }
    }
}

function giveUpRound() { playSfx('click'); roundBank = 0; finishRound(); }

function finishRound() {
    clearInterval(timerInterval);
    document.getElementById('timer-display').textContent = "-";
    document.getElementById('timer-display').classList.remove('panic');
    document.querySelectorAll('.choice-btn').forEach(b => b.disabled = true);
    document.getElementById('give-up-btn').style.display = 'none';
    document.getElementById('lifeline-bar').style.display = 'none';
    document.getElementById('next-round-btn').style.display = 'block';
    
    if (selectedPack.type === 'letter_pool') {
        document.querySelectorAll('.letter-blank.hidden-letter').forEach(blank => {
            blank.classList.remove('hidden-letter'); blank.classList.add('missed-letter');
        });
    } else if (selectedPack.type === 'feud') {
        currentAnswers.forEach((ans, idx) => {
            if (!ans.revealed) {
                let row = document.getElementById(`row-${idx}`);
                row.querySelector('.ans-text').textContent = ans.text;
                row.classList.remove('hidden-content'); row.classList.add('missed');
            }
        });
    }
    renderScores();
    document.getElementById('game-screen').scrollTo({ top: document.getElementById('game-screen').scrollHeight, behavior: 'smooth' });
}

function nextRound() {
    playSfx('click');
    currentQIdx++;
    wagerAmount = 0;
    if (currentQIdx >= activeQuestions.length) {
        showGameOver();
    } else {
        if (!isCoop && !isStealMode) currentTeamIdx = (currentTeamIdx + 1) % teams.length;
        checkWagerOrSetup();
    }
}

function fireConfetti() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particles =[];
    for(let i=0; i<100; i++) {
        particles.push({
            x: canvas.width/2, y: canvas.height/2,
            r: Math.random()*6+2,
            dx: Math.random()*10-5, dy: Math.random()*-10-5,
            color: `hsl(${Math.random()*360}, 100%, 50%)`
        });
    }
    function render() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        particles.forEach(p => {
            ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
            ctx.fillStyle = p.color; ctx.fill();
            p.x += p.dx; p.y += p.dy; p.dy += 0.2;
        });
        if(particles[0].y < canvas.height + 100) requestAnimationFrame(render);
        else ctx.clearRect(0,0,canvas.width,canvas.height);
    }
    render();
}

function calculateCoinReward(winningScore, accuracy) {
    const completionReward = activeQuestions.length * 30;
    const accuracyReward = Math.round(accuracy * 150);
    const scoreReward = Math.min(100, Math.floor(winningScore / 20));
    const perfectReward = accuracy >= 1 ? 100 : 0;
    const versusReward = isCoop ? 0 : 50;
    return completionReward + accuracyReward + scoreReward + perfectReward + versusReward;
}

function showGameOver() {
    showScreen('end-screen');
    playSfx('chaching');
    fireConfetti();
    
    let standings = document.getElementById('final-standings'); standings.innerHTML = '';
    let sortedTeams = [...teams].sort((a, b) => b.score - a.score);
    
    let accuracy = totalActualReveals / (totalPossibleReveals || 1); 
    let title = "";
    if(accuracy >= 0.9) title = "Search Engine Scholars";
    else if(accuracy >= 0.7) title = "Algorithm Whisperers";
    else if(accuracy >= 0.5) title = "Autocomplete Amateurs";
    else title = "Incognito Mode Rookies";

    let reward = calculateCoinReward(sortedTeams[0].score, accuracy);
    bank += reward; updateBankUI();
    document.getElementById('end-earned').textContent = `Earned ${reward} Coins!`;

    sortedTeams.forEach((t, i) => {
        let row = document.createElement('div'); row.className = `final-row ${i === 0 ? 'winner-row' : ''}`;
        let teamName = isCoop ? 'Final Score' : `Team ${t.id}${i === 0 ? ' - Winner' : ''}`;
        row.innerHTML = `<div>${teamName}${i === 0 ? `<span class="rank-title">Rank: ${title}</span>` : ''}</div><span>${t.score}</span>`;
        standings.appendChild(row);
    });
}

const CATEGORIES = [
    { id: "all", name: "Full Service", blurb: "Eight random dishes from every station.", cost: 180 },
    { id: "desserts", name: "Desserts", blurb: "Sugar, butter, and mild panic.", cost: 0 },
    { id: "dinner", name: "Dinner", blurb: "Weeknight classics under neon pressure.", cost: 0 },
    { id: "breakfast", name: "Breakfast", blurb: "Morning food with game-show consequences.", cost: 0 },
    { id: "snacks", name: "Snacks", blurb: "Couch food, party food, danger food.", cost: 80 },
    { id: "drinks", name: "Drinks", blurb: "Sip responsibly. Guess aggressively.", cost: 100 },
    { id: "potluck", name: "Questionable Potluck", blurb: "A folding table full of mysteries.", cost: 140 }
];

const STARTER_STATIONS = ["desserts", "dinner", "breakfast"];

const MODIFIERS = [
    { id: "rush", name: "Rush Order", description: "Start with less time. Correct picks score more.", time: -8, correctBonus: 40 },
    { id: "inspection", name: "Health Inspection", description: "Wrong picks cost extra score.", wrongPenalty: 35 },
    { id: "double", name: "Double Prep", description: "Streak bonuses are stronger this round.", streakMultiplier: 2 },
    { id: "quiet", name: "Quiet Kitchen", description: "No special rule. Plate it clean.", time: 0 },
    { id: "late", name: "Late Ticket", description: "Start with extra time, but the time bonus is smaller.", time: 10, timeBonusMultiplier: 0.5 }
];

const MEASUREMENTS = {
    flour: "2 Cups",
    butter: "1 Stick",
    "brown sugar": "1 Cup",
    sugar: "1 Cup",
    egg: "1",
    eggs: "2",
    "chocolate chips": "1 Cup",
    "lemon juice": "3 Tbsp",
    banana: "1",
    apples: "4",
    cinnamon: "1 Tsp",
    "cocoa powder": "1/2 Cup",
    "cream cheese": "16 Oz",
    "graham crackers": "10",
    "sour cream": "1/2 Cup",
    spaghetti: "12 Oz",
    tomatoes: "2 Cups",
    garlic: "3 Cloves",
    "olive oil": "2 Tbsp",
    basil: "1/4 Cup",
    chicken: "2 Cups",
    tortillas: "6",
    salsa: "1/2 Cup",
    cheddar: "1 Cup",
    lettuce: "2 Cups",
    "ground beef": "1 Lb",
    beans: "2 Cups",
    "chili powder": "2 Tbsp",
    onion: "1",
    "pizza dough": "1 Ball",
    "tomato sauce": "1 Cup",
    mozzarella: "8 Oz",
    rice: "2 Cups",
    "soy sauce": "2 Tbsp",
    peas: "1/2 Cup",
    carrots: "1/2 Cup",
    macaroni: "12 Oz",
    milk: "1 Cup",
    "baking powder": "2 Tsp",
    tortilla: "1",
    potatoes: "3",
    bread: "2 Slices",
    "maple syrup": "1/4 Cup",
    "bell pepper": "1/2 Cup",
    ham: "4 Oz",
    avocado: "1",
    "red pepper flakes": "1 Tsp",
    biscuits: "6",
    sausage: "8 Oz",
    "black pepper": "1 Tsp",
    "tortilla chips": "3 Cups",
    jalapenos: "1/4 Cup",
    "sour cream": "1/2 Cup",
    "lime juice": "2 Tbsp",
    cilantro: "1/4 Cup",
    salt: "1 Tsp",
    "popcorn kernels": "1/2 Cup",
    yeast: "2 Tsp",
    water: "1 Cup",
    "baking soda": "1 Tbsp",
    bacon: "6 Slices",
    "green onion": "1/4 Cup",
    peanuts: "1 Cup",
    raisins: "1/2 Cup",
    almonds: "1/2 Cup",
    "chocolate candy": "1/2 Cup",
    ice: "1 Cup",
    "whipped cream": "1 Cup",
    strawberries: "1 Cup",
    yogurt: "1/2 Cup",
    honey: "2 Tbsp",
    coffee: "1 Cup",
    "orange juice": "1 Cup",
    "pineapple juice": "1 Cup",
    "cranberry juice": "1 Cup",
    lime: "1",
    "soda water": "1 Cup",
    "vanilla ice cream": "2 Scoops",
    "chocolate syrup": "2 Tbsp",
    "cream soup": "1 Can",
    "egg noodles": "12 Oz",
    breadcrumbs: "1 Cup",
    "refried beans": "1 Cup",
    guacamole: "1 Cup",
    olives: "1/3 Cup",
    marshmallows: "2 Cups",
    "mandarin oranges": "1 Cup",
    pineapple: "1 Cup",
    coconut: "1/2 Cup",
    mayonnaise: "1/2 Cup",
    mustard: "2 Tbsp",
    paprika: "1 Tsp",
    relish: "2 Tbsp",
    gelatin: "1 Box",
    "fruit cocktail": "1 Can",
    "whipped topping": "1 Cup",
    walnuts: "1/2 Cup",
    turkey: "4 Oz",
    cabbage: "2 Cups",
    salami: "4 Oz",
    dill: "1 Tbsp",
    "rice noodles": "8 Oz",
    "tomato paste": "2 Tbsp",
    tuna: "1 Can",
    pickles: "1/2 Cup",
    "bbq sauce": "1/2 Cup",
    mushrooms: "1 Cup",
    spinach: "2 Cups",
    ketchup: "2 Tbsp",
    "black beans": "1 Cup",
    parmesan: "1/2 Cup",
    "hot sauce": "1 Tbsp",
    ramen: "1 Pack",
    "cream soda": "1 Cup",
    grapes: "1 Cup",
    "peanut butter": "1/2 Cup",
    marshmallows: "2 Cups",
    cereal: "2 Cups",
    oats: "1 Cup",
    blueberries: "1 Cup",
    jam: "1/2 Cup",
    cucumber: "1 Cup",
    granola: "1 Cup",
    mint: "1/4 Cup",
    "pineapple rings": "4",
    frosting: "1/2 Cup",
    "trail mix": "1 Cup",
    gelatin: "1 Box",
    eggnog: "1 Cup",
    pudding: "1 Cup",
    raisins: "1/2 Cup",
    bagels: "2",
    cashews: "1/2 Cup",
    salmon: "6 Oz",
    "black olives": "1/3 Cup",
    pepperoni: "4 Oz",
    "pickle juice": "2 Tbsp",
    "cake mix": "1 Box",
    caramel: "2 Tbsp",
    avocado: "1",
    "mustard greens": "2 Cups",
    pesto: "1/2 Cup",
    pretzels: "2 Cups",
    sprinkles: "1/4 Cup",
    "beef jerky": "4 Oz",
    "nacho cheese": "1/2 Cup",
    "candy corn": "1/2 Cup",
    hummus: "1/2 Cup",
    wasabi: "1 Tsp",
    peaches: "1 Cup",
    cherry: "1",
    celery: "1 Stalk",
    olives: "1/3 Cup"
};

const DISHES = [
    dish("desserts", "Chocolate Chip Cookies", "Easy", ["Flour", "Butter", "Brown Sugar", "Chocolate Chips", "Egg"], ["Tomato Paste", "Tuna", "Pickles", "Soy Sauce", "Rice", "Garlic", "Mustard"], ["That cookie just became a side quest.", "Chef Byte detected sandwich energy."]),
    dish("desserts", "Lemon Bars", "Medium", ["Lemon Juice", "Eggs", "Sugar", "Butter", "Flour"], ["Bacon", "Spinach", "Ketchup", "Black Beans", "Parmesan", "Potatoes", "Hot Sauce"], ["The lemon bars are now legally nachos.", "That was tart in the wrong direction."]),
    dish("desserts", "Banana Split", "Easy", ["Banana", "Vanilla Ice Cream", "Chocolate Syrup", "Whipped Cream", "Cherry"], ["Onion", "Mayonnaise", "Ground Beef", "Breadcrumbs", "Celery", "Broccoli", "Salsa"], ["The sundae is suing for emotional damages.", "You just invented dessert coleslaw."]),
    dish("desserts", "Apple Pie", "Medium", ["Apples", "Pie Crust", "Cinnamon", "Sugar", "Butter"], ["Ramen", "Olives", "Turkey", "Jalapeno", "Cream Cheese", "Peas", "Curry Powder"], ["That pie needs a witness protection program.", "Grandma has left the chat."]),
    dish("desserts", "Brownies", "Easy", ["Cocoa Powder", "Sugar", "Butter", "Eggs", "Flour"], ["Chicken Stock", "Corn", "Lettuce", "Relish", "Pesto", "Ham", "Lime"], ["The brownies have entered meatloaf territory.", "That pan is making dial-up noises."]),
    dish("desserts", "Cheesecake", "Hard", ["Cream Cheese", "Sugar", "Eggs", "Graham Crackers", "Sour Cream"], ["Cabbage", "BBQ Sauce", "Rice Noodles", "Salami", "Mushrooms", "Tortilla Chips", "Dill"], ["That cheesecake now has county fair energy.", "The crust asked for a manager."]),

    dish("dinner", "Spaghetti Marinara", "Easy", ["Spaghetti", "Tomatoes", "Garlic", "Olive Oil", "Basil"], ["Chocolate Chips", "Banana", "Peanut Butter", "Marshmallows", "Cereal", "Maple Syrup", "Grapes"], ["The pasta just turned into a lunchbox dare.", "Italy is buffering angrily."]),
    dish("dinner", "Chicken Tacos", "Medium", ["Chicken", "Tortillas", "Salsa", "Cheddar", "Lettuce"], ["Oats", "Lemon Curd", "Pancake Mix", "Blueberries", "Whipped Cream", "Cocoa Powder", "Jam"], ["The taco folded itself in disappointment.", "That is breakfast wearing a disguise."]),
    dish("dinner", "Beef Chili", "Medium", ["Ground Beef", "Beans", "Tomatoes", "Chili Powder", "Onion"], ["Powdered Sugar", "Vanilla Ice Cream", "Cucumber", "Apple", "Granola", "Honey", "Mint"], ["The chili is now confused soup.", "A tiny cowboy just booed."]),
    dish("dinner", "Margherita Pizza", "Easy", ["Pizza Dough", "Tomato Sauce", "Mozzarella", "Basil", "Olive Oil"], ["Coffee", "Pineapple Rings", "Frosting", "Trail Mix", "Gelatin", "Eggnog", "Pudding"], ["The pizza oven made eye contact with HR.", "That topping choice triggered a town meeting."]),
    dish("dinner", "Chicken Fried Rice", "Medium", ["Rice", "Chicken", "Egg", "Soy Sauce", "Peas", "Carrots"], ["Brownie Mix", "Cream Soda", "Taco Shells", "Raisins", "Bagels", "Cinnamon", "Yogurt"], ["The wok is reconsidering its career.", "That rice is wearing dessert shoes."]),
    dish("dinner", "Mac and Cheese", "Easy", ["Macaroni", "Cheddar", "Milk", "Butter", "Flour"], ["Shrimp", "Strawberries", "Ranch Powder", "Seaweed", "Watermelon", "Ginger Ale", "Cashews"], ["The cheese sauce is making an escape plan.", "That noodle just lost trust."]),

    dish("breakfast", "Pancakes", "Easy", ["Flour", "Milk", "Egg", "Baking Powder", "Butter"], ["Salmon", "Black Olives", "Pasta Sauce", "Cabbage", "Pepperoni", "Pickle Juice", "Tuna"], ["The griddle whispered, 'why'.", "Those pancakes now require a permit."]),
    dish("breakfast", "Breakfast Burrito", "Medium", ["Tortilla", "Eggs", "Potatoes", "Cheddar", "Salsa"], ["Ice Cream", "Graham Crackers", "Gummy Worms", "Lemonade", "Cake Mix", "Cherry Pie Filling", "Caramel"], ["That burrito is a pinata now.", "The breakfast station has been compromised."]),
    dish("breakfast", "French Toast", "Easy", ["Bread", "Eggs", "Milk", "Cinnamon", "Maple Syrup"], ["Ground Turkey", "Tomato Soup", "Avocado", "Mustard Greens", "Refried Beans", "Pesto", "Rice Vinegar"], ["The toast filed a syrup grievance.", "Brunch security is on the way."]),
    dish("breakfast", "Omelet", "Easy", ["Eggs", "Cheddar", "Bell Pepper", "Onion", "Ham"], ["Frosting", "Chocolate Syrup", "Pretzels", "Coconut", "Grape Jelly", "Pie Crust", "Sprinkles"], ["That omelet just joined the dessert menu.", "The egg pan made a disappointed beep."]),
    dish("breakfast", "Avocado Toast", "Medium", ["Bread", "Avocado", "Lemon Juice", "Salt", "Red Pepper Flakes"], ["Beef Jerky", "Marshmallow Fluff", "Nacho Cheese", "Pudding Cup", "Corn Dog", "Molasses", "Candy Corn"], ["The cafe Wi-Fi disconnected itself.", "That toast costs negative dollars now."]),
    dish("breakfast", "Biscuits and Gravy", "Hard", ["Biscuits", "Sausage", "Milk", "Flour", "Black Pepper"], ["Sushi Rice", "Mango", "Licorice", "Hummus", "Tater Tots", "Wasabi", "Peaches"], ["The gravy has entered witness protection.", "That biscuit just packed a suitcase."]),

    dish("snacks", "Nachos", "Easy", ["Tortilla Chips", "Cheddar", "Salsa", "Jalapenos", "Sour Cream"], ["Pancake Syrup", "Cake Flour", "Peaches", "Tonic Water", "Coffee Beans", "Cranberries", "Whipped Cream"], ["The nachos became a science fair volcano.", "Crunch integrity is failing."]),
    dish("snacks", "Guacamole", "Easy", ["Avocado", "Lime Juice", "Onion", "Cilantro", "Salt"], ["Hot Dog Bun", "Chocolate Milk", "Rice Krispies", "Alfredo Sauce", "Pepperoni", "Pork Rinds", "Vanilla"], ["The guac turned beige emotionally.", "The chip has lost confidence."]),
    dish("snacks", "Popcorn", "Easy", ["Popcorn Kernels", "Butter", "Salt"], ["Raw Eggs", "Tomato Sauce", "Blue Cheese", "Canned Tuna", "Pickled Beets", "Ginger", "BBQ Rub"], ["The theater manager fainted.", "That popcorn is speaking in plot twists."]),
    dish("snacks", "Soft Pretzels", "Medium", ["Flour", "Yeast", "Water", "Salt", "Baking Soda"], ["Shrimp Paste", "Grape Soda", "Lettuce", "Brown Sugar Ham", "Sardines", "Pine Nuts", "Mayo"], ["The pretzel untied itself.", "Snack physics have collapsed."]),
    dish("snacks", "Loaded Potato Skins", "Medium", ["Potatoes", "Cheddar", "Bacon", "Sour Cream", "Green Onion"], ["Banana Pudding", "Gum Drops", "Coconut Water", "Ramen Seasoning", "Feta", "Pear", "Molasses"], ["The potato asked to be unloaded.", "That appetizer now has dessert trauma."]),
    dish("snacks", "Trail Mix", "Easy", ["Peanuts", "Raisins", "Almonds", "Chocolate Candy"], ["Garlic Aioli", "Chicken Wings", "Macaroni", "Tomato Salsa", "Boiled Egg", "Coleslaw", "Mustard"], ["The hiking club is turning around.", "That bag is making refrigerator sounds."]),

    dish("drinks", "Lemonade", "Easy", ["Lemon Juice", "Sugar", "Water", "Ice"], ["Beef Broth", "Pizza Dough", "Cheddar", "Basil Pesto", "Cereal", "Ham", "Pickles"], ["The pitcher just developed trust issues.", "That lemonade now has soup posture."]),
    dish("drinks", "Hot Chocolate", "Easy", ["Milk", "Cocoa Powder", "Sugar", "Whipped Cream"], ["Chicken", "Onion Powder", "Relish", "Cornbread", "Spinach", "Taco Sauce", "Rice"], ["The mug is refusing eye contact.", "That cocoa has potluck energy."]),
    dish("drinks", "Strawberry Smoothie", "Medium", ["Strawberries", "Banana", "Yogurt", "Milk", "Honey"], ["Pepperoni", "Soy Sauce", "Crackers", "Parmesan", "Olives", "Mustard", "Beans"], ["The blender made an emergency noise.", "Smoothie? More like chew-through-it."]),
    dish("drinks", "Iced Coffee", "Easy", ["Coffee", "Ice", "Milk", "Sugar"], ["Meatballs", "Sour Cream", "Graham Crackers", "Chicken Nuggets", "Green Beans", "Hot Dog", "Tortellini"], ["The barista apron combusted slightly.", "That coffee needs a fork."]),
    dish("drinks", "Fruit Punch", "Medium", ["Orange Juice", "Pineapple Juice", "Cranberry Juice", "Lime", "Soda Water"], ["Mashed Potatoes", "Gravy", "Sausage", "Breadcrumbs", "Baked Beans", "Curry Paste", "Garlic"], ["The punch bowl is no longer invited.", "That ladle has seen too much."]),
    dish("drinks", "Milkshake", "Easy", ["Vanilla Ice Cream", "Milk", "Chocolate Syrup", "Whipped Cream"], ["Ranch Dressing", "Burrito Beans", "Cabbage", "Fried Rice", "Chili Powder", "Pickle Relish", "Tortilla"], ["The straw just resigned.", "The diner jukebox skipped a beat."]),

    dish("potluck", "Mystery Casserole", "Hard", ["Cream Soup", "Egg Noodles", "Chicken", "Cheddar", "Breadcrumbs"], ["Gummy Bears", "Energy Drink", "Seaweed Snacks", "Chocolate Frosting", "Bubble Tea Pearls", "Candy Canes", "Sardine Oil"], ["Someone's aunt is clapping too loudly.", "The casserole blinked first."]),
    dish("potluck", "Seven Layer Dip", "Medium", ["Refried Beans", "Guacamole", "Sour Cream", "Salsa", "Cheddar", "Olives"], ["Pancake Batter", "Chocolate Chips", "Apple Sauce", "Tuna Salad", "Licorice", "Orange Sherbet", "Powdered Donuts"], ["Layer eight is regret.", "The party table tilted away from you."]),
    dish("potluck", "Ambrosia Salad", "Medium", ["Marshmallows", "Whipped Cream", "Mandarin Oranges", "Pineapple", "Coconut"], ["Beef Tips", "Tortellini", "Horseradish", "Tomato Paste", "Fried Onions", "Rye Bread", "Soy Sauce"], ["The salad is technically a dessert with a lawyer.", "A folding chair squeaked in protest."]),
    dish("potluck", "Deviled Eggs", "Medium", ["Eggs", "Mayonnaise", "Mustard", "Paprika", "Relish"], ["Chocolate Pudding", "Tortilla Chips", "Banana", "Pizza Sauce", "Granola", "Soda Water", "Caramel"], ["The eggs are no longer invited to church basements.", "Paprika cannot save this."]),
    dish("potluck", "Jello Mold", "Hard", ["Gelatin", "Fruit Cocktail", "Whipped Topping", "Pineapple", "Walnuts"], ["Rotisserie Chicken", "Nacho Cheese", "Dill Pickles", "Garlic Bread", "Bacon Grease", "Buffalo Sauce", "Black Beans"], ["The mold wobbled with legal concern.", "Retro has become too retro."]),
    dish("potluck", "Tiny Sandwich Tray", "Easy", ["Bread", "Turkey", "Ham", "Cheddar", "Mayonnaise"], ["Lemon Sorbet", "Hot Fudge", "Rice Pudding", "Grapefruit", "Pop Rocks", "Maple Candy", "Jelly Beans"], ["Those sandwiches are now tiny desserts.", "The toothpicks are organizing."])
];

const els = {};
const state = {
    category: null,
    queue: [],
    roundIndex: 0,
    currentDish: null,
    found: new Set(),
    score: 0,
    streak: 0,
    lives: 5,
    timeLeft: 45,
    timerId: null,
    muted: false,
    chaosMode: false,
    highScore: getStoredHighScore(),
    coins: getStoredNumber("neonPantryCoins", 0),
    unlockedStations: getStoredJson("neonPantryStations", STARTER_STATIONS),
    accepting: false,
    teamCount: 1,
    currentTeam: 0,
    teamScores: [0],
    currentModifier: null,
    tools: { freeze: 1, toss: 1, shield: 1 },
    shieldActive: false,
    wrongThisRound: 0,
    perfectRounds: 0,
    roundLog: []
};

const audio = {
    ctx: null,
    unlocked: false,
    ensure() {
        if (!this.unlocked) return false;
        const AudioCtor = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtor) return false;
        if (!this.ctx) {
            this.ctx = new AudioCtor();
        }
        if (this.ctx.state === "suspended") {
            this.ctx.resume().catch(() => {});
        }
        return this.ctx.state !== "closed";
    },
    unlock() {
        this.unlocked = true;
        this.ensure();
    },
    tone(freq, duration = 0.12, type = "sine", gain = 0.08, delay = 0) {
        if (state.muted) return;
        if (!this.ensure()) return;
        const now = this.ctx.currentTime + delay;
        const osc = this.ctx.createOscillator();
        const vol = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, now);
        vol.gain.setValueAtTime(gain, now);
        vol.gain.exponentialRampToValueAtTime(0.001, now + duration);
        osc.connect(vol);
        vol.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + duration);
    },
    noise(duration = 0.18, gain = 0.05) {
        if (state.muted) return;
        if (!this.ensure()) return;
        const bufferSize = this.ctx.sampleRate * duration;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
        const source = this.ctx.createBufferSource();
        const vol = this.ctx.createGain();
        vol.gain.value = gain;
        vol.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
        source.connect(vol);
        vol.connect(this.ctx.destination);
        source.buffer = buffer;
        source.start();
    },
    correct() {
        this.tone(620, 0.08, "triangle", 0.08);
        this.tone(880, 0.12, "triangle", 0.09, 0.07);
    },
    wrong() {
        this.tone(160, 0.2, "sawtooth", 0.08);
        this.tone(92, 0.25, "square", 0.04, 0.09);
        this.noise(0.12, 0.035);
    },
    tick() { this.tone(900, 0.035, "square", 0.035); },
    chop() { this.noise(0.045, 0.025); },
    crack() {
        this.noise(0.09, 0.08);
        this.tone(240, 0.08, "square", 0.03);
    },
    sizzle() { this.noise(0.35, 0.03); },
    fanfare() {
        [523, 659, 784, 1046].forEach((f, i) => this.tone(f, 0.16, "triangle", 0.08, i * 0.08));
    },
    sad() {
        [220, 185, 147, 123].forEach((f, i) => this.tone(f, 0.22, "sawtooth", 0.06, i * 0.16));
    }
};

function dish(category, name, difficulty, requiredIngredients, decoyIngredients, funnyWrongMessages) {
    return { category, name, difficulty, requiredIngredients, decoyIngredients, funnyWrongMessages };
}

function init() {
    [
        "high-score", "mute-btn", "start-btn", "chaos-toggle", "category-grid", "round-kicker",
        "coin-bank", "mode-label", "team-status", "team-flash", "teams-btn",
        "intro-dish", "intro-meta", "begin-round-btn", "score", "streak", "lives",
        "round-count", "timer", "category-label", "dish-name", "progress-text",
        "progress-fill", "modifier-label", "host-message", "ingredient-grid", "result-kicker", "result-title",
        "result-message", "round-stats", "recipe-list", "next-round-btn", "final-score-loss",
        "final-score-win", "particles", "effects-layer"
    ].forEach(id => els[toCamel(id)] = document.getElementById(id));

    drawCategories();
    updateHighScore();
    updateCoins();
    bindEvents();
    startParticles();
}

function bindEvents() {
    els.startBtn.addEventListener("click", () => {
        startSetup(1);
    });
    els.teamsBtn.addEventListener("click", () => startSetup(2));
    els.chaosToggle.addEventListener("click", () => {
        state.chaosMode = !state.chaosMode;
        els.chaosToggle.textContent = `Chaos Mode ${state.chaosMode ? "On" : "Off"}`;
        els.chaosToggle.classList.toggle("active", state.chaosMode);
        audio.sizzle();
    });
    els.muteBtn.addEventListener("click", toggleMute);
    els.beginRoundBtn.addEventListener("click", beginRound);
    els.nextRoundBtn.addEventListener("click", nextRound);
    document.getElementById("tool-freeze").addEventListener("click", useFreeze);
    document.getElementById("tool-toss").addEventListener("click", useToss);
    document.getElementById("tool-shield").addEventListener("click", useShield);
    document.getElementById("quit-btn").addEventListener("click", resetToTitle);
    document.querySelectorAll("[data-screen]").forEach(btn => {
        btn.addEventListener("click", () => showScreen(btn.dataset.screen));
    });
    document.querySelectorAll(".restart-btn").forEach(btn => btn.addEventListener("click", resetToTitle));
    document.addEventListener("pointerdown", () => audio.unlock(), { once: true });
    document.addEventListener("keydown", () => audio.unlock(), { once: true });
    document.addEventListener("keydown", handleKeys);
}

function drawCategories() {
    els.categoryGrid.innerHTML = "";
    CATEGORIES.forEach(category => {
        const dishes = category.id === "all" ? DISHES : DISHES.filter(d => d.category === category.id);
        const count = category.id === "all" ? 8 : dishes.length;
        const hardCount = dishes.filter(d => d.difficulty === "Hard").length;
        const unlocked = isStationUnlocked(category);
        const canBuy = !unlocked && state.coins >= category.cost;
        const button = document.createElement("button");
        button.className = `category-card ${unlocked ? "" : "locked"}`;
        button.innerHTML = `
            <strong>${category.name}</strong>
            <span>${category.blurb}</span>
            <em>${count} rounds - ${hardCount} hard dishes</em>
            <b>${unlocked ? "Unlocked" : `${category.cost} Coins`}</b>
        `;
        button.addEventListener("click", () => {
            if (unlocked) {
                chooseCategory(category);
            } else if (canBuy) {
                unlockStation(category);
            } else {
                els.modeLabel.textContent = `${category.name} needs ${category.cost} Coins`;
                audio.wrong();
            }
        });
        els.categoryGrid.appendChild(button);
    });
}

function startSetup(teamCount) {
    state.teamCount = teamCount;
    state.currentTeam = 0;
    state.teamScores = Array.from({ length: teamCount }, () => 0);
    els.modeLabel.textContent = teamCount === 1 ? "Solo Run" : "2 Team Run";
    drawCategories();
    showScreen("category-screen");
}

function isStationUnlocked(category) {
    return category.cost === 0 || state.unlockedStations.includes(category.id);
}

function unlockStation(category) {
    if (state.coins < category.cost) return;
    state.coins -= category.cost;
    state.unlockedStations = [...new Set([...state.unlockedStations, category.id])];
    setStoredNumber("neonPantryCoins", state.coins);
    setStoredJson("neonPantryStations", state.unlockedStations);
    updateCoins();
    drawCategories();
    els.modeLabel.textContent = `${category.name} unlocked`;
    audio.fanfare();
}

function chooseCategory(category) {
    state.category = category;
    const source = category.id === "all" ? DISHES : DISHES.filter(d => d.category === category.id);
    state.queue = shuffle(source).slice(0, category.id === "all" ? 8 : 6);
    state.roundIndex = 0;
    state.score = 0;
    state.streak = 0;
    state.lives = 5;
    state.currentTeam = 0;
    state.teamScores = Array.from({ length: state.teamCount }, () => 0);
    state.tools = { freeze: 1, toss: 1, shield: 1 };
    state.shieldActive = false;
    state.perfectRounds = 0;
    state.roundLog = [];
    prepareRound();
}

function prepareRound() {
    clearTimer();
    state.accepting = false;
    state.currentDish = state.queue[state.roundIndex];
    state.currentModifier = pickModifier();
    state.found = new Set();
    state.wrongThisRound = 0;
    state.shieldActive = false;
    const roundNumber = state.roundIndex + 1;
    els.roundKicker.textContent = `Round ${roundNumber} of ${state.queue.length}`;
    els.introDish.textContent = state.currentDish.name;
    els.introMeta.textContent = `${state.category.name} - ${state.currentDish.difficulty} - ${state.currentDish.requiredIngredients.length} real ingredients`;
    document.getElementById("service-modifier").innerHTML = `<strong>${state.currentModifier.name}</strong><span>${state.currentModifier.description}</span>`;
    if (state.teamCount > 1) {
        flashTeam();
    }
    showScreen("round-intro-screen");
}

function beginRound() {
    audio.chop();
    state.accepting = true;
    state.timeLeft = Math.max(25, timeForDifficulty(state.currentDish.difficulty) + (state.currentModifier.time || 0));
    renderGame();
    showScreen("game-screen");
    clearTimer();
    state.timerId = setInterval(tickTimer, 1000);
}

function renderGame() {
    const dishData = state.currentDish;
    els.score.textContent = state.score;
    els.streak.textContent = state.streak;
    els.lives.textContent = state.lives;
    els.teamStatus.textContent = getTeamStatus();
    els.roundCount.textContent = `${state.roundIndex + 1}/${state.queue.length}`;
    els.timer.textContent = state.timeLeft;
    els.timer.classList.remove("danger");
    els.categoryLabel.textContent = state.category.name;
    els.dishName.textContent = dishData.name;
    els.modifierLabel.textContent = `${state.currentModifier.name}: ${state.currentModifier.description}`;
    updateProgress();
    els.hostMessage.textContent = "Pick the real ingredients before the kitchen starts blinking.";

    const items = shuffle([...dishData.requiredIngredients, ...dishData.decoyIngredients]);
    els.ingredientGrid.innerHTML = "";
    items.forEach((ingredient, index) => {
        const btn = document.createElement("button");
        btn.className = "ingredient-card";
        btn.dataset.ingredient = ingredient;
        btn.innerHTML = `<span class="measurement">${getMeasurement(ingredient)}</span><strong>${ingredient}</strong><small>${index + 1}</small>`;
        btn.setAttribute("aria-label", `${ingredient}, ${getMeasurement(ingredient)}, shortcut ${index + 1}`);
        btn.addEventListener("click", () => selectIngredient(ingredient, btn));
        els.ingredientGrid.appendChild(btn);
    });
    updateTools();
}

function selectIngredient(ingredient, button) {
    if (!state.accepting || button.disabled) return;
    const dishData = state.currentDish;
    button.disabled = true;
    const isCorrect = dishData.requiredIngredients.includes(ingredient);
    if (isCorrect) {
        button.classList.add("correct");
        state.found.add(ingredient);
        state.streak += 1;
        const streakMultiplier = state.currentModifier.streakMultiplier || 1;
        awardPoints(100 + (state.currentModifier.correctBonus || 0) + Math.min(state.streak * 15 * streakMultiplier, 220));
        els.hostMessage.textContent = praiseLine();
        audio.correct();
        popText("+", button);
        updateProgress();
        if (state.found.size === dishData.requiredIngredients.length) {
            completeRound(true);
        }
    } else {
        button.classList.add("wrong");
        state.streak = 0;
        state.wrongThisRound += 1;
        const penalty = 35 + (state.currentModifier.wrongPenalty || 0);
        let blockedByShield = false;
        if (state.shieldActive) {
            state.shieldActive = false;
            blockedByShield = true;
            els.hostMessage.textContent = "Safety Plate blocked the mistake.";
        } else {
            state.lives -= 1;
            els.hostMessage.textContent = random(dishData.funnyWrongMessages);
        }
        state.score = Math.max(0, state.score - penalty);
        if (state.teamCount > 1 && !blockedByShield) {
            switchTeam("Mistake passed control");
        }
        audio.wrong();
        triggerWrongEffect();
        document.body.classList.remove("shake");
        void document.body.offsetWidth;
        document.body.classList.add("shake");
        renderHud();
        updateTools();
        if (state.lives <= 0) {
            endGame(false, "The pantry rebelled after one ingredient too many.");
        }
    }
}

function tickTimer() {
    state.timeLeft -= 1;
    els.timer.textContent = state.timeLeft;
    els.timer.classList.toggle("danger", state.timeLeft <= 8);
    if (state.timeLeft <= 8 && state.timeLeft > 0) audio.tick();
    if (state.timeLeft <= 0) {
        endGame(false, `${state.currentDish.name} timed out under the heat lamp.`);
    }
}

function completeRound(success) {
    state.accepting = false;
    clearTimer();
    const bonus = Math.max(0, Math.round(state.timeLeft * 5 * (state.currentModifier.timeBonusMultiplier || 1)));
    const perfectBonus = state.wrongThisRound === 0 ? 250 : 0;
    if (perfectBonus) state.perfectRounds += 1;
    awardPoints(bonus + perfectBonus);
    state.roundLog.push({
        dish: state.currentDish.name,
        modifier: state.currentModifier.name,
        wrong: state.wrongThisRound,
        bonus,
        perfectBonus
    });
    saveHighScore();
    audio.fanfare();
    confettiBurst(80);
    els.resultKicker.textContent = `Round ${state.roundIndex + 1} Complete`;
    els.resultTitle.textContent = `${state.currentDish.name} plated.`;
    els.resultMessage.textContent = perfectBonus
        ? `Time bonus +${bonus}. Perfect plate +${perfectBonus}.`
        : `Time bonus +${bonus}. Mistakes this round: ${state.wrongThisRound}.`;
    els.roundStats.innerHTML = `
        <span>${state.currentModifier.name}</span>
        <span>${state.timeLeft}s left</span>
        <span>${state.perfectRounds} perfect plates</span>
    `;
    els.recipeList.innerHTML = state.currentDish.requiredIngredients.map(item => `<span>${item}</span>`).join("");
    els.nextRoundBtn.textContent = state.roundIndex + 1 >= state.queue.length ? "Finish Service" : "Next Round";
    setTimeout(() => showScreen("round-result-screen"), success ? 650 : 0);
}

function nextRound() {
    state.roundIndex += 1;
    if (state.roundIndex >= state.queue.length) {
        endGame(true);
    } else {
        if (state.teamCount > 1) {
            state.currentTeam = (state.currentTeam + 1) % state.teamCount;
        }
        prepareRound();
    }
}

function endGame(victory, message) {
    state.accepting = false;
    clearTimer();
    saveHighScore();
    if (victory) {
        audio.fanfare();
        confettiBurst(150);
        els.finalScoreWin.textContent = state.score;
        const earned = grantCoins(true);
        document.getElementById("victory-message").textContent = `You cleared ${state.category.name} with ${state.perfectRounds} perfect plates and earned ${earned} Coins.`;
        document.getElementById("win-standings").innerHTML = renderStandings();
        showScreen("victory-screen");
    } else {
        audio.sad();
        els.finalScoreLoss.textContent = state.score;
        const earned = grantCoins(false);
        document.getElementById("game-over-message").textContent = `${message || "The pantry has filed a complaint."} Earned ${earned} Coins.`;
        document.getElementById("loss-standings").innerHTML = renderStandings();
        showScreen("game-over-screen");
    }
}

function resetToTitle() {
    clearTimer();
    state.accepting = false;
    state.shieldActive = false;
    showScreen("title-screen");
}

function renderHud() {
    els.score.textContent = state.score;
    els.streak.textContent = state.streak;
    els.lives.textContent = state.lives;
    els.teamStatus.textContent = getTeamStatus();
}

function awardPoints(points) {
    const amount = Math.max(0, Math.round(points));
    state.score += amount;
    if (state.teamCount > 1) {
        state.teamScores[state.currentTeam] += amount;
    }
}

function getTeamStatus() {
    if (state.teamCount === 1) return "Solo Run";
    return `Team ${state.currentTeam + 1} Turn - ${state.teamScores.map((score, index) => `T${index + 1} ${score}`).join(" / ")}`;
}

function switchTeam(reason) {
    if (state.teamCount < 2) return;
    state.currentTeam = (state.currentTeam + 1) % state.teamCount;
    flashTeam(reason);
    renderHud();
}

function flashTeam(reason = "Next turn") {
    els.teamFlash.textContent = `${reason}: Team ${state.currentTeam + 1}`;
    els.teamFlash.classList.remove("active");
    void els.teamFlash.offsetWidth;
    els.teamFlash.classList.add("active");
}

function updateTools() {
    const freeze = document.getElementById("tool-freeze");
    const toss = document.getElementById("tool-toss");
    const shield = document.getElementById("tool-shield");
    freeze.textContent = `Freeze (${state.tools.freeze})`;
    toss.textContent = `Toss (${state.tools.toss})`;
    shield.textContent = state.shieldActive ? "Active" : `Plate (${state.tools.shield})`;
    freeze.disabled = !state.accepting || state.tools.freeze <= 0;
    toss.disabled = !state.accepting || state.tools.toss <= 0 || els.ingredientGrid.querySelectorAll(".ingredient-card:not(:disabled)").length < 6;
    shield.disabled = !state.accepting || state.tools.shield <= 0 || state.shieldActive;
}

function useFreeze() {
    if (!state.accepting || state.tools.freeze <= 0) return;
    state.tools.freeze -= 1;
    state.timeLeft += 10;
    els.timer.textContent = state.timeLeft;
    els.hostMessage.textContent = "Timer frozen just long enough to breathe.";
    audio.tick();
    updateTools();
}

function useToss() {
    if (!state.accepting || state.tools.toss <= 0) return;
    const decoys = [...els.ingredientGrid.querySelectorAll(".ingredient-card:not(:disabled)")]
        .filter(card => !state.currentDish.requiredIngredients.includes(card.dataset.ingredient));
    shuffle(decoys).slice(0, 2).forEach(card => {
        card.disabled = true;
        card.classList.add("tossed");
    });
    state.tools.toss -= 1;
    els.hostMessage.textContent = "Two decoys got tossed into the prep sink.";
    audio.chop();
    updateTools();
}

function useShield() {
    if (!state.accepting || state.tools.shield <= 0 || state.shieldActive) return;
    state.tools.shield -= 1;
    state.shieldActive = true;
    els.hostMessage.textContent = "Safety Plate armed. The next miss will not cost a life.";
    audio.correct();
    updateTools();
}

function updateProgress() {
    const total = state.currentDish.requiredIngredients.length;
    els.progressText.textContent = `${state.found.size} / ${total}`;
    els.progressFill.style.width = `${(state.found.size / total) * 100}%`;
    renderHud();
}

function triggerWrongEffect() {
    const effects = state.chaosMode
        ? ["tomato", "crack", "toast", "warning", "smoke", "chef-run", "spill", "egg", "boil"]
        : ["tomato", "crack", "toast", "smoke", "spill", "warning"];
    const type = random(effects);
    const node = document.createElement("div");
    node.className = `effect ${type}`;
    node.style.left = `${20 + Math.random() * 60}%`;
    node.style.top = `${18 + Math.random() * 58}%`;
    if (type === "warning") node.textContent = "HEALTH INSPECTOR HAS ENTERED THE CHAT";
    if (type === "toast") node.textContent = "BURNT TOAST";
    if (type === "chef-run") node.textContent = "tiny chef sprint";
    if (type === "egg") node.textContent = "EGG CRACK";
    if (type === "boil") node.textContent = "POT BOILOVER";
    els.effectsLayer.appendChild(node);
    if (type === "crack" || type === "egg") audio.crack();
    if (type === "boil" || type === "smoke") audio.sizzle();
    setTimeout(() => node.remove(), 1300);
}

function popText(text, anchor) {
    const rect = anchor.getBoundingClientRect();
    const node = document.createElement("div");
    node.className = "score-pop";
    node.textContent = text;
    node.style.left = `${rect.left + rect.width / 2}px`;
    node.style.top = `${rect.top + rect.height / 2}px`;
    els.effectsLayer.appendChild(node);
    setTimeout(() => node.remove(), 700);
}

function showScreen(id) {
    document.querySelectorAll(".screen").forEach(screen => screen.classList.toggle("active", screen.id === id));
}

function handleKeys(event) {
    if (event.key.toLowerCase() === "m") {
        toggleMute();
        return;
    }
    if (event.key.toLowerCase() === "f") useFreeze();
    if (event.key.toLowerCase() === "t") useToss();
    if (event.key.toLowerCase() === "s") useShield();
    if (!state.accepting) return;
    const number = Number(event.key);
    if (number >= 1 && number <= 9) {
        const button = els.ingredientGrid.querySelectorAll(".ingredient-card")[number - 1];
        if (button) button.click();
    }
}

function toggleMute() {
    state.muted = !state.muted;
    els.muteBtn.textContent = state.muted ? "Sound Off" : "Mute";
}

function saveHighScore() {
    if (state.score > state.highScore) {
        state.highScore = state.score;
        setStoredHighScore(state.highScore);
        updateHighScore();
    }
}

function getStoredHighScore() {
    return getStoredNumber("neonPantryHighScore", 0);
}

function setStoredHighScore(score) {
    setStoredNumber("neonPantryHighScore", score);
}

function getStoredNumber(key, fallback) {
    try {
        return Number(localStorage.getItem(key) || fallback);
    } catch (error) {
        return fallback;
    }
}

function setStoredNumber(key, value) {
    try {
        localStorage.setItem(key, String(value));
    } catch (error) {}
}

function getStoredJson(key, fallback) {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : fallback;
    } catch (error) {
        return fallback;
    }
}

function setStoredJson(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {}
}

function updateHighScore() {
    els.highScore.textContent = `High Score ${state.highScore}`;
}

function updateCoins() {
    els.coinBank.textContent = `${state.coins} Coins`;
}

function grantCoins(victory) {
    const roundCoins = state.roundLog.length * 12;
    const perfectCoins = state.perfectRounds * 10;
    const victoryCoins = victory ? 40 : 0;
    const earned = Math.max(8, roundCoins + perfectCoins + victoryCoins);
    state.coins += earned;
    setStoredNumber("neonPantryCoins", state.coins);
    updateCoins();
    return earned;
}

function renderStandings() {
    if (state.teamCount === 1) {
        return `<span>Solo Score ${state.score}</span>`;
    }
    const winnerScore = Math.max(...state.teamScores);
    return state.teamScores
        .map((score, index) => `<span class="${score === winnerScore ? "winner" : ""}">Team ${index + 1}: ${score}</span>`)
        .join("");
}

function timeForDifficulty(difficulty) {
    if (difficulty === "Hard") return 42;
    if (difficulty === "Medium") return 45;
    return 48;
}

function pickModifier() {
    const pool = state.roundIndex === 0
        ? MODIFIERS.filter(modifier => modifier.id === "quiet")
        : MODIFIERS;
    return random(pool);
}

function clearTimer() {
    if (state.timerId) clearInterval(state.timerId);
    state.timerId = null;
}

function shuffle(list) {
    const copy = [...list];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function random(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function getMeasurement(ingredient) {
    const key = normalizeIngredient(ingredient);
    if (MEASUREMENTS[key]) return MEASUREMENTS[key];
    if (key.includes("sauce") || key.includes("dressing") || key.includes("aioli")) return "1/2 Cup";
    if (key.includes("juice") || key.includes("soda") || key.includes("water") || key.includes("milk")) return "1 Cup";
    if (key.includes("powder") || key.includes("seasoning") || key.includes("rub")) return "1 Tbsp";
    if (key.includes("dill") || key.includes("mint") || key.includes("cilantro") || key.includes("basil")) return "1/4 Cup";
    if (key.includes("chips") || key.includes("crackers") || key.includes("cereal")) return "2 Cups";
    if (key.includes("cheese") || key.includes("cream")) return "4 Oz";
    if (key.includes("beef") || key.includes("chicken") || key.includes("turkey") || key.includes("ham") || key.includes("sausage") || key.includes("salami") || key.includes("shrimp") || key.includes("fish")) return "8 Oz";
    if (key.includes("noodles") || key.includes("pasta") || key.includes("macaroni") || key.includes("spaghetti")) return "8 Oz";
    if (key.includes("beans") || key.includes("rice")) return "1 Cup";
    if (key.includes("candy") || key.includes("gummy") || key.includes("sprinkles")) return "1/2 Cup";
    if (key.includes("bread") || key.includes("bun") || key.includes("tortilla")) return "2";
    if (key.includes("apple") || key.includes("banana") || key.includes("lime") || key.includes("lemon") || key.includes("pear")) return "1";
    return "1 Cup";
}

function normalizeIngredient(ingredient) {
    return String(ingredient || "").trim().toLowerCase();
}

function praiseLine() {
    return random([
        "Clean pick. The pantry light flickers approvingly.",
        "Correct. Chef Byte briefly stopped judging you.",
        "That belongs in the bowl.",
        "Yes. The recipe is stabilizing."
    ]);
}

function toCamel(id) {
    return id.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

function startParticles() {
    const canvas = els.particles;
    const ctx = canvas.getContext("2d");
    const particles = Array.from({ length: 70 }, () => ({
        x: Math.random(),
        y: Math.random(),
        s: 0.5 + Math.random() * 2.2,
        v: 0.0005 + Math.random() * 0.0018,
        c: Math.random() > 0.5 ? "#00f5ff" : "#ff2bd6"
    }));

    function resize() {
        canvas.width = window.innerWidth * devicePixelRatio;
        canvas.height = window.innerHeight * devicePixelRatio;
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.y += p.v;
            if (p.y > 1.05) {
                p.y = -0.05;
                p.x = Math.random();
            }
            ctx.fillStyle = p.c;
            ctx.globalAlpha = 0.35;
            ctx.beginPath();
            ctx.arc(p.x * canvas.width, p.y * canvas.height, p.s * devicePixelRatio, 0, Math.PI * 2);
            ctx.fill();
        });
        ctx.globalAlpha = 1;
        requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);
    resize();
    draw();
}

function confettiBurst(count) {
    const canvas = els.particles;
    const ctx = canvas.getContext("2d");
    const bits = Array.from({ length: count }, () => ({
        x: canvas.width / 2,
        y: canvas.height * 0.35,
        vx: (Math.random() - 0.5) * 18 * devicePixelRatio,
        vy: (-Math.random() * 14 - 4) * devicePixelRatio,
        life: 60 + Math.random() * 30,
        c: random(["#00f5ff", "#ff2bd6", "#ffe75e", "#63ff9a"])
    }));
    let frame = 0;
    function drawBurst() {
        frame += 1;
        bits.forEach(bit => {
            bit.x += bit.vx;
            bit.y += bit.vy;
            bit.vy += 0.55 * devicePixelRatio;
            bit.life -= 1;
            ctx.fillStyle = bit.c;
            ctx.fillRect(bit.x, bit.y, 8 * devicePixelRatio, 3 * devicePixelRatio);
        });
        if (frame < 70) requestAnimationFrame(drawBurst);
    }
    drawBurst();
}

document.addEventListener("DOMContentLoaded", init);

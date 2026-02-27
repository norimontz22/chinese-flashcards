// ==================== VOCABULARY DATA (from screenshots) ====================
const FULL_CARDS = [
    // Greetings & basics (200154.png, 200250.png, 200431.png)
    { chinese: "叫", pinyin: "jiào", english: "call / to be named", category: "basics" },
    { chinese: "名字", pinyin: "míngzi", english: "name", category: "basics" },
    { chinese: "是", pinyin: "shì", english: "to be / yes", category: "basics" },
    { chinese: "吗", pinyin: "ma", english: "(question particle)", category: "basics" },
    { chinese: "人", pinyin: "rén", english: "person", category: "people" },
    { chinese: "什么", pinyin: "shénme", english: "what", category: "basics" },
    { chinese: "我", pinyin: "wǒ", english: "I / me", category: "people" },
    { chinese: "老师", pinyin: "lǎoshī", english: "teacher", category: "people" },
    { chinese: "学生", pinyin: "xuésheng", english: "student", category: "people" },
    { chinese: "她", pinyin: "tā", english: "she / her", category: "people" },
    { chinese: "的", pinyin: "de", english: "'s / possessive", category: "basics" },
    { chinese: "哪", pinyin: "nǎ", english: "which", category: "basics" },
    { chinese: "呢", pinyin: "ne", english: "(question particle)", category: "basics" },
    { chinese: "同学", pinyin: "tóngxué", english: "classmate", category: "people" },
    { chinese: "谁", pinyin: "shuí", english: "who", category: "basics" },
    { chinese: "汉语", pinyin: "Hànyǔ", english: "Chinese language", category: "basics" },
    { chinese: "国", pinyin: "guó", english: "country", category: "places" },
    { chinese: "他", pinyin: "tā", english: "he / him", category: "people" },
    { chinese: "朋友", pinyin: "péngyou", english: "friend", category: "people" },
    { chinese: "会", pinyin: "huì", english: "can / to be able", category: "action" },
    { chinese: "妈妈", pinyin: "māma", english: "mother", category: "people" },
    { chinese: "很", pinyin: "hěn", english: "very", category: "basics" },
    { chinese: "做", pinyin: "zuò", english: "to do / make", category: "action" },
    { chinese: "汉字", pinyin: "Hànzì", english: "Chinese character", category: "basics" },
    { chinese: "怎么", pinyin: "zěnme", english: "how", category: "basics" },
    { chinese: "说", pinyin: "shuō", english: "to speak", category: "action" },
    { chinese: "菜", pinyin: "cài", english: "dish / food", category: "food" },
    { chinese: "好吃", pinyin: "hǎochī", english: "delicious", category: "food" },
    { chinese: "写", pinyin: "xiě", english: "to write", category: "action" },
    { chinese: "字", pinyin: "zì", english: "character", category: "basics" },
    { chinese: "读", pinyin: "dú", english: "to read", category: "action" },
    // From 200536.png
    { chinese: "小", pinyin: "xiǎo", english: "small", category: "basics" },
    { chinese: "那儿", pinyin: "nàr", english: "there", category: "places" },
    { chinese: "下面", pinyin: "xiàmiàn", english: "under / below", category: "basics" },
    { chinese: "儿子", pinyin: "érzi", english: "son", category: "people" },
    { chinese: "爸爸", pinyin: "bàba", english: "father", category: "people" },
    { chinese: "猫", pinyin: "māo", english: "cat", category: "people" },
    { chinese: "狗", pinyin: "gǒu", english: "dog", category: "people" },
    { chinese: "哪儿", pinyin: "nǎr", english: "where", category: "places" },
    { chinese: "医院", pinyin: "yīyuàn", english: "hospital", category: "places" },
    { chinese: "在", pinyin: "zài", english: "at / to be in", category: "basics" },
    { chinese: "椅子", pinyin: "yǐzi", english: "chair", category: "basics" },
    { chinese: "工作", pinyin: "gōngzuò", english: "work / job", category: "action" },
    { chinese: "医生", pinyin: "yīshēng", english: "doctor", category: "people" },
    // Objects & food from multiple screenshots
    { chinese: "咖啡", pinyin: "kāfēi", english: "coffee", category: "food" },
    { chinese: "公园", pinyin: "gōngyuán", english: "park", category: "places" },
    { chinese: "机场", pinyin: "jīchǎng", english: "airport", category: "places" },
    { chinese: "车站", pinyin: "chēzhàn", english: "station", category: "places" },
    { chinese: "手机", pinyin: "shǒujī", english: "mobile phone", category: "basics" },
    { chinese: "手镯", pinyin: "shǒuzhuó", english: "bracelet", category: "basics" },
    { chinese: "手表", pinyin: "shǒubiǎo", english: "watch", category: "basics" },
    { chinese: "手套", pinyin: "shǒutào", english: "gloves", category: "basics" },
    { chinese: "面包", pinyin: "miànbāo", english: "bread", category: "food" },
    { chinese: "面条", pinyin: "miàntiáo", english: "noodles", category: "food" },
    { chinese: "电脑", pinyin: "diànnǎo", english: "computer", category: "basics" },
    { chinese: "电话", pinyin: "diànhuà", english: "telephone", category: "basics" },
    // Erhua & others
    { chinese: "小孩儿", pinyin: "xiǎoháir", english: "child", category: "people" },
    { chinese: "小鸟儿", pinyin: "xiǎoniǎor", english: "little bird", category: "people" },
    { chinese: "饭馆儿", pinyin: "fànguǎnr", english: "restaurant", category: "places" },
    { chinese: "香水儿", pinyin: "xiāngshuǐr", english: "perfume", category: "basics" },
    { chinese: "洗澡", pinyin: "xǐzǎo", english: "shower", category: "action" },
    { chinese: "打扫", pinyin: "dǎsǎo", english: "to clean", category: "action" },
    { chinese: "昨天", pinyin: "zuótiān", english: "yesterday", category: "basics" },
    { chinese: "早上", pinyin: "zǎoshang", english: "morning", category: "basics" },
    { chinese: "操场", pinyin: "cāochǎng", english: "playground", category: "places" },
    { chinese: "游泳", pinyin: "yóuyǒng", english: "swim", category: "action" },
    { chinese: "音乐", pinyin: "yīnyuè", english: "music", category: "basics" },
    { chinese: "危险", pinyin: "wēixiǎn", english: "dangerous", category: "basics" },
    { chinese: "语言", pinyin: "yǔyán", english: "language", category: "basics" },
    { chinese: "爷爷", pinyin: "yéye", english: "grandpa", category: "people" },
    { chinese: "我们", pinyin: "wǒmen", english: "we / us", category: "people" },
    // Numbers (1-5)
    { chinese: "一", pinyin: "yī", english: "one", category: "numbers" },
    { chinese: "二", pinyin: "èr", english: "two", category: "numbers" },
    { chinese: "三", pinyin: "sān", english: "three", category: "numbers" },
    { chinese: "四", pinyin: "sì", english: "four", category: "numbers" },
    { chinese: "五", pinyin: "wǔ", english: "five", category: "numbers" }
];

// Remove duplicates (keep first occurrence)
const uniqueMap = new Map();
FULL_CARDS.forEach(card => {
    if (!uniqueMap.has(card.chinese)) uniqueMap.set(card.chinese, card);
});
const MASTER_LIST = Array.from(uniqueMap.values());

// ==================== STATE ====================
let displayedCards = MASTER_LIST.map(c => ({...c, known: false }));
let currentIndex = 0;
let studied = 0;
let knownTotal = 0;
let answerLocked = false; // lock options after correct answer

// DOM elements
const chineseChar = document.getElementById('chineseChar');
const pinyin = document.getElementById('pinyin');
const englishMeaning = document.getElementById('englishMeaning');
const englishReveal = document.getElementById('englishReveal');
const flashcard = document.getElementById('flashcard');
const optionsContainer = document.getElementById('optionsContainer');
const feedbackMsg = document.getElementById('feedbackMsg');
const nextCardBtn = document.getElementById('nextCardBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const flipBtn = document.getElementById('flipBtn');
const studiedSpan = document.getElementById('studied');
const knownSpan = document.getElementById('known');
const remainingSpan = document.getElementById('remaining');
const progressFill = document.getElementById('progress');
const cardCounter = document.getElementById('cardCounter');
const totalCardsSpan = document.getElementById('totalCards');

// ==================== HELPER FUNCTIONS ====================
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function getRandomOptions(correctEnglish, count = 4) {
    // Get unique English strings from master list
    const allEnglish = [...new Set(MASTER_LIST.map(c => c.english))].filter(e => e !== correctEnglish);
    let opts = [correctEnglish];
    while (opts.length < count && allEnglish.length) {
        const rand = allEnglish[Math.floor(Math.random() * allEnglish.length)];
        if (!opts.includes(rand)) {
            opts.push(rand);
        }
    }
    while (opts.length < count) opts.push("?");
    return shuffleArray(opts);
}

function updateDisplay() {
    const card = displayedCards[currentIndex];
    chineseChar.textContent = card.chinese;
    pinyin.textContent = card.pinyin;
    englishMeaning.textContent = card.english;
    englishReveal.style.display = 'none';

    // Generate options
    const options = getRandomOptions(card.english, 4);
    optionsContainer.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.addEventListener('click', (e) => handleOptionClick(e.target, opt, card.english));
        optionsContainer.appendChild(btn);
    });

    feedbackMsg.textContent = '🤔 Choose the English meaning';
    answerLocked = false;
    nextCardBtn.disabled = true;

    // Update counter
    cardCounter.textContent = `Card ${currentIndex + 1} of ${displayedCards.length}`;
    totalCardsSpan.textContent = displayedCards.length;

    // Update progress bar
    const progress = ((currentIndex + 1) / displayedCards.length) * 100;
    progressFill.style.width = `${progress}%`;

    // Update nav buttons
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === displayedCards.length - 1;
}

function handleOptionClick(btn, selected, correct) {
    if (answerLocked) return;

    const allOptions = document.querySelectorAll('.option-btn');

    if (selected === correct) {
        // Correct answer
        btn.classList.add('correct-guess');
        feedbackMsg.innerHTML = '✅ 太棒了！ Correct!';

        if (!displayedCards[currentIndex].known) {
            displayedCards[currentIndex].known = true;
            knownTotal++;
        }
        studied++;
        answerLocked = true;

        // Disable all and highlight correct ones
        allOptions.forEach(opt => {
            opt.disabled = true;
            if (opt.textContent === correct) opt.classList.add('correct-guess');
        });

        nextCardBtn.disabled = false;
    } else {
        // Wrong answer
        btn.classList.add('wrong-guess');
        feedbackMsg.innerHTML = `❌ Not correct. The answer is "${correct}"`;

        // Highlight the correct option
        allOptions.forEach(opt => {
            if (opt.textContent === correct) {
                opt.style.border = '4px solid #28a745';
            }
        });

        btn.disabled = true; // disable only the wrong clicked button
    }

    updateStats();
}

function updateStats() {
    studiedSpan.textContent = studied;
    knownSpan.textContent = knownTotal;
    const toReview = displayedCards.filter(c => !c.known).length;
    remainingSpan.textContent = toReview;
}

function goToNextCard() {
    if (currentIndex < displayedCards.length - 1) {
        currentIndex++;
        updateDisplay();
    }
}

function previousCard() {
    if (currentIndex > 0) {
        currentIndex--;
        updateDisplay();
    }
}

function nextCard() {
    if (currentIndex < displayedCards.length - 1) {
        currentIndex++;
        updateDisplay();
    }
}

function flipCard() {
    if (answerLocked) return;
    if (englishReveal.style.display === 'none' || !englishReveal.style.display) {
        englishReveal.style.display = 'block';
    } else {
        englishReveal.style.display = 'none';
    }
}

function filterCategory(category, targetTab) {
    if (category === 'all') {
        displayedCards = MASTER_LIST.map(c => ({...c, known: false }));
    } else {
        displayedCards = MASTER_LIST.filter(c => c.category === category).map(c => ({...c, known: false }));
    }

    // Reset progress
    studied = 0;
    knownTotal = 0;
    currentIndex = 0;
    answerLocked = false;
    updateDisplay();
    updateStats();
    englishReveal.style.display = 'none';

    // Update active tab
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    targetTab.classList.add('active');
}

// ==================== EVENT LISTENERS ====================
flashcard.addEventListener('click', flipCard);
flipBtn.addEventListener('click', flipCard);
nextCardBtn.addEventListener('click', goToNextCard);
prevBtn.addEventListener('click', previousCard);
nextBtn.addEventListener('click', nextCard);

// Category tabs
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
        const category = e.target.dataset.category;
        filterCategory(category, e.target);
    });
});

// Initialize
updateDisplay();
updateStats();
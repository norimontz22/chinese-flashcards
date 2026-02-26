// Chinese Flash Card Data
const chineseCards = [
    // Greetings (Category: greetings)
    { chinese: "你好", pinyin: "nǐ hǎo", english: "Hello", example: "你好，我叫...", category: "greetings", known: false },
    { chinese: "再见", pinyin: "zài jiàn", english: "Goodbye", example: "再见，明天见", category: "greetings", known: false },
    { chinese: "谢谢", pinyin: "xiè xiè", english: "Thank you", example: "谢谢你的帮助", category: "greetings", known: false },
    { chinese: "不客气", pinyin: "bù kè qì", english: "You're welcome", example: "不客气，没问题", category: "greetings", known: false },
    { chinese: "对不起", pinyin: "duì bù qǐ", english: "Sorry", example: "对不起，我迟到了", category: "greetings", known: false },

    // Basics (Category: basics)
    { chinese: "是", pinyin: "shì", english: "Yes/To be", example: "我是学生", category: "basics", known: false },
    { chinese: "不", pinyin: "bù", english: "No/Not", example: "我不是老师", category: "basics", known: false },
    { chinese: "好", pinyin: "hǎo", english: "Good", example: "很好，谢谢", category: "basics", known: false },
    { chinese: "不好", pinyin: "bù hǎo", english: "Not good", example: "今天天气不好", category: "basics", known: false },
    { chinese: "很", pinyin: "hěn", english: "Very", example: "很好，很高兴", category: "basics", known: false },

    // Numbers (Category: numbers)
    { chinese: "一", pinyin: "yī", english: "One", example: "一个人", category: "numbers", known: false },
    { chinese: "二", pinyin: "èr", english: "Two", example: "两个苹果", category: "numbers", known: false },
    { chinese: "三", pinyin: "sān", english: "Three", example: "三个孩子", category: "numbers", known: false },
    { chinese: "四", pinyin: "sì", english: "Four", example: "四个季节", category: "numbers", known: false },
    { chinese: "五", pinyin: "wǔ", english: "Five", example: "五天", category: "numbers", known: false },

    // Food (Category: food)
    { chinese: "米饭", pinyin: "mǐ fàn", english: "Rice", example: "我喜欢吃米饭", category: "food", known: false },
    { chinese: "面条", pinyin: "miàn tiáo", english: "Noodles", example: "牛肉面很好吃", category: "food", known: false },
    { chinese: "茶", pinyin: "chá", english: "Tea", example: "请给我一杯茶", category: "food", known: false },
    { chinese: "水", pinyin: "shuǐ", english: "Water", example: "我想喝水", category: "food", known: false },
    { chinese: "苹果", pinyin: "píng guǒ", english: "Apple", example: "一个红苹果", category: "food", known: false }
];

// Global variables
let currentCards = [...chineseCards];
let currentIndex = 0;
let studied = 0;
let known = 0;
let currentCategory = 'all';

// Initialize the app
function init() {
    updateDisplay();
    updateStats();
    updateButtons();
    updateProgress();
}

// Flip card function
function flipCard() {
    document.getElementById('flashcard').classList.toggle('flipped');
}

// Go to previous card
function prevCard() {
    if (currentIndex > 0) {
        currentIndex--;
        document.getElementById('flashcard').classList.remove('flipped');
        updateDisplay();
        updateButtons();
        updateProgress();
    }
}

// Go to next card
function nextCard() {
    if (currentIndex < currentCards.length - 1) {
        currentIndex++;
        document.getElementById('flashcard').classList.remove('flipped');
        updateDisplay();
        updateButtons();
        updateProgress();
    }
}

// Mark card as known
function markKnown() {
    if (currentCards.length > 0) {
        studied++;
        if (!currentCards[currentIndex].known) {
            known++;
            currentCards[currentIndex].known = true;
        }
        updateStats();

        if (currentIndex < currentCards.length - 1) {
            nextCard();
        }
    }
}

// Mark card for review
function markReview() {
    if (currentCards.length > 0) {
        studied++;
        if (currentCards[currentIndex].known) {
            known--;
            currentCards[currentIndex].known = false;
        }
        updateStats();

        if (currentIndex < currentCards.length - 1) {
            nextCard();
        }
    }
}

// Filter cards by category
function filterCategory(category) {
    currentCategory = category;

    // Update active tab
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');

    // Filter cards
    if (category === 'all') {
        currentCards = [...chineseCards];
    } else {
        currentCards = chineseCards.filter(card => card.category === category);
    }

    // Reset index
    currentIndex = 0;
    document.getElementById('flashcard').classList.remove('flipped');

    // Update display
    updateDisplay();
    updateButtons();
    updateProgress();
}

// Update card display
function updateDisplay() {
    if (currentCards.length > 0) {
        const card = currentCards[currentIndex];
        document.getElementById('chineseChar').textContent = card.chinese;
        document.getElementById('pinyin').textContent = card.pinyin;
        document.getElementById('english').textContent = card.english;
        document.getElementById('example').textContent = card.example;

        // Update counter
        document.getElementById('cardCounter').textContent =
            `Card ${currentIndex + 1} of ${currentCards.length}`;
    } else {
        document.getElementById('chineseChar').textContent = '无卡片';
        document.getElementById('pinyin').textContent = 'No cards';
        document.getElementById('english').textContent = 'No cards in this category';
        document.getElementById('example').textContent = '';
        document.getElementById('cardCounter').textContent = 'No cards';
    }
}

// Update statistics
function updateStats() {
    document.getElementById('studied').textContent = studied;
    document.getElementById('known').textContent = known;

    // Calculate cards to review (cards not known)
    const toReview = currentCards.filter(card => !card.known).length;
    document.getElementById('remaining').textContent = toReview;
}

// Update navigation buttons
function updateButtons() {
    document.getElementById('prevBtn').disabled = currentIndex === 0;
    document.getElementById('nextBtn').disabled = currentIndex === currentCards.length - 1;
}

// Update progress bar
function updateProgress() {
    if (currentCards.length > 0) {
        const progress = ((currentIndex + 1) / currentCards.length) * 100;
        document.getElementById('progress').style.width = `${progress}%`;
    } else {
        document.getElementById('progress').style.width = '0%';
    }
}

// Reset progress (optional function)
function resetProgress() {
    studied = 0;
    known = 0;
    currentCards.forEach(card => card.known = false);
    currentIndex = 0;
    document.getElementById('flashcard').classList.remove('flipped');
    updateDisplay();
    updateStats();
    updateButtons();
    updateProgress();
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        prevCard();
    } else if (e.key === 'ArrowRight') {
        nextCard();
    } else if (e.key === ' ' || e.key === 'Space') {
        e.preventDefault();
        flipCard();
    } else if (e.key === 'k' || e.key === 'K') {
        markKnown();
    } else if (e.key === 'r' || e.key === 'R') {
        markReview();
    }
});

// Initialize on page load
window.onload = init;
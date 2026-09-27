/* Part 1: script.js 行1〜260（完全版） */

let quizQuestions = [];
let currentQuestions = [];
let currentQuestionIndex = 0;

let currentMode = "";
let currentDifficulty = "";
let currentGenre = "";
let currentYear = "";
let currentMember = "";

let allQuestions = [...QUESTIONS];
let totalQuestions = 10;
let correctCount = 0;
let comboCount = 0;
let maxCombo = 0;
let score = 0;

let reviewQuestions = [];
let favoriteQuestions = [];

let timer = null;
let timerSeconds = 0;
let timerMaxSeconds = 60;
let timeAttackMode = false;

/* ==========================================
   🎵 BGMシステム
========================================== */

let bgmEnabled = true;
let currentBGM = null;
let bgmVolume = 0.30;

const BGM = {
    home: null,
    quiz: null,
    timeAttack: null,
    result: null
};

function initializeBGM() {
    const homeList = [
    document.getElementById("homeBGM1"),
    document.getElementById("homeBGM2"),
    document.getElementById("homeBGM3"),
    document.getElementById("homeBGM4")
].filter(audio => audio);

    BGM.home = homeList[Math.floor(Math.random() * homeList.length)];
    BGM.quiz = document.getElementById("quizBGM");
    BGM.timeAttack = document.getElementById("timeAttackBGM");
    BGM.result = document.getElementById("resultBGM");

    Object.values(BGM).forEach(audio => {
        if (!audio) return;
        audio.volume = bgmVolume;
        audio.loop = true;
    });

        document.addEventListener("click", () => {
        playBGM("home");
    }, { once: true });
}

function stopAllBGM() {
    Object.values(BGM).forEach(audio => {
        if (!audio) return;
        audio.pause();
        audio.currentTime = 0;
    });
}

function playBGM(name){

    console.log("🎵 BGM再生:", name);
    
    if(!bgmEnabled) return;
    if(currentBGM === name) return;

    const nextAudio = BGM[name];
    if(!nextAudio) return;

    // 今流れているBGMをフェードアウト
    if(currentBGM && BGM[currentBGM]){

        const oldAudio = BGM[currentBGM];
        let volume = bgmVolume;

        const fadeOut = setInterval(()=>{

            volume -= 0.03;

            if(volume <= 0){

                clearInterval(fadeOut);
                oldAudio.pause();
                oldAudio.currentTime = 0;

            }else{

                oldAudio.volume = volume;

            }

        },30);

    }

    currentBGM = name;

    nextAudio.volume = 0;
    nextAudio.currentTime = 0;

    nextAudio.play().catch(()=>{});

    // 新しいBGMをフェードイン
    let volume = 0;

    const fadeIn = setInterval(()=>{

        volume += 0.03;

        if(volume >= bgmVolume){

            nextAudio.volume = bgmVolume;
            clearInterval(fadeIn);

        }else{

            nextAudio.volume = volume;

        }

    },30);

}

function toggleBGM() {
    bgmEnabled = !bgmEnabled;

    const button = document.getElementById("bgmToggleButton");
    if (button) {
        button.textContent = bgmEnabled ? "🎵 ON" : "🔇 OFF";
    }

    if (bgmEnabled) {
        playBGM(currentBGM || "home");
    } else {
        stopAllBGM();
    }
}

function changeBGMVolume(value) {
    bgmVolume = value / 100;

    Object.values(BGM).forEach(audio => {
        if (!audio) return;
        audio.volume = bgmVolume;
    });
}

function showPage(pageId) {

    // 全ページを非表示
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
        page.style.display = "none";
    });

    // ローディング画面を消す
    const loading = document.getElementById("loadingOverlay");
    if (loading) {
        loading.classList.remove("active");
        loading.style.display = "none";
    }

    // 指定ページを表示
    const page = document.getElementById(pageId);
    if (page) {
        page.style.display = "block";
        page.classList.add("active");
    }

    // ★ 結果画面だけはスクロール位置を維持する
    if (pageId !== "resultPage") {
        window.scrollTo(0, 0);
    }
}

function goHome() {

    // ==========================
    // タイマーをすべて停止
    // ==========================
    clearQuizTimers();

    if (timer) {
        clearInterval(timer);
        timer = null;
    }

    // ==========================
    // タイムアタックをリセット
    // ==========================
    timeAttackMode = false;

    timerSeconds = 60;
    timerMaxSeconds = 60;

    if (typeof attackTime !== "undefined") attackTime = 60;
    if (typeof attackRemaining !== "undefined") attackRemaining = 60;

    // ==========================
    // クイズ状態をリセット
    // ==========================
    currentMode = "";
    currentDifficulty = "";
    currentGenre = "";
    currentYear = "";

    currentQuestionIndex = 0;
    correctCount = 0;
    comboCount = 0;
    maxCombo = 0;
    score = 0;

    reviewQuestions = [];
    quizQuestions = [];
    currentQuestions = [];

    // ==========================
    // タイマー表示をリセット
    // ==========================
    const timerArea = document.querySelector(".timer-wrapper");
    if (timerArea) {
        timerArea.style.display = "none";
    }

    const timeText = document.getElementById("timeDisplay");
    if (timeText) {
        timeText.textContent = "60秒";
    }

    const gauge = document.getElementById("timeGauge");
    if (gauge) {
        gauge.style.width = "100%";
        gauge.className = "time-gauge green";
    }

    // ==========================
    // 問題数表示を戻す
    // ==========================
    const questionNumber = document.getElementById("questionNumber");
    if (questionNumber) {
        questionNumber.parentElement.style.display = "block";
    }

    // ==========================
    // 一番上へ戻ってホーム表示
    // ==========================
    window.scrollTo(0, 0);
    showPage("homePage");
    playBGM("home");
}

function loadQuestion() {

    console.log("loadQuestion実行", quizQuestions.length);

    if (!quizQuestions || quizQuestions.length === 0) {
        console.error("問題がありません");
        return;
    }

    if (currentQuestionIndex >= quizQuestions.length) {
        showResult();
        return;
    }

    const q = quizQuestions[currentQuestionIndex];

    // ★ 問題数表示（通常クイズのみ表示）
    const questionNumber = document.getElementById("questionNumber");

    if (currentMode === "timeAttack") {

        // タイムアタックでは問題数を隠す
        if (questionNumber) {
            questionNumber.parentElement.style.display = "none";
        }

    } else {

        // 通常クイズでは表示する
        if (questionNumber) {
            questionNumber.parentElement.style.display = "block";
            questionNumber.textContent =
                `${currentQuestionIndex + 1} / ${quizQuestions.length}`;
        }

    }

    // 正解数・コンボ表示
    document.getElementById("scoreDisplay").textContent = correctCount;
    document.getElementById("comboDisplay").textContent = comboCount;

    const genreMap = {
        member: "👤 メンバー",
        history: "📚 歴史",
        song: "🎵 楽曲",
        live: "🎤 ライブ",
        mv: "🎬 MV",
        formation: "💎 フォーメーション",
        image: "🖼️ 画像"
    };

    const genreChip = document.getElementById("genreChip");
    if (genreChip) {
        genreChip.textContent = genreMap[q.genre] || "🌞 日向坂46";
    }

    document.getElementById("questionText").textContent = q.question;

    const img = document.getElementById("questionImage");
    if (img) {
        if (q.image) {
            img.src = q.image;
            img.style.display = "block";
        } else {
            img.style.display = "none";
            img.removeAttribute("src");
        }
    }

    // タイムアタック中級・上級は選択肢をランダム
    if (
        currentMode === "timeAttack" &&
        (currentDifficulty === "middle" || currentDifficulty === "hard")
    ) {
        createChoicesRandom(q);
    } else {
        createChoices(q);
    }

    document.getElementById("answerResult").textContent = "";
    document.getElementById("answerExplanation").textContent = "";

    const nextButton = document.getElementById("nextButton");
    if (nextButton) nextButton.style.display = "none";

    updateFavoriteButton();
}

function clearQuizTimers() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

function shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function openDifficulty(level) {

    console.log("openDifficulty実行:", level);

    currentDifficulty = level;

    showPage("questionCountPage");
}

window.openDifficulty = openDifficulty;

function startQuiz(questionCount) {
    console.log("startQuiz実行", currentDifficulty, questionCount);
    clearQuizTimers();

    currentMode = "normal";
    currentQuestionIndex = 0;
    correctCount = 0;
    comboCount = 0;
    maxCombo = 0;
    score = 0;

    const timerArea = document.querySelector(".timer-wrapper");
    if (timerArea) timerArea.style.display = "none";

    let list = [...allQuestions];

// 難易度で絞り込み
if (currentDifficulty) {

    const difficultyMap = {
        easy: EASY,
        middle: MIDDLE,
        hard: HARD
    };

    const target = difficultyMap[currentDifficulty];

    list = list.filter(q => q.difficulty === target);
    console.log("list.length =", list.length);
}

// シャッフル（ここは1回だけ）
list = shuffle(list);

if (questionCount !== "all") {
    list = list.slice(0, Number(questionCount));
}
    currentQuestions = list;
    quizQuestions = list;
    totalQuestions = list.length;

    const loading = document.getElementById("loadingOverlay");
    if (loading) {
        loading.classList.remove("active");
        loading.style.display = "none";
    }

    showPage("quizPage");
    loadQuestion();
    updateFavoriteButton();
}

function createQuestionList() {
    let list = allQuestions.filter(q => {
        if (!currentDifficulty) return true;
        return q.level === currentDifficulty;
    });

    quizQuestions = shuffle(list);

    if (totalQuestions !== "all") {
        quizQuestions = quizQuestions.slice(0, totalQuestions);
    }
}

function startQuizGame() {

    currentQuestionIndex = 0;
    correctCount = 0;
    comboCount = 0;
    maxCombo = 0;
    score = 0;

    playBGM("quiz");

    if (quizQuestions.length < totalQuestions) {
        totalQuestions = quizQuestions.length;
    }

    quizQuestions = quizQuestions.slice(0, totalQuestions);

    showPage("quizPage");
    loadQuestion();
}

// ---------- ジャンルクイズ ----------

function startMemberQuiz(member) {

    currentMode = "member";
    currentGenre = "member";
    currentMember = member;
    currentDifficulty = "";

    totalQuestions = 20;

    if (member === "ALL") {
        quizQuestions = shuffle(
            allQuestions.filter(q => q.genre === "member")
        );
    } else {
        quizQuestions = shuffle(
            allQuestions.filter(q =>
                q.genre === "member" &&
                q.member === member
            )
        );
    }

    alert(`member=${member}`);
    alert(`問題数=${quizQuestions.length}`);

    if (quizQuestions.length === 0) {
        alert(member + " の問題がありません。");
        return;
    }

    hideMemberMenu();
    startQuizGame();
}

// ---------- 年代別クイズ ----------

function startYearQuiz(year) {

    currentMode = "year";
    currentYear = year;
    currentDifficulty = "";

    totalQuestions = 20;

    quizQuestions = shuffle(
        allQuestions.filter(q => String(q.year) === String(year))
    );

    startQuizGame();
}

// ---------- ランダムクイズ ----------

function startRandomQuiz() {

    currentMode = "random";
    currentDifficulty = "";

    totalQuestions = 20;

    quizQuestions = shuffle(allQuestions);

    startQuizGame();
}

// ---------- タイムアタック ----------

function openTimeAttack(seconds) {
    timerSeconds = seconds;
    showPage("timeAttackPage");
}

function startTimeAttack(level) {

    // ==========================
    // タイムアタック開始
    // ==========================
    clearQuizTimers();

    currentMode = "timeAttack";
    timeAttackMode = true;
    currentDifficulty = level;
    playBGM("timeAttack");

    // スコア初期化
    currentQuestionIndex = 0;
    correctCount = 0;
    comboCount = 0;
    maxCombo = 0;
    score = 0;

    // タイマー初期化
    timerSeconds = attackTime;
    timerMaxSeconds = attackTime;

    // ==========================
    // 問題作成
    // ==========================
const difficultyMap = {
    easy: EASY,
    middle: MIDDLE,
    hard: HARD
};

const targetDifficulty = difficultyMap[level];

// 難易度で取得
let pool = allQuestions.filter(q => q.difficulty === targetDifficulty);

console.log("難易度:", level);
console.log("候補問題数:", pool.length);

// 問題がない場合は終了
if (pool.length === 0) {
    alert("この難易度の問題がありません。");
    return;
}

// 60秒＝20問、120秒＝40問
const targetCount = attackTime === 120 ? 40 : 20;

// シャッフル
pool = shuffle([...pool]);

let list = [];

// 問題数が足りない場合は繰り返して補充
while (list.length < targetCount) {
    list = list.concat(shuffle([...pool]));
}

list = list.slice(0, targetCount);

quizQuestions = list;
currentQuestions = list;
totalQuestions = list.length;

console.log("タイムアタック問題数:", quizQuestions.length);

    // ==========================
    // タイマー表示
    // ==========================
    const timerArea = document.querySelector(".timer-wrapper");
    if (timerArea) {
        timerArea.style.display = "block";
    }

    const timeDisplay = document.getElementById("timeDisplay");
    if (timeDisplay) {
        timeDisplay.textContent = `${timerSeconds}秒`;
    }

    const gauge = document.getElementById("timeGauge");
    if (gauge) {
        gauge.style.width = "100%";
        gauge.className = "time-gauge green";
    }

    // タイムアタックでは問題数を非表示
    const questionNumber = document.getElementById("questionNumber");
    if (questionNumber) {
        questionNumber.parentElement.style.display = "none";
    }

    // ==========================
    // クイズ開始
    // ==========================
    showPage("quizPage");
    loadQuestion();
    startTimer();
}

// ---------- 問題表示 ----------

function showQuestion() {

    if (currentQuestionIndex >= quizQuestions.length) {
        showResult();
        return;
    }

    const q = quizQuestions[currentQuestionIndex];

    document.getElementById("questionNumber").textContent =
        `${currentQuestionIndex + 1} / ${quizQuestions.length}`;

    document.getElementById("scoreDisplay").textContent = correctCount;
    document.getElementById("comboDisplay").textContent = comboCount;

    const genreMap = {
        member: "👤 メンバー",
        TV: "📺 TV",
        song: "🎵 楽曲",
        live: "🎤 ライブ",
        mv: "🎬 MV",
        formation: "💎 フォーメーション",
        image: "🖼️ 画像"
    };

    const chip = document.getElementById("genreChip");
    if (chip) {
        chip.textContent = genreMap[q.genre] || "🌞 日向坂46";
    }

    document.getElementById("questionText").textContent = q.question;

    const img = document.getElementById("questionImage");

    if (img) {
        if (q.image) {
            img.src = q.image;
            img.style.display = "block";
        } else {
            img.removeAttribute("src");
            img.style.display = "none";
        }
    }

    createChoices(q);

    document.getElementById("answerResult").textContent = "";
    document.getElementById("answerExplanation").textContent = "";

    const next = document.getElementById("nextButton");
    if (next) next.style.display = "none";

    updateFavoriteButton();
}

// ---------- 選択肢生成 ----------

function createChoices(question) {

    const area = document.getElementById("choiceContainer");

    if (!area) {
        console.error("choiceContainer がありません");
        return;
    }

    area.innerHTML = "";

    question.choices.forEach((choice, index) => {

        const btn = document.createElement("button");

        btn.type = "button";
        btn.className = "choice-button";
        btn.textContent = choice;

        btn.addEventListener("click", () => {
            answerQuestion(index);
        });

        area.appendChild(btn);
    });
}

// ===============================
// タイムアタック中級・上級用（選択肢ランダム）
// ===============================
function createChoicesRandom(question) {

    const area = document.getElementById("choiceContainer");
    area.innerHTML = "";

    // 元の選択肢と正解位置を保持
    const choices = question.choices.map((choice, index) => ({
        text: choice,
        originalIndex: index
    }));

    // Fisher-Yates シャッフル
    for (let i = choices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [choices[i], choices[j]] = [choices[j], choices[i]];
    }

    // ボタン生成
    choices.forEach(choice => {

        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "choice-button";
        btn.textContent = choice.text;

        // 元の正解番号で判定
        btn.onclick = () => answerQuestion(choice.originalIndex);

        area.appendChild(btn);

    });
}

// ---------- 正解判定 ----------

function answerQuestion(choiceIndex) {

    const q = quizQuestions[currentQuestionIndex];

    const buttons =
        document.querySelectorAll(".choice-button");

    buttons.forEach(btn => btn.disabled = true);

    const result =
        document.getElementById("answerResult");

    const explanation =
        document.getElementById("answerExplanation");

    if ((choiceIndex + 1) === q.answer) {

        buttons[choiceIndex].classList.add("correct");

        result.textContent = "⭕ 正解！";
        result.className = "answer-correct";
        explanation.textContent = q.explanation || "";

        correctCount++;
        comboCount++;

        score += 100 + comboCount * 5;

        if (comboCount > maxCombo) {
            maxCombo = comboCount;
        }

        playSE("correctSE");

    } else {

        buttons[choiceIndex].classList.add("wrong");

        if (buttons[q.answer - 1]) {
            buttons[q.answer - 1].classList.add("correct");
        }

        result.textContent = "❌ 不正解";
        result.className = "answer-wrong";

        comboCount = 0;

        playSE("wrongSE");

        reviewQuestions.push(q);
    }

    document.getElementById("scoreDisplay").textContent = correctCount;
document.getElementById("comboDisplay").textContent = comboCount;

explanation.innerHTML = `<strong>💡 正解：</strong> ${q.choices[q.answer - 1]}<br><br><strong>📖 解説</strong><br>${q.explanation || "解説はありません。"}`;
explanation.style.display = "block";

const nextButton = document.getElementById("nextButton");
    // タイムアタックだけ自動で次の問題へ
    if (currentMode === "timeAttack") {

        nextButton.style.display = "none";

        setTimeout(() => {
            nextQuestion();
        }, 500);

    } else {

        // 通常クイズ・100問チャレンジはボタン表示
        nextButton.style.display = "block";

    }
}

// ---------- 次の問題 ----------

function nextQuestion() {

    currentQuestionIndex++;

    const next = document.getElementById("nextButton");
    if (next) next.style.display = "none";

    loadQuestion();
}

// ---------- お気に入り ----------

function toggleFavorite() {

    const q = quizQuestions[currentQuestionIndex];

    if (!q) return;

    const exists = favoriteQuestions.some(item => item.id === q.id);

    if (exists) {

        favoriteQuestions = favoriteQuestions.filter(
            item => item.id !== q.id
        );

        showToast("お気に入りから削除しました ⭐");

    } else {

        favoriteQuestions.push(q);

        showToast("お気に入りに追加しました ❤️");
    }

    saveFavorites();
    updateFavoriteButton();
}

function updateFavoriteButton() {

    const btn = document.getElementById("favoriteButton");

    if (!btn) return;

    const q = quizQuestions[currentQuestionIndex];

    if (!q) return;

    const exists = favoriteQuestions.some(item => item.id === q.id);

    btn.classList.toggle("active", exists);
}

// ---------- タイマー ----------

function startTimer() {

    clearQuizTimers();

    const endTime = Date.now() + timerSeconds * 1000;
    let lastSecond = timerSeconds;

    updateTimeBar();

    timer = setInterval(() => {

        const remain = Math.max(
            0,
            Math.floor((endTime - Date.now()) / 1000)
        );

        // 秒が変わった時だけ更新
        if (remain !== lastSecond) {
            lastSecond = remain;
            timerSeconds = remain;
            updateTimeBar();

            // 残り5秒からカウントダウン音
            if (remain > 0 && remain <= 5) {
                playSE("countdownSE");
            }
        }

        // 時間切れ
        if (remain <= 0) {

            clearInterval(timer);
            timer = null;

            finishTimeAttack();
        }

    }, 100);
}

function updateTimeBar() {

    const text = document.getElementById("timeDisplay");
    const gauge = document.getElementById("timeGauge");

    // 残り時間表示
    if (text) {
        text.textContent = `${timerSeconds}秒`;
    }

    if (!gauge) return;

    // 0～100%で固定
    const percent = Math.max(
        0,
        Math.min(100, (timerSeconds / timerMaxSeconds) * 100)
    );

    // バーの長さ
    gauge.style.width = percent + "%";

    // 色をリセット
    gauge.className = "time-gauge";

    // 色変更
    if (percent > 60) {
        gauge.classList.add("green");
    } else if (percent > 30) {
        gauge.classList.add("yellow");
    } else if (percent > 10) {
        gauge.classList.add("orange");
    } else {
        gauge.classList.add("red");
        gauge.classList.add("blink");
    }
}

function finishTimeAttack() {

    // すでにホームへ戻っている場合は何もしない
    if (!timeAttackMode) return;

    // 二重実行を防ぐ
    timeAttackMode = false;

    clearQuizTimers();

    playSE("finishSE");

    showResult();
}

// ---------- FEVER TIME ----------

function checkFever() {

    if (comboCount !== 0 && comboCount % 15 === 0) {

        document.body.classList.add("fever-background");

        showFever();

        playSE("comboSE");

        setTimeout(() => {
            document.body.classList.remove("fever-background");
        }, 5000);
    }
}

function updateCombo() {

    const combo = document.getElementById("comboDisplay");

    if (combo) {
        combo.textContent = comboCount;
    }

    if (comboCount >= 3) {
        showComboEffect(`${comboCount} COMBO!`);
    }

    checkFever();
}

function updateScore() {

    const scoreText = document.getElementById("scoreDisplay");

    if (scoreText) {
        scoreText.textContent = correctCount;
    }
}

// ---------- タイムアタック専用 ----------

function nextQuestionTimeAttack() {

    currentQuestionIndex++;

    if (currentQuestionIndex >= quizQuestions.length) {

        quizQuestions = shuffle(quizQuestions);
        currentQuestionIndex = 0;
    }

    const next = document.getElementById("nextButton");

    if (next) next.style.display = "none";

    loadQuestion();
}

// ---------- 結果画面 ----------

function showResult() {

    playBGM("result");
    clearQuizTimers();
    showPage("resultPage");

const total = quizQuestions.length;

const rate =
    total > 0
        ? Math.round((correctCount / total) * 100)
        : 0;
        
// ランク判定
let rank = "D";
let message = "もう一度チャレンジしよう！";

// 全問正解のみSランク
if (correctCount === total && total > 0) {

    rank = "S";
    message = "🌈 PERFECT!! 全問正解！";

} else if (rate >= 80) {

    rank = "A";
    message = "🏆 素晴らしい！";

} else if (rate >= 60) {

    rank = "B";
    message = "🥇 かなり良い成績！";

} else if (rate >= 40) {

    rank = "C";
    message = "🥈 あと少し！";

} else {

    rank = "D";
    message = "📚 もう一度チャレンジしよう！";

}

// ランク表示
const rankCircle = document.getElementById("rankCircle");
if (rankCircle) {
    rankCircle.textContent = rank;
    rankCircle.className = `rank-circle rank${rank}`;
}

// 結果表示
document.getElementById("correctResult").textContent =
    `${correctCount} / ${total}`;

document.getElementById("rateResult").textContent = `${rate}%`;
document.getElementById("comboResult").textContent = maxCombo;
document.getElementById("scoreResult").textContent = score;
document.getElementById("resultMessage").textContent = message;

// この2行はそのまま残す
updateBestRecord(rate);
saveRanking(rate);
}

// ---------- ベスト記録 ----------

function updateBestRecord(rate) {

    const bestScore =
        Number(localStorage.getItem("bestScore") || 0);

    const bestCombo =
        Number(localStorage.getItem("bestCombo") || 0);

    if (score > bestScore) {
        localStorage.setItem("bestScore", score);
    }

    if (maxCombo > bestCombo) {
        localStorage.setItem("bestCombo", maxCombo);
    }

    if (rate === 100) {
        const count =
            Number(localStorage.getItem("perfectCount") || 0) + 1;

        localStorage.setItem("perfectCount", count);
    }

    loadBestRecord();
}

function loadBestRecord() {

    const scoreText = document.getElementById("bestScore");
    const comboText = document.getElementById("bestCombo");
    const perfectText = document.getElementById("perfectCount");

    if (scoreText)
        scoreText.textContent =
            localStorage.getItem("bestScore") || 0;

    if (comboText)
        comboText.textContent =
            localStorage.getItem("bestCombo") || 0;

    if (perfectText)
        perfectText.textContent =
            localStorage.getItem("perfectCount") || 0;
}

// ---------- ランキング ----------

function saveRanking(rate) {

    let ranking =
        JSON.parse(localStorage.getItem("ranking") || "[]");

    ranking.push({
        date: new Date().toLocaleDateString("ja-JP"),
        score,
        correct: correctCount,
        rate,
        combo: maxCombo,
        mode: currentMode
    });

    ranking.sort((a, b) => b.score - a.score);
    ranking = ranking.slice(0, 30);

    localStorage.setItem("ranking", JSON.stringify(ranking));

    loadRanking();
}

function loadRanking() {

    const tbody = document.getElementById("rankingBody");

    if (!tbody) return;

    tbody.innerHTML = "";

    const ranking =
        JSON.parse(localStorage.getItem("ranking") || "[]");

    ranking.forEach((item, index) => {

        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.date}</td>
            <td>${item.score}</td>
            <td>${item.correct}</td>
            <td>${item.rate}%</td>
            <td>${item.combo}</td>
            <td>${item.mode}</td>
        `;

        tbody.appendChild(tr);
    });
}

function clearRanking() {

    if (!confirm("ランキングを削除しますか？")) return;

    localStorage.removeItem("ranking");

    loadRanking();

    showToast("ランキングを削除しました");
}

// ---------- 100問チャレンジ ----------

function startChallenge100() {

    currentMode = "challenge";
    currentDifficulty = "";
    totalQuestions = 100;
    timeAttackMode = false;

    quizQuestions =
        shuffle(allQuestions).slice(0, 100);

    currentQuestionIndex = 0;
    correctCount = 0;
    comboCount = 0;
    maxCombo = 0;
    score = 0;

    showPage("quizPage");
    loadQuestion();
}

// ---------- リトライ ----------

function retryQuiz() {

    clearQuizTimers();

    switch (currentMode) {

        // 通常クイズ
        case "normal":
            startQuiz(totalQuestions);
            break;

        // タイムアタック
        case "timeAttack":
            startTimeAttack(currentDifficulty);
            break;

        // 100問チャレンジ
        case "challenge":
            startChallenge100();
            break;

        // ジャンルクイズ
        case "genre":
            startGenreQuiz(currentGenre);
            break;

        // 年別クイズ
        case "year":
            startYearQuiz(currentYear);
            break;

        // ランダムクイズ
        case "random":
            startRandomQuiz();
            break;

        // お気に入りクイズ
        case "favorite":
            startFavoriteQuiz();
            break;

        // 復習クイズ
        case "review":
            startReviewQuiz();
            break;

        default:
            goHome();
            break;
    }
}

// ---------- 復習クイズ ----------

function startReviewQuiz() {

    if (reviewQuestions.length === 0) {
        alert("復習問題がありません。");
        return;
    }

    currentMode = "review";
    quizQuestions = shuffle([...reviewQuestions]);

    currentQuestionIndex = 0;
    correctCount = 0;
    comboCount = 0;
    maxCombo = 0;
    score = 0;

    showPage("quizPage");
    loadQuestion();
}

// ---------- お気に入りクイズ ----------

function startFavoriteQuiz() {

    if (favoriteQuestions.length === 0) {
        alert("お気に入り問題がありません。");
        return;
    }

    currentMode = "favorite";
    quizQuestions = shuffle([...favoriteQuestions]);

    currentQuestionIndex = 0;
    correctCount = 0;
    comboCount = 0;
    maxCombo = 0;
    score = 0;

    showPage("quizPage");
    loadQuestion();
}

// ---------- お気に入り保存 ----------

function saveFavorites() {
    localStorage.setItem(
        "favorites",
        JSON.stringify(favoriteQuestions)
    );
}

function loadFavorites() {
    favoriteQuestions = JSON.parse(
        localStorage.getItem("favorites") || "[]"
    );
    loadFavoritePage();
}

// ---------- お気に入り一覧 ----------

function loadFavoritePage() {

    const area = document.getElementById("favoriteList");
    if (!area) return;

    area.innerHTML = "";

    if (favoriteQuestions.length === 0) {
        area.innerHTML = `
            <div class="empty-box">
                <div class="emoji">⭐</div>
                <h2>お気に入りはありません</h2>
                <p>問題画面で⭐を押すと追加できます。</p>
            </div>
        `;
        return;
    }

    favoriteQuestions.forEach((q, index) => {

        const card = document.createElement("div");
        card.className = "favorite-card";

        card.innerHTML = `
            <span class="favorite-category">${q.genre}</span>
            <h3>${q.question}</h3>
            <p><strong>正解：</strong>${q.choices[q.answer]}</p>

            <button class="delete-button"
                    onclick="removeFavorite(${index})">
                削除
            </button>
        `;

        area.appendChild(card);
    });
}

// ---------- お気に入り削除 ----------

function removeFavorite(index) {

    favoriteQuestions.splice(index, 1);

    saveFavorites();
    loadFavoritePage();

    showToast("お気に入りを削除しました");
}

// ---------- 復習一覧 ----------

function loadReviewPage() {

    const area = document.getElementById("reviewList");
    if (!area) return;

    area.innerHTML = "";

    if (reviewQuestions.length === 0) {

        area.innerHTML = `
            <div class="empty-box">
                <div class="emoji">📚</div>
                <h2>復習問題はありません</h2>
                <p>不正解になった問題がここに表示されます。</p>
            </div>
        `;

        return;
    }

    reviewQuestions.forEach(q => {

        const card = document.createElement("div");
        card.className = "review-card";

        card.innerHTML = `
            <span class="review-tag">${q.genre}</span>

            <h3>${q.question}</h3>

            <p><strong>正解：</strong>${q.choices[q.answer]}</p>

            <p>${q.explanation || ""}</p>
        `;

        area.appendChild(card);
    });
}

// ---------- Toast ----------

function showToast(message) {

    const toast = document.getElementById("toast");
    if (!toast) return;

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2200);
}

// ---------- 効果音 ----------

function playSE(id) {

    if (localStorage.getItem("quizSound") === "off") return;

    const audio = document.getElementById(id);

    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;

    audio.play().catch(() => {});
}

// ---------- 効果音ON/OFF ----------

function toggleSound() {

    const current =
        localStorage.getItem("quizSound") || "on";

    const next =
        current === "on" ? "off" : "on";

    localStorage.setItem("quizSound", next);

    const btn = document.getElementById("soundButton");

    if (!btn) return;

    btn.classList.toggle("off", next === "off");
    btn.textContent = next === "on" ? "🔊" : "🔇";
}

// ---------- モーダル ----------

function openMessage(title, text, icon = "🎉") {

    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalText").textContent = text;
    document.getElementById("modalIcon").textContent = icon;

    document.getElementById("messageModal").style.display = "flex";
}

function closeMessage() {
    document.getElementById("messageModal").style.display = "none";
}

// ---------- コンボ演出 ----------

function showComboEffect(text) {

    const combo = document.getElementById("comboEffect");
    if (!combo) return;

    combo.textContent = text;
    combo.classList.add("show");

    setTimeout(() => {
        combo.classList.remove("show");
    }, 1400);
}

// ---------- PERFECT ----------

function showPerfect() {

    const effect = document.getElementById("perfectEffect");
    if (!effect) return;

    effect.classList.add("show");

    setTimeout(() => {
        effect.classList.remove("show");
    }, 1800);
}

// ---------- EXCELLENT ----------

function showExcellent() {

    const effect = document.getElementById("excellentEffect");
    if (!effect) return;

    effect.classList.add("show");

    setTimeout(() => {
        effect.classList.remove("show");
    }, 1800);
}

// ---------- FEVER ----------

function showFever() {

    const effect = document.getElementById("feverEffect");
    if (!effect) return;

    effect.classList.add("show");

    setTimeout(() => {
        effect.classList.remove("show");
    }, 2200);
}

// ---------- ローディング ----------

function startLoading(callback) {

    const loading = document.getElementById("loadingOverlay");
    const fill = document.getElementById("loadingFill");
    const percent = document.getElementById("loadingPercent");

    if (!loading) {
        callback();
        return;
    }

    loading.style.display = "flex";
    loading.classList.add("active");

    let progress = 0;

    if (fill) fill.style.width = "0%";
    if (percent) percent.textContent = "0%";

    const loadingTimer = setInterval(() => {

        progress += 5;

        if (fill) fill.style.width = progress + "%";
        if (percent) percent.textContent = progress + "%";

        if (progress >= 100) {

            clearInterval(loadingTimer);

            loading.classList.remove("active");
            loading.style.display = "none";

            callback();
        }

    }, 30);
}

// ---------- キーボード操作 ----------

window.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        goHome();
    }

    if (event.key === "Enter") {

        const next = document.getElementById("nextButton");

        if (next && next.style.display !== "none") {
            nextQuestion();
        }
    }
});

// ---------- 初期化 ----------

function initializeQuizApp() {

    // ===== 問題を読み込む =====
    if (typeof QUESTIONS !== "undefined") {
        allQuestions = [...QUESTIONS];
    } else if (typeof questions !== "undefined") {
        allQuestions = [...questions];
    } else {
        allQuestions = [];
        console.error("questions.js が読み込まれていません");
    }

    console.log("読み込み問題数 =", allQuestions.length);

    // ===== その他データ =====
    loadFavorites();
    loadRanking();
    loadBestRecord();

    // ===== サウンド設定 =====
    if (localStorage.getItem("quizSound") === null) {
        localStorage.setItem("quizSound", "on");
    }

    const soundButton = document.getElementById("soundButton");
    if (soundButton) {
        soundButton.textContent =
            localStorage.getItem("quizSound") === "off"
                ? "🔇"
                : "🔊";
    }

    // ===== ホーム画面表示 =====
    startLoading(() => {
        showPage("homePage");
        initializeBGM();
        playBGM("home");
    });
}

// ---------- ボタンをHTMLから使えるようにする ----------

window.goHome = goHome;
window.startQuiz = startQuiz;
window.startQuizGame = startQuizGame;
window.nextQuestion = nextQuestion;
window.toggleFavorite = toggleFavorite;
window.openDifficulty = openDifficulty;

window.startGenreQuiz = startGenreQuiz;
window.startMemberQuiz = startMemberQuiz; 
window.startYearQuiz = startYearQuiz;
window.startRandomQuiz = startRandomQuiz;

window.startTimeAttack = startTimeAttack;
window.openTimeAttack = openTimeAttack;

window.startChallenge100 = startChallenge100;
window.startFavoriteQuiz = startFavoriteQuiz;
window.startReviewQuiz = startReviewQuiz;
window.retryQuiz = retryQuiz;

window.toggleSound = toggleSound;
window.clearRanking = clearRanking;
window.removeFavorite = removeFavorite;
window.closeMessage = closeMessage;

// ---------- 起動（1回だけ） ----------

window.addEventListener("load", initializeQuizApp);

console.log("🌈 Hinatazaka46 QUIZ1000 COMPLETE EDITION Loaded");

/* ==========================================
   👤 メンバー選択メニュー
========================================== */

function showMemberMenu() {
    document.getElementById("memberMenu").style.display = "block";
}

function hideMemberMenu() {
    document.getElementById("memberMenu").style.display = "none";
}

function startMemberQuiz(member) {

    currentMode = "member";
    currentGenre = "member";
    currentMember = member;
    currentDifficulty = "";

    totalQuestions = 20;

    if (member === "ALL") {
        quizQuestions = shuffle(
            allQuestions.filter(q => q.genre === "member")
        );
    } else {
        quizQuestions = shuffle(
            allQuestions.filter(q =>
                q.genre === "member" &&
                q.member === member
            )
        );
    }

    if (quizQuestions.length === 0) {
        alert(member + " の問題がありません。");
        return;
    }

    hideMemberMenu();
    startQuizGame();
}
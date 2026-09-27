/* ==========================================
   日向坂46 QUIZ COMPLETE EDITION
   challenge.js Part 1 / 2
========================================== */

let attackTime = 60;
let attackRemaining = 60;
let attackTimer = null;
let attackDifficulty = "random";

/* ===============================
   タイムアタック開始画面
================================ */

// タイマー変数
let challengeTimer = null;
let quizTimer = null;
let countdownTimer = null;

function openTimeAttack(seconds){

  attackTime = seconds;
  attackRemaining = seconds;

  showPage("timeAttackPage");

  document.getElementById("timeAttackTitle").textContent =
    `⚡ ${seconds}秒タイムアタック`;

}

/* ===============================
   難易度選択
================================ */

function selectAttackDifficulty(level){

    attackDifficulty = level;

    score = 0;
    combo = 0;
    maxCombo = 0;
    currentQuestion = 0;

    quizMode = `タイムアタック ${attackTime}秒`;

    if(level === "random"){
        currentQuiz = shuffleArray([...questions]);
    }else{
        currentQuiz = shuffleArray(
            questions.filter(q => q.difficulty === level)
        );
    }

    if(currentQuiz.length === 0){
        alert("この難易度の問題がありません。");
        return;
    }

    showPage("quizPage");
    loadQuestion();
    startAttackTimer();
}

/* ===============================
   タイマー開始
================================ */

function startAttackTimer(){

  clearInterval(attackTimer);

  attackRemaining = attackTime;

  updateAttackTimer();

  attackTimer = setInterval(()=>{

    attackRemaining--;

    updateAttackTimer();

    if(attackRemaining <= 0){

      clearInterval(attackTimer);

      finishQuiz();

    }

  },1000);

}

/* ===============================
   タイマー表示
================================ */

function updateAttackTimer(){

  const text = document.getElementById("timeDisplay");

  if(text){
    text.textContent = `${attackRemaining}秒`;
  }

  updateTimeGauge();

}

/* ===============================
   時間バー
================================ */

function updateTimeGauge(){

  const gauge = document.getElementById("timeGauge");

  if(!gauge) return;

  const percent = attackRemaining / attackTime * 100;

  gauge.style.width = percent + "%";

  gauge.className = "time-gauge";

  if(percent > 50){

    gauge.classList.add("green");

  }else if(percent > 25){

    gauge.classList.add("yellow");

  }else if(percent > 10){

    gauge.classList.add("orange");

  }else{

    gauge.classList.add("red");
    gauge.classList.add("blink");

  }

}

/* ==========================================
   日向坂46 QUIZ COMPLETE EDITION
   challenge.js Part 2 / 2
========================================== */

/* ===============================
   100問チャレンジ開始
================================ */

function startChallenge100(){

  clearInterval(attackTimer);

  quizMode = "100問チャレンジ";

  score = 0;
  combo = 0;
  maxCombo = 0;
  currentQuestion = 0;

  challengeStartTime = Date.now();

  currentQuiz = shuffleArray(questions).slice(0,100);

  showPage("quizPage");

  document.getElementById("timeDisplay").textContent = "00:00";

  loadQuestion();
  startChallengeTimer();

}

/* ===============================
   100問チャレンジタイマー
================================ */

function startChallengeTimer(){

  clearInterval(challengeTimer);

  challengeTimer = setInterval(()=>{

    const sec = Math.floor(
      (Date.now() - challengeStartTime)/1000
    );

    const min = Math.floor(sec/60);
    const s = String(sec%60).padStart(2,"0");

document.getElementById("timeDisplay").textContent =
    `${min}:${s}`;

  },1000);

}

/* ===============================
   チェックポイント
================================ */

function challengeCheckpoint(){

  if(currentQuestion===24){
    showCheckpoint("🎉 25問到達！");
  }

  if(currentQuestion===49){
    showCheckpoint("🔥 半分クリア！（50問）");
  }

  if(currentQuestion===74){
    showCheckpoint("💪 あと25問！（75問）");
  }

}

function showCheckpoint(message){

  const result = document.getElementById("answerResult");

  result.className = "answer-result checkpoint";
  result.textContent = message;

}

/* ===============================
   次の問題（100問チャレンジ）
================================ */

function nextChallengeQuestion(){

  currentQuestion++;

  challengeCheckpoint();

  if(currentQuestion>=100){

    clearInterval(challengeTimer);

    finishQuiz();

    return;

  }

  loadQuestion();

}

/* ===============================
   タイムアタック終了
================================ */

function finishAttack(){

  clearInterval(attackTimer);

  finishQuiz();

}

/* ===============================
   タイムアタックリトライ
================================ */

function retryAttack(){

  clearInterval(attackTimer);

  attackRemaining = attackTime;

  selectAttackDifficulty(attackDifficulty);

}

/* ===============================
   ホームへ戻る（タイマー停止）
================================ */

function exitChallenge(){

  clearInterval(attackTimer);
  clearInterval(challengeTimer);

  attackTimer = null;
  challengeTimer = null;

  combo = 0;
  score = 0;
  currentQuestion = 0;

  showPage("homePage");

}

/* ===============================
   タイムゲージ初期化
================================ */

function resetTimeGauge(){

  const gauge = document.getElementById("timeGauge");

  if(!gauge) return;

  gauge.className = "time-gauge green";
  gauge.style.width = "100%";

}

/* ===============================
   ホームへ戻るボタン共通
================================ */

function homeButton(){

  exitChallenge();

}

/* ===============================
   クイズ終了時の後処理
================================ */

function clearQuizTimers() {

    if (typeof attackTimer !== "undefined" && attackTimer) {
        clearInterval(attackTimer);
        attackTimer = null;
    }

    if (typeof challengeTimer !== "undefined" && challengeTimer) {
        clearInterval(challengeTimer);
        challengeTimer = null;
    }

    if (typeof quizTimer !== "undefined" && quizTimer) {
        clearInterval(quizTimer);
        quizTimer = null;
    }

    if (typeof countdownTimer !== "undefined" && countdownTimer) {
        clearInterval(countdownTimer);
        countdownTimer = null;
    }
}
/* ==========================================
   日向坂46 QUIZ COMPLETE EDITION
   ranking.js 完全版
========================================== */

const RANKING_KEYS = {
  time60: "hinataRanking60",
  time120: "hinataRanking120",
  challenge: "hinataRanking100",
  combo: "hinataRankingCombo"
};

/* ===============================
   ランキング保存
================================ */

function saveRankingRecord(mode, value){

  const key = RANKING_KEYS[mode];
  if(!key) return;

  let ranking =
    JSON.parse(localStorage.getItem(key)) || [];

  ranking.push({
    value: value,
    date: new Date().toLocaleDateString("ja-JP")
  });

  // 100問チャレンジはタイムが短い順
  if(mode === "challenge"){
    ranking.sort((a,b)=>a.value-b.value);
  }else{
    ranking.sort((a,b)=>b.value-a.value);
  }

  ranking = ranking.slice(0,10);

  localStorage.setItem(key, JSON.stringify(ranking));

}

/* ===============================
   ランキング表示
================================ */

function showRanking(mode){

  showPage("rankingPage");

  const title = document.getElementById("rankingTitle");
  const tbody = document.getElementById("rankingBody");

  tbody.innerHTML = "";

  switch(mode){

    case "time60":
      title.textContent = "⚡ 60秒タイムアタックランキング";
      break;

    case "time120":
      title.textContent = "⏱ 120秒タイムアタックランキング";
      break;

    case "challenge":
      title.textContent = "🏆 100問チャレンジランキング";
      break;

    case "combo":
      title.textContent = "🔥 最大コンボランキング";
      break;
  }

  const ranking =
    JSON.parse(localStorage.getItem(RANKING_KEYS[mode])) || [];

  if(ranking.length===0){

    tbody.innerHTML = `
      <tr>
        <td colspan="3">まだ記録がありません。</td>
      </tr>
    `;

    return;

  }

  ranking.forEach((item,index)=>{

    const tr=document.createElement("tr");

    let value=item.value;

    if(mode==="challenge"){

      const min=Math.floor(value/60);
      const sec=String(value%60).padStart(2,"0");

      value=`${min}:${sec}`;

    }else if(mode==="combo"){

      value=value+"連続";

    }else{

      value=value+"問";

    }

    tr.innerHTML=`
      <td>${index+1}</td>
      <td>${value}</td>
      <td>${item.date}</td>
    `;

    tbody.appendChild(tr);

  });

}

/* ===============================
   ランキング削除
================================ */

function clearRanking(mode){

  const text = {
    time60:"60秒タイムアタック",
    time120:"120秒タイムアタック",
    challenge:"100問チャレンジ",
    combo:"最大コンボ"
  };

  if(!confirm(`${text[mode]} のランキングを削除しますか？`)){
    return;
  }

  localStorage.removeItem(RANKING_KEYS[mode]);

  showRanking(mode);

}

/* ===============================
   ベスト記録保存
================================ */

function saveBestRecord(){

  const comboBest =
    Number(localStorage.getItem("bestCombo") || 0);

  if(maxCombo > comboBest){
    localStorage.setItem("bestCombo", maxCombo);
  }

  if(quizMode.includes("60")){

    const best =
      Number(localStorage.getItem("best60") || 0);

    if(score > best){
      localStorage.setItem("best60", score);
    }

    saveRankingRecord("time60", score);

  }

  if(quizMode.includes("120")){

    const best =
      Number(localStorage.getItem("best120") || 0);

    if(score > best){
      localStorage.setItem("best120", score);
    }

    saveRankingRecord("time120", score);

  }

  if(quizMode==="100問チャレンジ"){

    const sec =
      Math.floor((Date.now()-challengeStartTime)/1000);

    const best =
      Number(localStorage.getItem("best100") || 0);

    if(best===0 || sec < best){
      localStorage.setItem("best100", sec);
    }

    saveRankingRecord("challenge", sec);

  }

  saveRankingRecord("combo", maxCombo);

  loadBestRecord();

}

/* ===============================
   ベスト記録読込
================================ */

function loadBestRecord() {

    const best60 = document.getElementById("best60");
    if (best60) {
        best60.textContent = `${localStorage.getItem("best60") || 0}問`;
    }

    const best120 = document.getElementById("best120");
    if (best120) {
        best120.textContent = `${localStorage.getItem("best120") || 0}問`;
    }

    const bestCombo = document.getElementById("bestCombo");
    if (bestCombo) {
        bestCombo.textContent = `${localStorage.getItem("bestCombo") || 0}連続`;
    }

    const sec = Number(localStorage.getItem("best100") || 0);
    const best100Time = document.getElementById("best100Time");

    if (!best100Time) return;

    if (sec === 0) {
        best100Time.textContent = "--:--";
    } else {
        const min = Math.floor(sec / 60);
        const s = String(sec % 60).padStart(2, "0");
        best100Time.textContent = `${min}:${s}`;
    }
}
/* ==========================================
   日向坂46 QUIZ COMPLETE EDITION
   favorite.js 完全版
========================================== */

const FAVORITE_KEY = "hinataFavoriteQuestions";
const REVIEW_KEY = "hinataWrongQuestions";

// 保存データを読み込む
favoriteQuestions =
    JSON.parse(localStorage.getItem(FAVORITE_KEY)) || [];

reviewQuestions =
    JSON.parse(localStorage.getItem(REVIEW_KEY)) || [];
    
/* ==========================================
   お気に入り
========================================== */

function saveFavorites(){
  localStorage.setItem(
    FAVORITE_KEY,
    JSON.stringify(favoriteQuestions)
  );
}

function toggleFavorite(){

  const q = currentQuiz[currentQuestion];
  if(!q) return;

  const index =
    favoriteQuestions.findIndex(item => item.id === q.id);

  if(index >= 0){
    favoriteQuestions.splice(index,1);
  }else{
    favoriteQuestions.push(q);
  }

  saveFavorites();
  updateFavoriteButton();

}

function updateFavoriteButton(){

  const btn =
    document.getElementById("favoriteButton");

  if(!btn) return;

  const q=currentQuiz[currentQuestion];
  if(!q) return;

  const exists =
    favoriteQuestions.some(item=>item.id===q.id);

  if(exists){

    btn.innerHTML="💖 お気に入り登録済み";
    btn.classList.add("active");

  }else{

    btn.innerHTML="⭐ お気に入りに追加";
    btn.classList.remove("active");

  }

}

/* ==========================================
   お気に入り一覧
========================================== */

function openFavorites(){

  showPage("favoritePage");

  const list =
    document.getElementById("favoriteList");

  list.innerHTML="";

  if(favoriteQuestions.length===0){

    list.innerHTML="<p>お気に入り問題はありません。</p>";
    return;

  }

  favoriteQuestions.forEach((q,index)=>{

    const card=document.createElement("div");

    card.className="favorite-question";

    card.innerHTML=`
      <h3>${index+1}. ${q.question}</h3>

      <button onclick="playFavorite(${q.id})">
        ▶ 解く
      </button>

      <button onclick="removeFavorite(${q.id})">
        🗑 削除
      </button>
    `;

    list.appendChild(card);

  });

}

function removeFavorite(id){

  favoriteQuestions =
    favoriteQuestions.filter(q=>q.id!==id);

  saveFavorites();

  openFavorites();

}

function playFavorite(id){

  const q =
    favoriteQuestions.find(item=>item.id===id);

  if(!q) return;

  quizMode="お気に入り";

  score=0;
  combo=0;
  maxCombo=0;
  currentQuestion=0;

  currentQuiz=[q];

  showPage("quizPage");

  displayQuestion();

}

/* ==========================================
   復習モード
========================================== */

function saveWrongQuestions(){

  localStorage.setItem(
    REVIEW_KEY,
    JSON.stringify(reviewQuestions)
  );

}

function addWrongQuestion(question){

  const exists =
    reviewQuestions.some(item=>item.id===question.id);

  if(!exists){

    reviewQuestions.push(question);

    saveWrongQuestions();

  }

}

function removeReviewQuestion(id){

  reviewQuestions =
    reviewQuestions.filter(q=>q.id!==id);

  saveWrongQuestions();

}

function clearReviewQuestions(){

  reviewQuestions=[];

  saveWrongQuestions();

}

function startReviewMode(){

  reviewQuestions =
    JSON.parse(localStorage.getItem(REVIEW_KEY)) || [];

  if(reviewQuestions.length===0){

    alert("復習する問題はありません。");

    return;

  }

  quizMode="復習モード";

  score=0;
  combo=0;
  maxCombo=0;
  currentQuestion=0;

  currentQuiz=shuffleArray(reviewQuestions);

  showPage("quizPage");

  displayQuestion();

}

function openReviewList(){

  showPage("reviewPage");

  const list=document.getElementById("reviewList");

  list.innerHTML="";

  if(reviewQuestions.length===0){

    list.innerHTML="<p>復習問題はありません。</p>";

    return;

  }

  reviewQuestions.forEach((q,index)=>{

    const card=document.createElement("div");

    card.className="favorite-question";

    card.innerHTML=`
      <h3>${index+1}. ${q.question}</h3>

      <button onclick="playReview(${q.id})">
        ▶ 解く
      </button>

      <button onclick="removeReviewQuestion(${q.id});openReviewList();">
        🗑 削除
      </button>
    `;

    list.appendChild(card);

  });

}

function playReview(id){

  const q =
    reviewQuestions.find(item=>item.id===id);

  if(!q) return;

  quizMode="復習モード";

  score=0;
  combo=0;
  maxCombo=0;
  currentQuestion=0;

  currentQuiz=[q];

  showPage("quizPage");

  displayQuestion();

}

/* ==========================================
   復習モードで正解したら削除
========================================== */

function reviewCorrect(){

  const q=currentQuiz[currentQuestion];

  if(!q) return;

  removeReviewQuestion(q.id);

}

/* ==========================================
   初期読み込み
========================================== */

(function(){

  favoriteQuestions =
    JSON.parse(localStorage.getItem(FAVORITE_KEY)) || [];

  reviewQuestions =
    JSON.parse(localStorage.getItem(REVIEW_KEY)) || [];

})();
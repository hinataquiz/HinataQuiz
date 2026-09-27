/* ==========================================
   日向坂46 QUIZ COMPLETE EDITION
   questions.js Ver.4.0
========================================== */

// 全問題を保存する配列
const QUESTIONS = [];

/* ==========================================
   問題追加関数
========================================== */

function addQuestion({
  id,
  genre,
  member = "ALL",
  difficulty,
  year,
  question,
  choices,
  answer,
  explanation = "",
  image = ""
}) {
  QUESTIONS.push({
    id,
    genre,
    member,
    difficulty,
    year,
    question,
    choices,
    answer,
    explanation,
    image
  });
}

/* ==========================================
   ジャンル一覧
========================================== */

const GENRES = {
  member: "メンバー",
  single: "シングル",
  song: "楽曲",
  album: "アルバム",
  center: "センター",
  formation: "フォーメーション",
  mv: "MV",
  tv: "TV",
  live: "ライブ",
  other: "その他"
};

/* ==========================================
   難易度
========================================== */

const EASY = "easy";
const MIDDLE = "middle";
const HARD = "hard";

/* ==========================================
   メンバー問題
========================================== */

// ここから問題を追加していきます。

/* ==========================================
   👤 MEMBER QUESTIONS
   ID：1〜20（完全版・作り直し）
========================================== */

addQuestion({
  id: 1,
  genre: "member",
  member: "加藤史帆",
  difficulty: EASY,
  year: 2016,
  question: "加藤史帆は何期生？",
  choices: ["2期生","1期生","3期生","4期生"],
  answer: 2,
  explanation: "加藤史帆は2016年加入の1期生です。"
});

addQuestion({
  id: 2,
  genre: "member",
  difficulty: EASY,
  year: 2016,
  question: "佐々木久美の役職は？",
  choices: ["副キャプテン","総監督","キャプテン","リーダー"],
  answer: 3,
  explanation: "佐々木久美は日向坂46のキャプテンです。"
});

addQuestion({
  id: 3,
  genre: "member",
  difficulty: EASY,
  year: 2016,
  question: "佐々木美玲のニックネームは？",
  choices: ["みーぱん","みれい","ぱんちゃん","みーちゃん"],
  answer: 1,
  explanation: "佐々木美玲は『みーぱん』です。"
});

addQuestion({
  id: 4,
  genre: "member",
  difficulty: EASY,
  year: 2016,
  question: "潮紗理菜の愛称は？",
  choices: ["しおちゃん","なっちょ","うしお","さりちゃん"],
  answer: 2,
  explanation: "潮紗理菜は『なっちょ』です。"
});

addQuestion({
  id: 5,
  genre: "member",
  difficulty: EASY,
  year: 2016,
  question: "東村芽依の出身地は？",
  choices: ["大阪府","兵庫県","京都府","奈良県"],
  answer: 3,
  explanation: "東村芽依は京都府出身です。"
});

addQuestion({
  id: 6,
  genre: "member",
  difficulty: EASY,
  year: 2016,
  question: "高瀬愛奈が生まれた国は？",
  choices: ["アメリカ","イギリス","カナダ","オーストラリア"],
  answer: 2,
  explanation: "高瀬愛奈はイギリス生まれです。"
});

addQuestion({
  id: 7,
  genre: "member",
  difficulty: EASY,
  year: 2016,
  question: "高本彩花のニックネームは？",
  choices: ["あやちぇり","あやちゃん","あやたん","たかもと"],
  answer: 1,
  explanation: "高本彩花は『あやちぇり』です。"
});

addQuestion({
  id: 8,
  genre: "member",
  difficulty: EASY,
  year: 2016,
  question: "影山優佳が詳しいスポーツは？",
  choices: ["サッカー","野球","ラグビー","バスケットボール"],
  answer: 1,
  explanation: "影山優佳はサッカーへの知識で知られています。"
});

addQuestion({
  id: 9,
  genre: "member",
  member: "加藤史帆",
  difficulty: EASY,
  year: 2016,
  question: "加藤史帆の出身地は？",
  choices: ["神奈川県","東京都","埼玉県","千葉県"],
  answer: 2,
  explanation: "加藤史帆は東京都出身です。"
});

addQuestion({
  id: 10,
  genre: "member",
  difficulty: EASY,
  year: 2016,
  question: "佐々木久美の出身地は？",
  choices: ["東京都","神奈川県","千葉県","埼玉県"],
  answer: 3,
  explanation: "佐々木久美は千葉県出身です。"
});

addQuestion({
  id: 11,
  genre: "member",
  difficulty: MIDDLE,
  year: 2016,
  question: "佐々木美玲の出身地は？",
  choices: ["東京都","神奈川県","大阪府","兵庫県"],
  answer: 2,
  explanation: "佐々木美玲は神奈川県出身です。"
});

addQuestion({
  id: 12,
  genre: "member",
  difficulty: MIDDLE,
  year: 2016,
  question: "潮紗理菜の出身地は？",
  choices: ["東京都","神奈川県","千葉県","大阪府"],
  answer: 2,
  explanation: "潮紗理菜は神奈川県出身です。"
});

addQuestion({
  id: 13,
  genre: "member",
  difficulty: MIDDLE,
  year: 2016,
  question: "高本彩花の出身地は？",
  choices: ["東京都","神奈川県","千葉県","埼玉県"],
  answer: 2,
  explanation: "高本彩花は神奈川県出身です。"
});

addQuestion({
  id: 14,
  genre: "member",
  difficulty: MIDDLE,
  year: 2016,
  question: "高瀬愛奈の出身地は？",
  choices: ["東京都","大阪府","兵庫県","奈良県"],
  answer: 4,
  explanation: "高瀬愛奈は奈良県出身です。"
});

addQuestion({
  id: 15,
  genre: "member",
  difficulty: MIDDLE,
  year: 2016,
  question: "影山優佳の出身地は？",
  choices: ["東京都","神奈川県","埼玉県","千葉県"],
  answer: 1,
  explanation: "影山優佳は東京都出身です。"
});

addQuestion({
  id: 16,
  genre: "member",
  difficulty: HARD,
  year: 2016,
  question: "加藤史帆の血液型は？",
  choices: ["B型","A型","O型","AB型"],
  answer: 2,
  explanation: "加藤史帆はA型です。"
});

addQuestion({
  id: 17,
  genre: "member",
  difficulty: HARD,
  year: 2016,
  question: "佐々木久美の血液型は？",
  choices: ["AB型","A型","O型","B型"],
  answer: 1,
  explanation: "佐々木久美はAB型です。"
});

addQuestion({
  id: 18,
  genre: "member",
  difficulty: HARD,
  year: 2016,
  question: "佐々木美玲の血液型は？",
  choices: ["A型","B型","O型","AB型"],
  answer: 3,
  explanation: "佐々木美玲はO型です。"
});

addQuestion({
  id: 19,
  genre: "member",
  difficulty: HARD,
  year: 2016,
  question: "潮紗理菜の血液型は？",
  choices: ["AB型","O型","A型","B型"],
  answer: 2,
  explanation: "潮紗理菜はO型です。"
});

addQuestion({
  id: 20,
  genre: "member",
  difficulty: HARD,
  year: 2016,
  question: "東村芽依の血液型は？",
  choices: ["O型","A型","B型","AB型"],
  answer: 1,
  explanation: "東村芽依はO型です。"
});

/* ==========================================
   👤 MEMBER QUESTIONS
   ID：21〜40（完全版）
========================================== */

addQuestion({
  id: 21,
  genre: "member",
  difficulty: EASY,
  year: 2016,
  question: "高瀬愛奈は何期生？",
  choices: ["2期生","3期生","1期生","4期生"],
  answer: 3,
  explanation: "高瀬愛奈は2016年加入の1期生です。"
});

addQuestion({
  id: 22,
  genre: "member",
  difficulty: EASY,
  year: 2016,
  question: "高本彩花は何期生？",
  choices: ["1期生","2期生","3期生","4期生"],
  answer: 1,
  explanation: "高本彩花は1期生です。"
});

addQuestion({
  id: 23,
  genre: "member",
  difficulty: EASY,
  year: 2016,
  question: "東村芽依は何期生？",
  choices: ["2期生","1期生","3期生","4期生"],
  answer: 2,
  explanation: "東村芽依は1期生です。"
});

addQuestion({
  id: 24,
  genre: "member",
  difficulty: EASY,
  year: 2016,
  question: "潮紗理菜は何期生？",
  choices: ["3期生","2期生","4期生","1期生"],
  answer: 4,
  explanation: "潮紗理菜は1期生です。"
});

addQuestion({
  id: 25,
  genre: "member",
  difficulty: EASY,
  year: 2016,
  question: "影山優佳は何期生？",
  choices: ["1期生","2期生","3期生","4期生"],
  answer: 1,
  explanation: "影山優佳は1期生です。"
});

addQuestion({
  id: 26,
  genre: "member",
  difficulty: EASY,
  year: 2016,
  question: "佐々木美玲の誕生日は？",
  choices: ["1999年12月17日","1998年12月17日","1999年11月17日","1998年11月17日"],
  answer: 1,
  explanation: "1999年12月17日生まれです。"
});

addQuestion({
  id: 27,
  genre: "member",
  difficulty: EASY,
  year: 2016,
  question: "潮紗理菜の誕生日は？",
  choices: ["1998年12月26日","1997年11月26日","1997年12月26日","1998年11月26日"],
  answer: 3,
  explanation: "1997年12月26日生まれです。"
});

addQuestion({
  id: 28,
  genre: "member",
  difficulty: EASY,
  year: 2016,
  question: "東村芽依の誕生日は？",
  choices: ["1998年7月23日","1999年8月23日","1998年8月23日","1999年7月23日"],
  answer: 3,
  explanation: "1998年8月23日生まれです。"
});

addQuestion({
  id: 29,
  genre: "member",
  difficulty: EASY,
  year: 2016,
  question: "高本彩花の誕生日は？",
  choices: ["1998年11月2日","1999年11月2日","1998年10月2日","1999年10月2日"],
  answer: 1,
  explanation: "1998年11月2日生まれです。"
});

addQuestion({
  id: 30,
  genre: "member",
  difficulty: EASY,
  year: 2016,
  question: "高瀬愛奈の誕生日は？",
  choices: ["1998年10月20日","1999年9月20日","1998年9月20日","1999年10月20日"],
  answer: 3,
  explanation: "1998年9月20日生まれです。"
});

addQuestion({
  id: 31,
  genre: "member",
  difficulty: MIDDLE,
  year: 2016,
  question: "影山優佳の誕生日は？",
  choices: ["2000年5月8日","2001年5月8日","2001年6月8日","2000年6月8日"],
  answer: 2,
  explanation: "2001年5月8日生まれです。"
});

addQuestion({
  id: 32,
  genre: "member",
  difficulty: MIDDLE,
  year: 2016,
  question: "加藤史帆の身長は？",
  choices: ["160.5cm","162cm","158cm","165cm"],
  answer: 1,
  explanation: "加藤史帆の身長は160.5cmです。"
});

addQuestion({
  id: 33,
  genre: "member",
  difficulty: MIDDLE,
  year: 2016,
  question: "佐々木久美の身長は？",
  choices: ["170cm","166cm","168.5cm","164cm"],
  answer: 3,
  explanation: "佐々木久美の身長は168.5cmです。"
});

addQuestion({
  id: 34,
  genre: "member",
  difficulty: MIDDLE,
  year: 2016,
  question: "佐々木美玲の身長は？",
  choices: ["161cm","165cm","167cm","163cm"],
  answer: 2,
  explanation: "佐々木美玲の身長は165cmです。"
});

addQuestion({
  id: 35,
  genre: "member",
  difficulty: MIDDLE,
  year: 2016,
  question: "潮紗理菜の身長は？",
  choices: ["157cm","155cm","156cm","158cm"],
  answer: 1,
  explanation: "潮紗理菜の身長は157cmです。"
});

addQuestion({
  id: 36,
  genre: "member",
  difficulty: MIDDLE,
  year: 2016,
  question: "東村芽依の身長は？",
  choices: ["159cm","160cm","154cm","157cm"],
  answer: 4,
  explanation: "東村芽依の身長は157cmです。"
});

addQuestion({
  id: 37,
  genre: "member",
  difficulty: HARD,
  year: 2016,
  question: "高瀬愛奈の血液型は？",
  choices: ["A型","B型","O型","AB型"],
  answer: 1,
  explanation: "高瀬愛奈はA型です。"
});

addQuestion({
  id: 38,
  genre: "member",
  difficulty: HARD,
  year: 2016,
  question: "高本彩花の血液型は？",
  choices: ["A型","O型","AB型","B型"],
  answer: 4,
  explanation: "高本彩花はB型です。"
});

addQuestion({
  id: 39,
  genre: "member",
  difficulty: HARD,
  year: 2016,
  question: "影山優佳の血液型は？",
  choices: ["B型","O型","A型","AB型"],
  answer: 3,
  explanation: "影山優佳はA型です。"
});

addQuestion({
  id: 40,
  genre: "member",
  difficulty: HARD,
  year: 2016,
  question: "高瀬愛奈が得意な言語は？",
  choices: ["フランス語","ドイツ語","英語","スペイン語"],
  answer: 3,
  explanation: "幼少期をイギリスで過ごし、英語が得意です。"
});

/* ==========================================
   👤 MEMBER QUESTIONS
   ID：41〜60（完全版）
========================================== */

addQuestion({
  id: 41,
  genre: "member",
  difficulty: EASY,
  year: 2016,
  question: "加藤史帆の公式サイリウムカラーは？",
  choices: ["ブルー×イエロー","ブルー×ホワイト","イエロー×ホワイト","ピンク×ホワイト"],
  answer: 1,
  explanation: "公式サイリウムカラーはブルー×イエローです。"
});

addQuestion({
  id: 42,
  genre: "member",
  difficulty: EASY,
  year: 2016,
  question: "佐々木久美の公式サイリウムカラーは？",
  choices: ["ブルー×ホワイト","パステルブルー×イエロー","イエロー×ホワイト","パープル×イエロー"],
  answer: 2,
  explanation: "公式サイリウムカラーはパステルブルー×イエローです。"
});

addQuestion({
  id: 43,
  genre: "member",
  difficulty: EASY,
  year: 2016,
  question: "佐々木美玲の公式サイリウムカラーは？",
  choices: ["イエロー×ホワイト","イエロー×イエロー","ホワイト×イエロー","オレンジ×ホワイト"],
  answer: 1,
  explanation: "公式サイリウムカラーはイエロー×ホワイトです。"
});

addQuestion({
  id: 44,
  genre: "member",
  difficulty: EASY,
  year: 2016,
  question: "潮紗理菜の公式サイリウムカラーは？",
  choices: ["パープル×ホワイト","パープル×パープル","ホワイト×パープル","ブルー×パープル"],
  answer: 2,
  explanation: "公式サイリウムカラーはパープル×パープルです。"
});

addQuestion({
  id: 45,
  genre: "member",
  difficulty: EASY,
  year: 2016,
  question: "東村芽依の公式サイリウムカラーは？",
  choices: ["レッド×ブルー","レッド×ホワイト","レッド×イエロー","ホワイト×レッド"],
  answer: 2,
  explanation: "公式サイリウムカラーはレッド×ホワイトです。"
});

addQuestion({
  id: 46,
  genre: "member",
  difficulty: EASY,
  year: 2016,
  question: "高本彩花の公式サイリウムカラーは？",
  choices: ["ホワイト×ピンク","ピンク×ホワイト","ピンク×イエロー","ホワイト×イエロー"],
  answer: 2,
  explanation: "公式サイリウムカラーはピンク×ホワイトです。"
});

addQuestion({
  id: 47,
  genre: "member",
  difficulty: EASY,
  year: 2016,
  question: "高瀬愛奈の公式サイリウムカラーは？",
  choices: ["グリーン×ホワイト","ホワイト×グリーン","グリーン×ピンク","ピンク×グリーン"],
  answer: 3,
  explanation: "公式サイリウムカラーはグリーン×ピンクです。"
});

addQuestion({
  id: 48,
  genre: "member",
  difficulty: MIDDLE,
  year: 2016,
  question: "加藤史帆が専属モデルを務めた女性ファッション誌は？",
  choices: ["Ray","CanCam","non-no","Seventeen"],
  answer: 2,
  explanation: "加藤史帆は『CanCam』専属モデルです。"
});

addQuestion({
  id: 49,
  genre: "member",
  difficulty: MIDDLE,
  year: 2019,
  question: "佐々木美玲が専属モデルを務める女性ファッション誌は？",
  choices: ["ViVi","Ray","non-no","CanCam"],
  answer: 3,
  explanation: "佐々木美玲は『non-no』専属モデルです。"
});

addQuestion({
  id: 50,
  genre: "member",
  difficulty: MIDDLE,
  year: 2024,
  question: "佐々木久美が1st写真集を発売した年は？",
  choices: ["2022年","2023年","2024年","2025年"],
  answer: 3,
  explanation: "2024年に1st写真集『めくる日々』を発売しました。"
});

addQuestion({
  id: 51,
  genre: "member",
  difficulty: MIDDLE,
  year: 2016,
  question: "加藤史帆の趣味として公式プロフィールにあるものは？",
  choices: ["読書","ゲーム","お昼寝","料理"],
  answer: 3,
  explanation: "公式プロフィールでは趣味の一つにお昼寝があります。"
});

addQuestion({
  id: 52,
  genre: "member",
  difficulty: MIDDLE,
  year: 2016,
  question: "東村芽依の特技として知られているものは？",
  choices: ["書道","短距離走","ピアノ","英会話"],
  answer: 2,
  explanation: "東村芽依は運動神経が高く、短距離走が得意です。"
});

addQuestion({
  id: 53,
  genre: "member",
  difficulty: MIDDLE,
  year: 2016,
  question: "影山優佳が活動を再開した年は？",
  choices: ["2019年","2020年","2021年","2022年"],
  answer: 2,
  explanation: "影山優佳は2020年に活動を再開しました。"
});

addQuestion({
  id: 54,
  genre: "member",
  difficulty: HARD,
  year: 2016,
  question: "加藤史帆の公式ブログタイトルは？",
  choices: ["かとしブログ","としちゃん日記","彩の国から","かとしのブログ"],
  answer: 4,
  explanation: "公式ブログタイトルは『かとしのブログ』です。"
});

addQuestion({
  id: 55,
  genre: "member",
  difficulty: HARD,
  year: 2016,
  question: "潮紗理菜が得意としている語学は？",
  choices: ["中国語","シンハラ語","韓国語","英語"],
  answer: 2,
  explanation: "潮紗理菜はシンハラ語を話すことができます。"
});

addQuestion({
  id: 56,
  genre: "member",
  difficulty: HARD,
  year: 2016,
  question: "高瀬愛奈が幼少期を過ごした国は？",
  choices: ["アメリカ","イギリス","カナダ","オーストラリア"],
  answer: 2,
  explanation: "幼少期をイギリスで過ごしました。"
});

addQuestion({
  id: 57,
  genre: "member",
  difficulty: HARD,
  year: 2016,
  question: "影山優佳が出演したサッカー情報番組は？",
  choices: ["やべっちスタジアム","FOOT×BRAIN","サンデースポーツ","Jリーグタイム"],
  answer: 1,
  explanation: "サッカー情報番組『やべっちスタジアム』に出演しました。"
});

addQuestion({
  id: 58,
  genre: "member",
  difficulty: HARD,
  year: 2016,
  question: "佐々木久美の特技として知られているものは？",
  choices: ["トランペット","バスケットボール","バレーボール","書道"],
  answer: 1,
  explanation: "佐々木久美はトランペット経験者です。"
});

addQuestion({
  id: 59,
  genre: "member",
  difficulty: HARD,
  year: 2016,
  question: "高本彩花が美容好きとして特に興味を持っている分野は？",
  choices: ["ネイル","コスメ","香水","ヘアカラー"],
  answer: 2,
  explanation: "高本彩花はコスメ・美容好きとして知られています。"
});

addQuestion({
  id: 60,
  genre: "member",
  difficulty: HARD,
  year: 2016,
  question: "東村芽依が好きな動物として知られているのは？",
  choices: ["犬","猫","うさぎ","パンダ"],
  answer: 3,
  explanation: "東村芽依はうさぎ好きとして知られています。"
});

/* ==========================================
   👤 MEMBER QUESTIONS
   ID：61〜80（完全版・2期生①）
========================================== */

addQuestion({
  id: 61,
  genre: "member",
  difficulty: EASY,
  year: 2017,
  question: "小坂菜緒のニックネームは？",
  choices: ["こしゃ", "なおちゃん", "こさかな", "なおたん"],
  answer: 3,
  explanation: "小坂菜緒は『こさかな』の愛称で親しまれています。"
});

addQuestion({
  id: 62,
  genre: "member",
  difficulty: EASY,
  year: 2017,
  question: "金村美玖の愛称は？",
  choices: ["おすし","みくちゃん","みくりん","きんちゃん"],
  answer: 1,
  explanation: "金村美玖は『おすし』の愛称で親しまれています。"
});

addQuestion({
  id: 63,
  genre: "member",
  difficulty: EASY,
  year: 2017,
  question: "河田陽菜の愛称は？",
  choices: ["ひなちゃん","かわちゃん","かわださん","ひなぴよ"],
  answer: 3,
  explanation: "河田陽菜は『かわださん』の愛称で親しまれています。"
});

addQuestion({
  id: 64,
  genre: "member",
  difficulty: EASY,
  year: 2017,
  question: "富田鈴花の愛称は？",
  choices: ["すずちゃん","すーちゃん","すーじー","すずか"],
  answer: 3,
  explanation: "富田鈴花は『すーじー』です。"
});

addQuestion({
  id: 65,
  genre: "member",
  difficulty: EASY,
  year: 2017,
  question: "丹生明里の愛称は？",
  choices: ["あかりん","にぶちゃん","にぶにぶ","にぶ"],
  answer: 2,
  explanation: "丹生明里は『にぶちゃん』です。"
});

addQuestion({
  id: 66,
  genre: "member",
  difficulty: EASY,
  year: 2017,
  question: "濱岸ひよりの愛称は？",
  choices: ["ひよりん","ひよちゃん","ひよたん","はまちゃん"],
  answer: 3,
  explanation: "濱岸ひよりは『ひよたん』です。"
});

addQuestion({
  id: 67,
  genre: "member",
  difficulty: EASY,
  year: 2017,
  question: "松田好花の愛称は？",
  choices: ["このか","このちゃん","まっちゃん","このぴー"],
  answer: 2,
  explanation: "松田好花は『このちゃん』です。"
});

addQuestion({
  id: 68,
  genre: "member",
  difficulty: EASY,
  year: 2017,
  question: "宮田愛萌は何期生？",
  choices: ["1期生","2期生","3期生","4期生"],
  answer: 2,
  explanation: "宮田愛萌は2期生です。"
});

addQuestion({
  id: 69,
  genre: "member",
  difficulty: EASY,
  year: 2017,
  question: "渡邉美穂は何期生？",
  choices: ["2期生","1期生","3期生","4期生"],
  answer: 1,
  explanation: "渡邉美穂は2期生です。"
});

addQuestion({
  id: 70,
  genre: "member",
  difficulty: EASY,
  year: 2017,
  question: "小坂菜緒の出身地は？",
  choices: ["大阪府","兵庫県","京都府","奈良県"],
  answer: 1,
  explanation: "小坂菜緒は大阪府出身です。"
});

addQuestion({
  id: 71,
  genre: "member",
  difficulty: MIDDLE,
  year: 2017,
  question: "金村美玖の出身地は？",
  choices: ["千葉県","埼玉県","東京都","茨城県"],
  answer: 2,
  explanation: "金村美玖は埼玉県出身です。"
});

addQuestion({
  id: 72,
  genre: "member",
  difficulty: MIDDLE,
  year: 2017,
  question: "河田陽菜の出身地は？",
  choices: ["山口県","広島県","福岡県","岡山県"],
  answer: 1,
  explanation: "河田陽菜は山口県出身です。"
});

addQuestion({
  id: 73,
  genre: "member",
  difficulty: MIDDLE,
  year: 2017,
  question: "富田鈴花の出身地は？",
  choices: ["東京都","神奈川県","千葉県","埼玉県"],
  answer: 2,
  explanation: "富田鈴花は神奈川県出身です。"
});

addQuestion({
  id: 74,
  genre: "member",
  difficulty: MIDDLE,
  year: 2017,
  question: "丹生明里の出身地は？",
  choices: ["東京都","神奈川県","埼玉県","千葉県"],
  answer: 3,
  explanation: "丹生明里は埼玉県出身です。"
});

addQuestion({
  id: 75,
  genre: "member",
  difficulty: MIDDLE,
  year: 2017,
  question: "濱岸ひよりの出身地は？",
  choices: ["福岡県","佐賀県","長崎県","熊本県"],
  answer: 1,
  explanation: "濱岸ひよりは福岡県出身です。"
});

addQuestion({
  id: 76,
  genre: "member",
  difficulty: MIDDLE,
  year: 2017,
  question: "松田好花の出身地は？",
  choices: ["京都府","大阪府","兵庫県","奈良県"],
  answer: 1,
  explanation: "松田好花は京都府出身です。"
});

addQuestion({
  id: 77,
  genre: "member",
  difficulty: HARD,
  year: 2017,
  question: "宮田愛萌の出身地は？",
  choices: ["東京都","神奈川県","千葉県","埼玉県"],
  answer: 1,
  explanation: "宮田愛萌は東京都出身です。"
});

addQuestion({
  id: 78,
  genre: "member",
  difficulty: HARD,
  year: 2017,
  question: "渡邉美穂の出身地は？",
  choices: ["東京都","神奈川県","埼玉県","千葉県"],
  answer: 3,
  explanation: "渡邉美穂は埼玉県出身です。"
});

addQuestion({
  id: 79,
  genre: "member",
  difficulty: HARD,
  year: 2017,
  question: "小坂菜緒の誕生日は？",
  choices: ["2001年9月7日","2002年9月7日","2001年8月7日","2002年8月7日"],
  answer: 1,
  explanation: "2001年9月7日生まれです。"
});

addQuestion({
  id: 80,
  genre: "member",
  difficulty: HARD,
  year: 2017,
  question: "金村美玖の誕生日は？",
  choices: ["2002年9月10日","2001年9月10日","2002年10月10日","2001年10月10日"],
  answer: 1,
  explanation: "2002年9月10日生まれです。"
});

/* ==========================================
   👤 MEMBER QUESTIONS
   ID：81〜100（完全版・2期生①）
========================================== */

addQuestion({
  id: 81,
  genre: "member",
  difficulty: EASY,
  year: 2017,
  question: "河田陽菜の誕生日は？",
  choices: ["2001年7月23日","2002年7月23日","2001年8月23日","2002年8月23日"],
  answer: 1,
  explanation: "2001年7月23日生まれです。"
});

addQuestion({
  id: 82,
  genre: "member",
  difficulty: EASY,
  year: 2017,
  question: "富田鈴花の誕生日は？",
  choices: ["2001年1月18日","2000年1月18日","2001年2月18日","2000年2月18日"],
  answer: 1,
  explanation: "2001年1月18日生まれです。"
});

addQuestion({
  id: 83,
  genre: "member",
  difficulty: EASY,
  year: 2017,
  question: "丹生明里の誕生日は？",
  choices: ["2000年2月15日","2001年2月15日","2000年3月15日","2001年3月15日"],
  answer: 2,
  explanation: "2001年2月15日生まれです。"
});

addQuestion({
  id: 84,
  genre: "member",
  difficulty: EASY,
  year: 2017,
  question: "濱岸ひよりの誕生日は？",
  choices: ["2002年9月28日","2001年9月28日","2002年10月28日","2001年10月28日"],
  answer: 1,
  explanation: "2002年9月28日生まれです。"
});

addQuestion({
  id: 85,
  genre: "member",
  difficulty: EASY,
  year: 2017,
  question: "松田好花の誕生日は？",
  choices: ["1999年4月27日","1998年4月27日","1999年5月27日","1998年5月27日"],
  answer: 1,
  explanation: "1999年4月27日生まれです。"
});

addQuestion({
  id: 86,
  genre: "member",
  difficulty: EASY,
  year: 2017,
  question: "宮田愛萌の誕生日は？",
  choices: ["1998年4月28日","1997年4月28日","1998年5月28日","1997年5月28日"],
  answer: 1,
  explanation: "1998年4月28日生まれです。"
});

addQuestion({
  id: 87,
  genre: "member",
  difficulty: EASY,
  year: 2017,
  question: "渡邉美穂の誕生日は？",
  choices: ["2000年2月24日","1999年2月24日","2000年3月24日","1999年3月24日"],
  answer: 1,
  explanation: "2000年2月24日生まれです。"
});

addQuestion({
  id: 88,
  genre: "member",
  difficulty: MIDDLE,
  year: 2017,
  question: "小坂菜緒の血液型は？",
  choices: ["A型","B型","O型","AB型"],
  answer: 3,
  explanation: "小坂菜緒はO型です。"
});

addQuestion({
  id: 89,
  genre: "member",
  difficulty: MIDDLE,
  year: 2017,
  question: "金村美玖の血液型は？",
  choices: ["A型","B型","O型","AB型"],
  answer: 2,
  explanation: "金村美玖はB型です。"
});

addQuestion({
  id: 90,
  genre: "member",
  difficulty: MIDDLE,
  year: 2017,
  question: "河田陽菜の血液型は？",
  choices: ["A型","B型","O型","AB型"],
  answer: 3,
  explanation: "河田陽菜はO型です。"
});

addQuestion({
  id: 91,
  genre: "member",
  difficulty: MIDDLE,
  year: 2017,
  question: "富田鈴花の血液型は？",
  choices: ["A型","B型","O型","AB型"],
  answer: 2,
  explanation: "富田鈴花はB型です。"
});

addQuestion({
  id: 92,
  genre: "member",
  difficulty: MIDDLE,
  year: 2017,
  question: "丹生明里の血液型は？",
  choices: ["A型","B型","O型","AB型"],
  answer: 1,
  explanation: "丹生明里はA型です。"
});

addQuestion({
  id: 93,
  genre: "member",
  difficulty: MIDDLE,
  year: 2017,
  question: "濱岸ひよりの血液型は？",
  choices: ["A型","B型","O型","AB型"],
  answer: 2,
  explanation: "濱岸ひよりはB型です。"
});

addQuestion({
  id: 94,
  genre: "member",
  difficulty: MIDDLE,
  year: 2017,
  question: "松田好花の血液型は？",
  choices: ["A型","B型","O型","AB型"],
  answer: 1,
  explanation: "松田好花はA型です。"
});

addQuestion({
  id: 95,
  genre: "member",
  difficulty: MIDDLE,
  year: 2017,
  question: "宮田愛萌の血液型は？",
  choices: ["A型","B型","O型","AB型"],
  answer: 4,
  explanation: "宮田愛萌はAB型です。"
});

addQuestion({
  id: 96,
  genre: "member",
  difficulty: MIDDLE,
  year: 2017,
  question: "渡邉美穂の血液型は？",
  choices: ["A型","B型","O型","AB型"],
  answer: 2,
  explanation: "渡邉美穂はB型です。"
});

addQuestion({
  id: 97,
  genre: "member",
  difficulty: HARD,
  year: 2017,
  question: "小坂菜緒の身長は？",
  choices: ["159cm","161.5cm","163cm","160cm"],
  answer: 2,
  explanation: "小坂菜緒の身長は161.5cmです。"
});

addQuestion({
  id: 98,
  genre: "member",
  difficulty: HARD,
  year: 2017,
  question: "金村美玖の身長は？",
  choices: ["160cm","163cm","165cm","158cm"],
  answer: 2,
  explanation: "金村美玖の身長は163cmです。"
});

addQuestion({
  id: 99,
  genre: "member",
  difficulty: HARD,
  year: 2017,
  question: "河田陽菜の身長は？",
  choices: ["152cm","154.5cm","156cm","158cm"],
  answer: 2,
  explanation: "河田陽菜の身長は154.5cmです。"
});

addQuestion({
  id: 100,
  genre: "member",
  difficulty: HARD,
  year: 2017,
  question: "富田鈴花の身長は？",
  choices: ["163cm","165cm","167cm","161cm"],
  answer: 2,
  explanation: "富田鈴花の身長は165cmです。"
});

/* ==========================================
   👤 MEMBER QUESTIONS
   ID：121〜140（完全版・2期生③）
========================================== */

addQuestion({
  id: 121,
  genre: "member",
  difficulty: EASY,
  year: 2017,
  question: "小坂菜緒の好きな恐竜として有名なのは？",
  choices: ["ティラノサウルス", "トリケラトプス", "ステゴサウルス", "ブラキオサウルス"],
  answer: 2,
  explanation: "小坂菜緒は恐竜好きで、特にトリケラトプスが好きとして知られています。"
});

addQuestion({
  id: 122,
  genre: "member",
  difficulty: EASY,
  year: 2017,
  question: "金村美玖が好きな食べ物として有名なのは？",
  choices: ["寿司", "ラーメン", "オムライス", "焼肉"],
  answer: 1,
  explanation: "『おすし』の愛称の由来にもなっています。"
});

addQuestion({
  id: 123,
  genre: "member",
  difficulty: EASY,
  year: 2017,
  question: "河田陽菜が初期ブログの自己紹介で『好きな食べ物』として挙げたものは？",
  choices: ["唐揚げ", "アイスクリーム", "いちご", "メロンパン"],
  answer: 1,
  explanation: "初期ブログの自己紹介では好きな食べ物を『唐揚げ』と答えています。"
});

addQuestion({
  id: 124,
  genre: "member",
  difficulty: EASY,
  year: 2017,
  question: "富田鈴花が得意な楽器は？",
  choices: ["ギター", "ベース", "ドラム", "ピアノ"],
  answer: 1,
  explanation: "富田鈴花はギターが得意です。"
});

addQuestion({
  id: 125,
  genre: "member",
  difficulty: EASY,
  year: 2017,
  question: "丹生明里の好きなゲームジャンルは？",
  choices: ["格闘ゲーム", "RPG", "音楽ゲーム", "パズルゲーム"],
  answer: 2,
  explanation: "丹生明里はゲーム好きとして知られています。"
});

addQuestion({
  id: 126,
  genre: "member",
  difficulty: EASY,
  year: 2017,
  question: "松田好花の特技として有名なのは？",
  choices: ["タップダンス", "ピアノ", "バレエ", "書道"],
  answer: 3,
  explanation: "松田好花はバレエ経験者です。"
});

addQuestion({
  id: 127,
  genre: "member",
  difficulty: MIDDLE,
  year: 2017,
  question: "小坂菜緒の星座は？",
  choices: ["しし座", "おとめ座", "てんびん座", "おうし座"],
  answer: 2,
  explanation: "小坂菜緒は9月7日生まれのおとめ座です。"
});

addQuestion({
  id: 128,
  genre: "member",
  difficulty: MIDDLE,
  year: 2017,
  question: "金村美玖の星座は？",
  choices: ["おとめ座", "しし座", "てんびん座", "さそり座"],
  answer: 1,
  explanation: "金村美玖は9月10日生まれのおとめ座です。"
});

addQuestion({
  id: 129,
  genre: "member",
  difficulty: MIDDLE,
  year: 2017,
  question: "河田陽菜の星座は？",
  choices: ["かに座", "しし座", "おとめ座", "ふたご座"],
  answer: 2,
  explanation: "河田陽菜は7月23日生まれのしし座です。"
});

addQuestion({
  id: 130,
  genre: "member",
  difficulty: MIDDLE,
  year: 2017,
  question: "富田鈴花の星座は？",
  choices: ["いて座", "みずがめ座", "やぎ座", "うお座"],
  answer: 3,
  explanation: "富田鈴花は1月18日生まれのやぎ座です。"
});

addQuestion({
  id: 131,
  genre: "member",
  difficulty: MIDDLE,
  year: 2017,
  question: "丹生明里の星座は？",
  choices: ["みずがめ座", "うお座", "やぎ座", "おひつじ座"],
  answer: 1,
  explanation: "丹生明里は2月15日生まれのみずがめ座です。"
});

addQuestion({
  id: 132,
  genre: "member",
  difficulty: MIDDLE,
  year: 2017,
  question: "松田好花の星座は？",
  choices: ["おうし座", "ふたご座", "おひつじ座", "かに座"],
  answer: 1,
  explanation: "松田好花は4月27日生まれのおうし座です。"
});

addQuestion({
  id: 133,
  genre: "member",
  difficulty: HARD,
  year: 2021,
  question: "小坂菜緒が体調不良により活動休止を発表した年は？",
  choices: ["2020年", "2021年", "2022年", "2023年"],
  answer: 2,
  explanation: "2021年に一定期間活動を休止しました。"
});

addQuestion({
  id: 134,
  genre: "member",
  difficulty: HARD,
  year: 2022,
  question: "小坂菜緒が活動を本格再開した年は？",
  choices: ["2021年", "2022年", "2023年", "2024年"],
  answer: 2,
  explanation: "2022年に活動へ復帰しました。"
});

addQuestion({
  id: 135,
  genre: "member",
  difficulty: HARD,
  year: 2022,
  question: "渡邉美穂の卒業セレモニーが開催された会場は？",
  choices: ["横浜スタジアム", "東京国際フォーラム ホールA", "国立代々木競技場 第一体育館", "幕張メッセ 幕張イベントホール"],
  answer: 2,
  explanation: "東京国際フォーラム ホールAで開催されました。"
});

addQuestion({
  id: 136,
  genre: "member",
  difficulty: HARD,
  year: 2022,
  question: "宮田愛萌が卒業前最後に参加したシングルは？",
  choices: ["月と星が踊るMidnight", "僕なんか", "One choice", "ってか"],
  answer: 2,
  explanation: "『僕なんか』が最後の参加シングルです。"
});

addQuestion({
  id: 137,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "丹生明里の卒業セレモニーが開催された会場は？",
  choices: ["ぴあアリーナMM", "横浜アリーナ", "有明アリーナ", "幕張メッセ 幕張イベントホール"],
  answer: 1,
  explanation: "ぴあアリーナMMで開催されました。"
});

addQuestion({
  id: 138,
  genre: "member",
  difficulty: HARD,
  year: 2021,
  question: "富田鈴花がレギュラー出演しているラジオ番組は？",
  choices: ["日向坂46の『ひ』", "ローソン presents 日向坂46のほっとひといき！", "オールナイトニッポンX", "ベルク presents 日向坂46の余計な事までやりましょう！"],
  answer: 4,
  explanation: "富田鈴花は『余計な事までやりましょう！』のパーソナリティです。"
});

addQuestion({
  id: 139,
  genre: "member",
  difficulty: HARD,
  year: 2022,
  question: "松田好花がパーソナリティを務めるラジオ番組は？",
  choices: ["日向坂46の『ひ』", "オールナイトニッポンX", "日向坂高校放送部", "余計な事までやりましょう！"],
  answer: 3,
  explanation: "松田好花は『日向坂高校放送部』のパーソナリティです。"
});

addQuestion({
  id: 140,
  genre: "member",
  difficulty: HARD,
  year: 2020,
  question: "小坂菜緒の1st写真集のタイトルは？",
  choices: ["君は誰？", "君は何色？", "君は誰よりも。", "君は僕のもの"],
  answer: 2,
  explanation: "小坂菜緒の1st写真集は『君は誰？』です。"
});

/* ==========================================
   👤 MEMBER QUESTIONS
   ID：141〜160（完全版・2期生④）
   ※公式プロフィール・公式サイト情報のみ
========================================== */

addQuestion({
  id: 141,
  genre: "member",
  difficulty: EASY,
  year: 2017,
  question: "小坂菜緒の血液型は？",
  choices: ["A型","B型","O型","AB型"],
  answer: 3,
  explanation: "小坂菜緒はO型です。"
});

addQuestion({
  id: 142,
  genre: "member",
  difficulty: EASY,
  year: 2017,
  question: "金村美玖の血液型は？",
  choices: ["A型","B型","O型","AB型"],
  answer: 2,
  explanation: "金村美玖はB型です。"
});

addQuestion({
  id: 143,
  genre: "member",
  difficulty: EASY,
  year: 2017,
  question: "河田陽菜の血液型は？",
  choices: ["A型","B型","O型","AB型"],
  answer: 3,
  explanation: "河田陽菜はO型です。"
});

addQuestion({
  id: 144,
  genre: "member",
  difficulty: EASY,
  year: 2017,
  question: "富田鈴花の血液型は？",
  choices: ["A型","B型","O型","AB型"],
  answer: 2,
  explanation: "富田鈴花はB型です。"
});

addQuestion({
  id: 145,
  genre: "member",
  difficulty: EASY,
  year: 2017,
  question: "丹生明里の血液型は？",
  choices: ["A型","B型","O型","AB型"],
  answer: 1,
  explanation: "丹生明里はA型です。"
});

addQuestion({
  id: 146,
  genre: "member",
  difficulty: EASY,
  year: 2017,
  question: "濱岸ひよりの血液型は？",
  choices: ["A型","B型","O型","AB型"],
  answer: 2,
  explanation: "濱岸ひよりはB型です。"
});

addQuestion({
  id: 147,
  genre: "member",
  difficulty: EASY,
  year: 2017,
  question: "松田好花の血液型は？",
  choices: ["A型","B型","O型","AB型"],
  answer: 1,
  explanation: "松田好花はA型です。"
});

addQuestion({
  id: 148,
  genre: "member",
  difficulty: EASY,
  year: 2017,
  question: "宮田愛萌の血液型は？",
  choices: ["A型","B型","O型","AB型"],
  answer: 4,
  explanation: "宮田愛萌はAB型です。"
});

addQuestion({
  id: 149,
  genre: "member",
  difficulty: EASY,
  year: 2017,
  question: "渡邉美穂の血液型は？",
  choices: ["A型","B型","O型","AB型"],
  answer: 2,
  explanation: "渡邉美穂はB型です。"
});

addQuestion({
  id: 150,
  genre: "member",
  difficulty: MIDDLE,
  year: 2017,
  question: "小坂菜緒の身長は？",
  choices: ["159cm","160cm","161.5cm","163cm"],
  answer: 3,
  explanation: "小坂菜緒の身長は161.5cmです。"
});

addQuestion({
  id: 151,
  genre: "member",
  difficulty: MIDDLE,
  year: 2017,
  question: "金村美玖の身長は？",
  choices: ["160cm","163cm","165cm","167cm"],
  answer: 2,
  explanation: "金村美玖の身長は163cmです。"
});

addQuestion({
  id: 152,
  genre: "member",
  difficulty: MIDDLE,
  year: 2017,
  question: "河田陽菜の身長は？",
  choices: ["152cm","154.5cm","156cm","158cm"],
  answer: 2,
  explanation: "河田陽菜の身長は154.5cmです。"
});

addQuestion({
  id: 153,
  genre: "member",
  difficulty: MIDDLE,
  year: 2017,
  question: "富田鈴花の身長は？",
  choices: ["163cm","165cm","167cm","169cm"],
  answer: 2,
  explanation: "富田鈴花の身長は165cmです。"
});

addQuestion({
  id: 154,
  genre: "member",
  difficulty: MIDDLE,
  year: 2017,
  question: "丹生明里の身長は？",
  choices: ["155cm","157cm","159cm","161cm"],
  answer: 2,
  explanation: "丹生明里の身長は157cmです。"
});

addQuestion({
  id: 155,
  genre: "member",
  difficulty: MIDDLE,
  year: 2017,
  question: "濱岸ひよりの身長は？",
  choices: ["165cm","167cm","170cm","172cm"],
  answer: 3,
  explanation: "濱岸ひよりの身長は170cmです。"
});

addQuestion({
  id: 156,
  genre: "member",
  difficulty: MIDDLE,
  year: 2017,
  question: "松田好花の身長は？",
  choices: ["155cm","157.5cm","159cm","161cm"],
  answer: 2,
  explanation: "松田好花の身長は157.5cmです。"
});

addQuestion({
  id: 157,
  genre: "member",
  difficulty: MIDDLE,
  year: 2017,
  question: "宮田愛萌の身長は？",
  choices: ["156cm","157cm","159cm","160cm"],
  answer: 3,
  explanation: "宮田愛萌の身長は159cmです。"
});

addQuestion({
  id: 158,
  genre: "member",
  difficulty: MIDDLE,
  year: 2017,
  question: "渡邉美穂の身長は？",
  choices: ["156cm","158cm","160cm","162cm"],
  answer: 2,
  explanation: "渡邉美穂の身長は158cmです。"
});

addQuestion({
  id: 159,
  genre: "member",
  difficulty: HARD,
  year: 2017,
  question: "小坂菜緒の星座は？",
  choices: ["しし座","おとめ座","てんびん座","おうし座"],
  answer: 2,
  explanation: "小坂菜緒は9月7日生まれのおとめ座です。"
});

addQuestion({
  id: 160,
  genre: "member",
  difficulty: HARD,
  year: 2017,
  question: "金村美玖の星座は？",
  choices: ["おとめ座","しし座","てんびん座","さそり座"],
  answer: 1,
  explanation: "金村美玖は9月10日生まれのおとめ座です。"
});

/* ==========================================
   👤 MEMBER QUESTIONS
   ID：161〜180（完全版・2期生⑤）
   ※ID1〜160と重複ゼロ
========================================== */

addQuestion({
  id: 161,
  genre: "member",
  difficulty: EASY,
  year: 2019,
  question: "小坂菜緒が初めて表題曲でセンターを務めたシングルは？",
  choices: ["ドレミソラシド", "キュン", "こんなに好きになっちゃっていいの？", "ソンナコトナイヨ"],
  answer: 2,
  explanation: "デビューシングル『キュン』で表題センターを務めました。"
});

addQuestion({
  id: 162,
  genre: "member",
  difficulty: EASY,
  year: 2022,
  question: "金村美玖が初めて表題曲でセンターを務めたシングルは？",
  choices: ["ってか", "僕なんか", "月と星が踊るMidnight", "One choice"],
  answer: 1,
  explanation: "『ってか』で初めて表題センターを務めました。"
});

addQuestion({
  id: 163,
  genre: "member",
  difficulty: EASY,
  year: 2023,
  question: "河田陽菜が初めて表題曲フロントメンバーになったシングルは？",
  choices: ["君しか勝たん", "月と星が踊るMidnight", "One choice", "Am I ready?"],
  answer: 3,
  explanation: "『One choice』で初めて表題曲フロントメンバーになりました。"
});

addQuestion({
  id: 164,
  genre: "member",
  difficulty: EASY,
  year: 2021,
  question: "富田鈴花が初めて表題曲フロントメンバーになったシングルは？",
  choices: ["ってか", "君しか勝たん", "僕なんか", "ソンナコトナイヨ"],
  answer: 1,
  explanation: "『ってか』で初めて表題曲フロントメンバーになりました。"
});

addQuestion({
  id: 165,
  genre: "member",
  difficulty: EASY,
  year: 2022,
  question: "丹生明里が初めて表題曲フロントメンバーになったシングルは？",
  choices: ["ってか", "僕なんか", "月と星が踊るMidnight", "君しか勝たん"],
  answer: 2,
  explanation: "『僕なんか』で初めて表題曲フロントメンバーになりました。"
});

addQuestion({
  id: 166,
  genre: "member",
  difficulty: EASY,
  year: 2020,
  question: "濱岸ひよりが活動復帰後、初参加した表題シングルは？",
  choices: ["ドレミソラシド", "ソンナコトナイヨ", "君しか勝たん", "ってか"],
  answer: 2,
  explanation: "『ソンナコトナイヨ』から表題シングルに復帰しました。"
});

addQuestion({
  id: 167,
  genre: "member",
  difficulty: EASY,
  year: 2024,
  question: "松田好花が初めて表題曲センターを務めたシングルは？",
  choices: ["卒業写真だけが知ってる", "君はハニーデュー", "絶対的第六感", "Love yourself!"],
  answer: 2,
  explanation: "『君はハニーデュー』で初めて表題センターを務めました。"
});

addQuestion({
  id: 168,
  genre: "member",
  difficulty: MIDDLE,
  year: 2022,
  question: "宮田愛萌が最後に出演した『日向坂で会いましょう』卒業企画のタイトルは？",
  choices: ["愛萌さん卒業おめでとう！", "宮田愛萌の大人化計画", "宮田愛萌卒業セレモニー完全版", "宮田愛萌 卒業前夜祭"],
  answer: 1,
  explanation: "卒業企画『愛萌さん卒業おめでとう！』が放送されました。"
});

addQuestion({
  id: 169,
  genre: "member",
  difficulty: MIDDLE,
  year: 2022,
  question: "渡邉美穂の卒業後初の芸能活動はどの分野？",
  choices: ["歌手", "女優", "アナウンサー", "モデル"],
  answer: 2,
  explanation: "卒業後は俳優・女優として活動を始めました。"
});

addQuestion({
  id: 170,
  genre: "member",
  difficulty: MIDDLE,
  year: 2021,
  question: "小坂菜緒が主演を務めた映画『恐怖人形』公開年は？",
  choices: ["2018年", "2019年", "2020年", "2021年"],
  answer: 2,
  explanation: "映画『恐怖人形』は2019年公開です。"
});

addQuestion({
  id: 171,
  genre: "member",
  difficulty: MIDDLE,
  year: 2022,
  question: "金村美玖の1st写真集のタイトルは？",
  choices: ["羅針盤", "羅針図", "Compass", "青春航路"],
  answer: 1,
  explanation: "金村美玖の1st写真集は『羅針盤』です。"
});

addQuestion({
  id: 172,
  genre: "member",
  difficulty: MIDDLE,
  year: 2021,
  question: "富田鈴花が出演したモータースポーツ番組は？",
  choices: ["SUPER GT+","GO ON! NEXT","Racing Spirits","SUPER FORMULA TV"],
  answer: 2,
  explanation: "富田鈴花は『GO ON! NEXT』に出演しています。"
});

addQuestion({
  id: 173,
  genre: "member",
  difficulty: MIDDLE,
  year: 2024,
  question: "丹生明里の卒業セレモニーのタイトルは？",
  choices: ["卒業セレモニー","卒業式","卒業メモリアルライブ","卒業イベント"],
  answer: 1,
  explanation: "公式名称は『丹生明里 卒業セレモニー』です。"
});

addQuestion({
  id: 174,
  genre: "member",
  difficulty: MIDDLE,
  year: 2020,
  question: "なおみくのユニット曲『See Through』が収録されたシングルは？",
  choices: ["キュン","ドレミソラシド","ソンナコトナイヨ","君しか勝たん"],
  answer: 3,
  explanation: "『See Through』は『ソンナコトナイヨ』収録曲です。"
});

addQuestion({
  id: 175,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "松田好花がセンターを務めた『君はハニーデュー』は何枚目のシングル？",
  choices: ["10枚目","11枚目","12枚目","13枚目"],
  answer: 2,
  explanation: "『君はハニーデュー』は11枚目シングルです。"
});

addQuestion({
  id: 176,
  genre: "member",
  difficulty: HARD,
  year: 2021,
  question: "小坂菜緒がセンターを務めた『君しか勝たん』は何枚目のシングル？",
  choices: ["4枚目","5枚目","6枚目","7枚目"],
  answer: 2,
  explanation: "『君しか勝たん』は5枚目シングルです。"
});

addQuestion({
  id: 177,
  genre: "member",
  difficulty: HARD,
  year: 2021,
  question: "金村美玖がセンターを務めた『ってか』は何枚目のシングル？",
  choices: ["5枚目","6枚目","7枚目","8枚目"],
  answer: 2,
  explanation: "『ってか』は6枚目シングルです。"
});

addQuestion({
  id: 178,
  genre: "member",
  difficulty: HARD,
  year: 2022,
  question: "丹生明里がフロント入りした『僕なんか』は何枚目のシングル？",
  choices: ["6枚目","7枚目","8枚目","9枚目"],
  answer: 2,
  explanation: "『僕なんか』は7枚目シングルです。"
});

addQuestion({
  id: 179,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "河田陽菜がフロント入りした『One choice』は何枚目のシングル？",
  choices: ["8枚目","9枚目","10枚目","11枚目"],
  answer: 2,
  explanation: "『One choice』は9枚目シングルです。"
});

addQuestion({
  id: 180,
  genre: "member",
  difficulty: HARD,
  year: 2021,
  question: "富田鈴花がフロント入りした『ってか』でセンターを務めたメンバーは？",
  choices: ["小坂菜緒","金村美玖","加藤史帆","齊藤京子"],
  answer: 2,
  explanation: "『ってか』のセンターは金村美玖です。"
});

/* ==========================================
   👤 MEMBER QUESTIONS
   ID：181〜200（完全版・2期生⑥）
   ※ID1〜180と重複なし
========================================== */

addQuestion({
  id: 181,
  genre: "member",
  difficulty: EASY,
  year: 2021,
  question: "小坂菜緒が主演を務めたドラマ『声春っ！』で演じた役名は？",
  choices: ["日ノ輪めいこ", "天道まな", "木村葉月", "佐藤詩織"],
  answer: 1,
  explanation: "小坂菜緒は『声春っ！』で日ノ輪めいこ役を演じました。"
});

addQuestion({
  id: 182,
  genre: "member",
  difficulty: EASY,
  year: 2021,
  question: "金村美玖が『ってか』で初めて務めた役割は？",
  choices: ["キャプテン", "副キャプテン", "表題曲センター", "座長"],
  answer: 3,
  explanation: "『ってか』で初めて表題曲センターを務めました。"
});

addQuestion({
  id: 183,
  genre: "member",
  difficulty: EASY,
  year: 2023,
  question: "河田陽菜がフロントメンバーに選ばれたシングルは？",
  choices: ["君しか勝たん", "One choice", "Am I ready?", "卒業写真だけが知ってる"],
  answer: 2,
  explanation: "『One choice』で初めて表題曲フロント入りしました。"
});

addQuestion({
  id: 184,
  genre: "member",
  difficulty: EASY,
  year: 2021,
  question: "富田鈴花がフロントメンバーに選ばれたシングルは？",
  choices: ["ソンナコトナイヨ", "君しか勝たん", "ってか", "僕なんか"],
  answer: 3,
  explanation: "『ってか』で初めて表題曲フロント入りしました。"
});

addQuestion({
  id: 185,
  genre: "member",
  difficulty: EASY,
  year: 2022,
  question: "丹生明里がフロントメンバーに選ばれたシングルは？",
  choices: ["ってか", "僕なんか", "月と星が踊るMidnight", "One choice"],
  answer: 2,
  explanation: "『僕なんか』で初めて表題曲フロント入りしました。"
});

addQuestion({
  id: 186,
  genre: "member",
  difficulty: EASY,
  year: 2024,
  question: "松田好花が表題曲センターを務めたシングルは？",
  choices: ["君はハニーデュー", "絶対的第六感", "Love yourself!", "卒業写真だけが知ってる"],
  answer: 1,
  explanation: "『君はハニーデュー』で初めて表題曲センターを務めました。"
});

addQuestion({
  id: 187,
  genre: "member",
  difficulty: MIDDLE,
  year: 2020,
  question: "小坂菜緒の1st写真集『君は誰？』のロケ地となった国は？",
  choices: ["タイ", "ベトナム", "インドネシア", "台湾"],
  answer: 1,
  explanation: "1st写真集『君は誰？』はタイで撮影されました。"
});

addQuestion({
  id: 188,
  genre: "member",
  difficulty: MIDDLE,
  year: 2022,
  question: "金村美玖の1st写真集『羅針盤』のロケ地となった国は？",
  choices: ["タイ", "シンガポール", "オーストラリア", "北海道"],
  answer: 2,
  explanation: "『羅針盤』はシンガポールで撮影されました。"
});

addQuestion({
  id: 189,
  genre: "member",
  difficulty: MIDDLE,
  year: 2022,
  question: "丹生明里の1st写真集『やさしいせかい』のロケ地となった都道府県は？",
  choices: ["沖縄県", "北海道", "長野県", "鹿児島県"],
  answer: 1,
  explanation: "『やさしいせかい』は沖縄県で撮影されました。"
});

addQuestion({
  id: 190,
  genre: "member",
  difficulty: MIDDLE,
  year: 2021,
  question: "富田鈴花が『声春っ！』で演じた役名は？",
  choices: ["天道まな", "木村葉月", "日ノ輪めいこ", "菊池まりり"],
  answer: 1,
  explanation: "富田鈴花は天道まな役を演じました。"
});

addQuestion({
  id: 191,
  genre: "member",
  difficulty: MIDDLE,
  year: 2021,
  question: "河田陽菜が『声春っ！』で演じた役名は？",
  choices: ["木村葉月", "佐藤詩織", "山下三恵", "天道まな"],
  answer: 1,
  explanation: "河田陽菜は木村葉月役を演じました。"
});

addQuestion({
  id: 192,
  genre: "member",
  difficulty: MIDDLE,
  year: 2021,
  question: "丹生明里が『声春っ！』で演じた役名は？",
  choices: ["佐藤詩織", "山下三恵", "日ノ輪めいこ", "木村葉月"],
  answer: 2,
  explanation: "丹生明里は山下三恵役を演じました。"
});

addQuestion({
  id: 193,
  genre: "member",
  difficulty: HARD,
  year: 2021,
  question: "ドラマ『声春っ！』の主題歌は？",
  choices: ["青春の馬", "声の足跡", "アザトカワイイ", "ってか"],
  answer: 2,
  explanation: "『声春っ！』の主題歌は『声の足跡』です。"
});

addQuestion({
  id: 194,
  genre: "member",
  difficulty: HARD,
  year: 2022,
  question: "宮田愛萌が卒業発表を行ったシングル期間は？",
  choices: ["僕なんか", "月と星が踊るMidnight", "One choice", "ってか"],
  answer: 2,
  explanation: "8thシングル『月と星が踊るMidnight』期間中に卒業を発表しました。"
});

addQuestion({
  id: 195,
  genre: "member",
  difficulty: HARD,
  year: 2022,
  question: "渡邉美穂の卒業後、最初に出演した連続ドラマは？",
  choices: ["孤独のグルメ", "ブラザー・トラップ", "君の花になる", "Get Ready!"],
  answer: 2,
  explanation: "卒業後初の連続ドラマ出演は『ブラザー・トラップ』です。"
});

addQuestion({
  id: 196,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "丹生明里が卒業を発表したのは何枚目シングル期間？",
  choices: ["11枚目", "12枚目", "13枚目", "14枚目"],
  answer: 2,
  explanation: "12枚目シングル期間中に卒業を発表しました。"
});

addQuestion({
  id: 197,
  genre: "member",
  difficulty: HARD,
  year: 2020,
  question: "小坂菜緒がセンターを務めた4thシングルは？",
  choices: ["ソンナコトナイヨ", "青春の馬", "アザトカワイイ", "君しか勝たん"],
  answer: 1,
  explanation: "4thシングル『ソンナコトナイヨ』でセンターを務めました。"
});

addQuestion({
  id: 198,
  genre: "member",
  difficulty: HARD,
  year: 2021,
  question: "金村美玖がセンターを務めたシングル『ってか』は何枚目シングル？",
  choices: ["5枚目", "6枚目", "7枚目", "8枚目"],
  answer: 2,
  explanation: "『ってか』は6枚目シングルです。"
});

addQuestion({
  id: 199,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "『One choice』でセンターを務めたメンバーは？",
  choices: ["小坂菜緒", "丹生明里", "加藤史帆", "松田好花"],
  answer: 2,
  explanation: "『One choice』のセンターは丹生明里です。"
});

addQuestion({
  id: 200,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "正源司陽子がセンターを務めた『君はハニーデュー』は何枚目シングル？",
  choices: ["10枚目", "11枚目", "12枚目", "13枚目"],
  answer: 2,
  explanation: "『君はハニーデュー』は11枚目シングルです。"
});

/* ==========================================
   👤 MEMBER QUESTIONS
   ID：201〜220（完全版・3期生① 上村ひなの）
   ※ID1〜200と重複ゼロ
========================================== */

addQuestion({
  id: 201,
  genre: "member",
  difficulty: EASY,
  year: 2018,
  question: "上村ひなのが加入した期は？",
  choices: ["1期生", "2期生", "3期生", "4期生"],
  answer: 3,
  explanation: "上村ひなのは日向坂46（当時けやき坂46）の3期生です。"
});

addQuestion({
  id: 202,
  genre: "member",
  difficulty: EASY,
  year: 2018,
  question: "上村ひなのが加入したグループ名は？",
  choices: ["日向坂46", "欅坂46", "けやき坂46", "櫻坂46"],
  answer: 3,
  explanation: "加入時は『けやき坂46』として加入しました。"
});

addQuestion({
  id: 203,
  genre: "member",
  difficulty: EASY,
  year: 2018,
  question: "上村ひなのは加入当初、3期生として何人で加入した？",
  choices: ["1人", "2人", "3人", "4人"],
  answer: 1,
  explanation: "上村ひなのは3期生唯一のメンバーとして加入しました。"
});

addQuestion({
  id: 204,
  genre: "member",
  difficulty: EASY,
  year: 2019,
  question: "上村ひなのが初参加した表題シングルは？",
  choices: ["キュン", "ドレミソラシド", "こんなに好きになっちゃっていいの？", "ソンナコトナイヨ"],
  answer: 3,
  explanation: "初参加の表題シングルは3rdシングル『こんなに好きになっちゃっていいの？』です。"
});

addQuestion({
  id: 205,
  genre: "member",
  difficulty: EASY,
  year: 2023,
  question: "上村ひなのの1st写真集のタイトルは？",
  choices: ["そのままで", "思い出の順番", "羅針盤", "振り向いて"],
  answer: 1,
  explanation: "上村ひなのの1st写真集は『そのままで』です。"
});

addQuestion({
  id: 206,
  genre: "member",
  difficulty: EASY,
  year: 2023,
  question: "上村ひなのの1st写真集『そのままで』が発売された年は？",
  choices: ["2021年", "2022年", "2023年", "2024年"],
  answer: 3,
  explanation: "『そのままで』は2023年に発売されました。"
});

addQuestion({
  id: 207,
  genre: "member",
  difficulty: MIDDLE,
  year: 2023,
  question: "上村ひなのの1st写真集『そのままで』の出版社は？",
  choices: ["講談社", "集英社", "小学館", "光文社"],
  answer: 3,
  explanation: "『そのままで』は小学館から発売されました。"
});

addQuestion({
  id: 208,
  genre: "member",
  difficulty: MIDDLE,
  year: 2020,
  question: "上村ひなのが初めてフロントメンバーに選ばれた表題シングルは？",
  choices: ["ソンナコトナイヨ", "君しか勝たん", "ってか", "僕なんか"],
  answer: 1,
  explanation: "4thシングル『ソンナコトナイヨ』で初めてフロント入りしました。"
});

addQuestion({
  id: 209,
  genre: "member",
  difficulty: MIDDLE,
  year: 2023,
  question: "上村ひなのが初めて表題曲センターを務めたシングルは？",
  choices: ["One choice", "Am I ready?", "君はハニーデュー", "絶対的第六感"],
  answer: 2,
  explanation: "10thシングル『Am I ready?』で初めて表題曲センターを務めました。"
});

addQuestion({
  id: 210,
  genre: "member",
  difficulty: MIDDLE,
  year: 2023,
  question: "『Am I ready?』は日向坂46の何枚目シングル？",
  choices: ["9枚目", "10枚目", "11枚目", "12枚目"],
  answer: 2,
  explanation: "『Am I ready?』は10枚目シングルです。"
});

addQuestion({
  id: 211,
  genre: "member",
  difficulty: MIDDLE,
  year: 2023,
  question: "上村ひなのがセンターを務めた『Am I ready?』の発売年は？",
  choices: ["2021年", "2022年", "2023年", "2024年"],
  answer: 3,
  explanation: "『Am I ready?』は2023年発売です。"
});

addQuestion({
  id: 212,
  genre: "member",
  difficulty: HARD,
  year: 2019,
  question: "上村ひなのが初めて参加したライブツアーは？",
  choices: ["全国おひさま化計画2019", "ひなくり2018", "ドレミソラシド発売記念ライブ", "3周年記念MEMORIAL LIVE"],
  answer: 1,
  explanation: "3rdシングル期間の全国ツアー『全国おひさま化計画2019』に参加しました。"
});

addQuestion({
  id: 213,
  genre: "member",
  difficulty: HARD,
  year: 2019,
  question: "上村ひなのが初参加した表題シングル『こんなに好きになっちゃっていいの？』は何枚目シングル？",
  choices: ["2枚目", "3枚目", "4枚目", "5枚目"],
  answer: 2,
  explanation: "『こんなに好きになっちゃっていいの？』は3枚目シングルです。"
});

addQuestion({
  id: 214,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "上村ひなのがセンターを務めた『Am I ready?』でフロントは何人だった？",
  choices: ["3人", "5人", "7人", "9人"],
  answer: 2,
  explanation: "『Am I ready?』は5人フロント編成でした。"
});

addQuestion({
  id: 215,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "上村ひなのがセンターを務めた『Am I ready?』のカップリング曲でMVが公開された楽曲は？",
  choices: ["見たことない魔物", "ガラス窓が汚れてる", "接触と感情", "骨組みだらけの夏休み"],
  answer: 2,
  explanation: "『ガラス窓が汚れてる』のMVが公開されました。"
});

addQuestion({
  id: 216,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "上村ひなの1st写真集『そのままで』は何冊目のソロ写真集？",
  choices: ["1冊目", "2冊目", "3冊目", "4冊目"],
  answer: 1,
  explanation: "上村ひなのにとって初めてのソロ写真集です。"
});

addQuestion({
  id: 217,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "上村ひなのが表題曲センターを務めたのは何期生で初めて？",
  choices: ["1期生", "2期生", "3期生", "4期生"],
  answer: 3,
  explanation: "3期生で初めて表題曲センターを務めました。"
});

addQuestion({
  id: 218,
  genre: "member",
  difficulty: HARD,
  year: 2020,
  question: "上村ひなのが初めてフロント入りした『ソンナコトナイヨ』のセンターは？",
  choices: ["小坂菜緒", "加藤史帆", "齊藤京子", "佐々木美玲"],
  answer: 1,
  explanation: "『ソンナコトナイヨ』のセンターは小坂菜緒です。"
});

addQuestion({
  id: 219,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "上村ひなのがセンターを務めた『Am I ready?』で初選抜入りした四期生は？",
  choices: ["正源司陽子", "藤嶌果歩", "宮地すみれ", "清水理央"],
  answer: 1,
  explanation: "正源司陽子が初めて表題曲選抜入りしました。"
});

addQuestion({
  id: 220,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "上村ひなのがセンターを務めた『Am I ready?』は何期生初の表題曲センター作品？",
  choices: ["2期生", "3期生", "4期生", "5期生"],
  answer: 2,
  explanation: "3期生初の表題曲センター作品です。"
});

addQuestion({
  id: 221,
  genre: "member",
  difficulty: EASY,
  year: 2020,
  question: "髙橋未来虹が日向坂46に配属された期は？",
  choices: ["2期生", "3期生", "4期生", "5期生"],
  answer: 2,
  explanation: "髙橋未来虹は3期生です。"
});

addQuestion({
  id: 222,
  genre: "member",
  difficulty: EASY,
  year: 2020,
  question: "髙橋未来虹はどこから日向坂46へ配属された？",
  choices: ["けやき坂46追加メンバー", "坂道研修生", "櫻坂46", "乃木坂46"],
  answer: 2,
  explanation: "坂道研修生から日向坂46へ配属されました。"
});

addQuestion({
  id: 223,
  genre: "member",
  difficulty: EASY,
  year: 2020,
  question: "髙橋未来虹・森本茉莉・山口陽世が日向坂46へ配属された日は？",
  choices: ["2020年1月26日", "2020年2月16日", "2020年3月27日", "2020年4月4日"],
  answer: 2,
  explanation: "2020年2月16日に3人の配属が発表されました。"
});

addQuestion({
  id: 224,
  genre: "member",
  difficulty: EASY,
  year: 2020,
  question: "髙橋未来虹が初めて参加した表題シングルは？",
  choices: ["ソンナコトナイヨ", "君しか勝たん", "ってか", "僕なんか"],
  answer: 1,
  explanation: "4thシングル『ソンナコトナイヨ』が初参加の表題シングルです。"
});

addQuestion({
  id: 225,
  genre: "member",
  difficulty: EASY,
  year: 2023,
  question: "髙橋未来虹が初めて表題曲選抜メンバーに選ばれたシングルは？",
  choices: ["One choice", "Am I ready?", "君はハニーデュー", "絶対的第六感"],
  answer: 1,
  explanation: "9thシングル『One choice』で初めて表題曲選抜入りしました。"
});

addQuestion({
  id: 226,
  genre: "member",
  difficulty: EASY,
  year: 2023,
  question: "『One choice』は日向坂46の何枚目シングル？",
  choices: ["8枚目", "9枚目", "10枚目", "11枚目"],
  answer: 2,
  explanation: "『One choice』は9枚目シングルです。"
});

addQuestion({
  id: 227,
  genre: "member",
  difficulty: MIDDLE,
  year: 2023,
  question: "髙橋未来虹が初選抜入りした『One choice』のセンターは？",
  choices: ["上村ひなの", "加藤史帆", "小坂菜緒", "金村美玖"],
  answer: 2,
  explanation: "『One choice』のセンターは加藤史帆です。"
});

addQuestion({
  id: 228,
  genre: "member",
  difficulty: MIDDLE,
  year: 2024,
  question: "髙橋未来虹が表題曲で初めてフロントメンバーになったシングルは？",
  choices: ["君はハニーデュー", "絶対的第六感", "Love yourself!", "卒業写真だけが知ってる"],
  answer: 2,
  explanation: "『絶対的第六感』で初めて表題曲フロント入りしました。"
});

addQuestion({
  id: 229,
  genre: "member",
  difficulty: MIDDLE,
  year: 2024,
  question: "『絶対的第六感』は日向坂46の何枚目シングル？",
  choices: ["11枚目", "12枚目", "13枚目", "14枚目"],
  answer: 3,
  explanation: "『絶対的第六感』は12枚目シングルです。"
});

addQuestion({
  id: 230,
  genre: "member",
  difficulty: MIDDLE,
  year: 2024,
  question: "髙橋未来虹がフロント入りした『絶対的第六感』のセンターは？",
  choices: ["小坂菜緒", "正源司陽子", "松田好花", "上村ひなの"],
  answer: 2,
  explanation: "『絶対的第六感』のセンターは正源司陽子です。"
});

addQuestion({
  id: 231,
  genre: "member",
  difficulty: MIDDLE,
  year: 2020,
  question: "髙橋未来虹が配属された当時の日向坂46キャプテンは？",
  choices: ["加藤史帆", "佐々木美玲", "佐々木久美", "齊藤京子"],
  answer: 3,
  explanation: "2020年当時のキャプテンは佐々木久美です。"
});

addQuestion({
  id: 232,
  genre: "member",
  difficulty: MIDDLE,
  year: 2020,
  question: "髙橋未来虹と同じ日に日向坂46へ配属されたメンバーは？",
  choices: ["森本茉莉・山口陽世", "上村ひなの・森本茉莉", "山口陽世・上村ひなの", "渡邉美穂・森本茉莉"],
  answer: 1,
  explanation: "森本茉莉・山口陽世と同日に配属されました。"
});

addQuestion({
  id: 233,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "髙橋未来虹が初選抜入りした『One choice』で初センターを務めたメンバーは？",
  choices: ["加藤史帆", "小坂菜緒", "金村美玖", "上村ひなの"],
  answer: 1,
  explanation: "『One choice』では加藤史帆が初センターを務めました。"
});

addQuestion({
  id: 234,
  genre: "member",
  difficulty: HARD,
  year: 2020,
  question: "髙橋未来虹が初参加した『ソンナコトナイヨ』のセンターは？",
  choices: ["加藤史帆", "齊藤京子", "小坂菜緒", "佐々木美玲"],
  answer: 3,
  explanation: "『ソンナコトナイヨ』のセンターは小坂菜緒です。"
});

addQuestion({
  id: 235,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "髙橋未来虹が初選抜入りした『One choice』は何期生加入後初の表題曲選抜入りだった？",
  choices: ["1期生", "2期生", "3期生", "4期生"],
  answer: 3,
  explanation: "髙橋未来虹にとって3期生加入後初の表題曲選抜入りでした。"
});

addQuestion({
  id: 236,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "髙橋未来虹がフロント入りした『絶対的第六感』は何期生加入後初のフロント入り？",
  choices: ["1期生", "2期生", "3期生", "4期生"],
  answer: 3,
  explanation: "3期生加入後初めての表題曲フロント入りです。"
});

addQuestion({
  id: 237,
  genre: "member",
  difficulty: HARD,
  year: 2020,
  question: "髙橋未来虹・森本茉莉・山口陽世の3人が配属された制度名は？",
  choices: ["坂道合同オーディション", "坂道研修生 配属", "新メンバーオーディション", "日向坂46三期生募集"],
  answer: 2,
  explanation: "坂道研修生の配属として日向坂46へ加入しました。"
});

addQuestion({
  id: 238,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "髙橋未来虹が初選抜入りした『One choice』の発売年は？",
  choices: ["2022年", "2023年", "2024年", "2025年"],
  answer: 2,
  explanation: "『One choice』は2023年発売です。"
});

addQuestion({
  id: 239,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "髙橋未来虹がフロント入りした『絶対的第六感』の発売年は？",
  choices: ["2023年", "2024年", "2025年", "2026年"],
  answer: 2,
  explanation: "『絶対的第六感』は2024年発売です。"
});

addQuestion({
  id: 240,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "髙橋未来虹がフロント入りした『絶対的第六感』は何枚目シングル？",
  choices: ["11枚目", "12枚目", "13枚目", "14枚目"],
  answer: 2,
  explanation: "『絶対的第六感』は12枚目シングルです。"
});

addQuestion({
  id: 241,
  genre: "member",
  difficulty: EASY,
  year: 2020,
  question: "森本茉莉が日向坂46に配属された期は？",
  choices: ["2期生", "3期生", "4期生", "5期生"],
  answer: 2,
  explanation: "森本茉莉は3期生です。"
});

addQuestion({
  id: 242,
  genre: "member",
  difficulty: EASY,
  year: 2020,
  question: "森本茉莉はどこから日向坂46へ配属された？",
  choices: ["坂道研修生", "けやき坂46追加メンバー", "櫻坂46", "乃木坂46"],
  answer: 1,
  explanation: "坂道研修生から日向坂46へ配属されました。"
});

addQuestion({
  id: 243,
  genre: "member",
  difficulty: EASY,
  year: 2020,
  question: "森本茉莉が日向坂46へ配属された日は？",
  choices: ["2020年1月26日", "2020年2月16日", "2020年3月27日", "2020年4月4日"],
  answer: 2,
  explanation: "2020年2月16日に配属が発表されました。"
});

addQuestion({
  id: 244,
  genre: "member",
  difficulty: EASY,
  year: 2020,
  question: "森本茉莉が初めて参加した表題シングルは？",
  choices: ["ソンナコトナイヨ", "君しか勝たん", "ってか", "僕なんか"],
  answer: 1,
  explanation: "4thシングル『ソンナコトナイヨ』が初参加の表題シングルです。"
});

addQuestion({
  id: 245,
  genre: "member",
  difficulty: EASY,
  year: 2021,
  question: "森本茉莉が初めて表題曲選抜メンバーに選ばれたシングルは？",
  choices: ["君しか勝たん", "ってか", "僕なんか", "月と星が踊るMidnight"],
  answer: 2,
  explanation: "6thシングル『ってか』で初めて表題曲選抜入りしました。"
});

addQuestion({
  id: 246,
  genre: "member",
  difficulty: EASY,
  year: 2021,
  question: "『ってか』は日向坂46の何枚目シングル？",
  choices: ["5枚目", "6枚目", "7枚目", "8枚目"],
  answer: 2,
  explanation: "『ってか』は6枚目シングルです。"
});

addQuestion({
  id: 247,
  genre: "member",
  difficulty: MIDDLE,
  year: 2021,
  question: "森本茉莉が初選抜入りした『ってか』のセンターは？",
  choices: ["小坂菜緒", "加藤史帆", "金村美玖", "丹生明里"],
  answer: 3,
  explanation: "『ってか』のセンターは金村美玖です。"
});

addQuestion({
  id: 248,
  genre: "member",
  difficulty: MIDDLE,
  year: 2024,
  question: "森本茉莉が初めて表題曲フロントメンバーになったシングルは？",
  choices: ["君はハニーデュー", "絶対的第六感", "Love yourself!", "卒業写真だけが知ってる"],
  answer: 2,
  explanation: "『絶対的第六感』で初めて表題曲フロント入りしました。"
});

addQuestion({
  id: 249,
  genre: "member",
  difficulty: MIDDLE,
  year: 2024,
  question: "『絶対的第六感』は日向坂46の何枚目シングル？",
  choices: ["11枚目", "12枚目", "13枚目", "14枚目"],
  answer: 2,
  explanation: "『絶対的第六感』は12枚目シングルです。"
});

addQuestion({
  id: 250,
  genre: "member",
  difficulty: MIDDLE,
  year: 2024,
  question: "森本茉莉がフロント入りした『絶対的第六感』のセンターは？",
  choices: ["小坂菜緒", "正源司陽子", "松田好花", "上村ひなの"],
  answer: 2,
  explanation: "『絶対的第六感』のセンターは正源司陽子です。"
});

addQuestion({
  id: 251,
  genre: "member",
  difficulty: MIDDLE,
  year: 2020,
  question: "森本茉莉が配属された当時の日向坂46キャプテンは？",
  choices: ["加藤史帆", "佐々木美玲", "佐々木久美", "齊藤京子"],
  answer: 3,
  explanation: "2020年当時のキャプテンは佐々木久美です。"
});

addQuestion({
  id: 252,
  genre: "member",
  difficulty: MIDDLE,
  year: 2020,
  question: "森本茉莉と同じ日に日向坂46へ配属されたメンバーは？",
  choices: ["髙橋未来虹・山口陽世", "上村ひなの・山口陽世", "髙橋未来虹・上村ひなの", "渡邉美穂・山口陽世"],
  answer: 1,
  explanation: "髙橋未来虹・山口陽世と同日に配属されました。"
});

addQuestion({
  id: 253,
  genre: "member",
  difficulty: HARD,
  year: 2021,
  question: "森本茉莉が初選抜入りした『ってか』の発売年は？",
  choices: ["2020年", "2021年", "2022年", "2023年"],
  answer: 2,
  explanation: "『ってか』は2021年発売です。"
});

addQuestion({
  id: 254,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "森本茉莉がフロント入りした『絶対的第六感』の発売年は？",
  choices: ["2023年", "2024年", "2025年", "2026年"],
  answer: 2,
  explanation: "『絶対的第六感』は2024年発売です。"
});

addQuestion({
  id: 255,
  genre: "member",
  difficulty: HARD,
  year: 2021,
  question: "森本茉莉が初選抜入りした『ってか』で同時に初センターを務めたメンバーは？",
  choices: ["加藤史帆", "小坂菜緒", "金村美玖", "丹生明里"],
  answer: 3,
  explanation: "『ってか』では金村美玖が初センターを務めました。"
});

addQuestion({
  id: 256,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "森本茉莉がフロント入りした『絶対的第六感』は何期生加入後初のフロント入り？",
  choices: ["1期生", "2期生", "3期生", "4期生"],
  answer: 3,
  explanation: "森本茉莉にとって3期生加入後初の表題曲フロント入りです。"
});

addQuestion({
  id: 257,
  genre: "member",
  difficulty: HARD,
  year: 2020,
  question: "森本茉莉・髙橋未来虹・山口陽世が配属された制度名は？",
  choices: ["坂道合同オーディション", "坂道研修生 配属", "新メンバーオーディション", "日向坂46三期生募集"],
  answer: 1,
  explanation: "坂道合同オーディションとして日向坂46へ加入しました。"
});

addQuestion({
  id: 258,
  genre: "member",
  difficulty: HARD,
  year: 2020,
  question: "森本茉莉が初参加した『ソンナコトナイヨ』のセンターは？",
  choices: ["小坂菜緒", "加藤史帆", "齊藤京子", "佐々木美玲"],
  answer: 1,
  explanation: "『ソンナコトナイヨ』のセンターは小坂菜緒です。"
});

addQuestion({
  id: 259,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "森本茉莉がフロント入りした『絶対的第六感』は何枚目シングル？",
  choices: ["11枚目", "12枚目", "13枚目", "14枚目"],
  answer: 2,
  explanation: "『絶対的第六感』は12枚目シングルです。"
});

addQuestion({
  id: 260,
  genre: "member",
  difficulty: HARD,
  year: 2021,
  question: "森本茉莉が初めて表題曲選抜メンバーになったシングル『ってか』で、3期生として同時に初選抜入りしたメンバーは？",
  choices: ["上村ひなの", "髙橋未来虹", "山口陽世", "いなかった"],
  answer: 3,
  explanation: "山口陽世も『ってか』で初めて表題曲選抜入りしました。"
});

addQuestion({
  id: 261,
  genre: "member",
  difficulty: EASY,
  year: 2020,
  question: "山口陽世が日向坂46に配属された期は？",
  choices: ["2期生", "3期生", "4期生", "5期生"],
  answer: 2,
  explanation: "山口陽世は3期生です。"
});

addQuestion({
  id: 262,
  genre: "member",
  difficulty: EASY,
  year: 2020,
  question: "山口陽世はどこから日向坂46へ配属された？",
  choices: ["坂道研修生", "けやき坂46追加メンバー", "櫻坂46", "乃木坂46"],
  answer: 1,
  explanation: "坂道研修生から日向坂46へ配属されました。"
});

addQuestion({
  id: 263,
  genre: "member",
  difficulty: EASY,
  year: 2020,
  question: "山口陽世が日向坂46へ配属された日は？",
  choices: ["2020年1月26日", "2020年2月16日", "2020年3月27日", "2020年4月4日"],
  answer: 2,
  explanation: "2020年2月16日に配属が発表されました。"
});

addQuestion({
  id: 264,
  genre: "member",
  difficulty: EASY,
  year: 2020,
  question: "山口陽世が初めて参加した表題シングルは？",
  choices: ["ソンナコトナイヨ", "君しか勝たん", "ってか", "僕なんか"],
  answer: 1,
  explanation: "4thシングル『ソンナコトナイヨ』が初参加の表題シングルです。"
});

addQuestion({
  id: 265,
  genre: "member",
  difficulty: EASY,
  year: 2021,
  question: "山口陽世が初めて表題曲選抜メンバーに選ばれたシングルは？",
  choices: ["君しか勝たん", "ってか", "僕なんか", "月と星が踊るMidnight"],
  answer: 2,
  explanation: "6thシングル『ってか』で初めて表題曲選抜入りしました。"
});

addQuestion({
  id: 266,
  genre: "member",
  difficulty: EASY,
  year: 2021,
  question: "『ってか』は日向坂46の何枚目シングル？",
  choices: ["5枚目", "6枚目", "7枚目", "8枚目"],
  answer: 2,
  explanation: "『ってか』は6枚目シングルです。"
});

addQuestion({
  id: 267,
  genre: "member",
  difficulty: MIDDLE,
  year: 2021,
  question: "山口陽世が初選抜入りした『ってか』のセンターは？",
  choices: ["小坂菜緒", "加藤史帆", "金村美玖", "丹生明里"],
  answer: 3,
  explanation: "『ってか』のセンターは金村美玖です。"
});

addQuestion({
  id: 268,
  genre: "member",
  difficulty: MIDDLE,
  year: 2024,
  question: "山口陽世が初めて表題曲フロントメンバーになったシングルは？",
  choices: ["君はハニーデュー", "絶対的第六感", "Love yourself!", "卒業写真だけが知ってる"],
  answer: 2,
  explanation: "『絶対的第六感』で初めて表題曲フロント入りしました。"
});

addQuestion({
  id: 269,
  genre: "member",
  difficulty: MIDDLE,
  year: 2024,
  question: "『絶対的第六感』は日向坂46の何枚目シングル？",
  choices: ["11枚目", "12枚目", "13枚目", "14枚目"],
  answer: 2,
  explanation: "『絶対的第六感』は12枚目シングルです。"
});

addQuestion({
  id: 270,
  genre: "member",
  difficulty: MIDDLE,
  year: 2024,
  question: "山口陽世がフロント入りした『絶対的第六感』のセンターは？",
  choices: ["小坂菜緒", "正源司陽子", "松田好花", "上村ひなの"],
  answer: 2,
  explanation: "『絶対的第六感』のセンターは正源司陽子です。"
});

addQuestion({
  id: 271,
  genre: "member",
  difficulty: MIDDLE,
  year: 2020,
  question: "山口陽世が配属された当時の日向坂46キャプテンは？",
  choices: ["加藤史帆", "佐々木美玲", "佐々木久美", "齊藤京子"],
  answer: 3,
  explanation: "2020年当時のキャプテンは佐々木久美です。"
});

addQuestion({
  id: 272,
  genre: "member",
  difficulty: MIDDLE,
  year: 2020,
  question: "山口陽世と同じ日に日向坂46へ配属されたメンバーは？",
  choices: ["髙橋未来虹・森本茉莉", "上村ひなの・森本茉莉", "髙橋未来虹・上村ひなの", "渡邉美穂・森本茉莉"],
  answer: 1,
  explanation: "髙橋未来虹・森本茉莉と同日に配属されました。"
});

addQuestion({
  id: 273,
  genre: "member",
  difficulty: HARD,
  year: 2021,
  question: "山口陽世が初選抜入りした『ってか』の発売年は？",
  choices: ["2020年", "2021年", "2022年", "2023年"],
  answer: 2,
  explanation: "『ってか』は2021年発売です。"
});

addQuestion({
  id: 274,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "山口陽世がフロント入りした『絶対的第六感』の発売年は？",
  choices: ["2023年", "2024年", "2025年", "2026年"],
  answer: 2,
  explanation: "『絶対的第六感』は2024年発売です。"
});

addQuestion({
  id: 275,
  genre: "member",
  difficulty: HARD,
  year: 2021,
  question: "山口陽世が初選抜入りした『ってか』で同時に初センターを務めたメンバーは？",
  choices: ["加藤史帆", "小坂菜緒", "金村美玖", "丹生明里"],
  answer: 3,
  explanation: "『ってか』では金村美玖が初センターを務めました。"
});

addQuestion({
  id: 276,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "山口陽世がフロント入りした『絶対的第六感』は何期生加入後初のフロント入り？",
  choices: ["1期生", "2期生", "3期生", "4期生"],
  answer: 3,
  explanation: "山口陽世にとって3期生加入後初の表題曲フロント入りです。"
});

addQuestion({
  id: 277,
  genre: "member",
  difficulty: HARD,
  year: 2020,
  question: "山口陽世・髙橋未来虹・森本茉莉が配属された制度名は？",
  choices: ["坂道合同オーディション", "坂道研修生 配属", "新メンバーオーディション", "日向坂46三期生募集"],
  answer: 2,
  explanation: "坂道研修生の配属として日向坂46へ加入しました。"
});

addQuestion({
  id: 278,
  genre: "member",
  difficulty: HARD,
  year: 2020,
  question: "山口陽世が初参加した『ソンナコトナイヨ』のセンターは？",
  choices: ["小坂菜緒", "加藤史帆", "齊藤京子", "佐々木美玲"],
  answer: 1,
  explanation: "『ソンナコトナイヨ』のセンターは小坂菜緒です。"
});

addQuestion({
  id: 279,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "山口陽世がフロント入りした『絶対的第六感』は何枚目シングル？",
  choices: ["11枚目", "12枚目", "13枚目", "14枚目"],
  answer: 2,
  explanation: "『絶対的第六感』は12枚目シングルです。"
});

addQuestion({
  id: 280,
  genre: "member",
  difficulty: HARD,
  year: 2021,
  question: "山口陽世が初めて表題曲選抜メンバーになったシングル『ってか』で、3期生として同時に初選抜入りしたメンバーは？",
  choices: ["上村ひなの", "髙橋未来虹", "森本茉莉", "いなかった"],
  answer: 3,
  explanation: "森本茉莉も『ってか』で初めて表題曲選抜入りしました。"
});

addQuestion({
  id: 281,
  genre: "member",
  difficulty: EASY,
  year: 2022,
  question: "山口陽世が初めて参加したアルバムは？",
  choices: ["ひなたざか", "脈打つ感情", "走り出す瞬間", "One choice"],
  answer: 1,
  explanation: "初参加アルバムは1stアルバム『ひなたざか』です。"
});

addQuestion({
  id: 282,
  genre: "member",
  difficulty: EASY,
  year: 2023,
  question: "山口陽世が出演した舞台『幕が上がる』で所属した高校は？",
  choices: ["富士ヶ丘高校", "聖桜高校", "県立さつき高校", "北条高校"],
  answer: 2,
  explanation: "『幕が上がる』では聖桜高校演劇部の一員を演じました。"
});

addQuestion({
  id: 283,
  genre: "member",
  difficulty: EASY,
  year: 2023,
  question: "山口陽世が出演した舞台『幕が上がる』の原作は誰の小説？",
  choices: ["湊かなえ", "平田オリザ", "平田オリザ原案・平田研也", "平田オリザ"],
  answer: 4,
  explanation: "原作は平田オリザ『幕が上がる』です。"
});

addQuestion({
  id: 284,
  genre: "member",
  difficulty: EASY,
  year: 2023,
  question: "舞台『幕が上がる』は日向坂46の何期生が出演した作品？",
  choices: ["1期生", "2期生", "3期生", "4期生"],
  answer: 3,
  explanation: "3期生4人が主演を務めました。"
});

addQuestion({
  id: 285,
  genre: "member",
  difficulty: MIDDLE,
  year: 2023,
  question: "舞台『幕が上がる』で山口陽世と共演した3期生は何人？",
  choices: ["1人", "2人", "3人", "4人"],
  answer: 3,
  explanation: "上村ひなの・髙橋未来虹・森本茉莉の3人と共演しました。"
});

addQuestion({
  id: 286,
  genre: "member",
  difficulty: MIDDLE,
  year: 2023,
  question: "舞台『幕が上がる』が上演された会場は？",
  choices: ["天王洲 銀河劇場", "新国立劇場", "東京国際フォーラム", "明治座"],
  answer: 1,
  explanation: "天王洲 銀河劇場で上演されました。"
});

addQuestion({
  id: 287,
  genre: "member",
  difficulty: MIDDLE,
  year: 2023,
  question: "山口陽世が出演した舞台『幕が上がる』は東京公演の後、どこでも上演された？",
  choices: ["大阪", "名古屋", "福岡", "札幌"],
  answer: 1,
  explanation: "東京・大阪の2都市で上演されました。"
});

addQuestion({
  id: 288,
  genre: "member",
  difficulty: MIDDLE,
  year: 2023,
  question: "山口陽世が出演した舞台『幕が上がる』の大阪公演会場は？",
  choices: ["梅田芸術劇場", "COOL JAPAN PARK OSAKA TTホール", "オリックス劇場", "フェスティバルホール"],
  answer: 2,
  explanation: "COOL JAPAN PARK OSAKA TTホールで上演されました。"
});

addQuestion({
  id: 289,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "舞台『幕が上がる』で主演を務めた日向坂46メンバーは合計何人？",
  choices: ["3人", "4人", "5人", "6人"],
  answer: 2,
  explanation: "3期生4人が主演を務めました。"
});

addQuestion({
  id: 290,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "舞台『幕が上がる』の原作小説を映画化した作品で主演を務めたグループは？",
  choices: ["乃木坂46", "欅坂46", "ももいろクローバーZ", "AKB48"],
  answer: 3,
  explanation: "映画版『幕が上がる』はももいろクローバーZ主演です。"
});

addQuestion({
  id: 291,
  genre: "member",
  difficulty: EASY,
  year: 2020,
  question: "山口陽世の公式プロフィールにある特技は？",
  choices: ["野球", "バレーボール", "バスケットボール", "ダンス"],
  answer: 1,
  explanation: "公式プロフィールの特技は野球です。"
});

addQuestion({
  id: 292,
  genre: "member",
  difficulty: EASY,
  year: 2020,
  question: "山口陽世の公式プロフィールにある趣味は？",
  choices: ["野球観戦", "映画鑑賞", "料理", "読書"],
  answer: 1,
  explanation: "公式プロフィールでは趣味に野球観戦があります。"
});

addQuestion({
  id: 293,
  genre: "member",
  difficulty: MIDDLE,
  year: 2020,
  question: "山口陽世の公式プロフィールにある好きなスポーツは？",
  choices: ["野球", "サッカー", "バレーボール", "水泳"],
  answer: 1,
  explanation: "好きなスポーツは野球です。"
});

addQuestion({
  id: 294,
  genre: "member",
  difficulty: MIDDLE,
  year: 2021,
  question: "山口陽世が『ひなたひ』でパーソナリティを担当したラジオ番組名は？",
  choices: [
    "日向坂46の『ひ』",
    "日向坂46の余計な事までやりましょう",
    "レコメン！",
    "オールナイトニッポンX"
  ],
  answer: 1,
  explanation: "文化放送『日向坂46の「ひ」』に出演しています。"
});

addQuestion({
  id: 295,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "山口陽世が出演した『日向坂で会いましょう』の野球企画で対戦したプロ野球OBは？",
  choices: ["里崎智也", "上原浩治", "糸井嘉男", "古田敦也"],
  answer: 1,
  explanation: "里崎智也さんと共演しました。"
});

addQuestion({
  id: 296,
  genre: "member",
  difficulty: HARD,
  year: 2020,
  question: "山口陽世が加入前に所属していた制度は？",
  choices: ["坂道合同オーディション合格者", "坂道研修生", "Seed & Flower研修生", "けやき坂46追加メンバー"],
  answer: 2,
  explanation: "加入前は坂道研修生として活動していました。"
});

addQuestion({
  id: 297,
  genre: "member",
  difficulty: MIDDLE,
  year: 2023,
  question: "舞台『幕が上がる』で主演した3期生4人のうち、鳥取県出身は誰？",
  choices: ["上村ひなの", "髙橋未来虹", "森本茉莉", "山口陽世"],
  answer: 4,
  explanation: "鳥取県出身は山口陽世です。"
});

addQuestion({
  id: 298,
  genre: "member",
  difficulty: HARD,
  year: 2020,
  question: "山口陽世が配属された2020年2月16日は何曜日？",
  choices: ["土曜日", "日曜日", "月曜日", "火曜日"],
  answer: 2,
  explanation: "2020年2月16日は日曜日でした。"
});

addQuestion({
  id: 299,
  genre: "member",
  difficulty: MIDDLE,
  year: 2023,
  question: "山口陽世が出演した舞台『幕が上がる』は山口陽世にとって何回目の舞台？",
  choices: ["初舞台", "2回目", "3回目", "4回目"],
  answer: 1,
  explanation: "『幕が上がる』は初舞台作品です。"
});

addQuestion({
  id: 300,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "山口陽世が主演した舞台『幕が上がる』で演劇部員を演じたメンバーは合計何人？",
  choices: ["1人", "2人", "3人", "4人"],
  answer: 2,
  explanation: "日向坂46の3期生2人が演劇部員を演じました。"
});

addQuestion({
  id: 301,
  genre: "member",
  difficulty: EASY,
  year: 2022,
  question: "正源司陽子が日向坂46に加入した期は？",
  choices: ["3期生", "4期生", "5期生", "坂道研修生"],
  answer: 2,
  explanation: "正源司陽子は4期生です。"
});

addQuestion({
  id: 302,
  genre: "member",
  difficulty: EASY,
  year: 2022,
  question: "正源司陽子が加入したオーディションは？",
  choices: ["坂道合同オーディション", "日向坂46 新メンバー募集オーディション", "坂道研修生オーディション", "Seed & Flowerオーディション"],
  answer: 2,
  explanation: "日向坂46 新メンバー募集オーディションで加入しました。"
});

addQuestion({
  id: 303,
  genre: "member",
  difficulty: EASY,
  year: 2022,
  question: "正源司陽子が4期生としてお披露目された年は？",
  choices: ["2021年", "2022年", "2023年", "2024年"],
  answer: 2,
  explanation: "4期生は2022年にお披露目されました。"
});

addQuestion({
  id: 304,
  genre: "member",
  difficulty: EASY,
  year: 2023,
  question: "正源司陽子が初めて参加した表題シングルは？",
  choices: ["月と星が踊るMidnight", "One choice", "Am I ready?", "君はハニーデュー"],
  answer: 2,
  explanation: "9thシングル『One choice』が初参加の表題シングルです。"
});

addQuestion({
  id: 305,
  genre: "member",
  difficulty: EASY,
  year: 2024,
  question: "正源司陽子が初めて表題曲センターを務めたシングルは？",
  choices: ["Am I ready?", "君はハニーデュー", "絶対的第六感", "Love yourself!"],
  answer: 3,
  explanation: "12thシングル『絶対的第六感』で初めて表題曲センターを務めました。"
});

addQuestion({
  id: 306,
  genre: "member",
  difficulty: EASY,
  year: 2024,
  question: "『絶対的第六感』は日向坂46の何枚目シングル？",
  choices: ["11枚目", "12枚目", "13枚目", "14枚目"],
  answer: 2,
  explanation: "『絶対的第六感』は12枚目シングルです。"
});

addQuestion({
  id: 307,
  genre: "member",
  difficulty: MIDDLE,
  year: 2024,
  question: "正源司陽子が初センターを務めた『絶対的第六感』でWセンターを務めたメンバーは？",
  choices: ["小坂菜緒", "藤嶌果歩", "金村美玖", "松田好花"],
  answer: 2,
  explanation: "『絶対的第六感』は正源司陽子と藤嶌果歩のWセンターです。"
});

addQuestion({
  id: 308,
  genre: "member",
  difficulty: MIDDLE,
  year: 2023,
  question: "正源司陽子が初めてフロントメンバーに選ばれた表題シングルは？",
  choices: ["One choice", "Am I ready?", "君はハニーデュー", "絶対的第六感"],
  answer: 2,
  explanation: "『Am I ready?』で初めて表題曲フロント入りしました。"
});

addQuestion({
  id: 309,
  genre: "member",
  difficulty: MIDDLE,
  year: 2023,
  question: "『Am I ready?』は日向坂46の何枚目シングル？",
  choices: ["9枚目", "10枚目", "11枚目", "12枚目"],
  answer: 2,
  explanation: "『Am I ready?』は10枚目シングルです。"
});

addQuestion({
  id: 310,
  genre: "member",
  difficulty: MIDDLE,
  year: 2023,
  question: "正源司陽子が初フロント入りした『Am I ready?』のセンターは？",
  choices: ["小坂菜緒", "上村ひなの", "加藤史帆", "金村美玖"],
  answer: 2,
  explanation: "『Am I ready?』のセンターは上村ひなのです。"
});

addQuestion({
  id: 311,
  genre: "member",
  difficulty: MIDDLE,
  year: 2023,
  question: "正源司陽子が出演した舞台『五等分の花嫁』で演じた役は？",
  choices: ["中野一花", "中野二乃", "中野三玖", "中野五月"],
  answer: 1,
  explanation: "正源司陽子は中野一花役を演じました。"
});

addQuestion({
  id: 312,
  genre: "member",
  difficulty: MIDDLE,
  year: 2023,
  question: "舞台『五等分の花嫁』で正源司陽子が所属したチーム名は？",
  choices: ["Team A", "Team B", "Team C", "Team D"],
  answer: 1,
  explanation: "正源司陽子はTeam Aに出演しました。"
});

addQuestion({
  id: 313,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "正源司陽子が出演した舞台『五等分の花嫁』の会場は？",
  choices: ["品川プリンスホテル ステラボール", "天王洲 銀河劇場", "明治座", "東京国際フォーラム"],
  answer: 1,
  explanation: "品川プリンスホテル ステラボールで上演されました。"
});

addQuestion({
  id: 314,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "舞台『五等分の花嫁』で正源司陽子と共演した4期生は何人？",
  choices: ["4人", "5人", "6人", "10人"],
  answer: 4,
  explanation: "4期生11人全員が出演しました。"
});

addQuestion({
  id: 315,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "正源司陽子が主演した映画『ゼンブ・オブ・トーキョー』で演じた役名は？",
  choices: ["桐井智紗", "池園優里香", "羽川恵", "説田詩央里"],
  answer: 2,
  explanation: "正源司陽子は池園優里香役を演じました。"
});



addQuestion({
  id: 316,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "映画『ゼンブ・オブ・トーキョー』で正源司陽子が演じた池園優里香は何年生の修学旅行生？",
  choices: ["高校1年生", "高校2年生", "高校3年生", "中学3年生"],
  answer: 2,
  explanation: "高校2年生の修学旅行生という設定です。"
});

addQuestion({
  id: 317,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "映画『ゼンブ・オブ・トーキョー』の公開年は？",
  choices: ["2023年", "2024年", "2025年", "2026年"],
  answer: 2,
  explanation: "映画『ゼンブ・オブ・トーキョー』は2024年公開です。"
});

addQuestion({
  id: 318,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "映画『ゼンブ・オブ・トーキョー』で主演を務めた期は？",
  choices: ["2期生", "3期生", "4期生", "5期生"],
  answer: 3,
  explanation: "主演は日向坂46の4期生です。"
});

addQuestion({
  id: 319,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "正源司陽子がWセンターを務めた『絶対的第六感』で、4期生として同時にセンターを務めたメンバーは？",
  choices: ["藤嶌果歩", "宮地すみれ", "清水理央", "渡辺莉奈"],
  answer: 1,
  explanation: "藤嶌果歩とWセンターを務めました。"
});

addQuestion({
  id: 320,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "正源司陽子が初センターを務めた『絶対的第六感』は4期生にとって何作目の表題曲センター作品？",
  choices: ["1作目", "2作目", "3作目", "4作目"],
  answer: 1,
  explanation: "4期生にとって初めての表題曲センター作品です。"
});

addQuestion({
  id: 321,
  genre: "member",
  difficulty: EASY,
  year: 2022,
  question: "藤嶌果歩が日向坂46に加入した期は？",
  choices: ["3期生", "4期生", "5期生", "坂道研修生"],
  answer: 2,
  explanation: "藤嶌果歩は4期生です。"
});

addQuestion({
  id: 322,
  genre: "member",
  difficulty: EASY,
  year: 2022,
  question: "藤嶌果歩が加入したオーディションは？",
  choices: ["坂道合同オーディション", "日向坂46 新メンバー募集オーディション", "坂道研修生オーディション", "Seed & Flowerオーディション"],
  answer: 2,
  explanation: "日向坂46 新メンバー募集オーディションで加入しました。"
});

addQuestion({
  id: 323,
  genre: "member",
  difficulty: EASY,
  year: 2022,
  question: "藤嶌果歩が4期生としてお披露目された年は？",
  choices: ["2021年", "2022年", "2023年", "2024年"],
  answer: 2,
  explanation: "4期生は2022年にお披露目されました。"
});

addQuestion({
  id: 324,
  genre: "member",
  difficulty: EASY,
  year: 2023,
  question: "藤嶌果歩が初めて参加した表題シングルは？",
  choices: ["月と星が踊るMidnight", "One choice", "Am I ready?", "君はハニーデュー"],
  answer: 2,
  explanation: "9thシングル『One choice』が初参加の表題シングルです。"
});

addQuestion({
  id: 325,
  genre: "member",
  difficulty: EASY,
  year: 2024,
  question: "藤嶌果歩が初めて表題曲センターを務めたシングルは？",
  choices: ["Am I ready?", "君はハニーデュー", "絶対的第六感", "Love yourself!"],
  answer: 3,
  explanation: "12thシングル『絶対的第六感』で初めて表題曲センターを務めました。"
});

addQuestion({
  id: 326,
  genre: "member",
  difficulty: EASY,
  year: 2024,
  question: "藤嶌果歩がWセンターを務めた『絶対的第六感』の相手は？",
  choices: ["小坂菜緒", "正源司陽子", "松田好花", "金村美玖"],
  answer: 2,
  explanation: "正源司陽子とWセンターを務めました。"
});

addQuestion({
  id: 327,
  genre: "member",
  difficulty: MIDDLE,
  year: 2023,
  question: "藤嶌果歩が初めてフロントメンバーに選ばれた表題シングルは？",
  choices: ["One choice", "Am I ready?", "君はハニーデュー", "絶対的第六感"],
  answer: 2,
  explanation: "『Am I ready?』で初めて表題曲フロント入りしました。"
});

addQuestion({
  id: 328,
  genre: "member",
  difficulty: MIDDLE,
  year: 2023,
  question: "『Am I ready?』でセンターを務めたメンバーは？",
  choices: ["小坂菜緒", "上村ひなの", "加藤史帆", "金村美玖"],
  answer: 2,
  explanation: "『Am I ready?』のセンターは上村ひなのです。"
});

addQuestion({
  id: 329,
  genre: "member",
  difficulty: MIDDLE,
  year: 2023,
  question: "藤嶌果歩が出演した舞台『五等分の花嫁』で演じた役は？",
  choices: ["中野一花", "中野二乃", "中野三玖", "中野五月"],
  answer: 3,
  explanation: "藤嶌果歩は中野三玖役を演じました。"
});

addQuestion({
  id: 330,
  genre: "member",
  difficulty: MIDDLE,
  year: 2023,
  question: "藤嶌果歩が出演した舞台『五等分の花嫁』の会場は？",
  choices: ["天王洲 銀河劇場", "品川プリンスホテル ステラボール", "明治座", "東京国際フォーラム"],
  answer: 2,
  explanation: "品川プリンスホテル ステラボールで上演されました。"
});

addQuestion({
  id: 331,
  genre: "member",
  difficulty: MIDDLE,
  year: 2024,
  question: "藤嶌果歩が出演した映画『ゼンブ・オブ・トーキョー』で演じた役名は？",
  choices: ["羽川恵", "桐井智紗", "池園優里香", "説田詩央里"],
  answer: 1,
  explanation: "藤嶌果歩は羽川恵役を演じました。"
});

addQuestion({
  id: 332,
  genre: "member",
  difficulty: MIDDLE,
  year: 2024,
  question: "映画『ゼンブ・オブ・トーキョー』で羽川恵は何年生の修学旅行生？",
  choices: ["高校1年生", "高校2年生", "高校3年生", "中学3年生"],
  answer: 2,
  explanation: "高校2年生の修学旅行生という設定です。"
});

addQuestion({
  id: 333,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "『絶対的第六感』で藤嶌果歩が表題曲センターを務めた時、4期生として何人目のセンターになった？",
  choices: ["1人目", "2人目", "3人目", "4人目"],
  answer: 1,
  explanation: "4期生として初めて表題曲センターを務めました。"
});

addQuestion({
  id: 334,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "『絶対的第六感』は4期生にとって初の何になった作品？",
  choices: ["表題曲参加", "表題曲フロント", "表題曲センター", "アルバムセンター"],
  answer: 3,
  explanation: "4期生初の表題曲センター作品です。"
});

addQuestion({
  id: 335,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "藤嶌果歩が初参加した『One choice』でセンターを務めたメンバーは？",
  choices: ["加藤史帆", "小坂菜緒", "金村美玖", "上村ひなの"],
  answer: 1,
  explanation: "『One choice』のセンターは加藤史帆です。"
});

addQuestion({
  id: 336,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "藤嶌果歩が初フロント入りした『Am I ready?』は何枚目シングル？",
  choices: ["9枚目", "10枚目", "11枚目", "12枚目"],
  answer: 2,
  explanation: "『Am I ready?』は10枚目シングルです。"
});

addQuestion({
  id: 337,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "映画『ゼンブ・オブ・トーキョー』で主演を務めた期は？",
  choices: ["2期生", "3期生", "4期生", "5期生"],
  answer: 3,
  explanation: "主演は4期生11人です。"
});

addQuestion({
  id: 338,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "映画『ゼンブ・オブ・トーキョー』の公開年は？",
  choices: ["2023年", "2024年", "2025年", "2026年"],
  answer: 2,
  explanation: "映画『ゼンブ・オブ・トーキョー』は2024年公開です。"
});

addQuestion({
  id: 339,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "藤嶌果歩がWセンターを務めた『絶対的第六感』は日向坂46の何枚目シングル？",
  choices: ["11枚目", "12枚目", "13枚目", "14枚目"],
  answer: 2,
  explanation: "『絶対的第六感』は12枚目シングルです。"
});

addQuestion({
  id: 340,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "藤嶌果歩がWセンターを務めた『絶対的第六感』で同時センターだったメンバーは誰？",
  choices: ["正源司陽子", "宮地すみれ", "清水理央", "渡辺莉奈"],
  answer: 1,
  explanation: "正源司陽子とWセンターを務めました。"
});

addQuestion({
  id: 341,
  genre: "member",
  difficulty: EASY,
  year: 2022,
  question: "宮地すみれが日向坂46に加入した期は？",
  choices: ["3期生", "4期生", "5期生", "坂道研修生"],
  answer: 2,
  explanation: "宮地すみれは4期生です。"
});

addQuestion({
  id: 342,
  genre: "member",
  difficulty: EASY,
  year: 2022,
  question: "宮地すみれが加入したオーディションは？",
  choices: ["坂道合同オーディション", "日向坂46 新メンバー募集オーディション", "坂道研修生オーディション", "Seed & Flowerオーディション"],
  answer: 2,
  explanation: "日向坂46 新メンバー募集オーディションで加入しました。"
});

addQuestion({
  id: 343,
  genre: "member",
  difficulty: EASY,
  year: 2022,
  question: "宮地すみれが4期生としてお披露目された年は？",
  choices: ["2021年", "2022年", "2023年", "2024年"],
  answer: 2,
  explanation: "4期生は2022年にお披露目されました。"
});

addQuestion({
  id: 344,
  genre: "member",
  difficulty: EASY,
  year: 2023,
  question: "宮地すみれが初めて参加した表題シングルは？",
  choices: ["月と星が踊るMidnight", "One choice", "Am I ready?", "君はハニーデュー"],
  answer: 2,
  explanation: "9thシングル『One choice』が初参加の表題シングルです。"
});

addQuestion({
  id: 345,
  genre: "member",
  difficulty: EASY,
  year: 2024,
  question: "宮地すみれが初めて表題曲フロントメンバーになったシングルは？",
  choices: ["One choice", "Am I ready?", "君はハニーデュー", "絶対的第六感"],
  answer: 4,
  explanation: "『絶対的第六感』で初めて表題曲フロント入りしました。"
});

addQuestion({
  id: 346,
  genre: "member",
  difficulty: EASY,
  year: 2024,
  question: "宮地すみれがフロント入りした『絶対的第六感』のセンターは？",
  choices: ["小坂菜緒", "正源司陽子・藤嶌果歩", "松田好花", "金村美玖"],
  answer: 2,
  explanation: "『絶対的第六感』は正源司陽子・藤嶌果歩のWセンターです。"
});

addQuestion({
  id: 347,
  genre: "member",
  difficulty: MIDDLE,
  year: 2023,
  question: "宮地すみれが初めてフロントメンバーに選ばれた『絶対的第六感』は何枚目シングル？",
  choices: ["10枚目", "11枚目", "12枚目", "13枚目"],
  answer: 3,
  explanation: "『絶対的第六感』は12枚目シングルです。"
});

addQuestion({
  id: 348,
  genre: "member",
  difficulty: MIDDLE,
  year: 2023,
  question: "宮地すみれが出演した舞台『五等分の花嫁』で演じた役は？",
  choices: ["中野一花", "中野二乃", "中野四葉", "中野五月"],
  answer: 4,
  explanation: "宮地すみれは中野五月役を演じました。"
});

addQuestion({
  id: 349,
  genre: "member",
  difficulty: MIDDLE,
  year: 2023,
  question: "宮地すみれが出演した舞台『五等分の花嫁』の会場は？",
  choices: ["品川プリンスホテル ステラボール", "天王洲 銀河劇場", "明治座", "東京国際フォーラム"],
  answer: 1,
  explanation: "品川プリンスホテル ステラボールで上演されました。"
});

addQuestion({
  id: 350,
  genre: "member",
  difficulty: MIDDLE,
  year: 2024,
  question: "宮地すみれが出演した映画『ゼンブ・オブ・トーキョー』で演じた役名は？",
  choices: ["梁取茜", "池園優里香", "羽川恵", "桐井智紗"],
  answer: 1,
  explanation: "宮地すみれは梁取茜役を演じました。"
});

addQuestion({
  id: 351,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "映画『ゼンブ・オブ・トーキョー』で梁取茜は何年生の修学旅行生？",
  choices: ["高校1年生", "高校2年生", "高校3年生", "中学3年生"],
  answer: 2,
  explanation: "高校2年生の修学旅行生という設定です。"
});

addQuestion({
  id: 352,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "映画『ゼンブ・オブ・トーキョー』が公開された年は？",
  choices: ["2023年", "2024年", "2025年", "2026年"],
  answer: 2,
  explanation: "2024年公開です。"
});

addQuestion({
  id: 353,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "宮地すみれが出演した舞台『五等分の花嫁』で共演した4期生は何人？",
  choices: ["5人", "8人", "10人", "11人"],
  answer: 4,
  explanation: "4期生11人全員が出演しました。"
});

addQuestion({
  id: 354,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "宮地すみれがフロント入りした『絶対的第六感』は4期生にとって初の何だった？",
  choices: ["アルバムセンター", "表題曲センター", "表題曲フロント", "ユニットセンター"],
  answer: 3,
  explanation: "4期生が初めて表題曲フロントに入った作品です。"
});

addQuestion({
  id: 355,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "宮地すみれが初参加した『One choice』のセンターは？",
  choices: ["加藤史帆", "小坂菜緒", "金村美玖", "上村ひなの"],
  answer: 1,
  explanation: "『One choice』のセンターは加藤史帆です。"
});

addQuestion({
  id: 356,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "宮地すみれが初参加した『One choice』の発売年は？",
  choices: ["2022年", "2023年", "2024年", "2025年"],
  answer: 2,
  explanation: "『One choice』は2023年発売です。"
});

addQuestion({
  id: 357,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "宮地すみれが出演した『ゼンブ・オブ・トーキョー』で主演を務めた期は？",
  choices: ["2期生", "3期生", "4期生", "5期生"],
  answer: 3,
  explanation: "主演は4期生11人です。"
});

addQuestion({
  id: 358,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "宮地すみれが出演した『ゼンブ・オブ・トーキョー』で梁取茜が訪れた場所の舞台はどこ？",
  choices: ["東京", "横浜", "京都", "大阪"],
  answer: 1,
  explanation: "修学旅行で東京を巡る物語です。"
});

addQuestion({
  id: 359,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "宮地すみれがフロント入りした『絶対的第六感』のWセンターは誰と誰？",
  choices: ["小坂菜緒・金村美玖", "正源司陽子・藤嶌果歩", "加藤史帆・小坂菜緒", "松田好花・正源司陽子"],
  answer: 2,
  explanation: "正源司陽子・藤嶌果歩のWセンターです。"
});

addQuestion({
  id: 360,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "宮地すみれがフロント入りした『絶対的第六感』は日向坂46の何枚目シングル？",
  choices: ["10枚目", "11枚目", "12枚目", "13枚目"],
  answer: 3,
  explanation: "『絶対的第六感』は12枚目シングルです。"
});

addQuestion({
  id: 361,
  genre: "member",
  difficulty: EASY,
  year: 2022,
  question: "清水理央が日向坂46に加入した期は？",
  choices: ["3期生", "4期生", "5期生", "坂道研修生"],
  answer: 2,
  explanation: "清水理央は4期生です。"
});

addQuestion({
  id: 362,
  genre: "member",
  difficulty: EASY,
  year: 2022,
  question: "清水理央が加入したオーディションは？",
  choices: ["坂道合同オーディション", "日向坂46 新メンバー募集オーディション", "坂道研修生オーディション", "Seed & Flowerオーディション"],
  answer: 2,
  explanation: "日向坂46 新メンバー募集オーディションで加入しました。"
});

addQuestion({
  id: 363,
  genre: "member",
  difficulty: EASY,
  year: 2022,
  question: "清水理央が4期生としてお披露目された年は？",
  choices: ["2021年", "2022年", "2023年", "2024年"],
  answer: 2,
  explanation: "4期生は2022年にお披露目されました。"
});

addQuestion({
  id: 364,
  genre: "member",
  difficulty: EASY,
  year: 2023,
  question: "清水理央が初めて参加した表題シングルは？",
  choices: ["月と星が踊るMidnight", "One choice", "Am I ready?", "君はハニーデュー"],
  answer: 2,
  explanation: "9thシングル『One choice』が初参加の表題シングルです。"
});

addQuestion({
  id: 365,
  genre: "member",
  difficulty: EASY,
  year: 2024,
  question: "清水理央が初めて表題曲フロントメンバーになったシングルは？",
  choices: ["One choice", "Am I ready?", "君はハニーデュー", "絶対的第六感"],
  answer: 4,
  explanation: "『絶対的第六感』で初めて表題曲フロント入りしました。"
});

addQuestion({
  id: 366,
  genre: "member",
  difficulty: EASY,
  year: 2024,
  question: "清水理央がフロント入りした『絶対的第六感』のセンターは？",
  choices: ["小坂菜緒", "正源司陽子・藤嶌果歩", "松田好花", "金村美玖"],
  answer: 2,
  explanation: "『絶対的第六感』は正源司陽子・藤嶌果歩のWセンターです。"
});

addQuestion({
  id: 367,
  genre: "member",
  difficulty: MIDDLE,
  year: 2024,
  question: "清水理央が出演した映画『ゼンブ・オブ・トーキョー』で演じた役名は？",
  choices: ["角村若菜", "梁取茜", "桐井智紗", "池園優里香"],
  answer: 1,
  explanation: "清水理央は角村若菜役を演じました。"
});

addQuestion({
  id: 368,
  genre: "member",
  difficulty: MIDDLE,
  year: 2023,
  question: "清水理央が出演した舞台『五等分の花嫁』で演じた役は？",
  choices: ["中野一花", "中野二乃", "中野三玖", "中野四葉"],
  answer: 4,
  explanation: "清水理央は中野四葉役を演じました。"
});

addQuestion({
  id: 369,
  genre: "member",
  difficulty: MIDDLE,
  year: 2023,
  question: "清水理央が出演した舞台『五等分の花嫁』の会場は？",
  choices: ["品川プリンスホテル ステラボール", "天王洲 銀河劇場", "明治座", "東京国際フォーラム"],
  answer: 1,
  explanation: "品川プリンスホテル ステラボールで上演されました。"
});

addQuestion({
  id: 370,
  genre: "member",
  difficulty: MIDDLE,
  year: 2023,
  question: "清水理央が初参加した『One choice』のセンターは？",
  choices: ["加藤史帆", "小坂菜緒", "金村美玖", "上村ひなの"],
  answer: 1,
  explanation: "『One choice』のセンターは加藤史帆です。"
});

addQuestion({
  id: 371,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "映画『ゼンブ・オブ・トーキョー』で角村若菜は何年生の修学旅行生？",
  choices: ["高校1年生", "高校2年生", "高校3年生", "中学3年生"],
  answer: 2,
  explanation: "高校2年生の修学旅行生という設定です。"
});

addQuestion({
  id: 372,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "映画『ゼンブ・オブ・トーキョー』の舞台となった都道府県は？",
  choices: ["神奈川県", "東京都", "千葉県", "埼玉県"],
  answer: 2,
  explanation: "修学旅行で東京都内を巡る物語です。"
});

addQuestion({
  id: 373,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "清水理央が出演した『ゼンブ・オブ・トーキョー』で主演を務めた期は？",
  choices: ["2期生", "3期生", "4期生", "5期生"],
  answer: 3,
  explanation: "主演は4期生11人です。"
});

addQuestion({
  id: 374,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "清水理央がフロント入りした『絶対的第六感』は何枚目シングル？",
  choices: ["10枚目", "11枚目", "12枚目", "13枚目"],
  answer: 3,
  explanation: "『絶対的第六感』は12枚目シングルです。"
});

addQuestion({
  id: 375,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "『絶対的第六感』でWセンターを務めた4期生は何人？",
  choices: ["1人", "2人", "3人", "4人"],
  answer: 2,
  explanation: "正源司陽子と藤嶌果歩の2人がWセンターです。"
});

addQuestion({
  id: 376,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "清水理央が出演した舞台『五等分の花嫁』で演じた中野四葉は五つ子の何女？",
  choices: ["長女", "次女", "四女", "五女"],
  answer: 3,
  explanation: "中野四葉は四女です。"
});

addQuestion({
  id: 377,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "映画『ゼンブ・オブ・トーキョー』で清水理央が演じた役名は？",
  choices: ["角村若菜", "門林萌絵", "花里深雪", "満武夢華"],
  answer: 1,
  explanation: "清水理央は角村若菜役です。"
});

addQuestion({
  id: 378,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "清水理央が出演した舞台『五等分の花嫁』は4期生全員で出演した舞台である。○か×か？",
  choices: ["○", "×", "途中参加", "一部のみ出演"],
  answer: 1,
  explanation: "4期生11人全員が出演しました。"
});

addQuestion({
  id: 379,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "清水理央がフロント入りした『絶対的第六感』で初めて表題曲フロント入りした4期生は何人？",
  choices: ["2人", "3人", "4人", "5人"],
  answer: 3,
  explanation: "正源司陽子・藤嶌果歩・宮地すみれ・清水理央の4人です。"
});

addQuestion({
  id: 380,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "清水理央が出演した映画『ゼンブ・オブ・トーキョー』の公開年は？",
  choices: ["2023年", "2024年", "2025年", "2026年"],
  answer: 2,
  explanation: "映画『ゼンブ・オブ・トーキョー』は2024年公開です。"
});

addQuestion({
  id: 381,
  genre: "member",
  difficulty: EASY,
  year: 2022,
  question: "平尾帆夏が日向坂46に加入した期は？",
  choices: ["3期生", "4期生", "5期生", "坂道研修生"],
  answer: 2,
  explanation: "平尾帆夏は4期生です。"
});

addQuestion({
  id: 382,
  genre: "member",
  difficulty: EASY,
  year: 2022,
  question: "平尾帆夏が加入したオーディションは？",
  choices: ["坂道合同オーディション", "日向坂46 新メンバー募集オーディション", "坂道研修生オーディション", "Seed & Flowerオーディション"],
  answer: 2,
  explanation: "日向坂46 新メンバー募集オーディションで加入しました。"
});

addQuestion({
  id: 383,
  genre: "member",
  difficulty: EASY,
  year: 2022,
  question: "平尾帆夏が4期生としてお披露目された年は？",
  choices: ["2021年", "2022年", "2023年", "2024年"],
  answer: 2,
  explanation: "4期生は2022年にお披露目されました。"
});

addQuestion({
  id: 384,
  genre: "member",
  difficulty: EASY,
  year: 2023,
  question: "平尾帆夏が初めて参加した表題シングルは？",
  choices: ["月と星が踊るMidnight", "One choice", "Am I ready?", "君はハニーデュー"],
  answer: 2,
  explanation: "9thシングル『One choice』が初参加の表題シングルです。"
});

addQuestion({
  id: 385,
  genre: "member",
  difficulty: EASY,
  year: 2023,
  question: "平尾帆夏が出演した舞台『五等分の花嫁』で演じた役は？",
  choices: ["中野一花", "中野二乃", "中野三玖", "中野五月"],
  answer: 2,
  explanation: "平尾帆夏は中野二乃役を演じました。"
});

addQuestion({
  id: 386,
  genre: "member",
  difficulty: EASY,
  year: 2023,
  question: "平尾帆夏が出演した舞台『五等分の花嫁』の会場は？",
  choices: ["品川プリンスホテル ステラボール", "天王洲 銀河劇場", "明治座", "東京国際フォーラム"],
  answer: 1,
  explanation: "品川プリンスホテル ステラボールで上演されました。"
});

addQuestion({
  id: 387,
  genre: "member",
  difficulty: MIDDLE,
  year: 2024,
  question: "平尾帆夏が出演した映画『ゼンブ・オブ・トーキョー』で演じた役名は？",
  choices: ["羽川恵", "桐井智紗", "有川凛", "角村若菜"],
  answer: 3,
  explanation: "平尾帆夏は有川凛役を演じました。"
});

addQuestion({
  id: 388,
  genre: "member",
  difficulty: MIDDLE,
  year: 2024,
  question: "映画『ゼンブ・オブ・トーキョー』の公開年は？",
  choices: ["2023年", "2024年", "2025年", "2026年"],
  answer: 2,
  explanation: "映画『ゼンブ・オブ・トーキョー』は2024年公開です。"
});

addQuestion({
  id: 389,
  genre: "member",
  difficulty: MIDDLE,
  year: 2024,
  question: "映画『ゼンブ・オブ・トーキョー』で有川凛は何年生の修学旅行生？",
  choices: ["高校1年生", "高校2年生", "高校3年生", "中学3年生"],
  answer: 2,
  explanation: "高校2年生の修学旅行生という設定です。"
});

addQuestion({
  id: 390,
  genre: "member",
  difficulty: MIDDLE,
  year: 2023,
  question: "平尾帆夏が初参加した『One choice』のセンターは？",
  choices: ["加藤史帆", "小坂菜緒", "金村美玖", "上村ひなの"],
  answer: 1,
  explanation: "『One choice』のセンターは加藤史帆です。"
});

addQuestion({
  id: 391,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "平尾帆夏が出演した舞台『五等分の花嫁』で演じた中野二乃は五つ子の何女？",
  choices: ["長女", "次女", "三女", "五女"],
  answer: 2,
  explanation: "中野二乃は次女です。"
});

addQuestion({
  id: 392,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "平尾帆夏が出演した舞台『五等分の花嫁』は何人の4期生が出演した舞台？",
  choices: ["5人", "8人", "10人", "11人"],
  answer: 4,
  explanation: "4期生11人全員が出演しました。"
});

addQuestion({
  id: 393,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "平尾帆夏が出演した『ゼンブ・オブ・トーキョー』で主演を務めた期は？",
  choices: ["2期生", "3期生", "4期生", "5期生"],
  answer: 3,
  explanation: "主演は4期生11人です。"
});

addQuestion({
  id: 394,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "映画『ゼンブ・オブ・トーキョー』の舞台となった都市は？",
  choices: ["大阪", "京都", "東京", "横浜"],
  answer: 3,
  explanation: "東京を巡る修学旅行が舞台です。"
});

addQuestion({
  id: 395,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "平尾帆夏が初参加した『One choice』は何枚目シングル？",
  choices: ["8枚目", "9枚目", "10枚目", "11枚目"],
  answer: 2,
  explanation: "『One choice』は9枚目シングルです。"
});

addQuestion({
  id: 396,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "『One choice』で平尾帆夏が初めて表題曲に参加した時のキャプテンは？",
  choices: ["加藤史帆", "佐々木久美", "齊藤京子", "佐々木美玲"],
  answer: 2,
  explanation: "当時のキャプテンは佐々木久美です。"
});

addQuestion({
  id: 397,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "平尾帆夏が演じた有川凛が登場する作品名は？",
  choices: ["五等分の花嫁", "ゼンブ・オブ・トーキョー", "幕が上がる", "声春っ！"],
  answer: 2,
  explanation: "有川凛は『ゼンブ・オブ・トーキョー』の登場人物です。"
});

addQuestion({
  id: 398,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "平尾帆夏が出演した舞台『五等分の花嫁』は原作何作品の舞台化？",
  choices: ["漫画", "小説", "映画", "アニメオリジナル"],
  answer: 1,
  explanation: "漫画『五等分の花嫁』の舞台化作品です。"
});

addQuestion({
  id: 399,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "映画『ゼンブ・オブ・トーキョー』で平尾帆夏が演じた有川凛は修学旅行で訪れる都市はどこ？",
  choices: ["横浜", "東京", "大阪", "京都"],
  answer: 2,
  explanation: "修学旅行で東京を巡る物語です。"
});

addQuestion({
  id: 400,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "平尾帆夏が出演した映画『ゼンブ・オブ・トーキョー』の公開年は？",
  choices: ["2023年", "2024年", "2025年", "2026年"],
  answer: 2,
  explanation: "映画『ゼンブ・オブ・トーキョー』は2024年公開です。"
});

addQuestion({
  id: 401,
  genre: "member",
  difficulty: EASY,
  year: 2022,
  question: "平岡海月が日向坂46に加入した期は？",
  choices: ["3期生", "4期生", "5期生", "坂道研修生"],
  answer: 2,
  explanation: "平岡海月は4期生です。"
});

addQuestion({
  id: 402,
  genre: "member",
  difficulty: EASY,
  year: 2022,
  question: "平岡海月が加入したオーディションは？",
  choices: ["坂道合同オーディション", "日向坂46 新メンバー募集オーディション", "坂道研修生オーディション", "Seed & Flowerオーディション"],
  answer: 2,
  explanation: "日向坂46 新メンバー募集オーディションで加入しました。"
});

addQuestion({
  id: 403,
  genre: "member",
  difficulty: EASY,
  year: 2022,
  question: "平岡海月が4期生としてお披露目された年は？",
  choices: ["2021年", "2022年", "2023年", "2024年"],
  answer: 2,
  explanation: "4期生は2022年にお披露目されました。"
});

addQuestion({
  id: 404,
  genre: "member",
  difficulty: EASY,
  year: 2023,
  question: "平岡海月が初めて参加した表題シングルは？",
  choices: ["月と星が踊るMidnight", "One choice", "Am I ready?", "君はハニーデュー"],
  answer: 2,
  explanation: "9thシングル『One choice』が初参加の表題シングルです。"
});

addQuestion({
  id: 405,
  genre: "member",
  difficulty: EASY,
  year: 2023,
  question: "平岡海月が出演した舞台『五等分の花嫁』で演じた役は？",
  choices: ["中野一花", "中野二乃", "中野三玖", "中野五月"],
  answer: 4,
  explanation: "平岡海月は中野五月役を演じました。"
});

addQuestion({
  id: 406,
  genre: "member",
  difficulty: EASY,
  year: 2023,
  question: "平岡海月が出演した舞台『五等分の花嫁』の会場は？",
  choices: ["品川プリンスホテル ステラボール", "天王洲 銀河劇場", "明治座", "東京国際フォーラム"],
  answer: 1,
  explanation: "品川プリンスホテル ステラボールで上演されました。"
});

addQuestion({
  id: 407,
  genre: "member",
  difficulty: MIDDLE,
  year: 2024,
  question: "平岡海月が出演した映画『ゼンブ・オブ・トーキョー』で演じた役名は？",
  choices: ["満武夢華", "有川凛", "角村若菜", "門林萌絵"],
  answer: 1,
  explanation: "平岡海月は満武夢華役を演じました。"
});

addQuestion({
  id: 408,
  genre: "member",
  difficulty: MIDDLE,
  year: 2024,
  question: "映画『ゼンブ・オブ・トーキョー』で満武夢華は何年生の修学旅行生？",
  choices: ["高校1年生", "高校2年生", "高校3年生", "中学3年生"],
  answer: 2,
  explanation: "高校2年生の修学旅行生という設定です。"
});

addQuestion({
  id: 409,
  genre: "member",
  difficulty: MIDDLE,
  year: 2023,
  question: "平岡海月が初参加した『One choice』のセンターは？",
  choices: ["加藤史帆", "小坂菜緒", "金村美玖", "上村ひなの"],
  answer: 1,
  explanation: "『One choice』のセンターは加藤史帆です。"
});

addQuestion({
  id: 410,
  genre: "member",
  difficulty: MIDDLE,
  year: 2024,
  question: "映画『ゼンブ・オブ・トーキョー』の舞台となった都市は？",
  choices: ["東京", "大阪", "京都", "横浜"],
  answer: 1,
  explanation: "東京を巡る修学旅行が舞台です。"
});

addQuestion({
  id: 411,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "平岡海月が出演した舞台『五等分の花嫁』で演じた中野五月は五つ子の何女？",
  choices: ["長女", "三女", "五女", "四女"],
  answer: 3,
  explanation: "中野五月は五女です。"
});

addQuestion({
  id: 412,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "平岡海月が出演した舞台『五等分の花嫁』は何人の4期生が出演した舞台？",
  choices: ["8人", "9人", "10人", "11人"],
  answer: 4,
  explanation: "4期生11人全員が出演しました。"
});

addQuestion({
  id: 413,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "平岡海月が出演した『ゼンブ・オブ・トーキョー』で主演を務めた期は？",
  choices: ["2期生", "3期生", "4期生", "5期生"],
  answer: 3,
  explanation: "主演は4期生11人です。"
});

addQuestion({
  id: 414,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "映画『ゼンブ・オブ・トーキョー』が公開された年は？",
  choices: ["2023年", "2024年", "2025年", "2026年"],
  answer: 2,
  explanation: "2024年公開です。"
});

addQuestion({
  id: 415,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "平岡海月が初参加した『One choice』は何枚目シングル？",
  choices: ["8枚目", "9枚目", "10枚目", "11枚目"],
  answer: 2,
  explanation: "『One choice』は9枚目シングルです。"
});

addQuestion({
  id: 416,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "『One choice』で平岡海月が初めて表題曲に参加した時のキャプテンは？",
  choices: ["加藤史帆", "佐々木久美", "齊藤京子", "佐々木美玲"],
  answer: 2,
  explanation: "当時のキャプテンは佐々木久美です。"
});

addQuestion({
  id: 417,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "平岡海月が演じた満武夢華が登場する作品名は？",
  choices: ["五等分の花嫁", "ゼンブ・オブ・トーキョー", "幕が上がる", "声春っ！"],
  answer: 2,
  explanation: "満武夢華は『ゼンブ・オブ・トーキョー』の登場人物です。"
});

addQuestion({
  id: 418,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "平岡海月が出演した舞台『五等分の花嫁』は原作何作品の舞台化？",
  choices: ["漫画", "小説", "映画", "アニメオリジナル"],
  answer: 1,
  explanation: "漫画『五等分の花嫁』の舞台化作品です。"
});

addQuestion({
  id: 419,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "平岡海月が出演した映画『ゼンブ・オブ・トーキョー』の物語の舞台はどこ？",
  choices: ["横浜", "東京", "大阪", "京都"],
  answer: 2,
  explanation: "修学旅行で東京を巡る物語です。"
});

addQuestion({
  id: 420,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "平岡海月が出演した映画『ゼンブ・オブ・トーキョー』の公開年は？",
  choices: ["2023年", "2024年", "2025年", "2026年"],
  answer: 2,
  explanation: "映画『ゼンブ・オブ・トーキョー』は2024年公開です。"
});

addQuestion({
  id: 421,
  genre: "member",
  difficulty: EASY,
  year: 2022,
  question: "小西夏菜実が日向坂46に加入した期は？",
  choices: ["3期生", "4期生", "5期生", "坂道研修生"],
  answer: 2,
  explanation: "小西夏菜実は4期生です。"
});

addQuestion({
  id: 422,
  genre: "member",
  difficulty: EASY,
  year: 2022,
  question: "小西夏菜実が加入したオーディションは？",
  choices: ["坂道合同オーディション", "日向坂46 新メンバー募集オーディション", "坂道研修生オーディション", "Seed & Flowerオーディション"],
  answer: 2,
  explanation: "日向坂46 新メンバー募集オーディションで加入しました。"
});

addQuestion({
  id: 423,
  genre: "member",
  difficulty: EASY,
  year: 2022,
  question: "小西夏菜実が4期生としてお披露目された年は？",
  choices: ["2021年", "2022年", "2023年", "2024年"],
  answer: 2,
  explanation: "4期生は2022年にお披露目されました。"
});

addQuestion({
  id: 424,
  genre: "member",
  difficulty: EASY,
  year: 2023,
  question: "小西夏菜実が初めて参加した表題シングルは？",
  choices: ["月と星が踊るMidnight", "One choice", "Am I ready?", "君はハニーデュー"],
  answer: 2,
  explanation: "9thシングル『One choice』が初参加の表題シングルです。"
});

addQuestion({
  id: 425,
  genre: "member",
  difficulty: EASY,
  year: 2023,
  question: "小西夏菜実の出身地は？",
  choices: ["大阪府", "兵庫県", "京都府", "奈良県"],
  answer: 2,
  explanation: "小西夏菜実は兵庫県出身です。"
});

addQuestion({
  id: 426,
  genre: "member",
  difficulty: EASY,
  year: 2022,
  question: "小西夏菜実の誕生日は？",
  choices: ["2004年8月15日", "2004年10月3日", "2004年11月12日", "2004年12月27日"],
  answer: 2,
  explanation: "小西夏菜実は2004年10月3日生まれです。"
});

addQuestion({
  id: 427,
  genre: "member",
  difficulty: MIDDLE,
  year: 2022,
  question: "小西夏菜実の血液型は？",
  choices: ["A型", "B型", "O型", "AB型"],
  answer: 1,
  explanation: "公式プロフィールではA型です。"
});

addQuestion({
  id: 428,
  genre: "member",
  difficulty: MIDDLE,
  year: 2022,
  question: "小西夏菜実の星座は？",
  choices: ["おとめ座", "てんびん座", "さそり座", "しし座"],
  answer: 2,
  explanation: "10月3日生まれなので、てんびん座です。"
});

addQuestion({
  id: 429,
  genre: "member",
  difficulty: MIDDLE,
  year: 2022,
  question: "小西夏菜実の身長は？",
  choices: ["162.5cm", "164.5cm", "166.5cm", "168.5cm"],
  answer: 3,
  explanation: "公式プロフィールの身長は166.5cmです。"
});

addQuestion({
  id: 430,
  genre: "member",
  difficulty: MIDDLE,
  year: 2024,
  question: "小西夏菜実が出演した映画『ゼンブ・オブ・トーキョー』に出演したメンバーの期は？",
  choices: ["2期生", "3期生", "4期生", "5期生"],
  answer: 3,
  explanation: "映画には4期生11人が出演しました。"
});

addQuestion({
  id: 431,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "映画『ゼンブ・オブ・トーキョー』の公開年は？",
  choices: ["2023年", "2024年", "2025年", "2026年"],
  answer: 2,
  explanation: "映画『ゼンブ・オブ・トーキョー』は2024年公開です。"
});

addQuestion({
  id: 432,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "小西夏菜実が初参加した『One choice』のセンターは？",
  choices: ["加藤史帆", "小坂菜緒", "金村美玖", "上村ひなの"],
  answer: 1,
  explanation: "『One choice』のセンターは加藤史帆です。"
});

addQuestion({
  id: 433,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "小西夏菜実が初参加した『One choice』は何枚目シングル？",
  choices: ["8枚目", "9枚目", "10枚目", "11枚目"],
  answer: 2,
  explanation: "『One choice』は9枚目シングルです。"
});

addQuestion({
  id: 434,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "『One choice』発売時の日向坂46キャプテンは？",
  choices: ["加藤史帆", "佐々木久美", "齊藤京子", "佐々木美玲"],
  answer: 2,
  explanation: "当時のキャプテンは佐々木久美です。"
});

addQuestion({
  id: 435,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "小西夏菜実が出演した舞台『五等分の花嫁』に出演した4期生は合計何人？",
  choices: ["8人", "9人", "10人", "11人"],
  answer: 4,
  explanation: "4期生11人全員が出演しました。"
});

addQuestion({
  id: 436,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "舞台『五等分の花嫁』の上演会場は？",
  choices: ["天王洲 銀河劇場", "品川プリンスホテル ステラボール", "明治座", "東京国際フォーラム"],
  answer: 2,
  explanation: "品川プリンスホテル ステラボールで上演されました。"
});

addQuestion({
  id: 437,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "映画『ゼンブ・オブ・トーキョー』の舞台となった都市は？",
  choices: ["大阪", "京都", "東京", "横浜"],
  answer: 3,
  explanation: "東京を巡る修学旅行が舞台です。"
});

addQuestion({
  id: 438,
  genre: "member",
  difficulty: HARD,
  year: 2022,
  question: "小西夏菜実は日向坂46の何期生として加入した？",
  choices: ["1期生", "2期生", "3期生", "4期生"],
  answer: 4,
  explanation: "小西夏菜実は4期生として加入しました。"
});

addQuestion({
  id: 439,
  genre: "member",
  difficulty: HARD,
  year: 2022,
  question: "小西夏菜実がお披露目されたのは4期生何人の一員？",
  choices: ["10人", "11人", "12人", "13人"],
  answer: 2,
  explanation: "4期生は11人でお披露目されました。"
});

addQuestion({
  id: 440,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "小西夏菜実が出演した映画『ゼンブ・オブ・トーキョー』は4期生にとって初の何作品？",
  choices: ["主演映画", "主演ドラマ", "主演舞台", "主演バラエティ"],
  answer: 1,
  explanation: "4期生11人全員が主演を務めた初めての映画作品です。"
});

addQuestion({
  id: 441,
  genre: "member",
  difficulty: EASY,
  year: 2022,
  question: "竹内希来里が日向坂46に加入した期は？",
  choices: ["3期生", "4期生", "5期生", "坂道研修生"],
  answer: 2,
  explanation: "竹内希来里は4期生です。"
});

addQuestion({
  id: 442,
  genre: "member",
  difficulty: EASY,
  year: 2022,
  question: "竹内希来里が加入したオーディションは？",
  choices: ["坂道合同オーディション", "日向坂46 新メンバー募集オーディション", "坂道研修生オーディション", "Seed & Flowerオーディション"],
  answer: 2,
  explanation: "日向坂46 新メンバー募集オーディションで加入しました。"
});

addQuestion({
  id: 443,
  genre: "member",
  difficulty: EASY,
  year: 2022,
  question: "竹内希来里が4期生としてお披露目された年は？",
  choices: ["2021年", "2022年", "2023年", "2024年"],
  answer: 2,
  explanation: "4期生は2022年にお披露目されました。"
});

addQuestion({
  id: 444,
  genre: "member",
  difficulty: EASY,
  year: 2023,
  question: "竹内希来里が初めて参加した表題シングルは？",
  choices: ["月と星が踊るMidnight", "One choice", "Am I ready?", "君はハニーデュー"],
  answer: 2,
  explanation: "9thシングル『One choice』が初参加の表題シングルです。"
});

addQuestion({
  id: 445,
  genre: "member",
  difficulty: EASY,
  year: 2022,
  question: "竹内希来里の出身地は？",
  choices: ["広島県", "岡山県", "山口県", "愛媛県"],
  answer: 1,
  explanation: "竹内希来里は広島県出身です。"
});

addQuestion({
  id: 446,
  genre: "member",
  difficulty: EASY,
  year: 2022,
  question: "竹内希来里の誕生日は？",
  choices: ["2004年1月20日", "2004年2月20日", "2004年3月20日", "2004年4月20日"],
  answer: 2,
  explanation: "竹内希来里は2004年2月20日生まれです。"
});

addQuestion({
  id: 447,
  genre: "member",
  difficulty: MIDDLE,
  year: 2022,
  question: "竹内希来里の星座は？",
  choices: ["みずがめ座", "うお座", "おひつじ座", "やぎ座"],
  answer: 2,
  explanation: "2月20日生まれなので、うお座です。"
});

addQuestion({
  id: 448,
  genre: "member",
  difficulty: MIDDLE,
  year: 2022,
  question: "竹内希来里は4期生何人の一員として加入した？",
  choices: ["10人", "11人", "12人", "13人"],
  answer: 2,
  explanation: "4期生は11人です。"
});

addQuestion({
  id: 449,
  genre: "member",
  difficulty: MIDDLE,
  year: 2023,
  question: "竹内希来里が初参加した『One choice』のセンターは？",
  choices: ["加藤史帆", "小坂菜緒", "金村美玖", "上村ひなの"],
  answer: 1,
  explanation: "『One choice』のセンターは加藤史帆です。"
});

addQuestion({
  id: 450,
  genre: "member",
  difficulty: MIDDLE,
  year: 2023,
  question: "『One choice』は日向坂46の何枚目シングル？",
  choices: ["8枚目", "9枚目", "10枚目", "11枚目"],
  answer: 2,
  explanation: "『One choice』は9枚目シングルです。"
});

addQuestion({
  id: 451,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "竹内希来里が出演した映画『ゼンブ・オブ・トーキョー』に出演したメンバーの期は？",
  choices: ["2期生", "3期生", "4期生", "5期生"],
  answer: 3,
  explanation: "映画には4期生11人が出演しました。"
});

addQuestion({
  id: 452,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "映画『ゼンブ・オブ・トーキョー』の公開年は？",
  choices: ["2023年", "2024年", "2025年", "2026年"],
  answer: 2,
  explanation: "映画『ゼンブ・オブ・トーキョー』は2024年公開です。"
});

addQuestion({
  id: 453,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "映画『ゼンブ・オブ・トーキョー』の舞台となった都市は？",
  choices: ["大阪", "京都", "東京", "横浜"],
  answer: 3,
  explanation: "東京を巡る修学旅行が舞台です。"
});

addQuestion({
  id: 454,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "竹内希来里が出演した舞台『五等分の花嫁』は何人の4期生が出演した舞台？",
  choices: ["8人", "9人", "10人", "11人"],
  answer: 4,
  explanation: "4期生11人全員が出演しました。"
});

addQuestion({
  id: 455,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "舞台『五等分の花嫁』の上演会場は？",
  choices: ["天王洲 銀河劇場", "品川プリンスホテル ステラボール", "明治座", "東京国際フォーラム"],
  answer: 2,
  explanation: "品川プリンスホテル ステラボールで上演されました。"
});

addQuestion({
  id: 456,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "竹内希来里が初参加した『One choice』発売時の日向坂46キャプテンは？",
  choices: ["加藤史帆", "佐々木久美", "齊藤京子", "佐々木美玲"],
  answer: 2,
  explanation: "当時のキャプテンは佐々木久美です。"
});

addQuestion({
  id: 457,
  genre: "member",
  difficulty: HARD,
  year: 2022,
  question: "竹内希来里は日向坂46の何期生として加入した？",
  choices: ["1期生", "2期生", "3期生", "4期生"],
  answer: 4,
  explanation: "竹内希来里は4期生です。"
});

addQuestion({
  id: 458,
  genre: "member",
  difficulty: HARD,
  year: 2022,
  question: "竹内希来里がお披露目された4期生は合計何人？",
  choices: ["10人", "11人", "12人", "13人"],
  answer: 2,
  explanation: "4期生は11人でお披露目されました。"
});

addQuestion({
  id: 459,
  genre: "member",
  difficulty: HARD,
  year: 2024,
  question: "映画『ゼンブ・オブ・トーキョー』は4期生にとって初の何作品？",
  choices: ["主演映画", "主演ドラマ", "主演舞台", "主演バラエティ"],
  answer: 1,
  explanation: "4期生11人全員が主演を務めた初めての映画作品です。"
});

addQuestion({
  id: 460,
  genre: "member",
  difficulty: HARD,
  year: 2023,
  question: "竹内希来里が初参加した『One choice』の発売年は？",
  choices: ["2022年", "2023年", "2024年", "2025年"],
  answer: 2,
  explanation: "『One choice』は2023年発売です。"
});


/* ==========================================
   HinataQuiz COMPLETE EDITION v1.0
   FINAL SECTION（固定版）
========================================== */

/* ===== 年一覧 ===== */
const YEARS = [
  2016,2017,2018,2019,2020,
  2021,2022,2023,2024,2025,2026
];

/* ===== クイズモード ===== */
const QUIZ_MODES = Object.freeze({
  NORMAL: "normal",
  RANDOM: "random",
  YEAR: "year",
  GENRE: "genre",
  DIFFICULTY: "difficulty",
  TIME_ATTACK: "time_attack",
  CHALLENGE100: "challenge100",
  IMAGE: "image",
  REVIEW: "review"
});

/* ===== タイムアタック ===== */
const TIME_ATTACK = Object.freeze({
  secondsPerQuestion: 15,
  totalQuestions: 30
});

/* ===== 100問チャレンジ ===== */
const CHALLENGE100 = Object.freeze({
  totalQuestions: 100
});

/* ==========================================
   共通関数
========================================== */

function shuffleQuestions(array){
  const copy=[...array];

  for(let i=copy.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [copy[i],copy[j]]=[copy[j],copy[i]];
  }

  return copy;
}

function filterQuestions({
  genre=null,
  year=null,
  difficulty=null
}={}){

  return QUESTIONS.filter(q=>{

    if(genre && q.genre!==genre) return false;
    if(year && q.year!==year) return false;
    if(difficulty && q.difficulty!==difficulty) return false;

    return true;

  });

}

function getRandomQuestions(count,filters={}){

  const pool=shuffleQuestions(filterQuestions(filters));

  return pool.slice(0,Math.min(count,pool.length));

}

/* ==========================================
   クイズ生成
========================================== */

function getRandomQuiz(count=20){
  return getRandomQuestions(count);
}

function getYearQuiz(year,count=20){
  return getRandomQuestions(count,{year});
}

function getGenreQuiz(genre,count=20){
  return getRandomQuestions(count,{genre});
}

function getDifficultyQuiz(level,count=20){
  return getRandomQuestions(count,{difficulty:level});
}

function getTimeAttackQuiz(){
  return getRandomQuestions(TIME_ATTACK.totalQuestions);
}

function getChallenge100Quiz(){

  return shuffleQuestions(QUESTIONS).slice(
    0,
    Math.min(CHALLENGE100.totalQuestions,QUESTIONS.length)
  );

}

function getImageQuiz(count=20){

  const images=QUESTIONS.filter(q=>q.image);

  return shuffleQuestions(images).slice(
    0,
    Math.min(count,images.length)
  );

}

function getReviewQuiz(wrongIds=[]){
  return QUESTIONS.filter(q=>wrongIds.includes(q.id));
}

function getQuestionById(id){
  return QUESTIONS.find(q=>q.id===id);
}

/* ==========================================
   データ検証（起動時に実行）
========================================== */

(function validateDatabase(){

  const ids=new Set();

  const validGenres=[
    "member","single","song","album","center",
    "formation","mv","tv","live","other"
  ];

  const validDifficulty=["easy","middle","hard"];

  QUESTIONS.forEach(q=>{

    if(ids.has(q.id)){
      throw new Error(`ID重複：${q.id}`);
    }
    ids.add(q.id);

    if(![1,2,3,4].includes(q.answer)){
      throw new Error(`answer不正：ID ${q.id}`);
    }

    if(q.answer>q.choices.length){
      throw new Error(`choices不足：ID ${q.id}`);
    }

    if(!validGenres.includes(q.genre)){
      throw new Error(`genre不正：ID ${q.id}`);
    }

    if(!validDifficulty.includes(q.difficulty)){
      throw new Error(`difficulty不正：ID ${q.id}`);
    }

    if(!YEARS.includes(q.year)){
      throw new Error(`year不正：ID ${q.id}`);
    }

    if(typeof q.question!=="string" || !q.question.trim()){
      throw new Error(`question未設定：ID ${q.id}`);
    }

    if(!Array.isArray(q.choices) || q.choices.length!==4){
      throw new Error(`choicesは4択必須：ID ${q.id}`);
    }

  });

})();

/* ==========================================
   データベース情報
========================================== */

const QUIZ_DATABASE = Object.freeze({
  version:"HinataQuiz Complete Edition v1.0",
  get totalQuestions(){
    return QUESTIONS.length;
  }
});
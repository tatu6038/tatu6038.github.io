var temp; // 雑務用の仮入れ変数
var totalRounds; // 総ラウンド数
var itemsPerTurn; // ラウンド当たりの支給アイテム数
var itemsPerTurnIsRandom; // 支給アイテム数はランダムか否か。trueかfalse
var bullets; // 装弾数 (最大8)
var bulletsIsRandom; // 装弾数はランダムか否か。trueかfalse
var maxLifes; // 最大ライフ数 (最大6)
var maxLifesIsRandom; // 最大ライフ数はランダムか否か。trueかfalse
var enableItemsOnRound1; // 1ラウンド目からアイテムを有効にするか否か。1か0から処理でtrueかfalse
var current1pLifes; // 1pの現在ライフ (最大6)
var current2pLifes; // 2pの現在ライフ (最大6)
var items1p = []; // 1pの所持アイテム (最大8)
var items2p = []; // 2pの所持アイテム (最大8)

function newgame() {
    // 総ラウンド数、装弾数、支給アイテム数の取得
    totalRounds = Number(document.getElementById('totalRoundsResult').value);
    itemsPerTurn = Number(document.getElementById('itemsPerTurnResult').value);
    bullets = Number(document.getElementById('bulletsResult').value);
    // ランダム化が有効か無効か
    if(itemsPerTurn===0) {itemsPerTurnIsRandom=true;}else{itemsPerTurnIsRandom=false;}
    if(bullets===0) {bulletsIsRandom=true;}else{bulletsIsRandom=false;}
}
function gunReloading() {
}
function getRandomItem() {
    temp = random1to(4);
    switch (temp) {
        case 1:
            // タバコ処理
            break;
        case 2:
            // ビール処理
            break;
        case 3:
            // ナイフ処理
            break;
        case 4:
            // ルーペ処理
            break;
        case 5:
            // 手錠処理;
        default:
            console.alart("アイテムに割り当てられていない値");
            break;
    }
}
function random1to(maximum) {
    return Math.floor(Math.random() * maximum + 1);
}
// 1~引数の値のランダムな値を返す
// getRandomItem()関数ではタバコ、ビール、ナイフ、ルーペ、手錠
function randomNumTool(inputId, resultId) {
    document.getElementById(resultId).value = random0to(Number(document.getElementById(inputId).value));
} // サイト付属ランダム数字生成ツール
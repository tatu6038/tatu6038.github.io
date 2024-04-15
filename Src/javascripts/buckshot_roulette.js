var temp; // 雑務用の仮入れ変数
function newgame() {
}
function gunReloading() {
}

function getRandomItem() {
    temp = random0to(4);
    switch (temp) {
        case 0:
            // タバコ処理
            break;
        case 1:
            // ビール処理
            break;
        case 2:
            // ナイフ処理
            break;
        case 3:
            // ルーペ処理
            break;
        case 4:
            // 手錠処理;
        default:
            console.alart("アイテムに割り当てられていない値");
            break;
    }
}
function random0to(maximum) {
    return Math.floor(Math.random*(maximum + 1));
}
// 0~4のランダムな値を返す
// タバコ、ビール、ナイフ、ルーペ、手錠
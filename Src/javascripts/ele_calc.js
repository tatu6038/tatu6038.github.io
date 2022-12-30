var numOut = 0;
var sym = "none";
var dot = 0;
var decCnt = 0;
var numAff = 0;
let output = document.getElementById("txt");
function num(num) {
    switch (num) {
        case 'ac':
            numOut = 0;
            sym = "none";
            dot = 0;
            decCnt = 0;
            numAff = 0;
            output.textContent = numOut;
            break;
        case 'add':
        case 'sub':
        case 'mul':
        case 'div':
            switch (num) {
                case 'add':
                    sym = "+";
                    break;
                case 'sub':
                    sym = "-";
                    break;
                case 'mul':
                    sym = "×";
                    break;
                case 'div':
                    sym = "÷";
                    break;
            }
            numAff = 0;
            dot = 0;
            decCnt = 0;
            output.textContent = numOut + " " + " " + sym;
            break;
        case 'dot':
            dot = 1;
            break;
        case 'res':
            switch (sym) {
                case "+":
                    numOut += numAff;
                    break;
                case "-":
                    numOut -= numAff;
                    break;
                case "×":
                    numOut *= numAff;
                    break;
                case "÷":
                    numOut /= numAff;
                    break;
            }
            dot = 0;
            decCnt = 0;
            sym = "none";
            numAff = 0;
            output.textContent = numOut;
            break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 0:
            if (sym === "none") {
                if (dot === 1) {
                    decCnt += 1;
                    numOut = numOut*10**decCnt + num;
                    numOut = numOut/10**decCnt;
                    output.textContent = numOut;
                } else {
                    numOut = numOut*10 + num;
                    output.textContent = numOut;
                }
            } else {
                if (dot === 1) {
                    decCnt += 1;
                    numAff = numAff*10**decCnt + num;
                    numAff = numAff/10**decCnt;
                } else {
                    numAff = numAff*10 + num;
                }
                output.textContent = numOut + " " + sym + " " + numAff;
            }
            break;
        default:
            output.textContent = "🐟えら<゜)))彡";
            numOut = 0;
            sym = "none";
            dot = 0;
            decCnt = 0;
            numAff = 0;
            console.log("不明な入力がありました。ACと同様の操作を行います。");
            break;
    }
}
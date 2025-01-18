
function random2Number(maxNumber, minNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
}

let number2guess = random2Number(1, 10);
let count = 0;

function guessNumber() {
    // 取得當前輸入的數字
    let number = Number(document.getElementById("guessField").value);

    // 顯示次數
    count++;
    document.getElementById("showCount").innerHTML = count;

    // 判斷是否猜對
    const showResultElement = document.getElementById("showResult");
    
    if (number === number2guess) {
        showResultElement.innerHTML = `恭喜你猜對了！ (本輪總猜了 ${count} 次！)`;
        number2guess = random2Number(1, 10);
        count = 0;
        document.getElementById("showCount").innerHTML = count;
    } else if (number > number2guess) {
        showResultElement.innerHTML = "猜錯了！請猜小一點！";
    } else if (number < number2guess) {
        showResultElement.innerHTML = "猜錯了！請猜大一點！";
    } else {
        showResultElement.innerHTML = "請輸入數字！";
    }
}
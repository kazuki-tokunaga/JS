// インスタンスの生成
let xhr = new XMLHttpRequest();

// 通信の設定
xhr.open("GET", "./data.json");
xhr.responseType = "json";

// レスポンスの受信
xhr.onload = function () {
    // divタグのDOM要素を取得 
    let div1 = document.getElementById("element1");
    let div2 = document.getElementById("element2");

    // 非同期通信で受け取ったdata.jsonの値をdivタグのtextContentに代入
    div1.textContent = this.response["name"];
    div2.textContent = this.response["age"];
}

// リクエストの送信
xhr.send();
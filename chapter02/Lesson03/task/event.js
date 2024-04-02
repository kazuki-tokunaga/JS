//1
let btn = document.getElementById("btn");
let count = 0;
let message = document.getElementById("message");
btn.addEventListener("click", function() {
    count++;
    message.textContent = count + "回クリックされました"
});

//2
let list = document.getElementById('list');
let li = list.getElementsByTagName('li');
for (let i = 0; i < li.length; i++) {
    li[i].addEventListener('mouseover', function() {
        this.style.color = 'lightgreen';
    });
    li[i].addEventListener('mouseout', function() {
        this.style.color = 'white';
    });
}

//3
let keyDiv = document.getElementById('key');
window.addEventListener('keydown', function(event) {
    if (event.key === 'y') {
        let p = document.createElement('p');
        p.textContent = '「y」キーが入力されました。';
        keyDiv.appendChild(p);
    }
});
/* 模範解答
document.addEventListener('keydown', function(event) {
    if (event.key === 'y') {
        let p = document.createElement('p');
        p.textContent = '「y」キーが入力されました。';
        document.getElementById('key').appendChild(p);
    }
});
windowオブジェクトではウィンドウ全体でイベントをリッスンするが、documentオブジェクトでは文書全体をリッスンする。
*/

//4
let input = document.getElementsByTagName('input');
for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('focus', function(){
        this.style.backgroundColor = 'purple';
    });
    input[i].addEventListener('blur', function(){
        this.style.backgroundColor = 'white';
    });
}

//5
let select = document.getElementById('select');
let text = document.getElementById('text');
select.addEventListener('change', function(){
    let value = select.options[select.selectedIndex].value;
    text.textContent = value;
});
/*模範解答
let select = document.getElementById("select");
select.addEventListener("change", function (event) {
    let div = document.getElementById("text");
    div.textContent = event.target.value;
});
function(event)のeventは発生したイベント情報を持つオブジェクト。
・target：イベントの種類を参照
・type：イベントが発生した要素を参照
・value：要素の値を参照
でevent.targetとなっているため「select」を参照する。
*/

//6
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function() {
    let p = document.createElement('p');
    p.textContent = '追加されました';
    p.addEventListener('mouseover', function() {
        p.textContent = 'カーソルが重なりました';
    });
    document.getElementById('result').appendChild(p);
});
/*
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function() {
    let p = document.createElement('p');
    p.textContent = '追加されました';

    p.addEventListener('mouseover', function() {
        p.textContent = 'カーソルが重なりました';
    });

    document.getElementById('result').appendChild(p);
});
*/

//Q1
/*
let p = document.getElementsByClassName("paragraph");
console.log(p[0].textContent);
*/
//模範解答
let p = $('.paragraph');
console.log(p.text());

//Q2
let box = $('#box').text('はじめてのjQuery');

//Q3
/*
let div = $('<div></div>');
let result = $('#id').text('追加されました');
div.append(result);
*/
//模範解答
let div = $('<div></div>');
console.log(div);
let result = $('#result');
div.text('追加されました');
result.append(div);

//Q4
let input = $('#input');
input.on('focus', function() {
    console.log('フォーカスされました');
});

//Q5
let button = $('button');
let count = 0;
button.on('click', function() {
    count++;
    console.log(count + '回クリックされました');
});

//Q6
/*
$.ajax({
    // 設定
    type: 'GET',
    url: 'user.json'
})
.done(function(response) {
    // 処理
    let name = response['name'];
    let age = response['age'];
    console.log("UserName: " + name);
    console.log("UserAge: " + age);
})
.fail(function() {
    // 今回はエラー処理は不要です。
});
*/
//模範解答
$.ajax({
    url: './user.json',
    type: 'get',
    dataType: 'json',
})
.done(function(response) {
    console.log('UserName: ' + response.name);
    console.log('UserAge: ' + response.age);
})
.fail(function() {
    // 今回はエラー処理は不要です
});
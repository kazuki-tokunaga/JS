let button = document.querySelector("button");

// clickイベントを登録します
button.addEventListener("click", function(){
  // div要素の中身は「clickされました」となります。
  
  //this.textContent = "clickされました";
  //this：押されたボタンを指す

  let el = document.querySelector("button");
  el.textContent = "clickされました";
});
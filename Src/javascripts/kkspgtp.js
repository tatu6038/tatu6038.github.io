function scerqet() {
  // Request password
  var password = prompt("この先へ進むにはパスワードが必要です。","パスワードを入力");
  // Test to check words(If here is word isn't half-lphabet or underbar, cause alert)
  if( /\W+/g.test(password) ) {
    alert("半角英数字、アンダーバーのみ入力可能です。");
  }
  // And if cancel is clicked, 
  else if( password != null ) {
    // ▼入力内容からファイル名を生成して移動
    location.href = password;
  }
}

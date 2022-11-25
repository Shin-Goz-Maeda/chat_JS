// 各要素DOM取得
const btn = document.getElementById('button');
const chat = document.getElementById('chat');
const MyMessageBox = document.getElementById('MyMessageBox');
const OtherMessageBox = document.getElementById('OtherMessageBox');

let isMyself = true;

function mySend() {
  // 入力されたテキストを取得
  const textarea = document.getElementById('textarea');
  let Message = textarea.value;
  
  // メッセージのdiv要素を生成
  const MessageBox = document.createElement('div');
  MessageBox.classList.add('MyMessageBox');

  // timeのdiv要素を生成
  const time = document.createElement('div');
  time.classList.add('time');

  // timeに現在の時刻を入れる
  time.textContent = showTime();

  // sentMessageのdiv要素を生成
  const sentMessage = document.createElement('div');

  // Messageのpを生成
  const myMessage = document.createElement('p');
  myMessage.classList.add('myMessage');

  // テキストをpに格納
  myMessage.textContent = Message;

  // 各要素を格納
  sentMessage.appendChild(myMessage);
  MessageBox.appendChild(time);
  MessageBox.appendChild(sentMessage);
  chat.appendChild(MessageBox);

  textarea.value = "";

  isMyself = false;
}


function otherSend() {
  // 入力されたテキストを取得
  const textarea = document.getElementById('textarea');
  let Message = textarea.value;
  
  // メッセージのdiv要素を生成
  const MessageBox = document.createElement('div');
  MessageBox.classList.add('OtherMessageBox');

  // timeのdiv要素を生成
  const time = document.createElement('div');
  time.classList.add('time');

  // timeに現在の時刻を入れる
  time.textContent = showTime();

  // sentMessageのdiv要素を生成
  const sentMessage = document.createElement('div');

  // Messageのpを生成
  const otherMessage = document.createElement('p');
  otherMessage.classList.add('otherMessage');

  // テキストをpに格納
  otherMessage.textContent = Message;

  // 各要素を格納
  sentMessage.appendChild(otherMessage);
  MessageBox.appendChild(time);
  MessageBox.appendChild(sentMessage);
  chat.appendChild(MessageBox);

  textarea.value = "";

  isMyself = true;
}

// 現在の時刻を取得
function showTime() {
  let now = new Date();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let month = now.getMonth();
  let day = now.getDate();
  return hour + ":" + minutes + " " + month + "/" + day;
}


// 送信ボタンクリック時にイベント発火
btn.addEventListener('click', function() {
  if (isMyself === true) {
    mySend();
  } else {
    otherSend();
  }
});
const tg = window.Telegram.WebApp;
tg.expand();                                      // fullscreen
const uid = tg.initDataUnsafe?.user?.id || 1;     // Telegram user id

function getCount(){ return Number(localStorage.getItem(`cnt_${uid}`)||0)}
function setCount(n){ localStorage.setItem(`cnt_${uid}`,n); showCount()}
function showCount(){ document.getElementById('count').textContent=`Ads watched: ${getCount()}`}
showCount();

function adFinished(){
  setCount(getCount()+1);
  // TODO: replace with Firebase call if you want server-side storage
}
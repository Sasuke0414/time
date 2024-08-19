const hour = document.querySelector("#hour");
const minut = document.querySelector("#minut");
const second = document.querySelector("#second");

function clock() {
  const hozirgiVaqt = new Date();

  let hr = hozirgiVaqt.getHours();
  let mn = hozirgiVaqt.getMinutes();
  let sd = hozirgiVaqt.getSeconds();

  hour.textContent = hr < 10 ? "0" + hr : hr;
  minut.textContent = mn < 10 ? "0" + mn : mn;
  second.textContent = sd < 10 ? "0" + sd : sd;
}

clock();

setInterval(clock, 1000);



let Hit = "";

let timer = 60;
let score = 0;

function addScore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

function makeb() {
  let bob = "";

  for (let i = 1; i <= 154; i++) {
    let rn = Math.floor(Math.random() * 10);
    bob += `<div id="bob" class="flex">${rn}</div>`;
  }
  document.querySelector("#bot").innerHTML = bob;
}
makeb();

function getRandam() {
  let rn = Math.floor(Math.random() * 10);
  Hit = document.querySelector("#Hit").textContent = rn;
}
getRandam();

function runTime() {
  let tim = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#Timer").textContent = timer;
    }
     else {
      clearInterval(tim);
      document.querySelector("#bot").textContent = "The End";
      document.querySelector("#bot").style.fontSize = "50px" 
      document.querySelector("#bot").style.fontWeight = "900" 
      document.querySelector("#bot").style.color = "green" 
    }
  }, 1000);
}
runTime();

document.querySelector("#bot").addEventListener("click", (data) => {
  let click = Number(data.target.textContent);
  if (Hit === click) {
    addScore();
    makeb();
    getRandam();
  }else{
    runTime();

  }
});

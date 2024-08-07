/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/
function nameG() {
  let ran = Math.random();
  let first, second, therd;

  if (ran < 0.33) {
    first = "Crazy";
  } else if (ran < 0.66 && ran >= 0.33) {
    first = "Amazing";
  } else {
    first = "Fire";
  }
  //------------------------------------
  ran = Math.random();
  if (ran < 0.33) {
    second = "Engine";
  } else if (ran < 0.66 && ran >= 0.33) {
    second = "Food";
  } else {
    second = "Garments";
  }
  //-------------------------------------------
  ran = Math.random();
  if (ran < 0.33) {
    therd = "Bros";
  } else if (ran < 0.66 && ran >= 0.33) {
    therd = "Limited";
  } else {
    therd = "Hub";
  }

  let a = ` ${first}  ${second}  ${therd}`;
  document.querySelector("p").innerText = a;
}

document.querySelector("#btn").addEventListener("click",function dj() {
    nameG()
})
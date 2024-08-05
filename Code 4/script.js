function inp() {
  let a = document.querySelector("#one").value;
  let b = document.querySelector("#two").value;
  let c = document.querySelector("#three").value;

  function result() {
    ot = eval(` ${a} ${b} ${c} `);
  }
  result();
  document.querySelector(".ot").value = ot;
}

document.querySelector("#bt").addEventListener("click", function re() {
  inp();
});

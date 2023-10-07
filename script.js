document.getElementById("table1").defaultChecked;
let cointabl = document.getElementById("cointable");
let giftcardtabl = document.getElementById("giftcardtable");
let swit1 = document.getElementById("switch1");
let swit2 = document.getElementById("switch2");

function displaytable1() {
  cointabl.style.display = "block";
  giftcardtabl.style.display = "none";
  swit1.style.backgroundColor = "black";
  swit1.style.color = "white";
  swit2.style.backgroundColor = "#f5f5f5";
  swit2.style.color = "black";
}

function displaytable2() {
  cointabl.style.display = "none";
  giftcardtabl.style.display = "block";
  swit2.style.backgroundColor = "black";
  swit2.style.color = "white";
  swit1.style.backgroundColor = "#f5f5f5";
  swit1.style.color = "black";
}

const bodyMain = document.querySelector("body");
bodyMain.style.padding = "50px";

const divTop = document.createElement("div");
divTop.classList.add("top-grid");
bodyMain.append(divTop);

const divUp = document.createElement("div");
divUp.textContent = "0";
divTop.append(divUp);

const divMainGrid = document.createElement("div");
divMainGrid.classList.add("main-grid");
bodyMain.append(divMainGrid);

const divGridSc = document.createElement("div");
divGridSc.classList.add("grid-scientific");
divMainGrid.append(divGridSc);

const arrSc = [
  "Rad | Deg",
  "X!",
  "Inv",
  "Sin",
  "In",
  "π",
  "cos",
  "log",
  "e",
  "tan",
  "√",
  "Ans",
  "Exp",
  "X^",
];

for (let a = 0; a < arrSc.length; a++) {
  createDiv(arrSc[a]);
}

const divGridNormal = document.createElement("div");
divGridNormal.classList.add("grid-normal");
divMainGrid.append(divGridNormal);

const arrNormal = [
  "(",
  ")",
  "%",
  "CE",
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "x",
  "1",
  "2",
  "3",
  "-",
  "0",
  ".",
  "=",
  "+",
];

for (let a = 0; a < arrNormal.length; a++) {
  createNormDiv(arrNormal[a]);
}

function createDiv(divName) {
  const divItem = document.createElement("div");
  divItem.classList.add("item");
  divItem.textContent = divName;
  divGridSc.append(divItem);
}

function createNormDiv(divName) {
  const divItem = document.createElement("div");
  divItem.classList.add("item");
  divItem.textContent = divName;
  divGridNormal.append(divItem);
}

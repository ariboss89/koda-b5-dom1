const bodyMain = document.querySelector("body");
bodyMain.style.display = "flex";
bodyMain.style.flexDirection = "column";
bodyMain.style.justifyContent = "center";
bodyMain.style.alignItems = "center";
bodyMain.style.padding = "50px";
bodyMain.style.minWidth = "500px";

const div = document.createElement("div");
div.setAttribute(
  "style",
  "display:flex;width:500px; min-width:500px; flex-direction:column; align-items:left; padding-left:50px;padding-right:50px;padding-top:50px; background-color:whitesmoke"
);
bodyMain.append(div);

function createForm() {
  const h1 = document.createElement("h1");
  h1.textContent = "FORM SURVEY PEROKOK";
  h1.setAttribute("style", "text-align:center");
  div.append(h1);
}

createForm();
insertLabel("Nama");
const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Input Fullname ");
input.setAttribute(
  "style",
  "display:block; margin-top:10px;margin-bottom:10px; width:100%"
);
div.append(input);

//umur
insertLabel("Umur");
const inputAge = document.createElement("input");
inputAge.setAttribute("type", "text");
inputAge.setAttribute("placeholder", "Input Usia ");
inputAge.setAttribute(
  "style",
  "display:block; margin-top:10px;margin-bottom:10px; width:100%"
);
div.append(inputAge);

//jenis kelamin
const label = document.createElement("label");
label.textContent = "Jenis Kelamin";
label.style.display = "block";
label.style.marginBottom = "10px";
div.append(label);

const divGender = document.createElement("section");
divGender.setAttribute(
  "style",
  "display:flex;width:500px; flex-direction:row;min-width:500px; align-items:center; padding-left:50px;padding-right:50px; background-color:whitesmoke"
);
bodyMain.append(divGender);

const labelLk = document.createElement("label");
labelLk.textContent = "Laki-Laki";
labelLk.style.display = "inline";
labelLk.setAttribute("for", "Laki-Laki");
labelLk.setAttribute("style", "display:inline;margin-bottom:10px; width:30%");
divGender.append(labelLk);

const radio = document.createElement("input");
radio.setAttribute("type", "radio");
radio.setAttribute("for", "Laki-Laki ");
radio.setAttribute("name", "gender");
radio.setAttribute("style", "display:inline;margin-bottom:10px; width:15%");
divGender.append(radio);

const labelP = document.createElement("label");
labelP.textContent = "Perempuan";
labelP.style.display = "inline";
labelP.setAttribute("for", "Perempuan");
labelP.setAttribute("style", "display:inline;margin-bottom:10px; width:30%");
divGender.append(labelP);
const radio2 = document.createElement("input");
radio2.setAttribute("type", "radio");
radio2.setAttribute("for", "Perempuan ");
radio2.setAttribute("name", "gender");
radio2.setAttribute("style", "display:inline;margin-bottom:10px; width:15%");
divGender.append(radio2);

//=========================

const divSelect = document.createElement("section");
divSelect.setAttribute(
  "style",
  "display:flex;width:500px; flex-direction:column;min-width:500px; align-items:left; padding-left:50px;padding-right:50px; background-color:whitesmoke;"
);
bodyMain.append(divSelect);

//select
const labelRokok = document.createElement("label");
labelRokok.textContent = "Apakah anda seorang perokok ?";
labelRokok.style.display = "block";
labelRokok.style.marginBottom = "10px";
divSelect.append(labelRokok);

const optSelect = document.createElement("select");
optSelect.selected = "Pilih Jawaban";
optSelect.name = "selectAnswer";
optSelect.value = "Pilih Jawaban";
optSelect.setAttribute(
  "style",
  "display:block; width:100%; margin-bottom:10px"
);
divSelect.append(optSelect);

for (let a = 0; a < 3; a++) {
  const opt = document.createElement("option");
  if (a == 0) {
    opt.selected = true;
    opt.disabled = true;
    opt.textContent = "Pilih Jawaban";
    opt.value = "-";
    optSelect.append(opt);
  } else if (a == 1) {
    opt.textContent = "Ya";
    opt.value = "Ya";
    optSelect.append(opt);
  } else {
    opt.textContent = "Tidak";
    opt.value = "Tidak";
    optSelect.append(opt);
  }
}

const lblBrand = document.createElement("label");
lblBrand.textContent = "Brand rokok yang digunakan ?";
lblBrand.style.display = "block";
lblBrand.style.marginBottom = "10px";
divSelect.append(lblBrand);

const divCheck = document.createElement("section");
divCheck.setAttribute(
  "style",
  "display:flex;width:500px; min-width:500px; flex-direction:row; justify-content:space-between; align-items:center; padding-left:50px;padding-right:50px; background-color:whitesmoke;"
);
bodyMain.append(divCheck);

let arrRokok = ["Dunhill", "Gudang Garam", "Marlboro", "Sampoerna", "Surya"];

for (let a = 0; a < arrRokok.length; a++) {
  insertCheckBox(arrRokok[a]);
  const lblBrand = document.createElement("label");
  lblBrand.textContent = arrRokok[a];
  lblBrand.style.display = "inline";
  lblBrand.style.marginBottom = "10px";
  lblBrand.style.marginTop = "10px";
  divCheck.append(lblBrand);
}

const divButton = document.createElement("section");
divButton.setAttribute(
  "style",
  "display:flex; flex-direction:row; justify-content:space-between; align-items:center; padding-left:50px;padding-right:50px; background-color:whitesmoke;min-width:500px;"
);
bodyMain.append(divButton);

const btnSubmit = document.createElement("button");
btnSubmit.name = "Submit";
btnSubmit.innerText = "Submit";
btnSubmit.setAttribute(
  "style",
  "display:block; width:100%; height:30px; margin-top:10px; margin-bottom:50px; border-radius:5px; background-color:#6045ec; color:white"
);
divButton.append(btnSubmit);

function insertLabel(lblName) {
  const label = document.createElement("label");
  label.textContent = lblName;
  label.setAttribute("for", lblName);
  label.setAttribute("style", "text-align:left;");
  div.append(label);
}

function insertCheckBox(inputName) {
  const check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  check.setAttribute("name", inputName);
  check.setAttribute("style", "display:inline");
  divCheck.append(check);
}

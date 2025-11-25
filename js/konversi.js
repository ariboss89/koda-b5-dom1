const form = document.querySelector("main > form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const mySpan = document.getElementById("spanId");
  const suhuCelcius = parseInt(event.target.suhuCelcius.value);
  const lblReamur = document.getElementById("suhuReamur");
  const lblFahrenheit = document.getElementById("suhuFahrenheit");
  const lblKelvin = document.getElementById("suhuKelvin");

  console.log(mySpan, "spannya");

  let msg =
    suhuCelcius == 0 || suhuCelcius == ""
      ? "Silahkan input suhu !"
      : suhuCelcius;

  if (msg == "Silahkan input suhu !") {
    mySpan.style.display = "block";
    lblReamur = 0;
    lblFahrenheit = 0;
    lblKelvin = 0;
  } else {
    mySpan.style.display = "none";

    const suhuReamur = (4 / 5) * suhuCelcius;
    lblReamur.textContent = suhuReamur;

    const suhuFahrenheit = (9 / 5) * suhuCelcius + 32;
    lblFahrenheit.innerText = suhuFahrenheit;

    // const suhuKelvin = suhuCelcius + 273.15;
    // lblKelvin.textContent = suhuKelvin;
  }
});

const red = document.getElementById("redLamp");
const yellow = document.getElementById("yellowLamp");
const green = document.getElementById("greenLamp");

// function setLight(color) {
//   if (color == "yellow") {
//     (red.style.backgroundColor = "darkgray"),
//       (yellow.style.backgroundColor = "yellow");
//   } else if (color == "green") {
//     (red.style.backgroundColor = "darkgray"),
//       (yellow.style.backgroundColor = "darkgray"),
//       (green.style.backgroundColor = "green");
//   } else {
//     (red.style.backgroundColor = "red"),
//       (yellow.style.backgroundColor = "darkgray"),
//       (green.style.backgroundColor = "darkgray");
//   }
// }

function showYellow() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(
        (red.style.backgroundColor = "darkgray"),
        (yellow.style.backgroundColor = "yellow")
      );
    }, 3000);
  });
}

function showGreen() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(
        (red.style.backgroundColor = "darkgray"),
        (yellow.style.backgroundColor = "darkgray"),
        (green.style.backgroundColor = "green")
      );
    }, 2000);
  });
}

function showRed() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(
        (red.style.backgroundColor = "red"),
        (yellow.style.backgroundColor = "darkgray"),
        (green.style.backgroundColor = "darkgray")
      );
    }, 3000);
  });
}

async function onOffTraffic() {
  try {
    let res = await showYellow();
    res = await showGreen();
    res = await showRed();
  } catch (error) {
    console.log(error);
  }
}

// function activateTrafficLight() {
//   setTimeout(() => {
//     res(setLight("yellow"));
//     setTimeout(() => {
//       res(setLight("green"));
//       setTimeout(() => {
//         res(setLight("red"));
//       }, 3000);
//     }, 2000);
//   }, 3000);
// }

// activateTrafficLight();

onOffTraffic();

setInterval(onOffTraffic, 9000);

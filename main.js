function zakaCalc() {
  let money = document.querySelector("input").value;
  let percentZaka = 0.025;
  let result;
  if (money <= 0) {
    document.querySelector("p").innerHTML = `invalid Input`;
  } else {
    result = money * percentZaka;
    document.querySelector("p").innerHTML = `${result.toFixed(2)}  Pounds`;
  }
}

document.body.onload = function () {
  document.querySelector("input").focus();
};

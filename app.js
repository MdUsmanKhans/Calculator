var displayInp = document.getElementById("displayInp");

function getBtnValue(val) {
  displayInp.value += val;
}

function calculateVal() {
  var val = displayInp.value;
  var ans = eval(val);
  displayInp.value = ans;
}

function clearVal() {
  displayInp.value = "";
}

function addZero(ii) {
    if (ii < 10) {
    ii = "0" + ii;
  }
    return ii;
  }
function timeAdd() {
  var dateT = new Date();
  var hourT = addZero(dateT.getHours());
  var minuteT = addZero(dateT.getMinutes());
  var secondT = addZero(dateT.getSeconds());
  xT = " " + hourT + ":" + minuteT + ":" + secondT;
}
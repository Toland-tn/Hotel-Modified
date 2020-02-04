x4 = 0
//when words are put into input be on look out for enter key
var dataOfInput4 = document.getElementById('testText4')
//when a key had been pressed and it is the enter key run the addme function
dataOfInput4.addEventListener("keydown", dataEnterKey4)

function dataEnterKey4() {
  if (event.keyCode === 13) {
    addme4()
  }
}
//show dropdown content and also indicate it being shown
function openSesame4() {
  document.getElementById("myDropdown4").classList.toggle("show4");
  document.getElementById('testText4').focus()
}
//old addme function from hotel project
function addme4() {
  if (x4 < 4) {
    //Create new li element
    var newList = document.createElement("li");
    //Combine user input that has been turned into a node to newList
    newList.appendChild(document.createTextNode(document.getElementById('testText4').value));
    var inputToStorage = document.getElementById('testText4').value
    //Create position variable to set ol to 0
    var position = document.getElementById("List4");
    //Combine newList to position
    position.appendChild(newList);
    document.getElementById('testText4').value = ""
    x4++
    localStorage.setItem('localLi4', inputToStorage)
  }
}
//when i click on the list...
document.getElementById("List4").addEventListener("click", function (liTag) {
  //find what i clicked on...
  var rlist = liTag.target;
  //if what i clicked on becomes "LI" when uppercasing it then...
  if (rlist.tagName.toUpperCase() == "LI") {
    //remove the li that was clicked on and remove it from the parent which is ol
    rlist.parentNode.removeChild(rlist);
    x--
  }
});
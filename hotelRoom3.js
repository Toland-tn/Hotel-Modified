x3 = 0
//when words are put into input be on look out for enter key
var dataOfInput3 = document.getElementById('testText3')
//when a key had been pressed and it is the enter key run the addme function
dataOfInput3.addEventListener("keydown", dataEnterKey3)

function dataEnterKey3() {
  if (event.keyCode === 13) {
    addme3()
  }
}
//show dropdown content and also indicate it being shown
function openSesame3() {
  document.getElementById("myDropdown3").classList.toggle("show3");
  document.getElementById('testText3').focus()
}
//old addme function from hotel project
function addme3() {
  if (x3 < 4) {
    //Create new li element
    var newList = document.createElement("li");
    //Combine user input that has been turned into a node to newList
    newList.appendChild(document.createTextNode(document.getElementById('testText3').value));
    var inputToStorage = document.getElementById('testText3').value
    //Create position variable to set ol to 0
    var position = document.getElementById("List3");
    //Combine newList to position
    position.appendChild(newList);
    document.getElementById('testText3').value = ""
    x3++
    localStorage.setItem('localLi3', inputToStorage)
  }
}
//when i click on the list...
document.getElementById("List3").addEventListener("click", function (liTag) {
  //find what i clicked on...
  var rlist = liTag.target;
  //if what i clicked on becomes "LI" when uppercasing it then...
  if (rlist.tagName.toUpperCase() == "LI") {
    //remove the li that was clicked on and remove it from the parent which is ol
    rlist.parentNode.removeChild(rlist);
    x--
  }
});
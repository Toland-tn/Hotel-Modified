x5 = 0
//when words are put into input be on look out for enter key
var dataOfInput5 = document.getElementById('testText5')
//when a key had been pressed and it is the enter key run the addme function
dataOfInput5.addEventListener("keydown", dataEnterKey5)

function dataEnterKey5() {
  if (event.keyCode === 13) {
    addme5()
  }
}
//show dropdown content and also indicate it being shown
function openSesame5() {
  document.getElementById("myDropdown5").classList.toggle("show5");
  document.getElementById('testText5').focus()
}
//old addme function from hotel project
function addme5() {
  if (x5 < 4) {
    //Create new li element
    var newList = document.createElement("li");
    //Combine user input that has been turned into a node to newList
    newList.appendChild(document.createTextNode(document.getElementById('testText5').value));
    var inputToStorage = document.getElementById('testText5').value
    //Create position variable to set ol to 0
    var position = document.getElementById("List5");
    //Combine newList to position
    position.appendChild(newList);
    document.getElementById('testText5').value = ""
    x5++
    localStorage.setItem('localLi5', inputToStorage)
  }
}
//when i click on the list...
document.getElementById("List5").addEventListener("click", function (liTag) {
  //find what i clicked on...
  var rlist = liTag.target;
  //if what i clicked on becomes "LI" when uppercasing it then...
  if (rlist.tagName.toUpperCase() == "LI") {
    //remove the li that was clicked on and remove it from the parent which is ol
    rlist.parentNode.removeChild(rlist);
    x--
  }
});
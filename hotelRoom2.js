x2 = 0
//when words are put into input be on look out for enter key
var dataOfInput2 = document.getElementById('testText2')
//when a key had been pressed and it is the enter key run the addme function
dataOfInput2.addEventListener("keydown", dataEnterKey2)

function dataEnterKey2() {
  if (event.keyCode === 13) {
    addme2()
  }
}
//show dropdown content and also indicate it being shown
function openSesame2() {
  document.getElementById("myDropdown2").classList.toggle("show2");
  document.getElementById('testText2').focus()
}
//old addme function from hotel project
function addme2() {
  if (x2 < 4) {
    //Create new li element
    var newList = document.createElement("li");
    //Combine user input that has been turned into a node to newList
    newList.appendChild(document.createTextNode(document.getElementById('testText2').value));
    var inputToStorage = document.getElementById('testText2').value
    //Create position variable to set ol to 0
    var position = document.getElementById("List2");
    //Combine newList to position
    position.appendChild(newList);
    document.getElementById('testText2').value = ""
    x2++
    localStorage.setItem('localLi2', inputToStorage)
  }
}
//when i click on the list...
document.getElementById("List2").addEventListener("click", function (liTag) {
  //find what i clicked on...
  var rlist = liTag.target;
  //if what i clicked on becomes "LI" when uppercasing it then...
  if (rlist.tagName.toUpperCase() == "LI") {
    //remove the li that was clicked on and remove it from the parent which is ol
    rlist.parentNode.removeChild(rlist);
    x--
  }
});
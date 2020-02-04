x6 = 0
//when words are put into input be on look out for enter key
var dataOfInput6 = document.getElementById('testText6')
//when a key had been pressed and it is the enter key run the addme function
dataOfInput6.addEventListener("keydown", dataEnterKey6)

function dataEnterKey6() {
  if (event.keyCode === 13) {
    addme6()
  }
}
//show dropdown content and also indicate it being shown
function openSesame6() {
  document.getElementById("myDropdown6").classList.toggle("show6");
  document.getElementById('testText6').focus()
}
//old addme function from hotel project
function addme6() {
  if (x6 < 4) {
    //Create new li element
    var newList = document.createElement("li");
    //Combine user input that has been turned into a node to newList
    newList.appendChild(document.createTextNode(document.getElementById('testText6').value));
    var inputToStorage = document.getElementById('testText6').value
    //Create position variable to set ol to 0
    var position = document.getElementById("List6");
    //Combine newList to position
    position.appendChild(newList);
    document.getElementById('testText6').value = ""
    x6++
    localStorage.setItem('localLi6', inputToStorage)
  }
}
//when i click on the list...
document.getElementById("List6").addEventListener("click", function (liTag) {
  //find what i clicked on...
  var rlist = liTag.target;
  //if what i clicked on becomes "LI" when uppercasing it then...
  if (rlist.tagName.toUpperCase() == "LI") {
    //remove the li that was clicked on and remove it from the parent which is ol
    rlist.parentNode.removeChild(rlist);
    x--
  }
});
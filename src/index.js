function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

function myFunc(id) {
  var x = document.getElementById(id);
  var files = document.getElementById("Demo1");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    if (id != "Demo2") {
      x.previousElementSibling.className += " w3-purple";
    }
  } else {
    x.className = x.className.replace(" w3-show", "");
    files.className = files.className.replace(" w3-show", "");
    x.previousElementSibling.className = x.previousElementSibling.className.replace(
      " w3-purple",
      ""
    );
  }
}

// hide leftnav elements
document.getElementById("303Folder").style.display = "none";
document.getElementById("import").style.display = "none";
document.getElementById("myBtn").style.display = "none";

//show new folder on click
function addFolder() {
  document.getElementById("303Folder").style.display = "block";
}

function showSettings() {
  let x = document.getElementById("import")
  x.style.display === "none" ? x.style.display = "block" : x.style.display = "none"
}

function editFolderName(folderName, renameName) {
  const renameIco = document.getElementById(renameName);
  const newFolderButton = document.getElementById(folderName);

  renameIco.getAttribute("class") === "fa fa-pencil-square-o"
    ? (renameIco.setAttribute("class", "fa fa-check"),
      newFolderButton.setAttribute("contentEditable", "true"))
    : (renameIco.setAttribute("class", "fa fa-pencil-square-o"),
      newFolderButton.setAttribute("contentEditable", "false"));
}

function hideNotification() {
  document.getElementById("notification").style.display = "none";
}

doShare("Home");
function doShare(fileName) {
  var i;
  var x = document.getElementsByClassName("file");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x = document.getElementsByClassName("test");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" w3-light-grey", "");
  }
  document.getElementById(fileName).style.display = "block";
  event.currentTarget.className += " w3-light-grey";
}

var openTab = document.getElementById("firstTab");
openTab.click();

function sendMsg() {
    document.getElementById("myMsgBox").style.display = "block";
    var text1 = document.getElementById("textarea").value;
    document.getElementById("msgContent").innerHtml = text1;
  }
  
  function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
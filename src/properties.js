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

  $('.task-row').click(function ()
{
   $(this).find('input[type=checkbox]').prop("checked", !$(this).find('input[type=checkbox]').prop("checked"));
});

$('.check').click(function ()
{
   $(this).prop("checked", !$(this).prop("checked"));
});
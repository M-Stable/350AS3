function addMyFile(){
  $('<div class="homepage-folder"> <img src="../images/folderIcon.png"> <p style="text-align: center;">New folder</p></div>').insertBefore('.homepage-folder.plus-icon:first')
}

function uploadFile(){
  $('#upload_files').click();
}

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
{$(this).css({"text-decoration": "line-through"});
    var clicks = $(this).data('clicks');
    $(this).find('input[type=checkbox]').prop("checked", !$(this).find('input[type=checkbox]').prop("checked"));

    if (clicks) {
        $(this).css({"text-decoration": "none"});
    } else {
        $(this).css({"text-decoration": "line-through"});
    }
    $(this).data("clicks", !clicks);
});

$('.check').click(function ()
{
   $(this).prop("checked", !$(this).prop("checked"));
   var clicks = $(this).data('clicks');
   if (clicks) {
    $(this).css({"text-decoration": "none"});
} else {
    $(this).css({"text-decoration": "line-through"});
}
$(this).data("clicks", !clicks);
});

$( function() {
  $( "#datepicker" ).datepicker();
} );
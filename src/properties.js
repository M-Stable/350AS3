function addMyFile(){
  $('<div class="homepage-folder"> <img src="../images/folderIcon.png"> <p style="text-align: center;">New folder</p></div>').insertBefore('.homepage-folder.plus-icon:first')
}

function uploadFile(){
  $('#upload_files').click();
}

function copyText(){
  var copyText = document.getElementById("link");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

function sendMsg() {
    document.getElementById("myMsgBox").style.display = "block";
    var text1 = document.getElementById("textarea").value;
    document.getElementById("msgContent").innerHtml = text1;
  }
  
  function openNav() {
    if (document.getElementById("mySidenav").style.width === "300px") {
      closeNav();
    }
    else {
      document.getElementById("mySidenav").style.width = "300px";
      document.getElementById("userAvatar").style.marginRight = "300px";
      document.getElementById("myInput").style.minWidth = "800px";
    }
   
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("userAvatar").style.marginRight = "0";
    document.getElementById("myInput").style.minWidth = "1100px";
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
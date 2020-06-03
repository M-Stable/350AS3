function addMyFile(){
    $('<div class="homepage-folder"> <img src="folderIcon.png"> <p style="text-align: center;">New folder</p></div>').insertBefore('.homepage-folder.plus-icon:first')
}

function uploadFile(){
    $('#upload_files').click();
}
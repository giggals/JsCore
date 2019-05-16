function addSticker(){
    let titleText = $('.title').val();
    let textContent = $('.content').val();
    let stickerList = $('#sticker-list');

    if(titleText != '' && textContent != ''){
        let listItem = $('<li></li>');
        listItem.addClass('note-content');
        let ancherTag = $('<a></a>');
        ancherTag.addClass('button');
        ancherTag.text('x');
        let h2Element = $(`<h2>${titleText}</h2>`);
        let hrElement = $('<hr></hr>');
        let paragraph = $(`<p>${textContent}</p>`);

        listItem.append(ancherTag);
        listItem.append(h2Element);
        listItem.append(hrElement);
        listItem.append(paragraph);

        ancherTag.on('click' , function(){
            ancherTag.parent().remove();
             
         })

        stickerList.append(listItem);

        $('.title').val('');
        $('.content').val('');
    }
}
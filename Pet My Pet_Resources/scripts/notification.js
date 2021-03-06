const notifications = (() => {
  $(document).on({
    ajaxStart: () => $('#loadingBox').fadeIn(),
    ajaxStop: () => $('#loadingBox').fadeOut()
  })

  function showSuccess(message) {
    let successBox = $('#infoBox');
    let messageBox = successBox.find('span');
    messageBox.text(message);
    successBox.fadeIn();
    successBox.fadeOut(3000);
  }

  function showError(message) {
    let errorBox = $('#errorBox');
    let messageBox = errorBox.find('span');
    console.log(messageBox);
    messageBox.text(message);
    errorBox.fadeIn();
    errorBox.fadeOut(3000);
  }

  return {
    showSuccess,
    showError
  }
})()
$(document).ready(function () {
  var resizeTimeout;
  $('#logoNav').height($(window).height() * 0.07);
  $('#logoImg').height($(window).height() * 0.1);
  $('#logoAudio').height($(window).height() * 0.06);
  $(window).resize(function () {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(function () {
      $('#logoNav').height($(window).innerHeight() * 0.07);
      $('#logoImg').height($(window).innerHeight() * 0.1);
      $('#logoAudio').height($(window).innerHeight() * 0.06);
    }, 100);
  })

  $('#welcomePage').modal('show');
  clearTimeout(resizeTimeout)
  esizeTimeout = setTimeout(function () {
    $('#welcomePage').modal('hide');
  }, 2000);
  
})

function userLoginInfo() {
  var firstName = $('#firstName').val();
  var secondName = $('#secondName').val();
  if (validationSubmit()){
    var fullName = firstName.toLowerCase() + ' ' + secondName.toLowerCase();
    window.location.href = '/index/' + fullName;
    // $.ajax({
    //   type: "POST",
    //   url: "/index",
    //   contentType: "application/json",
    //   data: JSON.stringify({ USER_NAME: fullName }),
    //   dataType: "json",
    //   success: function (response) {
    //     document.write(response);
    //   },
    //   error: function (err) {
    //     console.log(err);
    //   }
    // });
  }

  //檢查是否輸入完整
  function validationSubmit() {
    if (firstName == '') {
      $('#inputCompleteFirstName').css('visibility', 'visible');
      return false;
    } else {
      $('#inputCompleteFirstName').css('visibility', 'hidden');
    }
    if (secondName == '') {
      $('#inputCompleteSecondName').css('visibility', 'visible');
      return false;
    } else {
      $('#inputCompleteSecondName').css('visibility', 'hidden');
    }
    return true;
  }
  
}
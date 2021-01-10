$(document).ready(function () {
  var resizeTimeout;
  $('#welcomePage').modal('show');
  clearTimeout(resizeTimeout)
  esizeTimeout = setTimeout(function () {
    $('#welcomePage').modal('hide');
  }, 3000);

  $('.main').css('min-height', $(window).height()-100);
  $('#totalPoints').text(userData['POINTS']);
})

function addMiniPoint(pointNum) {
  userData['THIS_ROUND_POINTS'] = pointNum;
  $.ajax({
    type: "POST",
    url: "/add-mini-point",
    contentType: "application/json",
    data: JSON.stringify(userData),
    dataType: "json",
    success: function (response) {
      totalPoints = response['POINTS']
      userData = response
      userData['POINTS'] = totalPoints
      $('#totalPoints').text(totalPoints);
    },
    error: function (err) {
      console.log(err);
    }
  });
}

function loadMiniApps(payList){
  console.log(payList);
}
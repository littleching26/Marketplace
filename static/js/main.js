$(document).ready(function () {
  $('.main').css('min-height', $(window).height()-100);
  // $('#totalPoints').text(userData['POINTS']);
})

function showModal(show){
  console.log(show);
  if(show == 'true'){
    var resizeTimeout;
    $('#welcomePage').modal('show');
    clearTimeout(resizeTimeout)
    esizeTimeout = setTimeout(function () {
      $('#welcomePage').modal('hide');
    }, 3000);
  }
}

function addMiniPoint(userName, email, points, pointNum) {
  console.log('-test-', userName, email, points, pointNum);
  userData = {};
  userData['THIS_ROUND_POINTS'] = pointNum;
  userData['USER_NAME'] = userName;
  userData['EMAIL'] = email;
  userData['POINTS'] = parseInt(points);
  $.ajax({
    type: "POST",
    url: "/add-mini-point",
    contentType: "application/json",
    data: JSON.stringify(userData),
    dataType: "json",
    success: function (response) {
      window.location.href = '/get-click-points/' + pointNum + '/' + response['USER_NAME'] + '/' + email;
      // window.location.href = '/get-click-points/' + userData ;
      // totalPoints = response['POINTS']
      // userData = response
      // userData['POINTS'] = totalPoints
      // $('#totalPoints').text(totalPoints);
    },
    error: function (err) {
      console.log(err);
    }
  });
}

function loadMiniApps(payList){
  console.log(payList);
}
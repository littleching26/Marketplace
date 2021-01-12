$(document).ready(function () {
  $('.main').css('min-height', $(window).height()-100);
})

// function addMiniPoint(userName, email, points, pointNum) {
//   userData = {};
//   userData['THIS_ROUND_POINTS'] = pointNum;
//   userData['USER_NAME'] = userName;
//   userData['EMAIL'] = email;
//   userData['POINTS'] = parseInt(points);
//   $.ajax({
//     type: "POST",
//     url: "/add-mini-point",
//     contentType: "application/json",
//     data: JSON.stringify(userData),
//     dataType: "json",
//     success: function (response) {
//       window.location.href = '/get-click-points/' + pointNum + '/' + response['USER_NAME'] + '/' + email;
//     },
//     error: function (err) {
//       console.log(err);
//     }
//   });
// }

function addMiniPoint(email, points, pointNum) {
  userData = {};
  userData['THIS_ROUND_POINTS'] = pointNum;
  userData['EMAIL'] = email;
  userData['POINTS'] = parseInt(points);
  $.ajax({
    type: "POST",
    url: "/add-mini-point",
    contentType: "application/json",
    data: JSON.stringify(userData),
    dataType: "json",
    success: function (response) {
      window.location.href = '/get-click-points/' + pointNum + '/' + email;
    },
    error: function (err) {
      console.log(err);
    }
  });
}

function clearPoint(){
  $.ajax({
    type: "POST",
    url: "/clear-points",
    contentType: "application/json",
    data: {},
    dataType: "json",
    success: function (response) {
    },
    error: function (err) {
      console.log(err);
    }
  });
}

function loadMiniApps(payList){
  console.log(payList);
}
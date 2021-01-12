$(document).ready(function () {    
});
function userLoginInfo() {
    // var firstName = $('#firstName').val();
    // var secondName = $('#secondName').val();
    var email = $('#inputEmail').val();
    if (validationSubmit()) {
        // var fullName = firstName.toLowerCase() + ' ' + secondName.toLowerCase();
        var email = email.toLowerCase();
        // window.location.href = '/index/' + fullName + '/' + email + '/' + true;
        window.location.href = '/exchange-item/' + email + '/' + true;
    }
    //檢查是否輸入完整
    function validationSubmit() {
        // if (firstName == '') {
        //     $('#inputCompleteFirstName').css('visibility', 'visible');
        //     console.log('test1');
        //     return false;
        // } else {
        //     $('#inputCompleteFirstName').css('visibility', 'hidden');
        // }
        // if (secondName == '') {
        //     $('#inputCompleteSecondName').css('visibility', 'visible');
        //     console.log('test2');
        //     return false;
        // } else {
        //     $('#inputCompleteSecondName').css('visibility', 'hidden');
        // }
        if (email == '') {
            $('#inputCompleteEmail').css('visibility', 'visible');
            return false;
        } else {
            $('#inputCompleteEmail').css('visibility', 'hidden');
        }
        return true;
    }
}


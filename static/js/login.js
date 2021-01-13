$(document).ready(function () {    
});
function userLoginInfo() {
    var email = $('#inputEmail').val();
    if (validationSubmit()) {
        email = email.replace(/\s*/g, "");
        email = email.toLowerCase();
        window.location.href = '/exchange-item/' + email + '/' + true;
    }
    //檢查是否輸入完整
    function validationSubmit() {
        if (email == '') {
            $('#inputCompleteEmail').css('visibility', 'visible');
            return false;
        } else {
            $('#inputCompleteEmail').css('visibility', 'hidden');
        }
        return true;
    }
}


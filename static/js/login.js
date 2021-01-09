$(document).ready(function () {
    console.log('test11111');
    
});
function userLoginInfo() {
    var firstName = $('#firstName').val();
    var secondName = $('#secondName').val();
    if (validationSubmit()) {
        var fullName = firstName.toLowerCase() + ' ' + secondName.toLowerCase();
        window.location.href = '/index/' + fullName;
    }
    //檢查是否輸入完整
    function validationSubmit() {
        if (firstName == '') {
            $('#inputCompleteFirstName').css('visibility', 'visible');
            console.log('test1');
            return false;
        } else {
            $('#inputCompleteFirstName').css('visibility', 'hidden');
        }
        if (secondName == '') {
            $('#inputCompleteSecondName').css('visibility', 'visible');
            console.log('test2');
            return false;
        } else {
            $('#inputCompleteSecondName').css('visibility', 'hidden');
        }
        return true;
    }
}


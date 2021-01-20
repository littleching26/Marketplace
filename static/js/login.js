const peopleNumber = 20;
$(document).ready(function () {   
});
function userLoginInfo() {
    var email = $('#inputEmail').val();
    if (validationSubmit()) {
        email = email.replace(/\s*/g, "");
        email = email.toLowerCase();
        var sendData = {};
        sendData['peopleNumber'] = peopleNumber;
        sendData['email'] = email;
        $.ajax({
            type: "POST",
            url: "/get-login-people-number",
            contentType: "application/json",
            data: JSON.stringify(sendData),
            dataType: "json",
            success: function (response) {
                if(response == true){
                    window.location.href = '/exchange-item/' + email + '/' + true;
                }else{
                    alert('人數已滿！');
                }
            },
            error: function (err) {
                console.log(err);
            }
        });
        
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


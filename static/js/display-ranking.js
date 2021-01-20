const loginPeopleLimit = 20;
$(document).ready(function () {
    //初始頁面
    getRankingData();

    //每秒偵測登入人數
    checkLoginPeople();
})
function start(){
    var timer = 20;
    var interval = setInterval(function () {
        timer = timer - 1;
        $('#timer').html(timer);
        getRankingData();
        if(timer == 0){
            stop();
        }
    }, 1000); 
    function stop(){
        clearInterval(interval);
    }
}

function checkLoginPeople(){
    var timer = 60;
    var interval = setInterval(function () {
        timer = timer - 1;
        $.ajax({
            type: "POST",
            url: "/get-login-people",
            contentType: "application/json",
            data: {},
            dataType: "json",
            success: function (response) {
                $('#login-people').html(response);
                if (response >= loginPeopleLimit){
                    stop();
                }
            },
            error: function (err) {
                console.log(err);
            }
        });
    }, 1000);
    function stop() {
        clearInterval(interval);
    }    
}

function getRankingData() {
    $.ajax({
        type: "POST",
        url: "/get-ranking-data",
        contentType: "application/json",
        data: {},
        dataType: "json",
        success: function (response) {
            var rankingData = '';
            for(var i = 0; i < response.length - 5; i++){
                rankingData += 
                '<div class="row">' + 
                    '<div class="col-2 ranking-info">' + 
                        '<div class="ranking-title">' + (i+1).toString() +'</div>' +
                    '</div>' +
                    '<div class="col-2 ranking-info">' +
                        '<img class="ranking-image" src="static/' + response[i]['IMG_URL'] + '" alt="static/img/ibmerLogo.png">' +
                        '<div class="ranking-name">' + response[i]['EMAIL'] + '@(tw.)ibm.com</div>' +
                    '</div>' + 
                    '<div class="col-2 ranking-info">' +
                        '<div class="ranking-title">' + response[i]['POINTS'] + '</div>' +
                    '</div>' +
                    '<div class="col-2 ranking-info">' +
                        '<div class="ranking-title">' + (i + 6).toString() + '</div>' +
                    '</div>' +
                    '<div class="col-2 ranking-info">' +
                        '<img class="ranking-image" src="static/' + response[i+5]['IMG_URL'] + '" alt="static/img/ibmerLogo.png">' +
                        '<div class="ranking-name">' + response[i+5]['EMAIL'] + '@(tw.)ibm.com</div>' +
                    '</div>' +
                    '<div class="col-2 ranking-info">' +
                        '<div class="ranking-title">' + response[i+5]['POINTS'] + '</div>' +
                    '</div>' +
                '</div>'
            }
            $('#rankingContain').html(rankingData);
        },
        error: function (err) {
            console.log(err);
        }
    });
}

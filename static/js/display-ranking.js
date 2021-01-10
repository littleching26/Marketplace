$(document).ready(function () {
    console.log('test');
    window.setInterval(function () { getRankingData() }, 2000); 
})
function getRankingData() {
    $.ajax({
        type: "POST",
        url: "/get-ranking-data",
        contentType: "application/json",
        data: {},
        dataType: "json",
        success: function (response) {
            var rankingData = '';
            for(var i = 0; i < response.length; i++){
                rankingData += 
                '<div class="row">' + 
                    '<div class="col-4 ranking-info">' + 
                        '<div class="block-title">' + (i+1).toString() +'</div>' +
                    '</div>' +
                    '<div class="col-4 ranking-info">' +
                    // '<img class="content-img" src="{{ url_for(' + '"static",filename=' + '"' + response[i]['IMG_URL'] + '") }}" alt="讀不到圖片拉">'
                        '<img class="ranking-image" src="static/' + response[i]['IMG_URL'] + '" alt="讀不到圖片拉">' +
                        '<div class="ranking-name">' + response[i]['USER_NAME'] + '</div>' +
                    '</div>' + 
                    '<div class="col-4 ranking-info">' +
                        '<div class="block-title">' + response[i]['POINTS'] + '</div>' +
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
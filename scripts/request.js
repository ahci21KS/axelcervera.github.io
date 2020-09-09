
function requestSpotify() {
    

    var request = new XMLHttpRequest();
    request.open('GET', "https://api.spotify.com/v1/playlists/5DpndS6p9qgmyppmlCOlVx", true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.setRequestHeader('Authorization', 'Bearer BQA1xWJbkWcBPinxAkuydyYCpu5Q29gNNYDUJKl7xl_cAGYbbyCSfMgVaadNLpBvQS573gs1ES-5pMnNmBKFUTOO0-BUESKRJpoIh9xLPT8dOYVWw0DZaqkZsg3iuCqTy-eTBgaUNMWKCRx_UiTNTC8UFg');
    
    
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            
            var output = JSON.parse(this.responseText);

            var trackNumber = Math.floor(Math.random() * output["tracks"]["items"].length);

            window.open(output["tracks"]["items"][trackNumber]["track"]["external_urls"]["spotify"]);
        }
    };

    request.send();

}

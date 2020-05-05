let movies = {
    "movies" :  [{
        "title": "The Imitation Game",
        "youtubeId": "nuPZUUED5uk"

    },{
        "title": "Inside Bill's Brain: Decoding Bill Gates",
        "youtubeId": "aCv29JKmHNY"
    },
        { "title": "Jim & Andy: The great beyond",
            "youtubeId":"kB15UFO5ebA"
        }
        ,
        { "title": "Cheer",
            "youtubeId": "dhXRx_lva18"
        }
        ,
        { "title": "The Social Network",
            "youtubeId": "2RB3edZyeYw"
        },
        {"title": "The untouchable",
            "youtubeId": "34WIbmXkewU"

        }
    ]
};
let youtube = {
    getIdFromUrl: function (videoIdOrUrl) {
        if (videoIdOrUrl.indexOf('https://www.youtube.com/watch?v=kB15UFO5ebA&t=1s') === 0) {
            return videoIdOrUrl.split('v=')[1];
        } else {
            return videoIdOrUrl;

        }
    }, generateThumbnailUrl: function (videoIdorUrl) {
        return 'https://i3.ytimg.com/vi/' + youtube.getIdFromUrl(videoIdorUrl) + 'default.jpg';
    }};
let i = 1;
movies.movies.forEach(movie =>{
    let url = 'http://www.omdbapi.com/?t='+movie.title+'&apikey=6a725e0e';
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    let id = "grid-item" + i ;
    let griditem = document.getElementById(id);
    griditem.addEventListener("click", onclick=>{
        fetch(proxyUrl + url)
            .then(response =>{
                return response.json();
            })
            .then(data => {
                console.log(data.imdbRating);
                console.log(data.Year);
                console.log(data.Plot);
                data.Title;
                data.imdbRating;
                data.Year;
                data.Plot;
                let output = document.getElementById(id);
                output.innerHTML ='<h2>'+ data.Title+'</h2> ' +'Made in: '+ data.Year +' ' +'<p>'+ data.Plot+'</p>'+'IMDB-rating '+ data.imdbRating;
            });
    });

    i++;
});

/*let youtube = {
    getIdFromUrl: function (videoIdOrUrl) {
        if (videoIdOrUrl.indexOf('https://www.youtube.com/watch?v=kB15UFO5ebA&t=1s') === 0) {
            return videoIdOrUrl.split('v=')[1];
        } else {
            return videoIdOrUrl;

        }
    }, generateThumbnailUrl: function (videoIdorUrl) {
        return 'https://i3.ytimg.com/vi/' + youtube.getIdFromUrl(videoIdorUrl) + 'default.jpg';
    },
    generateEmbedUrl: function (videoIdorUrl){
    return 'https://www.youtube.com/embed/' + youtube.getIdFromUrl(videoIdorUrl);
}
};*/



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
    }, generateThumbnailUrl: function (videoIdOrUrl) {
        return 'https://i3.ytimg.com/vi/' + youtube.getIdFromUrl(videoIdOrUrl) + 'default.jpg';
    }};
let i = 1;
//laver en foreach der gennemløber hver film i min json variabel.
movies.movies.forEach(movie =>{
    //min url variabel er en variabel der gør at jeg kan hente filmen og dens titel og api.
    let url = 'http://www.omdbapi.com/?t='+movie.title+'&apikey=6a725e0e';
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    //tidligere er der lavet en varibael der er sat til 1. Det betyder at vores let id har værdien grid-item plus 1 som vi tæller op i bunden
    // med i++ indtil den ikke kan finde en film mere. Derefter tilføjer jeg griditem en addeventlistener med en click med en function af fetch.
    let id = "grid-item" + i ;
    let griditem = document.getElementById(id);
    griditem.addEventListener("click", onclick=>{
        // her fecther jeg url som er vores api og movie title, og det hvis betingelsen er opfyldt så returnere den noget json response.
        fetch(proxyUrl + url)
            .then(response =>{
                return response.json();
            })
            // så kalder jeg på de ønskede data såsom title, imdbrating, year og plot, laver en variabel som kan indeholde min output værdier.
            // dvs. jeg sætter mine værdier i min innerHTML.
            .then(data => {
                const video = document.createElement('iframe');
                video.setAttribute('src', 'https://www.youtube.com/embed/' + movie.youtubeId);
                console.log(data.imdbRating);
                console.log(data.Year);
                console.log(data.Plot);
                data.Title;
                data.imdbRating;
                data.Year;
                data.Plot;
                let output = document.getElementById(id);
                output.innerHTML ='<h1>'+ data.Title+'</h1> ' + '<b>'+
                    'Made in: ' +'</b>'+ data.Year +' ' +
                    '' +'<p>'+ data.Plot+'</p>'+
                    'IMDB-rating '+'<b>'+ data.imdbRating+ '</b>';
               griditem.appendChild(video);
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


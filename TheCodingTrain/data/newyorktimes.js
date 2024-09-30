// var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=rainbow&api-key=99cfea65a5bb30650b3d31eb1713233e:15:73386102';

let link = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
let search = "rainbow";
let apiKey = "&api-key=99cfea65a5bb30650b3d31eb1713233e:15:73386102";

let fullUrl = link + search + apiKey;

function setup(){

    noCanvas();
    setTimeout(()=>{
        loadJSON(fullUrl, gotData,);
    },2000);

}

function gotData(data) {
    let articles = data.response.docs;
    for (let i = 0; i<articles.length; i++){
        createElement('h1', articles[i].headline.main);
        createP(articles[i].snippet)
    }
    console.log(data.response.docs[1].headline.main);
}
const wordnikAPI =
  'https://api.wordnik.com/v4/words.json/randomWord?&minLength=5&maxLength=-1&api_key=48dd829661f515d5abc0d03197a00582e888cc7da2484d5c7';
const giphyAPI =
  'https://api.giphy.com/v1/gifs/search?rating=PG&api_key=dc6zaTOxFJmzC&q=';

  function setup(){
    noCanvas();
    loadJSON(wordnikAPI, gotData);
  }

  function gotData(data){
    createP(data.word);
    loadJSON(giphyAPI + data.word, getDataData);
  }

  function getDataData(data){
    console.log(data.data[0].images);
    createImg(data.data[0].images['fixed_height_small'].url);
  }

//   
// const wordnikAPI =
//   'https://api.wordnik.com/v4/words.json/randomWord?&minLength=5&maxLength=-1&api_key=48dd829661f515d5abc0d03197a00582e888cc7da2484d5c7';
//   const giphyAPI ='https://api.giphy.com/v1/gifs/search?api_key=35tkRO0AuCp7qU9F9TdkuIL4880dBVXz&q=';
  
//   function setup(){
//       noCanvas();
//       loadJSON(wordnikAPI, function(data){
//           createP(data.word);
//           loadJSON(giphyAPI + data.word, function(data){
//               console.log(data.data[0].images);
//               createImg(data.data[0].images['fixed_height_small'].url);
//           });
//       });
//   }
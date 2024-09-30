
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(response => {
//     if(!response.ok){
//         throw new Error("Couldn't fetch the data");
//     }
//     return response.json();
// })
// .then(data => console.log(data.id))
// .catch(error => console.error(error));


async function fetchData(){

    try{

        

        const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

        if(!response.ok){
            throw new Error("Couldn't fetch data");
        }
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.error(error);
    }
}
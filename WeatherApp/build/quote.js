let quoteDisplay = document.querySelector('#quoteDisplay');
let btn = document.querySelector('#generateQuoteBtn');
let author = document.createElement('h1');
let quoteText = document.createElement('p');
let authorFilter = document.querySelector('#authorFilter');


authorFilter.addEventListener('keyup', (e)=>{
    e.preventDefault();
    console.log(authorFilter.value);
})

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(e.type);
    
    let quoteList = [
        {
            quote: `Knowledge can change one’s destiny, and diligence will result in glory`,
            author: `Sherlock Moriarty`,
        },
        {
            quote:`Challenge the impossible, even if the final outcome is nothing but an illusion.`,
            author :`Dwayne Dantès`
        },
        {
            quote:`Never perform unprepared!`,
            author:`Klein Moretti`,
        },
        {
            quote:`There are always more accidents than preparations…`,
            author:`Reinette Tinekerr `,
        },
        {
            quote:`Luck is a blessing, and misfortune is a test.`,
            author:`Talim Dumont`,
        },
    ];

    const displayQuote = (quote)=>{
        console.log("quote");
        author.textContent = `Author: ${quote.author}`;
        quoteText.textContent = `Quote: ${quote.quote}`;
        

    };

    const randomQuote = quoteGenerate(quoteList);
    displayQuote(randomQuote);

});

const quoteGenerate =(quoteList)=>{

    let randomNum = Math.floor(Math.random()*quoteList.length);
    return quoteList[randomNum];
    
} 

quoteDisplay.appendChild(author);
quoteDisplay.appendChild(quoteText);


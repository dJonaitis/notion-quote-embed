const quoteDOM = document.getElementById('quote');
const citationDOM = document.getElementById('citation');


const randWork = lib.works[Math.floor(Math.random()*lib.works.length)]
const randQuote = randWork.quotes[Math.floor(Math.random()*randWork.quotes.length)]
console.log(randQuote)

quoteDOM.innerHTML = randQuote;
citationDOM.innerHTML = `-${randWork.author}, ${randWork.name} (${randWork.year})`
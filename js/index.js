var quotes = [
    {
        quotes: '“Be the change that you wish to see in the world.”',
        author: '― Mahatma Gandhi'
    },
    {
        quotes: '“You only live once, but if you do it right, once is enough.”',
        author: '― Mae West'
    },
    {
        quotes: '“A friend is someone who knows all about you and still loves you.”',
        author: '― Elbert Hubbard'
    },
    {
        quotes: '“A room without books is like a body without a soul.”',
        author: '― Marcus Tullius Cicero'
    },
    {
        quotes: '“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”',
        author: '― Ralph Waldo Emerson'
    },
    {
        quotes: '“It is better to be hated for what you are than to be loved for what you are not.”',
        author: '― Andre Gide, Autumn Leaves'
    },
    {
        quotes: '“Life is what happens to us while we are making other plans.”',
        author: '― Allen Saunders'
    },

]; 

var lastRandomNumber;

function showQuote(){
    var randomNumber= Math.floor(Math.random()* quotes.length);

    if(lastRandomNumber==randomNumber){
        randomNumber=(randomNumber + 1)% quotes.length;
    }

    lastRandomNumber=randomNumber;

    document.getElementById('quote').innerHTML=quotes[randomNumber].quotes;
    document.getElementById('outhor').innerHTML=quotes[randomNumber].author;
}

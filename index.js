let btn = document.querySelector('#newQuotes');
let quote = document.querySelector('.quotes');
let person = document.querySelector('.person');

const quotes = [{
    quote:`"Spread love everywhere you go. Let no one ever come to you without leaving happier."`,
    person:" Mother Teresa"
},{
    quote:`"The only thing we have to fear is fear itself."`,
    person:"Franklin D. Roosevelt"
},{
    quote:`"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."`,
    person:"Martin Luther King Jr"
},{
    quote:`"The best and most beautiful things in the world cannot be seen or even touched they must be felt with the heart."`,
    person:"Helen Keller"
},{
    quote:`"Do one thing every day that scares you."`,
    person:"Eleanor Roosevelt"
},{
    quote:`"Well done is better than well said."`,
    person:"Benjamin Franklin"
},{
    quote:`"It is during our darkest moments that we must focus to see the light."`,
    person:"Aristotle"
},{
    quote:`"Be yourself; everyone else is already taken."`,
    person:"Oscar Wilde"
},{
    quote:`"Do not go where the path may lead, go instead where there is no path and leave a trail."`,
    person:"Ralph Waldo Emerson"
},{
    quote:`"Never let the fear of striking out keep you from playing the game."`,
    person:"Babe Ruth"
},];

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

});
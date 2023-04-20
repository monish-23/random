import React, { useState } from 'react';

const quotes = [
  { text: 'Be the change you wish to see in the world.', author: 'Mahatma Gandhi' },
  { text: 'I have not failed. I\'ve just found 10,000 ways that won\'t work.', author: 'Thomas Edison' },
  { text: 'If you want to lift yourself up, lift up someone else.', author: 'Booker T. Washington' },
  { text: 'Success is not final, failure is not fatal: it is the courage to continue that counts.', author: 'Winston Churchill' },
  { text: 'Believe you can and you\'re halfway there.', author: 'Theodore Roosevelt' },
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function RandomQuoteMachine() {
  const [quote, setQuote] = useState(getRandomQuote());

  function handleClick() {
    const newQuote = getRandomQuote();
    setQuote(newQuote);
  }

  return (
    <div className="random-quote-machine">
      <h1 className='h1tag'>Random Quote Machine</h1>
      <blockquote>
        <p className='text'>{quote.text}</p>
        <footer className='auth'>{quote.author}</footer>
      </blockquote>
      <button onClick={handleClick}>New Quote</button>
    </div>
  );
}

export default RandomQuoteMachine;
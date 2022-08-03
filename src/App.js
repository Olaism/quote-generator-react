import { useState, useEffect } from 'react';
import Header from './Header';
import Quotes from './Quotes';
import data from './Data';

function App() {
  const [quotes, setQuotes] = useState(null);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(data => {
      setQuotes(data);
    })
  }, []);

  const getNextQuoteIndex = () => {
    if (quoteIndex < quotes.length - 1) {
      setQuoteIndex(prev => prev + 1);
    }
  }

  const getPrevQuoteIndex = () => {
    if (quoteIndex > 0) {
      setQuoteIndex(prev => prev - 1);
    }
  }

  if (!quotes) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <Header />
      <Quotes quote={quotes[quoteIndex]} getPrevQuoteIndex={getPrevQuoteIndex} getNextQuoteIndex={getNextQuoteIndex} />
      <p className="quote-count">{quoteIndex+1}/{quotes.length}</p>
    </>
  );
}

export default App;
document.addEventListener('DOMContentLoaded', () => {
  const newQuoteButton = document.querySelector('.button');
  const quote = document.querySelector('.quoteText');
  const author = document.querySelector('cite');

  async function getQuote() {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    if (response.ok) {
      quote.textContent = data.content;
      if (data.author) {
        author.textContent = data.author;
      } else {
        author.textContent = 'Anonymous';
      }
    } else {
      quote.textContent = 'An error occurred';
      console.log(data);
    }
  }

  newQuoteButton.addEventListener('click', getQuote);

  // initial quote
  getQuote();
});

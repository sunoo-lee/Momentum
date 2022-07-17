const quotes = [
  {
    quote: "There is nothing more deceptive than an obvious fact.",
    author: "Arthur Conan Doyle, The Boscombe Valley Mystery",
  },
  {
    quote:
      "Education never ends, Watson. It is a series of lessons, with the greatest for the last.",
    author: "Sir Arthur Conan Doyle, His Last Bow",
  },
  {
    quote:
      "What you do in this world is a matter of no consequence. The question is what can you make people believe you have done.",
    author: "Arthur Conan Doyle, A Study in Scarlet",
  },
  {
    quote: "You see, but you do not observe.",
    author: "Arthur Conan Doyle, A Scandal in Bohemia",
  },
  {
    quote: "The game is afoot.",
    author: "Arthur Conan Doyle, The Adventure of the Abbey Grange",
  },
  {
    quote:
      "When you have eliminated the impossible, whatever remains, however improbable, must be the truth?",
    author: "Arthur Conan Doyle, The Sign of Four",
  },
  {
    quote: "There is nothing more deceptive than an obvious fact.",
    author: "Arthur Conan Doyle, The Bascombe Valley Mystery",
  },
  {
    quote:
      "My name is Sherlock Holmes. It is my business to know what other people do not know.",
    author: "Arthur Conan Doyle, The Adventure of the Blue Carbuncle",
  },
  {
    quote: "To a great mind, nothing is little.",
    author: "Arthur Conan Doyle, A Study in Scarlet",
  },
  {
    quote:
      "The world is full of obvious things which nobody by any chance ever observes.",
    author: "Arthur Conan Doyle, The Hound of the Baskervilles",
  },
];

const $quote = document.querySelector("#quote span:first-child");
const $author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

$quote.innerText = todaysQuote.quote;
$author.innerText = todaysQuote.author;

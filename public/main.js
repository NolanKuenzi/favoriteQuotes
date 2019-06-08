const quotes = ["Not all those who wander are lost - J. R. R. Tolkien", "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost", "There is always some madness in love. But there is also always some reason in madness. - Friedrich Nietzsche", "No man ever steps in the same river twice, for it's not the same river and he's not the same man. - Heraclitus", "I can resist everything except temptation. - Oscar Wilde", "It is the mark of an educated mind to be able to entertain a thought without accepting it. - Aristotle", "Imagination is more important than knowledge. - Albert Einstein", "It does not matter how slowly you go as long as you do not stop. - Confucius", "A wise man proportions his belief to the evidence. - Daivd Hume", "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light. - J.K. Rolwing", "The best way to find yourself is to lose yourself in the service of others. - Mahatma Gandhi", "We are what we pretend to be, so we must be careful about what we pretend to be. - Kurt Vonnegut", "Whenever you find yourself on the side of the majority, it is time to pause and reflect. - Mark Twain", "Research is formalized curiosity. It is poking and prying with a purpose. - Zora Neale Hurston"];

function ranQuote() {
  const quote1 = document.getElementById("quote");
  const tweetQuote = document.getElementById("TTQ");
  const randQuote = Math.floor(Math.random() * quotes.length);
  quote1.innerHTML = quotes[randQuote];
  tweetQuote.style.display = "block";
}

function tweetQuote() {
  const quote1 = document.getElementById("quote");

  if (quote1.innerHTML === "Click the button above to see one of my favorite quotes!") {
    alert('Click the "GENERATE A QUOTE" button to generate a quote that can be tweeted!');
  } else {
    window.open("https://twitter.com/intent/tweet?text=" + quote1.innerHTML);
  }
}
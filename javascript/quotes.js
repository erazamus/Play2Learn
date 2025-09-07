const quotes = [
  {
    name: "Grimble Thornclaw",
    text: "One mistake… two mistakes… three mistakes… and I’ll be scratching at your door."
  },
  {
    name: "Whisperfang Duskveil",
    text: "The numbers whisper softly… but only I can hear them scream."
  },
  {
    name: "Cinderskull Ashbane",
    text: "Count with me in the smoke… 4, 5, 6… until everything burns away."
  },
  {
    name: "Holloweye Blackroot",
    text: "Every anagram is a shadow twin… a word lurking behind another."
  },
  {
    name: "Nightmirth Veylor",
    text: "Hehehe… the letters dance in circles, hiding their names from you."
  }
];

let i = 0;
const nameBox = document.getElementById("quote-name");
const quoteBox = document.getElementById("quote");
const container = document.getElementById("qbox");
 
function showQuote() {
  quoteBox.textContent = quotes[i].text;
  nameBox.textContent = quotes[i].name;
  i = (i + 1) % quotes.length;
}

showQuote();
setInterval(showQuote, 20000);

const quotes = [
  "Grimble Thornclaw: 'One mistake… two mistakes… three mistakes… and I’ll be scratching at your door.'",
  "Whisperfang Duskveil: 'The numbers whisper softly… but only I can hear them scream.'",
  "Cinderskull Ashbane: 'Count with me in the smoke… 4, 5, 6… until everything burns away.'",
  "Holloweye Blackroot: 'Every anagram is a shadow twin… a word lurking behind another.'",
  "Nightmirth Veylor: 'Hehehe… the letters dance in circles, hiding their names from you.'",
];

var i = 0;
const qbox = document.getElementById("qbox");
 
function showQuote() {
  qbox.textContent = quotes[i];
  i = (i + 1) % quotes.length;
}

showQuote();
setInterval(showQuote, 20000);

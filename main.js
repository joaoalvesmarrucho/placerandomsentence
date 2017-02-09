//original Code by Joao Alves Marrucho 09.02.2017

//to quickly add sentences in the right format as below use Find and Replay in for example indesign. Search for . replace with . ","
var sentences = [
  "As armas e os barões assinalados. ",
  "Que da ocidental praia Lusitana. ",
  "Por mares nunca de antes navegados. ",
  "Passaram ainda além da Taprobana. "
];

function randomise() {
  var randomSentence = sentences[Math.floor(Math.random() * 4)];
   $(container).append(randomSentence);
}
// set interval time in miliseconds
setInterval(function(){randomise(); }, 2000);

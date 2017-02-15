var sentences = [
  "As armas e os barões assinalados. ",
  "Que da ocidental praia Lusitana. ",
  "Por mares nunca de antes navegados. ",
  "Passaram ainda além da Taprobana. "
];

function randomise() {
  var randomSentence = sentences[Math.floor(Math.random() * 4)];
   $(container).append(('<p>' +  randomSentence + '</p>'));
}
setInterval(function(){randomise(); }, 2000);

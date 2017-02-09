var sentences = [
  "Saab. ",
  "Volvo. ",
  "BMW. ",
  "Ford. "
];
var element;
element = document.getElementById(container);
function randomise() {
  var randomSentence = sentences[Math.floor(Math.random() * 4)];
  console.log(randomSentence);
   $(container).append(randomSentence);
  return randomSentence;
}
setInterval(function(){randomise(); }, 1000);
// randomise();

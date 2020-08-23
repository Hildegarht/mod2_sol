
(function(window){
	var helloSpeaker = {};
 helloSpeaker.names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
var speakWord = "Hello";
helloSpeaker.speak =function(names) {
  console.log(speakWord + " " + helloSpeaker.names);
}
window.helloSpeaker=helloSpeaker;
})(window);
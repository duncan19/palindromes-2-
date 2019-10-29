$(document).ready(function(){
  $("#userWordForm").submit(function(event){
  event.preventDefault();
  $("#true").hide();
  $("#false").hide();
  $("#resultsPage").hide();

  var originLetters = $("input#userWord").val();
  var compareLetters = originLetters.split("");
  // var reverseWord = compareWord.reverse();

$(".originalEntry").text(originLetters);

var reversedLetters = compareLetters.slice();
compareLetters.reverse();
console.log (reversedLetters)
console.log (compareLetters)
if (reversedLetters.toString().toUpperCase() === compareLetters.toString().toUpperCase()){
  console.log("true")
  $("#true").show();
  $("#resultsPage").show();
  $("#userWordForm").hide();
}
else {
  console.log("false")
  $("#false").show();
  $("#resultsPage").show();
  $("#userWordForm").hide();
}
});
$("#resultsPage").click(function(){
  location.reload(true);
});
});

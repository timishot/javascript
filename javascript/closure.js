/*var count = 0;

window.onload = function () {
	var button = document.getElementById("clickme");
	button.onclick = handClick
};

function handClick () {
	var message = "You clicked me ";
	var div = document.getElementById("message")
	count++;
	div.innerHTML = message + count + " times!";
}*/

window.onload =  function () {
	var count = 0;
  var message = " you clicked me ";
  var div = document.getElementById("message");

  var button = document.getElementById("clickme");
  button.onclick = function() {
    count++;
    div.innerHTML= message + count + " times!";
  }
}
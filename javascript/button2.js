// function makeSizer (size) {
// 	return function() {
// 		document.body.style.fointSize = size + 'px';
// 	};
// }

// var size12 = makeSizer(12);
// var size14 = makeSizer(14);
// var size16 = makeSizer(16);

// document.getElementById('size-12').onclick = size12;
// document.getElementById('size-14').onclick = size14;
// document.getElementById('size-16').onclick = size16; 

for (var i = 0; i < 3; i++) {
	setTimeout(function() {
	  console.log(i); // Will output "3" three times, not 0, 1, 2
	}, 100);
}
// $(function(){
// 	$("#toggle_header").click(function(){
// 		$("header").toggleClass("red green")
// 	})
// })

document.querySelector("#toggle_header").addEventListener("click", function (){
	toggleLog('header', 'red', 'green')
});

const toggleLog = (element, classToremove, classToadd) =>{
	let header = document.querySelector(element);
	if (header.classList.contains(classToremove)) {
		header.classList.remove(classToremove)
		header.classList.add(classToadd)
	} else {
		header.classList.remove(classToadd)
		header.classList.add(classToremove)
	}
}
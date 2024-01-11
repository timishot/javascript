// $(function(){
// 	$("#toggle_header").click(function(){
// 		$("header").toggleClass("red green")
// 	})
// })

document.querySelector("#toggle_header").addEventListener("click", toggleLog('header', 'red', 'green'));
const toggleLog = (element, classToremove, classToadd) =>{
	let header = document.querySelector("header");
	if (header.classList.contains(classToremove)) {
		element.classList.remove(classToremove)
		element.classList.add(classToadd)
	} else {
		element.classList.remove(classToadd)
		element.classList.add(classToremove)
	}
}
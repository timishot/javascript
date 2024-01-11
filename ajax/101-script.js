// $(function(){
// 	$("#add_item").click(function(){
// 		$('<li>').text("Item").appendTo('UL.my_list')
// 	});

// 	$("#remove_item").click(function(){
// 		$(".my_list li:last-child").remove();
// 	});

// 	$("#clear_list").click(function(){
// 		$('.my_list').empty();
// 	});
// });

document.addEventListener('DOMContentLoaded', function () {
	// Function to add a new LI element to the list
	document.getElementById('add_item').addEventListener('click', function () {
	    var newItem = document.createElement('li');
	    newItem.appendChild(document.createTextNode('Item'));
	    document.querySelector('.my_list').appendChild(newItem);
	});
    
	// Function to remove the last LI element from the list
	document.getElementById('remove_item').addEventListener('click', function () {
	    var list = document.querySelector('.my_list');
	    var lastItem = list.lastElementChild;
	    if (lastItem) {
		list.removeChild(lastItem);
	    }
	});
    
	// Function to clear all LI elements from the list
	document.getElementById('clear_list').addEventListener('click', function () {
	    var list = document.querySelector('.my_list');
	    while (list.firstChild) {
		list.removeChild(list.firstChild);
	    }
	});
    });
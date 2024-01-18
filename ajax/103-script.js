$('document').ready(function () {
	// it runs if only the webbrower is loaded
	$('INPUT#btn_translate').click(translate);
	$('INPUT#language_code').focus(function () {
	  $(this).keydown(function (e) {
	    if (e.keyCode === 13) {
	      translate();
	    }
	  });
	});
});


//translate      
function translate () {
	const url = 'https://www.fourtonfish.com/hellosalut/?';
	$.get(url + $.param({ lang: $('INPUT#language_code').val() }), function (data) {
	  $('DIV#hello').html(data.hello);
	});
}

// time
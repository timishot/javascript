const apiURL = 'https://hellosalut.stefanbohacek.dev/?lang=fr';
$.ajax({
	url: apiURL,
	method: 'GET',
	dataType: 'json',
	success: function (data) {
		let translate = data.hello;

		$("DIV#hello").text(translate)
	},
	error: function ( textStatus, errorThrow){
		console.error('Error fetching data', textStatus, errorThrow)
	}
})
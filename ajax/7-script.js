const apiURL = 'https://swapi-api.alx-tools.com/api/people/5/?format=json';
$.ajax({
	url: apiURL,
	method: 'GET',
	dataType: 'json',
	success: function (data) {
		let charaterName = data.result;

		$('#character').text(charaterName);
	},
	error: function (jqXHR, textStatus, errorThrow){
		console.error('Error fetching data', textStatus, errorThrow)
	}
})
const apiURL = 'https://swapi-api.alx-tools.com/api/films/?format=json';
$.ajax({
	url: apiURL,
	method: 'GET',
	dataType: 'json',
	success: function (data) {
		let MoviesTitles = data.results.map(function (movie) {
			return movie.title;
		});

		MoviesTitles.forEach(function (title) {
			$('<li>').text(title).appendTo('#list_movies')
		});
	},
	error: function ( textStatus, errorThrow){
		console.error('Error fetching data', textStatus, errorThrow)
	}
})
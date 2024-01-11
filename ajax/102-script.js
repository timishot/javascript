$(function () {
	$("#btn_translate").click(function () {
	  let languageCode = $("#language_code").val();
      
	  // Use cors-anywhere as a proxy to handle CORS
	  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
	  const apiUrl = "https://www.fourtonfish.com/hellosalut/hello/";
      
	  $.ajax({
	    url: proxyUrl + apiUrl,
	    method: "GET",
	    dataType: "json",
	    data: { lang: languageCode },
	    success: function (data) {
	      $('#hello').text(data.hello);
	    },
	    error: function (jqXHR, textStatus, errorThrown) {
	      console.error('Error fetching data', textStatus, errorThrown);
	    }
	  });
	});
      });
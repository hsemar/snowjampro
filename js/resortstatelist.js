//var JSONListURL = "http://localhost/resorts/resources/resort.json";
var JSONListURL = "http://wise.wisdominfotech.com/jsonweb/index.jsp";

var locations;

$('#resortLocationsPage').bind('pageinit', function(event) {
	getLocationsList();
});

function getLocationsList() {
	$.getJSON(JSONListURL , function(data) {
		$('#resortLocations li').remove();
		locations = data.Resorts;
		$.each(locations, function(index, location) {
			$('#resortLocations').append('<li><a href="resortlist.html?id='+index+'">'+index+'</a></li>'); 
		});
		$('#resortLocations').listview('refresh');
	});
}
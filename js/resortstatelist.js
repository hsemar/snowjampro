var JSONListURL = "http://wise.wisdominfotech.com/jsonweb/index.jsp?callback=?";
var imageURL = "http://wise.wisdominfotech.com/jsonweb/images/";
//var JSONListURL = "http://wise.wisdominfotech.com/jsonweb/index.jsp";
//var imageURL = "http://wise.wisdominfotech.com/jsonweb/images/";

var locations;

$('#resortLocationsPage').bind('pageinit', function(event) {
	getLocationsList();
});

function getLocationsList() {
	$.getJSON(JSONListURL , function(data) {
		$('#resortLocations li').remove();
		locations = data.Resorts;
		$.each(locations, function(index, location) {
			$('#resortLocations').append('<li data-theme="c"><a href="resortlist.html?id='+index+'">'+index+'</a></li>'); 
		});
		$('#resortLocations').listview('refresh');
	});
}
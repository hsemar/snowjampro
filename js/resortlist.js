$('#resortListPage').live('pageshow', function(event) {
		var id = getUrlVars()["id"];
		$.getJSON(JSONListURL , function(data) {
		$('#resortList li').remove();
		var locations = data.Resorts;
		$.each(locations, function(index, location) {
			if(index==id) {
				$.each(location, function(value, resort) {
					$('#resortList').append('<li data-theme="c"><a href="resortview.html?loc='+index+'&id='+value+'">'+value+'</a></li>');		
				});
			}	
		});
		$('#resortList').listview('refresh');		
		});
});

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

$('#resortviewPage').live('pageshow', function(event) {
		var loc = getUrlVars()["loc"];
		var id = getUrlVars()["id"];
		$.getJSON(JSONListURL , function(data) {
		var locations = data.Resorts;
		$.each(locations, function(index, location) {
			if(index==loc) {
				$.each(location, function(value, resort) {
				id = id.replace("%20",' ');
					if(value==id){
					    //$('#resortView').remove();
						$.each(resort, function(resortindex, resortdetails) {
						      	var innerhtml = "<img src='images/"+resortdetails.Image+"' width='25' height='25' /><div id=resortDetails"+resortindex+"><h3 id=title1>"+resortdetails.Title+"</h3><p id=description1>"+resortdetails.Description+"</p></div>";
							$('#resortView').append(innerhtml);
						});
					}
				});
			}	
		});
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

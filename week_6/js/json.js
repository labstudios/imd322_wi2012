document.addEvent("domready", function(){
	
	var req = new Request.JSON({
		url: "json.php"
	});
	
	req.addEvent("success", function(json){
		for(var i = 0; i < json.length; ++i)
		{
			var widget = json[i];
			
			var widge = new Element("div");
			new Element("h1").set("html", widget.name).inject(widge);
			new Element("h5").set("html", widget.version).inject(widge);
			new Element("p").set("html", widget.description).inject(widge);
			
			widge.inject(update);
		}
	});
	
	req.send();
});
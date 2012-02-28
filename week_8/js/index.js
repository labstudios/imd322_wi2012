document.addEvent("domready", function(){
	var xml = new XMLObject("widgets.xml", function(data){
		//console.log(data.widget[0].name.text);
	});
	
	var xml2 = new XMLObject ("widgets.xml");
	
	xml2.addEvent("success", function(data){
		//console.log(data);
		document.id("company").set("html", data.company.text);
		
		for(var i = 0; i < data.widget.length; ++i)
		{
			var widget = data.widget[i];
			var widge = new Element("div");
			new Element("h1").set("html", widget.name.text).inject(widge);
			new Element("h5").set("html", widget.version.attributes.value).inject(widge);
			new Element("p").set("html", widget.description.text).inject(widge);
			
			widge.inject(document.id("widgets"));
		}
		
	});
	xml2.send();
});
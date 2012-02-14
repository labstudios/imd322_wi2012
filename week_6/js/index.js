document.addEvent("domready", function(){
	var req = new Request({
		url:"widgets.xml"
	});
	
	req.addEvent("success", function(resText, resXML){
		if(typeOf(resXML) != "document")
		{
			resXML = resXML.documentElement;
		}
		var widgets = resXML.getElements("widget");
		var update = document.id("update");
		for(var i = 0; i < widgets.length; ++i)
		{
			var widget = widgets[i];
			var name = widget.getElement("name").get("text");
			var version = widget.getElement("version").attributes.getNamedItem("value").value;
			var description = widget.getElement("description").get("text");
			
			var widge = new Element("div");
			new Element("h1").set("html", name).inject(widge);
			new Element("h5").set("html", version).inject(widge);
			new Element("p").set("html", description).inject(widge);
			
			widge.inject(update);
		}
	});
	
	req.send();
	
	/*var myXML = new XML2Object("widgets.xml");
	
	myXML.addEvent("complete", function(result){
		for(var i = 0; i < result.xmlObj.childNodes.length; ++i)
		{
			var widget = result.xmlObj.childNodes[i];
			var widgetObj = new Object();
			for(var w = 0; w < widget.childNodes.length; ++w)
			{
				var node = widget.childNodes[w];
				switch(node.name)
				{
					case "name":
						widgetObj.name = node.value;
					break;
					case "version":
						widgetObj.version = node.attributes.value;
					break;
					case "description":
						console.log(node);
					break;
				}
			}
			console.log(widgetObj);
		}
	});*/
});
/**
 * @author: Brent Allen
 * @requires MooTools core; Request
 * Traverses XML and creates a JavaScript object containing the data
*/
var XMLObject = new Class({
	
	Implements: [Events],
	
	initialize: function(filePath, ready)
	{
		this.req = new Request({
			url:filePath
		});
		this.readyFunction = ready;
		this.req.addEvent("success", this.fileRetrieved.bind(this));
		if(this.readyFunction)
		{
			this.req.send();
		}
	},
	
	send: function()
	{
		this.req.send();
	},
	
	fileRetrieved: function(responseText, responseXML){
		this.data = this.buildNode(responseXML.firstChild);
		if(this.readyFunction)
		{
			this.readyFunction(this.data);
		}
		this.fireEvent("success", this.data);
	},
	
	buildNode:function(node)
	{
		var data = new Object();
		for(var i = 0; i < node.childNodes.length; ++i)
		{
			if(!node.childNodes[i].nodeName.test(/^#/))
			{
				var curNode = node.childNodes[i];
				if(data[curNode.nodeName])
				{
					if(typeOf(data[curNode.nodeName]) == "array")
					{
						data[curNode.nodeName].push(this.buildNode(curNode));
					}
					else
					{
						var dt = data[curNode.nodeName];
						data[curNode.nodeName] = new Array();
						data[curNode.nodeName].push(dt);
						data[curNode.nodeName].push(this.buildNode(curNode));
					}
					
				}
				else
				{
					data[curNode.nodeName] = this.buildNode(curNode);
				}
			}
		}
		
		if(node.firstChild && node.firstChild.nodeValue && node.firstChild.nodeValue.trim() != "")
		{
			data.text = node.firstChild.nodeValue.trim();
		}
		for(i = 0; i < node.attributes.length; ++i)
		{
			if(!data.attributes)
			{
				data.attributes = new Object();
			}
			var attr = node.attributes[i];
			data.attributes[attr.name] = attr.value;
		}
		return data;
	}
});












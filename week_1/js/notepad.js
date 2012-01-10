/**
 * Be sure to rename your class!
*/
var Notepad = new Class({
	
	Implements: [Options, Events],
	
	options:{
		addedTag: "p"
	},

	initialize: function(element, options)
	{
		this.element = document.id(element);
		this.setOptions(options);
		
		this.header = this.element.getElement("h3");
		
		this.additive = this.element.get("data-bird");
		if(!this.additive)
		{
			this.additive = "";
		}
		this.header.addEvent("click", this.addNote.bind(this));
	},
	
	addNote: function(){
		var text = prompt("Type note here");
		
		var el = new Element(this.options.addedTag);
		el.set("html", text + " " + this.additive);
		
		el.inject(this.element);
	}
});

document.addEvent("domready", function(){
	var notepad = new Notepad("notepad");
	var n2 = new Notepad("notepad2", {
		addedTag: "h4"
	});
});
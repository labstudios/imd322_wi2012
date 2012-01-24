/**
 * Be sure to rename your class!
*/
var MyClass = new Class({
	
	//Extends: ,
	
	Implements: [Options, Events],
	
	options:{},

	initialize: function(element, options)
	{
		this.element = document.id(element);
		this.setOptions(options);
	}
});
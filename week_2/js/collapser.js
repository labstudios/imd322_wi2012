
var Collapser = new Class({
	
	Implements: Options,
	
	options:{
		clicker: ".header",
		content: ".content"
	},
	
	element: null,
	header: null,
	content: null,
	revealer: null,

	initialize: function(element, options)
	{
		this.element = document.id(element);
		this.setOptions(options);
		
		this.header = this.element.getElement(this.options.clicker);
		this.content = this.element.getElement(this.options.content);
		
		this.header.addEvent("click", this.toggleContent.bind(this));
		
		this.revealer = new Fx.Reveal(this.content, {
			transition: 'bounce:out',
			duration: 1000
		});
	},
	
	toggleContent: function()
	{
		this.revealer.toggle();
	}
});
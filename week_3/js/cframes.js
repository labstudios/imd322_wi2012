// JavaScript Document

var Ball = new Class({
	
	Extends: CanvasObject,
	
	Implements: [Events],

	initialize: function()
	{
		this.parent();
	},
	
	draw: function(){
		this.centeredCircle(15, "#ff0000");
	}
});

document.addEvent("domready", function(){
	var layer1 = new Layer();
	var ball = layer1.addChild(new Ball());
	var rect = layer1.addChild(new CanvasObject({
		draw: function(){
			this.centeredRectangle(50, 75, "#323232");
		}
	}));
	
	ball.x = 50;
	ball.y = 92;
	
	Stage.instance().startRunning();
});
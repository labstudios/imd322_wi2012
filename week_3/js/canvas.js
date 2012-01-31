document.addEvent("domready", function(){
	var canv = document.id("mycanvas");
	var context = canv.getContext("2d");
	var gridSpace = 50;
	context.fillStyle = "rgba(0,0,0,0.4)";
	// draw grid lines
	for(var i = 0; i <= canv.get("width").toInt(); i += gridSpace)
	{
		context.beginPath();
		context.moveTo(i, 0);
		context.lineTo(i, canv.get("height").toInt());
		context.stroke();
		context.closePath();
	}
	
	for(i = 0; i <= canv.get("height").toInt(); i += gridSpace)
	{
		context.beginPath();
		context.moveTo(0, i);
		context.lineTo(canv.get("width").toInt(), i);
		context.stroke();
		context.closePath();
	}
	//grid lines done
	//Draw a simple shape
	//set up colors and such
	context.strokeStyle = "black";
	context.lineWidth = 10;
	context.fillStyle = "rgba(255,0,0,0.5)";
	context.lineJoin = "round";
	context.lineCap = "round";
	context.shadowOffsetX = 5;
	context.shadowOffsetY = 5;
	context.shadowBlur = 15;
	context.shadowColor = "rgba(0,255,0,0.5)";
	//create the path and draw the image
	context.beginPath();
	context.moveTo(50, 50);
	context.lineTo(150, 50);
	context.lineTo(175, 225);
	context.lineTo(85, 185);
	context.lineTo(50, 50);
	context.fill();
	context.stroke();
	
	context.closePath();
	context.fillStyle = "rgba(255,0,0,1)";
	context.fillRect(200, 50, 150, 150);
	
	//now lets try some arcs.
	//first, reset the colors
	context.strokeStyle = "blue";
	context.lineWidth = 10;
	context.fillStyle = "rgba(120,120,120,1)";
	context.lineJoin = "round";
	context.lineCap = "round";
	context.shadowColor = "rgba(0,0,0,0)";
	//then start making a path
	context.beginPath();
	context.moveTo(300, 300);
	context.arcTo(400, 200, 450, 450, 50);
	context.stroke();
	context.closePath();
	
	context.beginPath();
	context.arc(50, 400, 15, 0, Math.PI*2);
	context.stroke();
	context.closePath();
	
	//adding an image to canvas
	
	var img = new Image();
	img.src = "img/squirrel.jpg";
	img.onload = function(){
		var ratio = 150/img.width;
		height = img.height * ratio;
		context.drawImage(img, 300, 300, 150, height);
	};
	
	
	
	
});
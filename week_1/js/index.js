document.addEvent("domready", function(){
	var morph = new Fx.Morph("ani", {
		duration: 3000
	});
	morph.start({
		'font-size': '200px',
		color: '#FF0000'
	});
	
	var ptags = document.id("content").getElements("p");
	//var ptags = $$("#content>p");
	ptags.set("morph", {
		duration: 2000
	});
	ptags.morph({
		color: "#00ff00"
	});
});
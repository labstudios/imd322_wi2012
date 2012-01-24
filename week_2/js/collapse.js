document.addEvent("domready", function(){
	$$(".collapser").each(function(item){
		new Collapser(item, {
			clicker: "h3",
			content: "div"
		});
	});
});
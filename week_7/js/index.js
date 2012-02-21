document.addEvent("domready", function(){
	document.id("clicker").addEvent("click", function(){
		//get the username from the input box
		var uname = document.id("username").get("value");
		//create the request object
		var req = new Request.HTML({
			url: "data.php",
			data: {
				username: uname
			},
			update: "ajdiv"
		});
		
		req.send();
	});
	
	
	/*
	//The below is a quick AJAX request/recieve
	document.id("clicker").addEvent("click", function(){
		document.id("ajdiv").load("data.php");
	});*/
	
});
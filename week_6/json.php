<?php
	$widget1 = new stdClass();
	$widget1->name = "myWidget";
	$widget1->version = "1.0";
	$widget1->description = "Now we can add <strong>HTML</strong> tags to our description!";
	
	$widget2 = new stdClass();
	$widget2->name = "mySecondWidget";
	$widget2->version = "1.2";
	$widget2->description = "It is <strong>cooler</strong> than the first.";
	
	$widgets = array($widget1, $widget2);
	
	echo json_encode($widgets);
?>
<?php
	$rand = (rand() * 10) % 3;
	//sleep(2);
	switch($rand)
	{
		case 0:
			echo "Good morning, ";
		break;
		case 1:
			echo "Good afternoon, ";
		break;
		case 2:
			echo "Good night, ";
		break;
	}
	
	echo $_POST['username']."!";
?>
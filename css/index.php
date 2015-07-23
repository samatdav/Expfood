<?php
include 'core/init.php';


if (logged_in())  {
	header('Location: main.php');
}

if (empty($_POST) === false) {
	if (empty($errors) === true) {

		// if (strlen($_POST['password']) < 6) {
		// 	$errors[] = 'password too short';
		// }
	}
}
?>

<!DOCTYPE html>
<html>

	<head>
		<meta name="viewport" content="initial-scale=1.0, user-scalable=no">
	    <meta charset="utf-8">
	    <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
	    <link rel="stylesheet" type="text/css" href="css/bootstrap-select.css">
	    <link href="css/css" rel="stylesheet" type="text/css">
	    <link href="css/css(1)" rel="stylesheet" type="text/css">
	    <link href="css/font-awesome.min.css" rel="stylesheet" type="text/css">
	    <link rel="stylesheet" type="text/css" href="css/style.css">
	    <link rel="stylesheet" type="text/css" href="css/signin.css">
	    <link rel="stylesheet" type="text/css" href="css/index.css">
	    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
		<link rel="icon" href="img/favicon.ico" type="image/x-icon">

	    <script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
	    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=places"></script>
	    <script type="text/javascript" src="js/gmaps.js"></script>
	    <script type="text/javascript" src="js/script.js"></script>
		<title>Express Food</title>
	</head>

	<body>
	  <div class="header  navbar-fixed-top">
        <nav class="navbar fluid-container">
          <div class="navbar-header">

          </div>
          <div class="navbar-collapse collapse navbar-right">
          </div>
        </nav>      
	  </div>

	    
            <img class="logo" id="logo_icon" src="img/icon_trans.png" alt="expfood">
            <img class="logo" id="logo_text" src="img/logo_main.png" alt="expfood">
            <div id="index_text_box"><img class="logo" id="index_text" src="img/index_text.png" alt="expfood"></div>
            <div id=""><img class="logo" id="index_address" src="img/address.png" alt="expfood"></div>
            <?php


	  		?>
        

    <?php

	if (isset($_GET['success']) && empty($_GET['success'])) {
		echo "You have registered!";
	} else {
		if (empty($_POST) === false && empty($errors) === true) {
			$register_data = array (
				'username' => $_POST['email'],
				'password' => $_POST['password'],
				'email' => $_POST['email'],
				'city' => $_POST['city'],
				'street' => $_POST['street'],
				'house' => $_POST['house'],
			);

			register_user($register_data);
			$username = $_POST['email'];
			$password = $_POST['password'];
			$login = login($username, $password);
			$_SESSION['user_id'] = $login;
			header('Location: main.php');
			exit();


		} else if (empty($errors) === false) {
			header('Location: index.php?again');
			
		}
	?>
	<a href="about.php" id="about_index"></span> О нас</a>
    <a href="signin.php"><button class="signin btn btn-primary">Log In</button></a> 
    <div class="input-wrap"><input autofocus id="pac-input" class="controls" type="text" placeholder="Куда доставить?"></div>
    <div id="map-canvas"></div>
		
    <div id="map-words">
    	<?php
			if (isset($_GET['again']) && empty($_GET['again'])) {
			include 'include/register_gmaps.php';

			}
    	?>
    </div>
	
	<?php
	}
	?>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-56789746-3', 'auto');
  ga('send', 'pageview');

</script>
</body>
</html>
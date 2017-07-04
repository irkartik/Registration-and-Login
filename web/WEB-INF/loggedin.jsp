<%-- 
    Document   : loggedin
    Created on : 4 Jul, 2017, 10:23:43 AM
    Author     : Raj
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<title>Welcome</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<script type="text/javascript" src="script.js"></script>
	<link rel="stylesheet" type="text/css" href="bootstrap.min.css">
</head>
<body>
	<div class="container1">
		<div class="login" style="text-align: center; color: white;">
			<h1>Welcome Back! ${firstname} ${lastname}</h1>
                        <hr>
                        <h4><a href="logout">Log Out</a></h4>
        </div>
	</div>
</body>
</html>

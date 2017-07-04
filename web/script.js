/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




var minAge = 18;
      var today = new Date()
      //Calculates age from given Birth Date in the form//
       function agecheck(birthDate, givenDate) {
        givenDate = new Date(today);
        var dt1 = document.getElementById('dob').value;
        var birthDate = new Date(dt1);
        var years = (givenDate.getFullYear() - birthDate.getFullYear());

        if (givenDate.getMonth() < birthDate.getMonth() ||
     givenDate.getMonth() == birthDate.getMonth() && givenDate.getDate() < birthDate.getDate()) {
            years--;
        }
    if (dt1 !== ""){
        if (years<minAge){
            document.getElementById('age-error').innerHTML = "Age should be above 21";
            document.getElementById('dob').style.backgroundColor="#a94442";
        }
        else{
            document.getElementById('age-error').innerHTML = "";
            document.getElementById('dob').style.backgroundColor="#ffffff";
        }
    }
    else {
        document.getElementById('age-error').innerHTML = "Date of Birth cannot be blank";
        document.getElementById('dob').style.backgroundColor="#a94442";
    }
 }





function validate() {
			var username, password;
			username = document.getElementById("username").value
			password = document.getElementById("password").value

			if (username == "admin" && password == "password"){
				alert("login successful");
				window.location = "loginpage.html"
			}
			else {
				alert("invalid login");
			}
		return false;
		}

function signup(){
	window.location = "signup.html"
}

function firstnamecheck(){
	var firstname = document.getElementById("firstname").value;
	if (firstname == ""){
			document.getElementById('firstname-error').innerHTML = "Firstname field cannot be empty";
			document.getElementById('firstname').style.backgroundColor="#a94442";
	}
	else if (firstname != ""){
			document.getElementById('firstname-error').innerHTML = "";
			document.getElementById('firstname').style.backgroundColor="#ffffff";
	}
	return false;
}

function lastnamecheck(){
	var lastname = document.getElementById("lastname").value;
	if (lastname == ""){
			document.getElementById('lastname-error').innerHTML = "Lastname field cannot be empty";
			document.getElementById('lastname').style.backgroundColor="#a94442";
	}
	else if (lastname != ""){
			document.getElementById('lastname-error').innerHTML = "";
			document.getElementById('lastname').style.backgroundColor="#ffffff";
	}
	return false;
}


/*function agecheck(){
	var currentdate = new Date();
	var currentyear = currentdate.getFullYear();
	var dob_year = document.getElementById("dob_year").value;

	if ((currentyear - dob_year) < 21) {
		document.getElementById("age-error").innerHTML = "Age should be above 21";
		document.getElementById("postgrad").disabled = true;
	}
	else if ((dob_year > currentyear) || dob_year=="" || isNaN(dob_year)){
		document.getElementById("age-error").innerHTML = "Enter a valid year";
		/*document.getElementById("postgrad").disabled = false;
		document.getElementById('dob_year').style.backgroundColor="#a94442";
	}
	else {
		document.getElementById("age-error").innerHTML = "";
		document.getElementById("postgrad").disabled = false;
		document.getElementById('dob_year').style.backgroundColor="#ffffff";
	}
	return false;
}*/


function emailcheck(){
	var email = document.getElementById("email").value;
		if (email.indexOf("@") != -1){
			if (email.indexOf(".") != -1){
			document.getElementById("email-error").innerHTML = "";
			document.getElementById('email').style.backgroundColor="#ffffff";
		}
	}
		else {
			document.getElementById("email-error").innerHTML = "Invalid Email Address";
			document.getElementById('email').style.backgroundColor="#a94442";
		}
	}
	
function mobilecheck(){
	var mobile = document.getElementById("mobile").value;

	if (mobile.length != 10 || isNaN(mobile)){
		document.getElementById("mobile-error").innerHTML = "Invalid Mobile Number";
		document.getElementById('mobile').style.backgroundColor="#a94442";
	}
	else{
		document.getElementById("mobile-error").innerHTML = "";
		document.getElementById('mobile').style.backgroundColor="#ffffff";
	}
	return false;
}

function checkeducation(){
	var grad = document.getElementById('grad').value;
	var postgrad = document.getElementById('postgrad').value;
	var currentdate = new Date();
	var currentyear = currentdate.getFullYear();

	if (isNaN(grad)){
		document.getElementById("qualification-error").innerHTML = "Enter Valid Graduation date";
	}
	else if (isNaN(postgrad)){
		document.getElementById("qualification-error").innerHTML = "Enter Valid Post Graduation date";
	}
	else if (grad >= postgrad){
		document.getElementById("qualification-error").innerHTML = "Post Graduation date should be after Graduation";
	}
	else {
		document.getElementById("qualification-error").innerHTML = "";
	}
	return false;
}

function addresscheck(){
	var splChars = "*|\":<>[]{}`\';()@&$#%";
	var address = document.getElementById("address").value;

	if (address != ""){
		for (var i = 0; i < address.length; i++) {
	    	if (splChars.indexOf(address.charAt(i)) != -1){
			    document.getElementById("address-error").innerHTML = "Address cannot have Special Characters!";
				document.getElementById('address').style.backgroundColor="#a94442";
				return false;
			}
			else {
				document.getElementById("address-error").innerHTML = "";
				document.getElementById('address').style.backgroundColor="#ffffff";
				return true;
			}
		}
	}
	else {
		document.getElementById("address-error").innerHTML = "Address cannot be empty";
		document.getElementById('address').style.backgroundColor="#a94442";
	}		
}

function usernamecheck(){
	var username = document.getElementById("username").value;

	if (username.length <= 3){
	    document.getElementById("username-error").innerHTML = "Username Should have more than 3 Characters";
		document.getElementById('username').style.backgroundColor="#a94442";
	}
	else {
		document.getElementById("username-error").innerHTML = "";
		document.getElementById('username').style.backgroundColor="#ffffff";
	}
	return false;
}

function passwordcheck(){
	var password = document.getElementById("password").value;
	var spl = "*|\":<>[]{}`\';()@&$#%";
	var num = "0123456789";

	if (password.length > 8){
		for (var i =0, k =password.length; i < password.length; i++){
			if (spl.indexOf(password.charAt(i)) == -1 || num.indexOf(password.charAt(k)) == -1){
				document.getElementById("password-error").innerHTML = "";
				document.getElementById('password').style.backgroundColor="#ffffff";

			}
			else {
			    document.getElementById("password-error").innerHTML = "Password Should Contain a Digit and a Special Character and should be at least 8 characters long";
				document.getElementById('password').style.backgroundColor="#a94442";
			}
		k--;
		}
	}
	else {
	    document.getElementById("password-error").innerHTML = "Password should be at least 8 characters long";
		document.getElementById('password').style.backgroundColor="#a94442";
	}
	return false;
}


function checkform(){
	var firstname = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;
/*	var day = document.getElementById("dob_day").value;
	var month = document.getElementById("dob_month").value;
	var year = document.getElementById("dob_year").value;*/
	var dob = document.getElementById("dob").value;
	var email = document.getElementById("email").value;
	var mobile = document.getElementById("mobile").value;
	var grad = document.getElementById("grad").value;
	var postgrad = document.getElementById("postgrad").value;
	var address = document.getElementById("address").value;
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if (firstname == "" || lastname == "" || mobile == "" || grad =="" || postgrad=="" || email == "" || address == "" || username=="" || password == "" || dob == ""){
		alert("All Fields Required!");
		return false;
	}
	else {
            return true;
        }
}
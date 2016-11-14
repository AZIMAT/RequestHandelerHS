function postdata(){
	var xhttp = new XMLHttpRequest();
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var save = document.getElementById("save").checked;
	if(save == true){
		localStorage["username"] = username;
		localStorage["password"] = password;
	}
	var ARGS ="dst=&popup=true&username="+username+"&password="+password;
     xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4){
			var json = xhttp.responseText;
			var xhr = new XMLHttpRequest();
			xhr.open("GET", "http://hs.kashanu.ac.ir/status", true);
			xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				var resp = xhr.responseText;
				location.reload();
				location.reload();

			  }
	}
	xhr.send();
			
		  }
     };
     xhttp.open("POST", "http://hs.kashanu.ac.ir/login", true);
	 xhttp.send(ARGS);
	
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("convert-submit").addEventListener("click", postdata);
});
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("logoff").addEventListener("click", logoff);
});
window.addEventListener("load", initialize);
function initialize(){
	var testu = localStorage["username"];
	var testp = localStorage["password"];
	if (testu != undefined)
		document.getElementById("username").value = testu;
	if (testp != undefined)
		document.getElementById("password").value = testp;
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://hs.kashanu.ac.ir/status", true);
	xhr.onreadystatechange = function() {
	  if (xhr.readyState == 4) {
		// JSON.parse does not evaluate the attacker's scripts.
		var resp = xhr.responseText;
		var res = resp.match("<title>mikrotik hotspot > status</title>");
		if(res != null){
			var res = resp.replace('<input type="submit" value="log off">',' ');
			document.getElementById("formdiv").innerHTML = res;
			
		}
		
	  }
	}
	xhr.send();
}
function logoff(){
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://hs.kashanu.ac.ir/logout", true);
	xhr.onreadystatechange = function() {
	  if (xhr.readyState == 4) {
		// JSON.parse does not evaluate the attacker's scripts.
		var resp = xhr.responseText;
		location.reload();
	  }
	}
	xhr.send();
}

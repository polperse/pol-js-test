function showhide(divname) {
	
	var div = document.getElementById(divname);
	
	if (div.style.display !== "none") {
	    div.style.display = "none";
	}
	else 
	{
	    div.style.display = "block";
	}
}
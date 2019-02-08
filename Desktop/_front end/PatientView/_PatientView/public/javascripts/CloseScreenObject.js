function CloseScreen() {
	this.pvclass = 'close';
}

CloseScreen.prototype._load = function() {
	document.getElementById('close_screen').style.display = 'block'
	document.getElementById('top_nav_bar').style.display = 'none'
}

CloseScreen.prototype._hide = function() {
	//document.getElementById('TopNavbar').style.display = 'none'
}
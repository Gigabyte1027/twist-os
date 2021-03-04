function openset() {
	document.getElementById('settings').style.left = '0px';
	document.getElementById('about').style.display = 'block';
}
function closeset() {
	document.getElementById('settings').style.left = '320px';
	document.getElementById('about').style.display = 'none';
}
function openabout() {
	document.getElementById('about').style.left = '0px';
	document.getElementById('settings').style.left = '-320px';
}
function closeabout() {
	document.getElementById('about').style.left = '320px';
	document.getElementById('settings').style.left = '0px';
}
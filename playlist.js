
function init(){
	var button = document.getElementById("addButton");
	button.onclick = handleButtonClick;
}
function handleButtonClick(){
	alert("button was clicked");
}
function test(){
	var test = getElementById("test");
	test.onclick = alertfn;
}
function alertfn(){
	alert("it worked!");
}
window.onload = init;
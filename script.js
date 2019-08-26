
function lightOn (){

}

function test (){
	console.log(1);
}

for (var i = 0; i <= 25; i++) {
	document.getElementById("case"+i);

}


document.getElementById("case1").onclick = function(){
	document.getElementById("case2").style.backgroundColor="blue";
}

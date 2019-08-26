

for (var i = 0; i <= 25; i++) {
	document.getElementById("Box"+i);

}


function light(nBox){
    var color = nBox.style.backgroundColor;
    if (color == ''){
   		color = 'white';	
    }
    if (color === 'white'){
    	nBox.style.backgroundColor = 'black';
    }
    else{
    	nBox.style.backgroundColor = 'white';
    }
};




function level1(){

}

function resetall(){
	for (var i = 1; i <= 25; i++) {
		document.getElementById(i).style.backgroundColor = 'white';
	}
}


function directionalColorCondition(direction_color,direction_id){
	if (direction_color == 'white') {
		document.getElementById(direction_id).style.backgroundColor = 'yellow'
	}
	else{
		document.getElementById(direction_id).style.backgroundColor = 'white'
	}
}

function reverseColor(nBox){
	var BoxNum = nBox.id;
	var top_id = BoxNum-5;
	var right_id =  parseInt(BoxNum)+1;
	var bot_id = parseInt(BoxNum)+5;
	var left_id = BoxNum-1;

	console.log(top_id,right_id,bot_id,left_id);

	var top_color = document.getElementById(top_id).style.backgroundColor;
	directionalColorCondition(top_color,top_id);

	var right_color = document.getElementById(right_id).style.backgroundColor;
	directionalColorCondition(right_color,right_id);

	var bot_color = document.getElementById(bot_id).style.backgroundColor;
	directionalColorCondition(bot_color,bot_id);

	var left_color = document.getElementById(left_id).style.backgroundColor;
	directionalColorCondition(left_color,left_id);

}

function clickLight(box){
    var color = box.style.backgroundColor;

    if (color === 'white'){
    	box.style.backgroundColor = 'yellow';
    }
    else{
    	box.style.backgroundColor = 'white';
    }
    reverseColor(box,color);
}

resetall();
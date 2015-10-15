#pragma strict

var blueHealth = 200;
var barPosition = 90;

function Start () {
	
}

function Update () {
	/**For now I have it so that when you click the left mouse button 
	the bar gets smaller but we can change that to be a collision with
	red team bullets and soldiers when those objects are in. 
	**/
 	if(Input.GetMouseButtonDown(0)){
		blueHealth = blueHealth - 10;
		barPosition = barPosition + 10;
	}
	if(blueHealth < 0){
		blueHealth = 0;
	}
	if(barPosition > 290){
		barPosition = 290;
	}
}

function OnGUI (){
	if(blueHealth == 200){
		GUI.backgroundColor = Color.green;
	}
	else{
		GUI.backgroundColor = Color.red;
	}
	GUI.Button(Rect(30,barPosition,20,blueHealth), "");
}	

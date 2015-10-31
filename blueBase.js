#pragma strict

var blueHealth = 200;
var barPosition = 75;

function Start () {
	
}

function Update () {
	if(blueHealth < 0){
		blueHealth = 0;
	}
	if(barPosition > 275){
		barPosition = 275;
	}
}

function OnCollisionEnter2D(other:Collision2D){
  	if(other.gameObject.name=="red_Soldier(Clone)"){
		blueHealth = blueHealth - 10;
		barPosition = barPosition + 10;
		Destroy(other.gameObject);  
	}
}

function OnGUI (){
	if(blueHealth == 200){
		GUI.backgroundColor = Color.green;
	}
	else{
		GUI.backgroundColor = Color.red;
	}
	GUI.Button(Rect(17,barPosition,20,blueHealth), "");
}	

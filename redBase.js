#pragma strict

var redHealth = 200;
var barPosition1 = 75;

function Start () {
	
}

function Update () {
	if(redHealth < 0){
		redHealth = 0;
	}
	if(barPosition1 > 275){
		barPosition1 = 275;
	}
}


function OnCollisionEnter2D(other:Collision2D){
  	if(other.gameObject.name=="blue_Soldier(Clone)"){
		redHealth = redHealth - 10;
		barPosition1 = barPosition1 + 10;
		Destroy(other.gameObject);  
	}
}

function OnGUI (){
	if(redHealth == 200){
		GUI.backgroundColor = Color.green;
	}
	else{
		GUI.backgroundColor = Color.red;
	}
	GUI.Button(Rect(590,barPosition1,20,redHealth), "");
}	

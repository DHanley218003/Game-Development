#pragma strict

var redSoldier: Rigidbody2D;
var redSpeed: float = -3.0;
var redSolHealth: int = 1;

Invoke("redSpawn",2);
function Start () {
}
function Update () {
	if (redSolHealth <= 0){
		Destroy(gameObject);
	}
}

function redSpawn(){
	var redSoldierInstance:Rigidbody2D;
	redSoldierInstance = Instantiate(redSoldier, Vector3 (6,Random.Range(5,-5),0), Quaternion.Euler(new Vector3(0,0,0)));
	redSoldierInstance.name  ="red_Soldier(Clone)";
	redSoldierInstance.velocity = new Vector2(redSpeed, 0);
}

function OnCollisionEnter2D(other:Collision2D){
  	if(other.gameObject.name=="blue_Soldier(Clone)"){
		redSolHealth --;  
	}
}

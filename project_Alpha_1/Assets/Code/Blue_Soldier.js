#pragma strict

var blueSoldier: Rigidbody2D;
var blueSpeed: float = 3.0;
var blueSolHealth: int = 1;

Invoke("blueSpawn",2);
function Start () {
}
function Update () {
	if (blueSolHealth <= 0){
		Destroy(gameObject);
	}
}

function blueSpawn(){
	var blueSoldierInstance:Rigidbody2D;
	blueSoldierInstance = Instantiate(blueSoldier, Vector3 (-6,Random.Range(5,-5),0), Quaternion.Euler(new Vector3(0,0,0)));
	blueSoldierInstance.name  ="blue_Soldier(Clone)";
	blueSoldierInstance.velocity = new Vector2(blueSpeed, 0);
}

function OnCollisionEnter2D(other:Collision2D){
  	if(other.gameObject.name=="red_Soldier(Clone)"){
		blueSolHealth --;  
	}
}

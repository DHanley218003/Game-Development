#pragma strict

var redSoldier: Rigidbody2D;
var redSpeed: float = -3.0;

Invoke("redSpawn",3);
function Start () {
}
function Update () {
	//soldierCollision(blue_Soldier(Clone));
	//destroyOffScreen();
}

function redSpawn(){
	var redSoldierInstance:Rigidbody2D;
	redSoldierInstance = Instantiate(redSoldier, Vector3 (6,Random.Range(5,-5),0), Quaternion.Euler(new Vector3(0,0,0)));
	redSoldierInstance.name  ="red_Soldier(Clone)";
	redSoldierInstance.velocity = new Vector2(redSpeed, 0);
}

/*  Can't get the collisions working properly...help welcome...but will
	continue to work on it.
	
function soldierCollision(other:Collision2D){
	if(other.gameObject.name=="blue_Soldier(Clone)"){
		Destroy(other.gameObject);
		Destroy(gameObject);
	}
}

	Having trouble with this...any help welcome
	Just want to make sure the soldiers are destroyed if they go off Screen.

function destroyOffScreen(){
	if(redSoldier.x >= 13.0){
		Destroy(GameObject);
	}
}
*/

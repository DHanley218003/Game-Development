#pragma strict
var thisPos = transform.position;
var pos;
var gBullet = GetComponent("green_Bullet");
function Start () 
{

}

function Update () 
{
    pos = GameObject.Find("green_Chassis").transform.position;
    transform.position = pos;
    if(Input.GetKey(KeyCode.LeftControl))
    	spawnBullet();
}

function spawnBullet()
{
	var bulletInstance:Rigidbody2D;
	
	bulletInstance = Instantiate(gBullet, Vector3.left, 
	Quaternion.Euler(new Vector3(0,0,0)));
	bulletInstance.name = "green_Bullet(Clone)";
}
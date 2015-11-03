#pragma strict
 // Used to make it look like it's shot from the gun itself (offset)
var xValue:float = 50.0; // Same as above
var green_Bullet:Rigidbody2D;
var bulletSpeed:float = 6.0;
var object_pos:Vector3;
var angle:float;
var rotationVector:Vector3;
var turnSpeed:int = 2;

	// Use this for initialization
	
function Start () 
{
	
}

function Update()
{ 

}

function FixedUpdate () 
{    
	
	
	object_pos = Camera.main.WorldToScreenPoint(transform.position);
	
	if (Input.GetKey(KeyCode.A))
	{
	angle -= turnSpeed;
	rotationVector = new Vector3 (0, 0, angle);
	transform.rotation = Quaternion.Euler(rotationVector);
	}
	else if (Input.GetKey(KeyCode.D))
	{
	angle += turnSpeed;
	rotationVector = new Vector3 (0, 0, angle);
	transform.rotation = Quaternion.Euler(rotationVector);
	}
	if (Input.GetKeyDown(KeyCode.LeftControl)) {
			// Instantiate the projectile at the position and rotation of this transform
	var green_BulletInstance : Rigidbody2D;
	green_BulletInstance = Instantiate(green_Bullet, new Vector3(transform.position.x + xValue, transform.position.y, transform.position.z), transform.rotation);
	green_BulletInstance.name  ="green_Bullet(Clone)";
	green_BulletInstance.velocity = transform.TransformDirection(transform.right * bulletSpeed);
	}
}


#pragma strict



var object_pos:Vector3;
var angle:float;
var rotationVector:Vector3;
var turnSpeed:int = 2;

	// Use this for initialization
	function Start () {
	}

	function Update(){ 
	}

	function FixedUpdate () {    
		//
		
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
		
	}

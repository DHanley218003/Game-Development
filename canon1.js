#pragma strict

var speed:float=3.0;
var RL:float = 6.0;
var LL:float = 6.0;
var yPos: float;

//var yPos: float;

function Start () {

}

function Update () {

	yPos=transform.position.y;
	MoveCharacter();
}


function MoveCharacter()
{
	if (Input.GetKey(KeyCode.UpArrow))
	{
		if(yPos>3.9){
			speed = 0.0;
			transform.Translate(Vector3.up * speed * Time.deltaTime);
		}else{
			speed=10;
			transform.Translate(Vector3.up * speed * Time.deltaTime);
			}
	}
	
	if (Input.GetKey(KeyCode.DownArrow))
	{
		if(yPos<-3.9){
			speed = 0.0;
			transform.Translate(Vector3.down * speed * Time.deltaTime);
		}else{
			speed=10;
			transform.Translate(Vector3.down * speed * Time.deltaTime);
			}
	}
}


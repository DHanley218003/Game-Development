#pragma strict
var speed:float = 6;
function Start () 
{ 
	transform.position = GameObject.Find("red_Chassis").transform.position;
	transform.Translate(Vector3.left*speed*Time.deltaTime);
}

function Update () 
{
   
}
#pragma strict
var thisPos = transform.position;
var pos;
function Start () 
{

}

function Update () 
{
    pos = GameObject.Find("red_Chassis").transform.position;
    transform.position = pos;
}
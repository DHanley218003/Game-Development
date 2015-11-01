#pragma strict
var thisPos = transform.position;
var pos;
function Start () 
{

}

function Update () 
{
    pos = GameObject.Find("green_chassis").transform.position;
    transform.Translate(pos);
}
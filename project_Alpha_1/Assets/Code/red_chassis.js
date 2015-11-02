#pragma strict

var speed:float=3.0;
var yPos:float;

function Start () 
{

}

function Update () 
{
    yPos=transform.position.y;
    MoveCharacter();
}

function MoveCharacter()
{
    if (Input.GetKey(KeyCode.O))
    {
        if(yPos>5){
            speed = 0.0;
            transform.Translate(Vector3.up * speed * Time.deltaTime);
        }else{
            speed=10;
            transform.Translate(Vector3.up * speed * Time.deltaTime);
        }
    }
	
    if (Input.GetKey(KeyCode.L))
    {
        if(yPos<-5){
            speed = 0.0;
            transform.Translate(Vector3.down * speed * Time.deltaTime);
        }else{
            speed=10;
            transform.Translate(Vector3.down * speed * Time.deltaTime);
        }
    }
}
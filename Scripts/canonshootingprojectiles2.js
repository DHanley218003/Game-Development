#pragma strict

var speed:float=3.0;
var RL:float = 6.0;
var LL:float = 6.0;
var yPos: float;
//var yPos: float;

var canonball:Rigidbody2D;
var canonballSpeed2: float= -20f;

function Start () {

}

function Update () {

	var canonballInstance:Rigidbody2D;
	if(Input.GetButtonDown("Fire1")){
		canonballInstance = Instantiate (canonball, transform.position, Quaternion.Euler(new Vector3(-1,0,0)));

		if (Input.GetKey(KeyCode.Space))
			canonballInstance.velocity = new Vector2(0,canonballSpeed2);

	yPos=transform.position.y;
	MoveCharacter();
}

}
function MoveCharacter()
{
	if (Input.GetKey(KeyCode.W))
	{
		if(yPos>3.9){
			speed = 0.0;
			transform.Translate(Vector3.up * speed * Time.deltaTime);
		}else{
			speed=10;
			transform.Translate(Vector3.up * speed * Time.deltaTime);
			}
	}
	}
	if (Input.GetKey(KeyCode.S))
	{
		if(yPos<-3.9){
			speed = 0.0;
			transform.Translate(Vector3.down * speed * Time.deltaTime);
		}else{
			speed=10;
			transform.Translate(Vector3.down * speed * Time.deltaTime);
			}
	}

function OnCollisionEnter2D(other:Collision2D){
	if(other.gameObject.name=="canonball(Clone)"){
		Destroy(other.gameObject);
		Destroy(gameObject);
		}
		}

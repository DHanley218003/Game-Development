#pragma strict

function OnCollisionEnter2D(other:Collision2D){
  	if(other.gameObject.name=="red_Soldier(Clone)"){
		Destroy(other.gameObject); 
    	Destroy(gameObject); 
	}
}
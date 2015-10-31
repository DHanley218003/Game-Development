﻿#pragma strict

var blue_Bullet : Rigidbody;

	function Update () {
		// Ctrl was pressed, launch a projectile
		if (Input.GetButtonDown("Fire1")) {
			// Instantiate the projectile at the position and rotation of this transform
			var clone : Rigidbody;
			clone = Instantiate(blue_Bullet, transform.position, transform.rotation);
			
			// Give the cloned object an initial velocity along the current 
			// object's Z axis
			clone.velocity = transform.TransformDirection (Vector3.right * 5);
		}
	}
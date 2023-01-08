
// You can write more code here

/* START OF COMPILED CODE */

class Floor extends Phaser.GameObjects.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "floor", frame);

		// this (components)
		const thisPhysicsBody = new PhysicsBody(this);
		thisPhysicsBody.static = true;
		thisPhysicsBody.allowGravity = false;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

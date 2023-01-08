// You can write more code here

/* START OF COMPILED CODE */

class Button extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "button", frame);

		// this (components)
		const thisPhysicsBody = new PhysicsBody(this);
		thisPhysicsBody.allowGravity = false;
		new Connection(this);
		new ButtonScript(this);

		/* START-USER-CTR-CODE */

    this.state = UNPRESSED;

    /* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */
  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

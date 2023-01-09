
// You can write more code here

/* START OF COMPILED CODE */

class tutorial extends Phaser.GameObjects.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "JumpTutorial", frame);

		this.scaleX = 0.25;
		this.scaleY = 0.25;

		// this (components)
		new TutorialScript(this);

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

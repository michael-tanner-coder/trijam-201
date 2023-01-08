// You can write more code here

/* START OF COMPILED CODE */

class Timer extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "timer-fill", frame);

		// this (components)
		const thisTween = new Tween(this);
		thisTween.duration = 7000;
		thisTween.startPlaying = false;
		thisTween.property = "displayWidth";
		thisTween.targetValue = 1;
		thisTween.onComplete = () => {console.log("done")};

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

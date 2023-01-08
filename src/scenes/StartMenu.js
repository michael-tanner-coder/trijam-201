
// You can write more code here

/* START OF COMPILED CODE */

class StartMenu extends Phaser.Scene {

	constructor() {
		super("StartMenu");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		this.add.image(80, 0, "background");

		// start_banner
		this.add.image(80, 58, "start-banner");

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

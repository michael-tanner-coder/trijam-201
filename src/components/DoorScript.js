// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class DoorScript extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__DoorScript"] = this;

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	/** @returns {DoorScript} */
	static getComponent(gameObject) {
		return gameObject["__DoorScript"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */

  update() {
    switch (this.gameObject.state) {
      case CLOSED:
        this.gameObject.displayHeight = lerp(
          this.gameObject.displayHeight,
          this.gameObject.height,
          0.2
        );
        if (this.gameObject.displayHeight >= this.gameObject.height) {
          this.gameObject.displayHeight = this.gameObject.height;
        }
        break;
      case OPEN:
        this.gameObject.displayHeight = lerp(
          this.gameObject.displayHeight,
          0,
          0.2
        );
        if (this.gameObject.displayHeight <= 0) {
          this.gameObject.displayHeight = 0;
        }
        break;
    }
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

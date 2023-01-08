// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class Lerp extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__Lerp"] = this;

		/* START-USER-CTR-CODE */

    /* END-USER-CTR-CODE */

		// custom definition props
		this.property = "x";
		this.targetValue = 0;
		this.percentage = 0.1;
		this.active = true;
		this.tolerance = 0.001;
	}

	/** @returns {Lerp} */
	static getComponent(gameObject) {
		return gameObject["__Lerp"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */

  update() {
    let gameObject = this.gameObject;
    if (this.active) {
      gameObject[this.property] = lerp(
        gameObject[this.property],
        this.targetValue,
        this.percentage,
        this.tolerance
      );
    }
  }
  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

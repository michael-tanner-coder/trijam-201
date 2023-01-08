// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class ScoreFillScript extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__ScoreFillScript"] = this;

		/* START-USER-CTR-CODE */

    /* END-USER-CTR-CODE */
	}

	/** @returns {ScoreFillScript} */
	static getComponent(gameObject) {
		return gameObject["__ScoreFillScript"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */

  update() {
    this.gameObject.displayWidth = lerp(
      this.gameObject.displayWidth,
      (this.gameObject.scoreComponent.score /
        this.gameObject.scoreComponent.maxScore) *
        this.gameObject.width,
      0.1
    );
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

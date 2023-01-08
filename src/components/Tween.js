// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class Tween extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__Tween"] = this;

		/* START-USER-CTR-CODE */
    this.animation = null;
    /* END-USER-CTR-CODE */

		// custom definition props
		this.duration = 0;
		this.ease = "linear";
		this.startPlaying = true;
		this.callbackScope = "gameObject.scene";
		this.property = "x";
		this.targetValue = 0;
		this.repeat = 0;
		this.onComplete = () => {console.log("done");};
		this.onStart = () => {console.log("start"); };
		this.yoyo = false;
	}

	/** @returns {Tween} */
	static getComponent(gameObject) {
		return gameObject["__Tween"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */

  update() {
    if (!this.animation) {
      this.animation = this.gameObject.scene.tweens.add({
        targets: [this.gameObject],
        paused: !this.startPlaying,
        [this.property]: this.targetValue,
        ease: this.ease,
        duration: this.duration,
        repeat: this.repeat,
        callbackScope: this[this.callbackScope],
        yoyo: this.yoyo,
        onStart: () => this.onStart(),
        onComplete: () => this.onComplete(),
      });
    }
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

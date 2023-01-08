// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class PhysicsBody extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__PhysicsBody"] = this;

		/* START-USER-CTR-CODE */

    /* END-USER-CTR-CODE */

		// custom definition props
		this.enabled = true;
		this.static = false;
		this.bounce = 0;
		this.allowGravity = true;
	}

	/** @returns {PhysicsBody} */
	static getComponent(gameObject) {
		return gameObject["__PhysicsBody"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */

  awake() {
    this.gameObject.scene.physics.world.enableBody(this.gameObject);
    this.gameObject.body.enable = this.enabled;
    this.gameObject.body.immovable = this.static;
    this.gameObject.body.allowGravity = this.allowGravity;
    this.gameObject.body.setBounce(this.bounce);
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

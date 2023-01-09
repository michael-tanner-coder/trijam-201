// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class Score extends UserComponent {
  constructor(gameObject) {
    super(gameObject);

    this.gameObject = gameObject;
    gameObject["__Score"] = this;

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */

    // custom definition props
    this.score = 0;
    this.maxScore = 3;
    this.minScore = 0;
    this.player;
  }

  /** @returns {Score} */
  static getComponent(gameObject) {
    return gameObject["__Score"];
  }

  /** @type {Phaser.GameObjects.Image} */
  gameObject;

  /* START-USER-CODE */

  gainPoint() {
    this.score += 1;
  }

  losePoint() {
    this.score -= 1;
  }

  update() {
    this.score = clamp(this.score, this.minScore, this.maxScore);
    if (this.score === this.maxScore) {
      // emit winner event
      this.gameObject.scene.events.emit(GAME_OVER, this.player);
    }
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

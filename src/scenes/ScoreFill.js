// You can write more code here

/* START OF COMPILED CODE */

class ScoreFill extends Phaser.GameObjects.Image {
  constructor(scene, x, y, texture, frame) {
    super(scene, x ?? 0, y ?? 0, texture || "score-fill", frame);

    this.setOrigin(0, 0.5);

    // this (components)
    new Score(this);
    new ScoreFillScript(this);

    /* START-USER-CTR-CODE */
    this.scoreComponent = Score.getComponent(this);
    this.displayWidth = 0;
    /* END-USER-CTR-CODE */
  }

  /* START-USER-CODE */
  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

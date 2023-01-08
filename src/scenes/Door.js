// You can write more code here

/* START OF COMPILED CODE */

class Door extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x ?? 0, y ?? 0, texture || "blast-door", frame);

    this.setOrigin(0, 0);

    // this (components)
    new Connection(this);
    new DoorScript(this);

    /* START-USER-CTR-CODE */
    this.state = OPEN;
    this.displayHeight = 0;
    /* END-USER-CTR-CODE */
  }

  /* START-USER-CODE */

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

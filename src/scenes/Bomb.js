// You can write more code here

/* START OF COMPILED CODE */

class Bomb extends Phaser.GameObjects.Image {
  constructor(scene, x, y, texture, frame) {
    super(scene, x ?? 0, y ?? 0, texture || "bomb", frame);

    // this (components)
    const thisTween = new Tween(this);
    thisTween.duration = 500;
    thisTween.ease = "Bounce.Out";
    thisTween.property = "scale";
    thisTween.targetValue = 1.2;
    thisTween.repeat = -1;
    thisTween.yoyo = true;
    const thisPhysicsBody = new PhysicsBody(this);
    thisPhysicsBody.bounce = 0.5;
    thisPhysicsBody.allowGravity = false;

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  /* START-USER-CODE */

  update() {
    //   prevent bomb from falling through floor
    if (this.y + this.height / 2 > 108) {
      this.y = 108 - this.height / 2;
    }
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

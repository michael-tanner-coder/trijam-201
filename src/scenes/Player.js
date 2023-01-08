// You can write more code here

/* START OF COMPILED CODE */

class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x ?? 6, y ?? 6, texture || "player-basic", frame);

    // this (components)
    const thisPhysicsBody = new PhysicsBody(this);
    thisPhysicsBody.bounce = 0.2;
    new Jump(this);
    new Connection(this);
    new PlayerScript(this);

    /* START-USER-CTR-CODE */
    this.prev_type = "basic";
    this.state = GROUNDED;
    this.lose_anim = this.scene.tweens.add({
      targets: [this],
      paused: true,
      y: 150,
      angle: -180,
      ease: "Quad.easeIn",
      duration: 500,
      repeat: false,
      callbackScope: this,
      onComplete: function () {
        this.lose_anim.restart();
        switchCharacter(this, this.scene.characters);
        if (this.scene.state != GAME_OVER) {
          this.scene.resetRound();
        }
      },
    });

    this.scene.events.on("playerLose", (player) => {
      if (player === this) {
        this.lose_anim.play();
      }
    });
    /* END-USER-CTR-CODE */
  }

  /* START-USER-CODE */

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

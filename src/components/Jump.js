// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class Jump extends UserComponent {
  constructor(gameObject) {
    super(gameObject);

    this.gameObject = gameObject;
    gameObject["__Jump"] = this;

    /* START-USER-CTR-CODE */
    this.is_jumping = false;
    this.can_double_jump = false;
    this.gravity = 300;
    this.jump_height = 10;
    this.jump_release_gravity_multiplier = 10;
    this.y_velocity = 0;
    this.buffer_distance = 6;
    this.buffered_jump = false;
    this.jump_was_pressed = false;
    /* END-USER-CTR-CODE */

    // custom definition props
    this.jumpKey = "";
  }

  /** @returns {Jump} */
  static getComponent(gameObject) {
    return gameObject["__Jump"];
  }

  /** @type {Phaser.GameObjects.Image} */
  gameObject;

  /* START-USER-CODE */

  distanceToFloor() {
    let gameObject = this.gameObject;
    let floor_y = gameObject.scene.floor.y;
    let bottom_y = gameObject.y + gameObject.height;
    let distance_to_floor = Math.abs(bottom_y - floor_y);
    return distance_to_floor;
  }

  update() {
    let gameObject = this.gameObject;
    let jumpKey = gameObject.scene.keys[this.jumpKey];
    if (!jumpKey) return;

    // player state machine
    switch (gameObject.state) {
      case GROUNDED:
        // reset gravity to default when grounded
        gameObject.body.setGravityY(300);

        // prevent input during the round_end and game_over phases
        if (gameObject.scene.timer.displayWidth <= 1) {
          return;
        }

        // start up a jump when grounded
        if (Phaser.Input.Keyboard.JustDown(jumpKey) || this.buffered_jump) {
          gameObject.state = JUMPING;
          gameObject.scene.jump_sound.play();
          this.buffered_jump = false;
        }
        break;

      case JUMPING:
        // initial velocity for jump
        gameObject.body.velocity.y =
          -2 * Math.sqrt(2 * this.gravity * this.jump_height);

        // fall slower when holding the jump button
        if (jumpKey.isDown) {
          gameObject.body.setGravityY(200);
        }

        // if the jump key is released or we have collided with an object, start falling
        if (jumpKey.isUp || gameObject.body.touching.up) {
          gameObject.state = FALLING;
        }
        break;

      case FALLING:
        // fall faster when the jump button is released
        if (jumpKey.isUp) gameObject.body.setGravityY(600);

        // if the player has touched solid ground below, enter GROUNDED state
        if (gameObject.body.touching.down) {
          gameObject.state = GROUNDED;
          gameObject.scene.player_hit_ground_sound.play();
        }

        // check for input and buffer a jump
        if (
          this.distanceToFloor() <= this.buffer_distance &&
          Phaser.Input.Keyboard.JustDown(jumpKey)
        ) {
          this.buffered_jump = true;
        }

        // if the input was released, dump the buffer
        if (jumpKey.isUp) this.buffered_jump = false;

        break;
    }
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

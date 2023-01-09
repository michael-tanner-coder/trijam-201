// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class ButtonScript extends UserComponent {
  constructor(gameObject) {
    super(gameObject);

    this.gameObject = gameObject;
    gameObject["__ButtonScript"] = this;

    /* START-USER-CTR-CODE */
    this.target_y = this.gameObject.y;
    this.presses = 1;
    /* END-USER-CTR-CODE */
  }

  /** @returns {ButtonScript} */
  static getComponent(gameObject) {
    return gameObject["__ButtonScript"];
  }

  /** @type {Phaser.GameObjects.Image} */
  gameObject;

  /* START-USER-CODE */

  resetPresses() {
    this.presses = 1;
  }

  activateDoors() {
    this.gameObject.scene.doors?.forEach((door) => {
      // only open one door on the first button press
      if (this.gameObject.scene.first_press === true) {
        const connection = Connection.getComponent(this.gameObject);
        const connectedDoor = connection.object;
        door.state = door === connectedDoor ? CLOSED : OPEN;
      }
      // switch the states of both doors on every subsequent button press
      else {
        door.state = door.state === OPEN ? CLOSED : OPEN;
      }
    });

    // door sound
    this.gameObject.scene.door_sound.play();
    this.gameObject.scene.first_press = false;
  }

  update() {
    // button state machine
    switch (this.gameObject.state) {
      case UNPRESSED:
        this.gameObject.body.y = this.gameObject.y;
        this.gameObject.setY(this.target_y);
        if (this.gameObject.body.touching.down) {
          this.gameObject.state = PRESSED;
        }
        break;

      case PRESSED:
        if (this.gameObject.body.touching.up && this.presses > 0) {
          this.activateDoors();
          // this.gameObject.state = RELEASED;
          this.presses -= 1;
        }
        this.gameObject.body.y = this.gameObject.y;
        this.gameObject.setY(38);
        break;

      case RELEASED:
        this.gameObject.y++;
        if (this.gameObject.y > this.target_y) {
          this.gameObject.setY(this.target_y);
          this.gameObject.state = UNPRESSED;
          this.gameObject.scene.button_sound.play();
        }
        break;
    }
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

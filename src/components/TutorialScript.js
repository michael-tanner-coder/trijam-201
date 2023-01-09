// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class TutorialScript extends UserComponent {
  constructor(gameObject) {
    super(gameObject);

    this.gameObject = gameObject;
    gameObject["__TutorialScript"] = this;

    /* START-USER-CTR-CODE */
    this.target_x = gameObject.x;
    this.gameObject.scene.events.on("moveprompt", () => {
      this.movePrompt();
    });
    /* END-USER-CTR-CODE */

    // custom definition props
    this.prompt = "JumpTutorial";
  }

  /** @returns {TutorialScript} */
  static getComponent(gameObject) {
    return gameObject["__TutorialScript"];
  }

  /** @type {Phaser.GameObjects.Image} */
  gameObject;

  /* START-USER-CODE */

  movePrompt() {
    // move tutorial prompt on the x-axis by one full unit (size of prompt)
    this.target_x = this.gameObject.x + this.gameObject.displayWidth;
    console.log(this.target_x);
  }

  update() {
    this.gameObject.setTexture(this.prompt);
    let gameObject = this.gameObject;
    let promptKey = gameObject.scene.keys.enter;
    if (Phaser.Input.Keyboard.JustDown(promptKey)) {
      this.gameObject.scene.events.emit("moveprompt");
    }
    gameObject.x = lerp(gameObject.x, this.target_x, 0.15);
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

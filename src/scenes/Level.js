// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {
  constructor() {
    super("Level");

    /* START-USER-CTR-CODE */
    this.first_press = true;
    this.characters = ["player-basic", "player-short", "player-tall"];
    this.states = {
      NEXT_BOMB: "NEXT_BOMB",
      COUNTDOWN: "COUNTDOWN",
      ROUND_START: "ROUND_START",
      ROUND_END: "ROUND_END",
      GAME_OVER: "GAME_OVER",
      TITLE_SCREEN: "TITLE_SCREEN",
    };
    this.state = this.states.TITLE_SCREEN;
    this.round_duration = 20000; // in milliseconds
    this.bomb_target_y = 62;
    this.tick_timer = 0; // in frames
    this.tick_duration = 100; // in frames
    this.escalation = 0;
    this.transitionEvent = "transitionState";

    const defaultState = {
      exit: this.states.NEXT_BOMB,
      on: () => {},
      update: () => {},
    };

    this.state_machine = {
      initial: this.states.TITLE_SCREEN,
      states: {
        [this.states.TITLE_SCREEN]: {
          ...defaultState,
          exit: this.states.NEXT_BOMB,
        },
        [this.states.NEXT_BOMB]: {
          ...defaultState,
          exit: this.states.COUNTDOWN,
        },
        [this.states.COUNTDOWN]: {
          ...defaultState,
          exit: this.states.ROUND_START,
        },
        [this.states.ROUND_START]: {
          ...defaultState,
          exit: this.states.ROUND_END,
        },
        [this.states.ROUND_END]: {
          ...defaultState,
          exit: this.states.GAME_OVER,
        },
        [this.states.GAME_OVER]: {
          ...defaultState,
          exit: this.states.NEXT_BOMB,
        },
      },
    };
    /* END-USER-CTR-CODE */
  }

  /** @returns {void} */
  editorCreate() {
    // background
    const background = new Background(this, 80, 0);
    this.add.existing(background);

    // bomb
    const bomb = new Bomb(this, 84, -37);
    this.add.existing(bomb);

    // floor
    const floor = new Floor(this, 80, 108);
    this.add.existing(floor);

    // timer
    const timer = new Timer(this, 52, 112);
    this.add.existing(timer);
    timer.setOrigin(0, 0.5);

    // timer_frame
    this.add.image(78, 112, "timer-frame");

    // button_1
    const button_1 = new Button(this, 138, 42);
    this.add.existing(button_1);

    // ceiling_1
    const ceiling_1 = this.add.image(137, 38, "ceiling");
    ceiling_1.flipX = true;

    // button
    const button = new Button(this, 22, 42);
    this.add.existing(button);

    // ceiling
    this.add.image(23, 38, "ceiling");

    // blast_door
    const blast_door = new Door(this, 40, 39);
    this.add.existing(blast_door);

    // hour_glass
    this.add.image(78, 102, "hour-glass");

    // player_1
    const player_1 = new Player(this, 21, 79);
    this.add.existing(player_1);

    // blast_door_1
    const blast_door_1 = new Door(this, 115, 39);
    this.add.existing(blast_door_1);

    // player_2
    const player_2 = new Player(this, 138, 79);
    this.add.existing(player_2);
    player_2.flipX = true;
    player_2.flipY = false;

    // collider
    const collider = new Collider(this, 22, 35);
    this.add.existing(collider);
    collider.visible = false;

    // collider_1
    const collider_1 = new Collider(this, 138, 35);
    this.add.existing(collider_1);
    collider_1.visible = false;

    // pointSign
    const pointSign = new PointSign(this, 22, 20);
    this.add.existing(pointSign);

    // pointSign_1
    const pointSign_1 = new PointSign(this, 138, 20);
    this.add.existing(pointSign_1);

    // scoreFill
    const scoreFill = new ScoreFill(this, 16, 16);
    this.add.existing(scoreFill);

    // score
    this.add.image(22, 16, "score");

    // score_1
    this.add.image(138, 16, "score");

    // explosion
    const explosion = new Explosion(this, 78, 72);
    this.add.existing(explosion);
    explosion.visible = false;

    // start_banner
    const start_banner = this.add.image(80, 48, "start-banner");

    // scoreFill_1
    const scoreFill_1 = new ScoreFill(this, 132, 16);
    this.add.existing(scoreFill_1);

    // winnerUI
    const winnerUI = new WinnerUI(this, 80, 48);
    this.add.existing(winnerUI);
    winnerUI.visible = false;

    // bigText
    const bigText = this.add.sprite(78, 51, "text-one");
    bigText.visible = false;

    // lists
    const players = [player_1, player_2];
    const buttons = [button_1, button];
    const doors = [blast_door, blast_door_1];
    const ground = [floor];
    const stoppers = [collider_1, collider];
    const explosions = [];
    const scorebars = [scoreFill_1, scoreFill];

    // bomb (components)
    const bombTween = Tween.getComponent(bomb);
    bombTween.startPlaying = false;

    // button_1 (components)
    const button_1Connection = Connection.getComponent(button_1);
    button_1Connection.object = blast_door_1;

    // button (components)
    const buttonConnection = Connection.getComponent(button);
    buttonConnection.object = blast_door;

    // blast_door (components)
    const blast_doorConnection = Connection.getComponent(blast_door);
    blast_doorConnection.object = player_1;

    // player_1 (components)
    const player_1Jump = Jump.getComponent(player_1);
    player_1Jump.jumpKey = "w";
    const player_1Connection = Connection.getComponent(player_1);
    player_1Connection.object = scoreFill;

    // blast_door_1 (components)
    const blast_door_1Connection = Connection.getComponent(blast_door_1);
    blast_door_1Connection.object = player_2;

    // player_2 (components)
    const player_2Jump = Jump.getComponent(player_2);
    player_2Jump.jumpKey = "up";
    const player_2Connection = Connection.getComponent(player_2);
    player_2Connection.object = scoreFill_1;

    // scoreFill (components)
    const scoreFillScore = Score.getComponent(scoreFill);
    scoreFillScore.player = player_1;

    // explosion (components)
    const explosionTween = new Tween(explosion);
    explosionTween.duration = 1000;
    explosionTween.ease = "Quad.easeIn";
    explosionTween.startPlaying = false;
    explosionTween.property = "scale";
    explosionTween.targetValue = 4;

    // scoreFill_1 (components)
    const scoreFill_1Score = Score.getComponent(scoreFill_1);
    scoreFill_1Score.score = 0;
    scoreFill_1Score.player = player_2;

    this.background = background;
    this.bomb = bomb;
    this.floor = floor;
    this.timer = timer;
    this.player_1 = player_1;
    this.player_2 = player_2;
    this.scoreFill = scoreFill;
    this.explosion = explosion;
    this.start_banner = start_banner;
    this.scoreFill_1 = scoreFill_1;
    this.winnerUI = winnerUI;
    this.bigText = bigText;
    this.players = players;
    this.buttons = buttons;
    this.doors = doors;
    this.ground = ground;
    this.stoppers = stoppers;
    this.explosions = explosions;
    this.scorebars = scorebars;

    this.events.emit("scene-awake");
  }

  /** @type {Background} */
  background;
  /** @type {Bomb} */
  bomb;
  /** @type {Floor} */
  floor;
  /** @type {Timer} */
  timer;
  /** @type {Player} */
  player_1;
  /** @type {Player} */
  player_2;
  /** @type {ScoreFill} */
  scoreFill;
  /** @type {Explosion} */
  explosion;
  /** @type {Phaser.GameObjects.Image} */
  start_banner;
  /** @type {ScoreFill} */
  scoreFill_1;
  /** @type {WinnerUI} */
  winnerUI;
  /** @type {Phaser.GameObjects.Sprite} */
  bigText;
  /** @type {Player[]} */
  players;
  /** @type {Button[]} */
  buttons;
  /** @type {Door[]} */
  doors;
  /** @type {Floor[]} */
  ground;
  /** @type {Collider[]} */
  stoppers;
  /** @type {Array<any>} */
  explosions;
  /** @type {ScoreFill[]} */
  scorebars;

  /* START-USER-CODE */
  // JAM CHANGES
  // TODO: prevent player input during round_end phase
  // TODO: reverse the countdown animation
  // TODO: implement tutorial

  // BUGS
  // TODO: tall player can knock button out of place
  // TODO: bomb can fall through the floor sometimes (unsure of how to replicate)
  // TODO: tick sound doesn't sync well with the timer
  // TODO: no victory sound plays on game over

  transitionState(...args) {
    this.events.emit(this.state_machine.states[this.state].exit, ...args);
  }

  createAnimationEventListeners() {
    this.bigText.on("animationstart", (animation, frame) => {
      if (animation.key === "countdown") {
        this.countdown_sound.play();
      }
    });

    this.bigText.on("animationupdate", (animation, frame) => {
      if (animation.key === "countdown") {
        this.countdown_sound.play();
      }
    });

    this.bigText.on("animationcomplete", (animation) => {
      if (animation.key === "countdown") {
        this.countdown_sound.play();
        this.events.emit(this.states.ROUND_START);
      }
    });
  }

  createStateMachineEventListeners() {
    const states = Object.keys(this.state_machine.states);
    states.forEach((state) => {
      const stateObject = this.state_machine.states[state];
      const stateChange = (...args) => {
        this.state = this.states[state];
        console.log(this.state);
        stateObject.on(...args);
      };
      this.events.on(state, stateChange, this);
    });
    this.events.on(this.transitionEvent, this.transitionState);
  }

  createStateOnMethods = () => {
    // TITLE SCREEN
    this.state_machine.states.TITLE_SCREEN.on = () => {};

    // NEXT BOMB
    this.state_machine.states.NEXT_BOMB.on = () => {
      this.bomb.body.allowGravity = true;
      this.bomb.visible = true;
      this.setEscalationValue();
      this.buttons.forEach((button) => {
        const buttonScript = ButtonScript.getComponent(button);
        buttonScript.resetPresses();
        buttonScript.gameObject.state = RELEASED;
      });
    };

    // COUNTDOWN
    this.state_machine.states.COUNTDOWN.on = () => {
      this.getMusicWithCorrectTempo();
      this.bigText.play("countdown");
    };

    // ROUND START
    this.state_machine.states.ROUND_START.on = () => {
      // start ticking timer and playing bomb animation
      const timer_tween = Tween.getComponent(this.timer).animation;

      // start timer
      if (timer_tween.state === Phaser.Tweens.REMOVED) {
        timer_tween.restart();
        this.tweens.existing(timer_tween);
      } else {
        timer_tween.play(true);
      }

      // start bomb animation
      const bomb_tween = Tween.getComponent(this.bomb).animation;
      bomb_tween.play();
    };

    // ROUND END
    this.state_machine.states.ROUND_END.on = () => {
      this.explosion.visible = false;
      this.explosion.scale = 1;
      this.bomb.visible = false;
    };

    // GAME OVER
    this.state_machine.states.GAME_OVER.on = (winner) => {
      this.bomb.body.allowGravity = false;
      this.bomb.y = -40;
      this.explosion.visible = false;
      this.showWinner(winner);
    };
  };

  createStateUpdateMethods() {
    // TITLE SCREEN
    this.state_machine.states.TITLE_SCREEN.update = () => {
      this.start_banner.visible = true;
      if (this.keys.enter.isDown) {
        this.start_banner.visible = false;
        this.resetRound();
      }
    };

    // NEXT BOMB
    this.state_machine.states.NEXT_BOMB.update = () => {
      // after bomb hits ground, move to countdown state
      if (this.bomb.body.touching.down) {
        this.bomb_hit_ground_sound.play();
        this.cameras.main.shake(200, 0.02);
        this.events.emit(this.states.COUNTDOWN);
      }
    };

    // COUNTDOWN
    this.state_machine.states.COUNTDOWN.update = () => {};

    // ROUND START
    this.state_machine.states.ROUND_START.update = () => {
      this.tick_timer--;
      if (this.tick_timer <= 0) {
        this.tick_sound.play();
        this.tick_duration = (this.timer.displayWidth / this.timer.width) * 100;
        this.tick_timer = this.tick_duration;
      }

      if (this.timer.displayWidth <= 1) {
        const explosion_anim = Tween.getComponent(this.explosion).animation;
        explosion_anim.callbackScope = this;
        explosion_anim.setCallback(
          "onComplete",
          () => {
            this.doors.forEach((door) => {
              // get losing player
              if (door.state === OPEN) {
                const losingPlayer = Connection.getComponent(door).object;
                this.events.emit("playerLose", losingPlayer);
              }

              // get winning player
              if (door.state === CLOSED) {
                const winningPlayer = Connection.getComponent(door).object;
                const scorebar = Connection.getComponent(winningPlayer).object;
                const winningPlayerScore = Score.getComponent(scorebar);
                winningPlayerScore.gainPoint();
              }

              //
              this.events.emit(this.states.ROUND_END);
            });
          },
          [],
          this
        );
        explosion_anim.setCallback(
          "onActive",
          () => {
            this.explosion_sound.play();
          },
          [],
          this
        );
        explosion_anim.play();
        this.explosion.visible = true;
      }
    };

    // ROUND END
    this.state_machine.states.ROUND_END.update = () => {
      // TODO: move game state change into this loop instead of in the player animation logic
      this.players.forEach((player) => {
        // if (player.lose_anim.complete && this.state !==) {
        //   this.resetRound();
        // }
      });
    };

    // GAME OVER
    this.state_machine.states.GAME_OVER.update = () => {
      if (this.keys.enter.isDown) {
        this.winnerUI.visible = false;
        this.bigText.visible = false;
        this.resetGame();
      }
    };
  }

  updateStateMachine() {
    this.state_machine.states[this.state].update();
  }

  getPlayerScores() {
    let scores = [];
    this.players.forEach((player) => {
      const pScorebar = Connection.getComponent(player).object;
      const score = Score.getComponent(pScorebar).score;
      const score_obj = { score, player };
      scores.push(score_obj);
    });
    return scores;
  }

  setEscalationValue() {
    let scores = this.getPlayerScores();
    let highest_score = 0;
    scores.forEach((score_obj) => {
      if (score_obj.score > highest_score) {
        highest_score = score_obj.score;
      }
    });
    this.escalation = highest_score;
  }

  getMusicWithCorrectTempo() {
    const SOUNDS = this.sound.sounds;
    SOUNDS.forEach((s) => {
      if (MUSIC_SOUNDS[s.key]) {
        s.pause();
      }
    });

    let music_keys = Object.keys(MUSIC_MAP);
    music_keys.forEach((key) => {
      if (MUSIC_MAP[key] === this.escalation) {
        let song = SOUNDS.find((s) => s.key === key);
        song.play();
        song.loop = true;
      }
    });
  }

  getRoundDuration() {
    return (this.round_duration = 20000 - this.escalation * 3000);
  }

  resetRound() {
    this.doors.forEach((door) => {
      door.state = OPEN;
    });
    this.first_press = true;
    // this.explosion.scale = 1;
    // this.explosion.visible = false;
    this.bomb.scale = 1;
    this.bomb.y = -40;
    this.fall_sound.play();
    this.events.emit(this.states.NEXT_BOMB);
  }

  resetGame() {
    this.escalation = 0;
    this.resetRound();
    this.players.forEach((player) => {
      const scorebar = Connection.getComponent(player).object;
      const scoreComponent = Score.getComponent(scorebar);
      scoreComponent.score = 0;
      // switchCharacter(player, this.characters);
    });
  }

  showWinner(winner) {
    this.winnerUI.visible = true;
    this.bigText.visible = true;
    this.bigText.setTexture("p1-text");
    if (winner === this.player_1) this.bigText.setTexture("p1-text");
    if (winner === this.player_2) this.bigText.setTexture("p2-text");
  }

  checkForWinner() {}

  prioritizeSoundInCollection(sound, collection) {
    let key = sound.key.toLowerCase();
    if (collection[key]) {
      sound.volume = 1 / collection[key];
    }
  }

  create() {
    // sounds
    this.jump_sound = this.sound.add("Jump");
    this.door_sound = this.sound.add("DoorSound");
    this.countdown_sound = this.sound.add("CountdownSound");
    this.button_sound = this.sound.add("ButtonSound");
    this.bomb_hit_ground_sound = this.sound.add("HitGroundSound");
    this.player_hit_ground_sound = this.sound.add("GroundedSound");
    this.fall_sound = this.sound.add("FallSound");
    this.explosion_sound = this.sound.add("Explosion");
    this.tick_sound = this.sound.add("BlipSound");
    this.menu_sound = this.sound.add("MenuSound");
    this.music_150 = this.sound.add("button_game_150");
    this.music_170 = this.sound.add("button_game_170");
    this.music_190 = this.sound.add("button_game_190");

    this.getMusicWithCorrectTempo();

    const SOUNDS = this.sound.sounds;
    console.log(SOUND_COLLECTIONS);
    SOUNDS.forEach((sound) => {
      SOUND_COLLECTIONS.forEach((collection) => {
        this.prioritizeSoundInCollection(sound, collection);
      });
    });

    // controls
    this.keys = this.input.keyboard.addKeys({
      a: Phaser.Input.Keyboard.KeyCodes.A,
      s: Phaser.Input.Keyboard.KeyCodes.S,
      d: Phaser.Input.Keyboard.KeyCodes.D,
      w: Phaser.Input.Keyboard.KeyCodes.W,
      up: Phaser.Input.Keyboard.KeyCodes.UP,
      down: Phaser.Input.Keyboard.KeyCodes.DOWN,
      left: Phaser.Input.Keyboard.KeyCodes.LEFT,
      right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
      enter: Phaser.Input.Keyboard.KeyCodes.ENTER,
    });

    this.editorCreate();

    //   colliders
    this.physics.add.collider(this.players, this.ground);
    this.physics.add.collider(this.bomb, this.ground);
    this.physics.add.collider(this.players, this.buttons);
    this.physics.add.collider(this.buttons, this.stoppers);

    // states
    this.createAnimationEventListeners();
    this.createStateMachineEventListeners();
    this.createStateOnMethods();
    this.createStateUpdateMethods();
  }

  update() {
    // background wrapping animation
    this.background.tilePositionY += 1;

    // game state machine
    this.updateStateMachine();
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

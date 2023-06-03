class Title extends Phaser.Scene {
    constructor() {
        super("Title")
    }

    create() {
        this.add.text(960, 540, "Roly Poly: To the End")
        this.input.on('pointerdown', () => {
            this.scene.start("SlugMsg");
        })
    }
}

class SlugMsg extends MessageScene {
    constructor() {
        super("SlugMsg", "Slug Message", "Watch out for slugs!", "SlugGame")
    }
}

class SlugVMsg extends MessageScene {
    constructor() {
        super("SlugVMsg", "Slug Victory Message", "That's good work!", "SnailMsg")
    }
}

class SnailMsg extends MessageScene {
    constructor() {
        super("SnailMsg", "Snail Message", "Watch out for snails!", "SnailGame")
    }
}

class SnailVMsg extends MessageScene {
    constructor() {
        super("SnailVMsg", "Snail Victory Message", "Good Job!", "LastMsg")
    }
}

class LastMsg extends MessageScene {
    constructor() {
        super("LastMsg", "Last Level Message", "This is the last level!", "LastGame")
    }
}

class LastVMsg extends MessageScene {
    constructor() {
        super("LastVMsg", "Last Level Victory Message", "The roly poly gets a badge!", "Victory")
    }
}

class SlugGame extends GameScene {
    constructor() {
        super("SlugGame", "Slug Gameplay", "Game Scene: Dodge Two Slugs (Jump)", "SlugVMsg")
    }
}

class SnailGame extends GameScene {
    constructor() {
        super("SnailGame", "Snail Gameplay", "Game Scene: Dodge Two Snails", "SnailVMsg")
    }
}

class LastGame extends GameScene {
    constructor() {
        super("LastGame", "Last Gameplay", "Game Scene: Dodge Slugs and Snails (Three)", "Victory")
    }
}

class Victory extends Phaser.Scene {
    constructor() {
        super("Victory")
    }

    create() {
        this.add.text(960, 540, "Animation: The Roly Poly Gets a Badge")
        this.input.on('pointerdown', () => {
            this.scene.start("Title");
        })
    }
}

const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Title, SlugMsg, SlugGame, SlugVMsg, SnailMsg, SnailGame, SnailVMsg, LastMsg, LastGame, LastVMsg, Victory],
    title: "Adventure Game",
});

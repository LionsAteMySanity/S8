class MessageScene extends Phaser.Scene {
    constructor(key, name, msg, nxkey) {
        super(key);
        this.name = name;
        this.msg = msg;
        this.next = nxkey
    }

    create() {
        this.add.text(960, 540, this.msg)
        this.input.on('pointerdown', () => {
            this.scene.start(this.next);
        })
    }

    update() {
        onpointerdown
    }
}

class GameScene extends Phaser.Scene {
    constructor(key, name, desc, nxkey) {
        super(key);
        this.name = name;
        this.desc = desc;
        this.next = nxkey
    }

    create() {
        this.add.text(960, 540, this.desc)
        this.input.on('pointerdown', () => {
            this.scene.start(this.next);
        })
    }
}
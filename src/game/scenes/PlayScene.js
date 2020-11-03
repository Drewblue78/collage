import { Scene } from 'phaser'


export default class PlayScene extends Scene {
  constructor() {
    super({ key: 'PlayScene' })
    document.getElementById("game-container").addEventListener("dragover", (ev) => ev.preventDefault())
    document.getElementById("game-container").addEventListener("drop", (ev) => {
      ev.preventDefault()
      if (ev.dataTransfer.files.length > 0) {
        //Dragging in new files
        for (var f of ev.dataTransfer.files) {
          var reader = new FileReader()
          reader.onload = () => {
            // var img = new Image()
            this.textures.once("addtexture", function () {
              var piece = this.add.image(100, 100, f.name)
              piece.setInteractive()
              this.input.setDraggable(piece)
              piece.scale = 300 / piece.height
              this.input.on('pointerdown', listener)

            }, this)

            this.textures.addBase64(f.name, reader.result)



          }
          reader.readAsDataURL(f)
        }
      }
    })
  }

  create() {
    this.add.image(400, 300, 'sky')

    const piece = this.add.image(400, 200,)
    piece.setInteractive()
    piece.scale = 3
    this.input.setDraggable(piece)
    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

      gameObject.x = dragX;
      gameObject.y = dragY;

    });

  }
}
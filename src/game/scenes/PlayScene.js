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

    }
    )

  }
}




        // Export canvas and download as image *

        //     var link = document.getElementById('btn-download');
        // link.addEventListener('click', function (e) {

        //   var canvas = document.createElement('canvas');
        //   var context = canvas.getContext("2d");
        //   canvas.width = 805;
        //   canvas.height = 605;


        //   $('#photo').children('canvas').each(function () {
        //     var image = this;

        //     context.beginPath();
        //     context.rect((image.offsetLeft - 480), (image.offsetTop - 76), image.width,
        //       image.height);
        //     context.fillStyle = "white";
        //     context.fill();

        //     context.drawImage(image, (image.offsetLeft - 480 + 5), (image.offsetTop - 76 + 5),
        //       (image.width - 10), (image.height - 10));
        //   });

        //   link.href = canvas.toDataURL();   // Save all combined images to one image
        //   link.download = "photo.png";      // Download the image
        // }, false);

        //   }

        // }
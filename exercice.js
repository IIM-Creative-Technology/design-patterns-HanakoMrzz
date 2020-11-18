document.addEventListener('keydown', function (e){
  /* switch (e.code) {...*/

  // check if method in imageManager exists
  if (imageManager.hasOwnProperty(e.code)){
      imageManager.execute(e.code)
  }
})

let imageManager = {
    image: document.querySelector('.twitter-picture'),
    ArrowUp: function (){
      this.image.style.top = this.image.offetsetTop - 10 + 'px'
    },
    ArrowLeft : function (){
      this.image.style.left = this.image.offsetLeft - 10 + 'px'
    },
    ArrowRight : function (){
      this.image.style.left = this.image.offsetLeft - 10 + 'px'
    },
    ArrowDown: function (){
      this.image.style.top = this.image.offsetTop + 10 + 'px'
    },
}

ImageManager.execute = function (key) {
  let methodName = ImageManager[key]
  return methodName.apply(imageManager)
}

setInterval(function (){
  // add a random move
  var value = Math.floor(Math.random()*4);
    switch(value){
      case 0:
           imageManager.ArrowUp()

      case 1:
           imageManager.ArrowDown()

      case 2:
          imageManager.ArrowLeft()

      case 3:
          imageManager.ArrowRight()

      }
}, 500)

class Slider {
  constructor(slidePiece) {
    console.log(
      "🚀 ~ file: script.js ~ line 3 ~ Slider ~ constructor ~ slidePiece",
      slidePiece
    );
    this.slider = slidePiece;
    this.slideI = slidePiece.getElementsByClassName("slide");
    this.nextB = slidePiece.querySelector("next");
    this.prevB = slidePiece.querySelector("prev");
    this.i = 0;
    this.prevSlideIndx = this.slideI.length - 1;
    this.nextSlideIndx = 1;
    this.isSliding = false;
  }
}

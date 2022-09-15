class Slider {
    constructor(slidePiece) {
        this.slider = slidePiece;
        this.slideI = sliderPiece.getElementsByClassName("slide");
        this.nextB = slidePiece.querySelector("next");
        this.prevB = slidePiece.querySelector("prev");
        this.i = 0;
        this.prevSlideIndx = this.slideI.length - 1;
        this.nextSlideIndx = 1;
        this.isSliding = false;
    }
}
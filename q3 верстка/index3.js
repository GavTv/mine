document.getElementById("playButton").addEventListener("click", function () {
  var audio = document.getElementById("myAudio");
  if (audio.paused) {
    audio.play();
    this.textContent = "Du'r";
  } else {
    audio.pause();
    this.textContent = " søt";
  }
});

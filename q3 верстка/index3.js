document.getElementById("playButton").addEventListener("click", function () {
  var audio = document.getElementById("myAudio");
  if (audio.paused) {
    audio.play();
    this.textContent = "EX";
  } else {
    audio.pause();
    this.textContent = "EX";
  }
});

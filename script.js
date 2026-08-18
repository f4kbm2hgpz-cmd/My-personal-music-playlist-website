document.addEventListener("DOMContentLoaded", function () {
  const playBtn = document.getElementById("playBtn");
  const player = document.getElementById("youtubePlayer");

  if (playBtn && player) {
    playBtn.addEventListener("click", function () {
      player.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    });
  }
});

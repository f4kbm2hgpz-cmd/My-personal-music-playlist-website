const playlistId = "PLlBTRvaC0XtKnzRLR5m7dc1S58gk_nZJ_";

document.addEventListener("DOMContentLoaded", function () {
  const playBtn = document.getElementById("playBtn");
  const iframe = document.querySelector(".youtube-wrap iframe");

  if (playBtn && iframe) {
    playBtn.addEventListener("click", function () {
      iframe.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    });
  }
});

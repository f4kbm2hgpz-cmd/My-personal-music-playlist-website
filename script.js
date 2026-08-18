document.addEventListener("DOMContentLoaded", function () {
  const playBtn = document.getElementById("playBtn");

  if (playBtn) {
    playBtn.addEventListener("click", function () {
      const iframe = document.querySelector(".youtube-wrap iframe");

      if (iframe) {
        iframe.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }
    });
  }
});

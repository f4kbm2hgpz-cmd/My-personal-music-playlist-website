let player;
let playerReady = false;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("youtubePlayer", {
    events: {
      onReady: function () {
        playerReady = true;

        const playBtn = document.getElementById("playBtn");
        const prevBtn = document.getElementById("prevBtn");
        const nextBtn = document.getElementById("nextBtn");

        if (playBtn) {
          playBtn.onclick = function () {
            if (playerReady) {
              player.playVideo();
            }
          };
        }

        if (prevBtn) {
          prevBtn.onclick = function () {
            if (playerReady) {
              player.previousVideo();
            }
          };
        }

        if (nextBtn) {
          nextBtn.onclick = function () {
            if (playerReady) {
              player.nextVideo();
            }
          };
        }
      }
    }
  });
}

const youtubeScript = document.createElement("script");
youtubeScript.src = "https://www.youtube.com/iframe_api";
document.head.appendChild(youtubeScript);

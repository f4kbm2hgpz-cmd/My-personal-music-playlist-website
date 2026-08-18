let player;

function onYouTubeIframeAPIReady() {
  const iframe = document.querySelector(".youtube-wrap iframe");

  if (!iframe) return;

  player = new YT.Player(iframe, {
    events: {
      onReady: function () {
        const playBtn = document.getElementById("playBtn");

        if (playBtn) {
          playBtn.addEventListener("click", function () {
            player.playVideo();
          });
        }
      }
    }
  });
}

const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
document.head.appendChild(tag);

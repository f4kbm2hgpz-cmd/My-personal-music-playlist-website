const playlistId = "PLlBTRvaC0XtKnzRLR5m7dc1S58gk_nZJ_";

document.addEventListener("DOMContentLoaded", () => {
  const player = document.createElement("div");

  player.innerHTML = `
    <div style="margin:20px auto; max-width:700px;">
      <iframe
        width="100%"
        height="380"
        src="https://www.youtube.com/embed/videoseries?list=${playlistId}"
        title="Samajwadi Playlist"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
    </div>
  `;

  document.body.appendChild(player);
});

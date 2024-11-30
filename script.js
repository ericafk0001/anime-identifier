/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "particles.json", function () {
  console.log("callback - particles.js config loaded");
});

document.getElementById("form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const imageInput = document.getElementById("imageInput");
  const imageBlob = imageInput.files[0]; // image blob

  const resultName = document.getElementById("result-name");
  const resultImage = document.getElementById("result-image");

  if (imageBlob) {
    const formData = new FormData();
    formData.append("image", imageBlob);

    const response = await fetch("https://api.trace.moe/search", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    const resultEp = result.result[0];
    const resultImg = resultEp.image;

    const anilistResponse = await fetch('https://graphql.anilist.co', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query ($id: Int) {
            Media (id: $id, type: ANIME) {
              id
              title {
                romaji
                english
                native
              }
            }
          }
        `,
        variables: {
          id: resultEp.anilist
        }
      })
    });

    const anilistResult = await anilistResponse.json();
    // use english title if available, else use romaji, else use native
    const animeTitle = anilistResult.data.Media.title.english || anilistResult.data.Media.title.romaji || anilistResult.data.Media.title.native;


    resultName.textContent = `Anime Name: ${animeTitle}`;
    resultImage.src = resultImg;
  } else {
    console.error("Error. Did you upload an image?");
  }
});

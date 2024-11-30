/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "particles.json", function () {
  console.log("callback - particles.js config loaded");
});

document.getElementById("form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const imageInput = document.getElementById("imageInput");
  const imageBlob = imageInput.files[0]; // image blob

  if (imageBlob) {
    const formData = new FormData();
    formData.append("image", imageBlob);

    const response = await fetch("https://api.trace.moe/search", {
      method: "POST",
      body: formData,
    });

    const resultName = document.getElementById("result-name");
    const resultImage = document.getElementById("result-image");
    const resultEpisode = document.getElementById("result-episode");
    const resultSim = document.getElementById("result-sim");
    const resultCard = document.getElementById("result-card");

    const result = await response.json();
    const resultAnime = result.result[0];
    const resultSimilarity = result.result[0].similarity;
    const resultImg = result.result[0].video;

    console.log(result);
    resultName.textContent = `Anime Name: ${resultAnime.filename}`;
    resultEpisode.textContent = `Episode: ${resultAnime.episode}`;
    resultSim.textContent = `Similarity: ${(resultSimilarity * 100).toFixed(
      1
    )}%`;
    resultImage.src = resultImg;
    resultImage.style.display = "block";
    resultCard.style.display = "flex";
  } else {
    console.log("a problem occured");
    alert("Error. Did you upload an image?");
  }
});

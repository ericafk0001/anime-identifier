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
    const resultImg = result.result[0].image;

    console.log(result);
    resultName.textContent = `Anime Name: ${resultEp.filename}`;
    resultImage.src = resultImg;
  } else {
    console.error("Error. Did you upload an image?");
  }
});

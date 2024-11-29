particlesJS.load("particles-js", "particles.json", function () {
  console.log("particles.js loaded - callback");
});

const formData = new FormData();
formData.append("image", imageBlob);
await fetch("https://api.trace.moe/search", {
  method: "POST",
  body: formData,
}).then((e) => e.json());

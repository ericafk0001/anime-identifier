const formData = new FormData();
formData.append("image", imageBlob);
await fetch("https://api.trace.moe/search", {
  method: "POST",
  body: formData,
}).then((e) => e.json());

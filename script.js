document.addEventListener("DOMContentLoaded", function () {
  let loader = document.getElementById("loader");

  setTimeout(function () {
    if (loader) {
      loader.style.display = "none";
    }
  }, 1000); // 1 second baad hide hoga
});
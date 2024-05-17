const downloadBtn = document.getElementById("download-btn");
const progressBar = document.querySelector("#download-btn .progress-bar");

downloadBtn.addEventListener("click", function () {
  downloadBtn.classList.add("downloading");

  let progression = 0;
 
  const interval = setInterval(function () {
    progression += Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    if (progression > 100) {
      progression = 100;
    }
    progressBar.style.width = progression + "%";

    if (progression === 100) {
      clearInterval(interval);

      setTimeout(function () {
        downloadBtn.classList.remove("downloading");
        progressBar.style.width = "0%";
      }, 1000);
    }
  }, 500);
});

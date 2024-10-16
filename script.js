document.getElementById("yesBtn").addEventListener("click", function() {
  alert("🎉🎉 YAYY, Kita Jadiann!!!!😋 🎉🎉");
});

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", function() {
  let randomX = Math.floor(Math.random() * window.innerWidth);
  let randomY = Math.floor(Math.random() * window.innerHeight);

  noBtn.style.position = "absolute";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

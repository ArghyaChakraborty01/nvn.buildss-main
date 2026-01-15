function moveRandomEl(elm) {
  elm.style.position = "absolute";

  const container = elm.closest(".container");
  const maxX = container.clientWidth - elm.offsetWidth;
  const maxY = container.clientHeight - elm.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  elm.style.left = x + "px";
  elm.style.top = y + "px";
}

const moveRandom = document.getElementById("move-random");

if (moveRandom) {
  
  moveRandom.addEventListener("mouseover", () => {
    moveRandomEl(moveRandom);
  });

  
  moveRandom.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveRandomEl(moveRandom);
  });

  
  moveRandom.addEventListener("click", (e) => {
    e.preventDefault();
  });
}

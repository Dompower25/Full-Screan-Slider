const bolls = document.querySelectorAll(".boll");

bolls.forEach((boll) => {
  boll.addEventListener("mousemove", (element) => {
    const x = element.layerX - 200;
    const y = element.layerY - 200;

    const bg = element.target;
    bg.style.transform = `translate(${x / 8}px, ${y / 8}px)`;
  });

  boll.addEventListener("mouseleave", (element) => {
    const x = element.layerX;
    const y = element.layerY;
    const bg = element.target;
    bg.style.transform = `translate(${x}}px, ${y}px)`;
  });
});

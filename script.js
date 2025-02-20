document.addEventListener("click", function (event) {
  const clickText = document.createElement("span");
  clickText.textContent = "Click";
  clickText.style.position = "absolute";
  clickText.style.left = `${event.pageX}px`;
  clickText.style.top = `${event.pageY - 20}px`;  
  clickText.style.fontSize = "16px";
  clickText.style.fontWeight = "bold";
  clickText.style.color = "#f8ca00";
  clickText.style.fontFamily = "Rubik Mono One"
  clickText.style.pointerEvents = "none";
  clickText.style.pointerEvents = "none";
  clickText.style.opacity = "1";
  clickText.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";
  document.body.appendChild(clickText);

  setTimeout(() => {
    clickText.style.opacity = "0";
    clickText.style.transform = "translateY(-10px)";
  }, 50);

  setTimeout(() => {
    clickText.remove();
  }, 500);
});

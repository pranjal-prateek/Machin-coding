document.addEventListener("click", (e) => {
  let x = e.clientX;
  let y = e.clientY;
  let totalCircles = document.querySelectorAll(".circle");
  if (totalCircles.length === 2) {
    totalCircles.forEach((circ) => {
      document.body.removeChild(circ);
    });
  }
  // let radius =Math.random();
  let radius = "100px";

  // Create circle element
  const circle = document.createElement("div");
  circle.classList.add("circle");

  circle.style.top = y - 50 + "px";
  circle.style.left = x - 50 + "px";
  circle.style.width = radius;
  circle.style.height = radius;

  document.body.appendChild(circle);

  // Log coordinates to the console
  //
  console.log(x, y);
});

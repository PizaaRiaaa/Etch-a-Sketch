const canvas = document.querySelector(".canvas");
const clear = document.querySelector(".clear");
const eraser = document.querySelector(".eraser");
const black_brush = document.querySelector(".black");
const crazy_brush = document.querySelector(".crazy");

const grids_16 = document.querySelector(".grids16");
const grids_32 = document.querySelector(".grids32");
const grids_64 = document.querySelector(".grids64");

const FOREGROUND = "#f8f8f2";

const randomColors = () => {
  // CRAZY COLORS
  const colors = [
    "#ff79c6",
    "#ff5555",
    "#ff5555",
    "#50fa7b",
    "blue",
    "orange",
    "violet",
    "purple",
    "brown",
  ];

  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    let random = Math.floor(Math.random() * colors.length);
    hoverColor(colors[random], cell);
  });
};

const clearCanvas = () => {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.backgroundColor = FOREGROUND;
  });
};

const eraserForCanvas = () => {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    hoverColor(FOREGROUND, cell);
  });
};

const blackBrush = () => {
  const cells = document.querySelectorAll(".cell");
  const BLACK = "#000000";
  cells.forEach((cell) => {
    hoverColor(BLACK, cell);
  });
};

const hoverColor = (color, cell) => {
  cell.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = color;
  });
};

const displayGrid = (number) => {
  canvas.innerHTML = "";
  for (let i = 1; i <= number; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 1; j <= number; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      row.appendChild(cell);
      hoverColor("black", cell);
      canvas.appendChild(row);
    }
  }
};

displayGrid(16);

clear.addEventListener("click", clearCanvas);
eraser.addEventListener("click", eraserForCanvas);
black_brush.addEventListener("click", blackBrush);
crazy_brush.addEventListener("click", randomColors);

grids_16.addEventListener("click", () => displayGrid(16));
grids_32.addEventListener("click", () => displayGrid(32));
grids_64.addEventListener("click", () => displayGrid(64));

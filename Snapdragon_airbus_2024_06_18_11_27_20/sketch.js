let gridSize = 20; // Size of each pixel in the grid
let hoverColor=100; // Color for hovered pixels
let colors = []; // Array to store colors for each pixel
let pixelSize = []; // Array to store sizes for each pixel  
let numberColors = []; // Array to store custom colors for each number
let keyColor=100
function setup() {
  createCanvas(windowWidth, windowHeight); // Create a canvas
  hoverColor = color(255, 0, 0); // Initial hover color (red)
  drawGrid(); // Draw the initial grid

  // Define custom colors for numbers 1 to 9
  for (let i = 1; i <= 9; i++) {
    numberColors[i] = color(random(255), random(255), random(255));
  }
}

function draw() {
  // Drawing code here
}

function mouseMoved() {
  // Get the coordinates of the hovered pixel
  let x = floor(mouseX / gridSize);
  let y = floor(mouseY / gridSize);

  // Set the fill color to the color of the hovered pixel
  fill(keyColor);

  // Draw a rectangle at the hovered pixel position
  rect(x * gridSize, y * gridSize, pixelSize[x][y], pixelSize[x][y]);
}

function keyPressed() {
  if (key === ' ') { // Clear the canvas when spacebar is pressed
    clearCanvas();
  } else if (key == 'z') { // Change hover color to yellow
    keyColor = color(255, 255, 0);
  } else if (key === 'x') { // Change hover color to green
    keyColor = color(0, 255, 0);
  } else if (key === 'c') { // Change hover color to blue
    keyColor = color(0, 0, 255);
  } else if (key === 'v') { // Change hover color to purple
    keyColor = color(128, 0, 128);
  } else if (key === 'b') { // Change hover color to white
    keyColor = color(255);
  } else if (!isNaN(parseInt(key)) && parseInt(key) >= 1 && parseInt(key) <= 9) { // Change hover color to custom color for the number
    keyColor = numberColors[parseInt(key)];
  }
}

function drawGrid() {
  // Draw the grid of pixels
  for (let x = 0; x < width; x += gridSize) {
    colors.push([]); // Create an array for each column
    pixelSize.push([]); // Create an array for each column
    for (let y = 0; y < height; y += gridSize) {
      // Set the stroke color to black
      stroke(0);
      // Draw a rectangle at each grid position
      let size = random(gridSize / 2, gridSize); // Random size for the pixel
      rect(x, y, size, size);
      colors[floor(x / gridSize)].push(hoverColor); // Initialize colors to hover color
      pixelSize[floor(x / gridSize)].push(size); // Store size for each pixel
    }
  }
}

function clearCanvas() {
  // Clear the canvas by drawing a white rectangle over it
  fill(255);
  rect(0, 0, width, height);
}

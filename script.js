

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to progressively darken the square on each hover
function darkenSquare(square) {
    let opacity = parseFloat(square.dataset.opacity) || 0; // Get the current opacity or set it to 0
    if (opacity < 1) {
        opacity += 0.2; // Increase opacity by 0.1 (10%)
        square.dataset.opacity = opacity; // Update the data-opacity attribute
        square.style.backgroundColor = getRandomColor();
        square.style.opacity = opacity; // Apply the new opacity
    }
}
//create dynamic grid
function createGrid(squaresPerSide) {
    const container = document.querySelector('.container');
    container.innerHTML = ''; // Clear any existing grid

    const containerSize = 600; // Fixed container size (600px)
    const squareSize = containerSize / squaresPerSide; // Calculate size of each square

    // Create squares
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const square = document.createElement('div');
        square.classList.add('grid');
        square.style.width = `${squareSize}px`; // Set dynamic width
        square.style.height = `${squareSize}px`; // Set dynamic height
        square.dataset.opacity = 0; // Initialize opacity data

       // Add hover event listener to progressively darken the square
       square.addEventListener('mouseover', function() {
        darkenSquare(square);
    });

        container.appendChild(square);
    }
}
createGrid(16); //Add number of squares calliing the fx

// Function to handle the button click and change grid size
function setNewGridSize() {
    const input = document.querySelector('.gridsize-input');
    const gridSize = parseInt(input.value);

    if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    createGrid(gridSize); // Create a new grid based on the user input
}

// Event listener for button click
const button = document.querySelector('.gridsize-button');
button.addEventListener('click', setNewGridSize);
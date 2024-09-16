
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
        container.appendChild(square);
    }
}
createGrid(16);

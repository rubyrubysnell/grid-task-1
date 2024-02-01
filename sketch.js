function setup() {
    // an 800 x 800 canvas
    createCanvas(800, 800);
    // background colour
    background(220)

    const cellNumber = 12
    const cellSize = 22
    const canvasSize = 800
    const spacing = 25
    const startSpacing = (canvasSize - ((cellSize + spacing) * cellNumber)) / 2

    for (let row = 0; row < cellNumber; row++) {
        for (let column = 0; column < cellNumber; column++) {
            fill(43, 43, 43)
            noStroke()
            const xPosition = startSpacing + (row * (cellSize + spacing))
            const yPosition = startSpacing + (column * (cellSize + spacing))
            const size = cellSize 
            square(xPosition, yPosition, size)
        }
    }
}


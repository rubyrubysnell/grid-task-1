function setup() {
    // an 800 x 800 canvas
    createCanvas(800, 800);
    // background colour
    background(220)
    // setting the angle mode to degrees rather than the default radians
    angleMode(DEGREES)
    // means the shape will rotate from its centre
    rectMode(CENTER)

    const cellNumber = 12
    const cellSize = 22
    const canvasSize = 800
    const spacing = 25
    const startSpacing = (canvasSize - ((cellSize + spacing) * cellNumber)) / 2

    for (let row = 0; row < cellNumber; row++) {
        for (let column = 0; column < cellNumber; column++) {
            fill(43, 43, 43)
            noStroke()
            // positioning the grid in the middle of the canvas
            const xPosition = startSpacing + (row * (cellSize + spacing))
            const yPosition = startSpacing + (column * (cellSize + spacing))
            // push and pop isolate the translation and rotation to each square rather than whole grid
            push()
            // shifts the origin to the centre of the square
            translate(xPosition, yPosition)
            // rotate to a random angle between 0 and 45
            rotate(random(45))
            // draw square
            square(0, 0, cellSize)
            pop()
        }
    }
}


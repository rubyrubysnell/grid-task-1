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

    let angle = 0 

    for (let row = 0; row < cellNumber; row++) {
        for (let column = 0; column < cellNumber; column++) {
            fill(43, 43, 43)
            noStroke()
            const size = cellSize 
            const xPosition = startSpacing + (row * (cellSize + spacing))
            const yPosition = startSpacing + (column * (cellSize + spacing))
            // push and pop isolate the translation and rotation to each square rather than whole grid
            push()
            translate(xPosition, yPosition)
            rotate(random(360))
            square(0, 0, size)
            pop()
        }
    }
}


var canvasGroupOffset02 = document.getElementById('canvasGroupOffset02');
var ycanvasGroupOffset02Center = (canvasGroupOffset02.height/2);
var xcanvasGroupOffset02Center = (canvasGroupOffset02.width/2);

//Offset
rectangle(canvasGroupOffset02, xcanvasGroupOffset02Center - 195, ycanvasGroupOffset02Center - 220, 70, 40, burgundy, 'Part 1', 'black');
rectangleArray(canvasGroupOffset02, xcanvasGroupOffset02Center - 195, ycanvasGroupOffset02Center - 180, 350, 80, burgundy, [['3', 'black'], ['2', 'black'], ['1', 'black'], ['0', 'black']]);
arrow (canvasGroupOffset02, xcanvasGroupOffset02Center + 135, ycanvasGroupOffset02Center - 30, xcanvasGroupOffset02Center + 135, ycanvasGroupOffset02Center - 80, purple)
arrow (canvasGroupOffset02, xcanvasGroupOffset02Center + 95, ycanvasGroupOffset02Center - 30, xcanvasGroupOffset02Center + 95, ycanvasGroupOffset02Center - 80, green)
arrow (canvasGroupOffset02, xcanvasGroupOffset02Center + 50, ycanvasGroupOffset02Center - 30, xcanvasGroupOffset02Center + 50, ycanvasGroupOffset02Center - 80, purple)
arrow (canvasGroupOffset02, xcanvasGroupOffset02Center + 10, ycanvasGroupOffset02Center - 30, xcanvasGroupOffset02Center + 10, ycanvasGroupOffset02Center - 80, green)

rectangle(canvasGroupOffset02, xcanvasGroupOffset02Center - 195, ycanvasGroupOffset02Center + 180, 70, 40, burgundy, 'Part 2', 'black');
rectangleArray(canvasGroupOffset02, xcanvasGroupOffset02Center - 195, ycanvasGroupOffset02Center + 100, 350, 80, burgundy, [['3', 'black'], ['2', 'black'], ['1', 'black'], ['0', 'black']]);
arrow (canvasGroupOffset02, xcanvasGroupOffset02Center + 135, ycanvasGroupOffset02Center + 30, xcanvasGroupOffset02Center + 135, ycanvasGroupOffset02Center + 80, purple)
arrow (canvasGroupOffset02, xcanvasGroupOffset02Center + 95, ycanvasGroupOffset02Center + 30, xcanvasGroupOffset02Center + 95, ycanvasGroupOffset02Center + 80, green)
arrow (canvasGroupOffset02, xcanvasGroupOffset02Center + 50, ycanvasGroupOffset02Center + 30, xcanvasGroupOffset02Center + 50, ycanvasGroupOffset02Center + 80, purple)
arrow (canvasGroupOffset02, xcanvasGroupOffset02Center + 10, ycanvasGroupOffset02Center + 30, xcanvasGroupOffset02Center + 10, ycanvasGroupOffset02Center + 80, green)


//Producer
rectangle(canvasGroupOffset02, 10, ycanvasGroupOffset02Center - 50, 100, 100, blue, 'Prod', 'black');
arrow (canvasGroupOffset02, 130, ycanvasGroupOffset02Center - 20, 260, ycanvasGroupOffset02Center - 140, transientWhite)
arrow (canvasGroupOffset02, 130, ycanvasGroupOffset02Center + 20, 260, ycanvasGroupOffset02Center + 140, transientWhite)

//Group 1
rectangle(canvasGroupOffset02, canvasGroupOffset02.width - 150, ycanvasGroupOffset02Center - 240, 140, 290, purple, null, null);

rectangle(canvasGroupOffset02, canvasGroupOffset02.width - 130, ycanvasGroupOffset02Center - 220, 100, 70, yellow, 'Cons 1', 'black');
rectangle(canvasGroupOffset02, canvasGroupOffset02.width - 130, ycanvasGroupOffset02Center - 150, 50, 40, yellow, '0', 'black');
rectangle(canvasGroupOffset02, canvasGroupOffset02.width - 80, ycanvasGroupOffset02Center - 150, 50, 40, yellow, '0', 'black');

rectangle(canvasGroupOffset02, canvasGroupOffset02.width - 130, ycanvasGroupOffset02Center - 80, 100, 70, yellow, 'Cons 2', 'black');
rectangle(canvasGroupOffset02, canvasGroupOffset02.width - 130, ycanvasGroupOffset02Center - 10, 50, 40, yellow, '0', 'black');
rectangle(canvasGroupOffset02, canvasGroupOffset02.width - 80, ycanvasGroupOffset02Center - 10, 50, 40, yellow, '0', 'black');

arrow (canvasGroupOffset02, xcanvasGroupOffset02Center + 175, ycanvasGroupOffset02Center - 160, canvasGroupOffset02.width - 170, ycanvasGroupOffset02Center - 185, transientWhite)
arrow (canvasGroupOffset02, xcanvasGroupOffset02Center + 175, ycanvasGroupOffset02Center + 120, canvasGroupOffset02.width - 170, ycanvasGroupOffset02Center - 45, transientWhite)

// Group 2
rectangle(canvasGroupOffset02, canvasGroupOffset02.width - 150, ycanvasGroupOffset02Center + 70, 140, 150, green, null, null);

rectangle(canvasGroupOffset02, canvasGroupOffset02.width - 130, ycanvasGroupOffset02Center + 90, 100, 70, yellow, 'Cons 3', 'black');
rectangle(canvasGroupOffset02, canvasGroupOffset02.width - 130, ycanvasGroupOffset02Center + 160, 50, 40, yellow, '0', 'black');
rectangle(canvasGroupOffset02, canvasGroupOffset02.width - 80, ycanvasGroupOffset02Center + 160, 50, 40, yellow, '0', 'black');

arrow (canvasGroupOffset02, xcanvasGroupOffset02Center + 175, ycanvasGroupOffset02Center - 120, canvasGroupOffset02.width - 170, ycanvasGroupOffset02Center + 110, transientWhite)
arrow (canvasGroupOffset02, xcanvasGroupOffset02Center + 175, ycanvasGroupOffset02Center + 160, canvasGroupOffset02.width - 170, ycanvasGroupOffset02Center + 140, transientWhite)

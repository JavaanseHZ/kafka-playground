var canvasGroupOffset04 = document.getElementById('canvasGroupOffset04');
var ycanvasGroupOffset04Center = (canvasGroupOffset04.height/2);
var xcanvasGroupOffset04Center = (canvasGroupOffset04.width/2);

//Offset
rectangle(canvasGroupOffset04, xcanvasGroupOffset04Center - 195, ycanvasGroupOffset04Center - 220, 70, 40, burgundy, 'Part 1', 'black');
rectangleArray(canvasGroupOffset04, xcanvasGroupOffset04Center - 195, ycanvasGroupOffset04Center - 180, 350, 80, burgundy, [['3', 'black'], ['2', 'black'], ['1', 'black'], ['0', 'black']]);
arrow (canvasGroupOffset04, xcanvasGroupOffset04Center + 50, ycanvasGroupOffset04Center - 30, xcanvasGroupOffset04Center + 50, ycanvasGroupOffset04Center - 80, purple)
arrow (canvasGroupOffset04, xcanvasGroupOffset04Center + 10, ycanvasGroupOffset04Center - 30, xcanvasGroupOffset04Center + 10, ycanvasGroupOffset04Center - 80, green)

rectangle(canvasGroupOffset04, xcanvasGroupOffset04Center - 195, ycanvasGroupOffset04Center + 180, 70, 40, burgundy, 'Part 2', 'black');
rectangleArray(canvasGroupOffset04, xcanvasGroupOffset04Center - 195, ycanvasGroupOffset04Center + 100, 350, 80, burgundy, [['3', 'black'], ['2', 'black'], ['1', 'black'], ['0', 'black']]);
arrow (canvasGroupOffset04, xcanvasGroupOffset04Center + 135, ycanvasGroupOffset04Center + 30, xcanvasGroupOffset04Center + 135, ycanvasGroupOffset04Center + 80, purple)
arrow (canvasGroupOffset04, xcanvasGroupOffset04Center + 10, ycanvasGroupOffset04Center + 30, xcanvasGroupOffset04Center + 10, ycanvasGroupOffset04Center + 80, green)


//Producer
rectangle(canvasGroupOffset04, 10, ycanvasGroupOffset04Center - 50, 100, 100, blue, 'Prod', 'black');
arrow (canvasGroupOffset04, 130, ycanvasGroupOffset04Center - 20, 260, ycanvasGroupOffset04Center - 140, transientWhite)

//Group 1
rectangle(canvasGroupOffset04, canvasGroupOffset04.width - 150, ycanvasGroupOffset04Center - 240, 140, 290, purple, null, null);

rectangle(canvasGroupOffset04, canvasGroupOffset04.width - 130, ycanvasGroupOffset04Center - 220, 100, 70, yellow, 'Cons 1', 'black');
rectangle(canvasGroupOffset04, canvasGroupOffset04.width - 130, ycanvasGroupOffset04Center - 150, 50, 40, yellow, '1', 'black');
rectangle(canvasGroupOffset04, canvasGroupOffset04.width - 80, ycanvasGroupOffset04Center - 150, 50, 40, yellow, '0', 'black');

rectangle(canvasGroupOffset04, canvasGroupOffset04.width - 130, ycanvasGroupOffset04Center - 80, 100, 70, yellow, 'Cons 2', 'black');
rectangle(canvasGroupOffset04, canvasGroupOffset04.width - 130, ycanvasGroupOffset04Center - 10, 50, 40, yellow, '0', 'black');
rectangle(canvasGroupOffset04, canvasGroupOffset04.width - 80, ycanvasGroupOffset04Center - 10, 50, 40, yellow, '0', 'black');

arrow (canvasGroupOffset04, xcanvasGroupOffset04Center + 175, ycanvasGroupOffset04Center - 160, canvasGroupOffset04.width - 170, ycanvasGroupOffset04Center - 185, transientWhite)

// Group 2
rectangle(canvasGroupOffset04, canvasGroupOffset04.width - 150, ycanvasGroupOffset04Center + 70, 140, 150, green, null, null);

rectangle(canvasGroupOffset04, canvasGroupOffset04.width - 130, ycanvasGroupOffset04Center + 90, 100, 70, yellow, 'Cons 3', 'black');
rectangle(canvasGroupOffset04, canvasGroupOffset04.width - 130, ycanvasGroupOffset04Center + 160, 50, 40, yellow, '1', 'black');
rectangle(canvasGroupOffset04, canvasGroupOffset04.width - 80, ycanvasGroupOffset04Center + 160, 50, 40, yellow, '1', 'black');

arrow (canvasGroupOffset04, xcanvasGroupOffset04Center + 175, ycanvasGroupOffset04Center - 120, canvasGroupOffset04.width - 170, ycanvasGroupOffset04Center + 110, transientWhite)

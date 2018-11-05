var canvasGroupOffset03 = document.getElementById('canvasGroupOffset03');
var ycanvasGroupOffset03Center = (canvasGroupOffset03.height/2);
var xcanvasGroupOffset03Center = (canvasGroupOffset03.width/2);

//Offset
rectangle(canvasGroupOffset03, xcanvasGroupOffset03Center - 195, ycanvasGroupOffset03Center - 220, 70, 40, burgundy, 'Part 1', 'black');
rectangleArray(canvasGroupOffset03, xcanvasGroupOffset03Center - 195, ycanvasGroupOffset03Center - 180, 350, 80, burgundy, [['3', 'black'], ['2', 'black'], ['1', 'black'], ['0', 'black']]);
arrow (canvasGroupOffset03, xcanvasGroupOffset03Center + 135, ycanvasGroupOffset03Center - 30, xcanvasGroupOffset03Center + 135, ycanvasGroupOffset03Center - 80, purple)
arrow (canvasGroupOffset03, xcanvasGroupOffset03Center + 95, ycanvasGroupOffset03Center - 30, xcanvasGroupOffset03Center + 95, ycanvasGroupOffset03Center - 80, lightBrown)

rectangle(canvasGroupOffset03, xcanvasGroupOffset03Center - 195, ycanvasGroupOffset03Center + 180, 70, 40, burgundy, 'Part 2', 'black');
rectangleArray(canvasGroupOffset03, xcanvasGroupOffset03Center - 195, ycanvasGroupOffset03Center + 100, 350, 80, burgundy, [['3', 'black'], ['2', 'black'], ['1', 'black'], ['0', 'black']]);
arrow (canvasGroupOffset03, xcanvasGroupOffset03Center + 135, ycanvasGroupOffset03Center + 30, xcanvasGroupOffset03Center + 135, ycanvasGroupOffset03Center + 80, purple)
arrow (canvasGroupOffset03, xcanvasGroupOffset03Center + 10, ycanvasGroupOffset03Center + 30, xcanvasGroupOffset03Center + 10, ycanvasGroupOffset03Center + 80, lightBrown)

//Producer
rectangle(canvasGroupOffset03, 10, ycanvasGroupOffset03Center - 50, 100, 100, blue, 'Prod', 'black');
arrow (canvasGroupOffset03, 130, ycanvasGroupOffset03Center - 20, 260, ycanvasGroupOffset03Center - 140, transientWhite)

//Group 1
rectangle(canvasGroupOffset03, canvasGroupOffset03.width - 150, ycanvasGroupOffset03Center - 240, 140, 290, purple, null, null);

rectangle(canvasGroupOffset03, canvasGroupOffset03.width - 130, ycanvasGroupOffset03Center - 220, 100, 70, yellow, 'Cons 1', 'black');
rectangle(canvasGroupOffset03, canvasGroupOffset03.width - 130, ycanvasGroupOffset03Center - 150, 50, 40, yellow, '0', 'black');
rectangle(canvasGroupOffset03, canvasGroupOffset03.width - 80, ycanvasGroupOffset03Center - 150, 50, 40, yellow, '0', 'black');

rectangle(canvasGroupOffset03, canvasGroupOffset03.width - 130, ycanvasGroupOffset03Center - 80, 100, 70, yellow, 'Cons 2', 'black');
rectangle(canvasGroupOffset03, canvasGroupOffset03.width - 130, ycanvasGroupOffset03Center - 10, 50, 40, yellow, '0', 'black');
rectangle(canvasGroupOffset03, canvasGroupOffset03.width - 80, ycanvasGroupOffset03Center - 10, 50, 40, yellow, '0', 'black');

arrow (canvasGroupOffset03, xcanvasGroupOffset03Center + 175, ycanvasGroupOffset03Center - 160, canvasGroupOffset03.width - 170, ycanvasGroupOffset03Center - 185, green)

// Group 2
rectangle(canvasGroupOffset03, canvasGroupOffset03.width - 150, ycanvasGroupOffset03Center + 70, 140, 150, lightBrown, null, null);

rectangle(canvasGroupOffset03, canvasGroupOffset03.width - 130, ycanvasGroupOffset03Center + 90, 100, 70, yellow, 'Cons 3', 'black');
rectangle(canvasGroupOffset03, canvasGroupOffset03.width - 130, ycanvasGroupOffset03Center + 160, 50, 40, yellow, '0', 'black');
rectangle(canvasGroupOffset03, canvasGroupOffset03.width - 80, ycanvasGroupOffset03Center + 160, 50, 40, yellow, '1', 'black');

arrow (canvasGroupOffset03, xcanvasGroupOffset03Center + 175, ycanvasGroupOffset03Center - 120, canvasGroupOffset03.width - 170, ycanvasGroupOffset03Center + 110, green)

var canvasGroupOffset06 = document.getElementById('canvasGroupOffset06');
var ycanvasGroupOffset06Center = (canvasGroupOffset06.height/2);
var xcanvasGroupOffset06Center = (canvasGroupOffset06.width/2);

//Offset
rectangle(canvasGroupOffset06, xcanvasGroupOffset06Center - 195, ycanvasGroupOffset06Center - 220, 70, 40, burgundy, 'Part 1', 'black');
rectangleArray(canvasGroupOffset06, xcanvasGroupOffset06Center - 195, ycanvasGroupOffset06Center - 180, 350, 80, burgundy, [['3', 'black'], ['2', 'black'], ['1', 'black'], ['0', 'black']]);
arrow (canvasGroupOffset06, xcanvasGroupOffset06Center + 50, ycanvasGroupOffset06Center - 30, xcanvasGroupOffset06Center + 50, ycanvasGroupOffset06Center - 80, purple)
arrow (canvasGroupOffset06, xcanvasGroupOffset06Center + 10, ycanvasGroupOffset06Center - 30, xcanvasGroupOffset06Center + 10, ycanvasGroupOffset06Center - 80, lightBrown)

rectangle(canvasGroupOffset06, xcanvasGroupOffset06Center - 195, ycanvasGroupOffset06Center + 180, 70, 40, burgundy, 'Part 2', 'black');
rectangleArray(canvasGroupOffset06, xcanvasGroupOffset06Center - 195, ycanvasGroupOffset06Center + 100, 350, 80, burgundy, [['3', 'black'], ['2', 'black'], ['1', 'black'], ['0', 'black']]);
arrow (canvasGroupOffset06, xcanvasGroupOffset06Center + 135, ycanvasGroupOffset06Center + 30, xcanvasGroupOffset06Center + 135, ycanvasGroupOffset06Center + 80, purple)
arrow (canvasGroupOffset06, xcanvasGroupOffset06Center + 10, ycanvasGroupOffset06Center + 30, xcanvasGroupOffset06Center + 10, ycanvasGroupOffset06Center + 80, lightBrown)


//Producer
rectangle(canvasGroupOffset06, 10, ycanvasGroupOffset06Center - 50, 100, 100, blue, 'Prod', 'black');
arrow (canvasGroupOffset06, 130, ycanvasGroupOffset06Center + 20, 260, ycanvasGroupOffset06Center + 140, transientWhite)

//Group 1
rectangle(canvasGroupOffset06, canvasGroupOffset06.width - 150, ycanvasGroupOffset06Center - 240, 140, 290, purple, null, null);

rectangle(canvasGroupOffset06, canvasGroupOffset06.width - 130, ycanvasGroupOffset06Center - 220, 100, 70, yellow, 'Cons 1', 'black');
rectangle(canvasGroupOffset06, canvasGroupOffset06.width - 130, ycanvasGroupOffset06Center - 150, 50, 40, yellow, '1', 'black');
rectangle(canvasGroupOffset06, canvasGroupOffset06.width - 80, ycanvasGroupOffset06Center - 150, 50, 40, yellow, '0', 'black');

rectangle(canvasGroupOffset06, canvasGroupOffset06.width - 130, ycanvasGroupOffset06Center - 80, 100, 70, yellow, 'Cons 2', 'black');
rectangle(canvasGroupOffset06, canvasGroupOffset06.width - 130, ycanvasGroupOffset06Center - 10, 50, 40, yellow, '0', 'black');
rectangle(canvasGroupOffset06, canvasGroupOffset06.width - 80, ycanvasGroupOffset06Center - 10, 50, 40, yellow, '0', 'black');

arrow (canvasGroupOffset06, xcanvasGroupOffset06Center + 175, ycanvasGroupOffset06Center + 120, canvasGroupOffset06.width - 170, ycanvasGroupOffset06Center - 45, green)

// Group 2
rectangle(canvasGroupOffset06, canvasGroupOffset06.width - 150, ycanvasGroupOffset06Center + 70, 140, 150, lightBrown, null, null);

rectangle(canvasGroupOffset06, canvasGroupOffset06.width - 130, ycanvasGroupOffset06Center + 90, 100, 70, yellow, 'Cons 3', 'black');
rectangle(canvasGroupOffset06, canvasGroupOffset06.width - 130, ycanvasGroupOffset06Center + 160, 50, 40, yellow, '1', 'black');
rectangle(canvasGroupOffset06, canvasGroupOffset06.width - 80, ycanvasGroupOffset06Center + 160, 50, 40, yellow, '1', 'black');

arrow (canvasGroupOffset06, xcanvasGroupOffset06Center + 175, ycanvasGroupOffset06Center + 160, canvasGroupOffset06.width - 170, ycanvasGroupOffset06Center + 140, green)

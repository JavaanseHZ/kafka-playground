var canvasGroupOffset05 = document.getElementById('canvasGroupOffset05');
var ycanvasGroupOffset05Center = (canvasGroupOffset05.height/2);
var xcanvasGroupOffset05Center = (canvasGroupOffset05.width/2);

//Offset
rectangle(canvasGroupOffset05, xcanvasGroupOffset05Center - 195, ycanvasGroupOffset05Center - 220, 70, 40, burgundy, 'Part 1', 'black');
rectangleArray(canvasGroupOffset05, xcanvasGroupOffset05Center - 195, ycanvasGroupOffset05Center - 180, 350, 80, burgundy, [['3', 'black'], ['2', 'black'], ['1', 'black'], ['0', 'black']]);
arrow (canvasGroupOffset05, xcanvasGroupOffset05Center + 50, ycanvasGroupOffset05Center - 30, xcanvasGroupOffset05Center + 50, ycanvasGroupOffset05Center - 80, purple)
arrow (canvasGroupOffset05, xcanvasGroupOffset05Center + 10, ycanvasGroupOffset05Center - 30, xcanvasGroupOffset05Center + 10, ycanvasGroupOffset05Center - 80, lightBrown)

rectangle(canvasGroupOffset05, xcanvasGroupOffset05Center - 195, ycanvasGroupOffset05Center + 180, 70, 40, burgundy, 'Part 2', 'black');
rectangleArray(canvasGroupOffset05, xcanvasGroupOffset05Center - 195, ycanvasGroupOffset05Center + 100, 350, 80, burgundy, [['3', 'black'], ['2', 'black'], ['1', 'black'], ['0', 'black']]);
arrow (canvasGroupOffset05, xcanvasGroupOffset05Center + 135, ycanvasGroupOffset05Center + 30, xcanvasGroupOffset05Center + 135, ycanvasGroupOffset05Center + 80, purple)
arrow (canvasGroupOffset05, xcanvasGroupOffset05Center + 10, ycanvasGroupOffset05Center + 30, xcanvasGroupOffset05Center + 10, ycanvasGroupOffset05Center + 80, lightBrown)


//Producer
rectangle(canvasGroupOffset05, 10, ycanvasGroupOffset05Center - 50, 100, 100, blue, 'Prod', 'black');
arrow (canvasGroupOffset05, 130, ycanvasGroupOffset05Center + 20, 260, ycanvasGroupOffset05Center + 140, green)

//Group 1
rectangle(canvasGroupOffset05, canvasGroupOffset05.width - 150, ycanvasGroupOffset05Center - 240, 140, 290, purple, null, null);

rectangle(canvasGroupOffset05, canvasGroupOffset05.width - 130, ycanvasGroupOffset05Center - 220, 100, 70, yellow, 'Cons 1', 'black');
rectangle(canvasGroupOffset05, canvasGroupOffset05.width - 130, ycanvasGroupOffset05Center - 150, 50, 40, yellow, '1', 'black');
rectangle(canvasGroupOffset05, canvasGroupOffset05.width - 80, ycanvasGroupOffset05Center - 150, 50, 40, yellow, '0', 'black');

rectangle(canvasGroupOffset05, canvasGroupOffset05.width - 130, ycanvasGroupOffset05Center - 80, 100, 70, yellow, 'Cons 2', 'black');
rectangle(canvasGroupOffset05, canvasGroupOffset05.width - 130, ycanvasGroupOffset05Center - 10, 50, 40, yellow, '0', 'black');
rectangle(canvasGroupOffset05, canvasGroupOffset05.width - 80, ycanvasGroupOffset05Center - 10, 50, 40, yellow, '0', 'black');

// Group 2
rectangle(canvasGroupOffset05, canvasGroupOffset05.width - 150, ycanvasGroupOffset05Center + 70, 140, 150, lightBrown, null, null);

rectangle(canvasGroupOffset05, canvasGroupOffset05.width - 130, ycanvasGroupOffset05Center + 90, 100, 70, yellow, 'Cons 3', 'black');
rectangle(canvasGroupOffset05, canvasGroupOffset05.width - 130, ycanvasGroupOffset05Center + 160, 50, 40, yellow, '1', 'black');
rectangle(canvasGroupOffset05, canvasGroupOffset05.width - 80, ycanvasGroupOffset05Center + 160, 50, 40, yellow, '1', 'black');

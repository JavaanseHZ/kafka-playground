var canvasGroupOffset01 = document.getElementById('canvasGroupOffset01');
var ycanvasGroupOffset01Center = (canvasGroupOffset01.height/2);
var xcanvasGroupOffset01Center = (canvasGroupOffset01.width/2);

//Offset
rectangle(canvasGroupOffset01, xcanvasGroupOffset01Center - 175, ycanvasGroupOffset01Center - 220, 70, 40, burgundy, 'Part 1', 'black');
rectangleArray(canvasGroupOffset01, xcanvasGroupOffset01Center - 175, ycanvasGroupOffset01Center - 180, 350, 80, burgundy, [['3', 'black'], ['2', 'black'], ['1', 'black'], ['0', 'black']]);
arrow (canvasGroupOffset01, xcanvasGroupOffset01Center + 155, ycanvasGroupOffset01Center - 30, xcanvasGroupOffset01Center + 155, ycanvasGroupOffset01Center - 80, purple)
arrow (canvasGroupOffset01, xcanvasGroupOffset01Center + 115, ycanvasGroupOffset01Center - 30, xcanvasGroupOffset01Center + 115, ycanvasGroupOffset01Center - 80, green)
arrow (canvasGroupOffset01, xcanvasGroupOffset01Center + 70, ycanvasGroupOffset01Center - 30, xcanvasGroupOffset01Center + 70, ycanvasGroupOffset01Center - 80, purple)
arrow (canvasGroupOffset01, xcanvasGroupOffset01Center + 30, ycanvasGroupOffset01Center - 30, xcanvasGroupOffset01Center + 30, ycanvasGroupOffset01Center - 80, green)

rectangle(canvasGroupOffset01, xcanvasGroupOffset01Center - 175, ycanvasGroupOffset01Center + 180, 70, 40, burgundy, 'Part 2', 'black');
rectangleArray(canvasGroupOffset01, xcanvasGroupOffset01Center - 175, ycanvasGroupOffset01Center + 100, 350, 80, burgundy, [['3', 'black'], ['2', 'black'], ['1', 'black'], ['0', 'black']]);
arrow (canvasGroupOffset01, xcanvasGroupOffset01Center + 155, ycanvasGroupOffset01Center + 30, xcanvasGroupOffset01Center + 155, ycanvasGroupOffset01Center + 80, purple)
arrow (canvasGroupOffset01, xcanvasGroupOffset01Center + 115, ycanvasGroupOffset01Center + 30, xcanvasGroupOffset01Center + 115, ycanvasGroupOffset01Center + 80, green)
arrow (canvasGroupOffset01, xcanvasGroupOffset01Center + 70, ycanvasGroupOffset01Center + 30, xcanvasGroupOffset01Center + 70, ycanvasGroupOffset01Center + 80, purple)
arrow (canvasGroupOffset01, xcanvasGroupOffset01Center + 30, ycanvasGroupOffset01Center + 30, xcanvasGroupOffset01Center + 30, ycanvasGroupOffset01Center + 80, green)


//Producer
rectangle(canvasGroupOffset01, 10, ycanvasGroupOffset01Center - 50, 100, 100, blue, 'Prod', 'black');
arrow (canvasGroupOffset01, 130, ycanvasGroupOffset01Center - 20, 280, ycanvasGroupOffset01Center - 140, transientWhite)
arrow (canvasGroupOffset01, 130, ycanvasGroupOffset01Center + 20, 280, ycanvasGroupOffset01Center + 140, transientWhite)

//Group 1
rectangle(canvasGroupOffset01, canvasGroupOffset01.width - 150, ycanvasGroupOffset01Center - 240, 140, 290, purple, null, null);

rectangle(canvasGroupOffset01, canvasGroupOffset01.width - 130, ycanvasGroupOffset01Center - 220, 100, 70, yellow, 'Cons 1', 'black');
rectangle(canvasGroupOffset01, canvasGroupOffset01.width - 130, ycanvasGroupOffset01Center - 150, 50, 40, yellow, '0', 'black');
rectangle(canvasGroupOffset01, canvasGroupOffset01.width - 80, ycanvasGroupOffset01Center - 150, 50, 40, yellow, '0', 'black');

rectangle(canvasGroupOffset01, canvasGroupOffset01.width - 130, ycanvasGroupOffset01Center - 80, 100, 70, yellow, 'Cons 2', 'black');
rectangle(canvasGroupOffset01, canvasGroupOffset01.width - 130, ycanvasGroupOffset01Center - 10, 50, 40, yellow, '0', 'black');
rectangle(canvasGroupOffset01, canvasGroupOffset01.width - 80, ycanvasGroupOffset01Center - 10, 50, 40, yellow, '0', 'black');

arrow (canvasGroupOffset01, xcanvasGroupOffset01Center + 195, ycanvasGroupOffset01Center - 160, canvasGroupOffset01.width - 170, ycanvasGroupOffset01Center - 185, transientWhite)
arrow (canvasGroupOffset01, xcanvasGroupOffset01Center + 195, ycanvasGroupOffset01Center + 120, canvasGroupOffset01.width - 170, ycanvasGroupOffset01Center - 45, transientWhite)

// Group 2
rectangle(canvasGroupOffset01, canvasGroupOffset01.width - 150, ycanvasGroupOffset01Center + 70, 140, 150, green, null, null);

rectangle(canvasGroupOffset01, canvasGroupOffset01.width - 130, ycanvasGroupOffset01Center + 90, 100, 70, yellow, 'Cons 3', 'black');
rectangle(canvasGroupOffset01, canvasGroupOffset01.width - 130, ycanvasGroupOffset01Center + 160, 50, 40, yellow, '0', 'black');
rectangle(canvasGroupOffset01, canvasGroupOffset01.width - 80, ycanvasGroupOffset01Center + 160, 50, 40, yellow, '0', 'black');

arrow (canvasGroupOffset01, xcanvasGroupOffset01Center + 195, ycanvasGroupOffset01Center - 120, canvasGroupOffset01.width - 170, ycanvasGroupOffset01Center + 110, transientWhite)
arrow (canvasGroupOffset01, xcanvasGroupOffset01Center + 195, ycanvasGroupOffset01Center + 160, canvasGroupOffset01.width - 170, ycanvasGroupOffset01Center + 140, transientWhite)

var canvasGroupOffset07 = document.getElementById('canvasGroupOffset07');
var ycanvasGroupOffset07Center = (canvasGroupOffset07.height/2);
var xcanvasGroupOffset07Center = (canvasGroupOffset07.width/2);

//Offset
rectangle(canvasGroupOffset07, xcanvasGroupOffset07Center - 195, ycanvasGroupOffset07Center - 220, 70, 40, burgundy, 'Part 1', 'black');
rectangleArray(canvasGroupOffset07, xcanvasGroupOffset07Center - 195, ycanvasGroupOffset07Center - 180, 350, 80, burgundy, [['3', 'black'], ['2', 'black'], ['1', 'black'], ['0', 'black']]);
arrow (canvasGroupOffset07, xcanvasGroupOffset07Center + 50, ycanvasGroupOffset07Center - 30, xcanvasGroupOffset07Center + 50, ycanvasGroupOffset07Center - 80, purple)
arrow (canvasGroupOffset07, xcanvasGroupOffset07Center + 10, ycanvasGroupOffset07Center - 30, xcanvasGroupOffset07Center + 10, ycanvasGroupOffset07Center - 80, green)

rectangle(canvasGroupOffset07, xcanvasGroupOffset07Center - 195, ycanvasGroupOffset07Center + 180, 70, 40, burgundy, 'Part 2', 'black');
rectangleArray(canvasGroupOffset07, xcanvasGroupOffset07Center - 195, ycanvasGroupOffset07Center + 100, 350, 80, burgundy, [['3', 'black'], ['2', 'black'], ['1', 'black'], ['0', 'black']]);
arrow (canvasGroupOffset07, xcanvasGroupOffset07Center + 50, ycanvasGroupOffset07Center + 30, xcanvasGroupOffset07Center + 50, ycanvasGroupOffset07Center + 80, purple)
arrow (canvasGroupOffset07, xcanvasGroupOffset07Center - 75, ycanvasGroupOffset07Center + 30, xcanvasGroupOffset07Center - 75, ycanvasGroupOffset07Center + 80, green)


//Producer
rectangle(canvasGroupOffset07, 10, ycanvasGroupOffset07Center - 50, 100, 100, blue, 'Prod', 'black');
arrow (canvasGroupOffset07, 130, ycanvasGroupOffset07Center + 20, 260, ycanvasGroupOffset07Center + 140, transientWhite)

//Group 1
rectangle(canvasGroupOffset07, canvasGroupOffset07.width - 150, ycanvasGroupOffset07Center - 240, 140, 290, purple, null, null);

rectangle(canvasGroupOffset07, canvasGroupOffset07.width - 130, ycanvasGroupOffset07Center - 220, 100, 70, yellow, 'Cons 1', 'black');
rectangle(canvasGroupOffset07, canvasGroupOffset07.width - 130, ycanvasGroupOffset07Center - 150, 50, 40, yellow, '1', 'black');
rectangle(canvasGroupOffset07, canvasGroupOffset07.width - 80, ycanvasGroupOffset07Center - 150, 50, 40, yellow, '0', 'black');

rectangle(canvasGroupOffset07, canvasGroupOffset07.width - 130, ycanvasGroupOffset07Center - 80, 100, 70, yellow, 'Cons 2', 'black');
rectangle(canvasGroupOffset07, canvasGroupOffset07.width - 130, ycanvasGroupOffset07Center - 10, 50, 40, yellow, '0', 'black');
rectangle(canvasGroupOffset07, canvasGroupOffset07.width - 80, ycanvasGroupOffset07Center - 10, 50, 40, yellow, '1', 'black');

arrow (canvasGroupOffset07, xcanvasGroupOffset07Center + 175, ycanvasGroupOffset07Center + 120, canvasGroupOffset07.width - 170, ycanvasGroupOffset07Center - 45, transientWhite)

// Group 2
rectangle(canvasGroupOffset07, canvasGroupOffset07.width - 150, ycanvasGroupOffset07Center + 70, 140, 150, green, null, null);

rectangle(canvasGroupOffset07, canvasGroupOffset07.width - 130, ycanvasGroupOffset07Center + 90, 100, 70, yellow, 'Cons 3', 'black');
rectangle(canvasGroupOffset07, canvasGroupOffset07.width - 130, ycanvasGroupOffset07Center + 160, 50, 40, yellow, '1', 'black');
rectangle(canvasGroupOffset07, canvasGroupOffset07.width - 80, ycanvasGroupOffset07Center + 160, 50, 40, yellow, '2', 'black');

arrow (canvasGroupOffset07, xcanvasGroupOffset07Center + 175, ycanvasGroupOffset07Center + 160, canvasGroupOffset07.width - 170, ycanvasGroupOffset07Center + 140, transientWhite)

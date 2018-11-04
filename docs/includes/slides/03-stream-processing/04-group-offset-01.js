var canvasGroupOffset01 = document.getElementById('canvasGroupOffset01');
var ycanvasGroupOffset01Center = (canvasGroupOffset01.height/2);
rectangle(canvasGroupOffset01, 50, ycanvasGroupOffset01Center - 50, 100, 100, blue, 'Prod', 'black');
rectangleArray(canvasGroupOffset01, 300, ycanvasGroupOffset01Center - 50, 350, 100, burgundy, [['4', 'black'], ['3', 'black'], ['2', 'black'], ['1', 'black']]);
rectangle(canvasGroupOffset01, 800, ycanvasGroupOffset01Center - 50, 100, 100, yellow, 'Cons', 'black');
arrow (canvasGroupOffset01, 170, ycanvasGroupOffset01Center, 280, ycanvasGroupOffset01Center, blue)
arrow (canvasGroupOffset01, 670, ycanvasGroupOffset01Center, 780, ycanvasGroupOffset01Center, yellow)
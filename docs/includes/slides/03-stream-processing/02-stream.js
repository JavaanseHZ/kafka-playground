var canvasStream = document.getElementById('canvasStream');
var ycanvasStreamCenter = (canvasStream.height/2);
rectangle(canvasStream, 50, ycanvasStreamCenter - 50, 100, 100, blue, 'Prod', 'black');
rectangleArray(canvasStream, 300, ycanvasStreamCenter - 50, 350, 100, burgundy, [['4', 'black'], ['3', 'black'], ['2', 'black'], ['1', 'black']]);
rectangle(canvasStream, 800, ycanvasStreamCenter - 50, 100, 100, yellow, 'Cons', 'black');
arrow (canvasStream, 170, ycanvasStreamCenter, 280, ycanvasStreamCenter, blue)
arrow (canvasStream, 670, ycanvasStreamCenter, 780, ycanvasStreamCenter, yellow)
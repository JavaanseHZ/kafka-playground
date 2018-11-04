var canvasStream = document.getElementById('canvasStream');
var ycanvasStreamCenter = (canvasStream.height/2);
var xcanvasStreamCenter = (canvasStream.width/2);
rectangle(canvasStream, 10, ycanvasStreamCenter - 50, 100, 100, blue, 'Prod', 'black');
rectangleArray(canvasStream, xcanvasStreamCenter - 175, ycanvasStreamCenter - 40, 350, 80, burgundy, [['4', 'black'], ['3', 'black'], ['2', 'black'], ['1', 'black']]);
rectangle(canvasStream, canvasStream.width - 110, ycanvasStreamCenter - 50, 100, 100, yellow, 'Cons', 'black');

arrow (canvasStream, 130, ycanvasStreamCenter, xcanvasStreamCenter - 195, ycanvasStreamCenter, blue)
arrow (canvasStream, xcanvasStreamCenter + 195, ycanvasStreamCenter, canvasStream.width - 130, ycanvasStreamCenter, yellow)
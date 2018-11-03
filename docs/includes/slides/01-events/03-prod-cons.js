var canvasProdCons = document.getElementById('canvasProdCons');
var yCanvasProdConsCenter = (canvasProdCons.height/2);
rectangle(canvasProdCons, 10, yCanvasProdConsCenter - 90, 180, 180, red, null, null);
rectangle(canvasProdCons, 760, yCanvasProdConsCenter - 90, 180, 180, red, null, null);
rectangle(canvasProdCons, 50, yCanvasProdConsCenter - 50, 100, 100, blue, 'Prod', 'black');
rectangle(canvasProdCons, 350, yCanvasProdConsCenter - 50, 250, 100, burgundy, 'Kafka', 'black');
rectangle(canvasProdCons, 800, yCanvasProdConsCenter - 50, 100, 100, yellow, 'Cons', 'black');
arrow (canvasProdCons, 170, yCanvasProdConsCenter, 330, yCanvasProdConsCenter, blue)
arrow (canvasProdCons, 780, yCanvasProdConsCenter, 620, yCanvasProdConsCenter, yellow)





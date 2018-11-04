var canvasConnect02 = document.getElementById('canvasConnect02');
var ycanvasConnect02Center = (canvasConnect02.height/2);
var xcanvasConnect02Center = (canvasConnect02.width/2);

rectangle(canvasConnect02, xcanvasConnect02Center - 150, 10, 300, 100, burgundy, 'Kafka', 'black');

arrow (canvasConnect02, xcanvasConnect02Center - 40, ycanvasConnect02Center - 70, xcanvasConnect02Center - 40, 130, transientWhite);
arrow (canvasConnect02, xcanvasConnect02Center + 40, 130, xcanvasConnect02Center + 40, ycanvasConnect02Center - 70, transientWhite);

rectangle(canvasConnect02, xcanvasConnect02Center - 150, ycanvasConnect02Center - 50, 300, 100, burgundy, 'Kafka Connect', 'black');

rectangle(canvasConnect02, xcanvasConnect02Center - 110, ycanvasConnect02Center + 50, 80, 40, blue, 'Source', 'black');
rectangle(canvasConnect02, xcanvasConnect02Center + 30, ycanvasConnect02Center + 50, 80, 40, yellow, 'Sink', 'black');

ellipse(canvasConnect02, 50, canvasConnect02.height - 130, 100, 100, purple, 'DB', 'black');
arrow (canvasConnect02, 170, canvasConnect02.height - 100, xcanvasConnect02Center - 130, ycanvasConnect02Center + 110, transientWhite);

ellipse(canvasConnect02, canvasConnect02.width - 150, canvasConnect02.height - 130, 100, 100, purple, 'DB', 'black');
arrow (canvasConnect02, xcanvasConnect02Center + 130, ycanvasConnect02Center + 110, canvasConnect02.width - 170, canvasConnect02.height - 100, transientWhite);

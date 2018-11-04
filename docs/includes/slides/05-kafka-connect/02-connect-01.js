var canvasConnect01 = document.getElementById('canvasConnect01');
var ycanvasConnect01Center = (canvasConnect01.height/2);
var xcanvasConnect01Center = (canvasConnect01.width/2);

rectangle(canvasConnect01, xcanvasConnect01Center + 170, ycanvasConnect01Center - 150, 20, 40, burgundy, null, null);
rectangle(canvasConnect01, xcanvasConnect01Center + 150, ycanvasConnect01Center - 170, 20, 60, burgundy, null, null);
rectangle(canvasConnect01, xcanvasConnect01Center - 150, ycanvasConnect01Center - 190, 300, 80, burgundy, 'Zookeeper', 'black');
rectangle(canvasConnect01, xcanvasConnect01Center + 170, ycanvasConnect01Center - 50, 20, 40, burgundy, null, null);
rectangle(canvasConnect01, xcanvasConnect01Center + 150, ycanvasConnect01Center - 70, 20, 60, burgundy, null, null);
rectangle(canvasConnect01, xcanvasConnect01Center - 150, ycanvasConnect01Center - 90, 300, 80, burgundy, 'Broker', 'black');
rectangle(canvasConnect01, xcanvasConnect01Center - 150, ycanvasConnect01Center + 10, 300, 80, burgundy, 'Schema-Registry', 'black');
rectangle(canvasConnect01, xcanvasConnect01Center - 150, ycanvasConnect01Center + 110, 300, 80, burgundy, 'Kafka Connect', 'black');
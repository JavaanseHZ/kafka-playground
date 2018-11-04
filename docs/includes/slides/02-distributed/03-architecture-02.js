var canvasArch02 = document.getElementById('canvasArch02');
var ycanvasArch02Center = (canvasArch02.height/2);
var xcanvasArch02Center = (canvasArch02.width/2);

rectangle(canvasArch02, xcanvasArch02Center - 150, ycanvasArch02Center - 200, 300, 250, burgundy, 'Kafka', 'black');
rectangle(canvasArch02, xcanvasArch02Center - 100, ycanvasArch02Center + 150, 200, 80, burgundy, 'Commit Log', 'black');
arrow (canvasArch02, xcanvasArch02Center, ycanvasArch02Center + 60, xcanvasArch02Center, ycanvasArch02Center +140, transientWhite);
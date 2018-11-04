var canvasDemoAppChanged02 = document.getElementById('canvasDemoAppChanged02');
var ycanvasDemoAppChanged02Center = (canvasDemoAppChanged02.height/2);
var xcanvasDemoAppChanged02Center = (canvasDemoAppChanged02.width/2);

rectangle(canvasDemoAppChanged02, xcanvasDemoAppChanged02Center - 150, 10, 300, 100, 'black', 'Web-Frontend', 'black');

rectangle(canvasDemoAppChanged02, xcanvasDemoAppChanged02Center - 125, ycanvasDemoAppChanged02Center, 250, 170, burgundy, 'Kafka', 'black');

//Clients
rectangle(canvasDemoAppChanged02, 10, ycanvasDemoAppChanged02Center - 100, 200, 80, purple, 'Clients', 'black');
rectangle(canvasDemoAppChanged02, 70, ycanvasDemoAppChanged02Center - 140, 80, 40, purple, 'Rest', 'black');
rectangle(canvasDemoAppChanged02, 30, ycanvasDemoAppChanged02Center - 20, 50, 40, blue, 'P', 'black');
rectangle(canvasDemoAppChanged02, 140, ycanvasDemoAppChanged02Center - 20, 50, 40, yellow, 'C', 'black');
arrow (canvasDemoAppChanged02, xcanvasDemoAppChanged02Center - 170, 55, 170, ycanvasDemoAppChanged02Center - 160, green);
arrow (canvasDemoAppChanged02, 100, ycanvasDemoAppChanged02Center + 40, xcanvasDemoAppChanged02Center - 145, ycanvasDemoAppChanged02Center + 125, green);

//Contracts
rectangle(canvasDemoAppChanged02, canvasDemoAppChanged02.width - 210, ycanvasDemoAppChanged02Center - 100, 200, 80, purple, 'Contracts', 'black');
rectangle(canvasDemoAppChanged02, canvasDemoAppChanged02.width - 150, ycanvasDemoAppChanged02Center - 140, 80, 40, purple, 'Rest', 'black');
rectangle(canvasDemoAppChanged02, canvasDemoAppChanged02.width - 190, ycanvasDemoAppChanged02Center - 20, 50, 40, blue, 'P', 'black');
rectangle(canvasDemoAppChanged02, canvasDemoAppChanged02.width - 80, ycanvasDemoAppChanged02Center - 20, 50, 40, yellow, 'C', 'black');
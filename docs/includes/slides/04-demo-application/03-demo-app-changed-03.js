var canvasDemoAppChanged03 = document.getElementById('canvasDemoAppChanged03');
var ycanvasDemoAppChanged03Center = (canvasDemoAppChanged03.height/2);
var xcanvasDemoAppChanged03Center = (canvasDemoAppChanged03.width/2);

rectangle(canvasDemoAppChanged03, xcanvasDemoAppChanged03Center - 150, 10, 300, 100, 'black', 'Web-Frontend', 'black');

rectangle(canvasDemoAppChanged03, xcanvasDemoAppChanged03Center - 125, ycanvasDemoAppChanged03Center, 250, 170, burgundy, 'Kafka', 'black');

//Clients
rectangle(canvasDemoAppChanged03, 10, ycanvasDemoAppChanged03Center - 100, 200, 80, purple, 'Clients', 'black');
rectangle(canvasDemoAppChanged03, 70, ycanvasDemoAppChanged03Center - 140, 80, 40, purple, 'Rest', 'black');
rectangle(canvasDemoAppChanged03, 30, ycanvasDemoAppChanged03Center - 20, 50, 40, blue, 'P', 'black');
rectangle(canvasDemoAppChanged03, 140, ycanvasDemoAppChanged03Center - 20, 50, 40, yellow, 'C', 'black');
arrow (canvasDemoAppChanged03, xcanvasDemoAppChanged03Center - 170, 55, 170, ycanvasDemoAppChanged03Center - 160, transientWhite);
arrow (canvasDemoAppChanged03, 100, ycanvasDemoAppChanged03Center + 40, xcanvasDemoAppChanged03Center - 145, ycanvasDemoAppChanged03Center + 125, transientWhite);


//Contracts
rectangle(canvasDemoAppChanged03, canvasDemoAppChanged03.width - 210, ycanvasDemoAppChanged03Center - 100, 200, 80, purple, 'Contracts', 'black');
rectangle(canvasDemoAppChanged03, canvasDemoAppChanged03.width - 150, ycanvasDemoAppChanged03Center - 140, 80, 40, purple, 'Rest', 'black');
rectangle(canvasDemoAppChanged03, canvasDemoAppChanged03.width - 190, ycanvasDemoAppChanged03Center - 20, 50, 40, blue, 'P', 'black');
rectangle(canvasDemoAppChanged03, canvasDemoAppChanged03.width - 80, ycanvasDemoAppChanged03Center - 20, 50, 40, yellow, 'C', 'black');
arrow (canvasDemoAppChanged03, xcanvasDemoAppChanged03Center + 145, ycanvasDemoAppChanged03Center + 125, canvasDemoAppChanged03.width - 100, ycanvasDemoAppChanged03Center + 40, green);
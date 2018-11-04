var canvasDemoAppChanged01 = document.getElementById('canvasDemoAppChanged01');
var ycanvasDemoAppChanged01Center = (canvasDemoAppChanged01.height/2);
var xcanvasDemoAppChanged01Center = (canvasDemoAppChanged01.width/2);

rectangle(canvasDemoAppChanged01, xcanvasDemoAppChanged01Center - 150, 10, 300, 100, 'black', 'Web-Frontend', 'black');

rectangle(canvasDemoAppChanged01, xcanvasDemoAppChanged01Center - 125, ycanvasDemoAppChanged01Center, 250, 170, burgundy, 'Kafka', 'black');

//Clients
rectangle(canvasDemoAppChanged01, 10, ycanvasDemoAppChanged01Center - 100, 200, 80, purple, 'Clients', 'black');
rectangle(canvasDemoAppChanged01, 70, ycanvasDemoAppChanged01Center - 140, 80, 40, purple, 'Rest', 'black');
rectangle(canvasDemoAppChanged01, 30, ycanvasDemoAppChanged01Center - 20, 50, 40, blue, 'P', 'black');
rectangle(canvasDemoAppChanged01, 140, ycanvasDemoAppChanged01Center - 20, 50, 40, yellow, 'C', 'black');
arrow (canvasDemoAppChanged01, xcanvasDemoAppChanged01Center - 170, 55, 170, ycanvasDemoAppChanged01Center - 160, green);

//Contracts
rectangle(canvasDemoAppChanged01, canvasDemoAppChanged01.width - 210, ycanvasDemoAppChanged01Center - 100, 200, 80, purple, 'Contracts', 'black');
rectangle(canvasDemoAppChanged01, canvasDemoAppChanged01.width - 150, ycanvasDemoAppChanged01Center - 140, 80, 40, purple, 'Rest', 'black');
rectangle(canvasDemoAppChanged01, canvasDemoAppChanged01.width - 190, ycanvasDemoAppChanged01Center - 20, 50, 40, blue, 'P', 'black');
rectangle(canvasDemoAppChanged01, canvasDemoAppChanged01.width - 80, ycanvasDemoAppChanged01Center - 20, 50, 40, yellow, 'C', 'black');
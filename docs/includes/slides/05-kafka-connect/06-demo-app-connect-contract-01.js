var canvasDemoAppConnectContract01 = document.getElementById('canvasDemoAppConnectContract01');
var ycanvasDemoAppConnectContract01Center = (canvasDemoAppConnectContract01.height/2);
var xcanvasDemoAppConnectContract01Center = (canvasDemoAppConnectContract01.width/2);

rectangle(canvasDemoAppConnectContract01, xcanvasDemoAppConnectContract01Center - 125, ycanvasDemoAppConnectContract01Center - 140, 250, 170, burgundy, 'Kafka', 'black');

//Clients
rectangle(canvasDemoAppConnectContract01, 10, 10, 200, 80, purple, 'Clients', 'black');
rectangle(canvasDemoAppConnectContract01, 30, ycanvasDemoAppConnectContract01Center - 160, 50, 40, blue, 'P', 'black');
rectangle(canvasDemoAppConnectContract01, 140, ycanvasDemoAppConnectContract01Center - 160, 50, 40, yellow, 'C', 'black');

//Contracts
rectangle(canvasDemoAppConnectContract01, canvasDemoAppConnectContract01.width - 210, 10, 200, 80, purple, 'Contracts', 'black');
rectangle(canvasDemoAppConnectContract01, canvasDemoAppConnectContract01.width - 190, ycanvasDemoAppConnectContract01Center - 160, 50, 40, blue, 'P', 'black');
rectangle(canvasDemoAppConnectContract01, canvasDemoAppConnectContract01.width - 80, ycanvasDemoAppConnectContract01Center - 160, 50, 40, yellow, 'C', 'black');
arrow (canvasDemoAppConnectContract01, canvasDemoAppConnectContract01.width - 210, ycanvasDemoAppConnectContract01Center -100, xcanvasDemoAppConnectContract01Center + 145, ycanvasDemoAppConnectContract01Center - 60, green);

// Connect
rectangle(canvasDemoAppConnectContract01, xcanvasDemoAppConnectContract01Center - 105, ycanvasDemoAppConnectContract01Center + 30, 60, 40, blue, 'Source', 'black');
rectangle(canvasDemoAppConnectContract01, xcanvasDemoAppConnectContract01Center + 45, ycanvasDemoAppConnectContract01Center + 30, 60, 40, yellow, 'Sink', 'black');

rectangleArray(canvasDemoAppConnectContract01, 25, canvasDemoAppConnectContract01.height - 50, 250, 40, lightBrown, [['id', 'black'], ['ts', 'black'], ['oldId', 'black'], ['newId', 'black']]);
ellipse(canvasDemoAppConnectContract01, 50, canvasDemoAppConnectContract01.height - 130, 200, 80, lightBrown, 'Postgres', 'black');

rectangle(canvasDemoAppConnectContract01, canvasDemoAppConnectContract01.width - 275, canvasDemoAppConnectContract01.height - 50, 250, 40, lightBrown, 'Contracts (Json)', 'black');
ellipse(canvasDemoAppConnectContract01, canvasDemoAppConnectContract01.width - 250, canvasDemoAppConnectContract01.height - 130, 200, 80, lightBrown, 'Elastic', 'black');
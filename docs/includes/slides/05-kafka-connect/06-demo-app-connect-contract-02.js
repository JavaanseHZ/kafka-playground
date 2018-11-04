var canvasDemoAppConnectContract02 = document.getElementById('canvasDemoAppConnectContract02');
var ycanvasDemoAppConnectContract02Center = (canvasDemoAppConnectContract02.height/2);
var xcanvasDemoAppConnectContract02Center = (canvasDemoAppConnectContract02.width/2);

rectangle(canvasDemoAppConnectContract02, xcanvasDemoAppConnectContract02Center - 125, ycanvasDemoAppConnectContract02Center - 140, 250, 170, burgundy, 'Kafka', 'black');

//Clients
rectangle(canvasDemoAppConnectContract02, 10, 10, 200, 80, purple, 'Clients', 'black');
rectangle(canvasDemoAppConnectContract02, 30, ycanvasDemoAppConnectContract02Center - 160, 50, 40, blue, 'P', 'black');
rectangle(canvasDemoAppConnectContract02, 140, ycanvasDemoAppConnectContract02Center - 160, 50, 40, yellow, 'C', 'black');

//Contracts
rectangle(canvasDemoAppConnectContract02, canvasDemoAppConnectContract02.width - 210, 10, 200, 80, purple, 'Contracts', 'black');
rectangle(canvasDemoAppConnectContract02, canvasDemoAppConnectContract02.width - 190, ycanvasDemoAppConnectContract02Center - 160, 50, 40, blue, 'P', 'black');
rectangle(canvasDemoAppConnectContract02, canvasDemoAppConnectContract02.width - 80, ycanvasDemoAppConnectContract02Center - 160, 50, 40, yellow, 'C', 'black');
arrow (canvasDemoAppConnectContract02, canvasDemoAppConnectContract02.width - 210, ycanvasDemoAppConnectContract02Center -100, xcanvasDemoAppConnectContract02Center + 145, ycanvasDemoAppConnectContract02Center - 60, transientWhite);

// Connect
rectangle(canvasDemoAppConnectContract02, xcanvasDemoAppConnectContract02Center - 105, ycanvasDemoAppConnectContract02Center + 30, 60, 40, blue, 'Source', 'black');
rectangle(canvasDemoAppConnectContract02, xcanvasDemoAppConnectContract02Center + 45, ycanvasDemoAppConnectContract02Center + 30, 60, 40, yellow, 'Sink', 'black');

rectangleArray(canvasDemoAppConnectContract02, 25, canvasDemoAppConnectContract02.height - 50, 250, 40, lightBrown, [['id', 'black'], ['ts', 'black'], ['oldId', 'black'], ['newId', 'black']]);
ellipse(canvasDemoAppConnectContract02, 50, canvasDemoAppConnectContract02.height - 130, 200, 80, lightBrown, 'Postgres', 'black');

rectangle(canvasDemoAppConnectContract02, canvasDemoAppConnectContract02.width - 275, canvasDemoAppConnectContract02.height - 50, 250, 40, lightBrown, 'Contracts (Json)', 'black');
ellipse(canvasDemoAppConnectContract02, canvasDemoAppConnectContract02.width - 250, canvasDemoAppConnectContract02.height - 130, 200, 80, lightBrown, 'Elastic', 'black');
arrow (canvasDemoAppConnectContract02, xcanvasDemoAppConnectContract02Center + 125, ycanvasDemoAppConnectContract02Center + 90, canvasDemoAppConnectContract02.width - 230, canvasDemoAppConnectContract02.height - 130, green);
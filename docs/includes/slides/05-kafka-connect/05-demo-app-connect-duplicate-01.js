var canvasDemoAppConnectDuplicate01 = document.getElementById('canvasDemoAppConnectDuplicate01');
var ycanvasDemoAppConnectDuplicate01Center = (canvasDemoAppConnectDuplicate01.height/2);
var xcanvasDemoAppConnectDuplicate01Center = (canvasDemoAppConnectDuplicate01.width/2);

rectangle(canvasDemoAppConnectDuplicate01, xcanvasDemoAppConnectDuplicate01Center - 125, ycanvasDemoAppConnectDuplicate01Center - 140, 250, 170, burgundy, 'Kafka', 'black');

//Clients
rectangle(canvasDemoAppConnectDuplicate01, 10, 10, 200, 80, purple, 'Clients', 'black');
rectangle(canvasDemoAppConnectDuplicate01, 30, ycanvasDemoAppConnectDuplicate01Center - 160, 50, 40, blue, 'P', 'black');
rectangle(canvasDemoAppConnectDuplicate01, 140, ycanvasDemoAppConnectDuplicate01Center - 160, 50, 40, yellow, 'C', 'black');

//Contracts
rectangle(canvasDemoAppConnectDuplicate01, canvasDemoAppConnectDuplicate01.width - 210, 10, 200, 80, purple, 'Contracts', 'black');
rectangle(canvasDemoAppConnectDuplicate01, canvasDemoAppConnectDuplicate01.width - 190, ycanvasDemoAppConnectDuplicate01Center - 160, 50, 40, blue, 'P', 'black');
rectangle(canvasDemoAppConnectDuplicate01, canvasDemoAppConnectDuplicate01.width - 80, ycanvasDemoAppConnectDuplicate01Center - 160, 50, 40, yellow, 'C', 'black');

// Connect
rectangle(canvasDemoAppConnectDuplicate01, xcanvasDemoAppConnectDuplicate01Center - 105, ycanvasDemoAppConnectDuplicate01Center + 30, 60, 40, blue, 'Source', 'black');
rectangle(canvasDemoAppConnectDuplicate01, xcanvasDemoAppConnectDuplicate01Center + 45, ycanvasDemoAppConnectDuplicate01Center + 30, 60, 40, yellow, 'Sink', 'black');

rectangleArray(canvasDemoAppConnectDuplicate01, 25, canvasDemoAppConnectDuplicate01.height - 50, 250, 40, lightBrown, [['id', 'black'], ['ts', 'black'], ['oldId', 'black'], ['newId', 'black']]);
ellipse(canvasDemoAppConnectDuplicate01, 50, canvasDemoAppConnectDuplicate01.height - 130, 200, 80, lightBrown, 'Postgres', 'black');
arrow (canvasDemoAppConnectDuplicate01, 230, canvasDemoAppConnectDuplicate01.height - 130, xcanvasDemoAppConnectDuplicate01Center - 125, ycanvasDemoAppConnectDuplicate01Center + 90, green);

rectangle(canvasDemoAppConnectDuplicate01, canvasDemoAppConnectDuplicate01.width - 275, canvasDemoAppConnectDuplicate01.height - 50, 250, 40, lightBrown, 'Contracts (Json)', 'black');
ellipse(canvasDemoAppConnectDuplicate01, canvasDemoAppConnectDuplicate01.width - 250, canvasDemoAppConnectDuplicate01.height - 130, 200, 80, lightBrown, 'Elastic', 'black');
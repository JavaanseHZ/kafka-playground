var canvasDemoAppConnectDuplicate02 = document.getElementById('canvasDemoAppConnectDuplicate02');
var ycanvasDemoAppConnectDuplicate02Center = (canvasDemoAppConnectDuplicate02.height/2);
var xcanvasDemoAppConnectDuplicate02Center = (canvasDemoAppConnectDuplicate02.width/2);

rectangle(canvasDemoAppConnectDuplicate02, xcanvasDemoAppConnectDuplicate02Center - 125, ycanvasDemoAppConnectDuplicate02Center - 140, 250, 170, burgundy, 'Kafka', 'black');

//Clients
rectangle(canvasDemoAppConnectDuplicate02, 10, 10, 200, 80, purple, 'Clients', 'black');
rectangle(canvasDemoAppConnectDuplicate02, 30, ycanvasDemoAppConnectDuplicate02Center - 160, 50, 40, blue, 'P', 'black');
rectangle(canvasDemoAppConnectDuplicate02, 140, ycanvasDemoAppConnectDuplicate02Center - 160, 50, 40, yellow, 'C', 'black');
arrow (canvasDemoAppConnectDuplicate02, xcanvasDemoAppConnectDuplicate02Center - 145, ycanvasDemoAppConnectDuplicate02Center - 60, 210, ycanvasDemoAppConnectDuplicate02Center - 100, green);

//Contracts
rectangle(canvasDemoAppConnectDuplicate02, canvasDemoAppConnectDuplicate02.width - 210, 10, 200, 80, purple, 'Contracts', 'black');
rectangle(canvasDemoAppConnectDuplicate02, canvasDemoAppConnectDuplicate02.width - 190, ycanvasDemoAppConnectDuplicate02Center - 160, 50, 40, blue, 'P', 'black');
rectangle(canvasDemoAppConnectDuplicate02, canvasDemoAppConnectDuplicate02.width - 80, ycanvasDemoAppConnectDuplicate02Center - 160, 50, 40, yellow, 'C', 'black');
arrow (canvasDemoAppConnectDuplicate02, xcanvasDemoAppConnectDuplicate02Center + 145, ycanvasDemoAppConnectDuplicate02Center - 15, canvasDemoAppConnectDuplicate02.width - 100, ycanvasDemoAppConnectDuplicate02Center - 100, green);

// Connect
rectangle(canvasDemoAppConnectDuplicate02, xcanvasDemoAppConnectDuplicate02Center - 105, ycanvasDemoAppConnectDuplicate02Center + 30, 60, 40, blue, 'Source', 'black');
rectangle(canvasDemoAppConnectDuplicate02, xcanvasDemoAppConnectDuplicate02Center + 45, ycanvasDemoAppConnectDuplicate02Center + 30, 60, 40, yellow, 'Sink', 'black');

rectangleArray(canvasDemoAppConnectDuplicate02, 25, canvasDemoAppConnectDuplicate02.height - 50, 250, 40, lightBrown, [['id', 'black'], ['ts', 'black'], ['oldId', 'black'], ['newId', 'black']]);
ellipse(canvasDemoAppConnectDuplicate02, 50, canvasDemoAppConnectDuplicate02.height - 130, 200, 80, lightBrown, 'Postgres', 'black');
arrow (canvasDemoAppConnectDuplicate02, 230, canvasDemoAppConnectDuplicate02.height - 130, xcanvasDemoAppConnectDuplicate02Center - 125, ycanvasDemoAppConnectDuplicate02Center + 90, transientWhite);

rectangle(canvasDemoAppConnectDuplicate02, canvasDemoAppConnectDuplicate02.width - 275, canvasDemoAppConnectDuplicate02.height - 50, 250, 40, lightBrown, 'Contracts (Json)', 'black');
ellipse(canvasDemoAppConnectDuplicate02, canvasDemoAppConnectDuplicate02.width - 250, canvasDemoAppConnectDuplicate02.height - 130, 200, 80, lightBrown, 'Elastic', 'black');
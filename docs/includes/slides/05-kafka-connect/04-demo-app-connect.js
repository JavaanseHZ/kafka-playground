var canvasDemoAppConnect = document.getElementById('canvasDemoAppConnect');
var ycanvasDemoAppConnectCenter = (canvasDemoAppConnect.height/2);
var xcanvasDemoAppConnectCenter = (canvasDemoAppConnect.width/2);

rectangle(canvasDemoAppConnect, xcanvasDemoAppConnectCenter - 125, ycanvasDemoAppConnectCenter - 140, 250, 170, burgundy, 'Kafka', 'black');

//Clients
rectangle(canvasDemoAppConnect, 10, 10, 200, 80, purple, 'Clients', 'black');
rectangle(canvasDemoAppConnect, 30, ycanvasDemoAppConnectCenter - 160, 50, 40, blue, 'P', 'black');
rectangle(canvasDemoAppConnect, 140, ycanvasDemoAppConnectCenter - 160, 50, 40, yellow, 'C', 'black');
arrow (canvasDemoAppConnect, 100, ycanvasDemoAppConnectCenter - 100, xcanvasDemoAppConnectCenter - 145, ycanvasDemoAppConnectCenter - 15, transientWhite);
arrow (canvasDemoAppConnect, xcanvasDemoAppConnectCenter - 145, ycanvasDemoAppConnectCenter - 60, 210, ycanvasDemoAppConnectCenter - 100, transientWhite);

//Contracts
rectangle(canvasDemoAppConnect, canvasDemoAppConnect.width - 210, 10, 200, 80, purple, 'Contracts', 'black');
rectangle(canvasDemoAppConnect, canvasDemoAppConnect.width - 190, ycanvasDemoAppConnectCenter - 160, 50, 40, blue, 'P', 'black');
rectangle(canvasDemoAppConnect, canvasDemoAppConnect.width - 80, ycanvasDemoAppConnectCenter - 160, 50, 40, yellow, 'C', 'black');
arrow (canvasDemoAppConnect, xcanvasDemoAppConnectCenter + 145, ycanvasDemoAppConnectCenter - 15, canvasDemoAppConnect.width - 100, ycanvasDemoAppConnectCenter - 100, transientWhite);
arrow (canvasDemoAppConnect, canvasDemoAppConnect.width - 210, ycanvasDemoAppConnectCenter -100, xcanvasDemoAppConnectCenter + 145, ycanvasDemoAppConnectCenter - 60, transientWhite);

// Connect
rectangle(canvasDemoAppConnect, xcanvasDemoAppConnectCenter - 105, ycanvasDemoAppConnectCenter + 30, 60, 40, blue, 'Source', 'black');
rectangle(canvasDemoAppConnect, xcanvasDemoAppConnectCenter + 45, ycanvasDemoAppConnectCenter + 30, 60, 40, yellow, 'Sink', 'black');

rectangleArray(canvasDemoAppConnect, 25, canvasDemoAppConnect.height - 50, 250, 40, lightBrown, [['id', 'black'], ['ts', 'black'], ['oldId', 'black'], ['newId', 'black']]);
ellipse(canvasDemoAppConnect, 50, canvasDemoAppConnect.height - 130, 200, 80, lightBrown, 'Postgres', 'black');
arrow (canvasDemoAppConnect, 230, canvasDemoAppConnect.height - 130, xcanvasDemoAppConnectCenter - 125, ycanvasDemoAppConnectCenter + 90, transientWhite);

rectangle(canvasDemoAppConnect, canvasDemoAppConnect.width - 275, canvasDemoAppConnect.height - 50, 250, 40, lightBrown, 'Contracts (Json)', 'black');
ellipse(canvasDemoAppConnect, canvasDemoAppConnect.width - 250, canvasDemoAppConnect.height - 130, 200, 80, lightBrown, 'Elastic', 'black');
arrow (canvasDemoAppConnect, xcanvasDemoAppConnectCenter + 125, ycanvasDemoAppConnectCenter + 90, canvasDemoAppConnect.width - 230, canvasDemoAppConnect.height - 130, transientWhite);
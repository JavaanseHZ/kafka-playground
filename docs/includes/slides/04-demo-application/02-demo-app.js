var canvasDemoApp = document.getElementById('canvasDemoApp');
var ycanvasDemoAppCenter = (canvasDemoApp.height/2);
var xcanvasDemoAppCenter = (canvasDemoApp.width/2);

rectangle(canvasDemoApp, xcanvasDemoAppCenter - 150, 10, 300, 100, 'black', 'Web-Frontend', 'black');

rectangle(canvasDemoApp, xcanvasDemoAppCenter - 125, ycanvasDemoAppCenter, 250, 170, burgundy, 'Kafka', 'black');

//Clients
rectangle(canvasDemoApp, 10, ycanvasDemoAppCenter - 100, 200, 80, purple, 'Clients', 'black');
rectangle(canvasDemoApp, 70, ycanvasDemoAppCenter - 140, 80, 40, purple, 'Rest', 'black');
rectangle(canvasDemoApp, 30, ycanvasDemoAppCenter - 20, 50, 40, blue, 'P', 'black');
rectangle(canvasDemoApp, 140, ycanvasDemoAppCenter - 20, 50, 40, yellow, 'C', 'black');
arrow (canvasDemoApp, xcanvasDemoAppCenter - 170, 55, 170, ycanvasDemoAppCenter - 160, transientWhite);
arrow (canvasDemoApp, 100, ycanvasDemoAppCenter + 40, xcanvasDemoAppCenter - 145, ycanvasDemoAppCenter + 125, transientWhite);
arrow (canvasDemoApp, xcanvasDemoAppCenter - 145, ycanvasDemoAppCenter + 80, 210, ycanvasDemoAppCenter + 40, transientWhite);


//Contracts
rectangle(canvasDemoApp, canvasDemoApp.width - 210, ycanvasDemoAppCenter - 100, 200, 80, purple, 'Contracts', 'black');
rectangle(canvasDemoApp, canvasDemoApp.width - 150, ycanvasDemoAppCenter - 140, 80, 40, purple, 'Rest', 'black');
rectangle(canvasDemoApp, canvasDemoApp.width - 190, ycanvasDemoAppCenter - 20, 50, 40, blue, 'P', 'black');
rectangle(canvasDemoApp, canvasDemoApp.width - 80, ycanvasDemoAppCenter - 20, 50, 40, yellow, 'C', 'black');
arrow (canvasDemoApp, xcanvasDemoAppCenter + 170, 55,  canvasDemoApp.width - 170, ycanvasDemoAppCenter - 160, transientWhite);
arrow (canvasDemoApp, canvasDemoApp.width - 100, ycanvasDemoAppCenter + 40, xcanvasDemoAppCenter + 145, ycanvasDemoAppCenter + 125, transientWhite);
arrow (canvasDemoApp, xcanvasDemoAppCenter + 145, ycanvasDemoAppCenter + 80, canvasDemoApp.width - 210, ycanvasDemoAppCenter + 40, transientWhite);
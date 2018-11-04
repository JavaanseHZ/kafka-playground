var canvasDemoAppKstreamsFilter04 = document.getElementById('canvasDemoAppKstreamsFilter04');
var ycanvasDemoAppKstreamsFilter04Center = (canvasDemoAppKstreamsFilter04.height/2);
var xcanvasDemoAppKstreamsFilter04Center = (canvasDemoAppKstreamsFilter04.width/2);

rectangle(canvasDemoAppKstreamsFilter04, xcanvasDemoAppKstreamsFilter04Center - 125, ycanvasDemoAppKstreamsFilter04Center - 140, 250, 170, burgundy, 'Kafka', 'black');

//Contracts
rectangle(canvasDemoAppKstreamsFilter04, canvasDemoAppKstreamsFilter04.width - 210, 10, 200, 80, purple, 'Contracts', 'black');
rectangle(canvasDemoAppKstreamsFilter04, canvasDemoAppKstreamsFilter04.width - 190, ycanvasDemoAppKstreamsFilter04Center - 160, 50, 40, blue, 'P', 'black');
arrow (canvasDemoAppKstreamsFilter04, canvasDemoAppKstreamsFilter04.width - 210, ycanvasDemoAppKstreamsFilter04Center -100, xcanvasDemoAppKstreamsFilter04Center + 145, ycanvasDemoAppKstreamsFilter04Center - 60, transientWhite);

// Connect
rectangle(canvasDemoAppKstreamsFilter04, xcanvasDemoAppKstreamsFilter04Center + 45, ycanvasDemoAppKstreamsFilter04Center + 30, 60, 40, yellow, 'Sink', 'black');

rectangle(canvasDemoAppKstreamsFilter04, canvasDemoAppKstreamsFilter04.width - 275, canvasDemoAppKstreamsFilter04.height - 50, 250, 40, lightBrown, 'Contracts (Json)', 'black');
ellipse(canvasDemoAppKstreamsFilter04, canvasDemoAppKstreamsFilter04.width - 250, canvasDemoAppKstreamsFilter04.height - 130, 200, 80, lightBrown, 'Elastic', 'black');
arrow (canvasDemoAppKstreamsFilter04, xcanvasDemoAppKstreamsFilter04Center + 125, ycanvasDemoAppKstreamsFilter04Center + 90, canvasDemoAppKstreamsFilter04.width - 230, canvasDemoAppKstreamsFilter04.height - 130, green);

//KStream
rectangle(canvasDemoAppKstreamsFilter04, 10, ycanvasDemoAppKstreamsFilter04Center - 105, 160, 100, purple, 'KStream', 'black');
rectangle(canvasDemoAppKstreamsFilter04, 170, ycanvasDemoAppKstreamsFilter04Center - 105, 40, 40, yellow, 'C', 'black');
rectangle(canvasDemoAppKstreamsFilter04, 170, ycanvasDemoAppKstreamsFilter04Center - 45, 40, 40, blue, 'P', 'black');
arrow (canvasDemoAppKstreamsFilter04, xcanvasDemoAppKstreamsFilter04Center - 145, ycanvasDemoAppKstreamsFilter04Center - 85, 230, ycanvasDemoAppKstreamsFilter04Center - 85, transientWhite);
arrow (canvasDemoAppKstreamsFilter04, 230, ycanvasDemoAppKstreamsFilter04Center - 25, xcanvasDemoAppKstreamsFilter04Center - 145, ycanvasDemoAppKstreamsFilter04Center - 25, transientWhite);
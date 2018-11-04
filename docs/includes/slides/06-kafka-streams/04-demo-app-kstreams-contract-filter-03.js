var canvasDemoAppKstreamsFilter03 = document.getElementById('canvasDemoAppKstreamsFilter03');
var ycanvasDemoAppKstreamsFilter03Center = (canvasDemoAppKstreamsFilter03.height/2);
var xcanvasDemoAppKstreamsFilter03Center = (canvasDemoAppKstreamsFilter03.width/2);

rectangle(canvasDemoAppKstreamsFilter03, xcanvasDemoAppKstreamsFilter03Center - 125, ycanvasDemoAppKstreamsFilter03Center - 140, 250, 170, burgundy, 'Kafka', 'black');

//Contracts
rectangle(canvasDemoAppKstreamsFilter03, canvasDemoAppKstreamsFilter03.width - 210, 10, 200, 80, purple, 'Contracts', 'black');
rectangle(canvasDemoAppKstreamsFilter03, canvasDemoAppKstreamsFilter03.width - 190, ycanvasDemoAppKstreamsFilter03Center - 160, 50, 40, blue, 'P', 'black');
arrow (canvasDemoAppKstreamsFilter03, canvasDemoAppKstreamsFilter03.width - 210, ycanvasDemoAppKstreamsFilter03Center -100, xcanvasDemoAppKstreamsFilter03Center + 145, ycanvasDemoAppKstreamsFilter03Center - 60, transientWhite);

// Connect
rectangle(canvasDemoAppKstreamsFilter03, xcanvasDemoAppKstreamsFilter03Center + 45, ycanvasDemoAppKstreamsFilter03Center + 30, 60, 40, yellow, 'Sink', 'black');

rectangle(canvasDemoAppKstreamsFilter03, canvasDemoAppKstreamsFilter03.width - 275, canvasDemoAppKstreamsFilter03.height - 50, 250, 40, lightBrown, 'Contracts (Json)', 'black');
ellipse(canvasDemoAppKstreamsFilter03, canvasDemoAppKstreamsFilter03.width - 250, canvasDemoAppKstreamsFilter03.height - 130, 200, 80, lightBrown, 'Elastic', 'black');

//KStream
rectangle(canvasDemoAppKstreamsFilter03, 10, ycanvasDemoAppKstreamsFilter03Center - 105, 160, 100, purple, 'KStream', 'black');
rectangle(canvasDemoAppKstreamsFilter03, 170, ycanvasDemoAppKstreamsFilter03Center - 105, 40, 40, yellow, 'C', 'black');
rectangle(canvasDemoAppKstreamsFilter03, 170, ycanvasDemoAppKstreamsFilter03Center - 45, 40, 40, blue, 'P', 'black');
arrow (canvasDemoAppKstreamsFilter03, xcanvasDemoAppKstreamsFilter03Center - 145, ycanvasDemoAppKstreamsFilter03Center - 85, 230, ycanvasDemoAppKstreamsFilter03Center - 85, transientWhite);
arrow (canvasDemoAppKstreamsFilter03, 230, ycanvasDemoAppKstreamsFilter03Center - 25, xcanvasDemoAppKstreamsFilter03Center - 145, ycanvasDemoAppKstreamsFilter03Center - 25, green);
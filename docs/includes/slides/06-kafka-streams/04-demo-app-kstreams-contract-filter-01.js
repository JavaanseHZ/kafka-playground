var canvasDemoAppKstreamsFilter01 = document.getElementById('canvasDemoAppKstreamsFilter01');
var ycanvasDemoAppKstreamsFilter01Center = (canvasDemoAppKstreamsFilter01.height/2);
var xcanvasDemoAppKstreamsFilter01Center = (canvasDemoAppKstreamsFilter01.width/2);

rectangle(canvasDemoAppKstreamsFilter01, xcanvasDemoAppKstreamsFilter01Center - 125, ycanvasDemoAppKstreamsFilter01Center - 140, 250, 170, burgundy, 'Kafka', 'black');

//Contracts
rectangle(canvasDemoAppKstreamsFilter01, canvasDemoAppKstreamsFilter01.width - 210, 10, 200, 80, purple, 'Contracts', 'black');
rectangle(canvasDemoAppKstreamsFilter01, canvasDemoAppKstreamsFilter01.width - 190, ycanvasDemoAppKstreamsFilter01Center - 160, 50, 40, blue, 'P', 'black');
arrow (canvasDemoAppKstreamsFilter01, canvasDemoAppKstreamsFilter01.width - 210, ycanvasDemoAppKstreamsFilter01Center -100, xcanvasDemoAppKstreamsFilter01Center + 145, ycanvasDemoAppKstreamsFilter01Center - 60, green);

// Connect
rectangle(canvasDemoAppKstreamsFilter01, xcanvasDemoAppKstreamsFilter01Center + 45, ycanvasDemoAppKstreamsFilter01Center + 30, 60, 40, yellow, 'Sink', 'black');

rectangle(canvasDemoAppKstreamsFilter01, canvasDemoAppKstreamsFilter01.width - 275, canvasDemoAppKstreamsFilter01.height - 50, 250, 40, lightBrown, 'Contracts (Json)', 'black');
ellipse(canvasDemoAppKstreamsFilter01, canvasDemoAppKstreamsFilter01.width - 250, canvasDemoAppKstreamsFilter01.height - 130, 200, 80, lightBrown, 'Elastic', 'black');

//KStream
rectangle(canvasDemoAppKstreamsFilter01, 10, ycanvasDemoAppKstreamsFilter01Center - 105, 160, 100, purple, 'KStream', 'black');
rectangle(canvasDemoAppKstreamsFilter01, 170, ycanvasDemoAppKstreamsFilter01Center - 105, 40, 40, yellow, 'C', 'black');
rectangle(canvasDemoAppKstreamsFilter01, 170, ycanvasDemoAppKstreamsFilter01Center - 45, 40, 40, blue, 'P', 'black');
var canvasDemoAppKstreamsFilter02 = document.getElementById('canvasDemoAppKstreamsFilter02');
var ycanvasDemoAppKstreamsFilter02Center = (canvasDemoAppKstreamsFilter02.height/2);
var xcanvasDemoAppKstreamsFilter02Center = (canvasDemoAppKstreamsFilter02.width/2);

rectangle(canvasDemoAppKstreamsFilter02, xcanvasDemoAppKstreamsFilter02Center - 125, ycanvasDemoAppKstreamsFilter02Center - 140, 250, 170, burgundy, 'Kafka', 'black');

//Contracts
rectangle(canvasDemoAppKstreamsFilter02, canvasDemoAppKstreamsFilter02.width - 210, 10, 200, 80, purple, 'Contracts', 'black');
rectangle(canvasDemoAppKstreamsFilter02, canvasDemoAppKstreamsFilter02.width - 190, ycanvasDemoAppKstreamsFilter02Center - 160, 50, 40, blue, 'P', 'black');
arrow (canvasDemoAppKstreamsFilter02, canvasDemoAppKstreamsFilter02.width - 210, ycanvasDemoAppKstreamsFilter02Center -100, xcanvasDemoAppKstreamsFilter02Center + 145, ycanvasDemoAppKstreamsFilter02Center - 60, transientWhite);

// Connect
rectangle(canvasDemoAppKstreamsFilter02, xcanvasDemoAppKstreamsFilter02Center + 45, ycanvasDemoAppKstreamsFilter02Center + 30, 60, 40, yellow, 'Sink', 'black');

rectangle(canvasDemoAppKstreamsFilter02, canvasDemoAppKstreamsFilter02.width - 275, canvasDemoAppKstreamsFilter02.height - 50, 250, 40, lightBrown, 'Contracts (Json)', 'black');
ellipse(canvasDemoAppKstreamsFilter02, canvasDemoAppKstreamsFilter02.width - 250, canvasDemoAppKstreamsFilter02.height - 130, 200, 80, lightBrown, 'Elastic', 'black');

//KStream
rectangle(canvasDemoAppKstreamsFilter02, 10, ycanvasDemoAppKstreamsFilter02Center - 105, 160, 100, purple, 'KStream', 'black');
rectangle(canvasDemoAppKstreamsFilter02, 170, ycanvasDemoAppKstreamsFilter02Center - 105, 40, 40, yellow, 'C', 'black');
rectangle(canvasDemoAppKstreamsFilter02, 170, ycanvasDemoAppKstreamsFilter02Center - 45, 40, 40, blue, 'P', 'black');
arrow (canvasDemoAppKstreamsFilter02, xcanvasDemoAppKstreamsFilter02Center - 145, ycanvasDemoAppKstreamsFilter02Center - 85, 230, ycanvasDemoAppKstreamsFilter02Center - 85, green);
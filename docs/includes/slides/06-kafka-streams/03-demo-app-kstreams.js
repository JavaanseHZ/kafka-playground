var canvasDemoAppKstreams = document.getElementById('canvasDemoAppKstreams');
var ycanvasDemoAppKstreamsCenter = (canvasDemoAppKstreams.height/2);
var xcanvasDemoAppKstreamsCenter = (canvasDemoAppKstreams.width/2);

rectangle(canvasDemoAppKstreams, xcanvasDemoAppKstreamsCenter - 125, ycanvasDemoAppKstreamsCenter - 140, 250, 170, burgundy, 'Kafka', 'black');

//Contracts
rectangle(canvasDemoAppKstreams, canvasDemoAppKstreams.width - 210, 10, 200, 80, purple, 'Contracts', 'black');
rectangle(canvasDemoAppKstreams, canvasDemoAppKstreams.width - 190, ycanvasDemoAppKstreamsCenter - 160, 50, 40, blue, 'P', 'black');
arrow (canvasDemoAppKstreams, canvasDemoAppKstreams.width - 210, ycanvasDemoAppKstreamsCenter -100, xcanvasDemoAppKstreamsCenter + 145, ycanvasDemoAppKstreamsCenter - 60, transientWhite);

// Connect
rectangle(canvasDemoAppKstreams, xcanvasDemoAppKstreamsCenter + 45, ycanvasDemoAppKstreamsCenter + 30, 60, 40, yellow, 'Sink', 'black');

rectangle(canvasDemoAppKstreams, canvasDemoAppKstreams.width - 275, canvasDemoAppKstreams.height - 50, 250, 40, lightBrown, 'Contracts (Json)', 'black');
ellipse(canvasDemoAppKstreams, canvasDemoAppKstreams.width - 250, canvasDemoAppKstreams.height - 130, 200, 80, lightBrown, 'Elastic', 'black');
arrow (canvasDemoAppKstreams, xcanvasDemoAppKstreamsCenter + 125, ycanvasDemoAppKstreamsCenter + 90, canvasDemoAppKstreams.width - 230, canvasDemoAppKstreams.height - 130, transientWhite);

//KStream
rectangle(canvasDemoAppKstreams, 10, ycanvasDemoAppKstreamsCenter - 105, 160, 100, purple, 'KStream', 'black');
rectangle(canvasDemoAppKstreams, 170, ycanvasDemoAppKstreamsCenter - 105, 40, 40, yellow, 'C', 'black');
rectangle(canvasDemoAppKstreams, 170, ycanvasDemoAppKstreamsCenter - 45, 40, 40, blue, 'P', 'black');
arrow (canvasDemoAppKstreams, xcanvasDemoAppKstreamsCenter - 145, ycanvasDemoAppKstreamsCenter - 85, 230, ycanvasDemoAppKstreamsCenter - 85, transientWhite);
arrow (canvasDemoAppKstreams, 230, ycanvasDemoAppKstreamsCenter - 25, xcanvasDemoAppKstreamsCenter - 145, ycanvasDemoAppKstreamsCenter - 25, transientWhite);
var canvasEventAvro = document.getElementById('canvasEventAvro');
var ycanvasEventAvroCenter = (canvasEventAvro.height/2);
rectangle(canvasEventAvro, 10, ycanvasEventAvroCenter - 85, 690, 170, blue, null, null);
rectangle(canvasEventAvro, 30, ycanvasEventAvroCenter - 65, 200, 130, burgundy, 'Topic', 'black');
rectangle(canvasEventAvro, 250, ycanvasEventAvroCenter - 65, 200, 60, yellow, 'Schema', 'black');
rectangle(canvasEventAvro, 250, ycanvasEventAvroCenter + 5, 200, 60, yellow, 'Key', 'black');
rectangle(canvasEventAvro, 470, ycanvasEventAvroCenter - 65 , 200, 60, yellow, 'Schema', 'black');
rectangle(canvasEventAvro, 470, ycanvasEventAvroCenter + 5, 200, 60, yellow, 'Value', 'black');

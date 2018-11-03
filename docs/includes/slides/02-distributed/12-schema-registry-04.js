var canvasSchemaRegistry04 = document.getElementById('canvasSchemaRegistry04');
var ycanvasSchemaRegistry04Center = (canvasSchemaRegistry04.height/2);
var xcanvasSchemaRegistry04Center = (canvasSchemaRegistry04.width/2);

rectangle(canvasSchemaRegistry04, xcanvasSchemaRegistry04Center - 150, ycanvasSchemaRegistry04Center - 190, 300, 80, burgundy, 'Schema-Registry', 'black');
rectangle(canvasSchemaRegistry04, xcanvasSchemaRegistry04Center - 85, ycanvasSchemaRegistry04Center - 100, 170, 60, burgundy, null, null);
rectangle(canvasSchemaRegistry04, xcanvasSchemaRegistry04Center - 75, ycanvasSchemaRegistry04Center - 90, 70, 40, green,"Id", 'black');
rectangle(canvasSchemaRegistry04, xcanvasSchemaRegistry04Center + 5, ycanvasSchemaRegistry04Center - 90, 70, 40, purple, "Schema", 'black');

rectangle(canvasSchemaRegistry04, xcanvasSchemaRegistry04Center - 150, ycanvasSchemaRegistry04Center + 110, 300, 80, burgundy, 'Broker', 'black');

rectangle(canvasSchemaRegistry04, 10, ycanvasSchemaRegistry04Center - 50, 150, 100, blue, 'Prod', 'black');
rectangle(canvasSchemaRegistry04, canvasSchemaRegistry04.width - 160, ycanvasSchemaRegistry04Center - 50, 150, 100, yellow, 'Cons', 'black');

arrow (canvasSchemaRegistry04, 120, ycanvasSchemaRegistry04Center - 60, xcanvasSchemaRegistry04Center - 160, ycanvasSchemaRegistry04Center - 140, transientWhite);
arrow (canvasSchemaRegistry04, xcanvasSchemaRegistry04Center - 120, ycanvasSchemaRegistry04Center - 100, 170, ycanvasSchemaRegistry04Center - 20, transientWhite);
arrow (canvasSchemaRegistry04, 170, ycanvasSchemaRegistry04Center + 20, xcanvasSchemaRegistry04Center - 120, ycanvasSchemaRegistry04Center + 100, green);
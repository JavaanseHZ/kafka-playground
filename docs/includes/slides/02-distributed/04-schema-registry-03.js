var canvasSchemaRegistry03 = document.getElementById('canvasSchemaRegistry03');
var ycanvasSchemaRegistry03Center = (canvasSchemaRegistry03.height/2);
var xcanvasSchemaRegistry03Center = (canvasSchemaRegistry03.width/2);

rectangle(canvasSchemaRegistry03, xcanvasSchemaRegistry03Center - 150, ycanvasSchemaRegistry03Center - 190, 300, 80, burgundy, 'Schema-Registry', 'black');
rectangle(canvasSchemaRegistry03, xcanvasSchemaRegistry03Center - 85, ycanvasSchemaRegistry03Center - 100, 170, 60, burgundy, null, null);
rectangle(canvasSchemaRegistry03, xcanvasSchemaRegistry03Center - 75, ycanvasSchemaRegistry03Center - 90, 70, 40, green,"Id", 'black');
rectangle(canvasSchemaRegistry03, xcanvasSchemaRegistry03Center + 5, ycanvasSchemaRegistry03Center - 90, 70, 40, purple, "Schema", 'black');

rectangle(canvasSchemaRegistry03, xcanvasSchemaRegistry03Center - 150, ycanvasSchemaRegistry03Center + 110, 300, 80, burgundy, 'Broker', 'black');

rectangle(canvasSchemaRegistry03, 10, ycanvasSchemaRegistry03Center - 50, 150, 100, blue, 'Prod', 'black');
rectangle(canvasSchemaRegistry03, canvasSchemaRegistry03.width - 160, ycanvasSchemaRegistry03Center - 50, 150, 100, yellow, 'Cons', 'black');

arrow (canvasSchemaRegistry03, 120, ycanvasSchemaRegistry03Center - 60, xcanvasSchemaRegistry03Center - 160, ycanvasSchemaRegistry03Center - 140, purple);
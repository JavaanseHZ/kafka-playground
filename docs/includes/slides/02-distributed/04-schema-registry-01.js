var canvasSchemaRegistry01 = document.getElementById('canvasSchemaRegistry01');
var ycanvasSchemaRegistry01Center = (canvasSchemaRegistry01.height/2);
var xcanvasSchemaRegistry01Center = (canvasSchemaRegistry01.width/2);

rectangle(canvasSchemaRegistry01, xcanvasSchemaRegistry01Center - 150, ycanvasSchemaRegistry01Center - 190, 300, 80, burgundy, 'Schema-Registry', 'black');
rectangle(canvasSchemaRegistry01, xcanvasSchemaRegistry01Center - 85, ycanvasSchemaRegistry01Center - 100, 170, 60, burgundy, null, null);
rectangle(canvasSchemaRegistry01, xcanvasSchemaRegistry01Center - 75, ycanvasSchemaRegistry01Center - 90, 70, 40, green,"Id", 'black');
rectangle(canvasSchemaRegistry01, xcanvasSchemaRegistry01Center + 5, ycanvasSchemaRegistry01Center - 90, 70, 40, purple, "Schema", 'black');

rectangle(canvasSchemaRegistry01, xcanvasSchemaRegistry01Center - 150, ycanvasSchemaRegistry01Center + 110, 300, 80, burgundy, 'Broker', 'black');

rectangle(canvasSchemaRegistry01, 10, ycanvasSchemaRegistry01Center - 50, 150, 100, blue, 'Prod', 'black');
rectangle(canvasSchemaRegistry01, canvasSchemaRegistry01.width - 160, ycanvasSchemaRegistry01Center - 50, 150, 100, yellow, 'Cons', 'black');
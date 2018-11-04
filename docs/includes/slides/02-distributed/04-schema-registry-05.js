var canvasSchemaRegistry05 = document.getElementById('canvasSchemaRegistry05');
var ycanvasSchemaRegistry05Center = (canvasSchemaRegistry05.height/2);
var xcanvasSchemaRegistry05Center = (canvasSchemaRegistry05.width/2);

rectangle(canvasSchemaRegistry05, xcanvasSchemaRegistry05Center - 150, ycanvasSchemaRegistry05Center - 190, 300, 80, burgundy, 'Schema-Registry', 'black');
rectangle(canvasSchemaRegistry05, xcanvasSchemaRegistry05Center - 85, ycanvasSchemaRegistry05Center - 100, 170, 60, burgundy, null, null);
rectangle(canvasSchemaRegistry05, xcanvasSchemaRegistry05Center - 75, ycanvasSchemaRegistry05Center - 90, 70, 40, green,"Id", 'black');
rectangle(canvasSchemaRegistry05, xcanvasSchemaRegistry05Center + 5, ycanvasSchemaRegistry05Center - 90, 70, 40, purple, "Schema", 'black');

rectangle(canvasSchemaRegistry05, xcanvasSchemaRegistry05Center - 150, ycanvasSchemaRegistry05Center + 110, 300, 80, burgundy, 'Broker', 'black');

rectangle(canvasSchemaRegistry05, 10, ycanvasSchemaRegistry05Center - 50, 150, 100, blue, 'Prod', 'black');
rectangle(canvasSchemaRegistry05, canvasSchemaRegistry05.width - 160, ycanvasSchemaRegistry05Center - 50, 150, 100, yellow, 'Cons', 'black');

arrow (canvasSchemaRegistry05, 120, ycanvasSchemaRegistry05Center - 60, xcanvasSchemaRegistry05Center - 160, ycanvasSchemaRegistry05Center - 140, transientWhite);
arrow (canvasSchemaRegistry05, xcanvasSchemaRegistry05Center - 120, ycanvasSchemaRegistry05Center - 100, 170, ycanvasSchemaRegistry05Center - 20, transientWhite);
arrow (canvasSchemaRegistry05, 170, ycanvasSchemaRegistry05Center + 20, xcanvasSchemaRegistry05Center - 120, ycanvasSchemaRegistry05Center + 100, green);
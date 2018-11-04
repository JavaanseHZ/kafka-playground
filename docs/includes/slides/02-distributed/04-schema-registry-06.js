var canvasSchemaRegistry06 = document.getElementById('canvasSchemaRegistry06');
var ycanvasSchemaRegistry06Center = (canvasSchemaRegistry06.height/2);
var xcanvasSchemaRegistry06Center = (canvasSchemaRegistry06.width/2);

rectangle(canvasSchemaRegistry06, xcanvasSchemaRegistry06Center - 150, ycanvasSchemaRegistry06Center - 190, 300, 80, burgundy, 'Schema-Registry', 'black');
rectangle(canvasSchemaRegistry06, xcanvasSchemaRegistry06Center - 85, ycanvasSchemaRegistry06Center - 100, 170, 60, burgundy, null, null);
rectangle(canvasSchemaRegistry06, xcanvasSchemaRegistry06Center - 75, ycanvasSchemaRegistry06Center - 90, 70, 40, green,"Id", 'black');
rectangle(canvasSchemaRegistry06, xcanvasSchemaRegistry06Center + 5, ycanvasSchemaRegistry06Center - 90, 70, 40, purple, "Schema", 'black');

rectangle(canvasSchemaRegistry06, xcanvasSchemaRegistry06Center - 150, ycanvasSchemaRegistry06Center + 110, 300, 80, burgundy, 'Broker', 'black');

rectangle(canvasSchemaRegistry06, 10, ycanvasSchemaRegistry06Center - 50, 150, 100, blue, 'Prod', 'black');
rectangle(canvasSchemaRegistry06, canvasSchemaRegistry06.width - 160, ycanvasSchemaRegistry06Center - 50, 150, 100, yellow, 'Cons', 'black');

arrow (canvasSchemaRegistry06, 120, ycanvasSchemaRegistry06Center - 60, xcanvasSchemaRegistry06Center - 160, ycanvasSchemaRegistry06Center - 140, transientWhite);
arrow (canvasSchemaRegistry06, xcanvasSchemaRegistry06Center - 120, ycanvasSchemaRegistry06Center - 100, 170, ycanvasSchemaRegistry06Center - 20, transientWhite);
arrow (canvasSchemaRegistry06, 170, ycanvasSchemaRegistry06Center + 20, xcanvasSchemaRegistry06Center - 120, ycanvasSchemaRegistry06Center + 100, transientWhite);

arrow (canvasSchemaRegistry06, xcanvasSchemaRegistry06Center + 120, ycanvasSchemaRegistry06Center + 100, canvasSchemaRegistry06.width - 170, ycanvasSchemaRegistry06Center + 20, green);
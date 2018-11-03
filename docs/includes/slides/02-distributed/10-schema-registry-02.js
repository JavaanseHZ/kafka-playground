var canvasSchemaRegistry02 = document.getElementById('canvasSchemaRegistry02');
var ycanvasSchemaRegistry02Center = (canvasSchemaRegistry02.height/2);
var xcanvasSchemaRegistry02Center = (canvasSchemaRegistry02.width/2);

rectangle(canvasSchemaRegistry02, xcanvasSchemaRegistry02Center - 150, ycanvasSchemaRegistry02Center - 190, 300, 80, burgundy, 'Schema-Registry', 'black');
rectangle(canvasSchemaRegistry02, xcanvasSchemaRegistry02Center - 85, ycanvasSchemaRegistry02Center - 100, 170, 60, burgundy, null, null);
rectangle(canvasSchemaRegistry02, xcanvasSchemaRegistry02Center - 75, ycanvasSchemaRegistry02Center - 90, 70, 40, green,"Id", 'black');
rectangle(canvasSchemaRegistry02, xcanvasSchemaRegistry02Center + 5, ycanvasSchemaRegistry02Center - 90, 70, 40, purple, "Schema", 'black');

rectangle(canvasSchemaRegistry02, xcanvasSchemaRegistry02Center - 150, ycanvasSchemaRegistry02Center + 110, 300, 80, burgundy, 'Broker', 'black');

rectangle(canvasSchemaRegistry02, 10, ycanvasSchemaRegistry02Center - 50, 150, 100, blue, 'Prod', 'black');
rectangle(canvasSchemaRegistry02, canvasSchemaRegistry02.width - 160, ycanvasSchemaRegistry02Center - 50, 150, 100, yellow, 'Cons', 'black');

arrow (canvasSchemaRegistry02, 120, ycanvasSchemaRegistry02Center - 60, xcanvasSchemaRegistry02Center - 160, ycanvasSchemaRegistry02Center - 140, purple);
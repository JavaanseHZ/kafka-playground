var canvasSchemaRegistry07 = document.getElementById('canvasSchemaRegistry07');
var ycanvasSchemaRegistry07Center = (canvasSchemaRegistry07.height/2);
var xcanvasSchemaRegistry07Center = (canvasSchemaRegistry07.width/2);

rectangle(canvasSchemaRegistry07, xcanvasSchemaRegistry07Center - 150, ycanvasSchemaRegistry07Center - 190, 300, 80, burgundy, 'Schema-Registry', 'black');
rectangle(canvasSchemaRegistry07, xcanvasSchemaRegistry07Center - 85, ycanvasSchemaRegistry07Center - 100, 170, 60, burgundy, null, null);
rectangle(canvasSchemaRegistry07, xcanvasSchemaRegistry07Center - 75, ycanvasSchemaRegistry07Center - 90, 70, 40, green,"Id", 'black');
rectangle(canvasSchemaRegistry07, xcanvasSchemaRegistry07Center + 5, ycanvasSchemaRegistry07Center - 90, 70, 40, purple, "Schema", 'black');

rectangle(canvasSchemaRegistry07, xcanvasSchemaRegistry07Center - 150, ycanvasSchemaRegistry07Center + 110, 300, 80, burgundy, 'Broker', 'black');

rectangle(canvasSchemaRegistry07, 10, ycanvasSchemaRegistry07Center - 50, 150, 100, blue, 'Prod', 'black');
rectangle(canvasSchemaRegistry07, canvasSchemaRegistry07.width - 160, ycanvasSchemaRegistry07Center - 50, 150, 100, yellow, 'Cons', 'black');

arrow (canvasSchemaRegistry07, 120, ycanvasSchemaRegistry07Center - 60, xcanvasSchemaRegistry07Center - 160, ycanvasSchemaRegistry07Center - 140, transientWhite);
arrow (canvasSchemaRegistry07, xcanvasSchemaRegistry07Center - 120, ycanvasSchemaRegistry07Center - 100, 170, ycanvasSchemaRegistry07Center - 20, transientWhite);
arrow (canvasSchemaRegistry07, 170, ycanvasSchemaRegistry07Center + 20, xcanvasSchemaRegistry07Center - 120, ycanvasSchemaRegistry07Center + 100, transientWhite);

arrow (canvasSchemaRegistry07, xcanvasSchemaRegistry07Center + 120, ycanvasSchemaRegistry07Center + 100, canvasSchemaRegistry07.width - 170, ycanvasSchemaRegistry07Center + 20, transientWhite);
arrow (canvasSchemaRegistry07, canvasSchemaRegistry07.width - 170, ycanvasSchemaRegistry07Center - 20, xcanvasSchemaRegistry07Center + 120, ycanvasSchemaRegistry07Center - 100, green);
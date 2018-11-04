var canvasSchemaRegistry08 = document.getElementById('canvasSchemaRegistry08');
var ycanvasSchemaRegistry08Center = (canvasSchemaRegistry08.height/2);
var xcanvasSchemaRegistry08Center = (canvasSchemaRegistry08.width/2);

rectangle(canvasSchemaRegistry08, xcanvasSchemaRegistry08Center - 150, ycanvasSchemaRegistry08Center - 190, 300, 80, burgundy, 'Schema-Registry', 'black');
rectangle(canvasSchemaRegistry08, xcanvasSchemaRegistry08Center - 85, ycanvasSchemaRegistry08Center - 100, 170, 60, burgundy, null, null);
rectangle(canvasSchemaRegistry08, xcanvasSchemaRegistry08Center - 75, ycanvasSchemaRegistry08Center - 90, 70, 40, green,"Id", 'black');
rectangle(canvasSchemaRegistry08, xcanvasSchemaRegistry08Center + 5, ycanvasSchemaRegistry08Center - 90, 70, 40, purple, "Schema", 'black');

rectangle(canvasSchemaRegistry08, xcanvasSchemaRegistry08Center - 150, ycanvasSchemaRegistry08Center + 110, 300, 80, burgundy, 'Broker', 'black');

rectangle(canvasSchemaRegistry08, 10, ycanvasSchemaRegistry08Center - 50, 150, 100, blue, 'Prod', 'black');
rectangle(canvasSchemaRegistry08, canvasSchemaRegistry08.width - 160, ycanvasSchemaRegistry08Center - 50, 150, 100, yellow, 'Cons', 'black');

arrow (canvasSchemaRegistry08, 120, ycanvasSchemaRegistry08Center - 60, xcanvasSchemaRegistry08Center - 160, ycanvasSchemaRegistry08Center - 140, transientWhite);
arrow (canvasSchemaRegistry08, xcanvasSchemaRegistry08Center - 120, ycanvasSchemaRegistry08Center - 100, 170, ycanvasSchemaRegistry08Center - 20, transientWhite);
arrow (canvasSchemaRegistry08, 170, ycanvasSchemaRegistry08Center + 20, xcanvasSchemaRegistry08Center - 120, ycanvasSchemaRegistry08Center + 100, transientWhite);

arrow (canvasSchemaRegistry08, xcanvasSchemaRegistry08Center + 120, ycanvasSchemaRegistry08Center + 100, canvasSchemaRegistry08.width - 170, ycanvasSchemaRegistry08Center + 20, transientWhite);
arrow (canvasSchemaRegistry08, canvasSchemaRegistry08.width - 170, ycanvasSchemaRegistry08Center - 20, xcanvasSchemaRegistry08Center + 120, ycanvasSchemaRegistry08Center - 100, transientWhite);
arrow (canvasSchemaRegistry08, xcanvasSchemaRegistry08Center + 160, ycanvasSchemaRegistry08Center - 140, canvasSchemaRegistry08.width -120, ycanvasSchemaRegistry08Center - 60, purple);
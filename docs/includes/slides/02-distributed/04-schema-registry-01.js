var canvasSchemaRegistry01 = document.getElementById('canvasSchemaRegistry01');
var ycanvasSchemaRegistry01Center = (canvasSchemaRegistry01.height/2);
var xcanvasSchemaRegistry01Center = (canvasSchemaRegistry01.width/2);

rectangle(canvasSchemaRegistry01, xcanvasSchemaRegistry01Center + 170, ycanvasSchemaRegistry01Center - 100, 20, 40, burgundy, null, null);
rectangle(canvasSchemaRegistry01, xcanvasSchemaRegistry01Center + 150, ycanvasSchemaRegistry01Center - 120, 20, 60, burgundy, null, null);
rectangle(canvasSchemaRegistry01, xcanvasSchemaRegistry01Center - 150, ycanvasSchemaRegistry01Center - 140, 300, 80, burgundy, 'Zookeeper', 'black');
rectangle(canvasSchemaRegistry01, xcanvasSchemaRegistry01Center + 170, ycanvasSchemaRegistry01Center, 20, 40, burgundy, null, null);
rectangle(canvasSchemaRegistry01, xcanvasSchemaRegistry01Center + 150, ycanvasSchemaRegistry01Center - 20, 20, 60, burgundy, null, null);
rectangle(canvasSchemaRegistry01, xcanvasSchemaRegistry01Center - 150, ycanvasSchemaRegistry01Center - 40, 300, 80, burgundy, 'Broker', 'black');
rectangle(canvasSchemaRegistry01, xcanvasSchemaRegistry01Center - 150, ycanvasSchemaRegistry01Center + 60, 300, 80, burgundy, 'Schema-Registry', 'black');
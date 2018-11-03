const canvasPubSub = document.getElementById('canvasPubSub');
var yCanvasPubSubCenter = (canvasPubSub.height/2);
rectangle(canvasPubSub, 10, yCanvasPubSubCenter - 90, 930, 180, red, null, null);
rectangle(canvasPubSub, 50, yCanvasPubSubCenter - 50, 100, 100, blue, 'Pub', 'black');
rectangle(canvasPubSub, 350, yCanvasPubSubCenter - 50, 250, 100, burgundy, 'Runtime Env', 'black');
rectangle(canvasPubSub, 800, yCanvasPubSubCenter - 50, 100, 100, yellow, 'Sub', 'black');
arrow (canvasPubSub, 170, yCanvasPubSubCenter, 330, yCanvasPubSubCenter, blue)
arrow (canvasPubSub, 780, yCanvasPubSubCenter, 620, yCanvasPubSubCenter, yellow)





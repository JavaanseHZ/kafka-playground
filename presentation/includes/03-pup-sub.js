const canvas = document.getElementById('canvasPubSub');
const rcC = rough.canvas(canvas);
rcC.rectangle(200, 200, 200, 200, {
    stroke: '#6699CC',
    strokeWidth: '5',
    fill: 'rgba(255,255,255,0.8)',
    fillStyle: 'solid',
    roughness:'2'
});

var context = canvas.getContext("2d");

context.fillStyle = "black";
context.font = "normal 80px Quickhand";
context.textAlign = 'center';
context.textBaseline = 'middle';
context.fillText("Bla", (canvas.width / 2), (canvas.height / 2));
						

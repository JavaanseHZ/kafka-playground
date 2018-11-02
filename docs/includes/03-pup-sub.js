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
//not working
var f = new FontFace("quickhands-woff", "url(../res/fonts/Quikhand.woff)", {});
f.load().then(function (font) {
    document.fonts.add(font);
    context.font = '80px quickhands-woff'
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText("Bla", (canvas.width / 2), (canvas.height / 2));
});

						

// Functions START
const blue = '#6699CC';
const yellow = '#FFF275';
const orange = '#FF8C42' 
const red = '#FF3C38' 
const burgundy = '#A23E48'

function rectangle (canvas, x, y, w, h, color, text, textcolor){
    const rcC = rough.canvas(canvas);
    rcC.rectangle(x, y, w, h, {
        stroke: color,
        strokeWidth: '5',
        fill: 'rgba(255,255,255,0.8)',
        fillStyle: 'solid',
        roughness:'2'
    });

    var context = canvas.getContext("2d");
    context.fillStyle = textcolor;
    var f = new FontFace("Rudiment", "url(includes/fonts/Rudiment.woff)", {});
    //document.fonts.ready.then(function () {
    f.load().then(function (font) {
        document.fonts.add(font);
        context.font =  h/2 + 'px Rudiment'
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(text, (x + (w/2) ), (y + (h/2)));
    });
}
// Functions END

const canvas = document.getElementById('canvasPubSub');
rectangle(canvas, 50, (canvas.height/2) - 50, 100, 100, blue, 'Pub', 'black');
rectangle(canvas, 250, (canvas.height/2) - 50, 250, 100, burgundy, 'Runtime Env', 'black');
rectangle(canvas, 600, (canvas.height/2) - 50, 100, 100, yellow, 'Sub', 'black');




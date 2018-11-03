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

function ellipse (canvas, x, y, w, h, color, text, textcolor){
    const rcC = rough.canvas(canvas);
    rcC.ellipse(x + (w/2), y + (h/2), w, h, {
        stroke: color,
        strokeWidth: '5',
        fill: 'rgba(255,255,255,0.8)',
        fillStyle: 'solid',
        roughness:'1'
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

function arrow (canvas, startx, starty, endx, endy, color){
    var deltaY = endy - starty;
    var deltaX = endx - startx;
    var angle = Math.atan(deltaY / deltaX) * 180 / Math.PI;
    var rad = (angle * Math.PI) / 180
    const rcC = rough.canvas(canvas);
    rcC.polygon([[startx, starty], [endx, endy]], {
        stroke: color,
        strokeWidth: '4',
        roughness:'2'
    });
    if(startx <= endx) {
        var start = Math.PI + rad + 0.5;
        var end = Math.PI + rad - 0.5;
    } else {
        var start =  rad + 0.5;
        var end = rad - 0.5;
    }

    rcC.arc(endx, endy, 70, 70, start, end, true, {
        stroke: color,
        strokeWidth: '4',
        roughness:'1'
    });
}
// Functions END

const canvas = document.getElementById('canvasPubSub');
var yCenter = (canvas.height/2);
rectangle(canvas, 50, yCenter - 50, 100, 100, blue, 'Pub', 'black');
rectangle(canvas, 250, yCenter - 50, 250, 100, burgundy, 'Runtime Env', 'black');
rectangle(canvas, 600, yCenter - 50, 100, 100, yellow, 'Sub', 'black');
arrow (canvas, 160, yCenter, 240, yCenter, 'rgba(255,255,255,0.8)')





const svg = document.getElementById('svgPubSub');
const rc = rough.svg(svg);
let node = rc.rectangle(200, 200, 200, 200, {
    stroke: '#6699CC',
    strokeWidth: '5',
    fill: 'rgba(255,255,255,0.8)',
    fillStyle: 'solid',
    roughness:'2'
});
svg.appendChild(node);

addText(300, 300, 50)

function addText(x, y, size) {
    var txt = document.createElementNS("http://www.w3.org/2000/svg", "text");
    txt.setAttributeNS(null, 'x', x);
    txt.setAttributeNS(null, 'y', y);
    txt.setAttributeNS(null,'font-size',size);
    //not working
    txt.setAttribute(null, 'style', "@font-face { font-family: Quikhand; url('../res/fonts/Quikhand.woff');};")
    txt.innerHTML = "bla";
    svg.appendChild(txt);
}

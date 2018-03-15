const
    c = document.getElementById('c')
    ctx = c.getContext('2d')
    wi = c.width
    he = c.height

let
    rot = ((Math.random() > 0.50) ? true : false)
    trans = false
    sW = r(10) + 10 //20
    sH = 300   //300
    xOffset = r(25) //25
    yOffset = -5 //-5
    lastH = 0
    letters = [
        'A', 'I', 'D', 'S',
        'A', 'I', 'D', 'S',
        'A', 'I', 'D', 'S',
        'O', 'G', 'B'
    ]
    cheat = [
       'adi', 'as', 'das', 'ad', 'didas'
    ]

var
    stripes = r(9)
    nameLength = r(10)
    name = ''

function stripe(x, y, w, h) {
    ctx.fillStyle = 'black'
    ctx.rotate(-35 * Math.PI / 180)
    ctx.fillRect(x, y, w, h)
    ctx.rotate(35 * Math.PI / 180)
}
function whiteRect(x, y, w, h) {
    ctx.fillStyle = 'white'
    ctx.fillRect(x, y, w, h)
}
function write(a, x, y) {
    ctx.fillStyle = 'black'
    ctx.font = 'bold 30px Century Gothic'
    ctx.fillText(a, x, y)
}
function r(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
}
function download() {
    var dt = c.toDataURL('image/jpeg')
    this.href = dt
}
downloadLnk.addEventListener('click', download, false);

ctx.fillStyle = 'white'
ctx.fillRect(0, 0, 1000, 1000)

ctx.translate(0.5 * (wi - stripes), 50)
if(rot){
    ctx.scale(-1, 1)
}
for (var i = 0; i < stripes; i++) {
    stripe(0 - i * xOffset, 0 - i * yOffset, sW, sH)
    lastH = 0 - i * yOffset + (i + 1) * 10
}
if(rot){
    ctx.scale(-1, 1)
}
whiteRect(-wi / 2, lastH, 3000, 3000)

for (var i = 0; i < nameLength; i++) {
    if(Math.random() > 0.98){
        name += cheat[r(cheat.length) - 1]
    }else{
        name += letters[r(letters.length) - 1]
    }
}
downloadLnk.download = name.toLowerCase() + '.jpg'
write(name.toLowerCase(), 0 - nameLength * 8, lastH + 30)
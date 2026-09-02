var canvas = document.getElementById('canvas')
var draw_reset = document.getElementById('draw_reset')
var draw_download = document.getElementById('draw_download')
let painting = false
let startPoint = {x:0,y:0}

const ctx = canvas.getContext("2d")

canvas.addEventListener('mousedown',function(e){
    let x = e.offsetX
    let y = e.offsetY
    startPoint = {x:x,y:y}
    painting = true
})

canvas.addEventListener('mousemove',function(e){
    let x = e.offsetX
    let y = e.offsetY
    let newPoint = {x:x,y:y}
    if(painting){
        drawLine(startPoint.x,startPoint.y,newPoint.x,newPoint.y)
        startPoint = newPoint
    }
})

canvas.addEventListener('mouseup',function(){
    painting = false
})

function drawLine(sx,sy,es,ey){
    ctx.beginPath()
    ctx.lineWidth = 3
    ctx.moveTo(sx,sy)
    ctx.lineTo(es,ey)
    ctx.stroke()
    ctx.closePath()
}

draw_reset.addEventListener('click',function(){
    ctx.fillStyle = "#F8F8EF"
    ctx.fillRect(0,0,canvas.width,canvas.height)
})

draw_download.addEventListener('click',function(){
    const url = canvas.toDataURL("image/jpg")
    const a = document.createElement("a")
    a.href = url
    a.download = "draw"
    a.target = "_blank"
    a.click()
})

var draw_book = document.getElementById("draw_book")
function set_canvas_size() {
  canvas.width = draw_book.clientWidth;
  canvas.height = draw_book.clientHeight;
}
set_canvas_size()

var draw_hand = document.getElementById("draw_hand")
var draw_background = document.getElementById("draw_background")
canvas.addEventListener('mousemove',function(e){
    draw_hand.style.transition = 'none'
    e.stopPropagation()
    let x = (e.offsetX / window.innerWidth) * 100
    let y = (e.offsetY / window.innerHeight) * 100
    draw_hand.style.left = x + 32 + "vw"
    draw_hand.style.top = y + 7 + "vh"
})

draw_background.addEventListener('mousemove',function(){
    draw_hand.style.transition = 0.5 + 's ease'
    draw_hand.style.left = 77 + "%"
    draw_hand.style.top = 30 + "%"
})

var draw_book = document.getElementById('draw_book')
var draw = document.getElementById('draw')
console.log(draw_book.style.top)
draw_book.style.top +=  draw.offsetTop
console.log(draw_book.style.top)
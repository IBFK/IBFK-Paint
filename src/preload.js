//set var for element
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//set canvas to full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//set function for resize window with canvas
window.addEventListener("resize", function(){
	canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

//set canvas to full screen
// canvas.style.position='fixed'; 
// canvas.style.top='0'; 
// canvas.style.left='0'; 

//set canvas settings
ctx.lineWidth = 3;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.strokeStyle = '#ffffff';


var mouse = {x:0, y:0};

canvas.addEventListener('mousemove',function(e){
	mouse.x = (e.pageX - this.offsetLeft)
	mouse.y = (e.pageY - this.offsetTop)
},false);

canvas.addEventListener("touchmove",function(e){
	var touches = e.changedTouches;
	mouse.x = (touches[0].pageX - this.offsetLeft);
	mouse.y = (touches[0].pageY - this.offsetTop);
},false);

canvas.addEventListener('mousedown',function(e){
	ctx.beginPath();
	ctx.moveTo(mouse.x,mouse.y);
	canvas.addEventListener('mousemove',onPaint,false);
},false);

canvas.addEventListener("touchstart",function(e){
	ctx.beginPath();
	var touches = e.changedTouches;
	mouse.x = (touches[0].pageX - this.offsetLeft);
	mouse.y = (touches[0].pageY - this.offsetTop);
	ctx.moveTo(mouse.x,mouse.y);
	canvas.addEventListener("touchmove",onPaint,false);
},false);

canvas.addEventListener('mouseup',function(){
	canvas.removeEventListener('mousemove',onPaint,false);
},false);

canvas.addEventListener("touchend",function(){
	canvas.removeEventListener("touchmove",onPaint,false);
},false);

function onPaint(){
	ctx.lineTo(mouse.x,mouse.y);
	ctx.stroke();
};
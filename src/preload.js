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
let withdPen = ctx.lineWidth = 3;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
let colorPen = ctx.strokeStyle = '#000000';
// var backgroundMain = '#ffffff';


// set mouse position
var mouse = {x:0, y:0};

// paint functions
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


// Section function
// let range = document.getElementById('range');
// let color = document.getElementById('color');

// function for clean canvas
let  btnClean = document.getElementById('btn-clean');
btnClean.addEventListener('click', function(){
	ctx.fillStyle = backgroundMain;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.strokeStyle = colorPen;
	ctx.lineWidth = withdPen;

});

// function for erase color
let btnErase = document.getElementById('btn-erase');
btnErase.addEventListener('click', function(){
	ctx.strokeStyle = ctx.fillStyle;
	ctx.lineWidth = range.value;
});


// function for change fill color
let btnColor = document.getElementById('btn-fill');
btnColor.addEventListener('click', function(){
	ctx.fillStyle = color.value;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
});

// fuction for change pen color
let btnPenColor = document.getElementById('btn-pen');
btnPenColor.addEventListener('click', function(){
	ctx.strokeStyle = colorPen;
	ctx.lineWidth = withdPen;
});

// function for change pen width
// let btnPenWidth = document.getElementById('btn-width');
// btnPenWidth.addEventListener('click', function(){
// 	ctx.lineWidth = 10;
// });


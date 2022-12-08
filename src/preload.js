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
canvas.style.position='fixed';
canvas.style.top='0';
canvas.style.left='0';


//set canvas settings
let widthPen = ctx.lineWidth = 5;
let lineJoin = ctx.lineJoin = 'round';
let lineCap = ctx.lineCap = 'round';
let colorPen = ctx.strokeStyle = 'black';
let backgroundMain  = ctx.fillStyle = '#f1f0eb';

// set mouse position
var mouse = {x:0, y:0};


// paint functions
canvas.addEventListener('mousemove',function(e){
	mouse.x = (e.pageX - this.offsetLeft)
	mouse.y = (e.pageY - this.offsetTop)
	e.defaultPrevented()
},false);

canvas.addEventListener("touchmove",function(e){
	var touches = e.changedTouches;
	mouse.x = (touches[0].pageX - this.offsetLeft);
	mouse.y = (touches[0].pageY - this.offsetTop);
	e.defaultPrevented();
},false);

canvas.addEventListener('mousedown',function(e){
	ctx.beginPath();
	ctx.moveTo(mouse.x,mouse.y);
	canvas.addEventListener('mousemove',onPaint,false);
	e.defaultPrevented();
},false);

canvas.addEventListener("touchstart",function(e){
	ctx.beginPath();
	var touches = e.changedTouches;
	mouse.x = (touches[0].pageX - this.offsetLeft);
	mouse.y = (touches[0].pageY - this.offsetTop);
	ctx.moveTo(mouse.x,mouse.y);
	canvas.addEventListener("touchmove",onPaint,false);
	e.defaultPrevented();
},false);

canvas.addEventListener('mouseup',function(){
	canvas.removeEventListener('mousemove',onPaint,false);
	e.defaultPrevented();
},false);

canvas.addEventListener("touchend",function(){
	canvas.removeEventListener("touchmove",onPaint,false);
	e.defaultPrevented();
},false);

function onPaint(e){
	ctx.lineTo(mouse.x,mouse.y);
	ctx.stroke();
	e.defaultPrevented()
};

canvas.addEventListener('mouseleave',function(){
	canvas.removeEventListener('mousemove',onPaint,false);
	e.defaultPrevented();
},false);


// Section function
// let range = document.getElementById('range');
// let color = document.getElementById('color');

// function for clean canvas
let  btnClean = document.getElementById('btn-clean');
btnClean.addEventListener('click', function(){
	ctx.fillStyle = backgroundMain;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.strokeStyle = colorPen;
	ctx.lineWidth = widthPen;
});

//function to change width pen
function changeWidth(value){
	ctx.lineWidth = value;
}
//function to change color pen
function changeColor(value){
	ctx.strokeStyle = value;
}

// function for erase color
function clearButton(){
	ctx.strokeStyle = 'white' || backgroundMain;
	ctx.lineWidth = 20 || widthPen;
	// alert('clear');
}

//pick the canvas function
canvas.addEventListener('click',() => {
	colorPicker = window.getComputedStyle(canvas).getPropertyValue('background-color');
	console.log('this is the main color ' + colorPicker);
});


//pen color function
let btnPen = document.getElementById('btn-pen');
btnPen.addEventListener('click', function(){
	ctx.strokeStyle = colorPen;
	ctx.lineWidth = widthPen;
});



// function for change fill color
// let btnColor = document.getElementById('btn-fill');
// btnColor.addEventListener('click', function(){
// 	ctx.fillStyle = color.value;
// 	ctx.fillRect(0, 0, canvas.width, canvas.height);
// });

// function for change pen color
// let btnPenColor = document.getElementById('btn-pen');
// btnPenColor.addEventListener('click', function(){
// 	ctx.strokeStyle = colorPen;
// 	ctx.lineWidth = widthPen;
// });


let canvas = document.getElementById('canvas');

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

let ctx = canvas.getContext('2d');

ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
ctx.lineCap = 'round';

let isTouchDevice = 'ontouchstart' in document.documentElement

let painting = false;
let last = [];
    

// for mobile device
if (isTouchDevice)
{
    canvas.ontouchstart = (e) => {

        let x = e.touches[0].clientX;
        let y = e.touches[0].clientY;

        last = [x, y];
    }
    canvas.ontouchmove = (e) => {
        let x = e.touches[0].clientX;
        let y = e.touches[0].clientY;
        drawLine(last[0], last[1], x, y);
        last = [x, y];
    }
}
// for desktop
else
{
    canvas.onmousedown = (e) => {
        painting = true;
        last = [e.clientX, e.clientY];
    }
    canvas.onmouseup = (e) => {
        painting = false;
    }

    canvas.onmousemove = (e) => {
        if (painting === true)
        {
            drawLine(last[0], last[1], e.clientX, e.clientY);
            last = [e.clientX, e.clientY];
        }
        
    }
}


function drawLine(x1, y1, x2, y2)
{
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

let red = document.getElementById('red_pen');
red.onclick = () => {
    ctx.strokeStyle = 'red';
}

let green = document.getElementById('green_pen');
green.onclick = () => {
    ctx.strokeStyle = 'green';
}
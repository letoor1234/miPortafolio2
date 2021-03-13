var canvas = document.getElementById('canvas');
var cw = canvas.width = window.innerWidth;
var ch = canvas.height = window.innerHeight;
var list = [];
var limit= 20;
var el_Id = null;
var x = window.matchMedia("(orientation: portrait)");
var ctx = canvas.getContext('2d');
var ySp= 0;
if(x.matches){
	ySp= 5;
} else{
	ySp=3;
}


function Snow(){
    this.r = (Math.random()*8 + 4);
    this.x = (Math.random()*cw + 1);
    this.y = -this.r*2.5;
    this.vy =(Math.random()*ySp+.1);
    this.vx= Math.round(Math.random()) ? .5 : -.5;
    this.red=0;
    this.green=0;
    this.blue=0;
}

Snow.prototype.draw = function(ctx) {
    ctx.fillStyle= this.color;
	ctx.shadowColor= '#8fabff';
	ctx.shadowBlur= 25;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.fill();
}
Snow.prototype.move = function() {

    if (this.x >= cw + this.r+10 ||
    this.x <= -(cw+this.r+10) ||
    this.y >= ch + this.r
    ) {
        this.y = -this.r*2.5;
        this.x = (Math.random()*cw + 1);
    } else {
        this.x += this.vx;
        this.y += this.vy;
    }
}
var x=0
var y=0

function mousePosition()
{
    var yScroll = window.scrollY;
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        var e = window.event;

        x = e.clientX;
        y = e.clientY-yScroll;
        
    }
    return {x, y}
}
function Animation() {
    var yScroll = window.scrollY;
    el_Id= window.requestAnimationFrame(Animation);
    if(yScroll <= ch){
        
        if (list.length < limit) {
            var snow = new Snow();
            list.push(snow);
        }
        ctx.clearRect(0, 0, cw, ch);
        var hover = mousePosition();
        for (var i = 0; i < list.length; i++) {
            var item = list[i];
            if(item.y<ch/2){
                item.a = 1;
            } else{
                item.a = 2-((100/ch*item.y)/100)*2;
            }
            if(hover.y<=item.y+item.r*2.5 && hover.y>=item.y-item.r*2.5 && hover.x<=item.x+item.r*2.5 && hover.x>=item.x-item.r*2.5){
                if(item.red<143){
                    item.red+= 143/10;
                }
                if(item.green<171){
                    item.green+= 171/10;
                }
                if(item.blue<255){
                    item.blue+= 255/10;
                }
            }else {
                if(item.red>0){
                    item.red-= 143/10;
                }
                if(item.green>0){
                    item.green-= 171/10;
                }
                if(item.blue>0){
                    item.blue-= 255/10;
                }
            }
            item.color = 'rgba('+item.red+','+item.green+','+item.blue+','+item.a+')';
            item.move();
            item.draw(ctx);
        }
    }
}
  
el_Id =window.requestAnimationFrame(Animation);




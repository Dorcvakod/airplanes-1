var ractive = new Ractive({
	el: 'ract',
	template: '#template',
	data: {
	planeX: 100,
	planeY: 0,
	skin: "img/airplane2.png"
	}
}),
	CANVAS_WIDTH = 600;
	CANVAS_HEIGHT = 500;
	PLANE_WIDTH = 50;
	PLANE_HEIGHT = 50;
	SPEED = 8,
	LEFT=37, UP=38, RIGHT=39, DOWN=40,
	dirs = {LEFT:0, UP:0, RIGHT:0, DOWN:0},
	FRAMES_PER_SECOND = 60;

/*var player = function() {
	this._x = 0;
	this._y = 0;
	this.x: {
		get: function() {
			return this._x;
		}
		set: function(num) {
			this._x = num;
		}
	}
};*

var circle = {
    radius: 2,
    get diameter() {
        return this.radius * 2;
    },
    set diameter(val) {
        this.radius = val / 2;
    }
}*/

var player = {
	get position() {
		return {
			x: ractive.get( 'planeX' ),
			y: ractive.get( 'planeY' )
		}
	},
	set position(pos) {
		ractive.set({'planeX': pos.x});
		ractive.set({'planeY': pos.y});
	},
	direction: {
		x: 0,
		y: 0
	}
}
// player.position = {x:0,y:100}

function handleInput() {
	window.addEventListener("keydown", function(event) {
	if (event.keyCode == LEFT)
	{
		dirs.LEFT = 1;
		console.log('left ' + dirs.LEFT);
	}
	if (event.keyCode == RIGHT){
		dirs.RIGHT = 1;
		console.log('right ' + dirs.RIGHT);
	}
	if (event.keyCode == UP){
		dirs.UP = 1;
		console.log('up ' + dirs.UP);
	}
	if (event.keyCode == DOWN){
		dirs.DOWN = 1;
		console.log('down ' + dirs.DOWN);
	}
	});
	window.addEventListener("keyup", function(event) {
	if (event.keyCode == LEFT)
	{
		dirs.LEFT = 0;
		console.log('left ' + dirs.LEFT);
	}
	if (event.keyCode == RIGHT){
		dirs.RIGHT = 0;
		console.log('right ' + dirs.RIGHT);
	}
	if (event.keyCode == UP){
		dirs.UP = 0;
		console.log('up ' + dirs.UP);
	}
	if (event.keyCode == DOWN){
		dirs.DOWN = 0;
		console.log('down ' + dirs.DOWN);
	}
	});
	/*
	window.addEventListener("keydown", function(event) {
	if (event.keyCode == 65)
		ractive.set({'planeX': ractive.get( 'planeX' ) - 1});
	if (event.keyCode == 68)
		ractive.set({'planeX': ractive.get( 'planeX' ) + 1});
	if (event.keyCode == 87)
		ractive.set({'planeY': ractive.get( 'planeY' ) - 1});
	if (event.keyCode == 83)
		ractive.set({'planeY': ractive.get( 'planeY' ) + 1});
	});
	}*/
 
}
handleInput();

function step() {
  requestAnimationFrame(step);
  	if(ractive.get( 'planeX' ) > 0){
		ractive.set({'planeX': ractive.get( 'planeX' ) - dirs.LEFT * SPEED});
	}
	if(ractive.get( 'planeX' ) < CANVAS_WIDTH - PLANE_WIDTH){
		ractive.set({'planeX': ractive.get( 'planeX' ) + dirs.RIGHT * SPEED});
	}
	if(ractive.get( 'planeY' ) > 0){
		ractive.set({'planeY': ractive.get( 'planeY' ) - dirs.UP * SPEED});
	}
	if(ractive.get( 'planeY' ) < CANVAS_HEIGHT - PLANE_HEIGHT){
		ractive.set({'planeY': ractive.get( 'planeY' ) + dirs.DOWN * SPEED});
	}
}
step();
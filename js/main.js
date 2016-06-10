var ractive = new Ractive({
	el: 'ract',
	template: '#template',
	data: {
	planeX: 270,
	planeY: 400,
	skin: "img/airplane2.png",
	CANVAS_WIDTH: 600,
	CANVAS_HEIGHT: 500,
	PLANE_WIDTH: 60,
	PLANE_HEIGHT: 47
	}
}),
	CANVAS_WIDTH = ractive.get( 'CANVAS_WIDTH' );
	CANVAS_HEIGHT = ractive.get( 'CANVAS_HEIGHT' );
	SPEED = 8,
	LEFT=37, UP=38, RIGHT=39, DOWN=40,
	dirs = {LEFT:0, UP:0, RIGHT:0, DOWN:0},
	FRAMES_PER_SECOND = 60,
	layout = document.getElementById('layout');

var player = {
	position: {
		get x() {
			return ractive.get( 'planeX' )
		},
		get y() {
			return ractive.get( 'planeY' )
		},
		set x(val) {
			ractive.set({'planeX': val})
		},
		set y(val) {
			ractive.set({'planeY': val})
		}
	},
	direction: {
		x: 0,
		y: 0
	},
	width: ractive.get( 'PLANE_WIDTH' ),
	height: ractive.get( 'PLANE_HEIGHT' ),
	speed: 2
}

function createEnemy(){
	var svgns = "http://www.w3.org/2000/svg";
	var el = document.createElementNS(svgns, 'image');
	el.setAttribute('x', 200);
	el.setAttribute('y', 200);
	el.setAttribute('width', 60);
	el.setAttribute('height', 47);
	el.setAttribute('href', 'img/enemy.png');

	var svg = document.getElementsByTagNameNS(svgns, 'svg')[0];
	svg.appendChild(el);
}

function handleInput() {
	window.addEventListener("keydown", function(event) {
	if (event.keyCode == LEFT)
	{
		player.direction.x = -1;
		dirs.LEFT = 1;
		ractive.set({'skin': "img/airplane2left.png"});
		console.log('left ' + dirs.LEFT);
	}
	if (event.keyCode == RIGHT){
		player.direction.x = 1;
		dirs.RIGHT = 1;
		ractive.set({'skin': "img/airplane2right.png"});
		console.log('right ' + dirs.RIGHT);
	}
	if (event.keyCode == UP){
		player.direction.y = -1;
		dirs.UP = 1;
		console.log('up ' + dirs.UP);
	}
	if (event.keyCode == DOWN){
		player.direction.y = 1;
		dirs.DOWN = 1;
		console.log('down ' + dirs.DOWN);
	}
	});
	window.addEventListener("keyup", function(event) {
	if (event.keyCode == LEFT && player.direction.x == -1)
	{
		player.direction.x = 0;
		dirs.LEFT = 0;
		ractive.set({'skin': "img/airplane2.png"});
		console.log('left ' + dirs.LEFT);
	}
	if (event.keyCode == RIGHT && player.direction.x == 1){
		player.direction.x = 0;
		dirs.RIGHT = 0;
		ractive.set({'skin': "img/airplane2.png"});
		console.log('right ' + dirs.RIGHT);
	}
	if (event.keyCode == UP && player.direction.y == -1){
		player.direction.y = 0;
		dirs.UP = 0;
		console.log('up ' + dirs.UP);
	}
	if (event.keyCode == DOWN && player.direction.y == 1){
		player.direction.y = 0;
		dirs.DOWN = 0;
		console.log('down ' + dirs.DOWN);
	}
	});
}
handleInput();

function step() {
	requestAnimationFrame(step);
		if(player.direction.x != 0 && player.direction.y != 0) {
			player.position.x += (player.direction.x * player.speed)*(3/5);
			player.position.y += (player.direction.y * player.speed)*(3/5);
		}
		else{
			player.position.x += player.direction.x * player.speed;
			player.position.y += player.direction.y * player.speed;
		}
		if(player.position.x < 0) player.position.x = 0;
		if(player.position.y < 0) player.position.y = 0;
		if(player.position.x > CANVAS_WIDTH - player.width ) player.position.x = CANVAS_WIDTH - player.width;
		if(player.position.y > CANVAS_HEIGHT - player.height ) player.position.y = CANVAS_HEIGHT - player.height;
		console.log(player.position.x,player.position.y);
}
step();
var ractive = new Ractive({
	el: 'ract',
	template: '#template',
	data: {
	planeX: 100,
	planeY: 0
	}
});

/*ractive.set({
	color: 'red',
	font: 'Comic Sans MS'
})*/

function handleInput() {
	window.addEventListener("keydown", function(event) {
	if (event.keyCode == 65)
		ractive.set({'planeX': ractive.get( 'planeX' ) - 2});
	if (event.keyCode == 68)
		ractive.set({'planeX': ractive.get( 'planeX' ) + 2});
	if (event.keyCode == 87)
		ractive.set({'planeY': ractive.get( 'planeY' ) - 2});
	if (event.keyCode == 83)
		ractive.set({'planeY': ractive.get( 'planeY' ) + 2});
	});
	/*
	if(input.isDown('DOWN') || input.isDown('s')) {
		alert(1);
	}
 
	if(input.isDown('UP') || input.isDown('w')) {
	}
 
	if(input.isDown('LEFT') || input.isDown('a')) {
	}
 
	if(input.isDown('RIGHT') || input.isDown('d')) {
	}*/
 
}
handleInput();
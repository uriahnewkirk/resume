var slider_content = document.getElementById("sContainer");
// contain img in an array
var image = ['img/mower2.jpg', 'img/mowercodet1.png', 'img/atfour1.png', 'img/atfourdemo1.png', 'img/mower1.png'];
var caption = ["Vision System Prototype", "Object Detection Algorithm in action", "Connect Four game title screen", "Connect Four game board with 4 players", "Autonomous Lawnmower Prototype <br> (minus the vision system)"]
var i = image.length;

// function for next slide 
function nextImg(){
	if (i<image.length) {
		i= i+1;
	}else{
		i = 1;
	}
	document.getElementById("tSlide").src=image[i-1];
	document.getElementById("slideC").innerHTML = caption[i-1];
}

// function for prew slide	
function prevImg(){

	if (i<image.length+1 && i>1) {
		i= i-1;
	}else{
		i = image.length;
	}
	document.getElementById("tSlide").src=image[i-1];
	document.getElementById("slideC").innerHTML = caption[i-1];
}
  // script for auto image slider

  setInterval(nextImage , 4000);

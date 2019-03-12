//3d div
a = document.getElementById("telo");
b = document.getElementById("3d");
c = document.getElementById("oxygen");
d = document.getElementById("orbital");

function nextImage(el){
	if (el.src.match("Images/telo.jpg")){
		
		el.src = "Images/3d.jpg";
		
	} else if (el.src.match("Images/3d.jpg")){
		
		el.src = "Images/telo.jpg";
			
	} else {
		}
}
//Telescope div
function nextImage2(el){
	if (el.src.match("Images/3d.jpg")){
		
		el.src = "Images/telo.jpg";
		
	} else if (el.src.match("Images/telo.jpg")){
		
		el.src = "Images/orbital.jpeg";
		
	} else if (el.src.match("Images/orbital.jpeg")){
		
		el.src = "Images/oxygen.jpg";
		
	} else if (el.src.match("Images/oxygen.jpeg")){
		
		el.src = "Images/orbital.jpeg";
		
	} else if (el.src.match("Images/orbital.jpeg")){
		
		el.src = "Images/3d.jpg";
		
	} else if (el.src.match("Images/3d.jpg")){
		
		el.src = "Images/oxygen.jpg";
		
	} else if (el.src.match("Images/oxygen.jpg")){
		
		el.src = "Images/3d.jpg";
	
	} else {
		}
}

//Orbital div
function nextImage3(el){
	if (el.src.match("Images/oxygen.jpg")){
		
		el.src = "Images/telo.jpg";
		
	} else if (el.src.match("Images/telo.jpg")){
		
		el.src = "Images/orbital.jpeg";
		
	} else if (el.src.match("Images/orbital.jpeg")){
		
		el.src = "Images/3d.jpg";
		
	} else if (el.src.match("Images/3d.jpg")){
		
		el.src = "Images/oxygen.jpg";
	
	} else {
		}
}

//Oxygen div
function nextImage4(el){
	if (el.src.match("Images/orbital.jpeg")){
		
		el.src = "Images/oxygen.jpg";
		
	} else if (el.src.match("Images/oxygen.jpg")){
		
		el.src = "Images/orbital.jpeg";
			
	} else {
		}
}

function link(){
	document.location.href = "https://martirjimmy.github.io/Phase9/"
}

function checkConfiguration(el){
			if(a.src.match("Images/3d.jpg") && b.src.match("Images/telo.jpg") && c.src.match("Images/orbital.jpeg") && d.src.match("Images/oxygen.jpg")){
			playsound3();
			a.classList.add("opaque");
			b.classList.add("opaque");
			c.classList.add("opaque");
			d.classList.add("opaque");
			setTimeout(link, 10000); 
		} else {
			//Do nothing
		}
}

function playsound1(e){
	document.getElementById("jug").play();
	document.getElementById("speed").pause();
	document.getElementById("launch").pause();
}

function playsound2(e){
	document.getElementById("speed").play();
	document.getElementById("jug").pause();
	document.getElementById("launch").pause();
}

function playsound3(e){
	document.getElementById("launch").play();
	document.getElementById("jug").pause();
	document.getElementById("speed").pause();
}
//responsive top navigation depending on view port
function respTopNav(){
	var x = document.getElementById("topNavID");
	if (x.className === "topNav"){
	x.className += " responsive";
	} else {
		x.className = "topNav";
	}
}

//show band member by clicking
var btnOpMbr = document.getElementsByClassName("btnOpenMember");

for (var i = 0; i < btnOpMbr.length; i++) {
	btnOpMbr[i].addEventListener("click", function() {
		var mdlMbr = this.nextElementSibling;
		if (mdlMbr.style.display === "block") {
			mdlMbr.style.display = "none";
		} else {
			mdlMbr.style.display = "block";
		}
	});
}
//close band member with X
var clsMbr = document.getElementsByClassName("closeMember");
for (var i = 0; i < clsMbr.length; i++) {	
	clsMbr[i].addEventListener("click", function() {
		var mdlMbr = this.parentElement;
		mdlMbr.style.display = "none";	
	});
}
//band picture auto slideshow
var bandPic = 0;
carousel();

function carousel() {
	var i;
	var x = document.getElementsByClassName("theBand");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}
	bandPic++;
	if (bandPic > x.length) {bandPic = 1}    
	x[bandPic-1].style.display = "block";  
	setTimeout(carousel, 5000); // Change image every 5 seconds
}

// show and hide thumbs 
function showHideThumbs(m) {
    var moreLess = document.getElementById("hiddenThumbs"+m);
    if (moreLess.style.display === "block") {
      moreLess.style.display = "none";
    } else {
      moreLess.style.display = "block";
    }
}
//open and close lightbox
function openGallery(openCloseGal) {
    document.getElementById("pictureGallery"+openCloseGal).style.display = "block";
}

function closeGallery(openCloseGal) {
    document.getElementById("pictureGallery"+openCloseGal).style.display = "none";
}

var slideIndex

function flipSlide(n) { //1 or -1
    showSlides(slideIndex += n); 
}
//1-65
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("eachSlide");	

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }		
	if (n === 0) 
		{slideIndex = 34}
	else if (n === 35) 
		{slideIndex = 1}
	else if (n === 36)
		{slideIndex = 65}
	else if (n === 66)
		{slideIndex = 37}	
	else if (n === 67)
		{slideIndex = 90}	
	else if (n > 90)
		{slideIndex = 68}
    slides[slideIndex-1].style.display = "block";
}
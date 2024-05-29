//responsive top navigation depending on view port
function respTopNav(){
	const icon = document.querySelector(".navBarIcon i");
	icon.classList.toggle("fa-bars");
	icon.classList.toggle("fa-times");
	const x = document.getElementById("topNavID");
	if (x.className === "topNav"){
	x.className += " responsive";
	} else {
		x.className = "topNav";
	}
}

//show band member by clicking
const btnOpMbr = document.getElementsByClassName("btnOpenMember");

for (var i = 0; i < btnOpMbr.length; i++) {
	btnOpMbr[i].addEventListener("click", function() {
		const mdlMbr = this.nextElementSibling;
		if (mdlMbr.style.display === "block") {
			mdlMbr.style.display = "none";
		} else {
			mdlMbr.style.display = "block";
		}
	});
}

//close band member with X
const clsMbr = document.getElementsByClassName("closeMember");
for (let i = 0; i < clsMbr.length; i++) {
	clsMbr[i].addEventListener("click", function() {
		const mdlMbr = this.parentElement;
		mdlMbr.style.display = "none";	
	});
}

//close modal box of each band member by clicking anywhere
function clsMdl(event) {
	event.currentTarget.style.display = "none";
}

// show and hide thumbs 
function showHideThumbs(m) {
    const moreLess = document.getElementById("hiddenThumbs"+m);
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

let slideIndex

function flipSlide(n) { //1 or -1
    showSlides(slideIndex += n); 
}

//1-90
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("eachSlide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }		
	if (n === 0) 
		{slideIndex = 15}
	else if (n === 16) 
		{slideIndex = 1}
	else if (n === 17)
		{slideIndex = 32}
	else if (n === 33)
		{slideIndex = 18}	
	else if (n === 34)
		{slideIndex = 49}	
	else if (n > 49)
		{slideIndex = 35}
    slides[slideIndex-1].style.display = "block";
}

//stops audio if other one is started
let prevAudio;
document.addEventListener('play', function(curAudio){
    if(prevAudio && prevAudio !== curAudio.target){
        prevAudio.pause();
    }
    prevAudio = curAudio.target;
}, true);
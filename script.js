// menu nav clicks
document.querySelector(".nav-links").style.display = "none";
function closeNav(){
    document.querySelector(".nav-links").style.display = "none";
};
function openNav(){
    document.querySelector(".nav-links").style.display = "flex";
};


// DARK & LIGHT MODE TOGGLE
const input = document.querySelector(".input");
const body = document.querySelector("body");
let on = document.querySelectorAll("#on");
const comment = document.querySelectorAll(".comment")

input.checked = JSON.parse (localStorage.getItem("mode"));

updateBody();

function updateBody() {
    if(input.checked){
        body.style.background ="black";
        on.forEach(myFunction);
        function myFunction(value) {
            value.style.color = "white";
        };
        comment.forEach(change);
        function change(value) {
            value.style.background = "rgba(0, 0, 0, 0.425)"
        }
    }
    else {
        body.style.background ="white";
        on.forEach(myFunction);
        function myFunction(value) {
            value.style.color = "black";
        };
        comment.forEach(change);
        function change(value) {
            value.style.background = "rgba(256, 256, 256)"
        }
    }
};

input.addEventListener("input", ()=>{
    updateBody();
    updateLocalStorage()
});

function updateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(input.checked))
};


// image slider
const slider = document.querySelector('.slideshow-container');
const slides = slider.querySelectorAll('.card');

const slideCount = slides.length;
let activeSlide = 0;
slides[activeSlide].classList.add('active');

setInterval(() => {
	slides[activeSlide].classList.remove('active');
	activeSlide++;
	if (activeSlide === slideCount) {
		activeSlide = 0;
	}
	slides[activeSlide].classList.add('active');
}, 4000);

// scroll button
const scrollUp =document.querySelector(".scroll-up");

scrollUp.addEventListener("click", topScroll);
window.onscroll = function(){
    scrollBtnShow();
};
function scrollBtnShow(){
    if (
        document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    ){
        scrollUp.style.display = "block";
    } else{
        scrollUp.style.display = "none";
    }
};
function topScroll(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

console.log("kossa")

//Getting the "container" that the images sits in - and making a list of the images. 
const track = document.querySelector(".img-container");
console.log(track)
const slides = Array.from(track.children);


//Getting the buttons  
const nextButton = document.querySelectorAll(".buttonRight");
const previousButton = document.querySelectorAll(".buttonLeft"); 
console.log(nextButton)
// getting the dots under the pictures. 
const dotsNav = document.querySelector (".image-nav");
const dots =Array.from(dotsNav.children);

// The size of the pictures is important, depending on screen size. 
const slideWidth=slides[0].getBoundingClientRect().width;


//arrange the slides newt to one another. 
// this way you can keep on adding pictures ore take away.
const setSlidePosition =(slide, index) => {
    slide.style.left =slideWidth * index + "px";
}
slides.forEach(setSlidePosition);

//You can do it this way if you never gonna change the amount of pictures. 
// slides[0].style.left= slideWidth * 0 + "px";
// slides[1].style.left= slideWidth * 1 + "px";
// slides[2].style.left= slideWidth * 2 + "px";


//when i click left, move slides to the left
// const moveToSlide = (track, currentSlide, targetStyle) => {
    // track.style.transform ="translateX(-" + targetStyle.style.left +")";
    // currentSlide.classList.remove("current-slide");
    // nextSlide.classList.add("current-slide");
// }

//when i click right, move slides to the right
nextButton.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide");
    console.log("kossa")
    // const nextSlide= currentSlide.nextElementSibling;
//    moveToSlide();
})



//when i click the nav indicators, move to that slide. 


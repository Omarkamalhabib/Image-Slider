var allImages = Array.from(document.querySelectorAll(".item img"));
var lightBox = document.getElementById("lightBox");
var lightBoxImage = document.getElementById("lightBoxImage");
var currentIndex
var closeBtn = document.querySelector("#close");
var nextBtn = document.querySelector("#next")
var prevBtn = document.querySelector("#prev")


for (var i = 0; i < allImages.length; i++) {
    allImages[i].addEventListener("click", function(e){
        lightBox.classList.replace("d-none","d-flex");
        currentIndex = allImages.indexOf(e.target);
        var clickedImageSrc = e.target.getAttribute("src");
        lightBoxImage.style.backgroundImage = `url(${clickedImageSrc})`;
    })
};
closeBtn.addEventListener("click",closeSlider);
nextBtn.addEventListener("click",nextSlider);
prevBtn.addEventListener("click",prevSlider);
function closeSlider() {
    lightBox.classList.replace("d-flex","d-none")
}
function nextSlider() {
    currentIndex++;
    if (currentIndex==allImages.length) {
        currentIndex = 0
    }
    var nextSlider = allImages[currentIndex].src
    lightBoxImage.style.backgroundImage = `url(${nextSlider})`;
}
function prevSlider() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = allImages.length-1
    }
    var prevSlider = allImages[currentIndex].src
    lightBoxImage.style.backgroundImage = `url(${prevSlider})`;

}
document.addEventListener("keyup",function (e){
    if (e.key == "ArrowRight") {
        nextSlider()
    }else if(e.key == "ArrowLeft"){
        prevSlider() 
    }else if(e.key == "Escape"){
        closeSlider() 
    }
});

const leftBtn = document.getElementById("arrow-left");
const rightBtn = document.getElementById("arrow-right");
const sliderGalery = document.querySelector(".product__galery");
const slides = sliderGalery.querySelectorAll("img");
const slidesCount = sliderGalery.querySelectorAll("img").length;

let activeSlideIndex = 0;

function changeSlide (direction) {
	if (direction === "left") {
		activeSlideIndex--;
		if (activeSlideIndex < 0) {
			activeSlideIndex = slidesCount - 1;
		}
		clearSlide();
	}
	if (direction === "right") {
		activeSlideIndex++;
		if (activeSlideIndex === slidesCount) {
			activeSlideIndex = 0;
		}
		clearSlide();
	}
}
function clickSlide (index) {
	activeSlideIndex = index;
	clearSlide();
}
function eventHandlers () {
	if (slidesCount === 1) {
		leftBtn.style.display = 'none';
		rightBtn.style.display = 'none';
		slides.item(0).classList.add('full');
	}
	if (slidesCount > 1) {
		leftBtn.addEventListener('click', () => changeSlide("left"));
		rightBtn.addEventListener('click', () => changeSlide('right'));
		slides.forEach((slide, index) => {
			slide.addEventListener('click', () => clickSlide(index));
		});
	}
}
function clearSlide () {
	sliderGalery.querySelector(".big").classList.remove("big");
	slides[activeSlideIndex].classList.add('big');
}

eventHandlers();




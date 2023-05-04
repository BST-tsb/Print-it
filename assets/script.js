const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const banner = document.querySelector('.banner-p');
const img = document.querySelector('.banner-img');
const dots = document.querySelector('.dots');


let indexActiv = 0;

const displayDots = () => {
	dots.innerHTML = '';
	for(let i = 0 ; i < slides.length; i++) {
		if(indexActiv === i ) {
			dots.innerHTML += '<div class="dot dot_selected"></div>';
		}
		else {
			dots.innerHTML += '<div class="dot"></div>';
		}
	}

}
displayDots();


arrowLeft.addEventListener('click', function onClick() {

	console.log('clique gauche');
	console.log(indexActiv);
	
	if(indexActiv <= 0) {
		indexActiv = slides.length - 1;
	}
	else {
		indexActiv--;
	}
	img.src = `./assets/images/slideshow/${slides[indexActiv].image}`;
	banner.innerHTML = `${slides[indexActiv].tagLine}`;
	displayDots();
	
});
arrowRight.addEventListener('click', function onClick() {
	console.log('clique droit');
	console.log(indexActiv);
	
	if(indexActiv >= slides.length - 1) {
		 indexActiv = 0;
	}
	else {
		 indexActiv++;
	}
	img.src = `./assets/images/slideshow/${slides[indexActiv].image}`;
	banner.innerHTML = `${slides[indexActiv].tagLine}`;
	displayDots();

});





// Create variables targetting the relevant DOM elements here 👇

var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var coverTagline1 = document.querySelector('.tagline-1');
var coverTagline2 = document.querySelector('.tagline-2');
var newRandomCover = document.querySelector('.random-cover-button')
=======

// We've provided a few variables below

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

// Add your event listeners here 👇

// Add your event listeners here 👇
window.addEventListener('load', randomBookCover);
// Create your event handlers and other functions here 👇


// We've provided one function to get you started

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};


function randomBookCover() {
  var bookCover = new Cover ()
    var coverIndex = getRandomIndex(covers)
    coverImage.src = covers[coverIndex];
    coverTitle.innerText = titles[getRandomIndex(titles)],
    coverTagline1.innerText = descriptors[getRandomIndex(descriptors)],
    coverTagline2.innerText = descriptors[getRandomIndex(descriptors)],
    return bookCover;
}; 
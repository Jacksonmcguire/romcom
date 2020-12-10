// Create variables targetting the relevant DOM elements here 👇
// We've provided a few variables below

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var coverTagline1 = document.querySelector('.tagline-1');
var coverTagline2 = document.querySelector('.tagline-2');
if(.title === und)

// var pictures = .covers;
// var titles = coverFeatures.titles;
// var descriptors = coverFeatures.descriptors;
var currentCover = pictures[randomPicture];
var randomPicture = getRandomIndex(pictures);
var randomTitle = getRandomIndex(titles);
var randomDescriptor = getRandomIndex(descriptors);
console.log(picture);

// Add your event listeners here 👇

// var coverImage = doument.querySelector(".cover-image");
// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function randomBookCover() {
  var bookCover = new Cover (
    covers[getRandomIndex(covers)],
    titles[getRandomIndex(titles)],
    descriptors[getRandomIndex(descriptors)],
    descriptors[getRandomIndex(descriptors)],
  )
  return bookCover;
}

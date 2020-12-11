// Create variables targetting the relevant DOM elements here 👇

var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var coverTagline1 = document.querySelector('.tagline-1');
var coverTagline2 = document.querySelector('.tagline-2');
var newRandomCover = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeNewButton = document.querySelector('.make-new-button');
var formView = document.querySelector('.form-view');
var homeView = document.querySelector('.home-view');
var viewSavedView = document.querySelector('.saved-view');
var homeButton = document.querySelector('.home-button');
// We've provided a few variables below

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

// Add your event listeners here 👇

// Add your event listeners here 👇
window.addEventListener('load', randomBookCover);
newRandomCover.addEventListener('click', randomBookCover);
makeNewButton.addEventListener('click', displayForm);
viewSavedButton.addEventListener('click', showSavedCoverPage);
homeButton.addEventListener('click', showHomePage);
// Create your event handlers and other functions here 👇


// We've provided one function to get you started

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function randomBookCover() {
  var bookCover = new Cover ()
    var coverIndex = getRandomIndex(covers);
    coverImage.src = covers[coverIndex];
    coverTitle.innerText = titles[getRandomIndex(titles)];
    coverTagline1.innerText = descriptors[getRandomIndex(descriptors)];
    coverTagline2.innerText = descriptors[getRandomIndex(descriptors)];
    formView.classList.add("hidden");
};
function displayForm() {
  homeView.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  formView.classList.remove("hidden");
  homeButton.classList.remove("hidden");
  viewSavedView.classList.add("hidden");
  newRandomCover.classList.add("hidden");
}

function showSavedCoverPage() {
viewSavedView.classList.remove("hidden");
homeView.classList.add("hidden");
makeNewButton.classList.remove("hidden");
saveCoverButton.classList.add("hidden");
formView.classList.add("hidden");
homeButton.classList.remove("hidden");
newRandomCover.classList.add("hidden");
}

function showHomePage() {
  homeView.classList.remove("hidden");
  homeButton.classList.add("hidden");
  newRandomCover.classList.remove("hidden");
  saveCoverButton.classList.remove("hidden");
  viewSavedView.classList.add("hidden");
  formView.classList.add("hidden");
}

// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var coverTagline1 = document.querySelector('.tagline-1');
var coverTagline2 = document.querySelector('.tagline-2');
var newRandomCover = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeNewButton = document.querySelector('.make-new-button');
var submitNewButton = document.querySelector('.create-new-book-button');
var homeButton = document.querySelector('.home-button');
var formView = document.querySelector('.form-view');
var homeView = document.querySelector('.home-view');
var viewSavedView = document.querySelector('.saved-view');
var allSavedCovers = document.querySelector('.saved-covers-section');
var userCover = document.getElementById('cover');
var userTitle = document.getElementById('title');
var userDesc1 = document.getElementById('descriptor1');
var userDesc2 = document.getElementById('descriptor2');
var allSavedCovers = document.querySelector('.saved-covers-section');
// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;
// Add your event listeners here 👇
window.addEventListener('load', randomBookCover);
newRandomCover.addEventListener('click', randomBookCover);
makeNewButton.addEventListener('click', displayForm);
viewSavedButton.addEventListener('click', showSavedCoverPage);
homeButton.addEventListener('click', showHomePage);
submitNewButton.addEventListener('click', submitForm);
saveCoverButton.addEventListener('click', userSavedCovers);
window.addEventListener('dblclick', removeSavedCover)
// Create your event handlers and other functions here 👇

// We've provided one function to get you started

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function randomBookCover() {
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
  displayCover(currentCover);
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
  formatSavedCovers();
}

function showHomePage() {
  homeView.classList.remove("hidden");
  homeButton.classList.add("hidden");
  newRandomCover.classList.remove("hidden");
  saveCoverButton.classList.remove("hidden");
  viewSavedView.classList.add("hidden");
  formView.classList.add("hidden");
}
function displayCover(userInstance) {
  coverImage.src = userInstance.cover;
  coverTitle.innerText = userInstance.title;
  coverTagline1.innerText = userInstance.tagline1;
  coverTagline2.innerText = userInstance.tagline2;
  showHomePage();
}

function submitForm(event) {
  covers.push(userCover.value);
  titles.push(userTitle.value);
  descriptors.push(userDesc1.value);
  descriptors.push(userDesc2.value);
  var newUserCover = new Cover(userCover.value, userTitle.value, userDesc1.value, userDesc2.value);
  if (savedCovers.indexOf(newUserCover) === -1) {
    savedCovers.push(newUserCover);
  }
  displayCover(newUserCover);
  event.preventDefault();
}

function userSavedCovers() {
  savedCovers.includes(currentCover) || savedCovers.push(currentCover);
}

function formatSavedCovers() {
  allSavedCovers.innerHTML = '';
  for(var i = 0; i < savedCovers.length; i++) {
    allSavedCovers.innerHTML += `<article class="mini-cover">
    <img class="cover-image" src="${savedCovers[i].cover}">
    <h2 class="cover-title">${savedCovers[i].title}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
    <img class="price-tag" src="./assets/price.png">
    <img class="overlay" src="./assets/overlay.png">
    </article>`
  }
}

function removeSavedCover(event) {
  if (event.target.closest("article")){
    var miniCover = document.querySelector(".mini-cover")
    var deleteCoverID = event.target.closest("article").id;
    savedCovers.splice(savedCovers[miniCover],1);
  }
  formatSavedCovers();
}

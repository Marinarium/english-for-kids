export function changeDeckOfCards() {
    const allCards = document.querySelectorAll('.cards');
    const allCardsOfWords = document.querySelectorAll('.card');
    const topics = document.querySelector('.topics');
    const animals = document.querySelector('.cards_animals');
    const birds = document.querySelector('.cards_birds');
    const fishes = document.querySelector('.cards_fishes');
    const plants = document.querySelector('.cards_plants');
    const colors = document.querySelector('.cards_colors');
    const food = document.querySelector('.cards_food');
    const people = document.querySelector('.cards_people');
    const places = document.querySelector('.cards_places');
    const menuLinks = document.querySelectorAll('.main-menu__link');
    const buttonStart = document.querySelector('.button-start');
    const boxOfStars = document.querySelector('.stars');

    addHashDependencies();

    window.addEventListener('hashchange', catchHash);

    function catchHash() {
        addHashDependencies();
    }

    function addVissualyHidden(arrayOfElements) {
        arrayOfElements.forEach(function (item) {
            item.classList.add('visually-hidden');
        });
    }

    function showActiveMenuLink() {
        menuLinks.forEach(function (item) {
            if(item.getAttribute('href') === window.location.hash) {
                item.classList.add('active');
            } else if (item.classList.contains('active')){
                item.classList.remove('active');
            }
        });
    }

    function removeHiddenCards(){
        allCardsOfWords.forEach(function (card) {
            card.classList.remove('card_success');
        });
    }

    function addUsualListOfDependencies() {
        addVissualyHidden(allCards);
        topics.classList.add('visually-hidden');
        showActiveMenuLink();
        buttonStart.removeAttribute("style");
        buttonStart.innerText = "Start game";
        buttonStart.classList.remove('button-start__repeat');
        removeHiddenCards();
        boxOfStars.innerHTML = '';
    }

    function addHashDependencies(){
        if (location.hash === ""){
            addVissualyHidden(allCards);
            topics.classList.remove('visually-hidden');
            menuLinks.forEach(function (item) {
                if(window.location.hash === "" && item.getAttribute('href')==="#") {
                    item.classList.add('active');
                } else if (item.classList.contains('active')){
                    item.classList.remove('active');
                }
            });
            buttonStart.style.display = "none";
            buttonStart.classList.remove('button-start__repeat');
            removeHiddenCards();
            boxOfStars.innerHTML = '';
        }
        if (location.hash === "#animals") {
            addUsualListOfDependencies();
            animals.classList.remove('visually-hidden');
        }
        if (location.hash === "#birds") {
            addUsualListOfDependencies();
            birds.classList.remove('visually-hidden');
        }
        if (location.hash === "#fishes") {
            addUsualListOfDependencies();
            fishes.classList.remove('visually-hidden');
        }
        if (location.hash === "#plants") {
            addUsualListOfDependencies();
            plants.classList.remove('visually-hidden');
        }
        if (location.hash === "#colors") {
            addUsualListOfDependencies();
            colors.classList.remove('visually-hidden');;
        }
        if (location.hash === "#food") {
            addUsualListOfDependencies();
            food.classList.remove('visually-hidden');
        }
        if (location.hash === "#people") {
            addUsualListOfDependencies();
            people.classList.remove('visually-hidden');
        }
        if (location.hash === "#places") {
            addUsualListOfDependencies();
            places.classList.remove('visually-hidden');
        }
    }

}


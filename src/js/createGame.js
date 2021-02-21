export function createGame() {
    const mainBlock = document.querySelector('.main');
    const allCardsBoxes = document.querySelectorAll('.cards');
    const allCards = document.querySelectorAll('.card');
    const buttonStart = document.querySelector('.button-start');
    const checkBox = document.querySelector('.switch__checkbox');
    const boxOfStars = document.querySelector('.stars');
    const resultBox = document.querySelector('.result');
    const resultTitle = document.querySelector('.result__title');
    const resultFrame = document.querySelector('.result__frame');
    let cardsForGame = [];
    let wordsForGame = [];
    let shuffledWords =[];
    let pathToSounds = [];
    let resultOfGame = [];
    let wrongAnswers = [];

    buttonStart.addEventListener('click', playAudio);

    checkBox.addEventListener('click', createRandomAudioList);
    window.addEventListener('hashchange', createRandomAudioList);

    function createRandomAudioList (){
        if (checkBox.checked && !buttonStart.classList.contains('button-start__repeat')) {
            allCardsBoxes.forEach(function (box) {
                if (!box.classList.contains('visually-hidden')) {
                    cardsForGame = [];
                    wordsForGame = [];
                    shuffledWords =[];
                    pathToSounds = [];
                    resultOfGame = [];
                    wrongAnswers = [];
                    cardsForGame = box.children;
                    cardsForGame.forEach(function (card) {
                        wordsForGame.push(card.getAttribute('data-word'));
                    });
                    shuffledWords = shuffleWords(wordsForGame);
                    shuffledWords.forEach(function (sound, i) {
                        pathToSounds.push(`audio/${shuffledWords[i]}.mp3`);
                    });
                }
            });
        } else {
            cardsForGame = [];
            wordsForGame = [];
            shuffledWords =[];
            pathToSounds = [];
            resultOfGame = [];
            wrongAnswers = [];
        }
    }

    function playAudio(status){
        if(status === 'change') {
            pathToSounds.pop();
            setTimeout(createPlayingOfAudio, 1500);
            if(pathToSounds.length == 0) {
                setTimeout(addResult, 2000);
            }

        } else {
            createPlayingOfAudio();
        }

        function createPlayingOfAudio() {
            let pathToSound = pathToSounds[pathToSounds.length-1];
            let audio = new Audio(pathToSound);
            audio.play();
        }
    }

    mainBlock.addEventListener('click', function (event) {
        let playSound = function (card) {
            if(card.contains(event.target) && checkBox.checked && !card.classList.contains('card_success')) {
                let nameOfSound = card.getAttribute('data-word');
                let nameOfAudio = shuffledWords[pathToSounds.length-1];
                if (nameOfSound === nameOfAudio && buttonStart.classList.contains('button-start__repeat')) {
                    let pathToShortSuccessSound = `audio/pew.mp3`;
                    let audioSound = new Audio(pathToShortSuccessSound);
                    audioSound.play();
                    card.classList.add('card_success');
                    playAudio('change');
                    createStar('correct');
                } else if(!card.classList.contains('card_success') && buttonStart.classList.contains('button-start__repeat')){
                    let pathToShortSuccessSound = `audio/mistake.mp3`;
                    let audioSound = new Audio(pathToShortSuccessSound);
                    audioSound.play();
                    createStar('mistake');
                }
            }
        };

        for (let i = 0; i < allCards.length; i++) {
            playSound(allCards[i]);
        }
    });

    function shuffleWords(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    function createStar(answer) {
        if (answer === 'correct') {
            let star = document.createElement('img');
            star.src = 'img/star.png';
            boxOfStars.appendChild(star);
            resultOfGame.push('correct');
        }
        if (answer === 'mistake') {
            let star = document.createElement('img');
            star.src = 'img/mistake.png';
            boxOfStars.appendChild(star);
            resultOfGame.push('mistake');

        }
    }

    function addResult() {
        wrongAnswers = resultOfGame.filter(function(answer) {
            if (answer === "mistake") {
                return answer;
            }
        });
        if (wrongAnswers.length == 0){
            boxOfStars.innerHTML = '';
            let pathToShortSuccessSound = `audio/success.mp3`;
            let audioSound = new Audio(pathToShortSuccessSound);
            audioSound.play();
            showResultMessage('success');
            setTimeout(gotToMainPage, 8000);
        } else {
            let pathToShortSuccessSound = `audio/failure.mp3`;
            let audioSound = new Audio(pathToShortSuccessSound);
            audioSound.play();
            boxOfStars.innerHTML = '';
            showResultMessage('fail', wrongAnswers.length);
            setTimeout(gotToMainPage, 8000);
        }

        function showResultMessage(result, score) {
            resultBox.classList.remove("visually-hidden");
            resultFrame.innerHTML = '';
            if(result === 'success'){
                resultTitle.innerText = "Hurray!";
                let face = document.createElement('img');
                face.src = 'img/success.png';
                resultFrame.appendChild(face);
            } else if(result === 'fail'){
                resultTitle.innerText = `Oops! ${(score > 1) ? score + ' mistakes' : score + ' mistake'}`;
                let face = document.createElement('img');
                face.src = 'img/failure.png';
                resultFrame.appendChild(face);
            }

        }

        function gotToMainPage() {
            resultBox.classList.add("visually-hidden");
            window.location.hash = '#';
        }
    }
}




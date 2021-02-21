module.exports = {
    playAudioForWord
};

function playAudioForWord(){
    const mainBlock = document.querySelector('.main');
    const allCards = document.querySelectorAll('.card');
    const allRotateArrows = document.querySelectorAll('.card__rotate');
    const checkBox = document.querySelector('.switch__checkbox');

    mainBlock.addEventListener('click', function (event) {
        let playWord = function (card, arrow) {
            if(card.contains(event.target) && !arrow.contains(event.target) && !checkBox.checked) {
                let nameOfSound = card.getAttribute('data-word');
                let pathToSound = `audio/${nameOfSound}.mp3`;
                let audio = new Audio(pathToSound);
                audio.play();
            }
        };

        for (let i = 0; i < allCards.length; i++) {
            playWord(allCards[i], allRotateArrows[i]);
        }
    });
}

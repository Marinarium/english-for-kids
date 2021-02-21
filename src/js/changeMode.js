export function changeMode() {
    const switchControl = document.querySelector('.switch');
    const checkBox = document.querySelector('.switch__checkbox');
    const topicsStatus = document.querySelectorAll('.topics__status');
    const allCards = document.querySelectorAll('.cards');
    const buttonStart = document.querySelector('.button-start');
    const timeBeforeModeChanging = 200;

    switchControl.addEventListener("click", chooseMode);

    function chooseMode() {
        setTimeout(function(){
            if (checkBox.checked) {
                topicsStatus.forEach(function (item) {
                    item.classList.add('topics__status_play');
                });

                allCards.forEach(function (item) {
                    item.classList.add('card_play');
                });

                buttonStart.innerText = "Start game"
                buttonStart.classList.add('button-start_play');

            } else {
                topicsStatus.forEach(function (item) {
                    item.classList.remove('topics__status_play');
                });

                allCards.forEach(function (item) {
                    item.classList.remove('card_play');
                });

                buttonStart.classList.remove('button-start_play');
            }
        },timeBeforeModeChanging);
    }
}

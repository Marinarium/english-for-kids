module.exports = {
    rotateCard
};

function rotateCard() {
    const mainBlock = document.querySelector('.main');
    const allCards = document.querySelectorAll('.card');
    const allRotateArrows = document.querySelectorAll('.card__rotate');

    mainBlock.addEventListener('click', function (event) {
        let showBackOfCard = function (arrow, card) {

            if(arrow.contains(event.target)){
                card.classList.toggle('card_rotate');
            }

            if(card.classList.contains('card_rotate')){
                card.addEventListener('mouseleave', function _listener() {
                    card.classList.remove('card_rotate');
                    card.removeEventListener('mouseleave', _listener);
                });
            }

        };

        for (let i = 0; i < allRotateArrows.length; i++) {
            showBackOfCard(allRotateArrows[i], allCards[i]);
        }
    });
}



module.exports = {
    changeSwitch
};

function changeSwitch() {
    const switchControl = document.querySelector('.switch');
    const checkBox = document.querySelector('.switch__checkbox');
    const switchStatus = document.querySelector('.switch__status');

    switchControl.addEventListener("click", changer);

    function changer() {
        setTimeout(function(){
            if (checkBox.checked) {
                switchStatus.classList.remove('switch__status_train');
                switchStatus.classList.add('switch__status_play');
                switchStatus.innerText = 'play';
            } else {
                switchStatus.classList.add('switch__status_train');
                switchStatus.classList.remove('switch__status_play');
                switchStatus.innerText = 'train';
            }
        },200);
    }
}

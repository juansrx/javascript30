/**
 * 
 * @param {*} e 
 */
function handleTransitionEnd(e) {

    if (e.propertyName === 'transform')
        this.classList.remove('playing');
}

const drumKeys = document.querySelectorAll('.drum-keys .key');

console.log(drumKeys);

drumKeys.forEach((drumKey) => {
    drumKey.addEventListener('transitionend', handleTransitionEnd);
});

window.addEventListener('keydown', function (event) {

    const audioFile = document.querySelector(`audio[data-key="${event.key}"]`);

    if (audioFile) {
        audioFile.currentTime = 0;
        audioFile.play();

        for (let drumKey of drumKeys) {

            if (drumKey.attributes['data-key'].value === event.key) {

                drumKey.classList.add('playing');
                break;
            }
        }
    }

});

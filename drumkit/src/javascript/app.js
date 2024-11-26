window.addEventListener('keydown', function (event) {
    
    const audioFile = document.querySelector(`audio[data-key="${event.key}"]`);

    if (audioFile) {
        
        audioFile.currentTime = 0;
        audioFile.play();
    }

});

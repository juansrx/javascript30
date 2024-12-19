const galleryPanels = document.querySelectorAll('.gallery .gallery-panel');

const eventListenerMap = {
    'click' : function (event) {
        this.classList.toggle('open');
    },
    'transitionend' : function (event) {
        this.classList.toggle('active-panel');
    }
};

galleryPanels.forEach((galleryPanel) => {

    for (const key in eventListenerMap) {
        galleryPanel.addEventListener(key, eventListenerMap[key]);
    }
});

console.log(galleryPanels);
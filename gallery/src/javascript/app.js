const galleryPanels = document.querySelectorAll('.gallery .gallery-panel');

const eventListenerMap = {
    'click' : function (event) {
        this.classList.toggle('open');
    },
    'transitionend' : function (event) {
        if (event.propertyName.includes('flex'))
            this.classList.toggle('active-panel');
    },
    'mouseover' : function (event) {
        this.classList.add('over');
    },
    'mouseout' : function (event) {
        this.classList.remove('over');
    }

};

galleryPanels.forEach((galleryPanel) => {

    for (const key in eventListenerMap) {
        galleryPanel.addEventListener(key, eventListenerMap[key]);
    }
});

console.log(galleryPanels);
const fields = document.querySelectorAll('#controls-panel form .field input');

/**
 * 
 * @param {*} name 
 * @param {*} value 
 */
function setCssVariable(name, value) {
    document.documentElement.style.setProperty(name, value);
}

/**
 * 
 * @param {*} event 
 */
function onValueChange(event) {
    
    
    let sizing = '';
    if (this.dataset.hasOwnProperty('sizing'))
        sizing = this.dataset.sizing;

    setCssVariable(`--${this.name}`, this.value + sizing);
}

fields.forEach((field) => {
    field.addEventListener('change', onValueChange);
});


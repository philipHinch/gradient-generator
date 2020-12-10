let css = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.querySelector('body');
let degreesInput = document.querySelector('.degrees-input');
let degreesButton = document.querySelector('button');

css.textContent = body.style.background = `linear-gradient(90deg, rgb(0,238,255), rgb(255,0,136))`;

function setGradient() {
    body.style.background = `linear-gradient(90deg, ${ color1.value }, ${ color2.value })`;
    css.textContent = body.style.background + ';'
}

color1.addEventListener('input', function () {
    setGradient();
})

color2.addEventListener('input', function () {
    setGradient();
})

//-------------------------------------------------------

degreesInput.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        degreesChange();
    }
})

degreesButton.addEventListener('click', function () {
    degreesChange();
})

function degreesChange() {
    body.style.background = `linear-gradient(${ degreesInput.value }deg, ${ color1.value }, ${ color2.value })`;
    css.textContent = body.style.background + ';';
    degreesInput.value = '';
}



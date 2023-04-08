// script.js

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function createFlash(x, y) {
    var flash = document.createElement('div');
    var radio = 50; // La mitad del ancho o la altura del círculo
    flash.classList.add('flash');
    flash.style.top = y - radio + 'px'; // Ajustar la posición superior del círculo
    flash.style.left = x - radio + 'px'; // Ajustar la posición izquierda del círculo
    flash.style.backgroundColor = getRandomColor();
    document.body.appendChild(flash);
    setTimeout(function () {
        flash.remove();
    }, 500);
}

window.onload = function () {
    if (isMobile()) {
        document.addEventListener('touchstart', function (event) {
            var touch = event.touches[0];
            createFlash(touch.clientX, touch.clientY);
        });
    } else {
        document.addEventListener('keydown', function (event) {
            var flash = document.createElement('div');
            flash.classList.add('flash');
            flash.style.top = (Math.random() * 80 + 10) + 'vh';
            flash.style.left = (Math.random() * 80 + 10) + 'vw';
            flash.style.backgroundColor = getRandomColor();
            document.body.appendChild(flash);
            setTimeout(function () {
                flash.remove();
            }, 500);
        });
        document.addEventListener('touchstart', function (event) {
            var touch = event.touches[0];
            createFlash(touch.clientX, touch.clientY);
        });
    }
};


// Función para generar color aleatorio
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

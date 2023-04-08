// script.js

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function createFlash(top, left) {
    var flash = document.createElement('div');
    flash.classList.add('flash');
    flash.style.top = (Math.random() * 80 + 10) + 'vh';
    flash.style.left = (Math.random() * 80 + 10) + 'vw';
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
            var top = touch.clientY + 'px';
            var left = touch.clientX + 'px';
            createFlash(top, left);
        });
    } else {

        document.addEventListener('keydown', function (event) {
            var flash = document.createElement('div');
            flash.classList.add('flash');
            flash.style.top = (Math.random() * 80 + 10) + 'vh';
            flash.style.left = (Math.random() * 80 + 10) + 'vw';
            flash.style.backgroundColor = getRandomColor(); // Cambiar color aleatorio
            document.body.appendChild(flash);
            setTimeout(function () {
                flash.remove();
            }, 500);
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

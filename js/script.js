// script.js

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function createFlash(x, y) {
    var flash = document.createElement('div');
    flash.classList.add('flash');
    flash.style.top = y + 'px';
    flash.style.left = x + 'px';
    
    // Agregar animaciones y efectos visuales
    var colors = ['#FFC700', '#E24D4D', '#5BBEFF', '#FF5B5B', '#FF9F1C', '#2EC4B6', '#F26DF9'];
    var colorIndex = Math.floor(Math.random() * colors.length);
    flash.style.backgroundColor = colors[colorIndex];
    flash.style.borderRadius = '50%';
    flash.style.width = '100px';
    flash.style.height = '100px';
    flash.style.opacity = '0.8';
    flash.style.position = 'fixed';
    flash.style.zIndex = '99999';
    flash.style.animation = 'majesticFlash 0.8s ease-out forwards';

    document.body.appendChild(flash);
    setTimeout(function () {
        flash.remove();
    }, 800);
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

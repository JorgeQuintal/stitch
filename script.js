// Temporizador
const eventDate = new Date("October 8, 2029 16:00:00").getTime();
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = "¡La fiesta ha comenzado!";
    }
}, 1000);

// Confeti
// Lilo & Stitch flotando


// Confeti
/* ===== Confetti ===== */
const confettiContainer = document.querySelector('.confetti');

function createConfettiPiece() {
    const piece = document.createElement('div');
    piece.classList.add('confetti-piece');
    piece.style.left = Math.random() * 100 + '%';
    piece.style.width = piece.style.height = Math.random() * 10 + 5 + 'px';
    piece.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 60%)`;
    piece.style.animationDuration = 3 + Math.random() * 3 + 's';
    piece.style.animationDelay = Math.random() * 3 + 's';
    confettiContainer.appendChild(piece);

    // Eliminar después de caer
    setTimeout(() => {
        piece.remove();
    }, 6000);
}

// Genera continuamente confetti
setInterval(createConfettiPiece, 200);

/* ===== Burbujas flotando ===== */
const bubblesContainer = document.querySelector('.bubbles');

function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = Math.random() * 100 + '%';
    bubble.style.width = bubble.style.height = Math.random() * 20 + 10 + 'px';
    bubble.style.backgroundColor = 'rgba(76, 186, 223, 0.78)';
    bubble.style.animationDuration = 4 + Math.random() * 3 + 's';
    bubblesContainer.appendChild(bubble);

    // Eliminar después de flotar
    setTimeout(() => {
        bubble.remove();
    }, 7000);
}

// Genera continuamente burbujas
setInterval(createBubble, 300);


//Musica

const music = document.getElementById('music');
const musicButton = document.getElementById('music-button');

// Al tocar cualquier parte de la página
document.body.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        musicButton.classList.remove('paused'); // animación activa
    } else {
        music.pause();
        musicButton.classList.add('paused'); // animación detenida
    }
});
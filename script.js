document.querySelector('.card').addEventListener('click', function() {
    document.querySelector('.letter').style.display = 'block';
    document.getElementById('background-music').play();
});

document.querySelector('.letter').addEventListener('click', function() {
    document.querySelector('.letter').style.display = 'none';
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 5 + 5}s`; // duration between 5 and 10 seconds
    document.querySelector('.background').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000); // matches the longest animation duration
}

setInterval(createHeart, 500);

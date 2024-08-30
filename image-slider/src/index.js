import './style.css';

function createFrame() {
    const frame = document.createElement('div');
    frame.className = 'frame';
    
    const prevBtn = document.createElement('button');
    prevBtn.className = 'prev';
    prevBtn.innerHTML = '<b><</b>';
    frame.appendChild(prevBtn);

    const content = document.createElement('div');
    content.className = 'content';
    frame.appendChild(content);

    const nextBtn = document.createElement('button');
    nextBtn.className = 'next';
    nextBtn.innerHTML = '<b>></b>';
    frame.appendChild(nextBtn);

    return frame;
}

function navigationCircles() {
    const navCircles = document.createElement('div');
    navCircles.className = 'navCircles';
    for (let i = 0; i < 6; i++) {
        const circle = document.createElement('div');
        circle.className = 'circle';
        navCircles.appendChild(circle);
    }
    return navCircles;
}

function setActiveCircle(img) {
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => circle.classList.remove('active'));
    circles[img - 1].classList.add('active');
}

document.body.appendChild(createFrame());
document.querySelector('.content').classList.add('image_1');

// Navigation circles
document.body.appendChild(navigationCircles());
setActiveCircle(1);

// Current image number
let currentImg = document.createElement('div');
currentImg.innerText = 'IMAGE 1';
currentImg.className = 'currentImg';
document.body.appendChild(currentImg); 

// Buttons
const prevBtn = document.querySelector('.prev'); 
const nextBtn = document.querySelector('.next');

prevBtn.addEventListener('click', () => {
    const content = document.querySelector('.content');
    const currentImage = content.className.split(' ')[1];
    const currentImageNumber = parseInt(currentImage.split('_')[1]);
    const nextImageNumber = currentImageNumber - 1 < 1 ? 6 : currentImageNumber - 1;
    const nextImage = `image_${nextImageNumber}`;
    const currentImg = document.querySelector('.currentImg');
    currentImg.innerText = `IMAGE ${nextImageNumber}`;
    setActiveCircle(nextImageNumber);
    content.classList.remove(currentImage);
    content.classList.add(nextImage);
});

nextBtn.addEventListener('click', () => {
    const content = document.querySelector('.content');
    const currentImage = content.className.split(' ')[1];
    const currentImageNumber = parseInt(currentImage.split('_')[1]);
    const nextImageNumber = currentImageNumber + 1 > 6 ? 1 : currentImageNumber + 1;
    const nextImage = `image_${nextImageNumber}`;
    const currentImg = document.querySelector('.currentImg');
    currentImg.innerText = `IMAGE ${nextImageNumber}`;
    setActiveCircle(nextImageNumber);
    content.classList.remove(currentImage);
    content.classList.add(nextImage);
});

// Event listener for navigation circles to change image
const circles = document.querySelectorAll('.circle');
circles.forEach(circle => {
    circle.addEventListener('click', () => {
        // Check if the circle is already active
        if (circle.classList.contains('active')) return;
        // Get the image number from the circle
        // First we get all the circles 
        const circles = document.querySelectorAll('.circle');
        // THen we check which circle in the list is the one we clicked
        const circleIndex = Array.prototype.indexOf.call(circles, circle);
        // Then we add 1 to the index to get the image number
        const imageNumber = circleIndex + 1;
        // Then we set the image
        const content = document.querySelector('.content');
        const currentImage = content.className.split(' ')[1];
        const nextImage = `image_${imageNumber}`;
        const currentImg = document.querySelector('.currentImg');
        currentImg.innerText = `IMAGE ${imageNumber}`;
        setActiveCircle(imageNumber);
        content.classList.remove(currentImage);
        content.classList.add(nextImage);
    });
});

// Auto advance every 5s
setInterval(() => { nextBtn.click(); }, 5000);
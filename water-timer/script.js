const timeElement = document.getElementById('futureTime')
.addEventListener('change', timeChanged);

const secondsElement = document.getElementById('customSeconds')
.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        runTimer(parseInt(document.getElementById('customSeconds').value));
    }
});

function timeChanged() {
    const currentValue = timeElement.value;
    const systemTime = new Date().toLocaleTimeString();
    // Compare the values by converting them to Date objects
    if (new Date('1970-01-01 ' + currentValue) > new Date('1970-01-01 ' + systemTime)) {
        const delta = new Date('1970-01-01 ' + currentValue) - new Date('1970-01-01 ' + systemTime);
        runTimer(delta/1000);
    } else {
        alert('The time you selected is in the past!');
    }
}

function runTimer(seconds) {
    if (typeof seconds !== 'number' || seconds < 0) {
        alert('Invalid number of seconds: ' + seconds);
        return;
    }
    document.getElementById('time').style.display = 'none';
    const timerElement = document.getElementById('timer');
    timerElement.style.display = 'block';
    timerElement.innerHTML = seconds;
    const maxSeconds = seconds;
    setWater(0);
    const interval = setInterval(() => {
        seconds--;
        timerElement.innerHTML = seconds;
        const percentage = seconds / maxSeconds * 100;
        setWater(100-percentage);
        if (seconds < 0) {
            clearInterval(interval);
            alert('Time is up!');
            timerElement.style.display = 'none';
            document.getElementById('time').style.display = 'flex';
        }
    }
    , 1000);
}

// Sets the percentage of body full of blue color, starting from the bottom
function setWater(percentage) {
    const body = document.body;
    body.style.background = `linear-gradient(to bottom, #fff ${percentage}%, aqua ${percentage}%)`;
}


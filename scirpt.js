// Countdown Timer
const countdownTimer = document.getElementById("countdownTimer");
const countdownToRelease = document.getElementById("countdownToRelease");
const releaseDate = new Date("2024-12-01T00:00:00").getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const timeleft = releaseDate - now;

    // Calculate days, hours, minutes and seconds
    const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeleft % (1000)) / 1000);

    countdownTimer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    countdownToRelease.innerHTML = `${days} Days`;
};

setInterval(updateCountdown, 1000);

// Dropdown Logic
const rankDropdown = document.getElementById('rankDropdown');
const keyDropdown = document.getElementById('keyDropdown');
const gemDropdown = document.getElementById('gemDropdown');
const rankPreview = document.getElementById('rankSelected');
const keyPreview = document.getElementById('keySelected');
const gemPreview = document.getElementById('gemSelected');

// Event Listeners for Dropdowns
rankDropdown.addEventListener('change', (event) => {
    rankPreview.textContent = event.target.value;
});

keyDropdown.addEventListener('change', (event) => {
    keyPreview.textContent = event.target.value;
});

gemDropdown.addEventListener('change', (event) => {
    gemPreview.textContent = event.target.value;
});

// Theme Toggle Function
const toggleTheme = () => {
    document.body.classList.toggle("light-theme");
};

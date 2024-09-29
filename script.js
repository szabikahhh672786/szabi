let heartCount = 0;

function toggleHearts() {
    const heartsContainer = document.querySelector('.hearts-container');
    const heart = document.createElement('div');
    heart.className = 'heart-animation';
    heart.innerText = '❤️';
    heart.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    heartsContainer.appendChild(heart);
    heartCount++;

    // Remove heart after animation
    heart.addEventListener('animationend', () => {
        heart.remove();
        heartCount--;
    });
}

function toggleSettings() {
    const settingsMenu = document.getElementById('settings-menu');
    settingsMenu.classList.toggle('show');
}

function toggleTheme() {
    const themeSwitch = document.getElementById('theme-switch');
    document.body.classList.toggle('dark-theme', themeSwitch.checked);
}

function searchContent() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const text = section.textContent.toLowerCase();
        section.style.display = text.includes(searchInput) ? 'block' : 'none';
    });
}

// Show welcome message after a delay
document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.getElementById('welcome-message');
    setTimeout(() => {
        welcomeMessage.style.display = 'block';
    }, 2000); // Show after 2 seconds
});

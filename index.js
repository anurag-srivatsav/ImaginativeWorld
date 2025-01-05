// Add interactivity (e.g., scrolling, filtering)
// document.querySelectorAll('a').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

AOS.init({
    duration: 1200, // Animation duration
    once: true, // Animation occurs only once
    offset: 100 // Trigger offset
});

AOS.refresh();





// Function to speak the mode change
function speak(message) {
    const utterance = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(utterance);
}

// Function to toggle dark mode
function toggleDarkMode(event) {
    event.preventDefault();
    const element = document.body;
    element.classList.toggle("dark-mode");

    // Store the dark mode preference in localStorage
    const isDarkMode = element.classList.contains("dark-mode");
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));


// Announce the mode change
    if (isDarkMode) {
    speak("Dark mode initialized. Portals to unseen realms are opening—venture carefully into the void of imagination.");
} else {
    speak("Bright mode engaged. Beams of inspiration connect you to the infinite universe of untold tales");
}
}

// Check if dark mode preference is stored and apply it on page load
document.addEventListener("DOMContentLoaded", function() {
    const darkMode = localStorage.getItem("darkMode");
    const isDarkMode = darkMode ? JSON.parse(darkMode) : false;

    const element = document.body;
    if (isDarkMode) {
        element.classList.add("dark-mode");
    } else {
        element.classList.remove("dark-mode");
    }
});


const floatingIcon = document.getElementById('floatingIcon');
const chatWindow = document.getElementById('chatWindow');
const closeButton = document.getElementById('closeButton');
 
floatingIcon.addEventListener('click', function() {
    chatWindow.style.display = chatWindow.style.display === 'none' || chatWindow.style.display === '' ? 'flex' : 'none';
    speak("Greetings, traveler! I am SciBot, your gateway to endless mysteries. What secrets of the universe shall we uncover today?");

});
 
closeButton.addEventListener('click', function() {
    chatWindow.style.display = 'none'; // Hide chat window on close
});
 
function speak(text) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.rate = 0.9;
    speech.pitch = 1;
    speech.lang = 'en-US'; // Set language
    window.speechSynthesis.speak(speech);
}

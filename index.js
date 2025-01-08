// // Add interactivity (e.g., scrolling, filtering)
// document.querySelectorAll('a').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// AOS.init({
//     duration: 1200, // Animation duration
//     once: true, // Animation occurs only once
//     offset: 100 // Trigger offset
// });

AOS.init({
  offset: 120, // Adjust the offset for animations
  duration: 600, // Speed of animations
  once: true, // Animation runs only once
  mirror: false, // Prevents the animation from repeating
});







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

let currentAudio = null; // Global variable to keep track of the currently playing audio
let currentlyPlayingUrl = null; // Global variable to track the current audio URL

function playAudio(url) {
  // Check if the same audio is already playing
  if (currentAudio && !currentAudio.paused && currentlyPlayingUrl === url) {
    currentAudio.pause(); // Pause the audio
    currentAudio.currentTime = 0; // Reset playback position
    currentlyPlayingUrl = null; // Reset the currently playing URL
    return;
  }

  // Stop the currently playing audio if different
  if (currentAudio && !currentAudio.paused) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  // Create a new audio object and play it
  currentAudio = new Audio(url);
  currentAudio.play();
  currentlyPlayingUrl = url; // Update the currently playing URL
}

function playRam() {
  playAudio('https://res.cloudinary.com/dvlgixtg8/video/upload/v1736251379/ramchant.mp3');
}

function playLittleKrishna() {
  playAudio('https://res.cloudinary.com/dvlgixtg8/video/upload/v1736252749/LittleKrishna.mp3');
}

function playKrishnaFlute() {
  playAudio('https://res.cloudinary.com/dvlgixtg8/video/upload/v1736253011/krishna_flute.mp3');
}

function playDasavatharam() {
  playAudio('https://res.cloudinary.com/dvlgixtg8/video/upload/v1736253776/Dasavatharam.mp3');
}

function playGanesh() {
  playAudio('https://res.cloudinary.com/dvlgixtg8/video/upload/v1736254110/LordGanesh.mp3');
}

function playHanumanChalisa() {
  playAudio('https://res.cloudinary.com/dvlgixtg8/video/upload/v1736254387/hanumanchalisa.mp3');
}

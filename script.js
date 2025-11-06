const timer = document.querySelector("#timer");

function updateTimer() {
    const now = new Date(); // Current date and time
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    timer.innerText = now.toLocaleString('en-US', options); // Format the date and time
}

// Call the function immediately to display the time right away
updateTimer(); 

// Update the timer every second
setInterval(updateTimer, 1000);
document.getElementById('submitBtn').addEventListener('click', fetchJoke);

//Loads the last joke from LocalStorage when page loads
window.onload = function() {
    let savedJoke = localStorage.getItem('joke');
    if(savedJoke) {
        document.getElementById('joke').innerText = savedJoke;
    }
}

async function fetchJoke() {
    try {
        const response = await fetch("https://official-joke-api.appspot.com/jokes/random");
        const data = await response.json();

        const joke = data.setup + " " + data.punchline + " 😂";
        document.getElementById('joke').innerText = joke;

        // Stores the joke in LocalStorage
        localStorage.setItem('joke', joke);
    } catch (error) {
        document.getElementById('joke').innerText = "Oops! Couldn't fetch a joke. Try again!";
        console.error("Error fetching joke:", error);
    }
}

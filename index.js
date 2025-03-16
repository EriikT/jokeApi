document.getElementById('submitBtn').addEventListener('click', fetchJoke);

// loads the last joke from LocalStorage when the page loads
window.onload = function() {
    let savedJokeSetup = localStorage.getItem('jokeSetup');
    let savedJokePunchline = localStorage.getItem('jokePunchline');
    if (savedJokeSetup && savedJokePunchline) {
        document.getElementById('setup').innerText = savedJokeSetup;
        document.getElementById('punchline').innerText = savedJokePunchline;
    }
}

async function fetchJoke() {
    try {
        const response = await fetch("https://official-joke-api.appspot.com/jokes/random");
        const data = await response.json();

        const setup = data.setup;
        const punchline = data.punchline;

        document.getElementById('setup').innerText = setup;
        document.getElementById('punchline').innerText = punchline;

        // stores setup and punchline separately in localStorage
        localStorage.setItem('jokeSetup', setup);
        localStorage.setItem('jokePunchline', punchline);

    } catch (error) {
        document.getElementById('joke').innerText = "Oops! Couldn't fetch a joke. Try again!";
        console.error("Error fetching joke:", error);
    }
}

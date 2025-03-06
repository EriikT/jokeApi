document.getElementById('submitBtn').addEventListener('click', fetchUser);

async function fetchUser() {
    try {
        const response = await fetch("https://official-joke-api.appspot.com/jokes/random");
        const data = await response.json();

        const joke = data.setup + " " + data.punchline + " 😂";
        document.getElementById('joke').innerText = joke;

    } catch (error) {
        document.getElementById('joke').innerText = "Oops! Couldn't fetch a joke. Try again!";
        console.error("Error fetching joke:", error);
    }
}

const url = "https://api.chucknorris.io/jokes/random"
const categoryList = "https://api.chucknorris.io/jokes/categories"

// I'll be using this to store all categorical jokes
const container = document.getElementById('button-container')

// Need this to start immediately so it's not in a function. Should populate
// a list of all category jokes

fetch(categoryList) //fetches
    .then(response => response.json()) //gets data in JSON
    .then(categories => { //pushes data into categories array 
        categories.forEach(category => { //run a forEach loop that creates a button and adds a click event
            const button = document.createElement('button');
            button.textContent = category;
            button.classList.add('glow-on-hover')
            // Click event to get a joke for the pre-populated category
            button.addEventListener('click', () => {
                console.log(`Category clicked: ${category}`);
                fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
                    .then(response => response.json())
                    .then(jokeData => {
                        console.log(`Category ${category}`);
                        console.log(`Joke ${jokeData.value}`);
                        const jokeContainer = document.getElementById('joke-container')
                        jokeContainer.innerHTML = jokeData.value
                        jokeContainer.style.border = "2px solid white"
                        jokeContainer.style.boxShadow = "5px 5px"
                        jokeContainer.style.borderRadius = "20px"
                        jokeContainer.style.padding = "50px"
                        jokeContainer.style.width = "50%"
                        jokeContainer.style.margin = "auto"
                    })
            })
            container.appendChild(button);
        })
            .catch(error => { console.log(`Error: ${error}`) })
    })

function GetRandomJoke() {
    const randomJoke = ""

    fetch(url)
        .then(response => response.json())
        .then(jokeData => {
            console.log(`Random Joke: ${jokeData.value}`);
            const randomJokecontainer = document.getElementById('random-joke-container')
            randomJokecontainer.innerHTML = jokeData.value
            randomJokecontainer.style.border = "2px solid white"
            randomJokecontainer.style.boxShadow = "5px 5px"
            randomJokecontainer.style.borderRadius = "20px"
            randomJokecontainer.style.padding = "50px"
            randomJokecontainer.style.margin = "auto"
            randomJokecontainer.style.marginTop = "20px"
            randomJokecontainer.style.width = "50%"

        })
}
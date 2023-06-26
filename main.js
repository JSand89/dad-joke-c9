const jokeBtn = document.getElementById('jokeBtn')
const jokeGoesHere = document.getElementById('jokeGoesHere')

jokeBtn.addEventListener('click', generateJoke)

async function generateJoke(){
    const res = await fetch('https://icanhazdadjoke.com/',{
        headers:{
            'Accept':'application/json'
        }
    })
    const data = await res.json()
    console.log(data)
    jokeGoesHere.innerHTML = data.joke
}
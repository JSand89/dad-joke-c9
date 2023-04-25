const jokeBtn = document.getElementById('jokeBtn')
const jokeEl = document.getElementById('joke')

jokeBtn.addEventListener('click',generateJoke)

async function generateJoke(){
    const res = await fetch('https://icanhazdadjoke.com',{
        headers:{
            'Accept':'application/json'
        }
    })
    const data = await res.json()
    console.log(data)
    jokeEl.innerHTML = data.joke
        }
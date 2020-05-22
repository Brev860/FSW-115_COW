async function getData(){
    
    try {
        const stats = await axios.get("https://swapi.dev/api/people/1") 
        const planet = await axios.get(stats.data.homeworld)
        const vehicle = await axios.get(stats.data.vehicles[0])
        const films = await axios.get(stats.data.films[0])
        characterV(vehicle);
        characterHome(planet);
        characterName(stats);
        characterFilm(films);
    }
    catch(error){
        console.log(error);
    }
    
    
}


getData()

function characterHome(planet){
    const li = document.createElement('li')
    li.textContent = planet.data.name;
    document.getElementById('box').appendChild(li)
  
}

function characterV(vehicle){
    const ul = document.createElement('ul')

    document.getElementById('box').appendChild(ul)
    const li = document.createElement('li')
    li.textContent = vehicle.data.name
    document.getElementById('box').append(li);
}

function characterName(stats){
    const h1 = document.createElement('h1')
    h1.textContent = stats.data.name;
    document.getElementById('box').prepend(h1)
}dy

function characterFilm(films){
    const li = document.createElement('li')
    li.textContent = films.data.title
    document.getElementById('box').append(li);
}

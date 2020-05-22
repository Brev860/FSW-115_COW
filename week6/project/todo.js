async function grabCharacter(){
    
    try {
        const response = await axios.get("https://rickandmortyapi.com/api/character/2");
        const name = await axios.get(response.data.location.url);
        const origin = await axios.get(response.data.origin.url);
        characterData(response, name, origin);
        
    }
    catch(error){
        console.log(error);
    }
    
}


grabCharacter();

function characterData(response, name, origin){
    const h1 = document.createElement('h1');
    h1.textContent = response.data.name;  
    document.getElementById('box').appendChild(h1);
    const ul = document.createElement('ul');
    document.getElementById('box').append(ul);
    const li = document.createElement('li');
    li.innerHTML = `<strong>Location:</strong> ${name.data.name}`;
    ul.appendChild(li)
    const li2 = document.createElement('li')
    li2.innerHTML = `<strong>Dimension:</strong> ${name.data.dimension}`;
    ul.appendChild(li2);
    const img = document.createElement('img')
    img.setAttribute('src',response.data.image);
    document.getElementById('box').prepend(img)

}

const title = document.createElement('h1')
title.textContent = 'Rick and Morty API/Async'
document.getElementById('header').appendChild(title);

const api = document.createElement('p');
api.innerHTML = 'https://rickandmortyapi.com/api';
document.getElementById('foot').appendChild(api);
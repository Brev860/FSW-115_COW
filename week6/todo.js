async function grabCharacter(){
    
    try {
        const response = await axios.get("https://rickandmortyapi.com/api/character/2");
        const name = await axios.get(response.data.name);
        const origin = await axios.get(response.data.origin);
        characterData(origin);
        
    }
    catch(error){
        console.log(error);
    }
    
}


grabCharacter();

function characterData(origin){
    const h1 = document.createElement('h1');
    h1.textContent = origin.data.name;  
    document.body.appendChild(h1);
}


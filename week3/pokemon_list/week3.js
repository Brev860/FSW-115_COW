

const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon/", true)
xhr.send();

xhr.onreadystatechange = function(){
if(xhr.readyState === 4 && xhr.status === 200){
    const dataJSON = xhr.responseText;
    const dataJS = JSON.parse(dataJSON);
    showData(dataJS.objects[0].pokemon);
}

};


    function showData(pokemon){
        for(i = 0; i < pokemon.length; i++ ){
        const h1 = document.createElement('h1');
        h1.textContent = pokemon[i].name;
        document.body.appendChild(h1);
    }
}

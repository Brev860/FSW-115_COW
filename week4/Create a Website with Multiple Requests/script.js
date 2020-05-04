const ul = document.createElement("ul");
document.body.appendChild(ul);

var button = document.getElementById("button1");

button.addEventListener("click", function() {
    axios.get("https://swapi.py4e.com/api/planets")
   .then(response => {
    for(let i = 0; i < response.data.results.length; i++){
        const li = document.createElement('li');
        li.textContent = response.data.results[i].name;
        document.body.appendChild(li);
    }
})
.catch(error => console.log(error));
});

document.body.style.backgroundColor = "blue";
document.body.style.border = "white";
document.body.style.borderStyle = "solid";

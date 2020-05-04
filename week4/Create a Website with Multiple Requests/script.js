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


ul.style.border = "white";
ul.style.borderStyle = "solid";
ul.style.display = "grid";
ul.style.justifyContent = "center";
ul.style.margin = "auto";
ul.style.marginBottom = 40;
ul.style.width = 500;
li.style.marginTop = 40;

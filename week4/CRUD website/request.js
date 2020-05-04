const ul = document.createElement("ul");
 document.body.appendChild(ul);

axios.get("https://api.vschool.io/brevan1/todo")
    .then(response => {
        for(let i = 0; i < response.data.length; i++){
            const li = document.createElement('li');
            li.textContent = response.data[i].title;
            document.body.appendChild(li);
        }
    })
    .catch(error => console.log(error));
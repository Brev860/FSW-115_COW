


axios.get("https://api.vschool.io/brevan1/todo/5ea60b22f468d266b6c892ab")
    .then(response => {
            const p = document.createElement('p');
            const img = document.createElement("img");
            p.textContent = "Title: "+ response.data.title + " n\ ID: " + response.data._id +"  Description: " + response.data.description +"  Price: " + response.data.price;
            img.setAttribute("src", response.data.imgUrl);
            document.body.appendChild(p); 
            document.body.appendChild(img);
    })
    .catch(error => console.log(error));

    axios.get("https://api.vschool.io/brevan1/todo/5ea60b99f468d266b6c892ac")
    .then(response => {
            const p = document.createElement('p');
            const img = document.createElement("img");
            p.textContent = "Title: "+ response.data.title + " n\ ID: " + response.data._id +"  Description: " + response.data.description +"  Price: " + response.data.price;
            img.setAttribute("src", response.data.imgUrl);
            document.body.appendChild(p); 
            document.body.appendChild(img);
    })
    .catch(error => console.log(error));

    axios.get("https://api.vschool.io/brevan1/todo/5ea61c77f468d266b6c892ae")
    .then(response => {
            const p = document.createElement('p');
            const img = document.createElement("img");
            p.textContent = "Title: "+ response.data.title + " n\ ID: " + response.data._id +"  Description: " + response.data.description +"  Price: " + response.data.price;
            img.setAttribute("src", response.data.imgUrl);
            document.body.appendChild(p); 
            document.body.appendChild(img);
    })
    .catch(error => console.log(error));
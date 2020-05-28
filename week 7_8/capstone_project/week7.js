const form = document.formData;


        const post = document.getElementById('post');

        post.addEventListener('click', function(e){
                e.preventDefault();
               
               const dish = form.dish.value;
               const ingredients = form.ingredients.value;
               const price = form.price.value;
             
                let newPost = {
                title: dish,
                description: ingredients,
                price: price
                
             };
            axios.post(`https://api.vschool.io/brevan1/todo/`, newPost)
            .then(response  => {
              
                window.location.reload();
                  
            })       
            .catch(error => alert(error));

            
        });

        axios.get("https://api.vschool.io/brevan1/todo/")
        .then(response  => {
        for(i = 0; i < response.data.length; i++){
            const results1 = response.data[i].title;
            const results2 = response.data[i].description;
            const ID = response.data[i]._id;
            const price = response.data[i].price;
                   
            const p = document.createElement('p');
            
            p.innerHTML = `Dish: ${results1} <br> <br> Ingredients: ${results2}<br><br> Credits: ${price} <br><br> Recipe ID:${ID}`;

            document.getElementById('output').prepend(p); 

            const buttton = document.createElement('button');
            buttton.textContent = `Delete ID: ${ID}`;
            document.getElementById('output').append(buttton);
            buttton.addEventListener('click', () =>{
    
                axios.delete(`https://api.vschool.io/brevan1/todo/${ID}`)
                .then(response => {
                    alert(`${ID} has been deleted from your list of Recipes`);
                    location.reload();
                });
         
        });
           
    }
})
         .catch(error => alert(error));

         const put = document.getElementById('put');

         put.addEventListener('click', function(e){
            e.preventDefault();
           const dish = form.dish.value;
           const ingredients = form.ingredients.value;
           const price = form.price.value;
           const ID = form.id.value;
            let newPut = {
            title: dish,
            description: ingredients,
            price: price
            
         };
        axios.put(`https://api.vschool.io/brevan1/todo/${ID}`, newPut)
        .then(response  => {
            
            
            window.location.reload();
              
        })       
        .catch(error => alert(error));

        
    });
     
         async function grabCharacter1(){
    
            try {
                const response = await axios.get("https://swapi.dev/api/people/1");
                const planet = await axios.get(response.data.homeworld);
                const starships = await axios.get(response.data.starships[1]);
                const vehicles = await axios.get(response.data.vehicles[1]);
                
                character1(response, planet, starships, vehicles)
                
                
            }
            catch(error){
                console.log(error);
            }
            
        }
        grabCharacter1();

        function character1(response, planet, starships, vehicles){

             const p = document.createElement('p');
             p.setAttribute('id', 'box1');
             p.innerHTML = `<strong>Name: </strong>${response.data.name} <br> <strong>Planet: </strong>${planet.data.name}<br> <strong>Starship: </strong>${starships.data.name}<br> <strong>Vehicles: </strong>${vehicles.data.name}`;
             document.getElementById('get').appendChild(p);
             
        }

        
       async function grabCharacter2(){
    
        try {
            const response2 = await axios.get("https://swapi.dev/api/people/10");
            const planet2 = await axios.get(response2.data.homeworld);
            const starships2 = await axios.get(response2.data.starships[1]);
            const vehicles2 = await axios.get(response2.data.vehicles[0]);
            
         
            character2(response2, planet2, starships2, vehicles2)
            
            
        }
        catch(error){
            console.log(error);
        }
        
    }
    grabCharacter2();
    function character2(response2, planet2, starships2, vehicles2){

        const p = document.createElement('p');
        p.setAttribute('id', 'box2');
        p.innerHTML = `<strong>Name: </strong>${response2.data.name} <br> <strong>Planet: </strong>${planet2.data.name}<br> <strong>Starship: </strong>${starships2.data.name}<br> <strong>Vehicles: </strong>${vehicles2.data.name}`;
        document.getElementById('get').appendChild(p);
        
   }
    
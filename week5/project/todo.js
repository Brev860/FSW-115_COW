// Get Request Upon page opening//

axios.get("https://api.vschool.io/brevan1/todo/")
    .then(response => {
        for(i = 0; i < response.data.length; i++){
            const p = document.createElement('p');
            const img = document.createElement("img");
            p.textContent = "Title: "+ response.data[i].title + " n\ ID: " + response.data[i]._id +"  Description: " + response.data[i].description +"  Price: " + response.data[i].price + "Completed: " + response.data[i].completed;
            img.setAttribute("src", response.data[i].imgUrl);
            document.body.appendChild(p); 
            document.body.appendChild(img);  

        } })
    .catch(error => alert(error));
     
    document.getElementsByTagName('p').className = "container";
   
    
// Post Request//
    

        const postButton = document.getElementById('post_button');

        postButton.addEventListener('click', function(){
           
                let newPost = {
                title: document.getElementById('enter_title').value,
                description: document.getElementById('enter_descr').value,
                imgUrl: document.getElementById('enter_img').value,
                price: document.getElementById('enter_p').value,
             };
            axios.post(`https://api.vschool.io/brevan1/todo/`, newPost)
            .then(response => {
                alert('You have successfully posted a new todo. \n It will show in the list below.');
                location.reload();
            })       
            .catch(error => alert(error));

            
        });
        

        

// PUT requst section//
        const forms = document.formInPut;

        const putButton = document.getElementById('put_button');

        putButton.addEventListener('click', function(){
                let _ID = document.getElementById('put_id').value;

                let newPut = {
                title: document.getElementById('put_title').value,
                description: document.getElementById('put_descr').value,
                imgUrl: document.getElementById('put_img').value,
                price: document.getElementById('put_p').value,
                completed: document.getElementById('complete').value

             };
            
            axios.put(`https://api.vschool.io/brevan1/todo/${_ID}`, newPut)
            .then(response => {
                alert(`Your updates to ${_ID} has been added to your list of Todos`);
                location.reload();
            
            })
            .catch(error => alert(error));
        
        });
        const dlt = document.getElementById('delete_button');

        dlt.addEventListener('click', () =>{
            let _ID = document.getElementById('put_id').value;

            axios.delete(`https://api.vschool.io/brevan1/todo/${_ID}`)
            .then(response => {
                alert(`${_ID} has been deleted from your list of Todos`);
                location.reload();
            })
            .catch(error => alert(error));
        
        });
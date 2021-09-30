let userForm = document.querySelector('.form');
let users = document.getElementById('users');

userForm.onsubmit = async function(e){
    e.preventDefault();
    let form_data = new FormData(e.target);
    response = await fetch("http://localhost:5000/create/user", { method :'POST', body : form_data})
    data = await response.json()
    users.innerHTML=""
    getUsers();
    e.target.reset();
}


function getUsers(){
    fetch('http://localhost:5000/users')
        .then(res =>  res.json())
        .then(data => {
            for( let i = 0; i < data.length; i++){
                let row = document.createElement('tr');

                let name = document.createElement('td');
                name.innerHTML = data[i].user_name;
                row.appendChild(name);
                
                let email = document.createElement('td');
                email.innerHTML = data[i].email;
                row.appendChild(email);
                users.appendChild(row);
            }
        })

}


getUsers();


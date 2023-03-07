// load the data from this server
function loadUsers2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers2(data));
}

// set the data in my server
function displayUsers2(data) {
    const ul = document.getElementById('users-list');
    for (const user of data) {
        console.log(user.name);
        // create new html by javascript
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}
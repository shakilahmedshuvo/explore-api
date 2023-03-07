// load data 2 function
function loadData2() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(respone => respone.json())
        .then(data => console.log(data));
}
// load data 2 function
function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data));
}

function displayUsers(data) {
    console.log(data);
}
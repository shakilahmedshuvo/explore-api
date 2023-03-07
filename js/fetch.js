fetch('https://jsonplaceholder.typicode.com/todos/1') //this is API
    .then(response => response.json()) // .json os not similar but close to JSON.parse
    .then(json => console.log(json))



// fetch(url)
// .then(response => response.json())
// .then(json => console.log(json))

function loadData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))

}
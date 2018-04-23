const form = document.querySelector('form');
comst input = document.querySelector('#searchTerm');
cost API_URL = 'https://omdb-api.now.sh/t?ype=movie&s=';

form.addEventListener('submit', formSubmitted);

function formSubmitted(event){
    console.log('form submitted');
    event.preventDefault();
    const searchTerm = input.value;
    console.log(searchTerm);
    getResult(searchTerm);
}

function getResults(searchTerm){
    const url = `${API_URL}${searchTerm}`;
    console.log(url);
}
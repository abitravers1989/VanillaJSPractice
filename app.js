const form = document.querySelector('form');
comst input = document.querySelector('#searchTerm');
cost API_URL = 'https://omdb-api.now.sh/t?ype=movie&s=';
const resultsSection = document.querySelector('#results')

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
    fetch(url)
    .then(response => response.json())
   // .then(data =>
     //   {
           // console.log(data)
     //   })
    .then(data => showResults(data.Search));
}

function showResults(results){
    resultsSection.innerHTML = '';
    const html = '';
    //console.log(results)
    results.forEach(movie =>{
       // console.log(movie)
       html +=`<h3>${movie.Title}</h3>`;
    })
    resultsSection.innerHTML = html;
}
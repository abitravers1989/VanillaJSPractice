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
    let html = '';
    //console.log(results)
    results.forEach(movie =>{
       // console.log(movie)
       html +=
       <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
       
       
      // `<h3>${movie.Title}</h3>`;
    })
    resultsSection.innerHTML = html;
}
const form = document.querySelector('form');

form.addEventListener('submit', formSubmitted);

function formSubmitted(event){
    console.log('form submitted');
    event.preventDefault();
}
const formElem = document.querySelector('.workers_form');
let workers = [];

formElem.addEventListener('submit', (e) =>{
e.preventDefault();
const {firstname, lastname, age} = event.target;
workers.push({
firstname: firstname.value,
lastname: lastname.value,
age: age.value
})
firstname.value = '';
lastname.value = '';
age.value = '';
})
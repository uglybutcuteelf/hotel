//let button = document.querySelector('.button');
let logo = document.querySelector('.logo');
let card = document.querySelector('.card');



/*
button.addEventListener('click', function () {
	if(button.textContent === 'Забронировать') {
    button.textContent = 'Подробнее';
  }
  else {
    button.textContent = 'Забронировать';
  }
});
*/

function changeText(id)
{
	let button = document.getElementsByClassName("button")[id];
	if(button.value === 'Забронировать') {
    button.value = 'Подробнее';
  }
  else {
    button.value = 'Забронировать';
  }
}

button.addEventListener('click', function () {
	if(button.textContent === 'Забронировать') {
    button.textContent = 'Подробнее';
  }
  else {
    button.textContent = 'Забронировать';
  }
});



const div1 = document.querySelector('.first-page');
const div2 = document.querySelector('.second-page');


const replaceButton = document.getElementById('Signup-button');

replaceButton.addEventListener('click', function() {
  if (div1.style.display == 'flex') {
    div1.style.display = 'none';
    div2.style.display = 'flex'; 
  } else {
    div1.style.display = 'flex'; 
    div2.style.display = 'none';
  }
});

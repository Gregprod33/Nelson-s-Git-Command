const photo = document.querySelector('#photo');
const btn = document.querySelector('#button');
const input = document.querySelector('#input');
let command = '';

input.addEventListener("input", (event) => {
    command = event.target.value;
})

btn.addEventListener('click', () => { 
        if (command === 'git stash') {
            photo.innerHTML = '<img id="img" class="photo" src="src/img/grosse-moustache.jpg" alt="moustache">'
            
        }  else {
            alert("wrong command ! try again")
        }
        
})
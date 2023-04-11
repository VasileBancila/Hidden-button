function winner() {
    alert('Castigator');
}
  
function loser() {
    alert('Pierzator');
}

let random = Math.floor(Math.random() * 3) + 1;

for(var index = 1; index <= 3; ++index) {
    let button = document.querySelector(`button.btn${index}`);
    if(random == index) {
        button.addEventListener('click', winner);
    } else {
        button.addEventListener('click', loser);
    }
}
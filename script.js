document.getElementById("generateButtons").onclick = function genBtn() {
    let numBtn = parseInt(document.getElementById("numButtons").value); //we convert the input from string to int 
    let boxButtons = document.getElementById("boxBtn");
    let winningButton = Math.floor(Math.random() * numBtn) + 1; //we choose the random winning button
    
    if (numBtn < 1) {
        alert("Enter a number greater than zero!"); //we check if the input is greater than zero
        return;
    }

    boxButtons.innerHTML = ""; //empty the box before creating new buttons

    /*We create the buttons, add a "Castigator" event and the green color to the winning button and
    add a "Pierzator" event and the red color to the losing buttons, then we add them to the button box.*/   

    for (let index = 1; index <= numBtn; ++index) {
        let newBtn = document.createElement("button");
        newBtn.type = "button";
        newBtn.id = `button.btn${index}`;
        newBtn.textContent = `Button${index}`;
        if(winningButton == index) {
            newBtn.addEventListener('click', function winner() {
                alert('Castigator');
                newBtn.setAttribute('style', 'background-color: green');
            });
        } else {
            newBtn.addEventListener('click', function loser() {
                alert('Pierzator');
                newBtn.setAttribute('style', 'background-color: red');
            });
        }
        boxButtons.appendChild(newBtn);
    }
}
function buttonSelection(status) { //We return the winner or loser depending on the button called.
    if (status === "winner") {
        alert('Castigator');
    } else {
        alert('Pierzator');
    }
}

function genBtn() {
    let numBtn = parseInt(document.getElementById("numButtons").value); //we convert the input from string to int 
    let boxButtons = document.getElementById("boxBtn");
    let winningButton = Math.floor(Math.random() * numBtn) + 1; //we choose the random winning button

    if (numBtn < 1) {
        alert("Enter a number greater than zero!"); //we check if the input is greater than zero
        return;
    }

    boxButtons.innerHTML = ""; //empty the box before creating new buttons

    /*We create the buttons and add them to the button box.*/

    for (let index = 1; index <= numBtn; ++index) {
        let newBtn = document.createElement("button");
        newBtn.textContent = `Button${index}`;

        if (winningButton === index) {
            newBtn.addEventListener("click", function() {
                buttonSelection("winner");
            });                      
        } else {
            newBtn.addEventListener("click", function() {
                buttonSelection("loser");
            });
        }
        
        boxButtons.appendChild(newBtn);
    }
}
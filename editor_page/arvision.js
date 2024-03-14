let button = document.getElementById("return_to_editor_button")
let headerToEdit = document.getElementById("headerToEdit")

function onButtonClicked() {
    window.location.href = "editor.html"
}

function onPageLoad() {
    // Generate a random number from 1 to 100
    let randomNumber = Math.floor(Math.random() * 100) + 1
    // if randomNumber is <= 75 then headerToEdit (ID)'s inner value is set to "Stiamo processando la tua richiesta", otherwise it will say "Per favore, connetti il set a realtà aumentata..."
    if (randomNumber <= 85) {
        headerToEdit.innerHTML = "Stiamo processando la tua richiesta"
    } else {
        headerToEdit.innerHTML = "Per favore, connetti il set a realtà aumentata..."
    }
    console.log(randomNumber)

    let randomSecondNumber = (Math.random() * 100) + 1;
    //let randomSecondNumber = 2.520
    let tolerance = 0.2; // Define a tolerance level
    if (Math.abs(randomSecondNumber - 2.500) < tolerance) {
        button.value = "Error 387: Programmatore pigro";
    }
    console.log("EGG " + randomSecondNumber);
}

button.addEventListener("click", onButtonClicked)

// connect the onPageLoad function to the loaded page event
window.addEventListener("load", onPageLoad)
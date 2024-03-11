let button = document.getElementById("return_to_editor_button")

function onButtonClicked() {
    window.location.href = "editor.html"
}

button.addEventListener("click", onButtonClicked)
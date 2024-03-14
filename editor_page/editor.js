function showSelectionBox(id) {
    var selectionBox = document.getElementById(id + "SelectionBox");
    if (selectionBox.style.display === "none") {
        selectionBox.style.display = "block";
    } else {
        selectionBox.style.display = "none";
    }
}
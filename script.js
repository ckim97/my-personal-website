document.addEventListener("DOMContentLoaded", function() {
    addingMouseOverandOut();
    addingEventListener("nba", "NY Knicks");
    addingEventListener("player", "Rajon Rondo");
    addingEventListener("series", "Eragon by Christopher Paolini");
    addingEventListener("nfl", "NY Jets");
});

function addingMouseOverandOut() {
    const words = document.getElementsByClassName("text");
    function changeColor() {
        this.style.color = "yellow"
    }
    function changeColorBack() {
        this.style.color = ""
    }
    for (let i = 0; i < words.length; i++) {
        words[i].addEventListener("mouseover", changeColor);
        words[i].addEventListener("mouseout", changeColorBack);
}
}

function addingEventListener(identification, message) {
    const input = document.getElementById(identification);
    function clickAlert() {
    alert(message);
}
    input.addEventListener("click", clickAlert);
}



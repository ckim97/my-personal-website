function addingEventListener(identification, message) {
    const input = document.getElementById(identification);
    function clickAlert() {
    alert(message);
}
    input.addEventListener('click', clickAlert);
}

addingEventListener("nba", "NY Knicks");
addingEventListener("player", "Rajon Rondo");
addingEventListener("series", "Eragon by Christopher Paolini");
addingEventListener("nfl", "NY Jets");

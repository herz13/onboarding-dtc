const xhttp = new XMLHttpRequest();
const url = 'http://localhost:3000';

var button = document.getElementById('searchbutton');

button.addEventListener('click', function() {
    var search = document.getElementById('searchbar').value;
    xhttp.open("GET", search, true);
    xhttp.send();
});
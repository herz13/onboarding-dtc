const url = 'http://localhost:3000/universities';
const xhttp = new XMLHttpRequest();

var button = document.getElementById('searchbutton');

button.addEventListener('click', function() {
    var search = document.getElementById('searchbar').value;
    xhttp.open("GET", url + '?search=' + search);
    xhttp.send();
});
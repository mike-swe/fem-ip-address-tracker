let validate = () => {
    let UserInput = document.getElementById("search");
    const btn = document.querySelector("button");

    if(UserInput.value.trim() ==="") {
        UserInput.placeholder = "Please enter a valid IP address or Domain";
        return false
    }   else {
     alert("Loading");
     true
    }
}

var map = L.map('map').setView([51.505, -0.09], 13);

var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
osm.addTo(map);
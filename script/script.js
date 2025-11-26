let map;

function initMap() {
    const centerLocation = { lat: 41.879431617597696, lng: -87.63079029776787  }; 

    map = new google.maps.Map(document.getElementById("map"), {
        center: centerLocation,
        zoom: 10,});
    
        const marker = new google.maps.Marker({
        position: centerLocation,
        map: map,
        title: "Center Marker",});

        const infoWindow = new google.maps.InfoWindow({
        content: "<h3>Chicago</h3><p>This is the center of the Chicago Map!</p>",});

    marker.addListener("click", () => {
        infoWindow.open(map, marker);});
}

document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("quesBtn");

    btn.addEventListener("click", function () {
        alert("If you have questions, contact me at: nborodkin@cps.edu");
    });
});

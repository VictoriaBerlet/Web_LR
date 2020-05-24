var map
var marker1
var marker2
var marker3

function initMap () {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 49.999257, lng: 36.248151 },
    zoom: 12,
  })
  marker1 = new google.maps.Marker({
    position: { lat: 50.014627, lng: 36.228505 },
    map: map,
    label: "П1",
    title: "Пункт выдачи 1",
  })
  marker2 = new google.maps.Marker({
    position: { lat: 50.001149, lng: 36.245805 },
    map: map,
    label: "П2",
    title: "Пункт выдачи 2",
  })
  marker3 = new google.maps.Marker({
    position: { lat: 49.981969, lng: 36.231153 },
    map: map,
    label: "П3",
    title: "Пункт выдачи 3",
  })
}

function setCentered (marker) {
  map.setCenter({ lat: marker.position.lat(), lng: marker.position.lng() })
}


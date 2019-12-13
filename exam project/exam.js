$(document).ready(function(){
var map;
var lat,long;
function getpostion(){
    navigator.geolocation.getCurrentPosition(show_map)
}
function show_map(position){
lat=position.coords.latitude;
long=position.coords.longitude
}

function initmap(){
map=new google.maps.Map(document.querySelector('#map'),{
    center:{lat:lat,lng:long}, zoom:8
});
}

//getpostion()
//initmap()


})
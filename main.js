var ipData,ipAddress,isp,country,city,lat,long,timezone,map;
function generateIpDetails(){
    var ip = document.getElementById("ipTxt").value;
    var api_key = "at_DWbeNhrqKKpRNwGFekYocieSqi2mP";
    fetch("https://geo.ipify.org/api/v2/country,city?apiKey="+api_key+"&ipAddress="+ip)
    .then(data =>{
        return data.json();
    })
    .then(data => {
        ipAddress = data.ip;
        isp = data.isp;
        city = data.location.city;
        country = data.location.country;
        lat = data.location.lat;
        long = data.location.lng;
        timezone = data.location.timezone;
        
        document.getElementById("isp").innerHTML = isp;
        document.getElementById("location").innerHTML = country+","+city;
        document.getElementById("timezone").innerHTML = timezone;
        document.getElementById("ip").innerHTML=ipAddress;
        generateMap(lat,long);
        });
    // ontimeout, onabort. onerror...
}
function generateMap(lat,long){
    if(map){
        map.remove();
        map = L.map('map').setView([lat, long], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        L.marker([lat, long]).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();
    }
    else{
        map = L.map('map').setView([lat, long], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        L.marker([lat, long]).addTo(map)
            .bindPopup("A rough estimate of the<br>IP's location")
            .openPopup();
        
    }
  
}




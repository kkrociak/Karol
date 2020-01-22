alert("hello");


//let OSMlayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

// let circle = L.circle([50.5, 30.5],
//     {radius: 100},
//     {color:	'#3388ff'}).addTo(map);

// let circleA = L.circle([52.08,23.10],
//     {radius: 100,
//     color:	'#3388ff'}).addTo(map);


// let circleG = L.circle([54.22,18.38],
//     {radius: 100,
//      color:	'red'}).addTo(map);


// let circleK = L.circle([50.53,20.37],
//     {radius: 100,
//     color:	'purple'}).addTo(map);

// let circleZ = L.circle([51.56,15.30],
//     {radius: 100,
//     color:	'green'}).addTo(map);


// let circleP = L.circle([52.33,19.42],
//     {radius: 100,
//     color:	'gray'}).addTo(map);

// L.geoJSON({"type":"FeatureCollection",
//     "features":[{
//         "type":"Feature",
//         "properties":{},
//             "geometry":{
//                 "type":"Polygon",
//                 "coordinates":[[[-700.0629472732544,50.06019702298089],[-700.0600290298461,50.06019702298089],[-700.0600290298461,50.062648990114795],[-700.0629472732544,50.062648990114795],[-700.0629472732544,50.06019702298089]]]}},
//                 {"type":"Feature",
//                 "properties":{},
//                 "geometry":{"type":"Polygon","coordinates":[[[-700.0619173049927,50.07052749674062],[-700.0547075271605,50.07052749674062],[-700.0547075271605,50.07336454406147],[-700.0619173049927,50.07336454406147],[-700.0619173049927,50.07052749674062]]]}}]});

// OSMlayer.addTo(map);







require (["esri/Map", "esri/views/MapView", "esri/WebMap"],
   function(Map, MapView, WebMap)
   {
    let map1 = new Map({basemap:"topo"});
    let map2 = new Map({basemap:"satellite"});
    let map3 = new Map({basemap:"osm"});
    let map4 = new WebMap({
        portalItem: {
            id: "36c9582cc9d140229b9cffb4cd8fe297"
         }
    });

    let mapContainer = new MapView({
        container: "mapid",  // miejsce gdzie chcemy osadzić mapę (bierzemy klasę z pliku html //
        map: map4  //czyli nasza zmienna z mapą bazową zdefiniowana wcześniej //
     });
     
    
    document.getElementById("przycisk").onclick = function() {
        console.log('klik');
        mapContainer.map = map2;
    };
    document.getElementById("przycisk2").onclick = function() {
        console.log('klik');
        mapContainer.map = map1;
    };
    document.getElementById("przycisk3").onclick = function() {
        console.log('klik');
        mapContainer.map = map3;
    };
    document.getElementById("przycisk4").onclick = function() {
        console.log('klik');
        mapContainer.map = map4;
    }; 
   })

 
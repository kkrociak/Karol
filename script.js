alert("hello");







require (["esri/Map", "esri/views/MapView", "esri/WebMap", "esri/geometry/support/webMercatorUtils", "esri/widgets/BasemapToggle",
"esri/widgets/BasemapGallery"],
   function(Map, MapView, WebMap, webMercatorUtils, BasemapToggle, BasemapGallery)
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
    document.getElementById("1").onclick = function() {
        console.log('klik');
        mapContainer.zoom = 20;
        mapContainer.center = [135.7284552650162, 35.03950038138115];
    };
    document.getElementById("2").onclick = function() {
        console.log('klik');
        mapContainer.zoom = 20;
        mapContainer.center = [135.77320171684792, 34.96715282829578];
    };
    document.getElementById("3").onclick = function() {
        console.log('klik');
        mapContainer.zoom = 20;
        mapContainer.center = [135.76283045575158, 35.122127624801585];
    };
    mapContainer.on("click", function(evt){
      let cords = webMercatorUtils.webMercatorToGeographic(evt.mapPoint);
      console.log(cords.x);
      console.log(cords.y);
    
    
    
  });
   });

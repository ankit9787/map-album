import { AfterViewInit, Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
import * as geojson from 'geojson';
const iconRetinaUrl = './assets/marker-icon-2x.png';
const iconUrl = './assets/marker-icon.png';
const shadowUrl = './assets/marker-shadow.png';
const iconDefault = L.icon({
iconRetinaUrl,
iconUrl,
shadowUrl,
iconSize: [25, 41],
iconAnchor: [12, 41],
popupAnchor: [1, -34],
tooltipAnchor: [16, -28],
shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  private map: any;
  abc = false;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 24.726875, 77.871094 ],
      zoom: 5
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3
    });

    tiles.addTo(this.map);

    L.marker([24.726875, 77.871094]).addTo(this.map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();


    this.map.on('click', this.onMapClick, this);

    
  }

  onMapClick(e: any) {
    var popup = L.popup();
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(this.map);
}
  constructor() { } 

  ngAfterViewInit(): void { 
    this.initMap();
  }

  addMarker(): void {
    L.marker([67.8282, -98.5795]).addTo(this.map)
    .bindPopup('New marker added')
    .openPopup();
  }

  createMarker(){
    console.log("hello")
    var geojsonFeature:any = [{
      "type": "Feature",
      "properties": {
          "name": "Coors Field",
          "amenity": "Baseball Stadium",
          "popupContent": "This is where the Rockies play!"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [78, 22]
      }
  }];

  L.geoJSON(geojsonFeature).addTo(this.map);

var states:any = [{
  "type": "Feature",
  "properties": {"party": "Republican"},
  "geometry": {
      "type": "Polygon",
      "coordinates": [[
          [-104.05, 48.99],
          [-97.22,  48.98],
          [-96.58,  45.94],
          [-104.03, 45.94],
          [-104.05, 48.99]
      ]]
  }
}, {
  "type": "Feature",
  "properties": {"party": "Democrat"},
  "geometry": {
      "type": "Polygon",
      "coordinates": [[
          [-109.05, 41.00],
          [-102.06, 40.99],
          [-102.03, 36.99],
          [-109.04, 36.99],
          [-109.05, 41.00]
      ]]
  }
}];

console.log(states);


L.geoJSON(states).addTo(this.map);


  }

}

    // var marker = L.marker([20.726875, 77.871094]).on('click', onClick);
    // function onClick(e: any) {alert(e.latlng);}
    // marker.addTo(this.map)


//   L.geoJSON(geojsonFeature, {
//     pointToLayer: function (feature, latlng) {
//         return L.circleMarker(latlng, geojsonMarkerOptions);
//     }
// }).addTo(this.map);

  // "type": "LineString",
  //       "coordinates": [[78, 22], [79, 21], [79, 17]]

//   var geojsonMarkerOptions = {
//     radius: 8,
//     fillColor: "#ff7800",
//     color: "#000",
//     weight: 1,
//     opacity: 1,
//     fillOpacity: 0.8
// };

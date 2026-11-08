import { Component } from '@angular/core';
import { GoogleMapsModule, MapAdvancedMarker } from '@angular/google-maps';

@Component({
  selector: 'app-contact',
  imports: [GoogleMapsModule, MapAdvancedMarker],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  readonly center: google.maps.LatLngLiteral = {
    lat: 43.656163,
    lng: -79.462725,
  };
  readonly zoom = 12;
  readonly mapOptions: google.maps.MapOptions = {
    mapId: 'DEMO_MAP_ID',
  };
}

import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

declare var google;

@Component({
  selector: 'app-todo-map',
  templateUrl: './todo-map.component.html',
  styleUrls: ['./todo-map.component.scss'],
})
export class TodoMapComponent implements OnInit {
  @Input() latitude;
  @Input() longitude;

  @ViewChild('map') map: ElementRef;

  constructor() {}

  ngOnInit() {
    /**
     * Creamos un objeto `LatLng` que indicará la posición exacta donde fué creada la tarea.
     * Aquí ya podemos utilizar las variables `this.latitude` y `this.longitude` que el padre
     * de éste componente declara.
     * El padre debe llamar a éste componente de la siguiente manera:
     * <app-todo-map [latitude]="LATITUDE" [longitude]="LONGITUDE"></app-todo-map>
     */
    const todoLatLng = { lat: Number(this.latitude), lng: Number(this.longitude) };

    // Inicializamos el mapa.
    this.map = new google.maps.Map(this.map.nativeElement, {
      center: todoLatLng,
      zoom: 12,
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      // Una vez que el mapa haya iniciado, creamos un marcador.
      const marker = new google.maps.Marker({
        position: todoLatLng,
        map: this.map,
        title: '¡Hola!',
      });
    });
  }
}

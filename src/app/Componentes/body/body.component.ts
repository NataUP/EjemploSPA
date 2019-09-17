import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  libro1: string = "CRONICA DE UNA MUERTE ANUNCIADA";
  estado1: boolean = false;

  libro2: string = "BAJO LA MISMA ESTRELLA";
  estado2: boolean = false;

  libro3: string = "CORALINE";
  estado3: boolean = false;

  estadoAlquiler1: boolean = false; 
  
  estadoBoton1: boolean = true;

  estadoCon1: boolean = true;

  estadoAlquiler2: boolean = false; 
  
  estadoBoton2: boolean = true;

  estadoCon2: boolean = true;

  estadoAlquiler3: boolean = false; 
  
  estadoBoton3: boolean = true;

  estadoCon3: boolean = true;





}

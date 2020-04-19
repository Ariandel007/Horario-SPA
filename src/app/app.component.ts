import { Component, OnInit } from '@angular/core';
import { HoraService } from './_services/hora.service';
import { Hora } from './_models/hora';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //Horas
  horas: Hora[];
  horaPost: any = {};
  idhorainput: number;
  horaInicio: string;
  horaFin: string;

  //Salones



  //Instructores


  //Cursos


  constructor(private horaService: HoraService) {}

  ngOnInit() {
    this.horaPost = {};
    this.horaPost.id = this.idhorainput;
    this.horaPost.time = [this.horaInicio, this.horaFin];
    this.loadHoras();
  }

  loadHoras() {
    this.horaService.getHoras().subscribe((response) => {
      this.horas = response;
    }, error => {
      console.log('Error');
    });
  }

  crearHora() {
    this.horaService.createHoras(this.horaPost).subscribe(next => {
      console.log('todokul');
    }, error => {
      console.log('error')
    });
  }

}

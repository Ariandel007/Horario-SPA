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
  it: string;
  ft: string;
  //Salones



  //Instructores


  //Cursos


  constructor(private horaService: HoraService) {}

  ngOnInit() {
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
    console.log(this.horaPost);
    console.log(this.it);
    console.log(this.ft);

    this.horaPost.time = [this.it, this.ft];

    console.log(this.horaPost);

    this.horaService.createHoras(this.horaPost).subscribe(next => {
      console.log('todokul');
    }, error => {
      console.log('error');
    });
  }


}

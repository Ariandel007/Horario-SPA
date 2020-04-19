import { Component, OnInit } from '@angular/core';
import { HoraService } from './_services/hora.service';
import { Hora } from './_models/hora';
import { Salon } from './_models/salon';
import { SalonService } from './_services/salon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //selecionNvageacion
  selectNav = 1;

  //Horas
  horas: Hora[];
  horaPost: any = {};
  it: string;
  ft: string;
  //Salones
  salones: Salon[];
  salonPost: any = {};



  //Instructores


  //Cursos


  constructor(private horaService: HoraService, private salonService: SalonService) {}

  ngOnInit() {
    this.loadHoras();
    this.loadSalones();
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
      console.log('todokul con las horas');
      this.loadHoras();
    }, error => {
      console.log('error');
    });
  }

  loadSalones() {
    this.salonService.getSalones().subscribe((response) => {
      this.salones = response;

    }, error => {
      console.log('Error');
    });
  }


  crearSalon() {
    console.log(this.salonPost);
    this.salonService.createSalones(this.salonPost).subscribe(next => {
        console.log('todokul con los salones');
        this.loadSalones();
      }, error => {
        console.log('error');
      });

  }



}

import { Component, OnInit } from '@angular/core';
import { HoraService } from './_services/hora.service';
import { Hora } from './_models/hora';
import { Salon } from './_models/salon';
import { SalonService } from './_services/salon.service';
import { Curso } from './_models/curso';
import { CursoService } from './_services/curso.service';
import { HorarioService } from './_services/horario.service';

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
    inst1: any = {};
    inst2: any = {};

  //Cursos
  cursos: Curso[];
  cursoPost: any = {};

  //mejor horario
  mejorHorario: any = {};

  constructor(private horaService: HoraService, private salonService: SalonService,
              private cursoService: CursoService, private horarioService: HorarioService) {}

  ngOnInit() {
    this.loadHoras();
    this.loadSalones();
    this.loadCursos();
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



  loadCursos() {
    this.cursoService.getCursos().subscribe((response) =>{
      this.cursos = response;
    }, error => {
      console.log('Error');
    });
  }

  crearCurso() {
    this.cursoPost.instructors = [this.inst1, this.inst2];

    this.cursoService.createCursos(this.cursoPost).subscribe(next => {
      console.log('todokul con los cursos');
      this.loadCursos();
    }, error => {
      console.log('error');
    });

  }

  getSelectNav(){
    return this.selectNav;
  }

  setSelectNav(n: number){
    this.selectNav = n;
    return this.selectNav;
  }

  loadCalculoMejorHorario() {
    this.horarioService.getMejorHorario().subscribe((response) => {
        this.mejorHorario = response;
        console.log(this.mejorHorario);
    }, error => {
      console.log('Error');
   });
  }

}

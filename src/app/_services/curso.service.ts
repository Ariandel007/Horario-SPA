import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../_models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.baseUrl + 'cursos');
  }

  createCursos(curso: Curso) {
    return this.http.post(this.baseUrl + 'cursos', curso);
  }

}

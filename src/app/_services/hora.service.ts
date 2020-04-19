import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hora } from '../_models/hora';

@Injectable({
  providedIn: 'root'
})
export class HoraService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getHoras(): Observable<Hora[]> {
    return this.http.get<Hora[]>(this.baseUrl + 'horas');
  }

  createHoras(hora: Hora) {
    return this.http.post(this.baseUrl + 'horas', hora);
  }

}

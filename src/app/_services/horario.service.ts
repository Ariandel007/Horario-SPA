import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMejorHorario() {
    return this.http.get(this.baseUrl + 'horarios');
  }
}



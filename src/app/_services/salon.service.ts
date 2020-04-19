import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salon } from '../_models/salon';


@Injectable({
  providedIn: 'root'
})
export class SalonService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getSalones(): Observable<Salon[]>{
    return this.http.get<Salon[]>(this.baseUrl + 'salones');
  }

  createSalones(salon: Salon) {
    return this.http.post(this.baseUrl + 'salones', salon);
  }

}

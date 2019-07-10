import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from '../models/pizza.model';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  constructor(private http: HttpClient) { }

  getPizzas(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>('assets/api/pizzas.json');
  }
}

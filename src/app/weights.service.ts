import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeightsService {

  //private _weightsUrl = 'http://localhost:3000/api/user'

  constructor(private http: HttpClient) { }

  
  getWeights(id){
    return this.http.get<any>(`http://localhost:3000/api/user/${id}`)
  }
}


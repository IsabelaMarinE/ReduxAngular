import { HttpClient, HttpHeaders } from '@angular/common/http'                            ;
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  /**********************
  * Get all Characters
  ***********************/
  getAllCharacters(){
    return this.http.get(`${environment.urlApi}/character`, httpOptions);
  }

  /**********************
  * Get Detail Character
  ***********************/
   getDetailCharacter(id:number){
    return this.http.get(`${environment.urlApi}/character/${id}`, httpOptions);
  }
  
}

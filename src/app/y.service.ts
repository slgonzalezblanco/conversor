import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YService {

  constructor(private http: HttpClient) { }

  getCambios(){
    return this.http.get(`https://api.vatcomply.com/rates`)
  }

  getOtherCa(base: any){
    return this.http.get(`https://api.vatcomply.com/rates?base=${base}`)
  
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  
  constructor(private httpClient:HttpClient) { }
  

  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/programs');
  }
  getVito(){
    return this.httpClient.get('http://127.0.0.1:8000/api/test2');
  }
  login(data:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/login', data);
  }
  getConsultancy(){
    return this.httpClient.get('http://127.0.0.1:8000/api/consultancy');
  }
  getTechnology(){
    return this.httpClient.get('http://127.0.0.1:8000/api/tbi');
  }
  getNegosyo(){
    return this.httpClient.get('http://127.0.0.1:8000/api/nc');
  }
  getShared(){
    return this.httpClient.get('http://127.0.0.1:8000/api/ssf');
  }
  getResearch(){
    return this.httpClient.get('http://127.0.0.1:8000/api/rdf');
  }
  getHigher(){
    return this.httpClient.get('http://127.0.0.1:8000/api/hei');
  }
  getMicro(){
    return this.httpClient.get('http://127.0.0.1:8000/api/msme');
  }
  getSector(){
    return this.httpClient.get('http://127.0.0.1:8000/api/priority');
  }
  getEconomic(){
    return this.httpClient.get('http://127.0.0.1:8000/api/economic');
  }
  insertData(data:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/programs', data);
  }
}

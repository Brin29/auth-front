import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly API_URL = "/authorization/prueba"
  readonly API_AUTH =  "/authorization/register"
  

  // Permite hacer las peticiones a la API
  constructor(private http: HttpClient) {
    
  }

  getInfo(){
    return  this.http.get(this.API_URL, { responseType:
      "text"
     });
  }

  registerUser(user:any){
    const myHeaders = new HttpHeaders({"Content-Type": "application/json"})
    return this.http.post(this.API_AUTH, user, {headers: myHeaders})
  }
}
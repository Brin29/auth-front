import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly API_URL = "http://localhost:8080/auth/register"

  users: any[];

  // Permite hacer las peticiones a la API
  constructor(private http: HttpClient) {
    this.users = [];
  }

  getInfo(){
    return  this.http.get<any[]>(this.API_URL);
  }

  registerUser(){

  }
}

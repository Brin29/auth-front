import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.viewData()
  }

  viewData(){
    this.authService.getInfo().subscribe({
      next: (data) => {
        this.authService.users = data;
      },
      error: (err) => {
        console.error(err)
      }
    })
  }

}

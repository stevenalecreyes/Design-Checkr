import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // You can add your login logic here
  login() {
    // Handle form submission, authentication, etc.
    console.log('Login button clicked');
  }
}

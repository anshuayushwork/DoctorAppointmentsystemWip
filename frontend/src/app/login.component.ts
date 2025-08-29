import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from './api.service';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [FormsModule],
  template: `
  <div class="card">
    <h3>Login</h3>
    <form (ngSubmit)="login()">
      <input [(ngModel)]="email" name="email" placeholder="Email" required />
      <input [(ngModel)]="password" name="password" type="password" placeholder="Password" required />
      <select [(ngModel)]="role" name="role">
        <option>PATIENT</option>
        <option>DOCTOR</option>
      </select>
      <button type="submit">Login</button>
    </form>
    <p>New here? <a routerLink="/signup">Signup</a></p>
  </div>
  `
})
export class LoginComponent {
  email=''; password=''; role='PATIENT';
  constructor(private api: ApiService, private router: Router){}
  login(){
    this.api.login(this.email, this.password).subscribe(user=>{
      if(!user){ alert('Invalid'); return; }
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate([user.role === 'DOCTOR' ? '/doctor' : '/patient']);
    }, _ => alert('Login failed'));
  }
}

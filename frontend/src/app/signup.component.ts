import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  standalone: true,
  selector: 'app-signup',
  imports: [FormsModule],
  template: `
  <div class="card">
    <h3>Signup</h3>
    <form (ngSubmit)="signup()">
      <input [(ngModel)]="name" name="name" placeholder="Full name" required />
      <input [(ngModel)]="email" name="email" placeholder="Email" required />
      <input [(ngModel)]="phone" name="phone" placeholder="Phone" />
      <input [(ngModel)]="password" name="password" type="password" placeholder="Password" required />
      <select [(ngModel)]="role" name="role">
        <option>PATIENT</option>
        <option>DOCTOR</option>
      </select>
      <button type="submit">Create account</button>
    </form>
  </div>
  `
})
export class SignupComponent {
  name=''; email=''; phone=''; password=''; role='PATIENT';
  constructor(private api: ApiService, private router: Router){}
  signup(){
    this.api.signup({name:this.name,email:this.email,phone:this.phone,password:this.password,role:this.role})
      .subscribe(u=>{ localStorage.setItem('user', JSON.stringify(u)); this.router.navigate([this.role==='DOCTOR'?'/doctor':'/patient']);},
      _=> alert('Signup failed'));
  }
}

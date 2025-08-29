import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <nav>
      <a routerLink="/">Login</a>
      <a routerLink="/signup">Signup</a>
      <a routerLink="/patient">Patient</a>
      <a routerLink="/doctor">Doctor</a>
      <a routerLink="/appointments">Appointments</a>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}

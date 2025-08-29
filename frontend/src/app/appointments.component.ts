import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';

@Component({
  standalone: true,
  selector: 'app-appointments',
  imports: [CommonModule],
  template: `
  <div class="card">
    <h3>Your Appointments</h3>
    <div *ngFor="let a of appts" class="card">
      <div>{{a.date}} {{a.time}} — <strong>{{a.patientName}}</strong> <span class="badge">{{a.status}}</span></div>
    </div>
  </div>
  `
})
export class AppointmentsComponent implements OnInit {
  appts:any[]=[]; user:any = JSON.parse(localStorage.getItem('user')||'null');
  constructor(private api: ApiService){}
  ngOnInit(){ this.api.allAppointments().subscribe(a=> this.appts = a); }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-doctor-dashboard',
  template: `
  <div class="card">
    <h3>Incoming Requests</h3>
    <div *ngFor="let a of pending" class="card">
      <div><strong>{{a.patientName}}</strong> — {{a.date}} {{a.time}} <span class="badge">{{a.status}}</span></div>
      <div>
        <button (click)="set(a,'APPROVED')">Approve</button>
        <button (click)="set(a,'REJECTED')">Reject</button>
      </div>
    </div>
  </div>
  `
})
export class DoctorDashboardComponent implements OnInit {
  pending:any[]=[]; user:any = JSON.parse(localStorage.getItem('user')||'null');
  constructor(private api: ApiService){}
  ngOnInit(){
    this.api.allAppointments().subscribe(all=>{
      this.pending = all.filter((a:any)=> a.status==='PENDING'); // in real world, filter by doctorId === user.id
    });
  }
  set(a:any, v:string){ this.api.setStatus(a.id, v).subscribe(_=>{ a.status=v; }); }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from './api.service';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-patient-dashboard',
  template: `
  <div class="row">
    <div class="col card">
      <h3>Doctors</h3>
      <div *ngFor="let d of doctors" class="card">
        <div class="row">
          <div class="col">
            <strong>{{d.name}}</strong> <span class="badge">{{d.specialization}}</span>
          </div>
          <div class="col">
            <select [(ngModel)]="slot[d.id]">
              <option *ngFor="let s of defaultSlots" [value]="s">{{s}}</option>
            </select>
            <button (click)="book(d)">Book</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
})
export class PatientDashboardComponent implements OnInit {
  doctors:any[]=[]; slot:Record<number,string>={}; defaultSlots=['09:00','09:30','10:00','11:00'];
  user:any = JSON.parse(localStorage.getItem('user')||'null');
  constructor(private api: ApiService){}
  ngOnInit(){
    this.api.getDoctors().subscribe(ds=> this.doctors = ds);
  }
  book(d:any){
    const time = this.slot[d.id] || this.defaultSlots[0];
    const appt = { doctorId: d.id, patientId: this.user?.id || 0, patientName: this.user?.name || 'Guest', date: new Date().toISOString().slice(0,10), time };
    this.api.book(appt).subscribe(_=> alert('Booked!'));
  }
}
